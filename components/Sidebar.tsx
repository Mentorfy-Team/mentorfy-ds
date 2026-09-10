"use client";

import { usePathname } from "next/navigation";
import { Sidebar as DsSidebar, SidebarGroupLabel, SidebarItem } from "@brunosantossss/ds";

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
  return (
    <div className="hidden h-full shrink-0 md:block">
      <DsSidebar>
        {nav.map((section, i) => (
          <div key={section.group} className="contents">
            <SidebarGroupLabel className={i > 0 ? "mt-14" : undefined}>{section.group}</SidebarGroupLabel>
            {section.items.map((item) => (
              <SidebarItem key={item.href} href={item.href} active={pathname === item.href}>
                {item.label}
              </SidebarItem>
            ))}
          </div>
        ))}
      </DsSidebar>
    </div>
  );
}
