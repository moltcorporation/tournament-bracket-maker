import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import LandingPageLayout from "../components/landing-page-layout";
import { breadcrumbJsonLd, getCrossLinks } from "../components/seo-helpers";

const teamData: Record<
  number,
  { rounds: string; description: string; content: string }
> = {
  4: {
    rounds: "2 rounds (semifinals and final)",
    description:
      "Create a free 4 team bracket for small tournaments. Perfect for quick playoffs, office competitions, and pickup games. Download as a print-ready PDF.",
    content: `A 4 team bracket is the simplest and most common tournament format. With just two rounds — semifinals and a final — it is the fastest way to determine a winner from a small group of competitors.

Four-team brackets are ideal for situations where you have limited time or a small number of participants. Weekend pickup tournaments, office ping pong playoffs, family game nights, and small club competitions all work perfectly with this format. The entire tournament can be completed in as few as three games.

In a standard 4 team single elimination bracket, teams are seeded 1 through 4. The first semifinal matches seed 1 against seed 4, while the second pairs seed 2 against seed 3. This seeding ensures the two strongest teams are on opposite sides of the bracket and can only meet in the final.

Our bracket maker automatically handles seeding for you. Enter your four team or player names, and the tool generates a clean, professionally formatted bracket. Download it as a PDF to print and post at your venue, or share it digitally with participants. The free tier supports 4 team brackets with no limitations — create as many as you need.`,
  },
  8: {
    rounds: "3 rounds (quarterfinals, semifinals, final)",
    description:
      "Generate a free 8 team bracket with quarterfinals, semifinals, and finals. Ideal for youth sports, club tournaments, and league playoffs. Print-ready PDF export.",
    content: `An 8 team bracket is the sweet spot for most recreational and competitive tournaments. With three rounds — quarterfinals, semifinals, and a final — it provides enough depth to feel like a real competition while staying manageable in a single day or session.

Eight-team brackets are the go-to format for youth sports leagues, intramural competitions, and regional qualifiers. Basketball, volleyball, soccer, and tennis tournaments frequently use this size. In esports, 8-team brackets are common for weekly community tournaments and qualifier rounds.

Standard seeding in an 8 team bracket places the top seed against the eighth seed, second against seventh, and so on. This matchup structure rewards higher-seeded teams with theoretically easier first-round opponents and ensures the strongest teams meet later in the tournament.

With our bracket maker, creating an 8 team bracket takes seconds. Type in your team names, and the tool generates a clean SVG bracket with proper seeding, round labels, and connector lines. Download the PDF version for printing — it is optimized for standard paper sizes so you can post it at the gym, field, or gaming venue. The free tier fully supports 8 team single elimination brackets with up to two PDF downloads per day.`,
  },
  16: {
    rounds: "4 rounds (Round of 16, quarterfinals, semifinals, final)",
    description:
      "Make a 16 team bracket for mid-size tournaments. Four rounds from Round of 16 to the final. Clean PDF export for sports leagues, gaming tournaments, and events.",
    content: `A 16 team bracket delivers a full tournament experience with four rounds of competition. From the Round of 16 through quarterfinals, semifinals, and the final, every matchup builds anticipation as the field narrows to a single champion.

Sixteen-team brackets are standard for high school regional tournaments, company-wide competitions, and mid-size esports events. This format works well when you have enough teams for meaningful seeding but want to complete the tournament within a weekend. Each team plays a minimum of one game and a maximum of four, keeping the event contained.

Proper seeding becomes especially important at this size. A well-seeded 16 team bracket separates the top four seeds into different quarter-sections, ensuring the strongest teams face each other only in the later rounds. Our bracket maker handles this automatically — just enter your team names in order of seeding, and the bracket structure takes care of the rest.

At 16 teams, you may want to consider double elimination or round robin formats for a fairer competition. These Pro formats ensure no team goes home after a single bad game. Upgrade to Pro for unlimited access to all bracket formats, plus watermark-free PDFs and support for even larger tournaments.`,
  },
  32: {
    rounds: "5 rounds (Round of 32 through to the final)",
    description:
      "Create a 32 team bracket for large tournaments. Five competitive rounds with proper seeding. Download professional print-ready brackets as PDF.",
    content: `A 32 team bracket is built for serious tournaments. Five rounds of competition — from the Round of 32 all the way to the final — make this the format of choice for league playoffs, conference championships, and large-scale community events.

Thirty-two team brackets are commonly used in college conference tournaments, regional sports championships, and major esports qualifiers. The NCAA basketball conference tournaments, for example, often feature 32-team fields. At this scale, the bracket becomes a visual centerpiece of the event that players, fans, and organizers all follow closely.

Seeding and bracket placement are critical with 32 teams. The standard approach creates four sections of eight teams each, with the top four seeds anchoring separate sections. This structure means the number one and number two seeds cannot meet until the final, while the third and fourth seeds are placed to potentially meet in the semifinals. Our generator handles all of this seeding logic automatically.

With 32 teams, a printed bracket needs to be large and readable. Our PDF export is optimized for clarity at this size, with clean lines, legible team names, and properly spaced rounds. For the best results, print on tabloid or A3 paper. Pro users get watermark-free PDFs and access to double elimination format, which is popular at this bracket size for ensuring top teams get a fair chance.`,
  },
  64: {
    rounds: "6 rounds (Round of 64 through to the championship)",
    description:
      "Build a 64 team bracket for major tournaments and championships. Six rounds of competition with automatic seeding. Professional PDF brackets for printing.",
    content: `A 64 team bracket is the gold standard for major tournaments and championship events. Six rounds of elimination — from the Round of 64 to the championship game — create a dramatic progression that has made formats like March Madness iconic in sports culture.

Sixty-four team brackets are used for the biggest competitions: national championships, major esports tournaments, and large community events. The NCAA March Madness tournament is the most famous example, drawing millions of viewers who fill out brackets and follow every upset and Cinderella story. The same format works at any level, from a citywide gaming tournament to a corporate wellness competition.

At this scale, organization is everything. Proper seeding divides the 64 teams into four regions of 16, with the top four overall seeds placed in separate regions. Within each region, matchups follow standard seeding protocol so that the strongest teams are rewarded with the most favorable paths to the later rounds.

Our bracket maker supports 64 team brackets with Pro access. Enter all team names and the tool handles seeding, bracket structure, round labeling, and PDF generation automatically. The resulting bracket is print-ready and designed for large-format printing — post it on a wall, project it on a screen, or distribute copies to participants. Pro features include watermark-free exports, double elimination and round robin formats, and custom branding options.`,
  },
};

