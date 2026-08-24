// app/api/quizzes/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectDB } from "@/lib/mongodb";
import { Quiz } from "@/models/Quiz";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
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

    const quiz = await Quiz.findById(params.id, projection).lean();
    if (!quiz) {
      return NextResponse.json({ error: "Requested quiz not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: quiz });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to load quiz metadata" }, { status: 500 });
  }
}