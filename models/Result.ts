// models/Result.ts
import mongoose, { Schema, Document, Model } from "mongoose";
import { ISubjectMark } from "@/types";

export interface IResult extends Document {
  student: mongoose.Types.ObjectId;
  examName: string;
  class: string;
  section?: string;
  subjects: ISubjectMark[];
  totalMarksObtained: number;
  totalPossibleMarks: number;
  totalPercentage: number;
  overallGrade: string;
  publishedBy: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const ResultSchema = new Schema<IResult>(
  {
    student: { type: Schema.Types.ObjectId, ref: "User", required: true },
    examName: { type: String, required: true, trim: true },
    class: { type: String, required: true },
    section: { type: String, default: "" },
    subjects: [
      {
        subjectName: { type: String, required: true },
        marksObtained: { type: Number, required: true, min: 0 },
        totalMarks: { type: Number, required: true, min: 1 },
        grade: { type: String, required: true },
      },
    ],
    totalMarksObtained: { type: Number, required: true },
    totalPossibleMarks: { type: Number, required: true },
    totalPercentage: { type: Number, required: true },
    overallGrade: { type: String, required: true },
    publishedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const Result: Model<IResult> =
  mongoose.models.Result || mongoose.model<IResult>("Result", ResultSchema);