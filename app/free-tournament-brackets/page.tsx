import type { Metadata } from "next";
import Link from "next/link";
import LandingPageLayout from "../components/landing-page-layout";
import { breadcrumbJsonLd, getCrossLinks } from "../components/seo-helpers";

export const metadata: Metadata = {
  title:
    "Free Tournament Brackets - Printable PDF Brackets | Bracket Maker",
  description:
    "Create free tournament brackets for any event. No account, no watermark on screen, no hidden fees. Supports 4 to 8 teams with single elimination. Print-ready PDF download included.",
  openGraph: {
    title: "Free Tournament Brackets - Printable PDF Brackets",
    description:
      "Create free tournament brackets. No account needed. Supports 4-8 teams with PDF download.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Tournament Brackets - Printable PDF Brackets",
    description:
      "Create free tournament brackets. No account, no hidden fees. 4-8 teams with PDF export.",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Free Tournament Brackets", href: "/free-tournament-brackets" },
];

export default function FreeTournamentBracketsPage() {
  return (
    <LandingPageLayout
      breadcrumbs={breadcrumbs}
      crossLinks={getCrossLinks("/free-tournament-brackets")}
      jsonLd={breadcrumbJsonLd(breadcrumbs)}
    >
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Free Tournament Brackets
      </h1>
      <p className="mt-3 text-slate-400">
        No account, no credit card — just brackets
      </p>

      <div className="mt-8 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6">
        <h2 className="text-base font-semibold text-white">
          What&apos;s included free
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Up to 8 teams",
              desc: "Perfect for small tournaments, office competitions, and pickup games.",
            },
            {
              title: "Single elimination",
              desc: "The classic format — lose once and you're out. Fast and decisive.",
            },
            {
              title: "PDF download",
              desc: "Print-ready bracket sized for letter or A4 paper. 2 downloads per day.",
            },
            {
              title: "No account needed",
              desc: "Start creating immediately. Your data stays in your browser.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="text-sm font-semibold text-emerald-400">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 prose prose-invert max-w-none">
        <p>
          Most bracket tools either require you to create an account before
          doing anything, plaster your bracket with watermarks, or hit you with
          a paywall the moment you try to download. Our free tier skips all of
          that. You open the editor, type in your teams, and get a clean bracket
          you can print or screenshot — no sign-up, no email, no friction.
        </p>
        <p>
          The free tier is built for the most common use case: a small
          tournament with 4 to 8 teams in single elimination format. That
          covers a huge range of real events — a cornhole tournament at a
          barbecue, a ping pong bracket at the office, a weekend basketball
          shootout, a Mario Kart bracket at a party, or a debate tournament at
          school. If your event has 8 teams or fewer and uses single
          elimination, you never need to pay a cent.
        </p>
        <p>
          The bracket editor runs entirely in your browser using client-side
          rendering. When you type team names and generate a bracket, nothing is
          sent to a server. Your data never leaves your device. This also means
          the tool works offline once the page has loaded — useful if you&apos;re
          setting up brackets at a venue with spotty wifi.
        </p>
        <p>
          If you outgrow the free tier — more than 8 teams, double elimination,
          round robin, saved brackets, or watermark-free PDFs — the Pro plan is
          $3.99/month or $24.99/year. But for the one-off 4 or 8 team bracket
          that most people need, free is all you need.
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-slate-800/60 bg-[#0d1220] p-6">
        <h2 className="text-base font-semibold text-white">
          Free vs Pro comparison
        </h2>
        <div className="mt-4 space-y-3 text-sm">
          {[
            { feature: "Team limit", free: "8 teams", pro: "64 teams" },
            {
              feature: "Formats",
              free: "Single elimination",
              pro: "Single, double, round robin",
            },
            {
              feature: "PDF exports",
              free: "2 per day",
              pro: "Unlimited",
            },
            {
              feature: "Watermark",
              free: "On PDF",
              pro: "None",
            },
            {
              feature: "Saved brackets",
              free: "No",
              pro: "Yes",
            },
            {
              feature: "Custom branding",
              free: "No",
              pro: "Yes",
            },
          ].map((row) => (
            <div
              key={row.feature}
              className="flex items-center justify-between border-b border-slate-800/40 pb-3 last:border-0 last:pb-0"
            >
              <span className="text-slate-400">{row.feature}</span>
              <div className="flex gap-8 text-right">
                <span className="w-28 text-slate-500">{row.free}</span>
                <span className="w-28 text-emerald-400">{row.pro}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/editor"
          className="rounded-lg bg-emerald-500 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
        >
          Create a Free Bracket
        </Link>
        <Link
          href="/pricing"
          className="rounded-lg border border-slate-700 px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:bg-slate-800 transition-colors"
        >
          Compare Plans
        </Link>
      </div>
    </LandingPageLayout>
  );
}
