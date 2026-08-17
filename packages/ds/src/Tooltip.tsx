import { ReactNode } from "react";

export type TooltipPosition = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  content: ReactNode;
  hint?: ReactNode;
  position?: TooltipPosition;
  children: ReactNode;
  /** Força a exibição (usado nesta documentação); em uso real o tooltip
   * aparece no hover, via CSS puro — sem JS. */
  visible?: boolean;
  className?: string;
}

const bubblePosition: Record<TooltipPosition, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-8",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-8",
  left: "right-full top-1/2 -translate-y-1/2 mr-8",
  right: "left-full top-1/2 -translate-y-1/2 ml-8",
};

const arrowPosition: Record<TooltipPosition, string> = {
  top: "top-full left-1/2 -translate-x-1/2 -mt-4",
  bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-4",
  left: "left-full top-1/2 -translate-y-1/2 -ml-4",
  right: "right-full top-1/2 -translate-y-1/2 -mr-4",
};

/**
 * Tooltip — Mentorfy.DS
 * Espelha o component set "Tooltip" do Figma (Position x Hint).
 * Interatividade 100% via CSS (`group`/`group-hover`) — sem estado, sem
 * "use client". `visible` força a exibição (usado nesta documentação).
 */
export function Tooltip({ content, hint, position = "top", children, visible, className = "" }: TooltipProps) {
  return (
    <span className={`group relative inline-flex ${className}`}>
      {children}
      <span
        className={`pointer-events-none absolute z-10 flex flex-col items-center gap-2 whitespace-nowrap rounded-md bg-hover-strong px-12 py-8 text-body-xs text-ink shadow-lg transition-opacity ${
          visible ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        } ${bubblePosition[position]}`}
      >
        <span className="font-medium">{content}</span>
        {hint && <span className="text-ink-muted">{hint}</span>}
        <span className={`absolute h-8 w-8 rotate-45 bg-hover-strong ${arrowPosition[position]}`} />
      </span>
    </span>
  );
}
