// app/login/page.tsx
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Lock, Mail, AlertCircle, Loader2 } from "lucide-react";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function LoginPage() {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md space-y-6 rounded-2xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white shadow-lg shadow-indigo-500/30">
            LMS
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white">System Login</h2>
          <p className="mt-1 text-xs text-slate-400">School & Language Learning Management</p>
        </div>

        {errorMsg && (
          <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-950/40 p-3 text-sm text-red-400">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setErrorMsg(null);
            try {
              const res = await signIn("credentials", {
                email: values.email.trim().toLowerCase(),
                password: values.password,
                redirect: false,
              });

              if (res?.error || !res?.ok) {
                setErrorMsg("Invalid email or password.");
                setSubmitting(false);
              } else {
                // Hard redirect to immediately load the session without hanging
                window.location.href = "/dashboard";
              }
            } catch (err) {
              setErrorMsg("An unexpected error occurred.");
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase text-slate-400">Email Address</label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
                  <Field
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="admin@school.com"
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500"
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
                    autoComplete="current-password"
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500"
                  />
                </div>
                <ErrorMessage name="password" component="div" className="mt-1 text-xs text-red-400" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Sign In"}
              </button>
            </Form>
          )}
        </Formik>

        <div className="text-center text-xs text-slate-400">
          Need an account?{" "}
          <Link href="/register" className="font-semibold text-indigo-400 hover:underline">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}