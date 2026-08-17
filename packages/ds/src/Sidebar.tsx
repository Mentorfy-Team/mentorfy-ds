import { ReactNode } from "react";

export interface SidebarProps {
  collapsed?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
}

/**
 * Sidebar — Mentorfy.DS
 * Espelha o componente "Sidebar" do Figma (Layout: Expanded/Collapsed).
 * É um contêiner de layout — o conteúdo da navegação é composto por
 * quem usa, com <SidebarItem> (e <SidebarSubmenu> para os subitens),
 * já que ativo/rota/permissão dependem da aplicação.
 */
export function Sidebar({ collapsed = false, header, footer, children, className = "" }: SidebarProps) {
  return (
    <aside
      className={`flex h-full flex-col border-r border-line bg-page transition-[width] ${
        collapsed ? "w-[88px]" : "w-[280px]"
      } ${className}`}
    >
      {header && <div className="border-b border-line p-16">{header}</div>}
      <nav className="flex flex-1 flex-col gap-4 overflow-y-auto p-12">{children}</nav>
      {footer && <div className="border-t border-line p-16">{footer}</div>}
    </aside>
  );
}

export interface SidebarSubmenuProps {
  children?: ReactNode;
  className?: string;
}

/** Agrupa subitens de navegação com recuo e linha vertical, como "Turmas/Certificados" no Figma. */
export function SidebarSubmenu({ children, className = "" }: SidebarSubmenuProps) {
  return <div className={`ml-24 mt-2 flex flex-col gap-2 border-l border-line pl-12 ${className}`}>{children}</div>;
}
