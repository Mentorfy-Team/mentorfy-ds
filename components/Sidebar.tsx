import Link from "next/link";

const nav = [
  {
    group: "Foundations",
    items: [
      { label: "Colors", href: "/foundations/colors" },
      { label: "Typography", href: "/foundations/typography" },
      { label: "Grid & Spacing", href: "/foundations/spacing" },
    ],
  },
  {
    group: "Base Components",
    items: [
      { label: "Button", href: "/components/button" },
      { label: "Badge", href: "/components/badge" },
      { label: "Avatar", href: "/components/avatar" },
    ],
  },
  {
    group: "Complex Components",
    items: [
      { label: "Input", href: "/components/input" },
      { label: "Card", href: "/components/card" },
      { label: "Sidebar Item", href: "/components/sidebar-item" },
    ],
  },
];

export function Sidebar() {
  return (
    <nav className="w-[240px] shrink-0 border-r border-line px-16 py-24 hidden md:block">
      {nav.map((section) => (
        <div key={section.group} className="mb-24">
          <p className="text-body-xs uppercase tracking-wide text-ink-muted mb-8 px-8">
            {section.group}
          </p>
          <ul className="flex flex-col gap-2">
            {section.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-8 py-8 rounded-md text-body-sm text-ink hover:bg-hover transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
