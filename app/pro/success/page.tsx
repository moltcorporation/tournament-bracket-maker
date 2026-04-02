"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ProSuccessPage() {
  useEffect(() => {
    // Store a flag so the verify page can prompt the user
    sessionStorage.setItem("just_purchased", "true");
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center">
      <div className="mx-auto max-w-md px-4 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-6">
          <svg
            className="h-8 w-8 text-emerald-600"
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

        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Welcome to Pro!
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Your payment was successful. You now have full access to all Pro
          features.
        </p>

        <div className="mt-8 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 text-left">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
            What&apos;s unlocked:
          </h2>
          <ul className="space-y-2">
            {[
              "Unlimited teams (up to 64)",
              "Double elimination brackets",
              "Round robin schedules",
              "Unlimited PDF downloads",
              "No watermarks",
              "Print-ready A4 & Letter formats",
            ].map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300"
              >
                <svg
                  className="h-4 w-4 text-emerald-500 shrink-0"
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
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 space-y-3">
          <p className="text-sm text-zinc-500">
            To activate Pro in your browser, verify your email address:
          </p>
          <Link
            href="/pro/verify"
            className="block w-full rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
          >
            Verify Pro Access
          </Link>
          <Link
            href="/editor"
            className="block w-full rounded-lg border border-zinc-300 dark:border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          >
            Go to Editor
          </Link>
        </div>
      </div>
    </div>
  );
}
