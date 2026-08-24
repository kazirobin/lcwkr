// app/register/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { User, Mail, Lock, AlertCircle, Loader2 } from "lucide-react";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "At least 6 characters").required("Password is required"),
  role: Yup.string().required(),
  class: Yup.string().required("Class/Course is required"),
});

export default function RegisterPage() {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10">
      <div className="w-full max-w-md space-y-6 rounded-2xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white shadow-lg shadow-indigo-500/30">
            LMS
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white">Create Account</h2>
          <p className="mt-1 text-xs text-slate-400">Register new portal user</p>
        </div>

        {errorMsg && (
          <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-950/40 p-3 text-sm text-red-400">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            role: "student",
            class: "HSK-1",
            studentId: "",
            section: "A",
          }}
          validationSchema={RegisterSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setErrorMsg(null);
            try {
              const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
              });
              const data = await res.json();

              if (!res.ok) {
                setErrorMsg(data.error || "Failed to register.");
                setSubmitting(false);
              } else {
                router.push("/login");
              }
            } catch (e) {
              setErrorMsg("Server error occurred.");
              setSubmitting(false);
            }
          }}
        >
          {({ values, isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase text-slate-400">Full Name</label>
                <div className="relative mt-1">
                  <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
                  <Field
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Tanvir Hossain"
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 py-2 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500"
                  />
                </div>
                <ErrorMessage name="name" component="div" className="mt-1 text-xs text-red-400" />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-slate-400">Email Address</label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
                  <Field
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="student@school.com"
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 py-2 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500"
                  />
                </div>
                <ErrorMessage name="email" component="div" className="mt-1 text-xs text-red-400" />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-slate-400">Password</label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
                  <Field
                    type="password"
                    name="password"
                    autoComplete="new-password"
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 py-2 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500"
                  />
                </div>
                <ErrorMessage name="password" component="div" className="mt-1 text-xs text-red-400" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold uppercase text-slate-400">Role</label>
                  <Field
                    as="select"
                    name="role"
                    className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 py-2 px-3 text-sm text-white outline-none focus:border-indigo-500"
                  >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Admin</option>
                  </Field>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase text-slate-400">Class</label>
                  <Field
                    as="select"
                    name="class"
                    className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 py-2 px-3 text-sm text-white outline-none focus:border-indigo-500"
                  >
                    <option value="HSK-1">HSK-1</option>
                    <option value="HSK-2">HSK-2</option>
                    <option value="Bengali-A1">Bengali A1</option>
                  </Field>
                </div>
              </div>

              {values.role === "student" && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold uppercase text-slate-400">Student Roll</label>
                    <Field
                      type="text"
                      name="studentId"
                      placeholder="STU-001"
                      className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 py-2 px-3 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase text-slate-400">Section</label>
                    <Field
                      type="text"
                      name="section"
                      placeholder="A"
                      className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 py-2 px-3 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Sign Up"}
              </button>
            </Form>
          )}
        </Formik>

        <div className="text-center text-xs text-slate-400">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-indigo-400 hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}