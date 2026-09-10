"use client";

import { useState } from "react";

function CopyIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="5" y="5" width="7.25" height="7.25" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M3.5 9V2.75A1.25 1.25 0 0 1 4.75 1.5H9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2.5 7.5L5.5 10.5L11.5 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Bloco de código com botão de copiar — mesmo padrão da doc web do Hubber
 * (barra com ação alinhada à direita, acima do código). O botão sempre
 * visível (não só no hover) por acessibilidade: mais fácil de achar via
 * teclado/touch, sem depender de :hover.
 */
export function CodeBlock({ code, className = "" }: { code: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard indisponível (ex: contexto não seguro) — falha silenciosa, o botão só não confirma.
    }
  }

  return (
    <div className={`overflow-hidden rounded-md bg-card ${className}`}>
      <div className="flex items-center justify-end border-b border-line-subtle px-12 py-6">
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-4 rounded-md px-8 py-4 text-body-xs text-ink-muted transition-colors hover:bg-hover hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-card"
          aria-label={copied ? "Código copiado" : "Copiar código"}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
      <pre className="overflow-x-auto p-16 text-body-xs font-mono text-ink-muted">
        <code>{code}</code>
      </pre>
    </div>
  );
}
