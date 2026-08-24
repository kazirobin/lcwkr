// models/Quiz.ts
import mongoose, { Schema, Document, Model } from "mongoose";

const QuizSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: "" },
    targetLevel: { type: String, required: true },
    timeLimitMinutes: { type: Number, required: true, default: 15 },
    totalMarks: { type: Number, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    questions: [
      {
        questionText: { type: String, required: true },
        options: [{ type: String, required: true }],
        correctOptionIndex: { type: Number, required: true },
        explanation: { type: String, default: "" },
      },
    ],
  },
  { timestamps: true }
);

export const Quiz = mongoose.models.Quiz || mongoose.model("Quiz", QuizSchema);