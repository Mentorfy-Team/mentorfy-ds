function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path
        d="M7 0.5L8.94 4.6L13.4 5.25L10.2 8.38L10.96 12.86L7 10.75L3.04 12.86L3.8 8.38L0.6 5.25L5.06 4.6L7 0.5Z"
        fill={filled ? "var(--color-brand)" : "none"}
        stroke={filled ? "var(--color-brand)" : "var(--color-line)"}
        strokeWidth="1"
      />
    </svg>
  );
}

export interface RatingProps {
  /** Nota (ex: 4.5). Exibida com 1 casa decimal. */
  value: number;
  /** Quantidade total de avaliações (ex: 128) — opcional, exibida entre parênteses. */
  count?: number;
  /** Total de estrelas. Padrão 5, igual ao Figma. */
  max?: number;
  className?: string;
}

/**
 * Rating — Mentorfy.DS
 * Novo componente (não existia no pacote) — construído a partir do conteúdo
 * "Type=Rating" da Table Cell no Figma (85:2826-2828): nota (14px medium) +
 * 5 estrelas (14×14, cor brand) + contagem entre parênteses (12px, cor
 * muted). A instância do Figma mostra as 5 estrelas preenchidas (nota 4.5,
 * sem meia-estrela) — aqui o preenchimento reflete de fato `value`
 * arredondado, pra o componente funcionar com qualquer nota, não só a do
 * exemplo. Somente leitura (sem interação de avaliar) — não há variante de
 * estado/hover no Figma.
 */
export function Rating({ value, count, max = 5, className = "" }: RatingProps) {
  const filled = Math.round(value);
  return (
    <div
      className={`inline-flex items-center gap-4 ${className}`}
      role="img"
      aria-label={`Avaliação ${value.toFixed(1)} de ${max}${typeof count === "number" ? `, ${count} avaliações` : ""}`}
    >
      <span className="text-body-sm font-medium text-ink">{value.toFixed(1)}</span>
      <span className="flex items-center gap-2" aria-hidden="true">
        {Array.from({ length: max }).map((_, i) => (
          <StarIcon key={i} filled={i < filled} />
        ))}
      </span>
      {typeof count === "number" && <span className="text-body-xs text-ink-muted">({count})</span>}
    </div>
  );
}
