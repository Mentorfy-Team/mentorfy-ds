"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  /** Força o menu aberto/fechado — usado nesta documentação para mostrar os estados. */
  open?: boolean;
  className?: string;
}

/**
 * Select — Mentorfy.DS
 * Espelha os component sets "Dropdown Trigger" (Default/Open/Disabled) e
 * "Dropdown Option" (Default/Hover/Selected/Disabled) do Figma, combinados
 * num único componente controlável.
 */
export function Select({
  options,
  value,
  defaultValue,
  onChange,
  placeholder = "Selecione",
  disabled,
  open: openProp,
  className = "",
}: SelectProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [internalOpen, setInternalOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const isOpenControlled = openProp !== undefined;
  const open = isOpenControlled ? openProp : internalOpen;
  const current = value ?? internalValue;
  const currentLabel = options.find((o) => o.value === current)?.label;

  useEffect(() => {
    if (isOpenControlled) return;
    function onDocClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setInternalOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [isOpenControlled]);

  return (
    <div ref={rootRef} className={`relative w-[240px] ${className}`}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => !isOpenControlled && setInternalOpen((o) => !o)}
        className={`flex w-full items-center justify-between rounded-md border bg-card px-16 py-12 text-body-sm transition-colors ${
          disabled ? "pointer-events-none opacity-40" : ""
        } ${open ? "border-brand" : "border-line"}`}
      >
        <span className={currentLabel ? "text-ink" : "text-ink-muted"}>{currentLabel ?? placeholder}</span>
        <CaretDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute z-10 mt-4 w-full overflow-hidden rounded-md border border-line bg-card py-4 shadow-lg">
          {options.map((opt) => (
            <SelectOptionRow
              key={opt.value}
              selected={opt.value === current}
              disabled={opt.disabled}
              onSelect={() => {
                if (opt.disabled) return;
                setInternalValue(opt.value);
                onChange?.(opt.value);
                if (!isOpenControlled) setInternalOpen(false);
              }}
            >
              {opt.label}
            </SelectOptionRow>
          ))}
        </div>
      )}
    </div>
  );
}

function SelectOptionRow({
  selected,
  disabled,
  onSelect,
  children,
}: {
  selected?: boolean;
  disabled?: boolean;
  onSelect?: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onSelect}
      className={`flex w-full items-center justify-between px-16 py-8 text-left text-body-sm transition-colors ${
        disabled ? "pointer-events-none opacity-40" : "hover:bg-hover"
      } ${selected ? "text-ink-brand" : "text-ink"}`}
    >
      {children}
      {selected && <CheckIcon className="text-ink-brand" />}
    </button>
  );
}

function CaretDown({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={className} aria-hidden="true">
      <path d="M3 5.5L7 9.5L11 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className={className} aria-hidden="true">
      <path d="M1 5L4.3 8.3L11 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
