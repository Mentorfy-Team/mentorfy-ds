"use client";

import { MouseEvent, ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  title?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  /** "fixed" cobre a viewport inteira (uso real); "inline" usa posicionamento
   * absoluto dentro de um contêiner relativo — usado nesta documentação. */
  variant?: "fixed" | "inline";
  className?: string;
}

/**
 * Modal — Mentorfy.DS
 * Espelha o componente "Modal" do Figma (Header/Divider/Body/Divider/Footer)
 * sobre um scrim escuro.
 */
export function Modal({ open, onClose, title, children, footer, variant = "fixed", className = "" }: ModalProps) {
  if (!open) return null;

  function handleScrimClick(e: MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose?.();
  }

  return (
    <div
      className={`z-50 flex items-center justify-center bg-black/60 ${variant === "fixed" ? "fixed inset-0" : "absolute inset-0"} ${className}`}
      onClick={handleScrimClick}
    >
      <div className="w-[480px] max-w-[90vw] overflow-hidden rounded-xl border border-line bg-page shadow-xl">
        {title && <div className="border-b border-line px-24 py-16 text-body-lg font-bold">{title}</div>}
        <div className="px-24 py-24 text-body-sm text-ink-muted">{children}</div>
        {footer && <div className="flex justify-end gap-8 border-t border-line px-24 py-16">{footer}</div>}
      </div>
    </div>
  );
}
