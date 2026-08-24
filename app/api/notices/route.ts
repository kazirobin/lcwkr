// app/api/notices/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectDB } from "@/lib/mongodb";
import { Notice } from "@/models/Notice";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const role = session.user.role;
    let filter: Record<string, any> = {};

    if (role === "student") {
      filter = { audience: { $in: ["all", "students"] } };
    } else if (role === "teacher") {
      filter = { audience: { $in: ["all", "teachers"] } };
    }

    const notices = await Notice.find(filter)
      .populate("author", "name role")
      .sort({ priority: -1, createdAt: -1 })
      .lean();

    return NextResponse.json({ success: true, data: notices });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to fetch notice bulletins" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user.role !== "admin" && session.user.role !== "teacher")) {
      return NextResponse.json({ error: "Forbidden. Authorized personnel only." }, { status: 403 });
    }

    const { title, content, audience, priority } = await req.json();

    if (!title || !content) {
      return NextResponse.json({ error: "Title and content are required fields." }, { status: 400 });
    }

    await connectDB();
    const notice = await Notice.create({
      title,
      content,
      audience: audience || "all",
      priority: priority || "normal",
      author: session.user.id,
    });

    return NextResponse.json({ success: true, data: notice }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to publish notice" }, { status: 500 });
  }
}