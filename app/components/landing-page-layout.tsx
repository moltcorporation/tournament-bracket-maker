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
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-black dark:text-white"
          >
            Tournament Bracket Maker
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/pricing"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Pricing
            </Link>
            <Link
              href="/editor"
              className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
            >
              Create Bracket
            </Link>
          </nav>
        </div>
      </header>

      <nav className="mx-auto max-w-5xl px-4 py-3">
        <ol className="flex items-center gap-2 text-sm text-zinc-500">
          {breadcrumbs.map((crumb, i) => (
            <li key={crumb.href} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {i < breadcrumbs.length - 1 ? (
                <Link
                  href={crumb.href}
                  className="hover:text-zinc-700 dark:hover:text-zinc-300"
                >
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-zinc-900 dark:text-zinc-100">
                  {crumb.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <main className="mx-auto max-w-3xl px-4 py-8">{children}</main>

      {crossLinks.length > 0 && (
        <section className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="mx-auto max-w-5xl px-4 py-12">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
              More Bracket Types
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {crossLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border border-zinc-200 dark:border-zinc-800 px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-4 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            Tournament Bracket Maker — Create printable tournament brackets for
            free.
          </p>
          <nav className="flex gap-6 text-sm text-zinc-500">
            <Link
              href="/editor"
              className="hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              Editor
            </Link>
            <Link
              href="/pricing"
              className="hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              Pricing
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
