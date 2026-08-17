"use client";

import { useState } from "react";

export interface TabItem {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

/**
 * Tabs — Mentorfy.DS
 * Espelha o component set "Tab Item" do Figma (State: Default/Hover/Active/Disabled),
 * com indicador inferior de 2px. Funciona controlado (value/onChange) ou
 * não controlado (defaultValue).
 */
export function Tabs({ items, value, defaultValue, onChange, className = "" }: TabsProps) {
  const [internal, setInternal] = useState(defaultValue ?? items[0]?.value);
  const current = value ?? internal;

  return (
    <div className={`flex border-b border-line ${className}`}>
      {items.map((item) => {
        const active = item.value === current;
        return (
          <button
            key={item.value}
            type="button"
            disabled={item.disabled}
            onClick={() => {
              setInternal(item.value);
              onChange?.(item.value);
            }}
            className={`relative px-16 py-12 text-body-sm font-medium transition-colors ${
              item.disabled
                ? "pointer-events-none text-ink-muted opacity-40"
                : active
                  ? "text-ink-brand"
                  : "text-ink-muted hover:text-ink"
            }`}
          >
            {item.label}
            {active && <span className="absolute inset-x-0 -bottom-px h-2 rounded-full bg-brand" />}
          </button>
        );
      })}
    </div>
  );
}
