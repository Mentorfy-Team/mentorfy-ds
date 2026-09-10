import { ButtonHTMLAttributes, Children, ReactNode } from "react";

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
      className={`flex h-full flex-col border-r border-nav-line bg-nav transition-[width] duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
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
      <nav aria-label="Sidebar" className="flex flex-1 flex-col gap-0 overflow-y-auto p-12">
        {children}
      </nav>
      {footer && <div className="flex h-[72px] shrink-0 items-center border-t border-nav-line px-20">{footer}</div>}
    </aside>
  );
}

export interface SidebarSubmenuProps {
  /** Controla se o painel está aberto. Sempre controlado por quem usa (útil pra manter só um módulo aberto por vez). */
  open: boolean;
  children?: ReactNode;
  className?: string;
}

/**
 * Painel colapsável de subitens (ex: "Alunos" → Turmas, Certificados).
 * Renderizado logo depois do `<SidebarItem expandable expanded={open}>` que
 * funciona como trigger — o SidebarSubmenu em si só cuida do conteúdo e da
 * animação, o caret/rotação já é responsabilidade do SidebarItem.
 *
 * Animação em duas camadas, sem JS medindo altura:
 * 1. O painel abre/fecha via CSS grid-template-rows (0fr → 1fr), a técnica
 *    padrão pra animar `height: auto` sem conhecer a altura do conteúdo.
 * 2. Cada filho recebe um fade + slide-in (`sidebar-item-in`, ver theme.css)
 *    com atraso crescente por índice — dá a sensação de "cascata" ao abrir,
 *    em vez de tudo aparecer de uma vez.
 */
export function SidebarSubmenu({ open, children, className = "" }: SidebarSubmenuProps) {
  const items = Children.toArray(children);
  return (
    <div
      className="grid transition-[grid-template-rows] duration-[380ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
      style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      aria-hidden={!open}
    >
      <div className="overflow-hidden">
        <div className={`flex flex-col gap-2 py-4 pl-24 ${className}`}>
          {items.map((child, i) => (
            <div key={i} style={{ animation: open ? `sidebar-item-in 260ms ease-out ${i * 45}ms both` : "none" }}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export interface SidebarSubItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children?: ReactNode;
}

/** Item filho de um SidebarSubmenu — sem ícone, o texto alinha com o ícone do trigger pai. */
export function SidebarSubItem({ active = false, className = "", children, ...props }: SidebarSubItemProps) {
  return (
    <button
      type="button"
      aria-current={active ? "page" : undefined}
      className={`flex h-[32px] w-full shrink-0 items-center rounded-md pl-[14px] pr-12 text-left text-body-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-nav ${
        active ? "bg-surface font-medium text-ink-brand" : "text-nav-muted hover:bg-hover hover:text-ink"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export interface SidebarSectionProps {
  label?: string;
  /** Mostra um divisor de 1px depois deste grupo. Desative no último grupo do submenu. */
  divider?: boolean;
  children?: ReactNode;
  className?: string;
}

/** Agrupa SidebarSubItems dentro de um SidebarSubmenu com um label pequeno (ex: "TURMAS 2026"). */
export function SidebarSection({ label, divider = true, children, className = "" }: SidebarSectionProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <p className="px-[14px] pb-1 pt-2 text-[10px] font-bold uppercase tracking-[1px] text-nav-muted/70">
          {label}
        </p>
      )}
      {children}
      {divider && <div className="mx-[14px] my-8 h-px shrink-0 bg-nav-line" />}
    </div>
  );
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
