// app/api/attendance/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";
import "@/models/User"; // Pre-register User schema for populate
import { Attendance } from "@/models/Attendance";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get("studentId");
    const targetClass = searchParams.get("class");
    const date = searchParams.get("date");

    const query: Record<string, any> = {};

    if (session.user.role === "student") {
      query.student = new mongoose.Types.ObjectId(session.user.id);
    } else {
      if (studentId && mongoose.Types.ObjectId.isValid(studentId)) {
        query.student = new mongoose.Types.ObjectId(studentId);
      }
      if (targetClass) query.class = targetClass;
      if (date) query.date = date;
    }

    const records = await Attendance.find(query)
      .populate("student", "name email studentId class section")
      .populate("markedBy", "name")
      .sort({ date: -1 })
      .lean();

    return NextResponse.json({ success: true, data: records });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to retrieve attendance logs" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user.role !== "admin" && session.user.role !== "teacher")) {
      return NextResponse.json(
        { error: "Forbidden. Administrative or Teacher rights required." },
        { status: 403 }
      );
    }

    const body = await req.json();
    const { records, date, class: className, section } = body;

    if (!records || !Array.isArray(records) || records.length === 0 || !date || !className) {
      return NextResponse.json(
        { error: "Incomplete request. Please provide records array, date, and class." },
        { status: 400 }
      );
    }

    await connectDB();

    if (!mongoose.Types.ObjectId.isValid(session.user.id)) {
      return NextResponse.json({ error: "Invalid session user ID" }, { status: 400 });
    }

    const markedByObjectId = new mongoose.Types.ObjectId(session.user.id);

    // Validate and format operations with explicit ObjectId instances
    const bulkOperations = [];

    for (const rec of records) {
      if (!rec.studentId || !mongoose.Types.ObjectId.isValid(rec.studentId)) {
        continue; // skip malformed entries
      }

      const validStatus = ["present", "absent", "late"].includes(rec.status)
        ? rec.status
        : "present";

      const studentObjectId = new mongoose.Types.ObjectId(rec.studentId);

      bulkOperations.push({
        updateOne: {
          filter: {
            student: studentObjectId,
            date: String(date),
          },
          update: {
            $set: {
              student: studentObjectId,
              date: String(date),
              status: validStatus,
              markedBy: markedByObjectId,
              class: String(className),
              section: section ? String(section) : "",
            },
          },
          upsert: true,
        },
      });
    }

    if (bulkOperations.length === 0) {
      return NextResponse.json(
        { error: "No valid student records found to update." },
        { status: 400 }
      );
    }

    const result = await Attendance.bulkWrite(bulkOperations, { ordered: false });

    return NextResponse.json({
      success: true,
      message: `Updated attendance records (${result.upsertedCount} created, ${result.modifiedCount} updated).`,
    });
  } catch (error: any) {
    console.error("Attendance bulkWrite error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to persist attendance" },
      { status: 500 }
    );
  }
}