const validTeamCounts = [4, 8, 16, 32, 64];

export function generateStaticParams() {
  return validTeamCounts.map((n) => ({ n: String(n) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ n: string }>;
}): Promise<Metadata> {
  const { n } = await params;
  const count = parseInt(n, 10);
  const data = teamData[count];
  if (!data) return {};

  const title = `${count} Team Bracket Maker - Free Printable ${count} Team Tournament Bracket`;
  return {
    title,
    description: data.description,
    openGraph: {
      title,
      description: data.description,
      type: "website",
    },
  };
}

export default async function TeamBracketPage({
  params,
}: {
  params: Promise<{ n: string }>;
}) {
  const { n } = await params;
  const count = parseInt(n, 10);
  const data = teamData[count];

  if (!data) notFound();

  const currentHref = `/${count}-team-bracket`;
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: `${count} Team Bracket`, href: currentHref },
  ];

  return (
    <LandingPageLayout
      breadcrumbs={breadcrumbs}
      crossLinks={getCrossLinks(currentHref)}
      jsonLd={breadcrumbJsonLd(breadcrumbs)}
    >
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
        {count} Team Bracket Maker
      </h1>
      <p className="mt-3 text-zinc-500">{data.rounds}</p>

      <div className="mt-8 prose prose-zinc dark:prose-invert max-w-none">
        {data.content.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          href="/editor"
          className="rounded-lg bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-700 transition-colors"
        >
          Create a {count} Team Bracket — Free
        </Link>
        <Link
          href="/pricing"
          className="rounded-lg border border-zinc-300 dark:border-zinc-700 px-6 py-3 text-center text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
        >
          View Pro Plans
        </Link>
      </div>
    </LandingPageLayout>
  );
}
