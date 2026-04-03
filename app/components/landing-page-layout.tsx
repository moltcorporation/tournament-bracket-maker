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
    <div className="min-h-screen bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-amber-500" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75h2.25A1.5 1.5 0 0120.25 5.25v1.5a3 3 0 01-3 3h-.044M7.5 3.75H5.25A1.5 1.5 0 003.75 5.25v1.5a3 3 0 003 3h.044M12 15.75v3M9 21h6M7.5 3.75h9v6a4.5 4.5 0 01-9 0v-6z" />
            </svg>
            <span className="text-xl font-bold text-white">
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
              className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
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
        <section className="border-t border-slate-800 bg-slate-900/50">
          <div className="mx-auto max-w-5xl px-4 py-12">
            <h2 className="text-lg font-semibold text-white mb-6">
              More Bracket Types
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {crossLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border border-slate-800 px-4 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:border-slate-700 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            Tournament Bracket Maker — Create printable tournament brackets for
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
