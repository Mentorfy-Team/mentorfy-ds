import { HTMLAttributes } from "react";

export type BadgeColor = "neutral" | "brand" | "success" | "danger";
export type BadgeSize = "sm" | "md";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  color?: BadgeColor;
  size?: BadgeSize;
  dot?: boolean;
}

const colorStyles: Record<BadgeColor, string> = {
  neutral: "bg-hover text-ink",
  brand: "bg-brand-subtle text-ink-brand",
  success: "bg-success/16 text-success",
  danger: "bg-danger/16 text-danger",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-8 py-2 text-body-xs gap-4",
  md: "px-12 py-4 text-body-sm gap-4",
};

const dotSize: Record<BadgeSize, string> = {
  sm: "w-[5px] h-[5px]",
  md: "w-[6px] h-[6px]",
};

/**
 * Badge — Mentorfy.DS
 * Espelha o component set "Badge" do Figma (Color x Size x Dot).
 */
export function Badge({
  color = "neutral",
  size = "sm",
  dot = false,
  className = "",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${colorStyles[color]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {dot && <span className={`rounded-full bg-current ${dotSize[size]}`} />}
      {children}
    </span>
  );
}
