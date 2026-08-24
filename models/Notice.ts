// models/Notice.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export interface INotice extends Document {
  title: string;
  content: string;
  audience: "all" | "students" | "teachers";
  priority: "normal" | "urgent";
  author: mongoose.Types.ObjectId;
}

const NoticeSchema = new Schema<INotice>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    audience: { type: String, enum: ["all", "students", "teachers"], default: "all" },
    priority: { type: String, enum: ["normal", "urgent"], default: "normal" },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const Notice: Model<INotice> = mongoose.models.Notice || mongoose.model<INotice>("Notice", NoticeSchema);