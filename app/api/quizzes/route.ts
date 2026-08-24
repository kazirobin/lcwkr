// app/api/quizzes/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectDB } from "@/lib/mongodb";
import { Quiz } from "@/models/Quiz";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const isStudent = session.user.role === "student";

    const projection = isStudent
      ? { "questions.correctOptionIndex": 0, "questions.explanation": 0 }
      : {};

    const quizzes = await Quiz.find({}, projection)
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ success: true, data: quizzes });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to load quizzes" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user.role !== "admin" && session.user.role !== "teacher")) {
      return NextResponse.json({ error: "Forbidden. Only instructors can author examinations." }, { status: 403 });
    }

    const { title, description, targetLevel, timeLimitMinutes, questions } = await req.json();

    if (!title || !targetLevel || !timeLimitMinutes || !questions || !Array.isArray(questions) || questions.length === 0) {
      return NextResponse.json({ error: "Incomplete quiz payload provided." }, { status: 400 });
    }

    for (const q of questions) {
      if (!q.questionText || !Array.isArray(q.options) || q.options.length < 2 || q.correctOptionIndex === undefined) {
        return NextResponse.json({ error: "Each question must have text, options, and a valid correct index assigned." }, { status: 400 });
      }
    }

    await connectDB();
    const quiz = await Quiz.create({
      title,
      description,
      targetLevel,
      timeLimitMinutes: Number(timeLimitMinutes),
      totalMarks: questions.length,
      createdBy: session.user.id,
      questions,
    });

    return NextResponse.json({ success: true, data: quiz }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Quiz creation failed" }, { status: 500 });
  }
}