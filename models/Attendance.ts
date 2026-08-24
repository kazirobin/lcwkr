// models/Attendance.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAttendance extends Document {
  student: mongoose.Types.ObjectId;
  date: string;
  status: "present" | "absent" | "late";
  markedBy: mongoose.Types.ObjectId;
  class: string;
}

const AttendanceSchema = new Schema<IAttendance>(
  {
    student: { type: Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: String, required: true },
    status: { type: String, enum: ["present", "absent", "late"], default: "present" },
    markedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    class: { type: String, required: true },
  },
  { timestamps: true }
);

AttendanceSchema.index({ student: 1, date: 1 }, { unique: true });

export const Attendance: Model<IAttendance> =
  mongoose.models.Attendance || mongoose.model<IAttendance>("Attendance", AttendanceSchema);