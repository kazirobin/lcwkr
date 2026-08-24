// app/api/seed/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";

export async function GET() {
  try {
    await connectDB();
    const hashedPassword = await bcrypt.hash("123456", 10);

    const testUsers = [
      { name: "Super Admin", email: "admin@school.com", password: hashedPassword, role: "admin" },
      { name: "Teacher Faruk", email: "teacher@school.com", password: hashedPassword, role: "teacher", class: "HSK-1" },
      { name: "Student Rahim", email: "student@school.com", password: hashedPassword, role: "student", studentId: "STU-001", class: "HSK-1", section: "A" },
    ];

    for (const u of testUsers) {
      await User.findOneAndUpdate({ email: u.email }, { $set: u }, { upsert: true, new: true });
    }

    return NextResponse.json({
      success: true,
      message: "Database seeded! Use password: '123456' for all accounts.",
      accounts: ["admin@school.com", "teacher@school.com", "student@school.com"],
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}