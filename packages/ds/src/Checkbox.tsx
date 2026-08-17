"use client";

import { ButtonHTMLAttributes } from "react";

export interface CheckboxProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "value"> {
  checked?: boolean;
  indeterminate?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

/**
 * Checkbox — Mentorfy.DS
 * Espelha o component set "Checkbox" do Figma (State x Checked x Indeterminate).
 * Implementado como <button role="checkbox"> em vez de <input> nativo —
 * o atributo `indeterminate` não existe em HTML puro, só via propriedade
 * DOM, então um componente controlado por props evita a gambiarra de ref.
 */
export function Checkbox({
  checked = false,
  indeterminate = false,
  disabled,
  onCheckedChange,
  className = "",
  ...props
}: CheckboxProps) {
  const active = checked || indeterminate;
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={indeterminate ? "mixed" : checked}
      disabled={disabled}
      onClick={() => onCheckedChange?.(!checked)}
      className={`inline-flex h-20 w-20 items-center justify-center rounded-[5px] border transition-colors ${
        disabled ? "pointer-events-none opacity-40" : ""
      } ${active ? "border-brand bg-brand" : "border-line bg-card"} ${className}`}
      {...props}
    >
      {checked && !indeterminate && (
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
          <path d="M1 5L4.3 8.3L11 1" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {indeterminate && !checked && <span className="h-2 w-8 rounded-full bg-page" aria-hidden="true" />}
    </button>
  );
}
