import { ButtonHTMLAttributes, ReactNode } from "react";
import { Badge } from "./Badge";

export interface SidebarItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon?: ReactNode;
  badge?: number;
  /** Mostra um caret à direita, para itens que expandem uma lista (ex: "Alunos" → Turmas, Certificados). */
  expandable?: boolean;
  /** Rotaciona o caret quando o submenu está aberto. Só tem efeito com `expandable`. */
  expanded?: boolean;
  children?: ReactNode;
}

/**
 * SidebarItem — Mentorfy.DS
 * Espelha o component set "Sidebar Item" do Figma (State x Right), reconstruído
 * a partir da sidebar real do produto (página "❖ · Sidebar" do Bússola.DS).
 *
 * - State (Default/Hover/Active/Disabled): Hover é resolvido via CSS (:hover);
 *   Default/Active/Disabled são props, já que dependem de estado da aplicação
 *   (rota atual, permissão).
 * - Right (None/Caret/Badge): mutuamente exclusivos, como na sidebar real —
 *   um item ou expande uma lista (`expandable`) ou mostra um contador (`badge`),
 *   nunca os dois. O contador reutiliza o próprio componente Badge.
 * - O estado Active inclui uma barra de destaque de 4px na cor da marca à
 *   esquerda do item (bg-surface + borda esquerda bg-brand).
 */
export function SidebarItem({
  active = false,
  icon,
  badge,
  expandable = false,
  expanded = false,
  className = "",
  disabled,
  children,
  ...props
}: SidebarItemProps) {
  // Sem `children`, é o item icon-only da sidebar colapsada: centraliza o
  // ícone em vez de alinhar à esquerda com um espaço reservado pro texto.
  const hasLabel = children != null && children !== false;
  return (
    <button
      type="button"
      disabled={disabled}
      aria-current={active ? "page" : undefined}
      className={`relative flex h-[40px] w-full shrink-0 items-center gap-8 rounded-md text-body-sm font-medium transition-colors disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-nav ${
        hasLabel ? "justify-start pl-12 pr-12" : "justify-center px-0"
      } ${active ? "bg-surface text-ink-brand" : "text-ink hover:bg-hover"} ${className}`}
      {...props}
    >
      {active && (
        <span className="absolute left-0 top-0 h-full w-[4px] rounded-l-md bg-brand" />
      )}
      {icon}
      {hasLabel && <span className="flex-1 text-left">{children}</span>}
      {hasLabel && expandable ? (
        <svg
          width="12"
          height="6"
          viewBox="0 0 10 5"
          fill="none"
          className={`shrink-0 text-nav-muted transition-transform ${expanded ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M0.835 0.835L5 4.165L9.165 0.835" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        typeof badge === "number" && (
          <Badge color="brand" size="sm">
            {badge}
          </Badge>
        )
      )}
    </button>
  );
}
