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
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <circle cx="16" cy="16" r="12" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
        <path d="M12 16l3 3 5-6" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
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
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <path d="M16 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" strokeWidth="1.5" />
      </svg>
    ),
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
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <path d="M10 6h12v10a6 6 0 01-12 0V6z" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" strokeWidth="1.5" />
        <path d="M10 9H7a3 3 0 000 6h1" stroke="#f59e0b" strokeWidth="1" opacity="0.4" />
        <path d="M22 9h3a3 3 0 010 6h-1" stroke="#f59e0b" strokeWidth="1" opacity="0.4" />
        <rect x="14" y="20" width="4" height="4" rx="1" fill="#f59e0b" opacity="0.2" />
        <rect x="12" y="24" width="8" height="2" rx="1" fill="#f59e0b" opacity="0.15" />
      </svg>
    ),
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0b0f1a]">
      <header className="border-b border-amber-500/10 bg-[#0b0f1a]/90 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-extrabold text-white tracking-tight"
          >
            <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
              <path d="M14 8h20v14a10 10 0 01-20 0V8z" fill="url(#ptbg)" />
              <path d="M14 12H8a4 4 0 000 8h2a6 6 0 004-2.2V12z" fill="url(#pth)" opacity="0.8" />
              <path d="M34 12h6a4 4 0 010 8h-2a6 6 0 01-4-2.2V12z" fill="url(#pth)" opacity="0.8" />
              <rect x="20" y="30" width="8" height="6" rx="1" fill="#b45309" />
              <rect x="16" y="36" width="16" height="4" rx="2" fill="#92400e" />
              <defs>
                <linearGradient id="ptbg" x1="24" y1="8" x2="24" y2="30" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fbbf24" /><stop offset="1" stopColor="#d97706" />
                </linearGradient>
                <linearGradient id="pth" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="#f59e0b" /><stop offset="1" stopColor="#b45309" />
                </linearGradient>
              </defs>
            </svg>
            Bracket<span className="text-amber-400">Maker</span>
          </Link>
          <Link
            href="/editor"
            className="rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-sm font-bold text-white hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20"
          >
            Open Editor
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-white tracking-tight uppercase">
            Choose Your Plan
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
              className={`rounded-2xl border p-8 flex flex-col relative ${
                plan.highlighted
                  ? "border-amber-500/40 bg-[#0d1220] shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/20 sport-stripe"
                  : "border-slate-800/60 bg-[#0d1220]"
              }`}
            >
              <div className={`flex items-center gap-3 ${plan.highlighted ? "pt-1" : ""}`}>
                {plan.icon}
                <div>
                  {plan.highlighted && (
                    <span className="inline-block rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-0.5 text-xs font-bold text-amber-400 mb-1 uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                  <h2 className="text-xl font-black text-white uppercase tracking-wide">
                    {plan.name}
                  </h2>
                </div>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-black text-white">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="ml-1 text-slate-500">{plan.period}</span>
                )}
              </div>
              <p className="mt-2 text-sm text-slate-500">{plan.description}</p>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`h-5 w-5 shrink-0 mt-0.5 ${plan.highlighted ? "text-amber-500" : "text-slate-600"}`}
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
                  className={`mt-8 block rounded-lg px-4 py-3 text-center text-sm font-bold transition-all uppercase tracking-wide ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/20"
                      : "border border-slate-700/60 text-slate-300 hover:bg-slate-800/50 hover:border-amber-500/30"
                  }`}
                >
                  {plan.cta}
                </a>
              ) : (
                <Link
                  href={plan.href}
                  className={`mt-8 block rounded-lg px-4 py-3 text-center text-sm font-bold transition-all uppercase tracking-wide ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/20"
                      : "border border-slate-700/60 text-slate-300 hover:bg-slate-800/50 hover:border-amber-500/30"
                  }`}
                >
                  {plan.cta}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Already have Pro?{" "}
            <Link
              href="/pro/verify"
              className="text-amber-400 hover:text-amber-300 underline"
            >
              Verify your access
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
