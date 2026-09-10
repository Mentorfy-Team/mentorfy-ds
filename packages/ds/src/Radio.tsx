"use client";

import { ButtonHTMLAttributes } from "react";

export interface RadioProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "value"> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

/**
 * Radio — Mentorfy.DS
 * Novo componente (não existia no pacote) — construído a partir do conteúdo
 * "Type=Radio" da Table Cell no Figma (85:2823-2825), já que não há um
 * component set "Radio" avulso lá ainda. Espelha exatamente essa instância:
 * anel 20×20 com stroke 2px, ponto interno 8×8 quando selecionado — mesma
 * proporção ~40% de preenchimento vista no arquivo.
 *
 * Implementado como <button role="radio"> em vez de <input type="radio">
 * pelo mesmo motivo do Checkbox: fica controlado por props (`checked` +
 * `onCheckedChange`), sem depender de um <form>/name nativo — quem usa
 * decide como agrupar (ex: um array de opções com só uma `checked=true`).
 */
export function Radio({ checked = false, disabled, onCheckedChange, className = "", ...props }: RadioProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onCheckedChange?.(!checked)}
      className={`inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 bg-card transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-page ${
        disabled ? "pointer-events-none opacity-40" : ""
      } ${checked ? "border-brand" : "border-line"} ${className}`}
      {...props}
    >
      {checked && <span className="h-8 w-8 rounded-full bg-brand" aria-hidden="true" />}
    </button>
  );
}
