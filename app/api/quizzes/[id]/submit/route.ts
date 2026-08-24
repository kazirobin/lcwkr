// app/api/quizzes/[id]/submit/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectDB } from "@/lib/mongodb";
import { Quiz } from "@/models/Quiz";
import { QuizSubmission } from "@/models/QuizSubmission";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { selectedAnswers } = await req.json();

    if (!selectedAnswers || !Array.isArray(selectedAnswers)) {
      return NextResponse.json({ error: "Invalid submission format" }, { status: 400 });
    }

    await connectDB();
    const quiz = await Quiz.findById(params.id).lean();

    if (!quiz) {
      return NextResponse.json({ error: "Quiz record not found" }, { status: 404 });
    }

    let score = 0;
    const answerMap = new Map<number, number>();
    selectedAnswers.forEach((ans: { questionIndex: number; selectedOptionIndex: number }) => {
      answerMap.set(ans.questionIndex, ans.selectedOptionIndex);
    });

    const detailedReview = quiz.questions.map((q, idx) => {
      const selectedIndex = answerMap.has(idx) ? answerMap.get(idx)! : -1;
      const isCorrect = selectedIndex === q.correctOptionIndex;
      if (isCorrect) score += 1;

      return {
        questionIndex: idx,
        questionText: q.questionText,
        options: q.options,
        userSelectedIndex: selectedIndex,
        correctOptionIndex: q.correctOptionIndex,
        isCorrect,
        explanation: q.explanation,
      };
    });

    const totalQuestions = quiz.questions.length;
    const percentage = Number(((score / totalQuestions) * 100).toFixed(2));
    const isPassed = percentage >= 50;

    const submission = await QuizSubmission.create({
      quiz: quiz._id,
      student: session.user.id,
      selectedAnswers,
      score,
      totalQuestions,
      percentage,
      isPassed,
      submittedAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      data: {
        submissionId: submission._id,
        score,
        totalQuestions,
        percentage,
        isPassed,
        detailedReview,
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to grade assessment" }, { status: 500 });
  }
}