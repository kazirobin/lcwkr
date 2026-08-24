// models/QuizSubmission.ts
import mongoose, { Schema, Document, Model } from "mongoose";

const QuizSubmissionSchema = new Schema(
  {
    quiz: { type: Schema.Types.ObjectId, ref: "Quiz", required: true },
    student: { type: Schema.Types.ObjectId, ref: "User", required: true },
    selectedAnswers: [
      {
        questionIndex: { type: Number, required: true },
        selectedOptionIndex: { type: Number, required: true },
      },
    ],
    score: { type: Number, required: true },
    totalQuestions: { type: Number, required: true },
    percentage: { type: Number, required: true },
    isPassed: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export const QuizSubmission =
  mongoose.models.QuizSubmission || mongoose.model("QuizSubmission", QuizSubmissionSchema);