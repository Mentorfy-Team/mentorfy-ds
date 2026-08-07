import { InputHTMLAttributes, ReactNode, useId } from "react";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: InputSize;
  label?: string;
  helperText?: string;
  error?: boolean;
  icon?: ReactNode;
}

const sizeStyles: Record<InputSize, string> = {
  sm: "px-12 py-8 text-body-xs",
  md: "px-16 py-12 text-body-sm",
  lg: "px-16 py-16 text-body-md",
};

/**
 * Input — Mentorfy.DS
 * Espelha o component set "Input" do Figma (Size x State x Icon), com
 * anatomia completa: label, campo, ícone opcional e helper/error text.
 */
export function Input({
  size = "md",
  label,
  helperText,
  error = false,
  icon,
  className = "",
  disabled,
  id,
  ...props
}: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;

  return (
    <div className="flex flex-col gap-4 w-full">
      {label && (
        <label htmlFor={inputId} className="text-body-xs font-medium text-ink">
          {label}
        </label>
      )}
      <div
        className={`flex items-center gap-8 rounded-md bg-card border ${
          error ? "border-danger" : "border-line focus-within:border-brand"
        } ${sizeStyles[size]} ${disabled ? "opacity-40" : ""}`}
      >
        {icon}
        <input
          id={inputId}
          disabled={disabled}
          className={`flex-1 bg-transparent outline-none text-ink placeholder:text-ink-muted ${className}`}
          {...props}
        />
      </div>
      {helperText && (
        <span className={`text-body-xs ${error ? "text-danger" : "text-ink-muted"}`}>{helperText}</span>
      )}
    </div>
  );
}
