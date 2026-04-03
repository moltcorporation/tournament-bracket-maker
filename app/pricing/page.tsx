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
    <div className="min-h-screen bg-white dark:bg-[#000a1f]">
      <header className="border-b-2 border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-3xl">🏆</div>
            <span className="text-xl font-bold text-[#001f3f] dark:text-[#ffc107]" style={{ fontFamily: "var(--font-playfair)" }}>
              Bracket Maker
            </span>
          </Link>
          <Link
            href="/editor"
            className="rounded-lg bg-[#001f3f] dark:bg-[#ffc107] px-4 py-2 text-sm font-medium text-white dark:text-[#001f3f] hover:shadow-lg transition-shadow"
          >
            Open Editor
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#001f3f] dark:text-white mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Create tournament brackets for any sport or competition. Start free, upgrade when you need unlimited teams and all bracket formats.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border-2 p-8 flex flex-col transition-all ${
                plan.highlighted
                  ? "border-[#ffc107] bg-gradient-to-b from-[#ffc107]/5 to-white dark:from-[#ffc107]/10 dark:to-[#000a1f] shadow-xl"
                  : "border-gray-200 dark:border-gray-800 bg-white dark:bg-[#000a1f] hover:border-[#ffc107] dark:hover:border-[#ffc107]"
              }`}
            >
              {plan.highlighted && (
                <span className="inline-block self-start rounded-full bg-[#ffc107] text-[#001f3f] px-4 py-1 text-xs font-bold mb-4">
                  🌟 MOST POPULAR
                </span>
              )}
              <h2 className="text-2xl font-bold text-[#001f3f] dark:text-white">
                {plan.name}
              </h2>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-bold text-[#001f3f] dark:text-[#ffc107]">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="ml-2 text-gray-600 dark:text-gray-400 font-semibold">{plan.period}</span>
                )}
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{plan.description}</p>

              <ul className="mt-8 space-y-4 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="text-[#ffc107] text-xl shrink-0 mt-0.5">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.external ? (
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 block rounded-lg px-6 py-3 text-center text-sm font-bold transition-all ${
                    plan.highlighted
                      ? "bg-[#ffc107] text-[#001f3f] hover:shadow-xl hover:scale-105"
                      : "bg-[#001f3f] text-white dark:bg-[#ffc107] dark:text-[#001f3f] hover:shadow-lg"
                  }`}
                >
                  {plan.cta} →
                </a>
              ) : (
                <Link
                  href={plan.href}
                  className={`mt-8 block rounded-lg px-6 py-3 text-center text-sm font-bold transition-all ${
                    plan.highlighted
                      ? "bg-[#ffc107] text-[#001f3f] hover:shadow-xl hover:scale-105"
                      : "bg-[#001f3f] text-white dark:bg-[#ffc107] dark:text-[#001f3f] hover:shadow-lg"
                  }`}
                >
                  {plan.cta}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#001f3f] to-[#000a1f] dark:from-[#001f3f] dark:to-[#000000] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Need a custom plan?</h3>
          <p className="mb-4 text-gray-100">Get in touch for team or organization licenses.</p>
          <p className="text-sm text-gray-300">We also offer white-label solutions for tournament organizers.</p>
        </div>

        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>
            Already have Pro?{" "}
            <Link
              href="/pro/verify"
              className="text-[#001f3f] dark:text-[#ffc107] font-bold hover:underline"
            >
              Verify your access →
            </Link>
          </p>
        </div>
      </main>

      <footer className="border-t-2 border-gray-200 dark:border-gray-800 mt-20">
        <div className="mx-auto max-w-5xl px-4 py-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>Tournament Bracket Maker — Free tournament bracket generator</p>
          <nav className="flex gap-6 justify-center mt-4 text-xs">
            <Link href="/editor" className="hover:text-[#001f3f] dark:hover:text-[#ffc107]">
              Create
            </Link>
            <Link href="/pricing" className="hover:text-[#001f3f] dark:hover:text-[#ffc107]">
              Pricing
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
