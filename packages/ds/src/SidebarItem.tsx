import { ButtonHTMLAttributes, ReactNode } from "react";
import { Badge } from "./Badge";

export interface SidebarItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon?: ReactNode;
  badge?: number;
  children?: ReactNode;
}

/**
 * SidebarItem — Mentorfy.DS
 * Espelha o component set "Sidebar Item" do Figma (State x Icon x Badge).
 * O estado Hover é resolvido via CSS (:hover); Default/Active/Disabled
 * são props, já que dependem de estado da aplicação (rota atual, permissão).
 * O contador reutiliza o próprio componente Badge.
 */
export function SidebarItem({
  active = false,
  icon,
  badge,
  className = "",
  disabled,
  children,
  ...props
}: SidebarItemProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`relative flex w-full items-center gap-8 rounded-md px-12 py-8 text-body-sm font-medium transition-colors disabled:opacity-40 disabled:pointer-events-none ${
        active ? "bg-hover-strong text-ink-brand" : "text-ink hover:bg-hover"
      } ${className}`}
      {...props}
    >
      {active && (
        <span className="absolute left-0 top-0 h-full w-[3px] rounded-l-md bg-brand" />
      )}
      {icon}
      <span className="flex-1 text-left">{children}</span>
      {typeof badge === "number" && (
        <Badge color="brand" size="sm">
          {badge}
        </Badge>
      )}
    </button>
  );
}
