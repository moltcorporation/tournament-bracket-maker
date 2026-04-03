import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing - Tournament Bracket Maker",
  description:
    "Upgrade to Pro for unlimited teams, double elimination, round robin, and more. Plans start at $3.99/mo.",
};

const MONTHLY_LINK = "https://buy.stripe.com/fZu5kD09l2pX0b32s43Nm0L";
const YEARLY_LINK = "https://buy.stripe.com/cNifZh7BN1lT9LDfeQ3Nm0M";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Perfect for small tournaments",
    features: [
      "Up to 8 teams",
      "Single elimination brackets",
      "2 PDF downloads per day",
      "Watermarked PDFs",
      "SVG bracket preview",
    ],
    cta: "Start Free",
    href: "/editor",
    highlighted: false,
  },
  {
    name: "Pro Monthly",
    price: "$3.99",
    period: "/month",
    description: "For league organizers and coaches",
    features: [
      "Unlimited teams (up to 64)",
      "Single elimination",
      "Double elimination",
      "Round robin",
      "Unlimited PDF downloads",
      "No watermarks",
      "Print-ready A4 & Letter",
    ],
    cta: "Get Pro Monthly",
    href: MONTHLY_LINK,
    highlighted: true,
    external: true,
  },
  {
    name: "Pro Yearly",
    price: "$24.99",
    period: "/year",
    description: "Best value — save 48%",
    features: [
      "Everything in Pro Monthly",
      "Save $22.89 per year",
      "Priority feature requests",
    ],
    cta: "Get Pro Yearly",
    href: YEARLY_LINK,
    highlighted: false,
    external: true,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-white"
          >
            Tournament Bracket Maker
          </Link>
          <Link
            href="/editor"
            className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-amber-400 transition-colors"
          >
            Open Editor
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Create tournament brackets for any sport or competition. Start free,
            upgrade when you need more teams or formats.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 flex flex-col ${
                plan.highlighted
                  ? "border-amber-500 bg-slate-900 shadow-lg ring-2 ring-amber-500"
                  : "border-slate-800 bg-slate-900"
              }`}
            >
              {plan.highlighted && (
                <span className="inline-block self-start rounded-full bg-amber-900 px-3 py-1 text-xs font-semibold text-amber-300 mb-4">
                  Most Popular
                </span>
              )}
              <h2 className="text-xl font-bold text-white">
                {plan.name}
              </h2>
              <div className="mt-2 flex items-baseline">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="ml-1 text-slate-400">{plan.period}</span>
                )}
              </div>
              <p className="mt-2 text-sm text-slate-400">{plan.description}</p>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg
                      className="h-5 w-5 text-amber-500 shrink-0 mt-0.5"
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
                    <span className="text-slate-300">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {"external" in plan && plan.external ? (
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 block rounded-lg px-4 py-3 text-center text-sm font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-amber-500 text-slate-950 hover:bg-amber-400"
                      : "border border-slate-700 text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  {plan.cta}
                </a>
              ) : (
                <Link
                  href={plan.href}
                  className={`mt-8 block rounded-lg px-4 py-3 text-center text-sm font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-amber-500 text-slate-950 hover:bg-amber-400"
                      : "border border-slate-700 text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  {plan.cta}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400">
            Already have Pro?{" "}
            <Link
              href="/pro/verify"
              className="text-amber-500 hover:text-amber-400 underline"
            >
              Verify your access
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
