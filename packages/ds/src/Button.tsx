import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonType = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type_?: ButtonType;
  size?: ButtonSize;
  icon?: ReactNode;
}

const typeStyles: Record<ButtonType, string> = {
  primary: "bg-brand text-ink hover:bg-brand-hover",
  secondary: "bg-hover text-ink hover:bg-hover-strong",
  ghost: "bg-transparent text-ink-brand hover:bg-brand-subtle",
  danger: "bg-danger text-ink hover:bg-danger-hover",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-12 py-8 text-body-xs gap-8",
  md: "px-16 py-12 text-body-sm gap-8",
  lg: "px-24 py-16 text-body-md gap-8",
};

/**
 * Button — Mentorfy.DS
 * Espelha o component set "Button" do Figma (Type x Size x State x Icon).
 * `type_` evita colidir com o atributo HTML nativo `type` (submit/button/reset).
 */
export function Button({
  type_ = "primary",
  size = "md",
  icon,
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg font-medium transition-colors disabled:opacity-40 disabled:pointer-events-none ${typeStyles[type_]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
