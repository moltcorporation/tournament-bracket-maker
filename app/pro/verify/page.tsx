"use client";

import { useState } from "react";
import Link from "next/link";
import { verifyProAccess } from "../../../lib/pro-access";

export default function VerifyProPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "not_found">("idle");

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    const verified = await verifyProAccess(email.trim());
    setStatus(verified ? "success" : "not_found");
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="mx-auto max-w-md px-4 text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-green-900 flex items-center justify-center mb-6">
            <svg
              className="h-8 w-8 text-amber-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white">
            Pro Access Verified!
          </h1>
          <p className="mt-3 text-slate-400">
            All Pro features are now unlocked in this browser.
          </p>
          <Link
            href="/editor"
            className="mt-8 inline-block rounded-lg bg-amber-500 px-8 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
          >
            Open Editor
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="mx-auto max-w-md px-4">
        <div className="text-center mb-8">
          <Link
            href="/"
            className="text-xl font-bold text-white"
          >
            Tournament Bracket Maker
          </Link>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h1 className="text-2xl font-bold text-white">
            Verify Pro Access
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Enter the email address you used during checkout to activate Pro
            features in this browser.
          </p>

          <form onSubmit={handleVerify} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-1"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="you@example.com"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-lg bg-amber-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-400 disabled:opacity-50 transition-colors"
            >
              {status === "loading" ? "Verifying..." : "Verify Access"}
            </button>
          </form>

          {status === "not_found" && (
            <div className="mt-4 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 p-4">
              <p className="text-sm text-red-700 dark:text-red-300">
                No active Pro subscription found for this email. Make sure you
                are using the same email you entered during Stripe checkout.
              </p>
              <Link
                href="/pricing"
                className="mt-2 inline-block text-sm text-red-600 dark:text-red-400 underline"
              >
                View pricing plans
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
