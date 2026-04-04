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
    <div className="min-h-screen bg-[#0a0e1a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="border-b border-slate-800/60 bg-[#0a0e1a]/90 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5"
          >
            <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5 text-emerald-400" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75h2.25A1.5 1.5 0 0120.25 5.25v1.5a3 3 0 01-3 3h-.044M7.5 3.75H5.25A1.5 1.5 0 003.75 5.25v1.5a3 3 0 003 3h.044M12 15.75v3M9 21h6M7.5 3.75h9v6a4.5 4.5 0 01-9 0v-6z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              Bracket Maker
            </span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/pricing"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/editor"
              className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
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
                  className="hover:text-slate-300 transition-colors"
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
        <section className="border-t border-slate-800/60 bg-[#0c1020]">
          <div className="mx-auto max-w-5xl px-4 py-12">
            <h2 className="text-lg font-semibold text-white mb-6">
              More Bracket Types
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {crossLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border border-slate-800/60 bg-[#0d1220] px-4 py-3 text-sm text-slate-400 hover:bg-emerald-500/[0.03] hover:border-emerald-500/20 hover:text-emerald-400 transition-all"
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
              className="hover:text-slate-300 transition-colors"
            >
              Editor
            </Link>
            <Link
              href="/pricing"
              className="hover:text-slate-300 transition-colors"
            >
              Pricing
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
