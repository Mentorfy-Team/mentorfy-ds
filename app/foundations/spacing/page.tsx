import { PageHeader } from "@/components/PageHeader";
import { spacingTokens, radiusTokens } from "@/lib/tokens";

export default function SpacingPage() {
  return (
    <div>
      <PageHeader
        category="Foundation"
        title="Grid & Spacing"
        description="Escala numérica de espaçamento (padding, gap, margin) e raios de borda usados nos componentes."
      />

      <h2 className="text-display-xs font-bold mb-4">Spacing</h2>
      <p className="text-body-xs text-ink-muted mb-16">
        Escala numérica de espaçamento, usada em padding, gap e margin.
      </p>
      <div className="rounded-lg border border-line overflow-hidden mb-32">
        <div className="grid grid-cols-2 bg-card px-16 py-8">
          <span className="text-body-xs uppercase tracking-wide text-ink-muted">Nome</span>
          <span className="text-body-xs uppercase tracking-wide text-ink-muted">Valor</span>
        </div>
        {spacingTokens.map((tok) => (
          <div
            key={tok.name}
            className="grid grid-cols-2 items-center px-16 py-12 border-t border-line"
          >
            <span className="text-body-sm text-ink font-mono">{tok.name}</span>
            <div className="flex items-center gap-8">
              <span className="h-16 bg-brand rounded" style={{ width: Math.max(tok.px, 2) }} />
              <span className="text-body-sm text-ink-muted">
                {tok.px}px / {(tok.px / 16).toFixed(2).replace(/0$/, "")}rem
              </span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-display-xs font-bold mb-4">Radius</h2>
      <p className="text-body-xs text-ink-muted mb-16">
        Cantos arredondados usados em botões, cards e inputs.
      </p>
      <div className="rounded-lg border border-line overflow-hidden">
        <div className="grid grid-cols-3 bg-card px-16 py-8">
          <span className="text-body-xs uppercase tracking-wide text-ink-muted">Nome</span>
          <span className="text-body-xs uppercase tracking-wide text-ink-muted">Exemplo</span>
          <span className="text-body-xs uppercase tracking-wide text-ink-muted">Valor</span>
        </div>
        {radiusTokens.map((tok) => (
          <div
            key={tok.name}
            className="grid grid-cols-3 items-center px-16 py-16 border-t border-line"
          >
            <span className="text-body-sm text-ink font-mono">{tok.name}</span>
            <span
              className="w-40 h-40 border-2 border-brand"
              style={{ borderRadius: Math.min(tok.px, 20) }}
            />
            <span className="text-body-sm text-ink-muted">{tok.px}px</span>
          </div>
        ))}
      </div>
    </div>
  );
}
