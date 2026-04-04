import Link from "next/link";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface CrossLink {
  href: string;
  label: string;
}

interface LandingPageLayoutProps {
  children: React.ReactNode;
  breadcrumbs: BreadcrumbItem[];
  crossLinks: CrossLink[];
  jsonLd: object;
}

export default function LandingPageLayout({
  children,
  breadcrumbs,
  crossLinks,
  jsonLd,
}: LandingPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0b0f1a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="border-b border-amber-500/10 bg-[#0b0f1a]/90 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5"
          >
            <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
              <path d="M14 8h20v14a10 10 0 01-20 0V8z" fill="url(#lplTbg)" />
              <path d="M14 12H8a4 4 0 000 8h2a6 6 0 004-2.2V12z" fill="url(#lplTh)" opacity="0.8" />
              <path d="M34 12h6a4 4 0 010 8h-2a6 6 0 01-4-2.2V12z" fill="url(#lplTh)" opacity="0.8" />
              <rect x="20" y="30" width="8" height="6" rx="1" fill="#b45309" />
              <rect x="16" y="36" width="16" height="4" rx="2" fill="#92400e" />
              <defs>
                <linearGradient id="lplTbg" x1="24" y1="8" x2="24" y2="30" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fbbf24" /><stop offset="1" stopColor="#d97706" />
                </linearGradient>
                <linearGradient id="lplTh" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="#f59e0b" /><stop offset="1" stopColor="#b45309" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-lg font-extrabold text-white tracking-tight">
              Bracket<span className="text-amber-400">Maker</span>
            </span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/pricing"
              className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/editor"
              className="rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-sm font-bold text-white hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20"
            >
              Create Bracket
            </Link>
          </nav>
        </div>
      </header>

      <nav className="mx-auto max-w-5xl px-4 py-3">
        <ol className="flex items-center gap-2 text-sm text-slate-500">
          {breadcrumbs.map((crumb, i) => (
            <li key={crumb.href} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {i < breadcrumbs.length - 1 ? (
                <Link
                  href={crumb.href}
                  className="hover:text-amber-400 transition-colors"
                >
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-white">
                  {crumb.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <main className="mx-auto max-w-3xl px-4 py-8">{children}</main>

      {crossLinks.length > 0 && (
        <section className="border-t scoreboard-divider border-slate-800/30 bg-[#0c1020]">
          <div className="mx-auto max-w-5xl px-4 py-12">
            <h2 className="text-lg font-black text-white mb-6 uppercase tracking-wide">
              More Bracket Types
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {crossLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border border-slate-800/60 bg-[#0d1220] px-4 py-3 text-sm text-slate-400 hover:bg-amber-500/[0.03] hover:border-amber-500/20 hover:text-amber-400 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-slate-800/60">
        <div className="mx-auto max-w-5xl px-4 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600">
            Tournament Bracket Maker &mdash; Create printable tournament brackets for
            free.
          </p>
          <nav className="flex gap-6 text-sm text-slate-500">
            <Link
              href="/editor"
              className="hover:text-amber-400 transition-colors"
            >
              Editor
            </Link>
            <Link
              href="/pricing"
              className="hover:text-amber-400 transition-colors"
            >
              Pricing
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
