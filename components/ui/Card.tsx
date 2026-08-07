import { HTMLAttributes, ReactNode } from "react";

export type CardStyle = "default" | "bordered";
export type CardPadding = "sm" | "md" | "lg";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  style_?: CardStyle;
  padding?: CardPadding;
  title?: string;
  footerLabel?: string;
  children?: ReactNode;
}

const paddingStyles: Record<CardPadding, string> = {
  sm: "p-16 gap-8",
  md: "p-24 gap-12",
  lg: "p-32 gap-16",
};

/**
 * Card — Mentorfy.DS
 * Espelha o component set "Card" do Figma (Style x Padding x Content).
 * `title` e `footerLabel` são opcionais — omitidos, o card renderiza
 * só o conteúdo (equivalente à variante Content=Simple no Figma).
 */
export function Card({
  style_ = "default",
  padding = "md",
  title,
  footerLabel,
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`flex flex-col rounded-lg bg-card ${
        style_ === "bordered" ? "border border-line" : ""
      } ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {title && <h3 className="text-body-md font-bold text-ink">{title}</h3>}
      <div className="text-body-sm text-ink-muted">{children}</div>
      {footerLabel && (
        <>
          <div className="border-t border-line" />
          <div className="flex justify-end">
            <span className="text-body-sm font-medium text-ink-brand">{footerLabel}</span>
          </div>
        </>
      )}
    </div>
  );
}
