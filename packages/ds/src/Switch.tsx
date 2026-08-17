import { InputHTMLAttributes } from "react";

export type SwitchSize = "sm" | "md";

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: SwitchSize;
}

const track: Record<SwitchSize, string> = {
  sm: "w-32 h-16",
  md: "w-48 h-24",
};
const knob: Record<SwitchSize, string> = {
  sm: "w-12 h-12 peer-checked:translate-x-16",
  md: "w-20 h-20 peer-checked:translate-x-24",
};

/**
 * Switch — Mentorfy.DS
 * Espelha o component set "Switch" do Figma (Size x State x Active).
 * É um <input type="checkbox"> estilizado via peer — sem estado interno,
 * então funciona controlado (checked/onChange) ou não controlado
 * (defaultChecked), como qualquer input nativo.
 */
export function Switch({ size = "md", disabled, className = "", ...props }: SwitchProps) {
  return (
    <label className={`inline-flex ${disabled ? "opacity-40 pointer-events-none" : "cursor-pointer"} ${className}`}>
      <input type="checkbox" disabled={disabled} className="peer sr-only" {...props} />
      <span className={`relative rounded-full bg-hover-strong transition-colors peer-checked:bg-brand ${track[size]}`}>
        <span
          className={`absolute top-2 left-2 rounded-full bg-ink shadow-sm transition-transform ${knob[size]}`}
        />
      </span>
    </label>
  );
}
