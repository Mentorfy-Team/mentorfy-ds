import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between px-24 py-16 border-b border-line">
      <Link href="/" className="flex items-center gap-12">
        <span className="text-body-md font-bold text-ink">Mentorfy.DS</span>
        <span className="px-8 py-2 rounded-full bg-hover text-body-xs text-ink-muted">v0.1</span>
      </Link>
      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
        className="text-body-xs text-ink-muted hover:text-ink transition-colors"
      >
        GitHub
      </a>
    </header>
  );
}
