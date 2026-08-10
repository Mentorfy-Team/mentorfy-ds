import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between px-24 py-16 border-b border-line">
      <Link href="/" className="flex items-center gap-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/mentorfy-logo.svg" alt="Mentorfy" className="h-[19px] w-auto" />
        <span className="px-8 py-2 rounded-full bg-hover text-body-xs text-ink-muted">v0.1</span>
      </Link>
      <nav className="flex items-center gap-24">
        <Link href="/sobre" className="text-body-xs text-ink-muted hover:text-ink transition-colors">
          Sobre a Bússola
        </Link>
        <Link href="/release-notes" className="text-body-xs text-ink-muted hover:text-ink transition-colors">
          Release Notes
        </Link>
        <a
          href="https://github.com/Mentorfy-Team/mentorfy-ds"
          target="_blank"
          rel="noreferrer"
          className="text-body-xs text-ink-muted hover:text-ink transition-colors"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
