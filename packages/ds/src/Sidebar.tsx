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
      className={`flex h-full flex-col border-r border-nav-line bg-nav transition-[width] ${
        collapsed ? "w-[88px]" : "w-[280px]"
      } ${className}`}
    >
      {header && (
        <div
          className={`flex h-[64px] shrink-0 items-center border-b border-nav-line ${
            collapsed ? "px-12" : "px-24"
          }`}
        >
          {header}
        </div>
      )}
      <nav className="flex flex-1 flex-col gap-0 overflow-y-auto p-12">{children}</nav>
      {footer && <div className="flex h-[72px] shrink-0 items-center border-t border-nav-line px-20">{footer}</div>}
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

export interface SidebarGroupLabelProps {
  children?: ReactNode;
  className?: string;
}

/**
 * Label de seção da sidebar (ex: "GESTÃO", "MENTORIAS", "CLIENTES" no Figma):
 * DM Sans Bold 11px, uppercase, letter-spacing aberto, cor muted.
 */
export function SidebarGroupLabel({ children, className = "" }: SidebarGroupLabelProps) {
  return (
    <p
      className={`px-8 pt-4 pb-6 text-[11px] leading-[16.5px] font-bold uppercase tracking-[1.2px] text-nav-muted ${className}`}
    >
      {children}
    </p>
  );
}
