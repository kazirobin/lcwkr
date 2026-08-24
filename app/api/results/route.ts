// app/api/results/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectDB } from "@/lib/mongodb";
import { Result } from "@/models/Result";
import { ISubjectMark } from "@/types";

function calculateGrade(pct: number): string {
  if (pct >= 80) return "A+";
  if (pct >= 70) return "A";
  if (pct >= 60) return "A-";
  if (pct >= 50) return "B";
  if (pct >= 40) return "C";
  if (pct >= 33) return "D";
  return "F";
}

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const { searchParams } = new URL(req.url);
    const targetStudent = searchParams.get("studentId");

    const query: Record<string, any> = {};

    if (session.user.role === "student") {
      query.student = session.user.id;
    } else if (targetStudent) {
      query.student = targetStudent;
    }

    const results = await Result.find(query)
      .populate("student", "name email studentId class section")
      .populate("publishedBy", "name")
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ success: true, data: results });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to fetch marksheet records" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user.role !== "admin" && session.user.role !== "teacher")) {
      return NextResponse.json({ error: "Forbidden. Administrative access required." }, { status: 403 });
    }

    const { studentId, examName, class: className, section, subjects } = await req.json();

    if (!studentId || !examName || !className || !subjects || !Array.isArray(subjects) || subjects.length === 0) {
      return NextResponse.json({ error: "Missing required fields or empty subject list." }, { status: 400 });
    }

    let totalObtained = 0;
    let totalMax = 0;

    const formattedSubjects: ISubjectMark[] = subjects.map((sub: any) => {
      const obtained = Number(sub.marksObtained);
      const total = Number(sub.totalMarks);
      const pct = (obtained / total) * 100;
      totalObtained += obtained;
      totalMax += total;

      return {
        subjectName: sub.subjectName,
        marksObtained: obtained,
        totalMarks: total,
        grade: calculateGrade(pct),
      };
    });

    const totalPercentage = Number(((totalObtained / totalMax) * 100).toFixed(2));
    const overallGrade = calculateGrade(totalPercentage);

    await connectDB();
    const newResult = await Result.create({
      student: studentId,
      examName,
      class: className,
      section: section || "",
      subjects: formattedSubjects,
      totalMarksObtained: totalObtained,
      totalPossibleMarks: totalMax,
      totalPercentage,
      overallGrade,
      publishedBy: session.user.id,
    });

    return NextResponse.json({ success: true, data: newResult }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to save results" }, { status: 500 });
  }
}