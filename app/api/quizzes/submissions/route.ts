// app/api/quizzes/submissions/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectDB } from "@/lib/mongodb";
import { QuizSubmission } from "@/models/QuizSubmission";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const { searchParams } = new URL(req.url);
    const quizId = searchParams.get("quizId");

    const query: Record<string, any> = {};

    if (session.user.role === "student") {
      query.student = session.user.id;
    }
    if (quizId) {
      query.quiz = quizId;
    }

    const submissions = await QuizSubmission.find(query)
      .populate("quiz", "title targetLevel totalMarks")
      .populate("student", "name email studentId")
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ success: true, data: submissions });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to load submission logs" }, { status: 500 });
  }
}