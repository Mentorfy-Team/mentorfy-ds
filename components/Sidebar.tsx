"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Sidebar as DsSidebar, SidebarGroupLabel, SidebarItem } from "@brunosantossss/ds";

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0 text-nav-muted">
      <circle cx="6.1" cy="6.1" r="4.6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12.5 12.5L9.6 9.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

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
      { label: "Sidebar", href: "/components/sidebar" },
      { label: "Switch", href: "/components/switch" },
      { label: "Checkbox", href: "/components/checkbox" },
      { label: "Radio", href: "/components/radio" },
      { label: "Rating", href: "/components/rating" },
      { label: "Select", href: "/components/select" },
      { label: "Tabs", href: "/components/tabs" },
      { label: "Modal", href: "/components/modal" },
      { label: "Tooltip", href: "/components/tooltip" },
      { label: "Table", href: "/components/table" },
    ],
  },
];

/**
 * Menu de navegação do site de docs — dogfooding do próprio componente
 * Sidebar do pacote (@brunosantossss/ds), em vez de um <nav> à mão à parte.
 * Sem header/footer/collapsed (o site não precisa recolher o menu) — só
 * SidebarGroupLabel + SidebarItem com `href`, que renderiza <a> (o Next
 * ainda faz navegação client-side normalmente, sem next/link, porque o
 * <a> aponta pra uma rota interna do próprio app).
 */
export function Sidebar() {
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  // Filtra por label (case-insensitive) e esconde grupos que zeraram —
  // mesma ideia da busca do reui.io, adaptada: aqui são só ~19 itens (não
  // ~90 categorias), então um filtro simples em memória já resolve, sem
  // precisar de lib de busca.
  const filteredNav = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return nav;
    return nav
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => item.label.toLowerCase().includes(q)),
      }))
      .filter((section) => section.items.length > 0);
  }, [query]);

  return (
    <div className="hidden h-full shrink-0 md:block">
      <DsSidebar
        header={
          <div className="flex h-36 w-full items-center gap-8 rounded-md bg-nav-chip px-12">
            <SearchIcon />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Buscar componente..."
              aria-label="Buscar componente"
              className="w-full bg-transparent text-body-xs text-ink placeholder:text-nav-muted outline-none"
            />
          </div>
        }
      >
        {filteredNav.length === 0 ? (
          <p className="px-8 py-12 text-body-xs text-nav-muted">Nada encontrado para &quot;{query}&quot;.</p>
        ) : (
          filteredNav.map((section, i) => (
            <div key={section.group} className="contents">
              <SidebarGroupLabel className={i > 0 ? "mt-14" : undefined}>{section.group}</SidebarGroupLabel>
              {section.items.map((item) => (
                <SidebarItem key={item.href} href={item.href} active={pathname === item.href}>
                  {item.label}
                </SidebarItem>
              ))}
            </div>
          ))
        )}
      </DsSidebar>
    </div>
  );
}
