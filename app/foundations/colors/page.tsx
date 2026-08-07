import { PageHeader } from "@/components/PageHeader";
import { colorPrimitives, colorSemantic, type ColorFamily } from "@/lib/tokens";

function ColorFamilyTable({ family }: { family: ColorFamily }) {
  return (
    <div className="mb-32">
      <h3 className="text-body-lg font-bold mb-2">{family.title}</h3>
      <p className="text-body-xs text-ink-muted mb-12">{family.description}</p>
      <div className="rounded-lg border border-line overflow-hidden">
        <div className="grid grid-cols-3 bg-card px-16 py-8">
          <span className="text-body-xs uppercase tracking-wide text-ink-muted">Nome</span>
          <span className="text-body-xs uppercase tracking-wide text-ink-muted">Preview</span>
          <span className="text-body-xs uppercase tracking-wide text-ink-muted">Hex</span>
        </div>
        {family.tokens.map((token) => (
          <div
            key={token.name}
            className="grid grid-cols-3 items-center px-16 py-12 border-t border-line"
          >
            <span className="text-body-sm text-ink font-mono">{token.name}</span>
            <div className="flex items-center gap-8">
              <span
                className="w-20 h-20 rounded shrink-0 border border-line"
                style={{ background: token.value }}
              />
              <span className="text-body-xs text-ink-muted font-mono">{token.cssVar}</span>
            </div>
            <span className="text-body-sm text-ink-muted font-mono">{token.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ColorsPage() {
  return (
    <div>
      <PageHeader
        category="Foundation"
        title="Colors"
        description="As cores comunicam identidade e hierarquia visual. Divididas em primitivas (escalas cruas) e semânticas (uso: bg, text, border, status)."
      />

      <h2 className="text-display-xs font-bold mb-16">Primitivas</h2>
      {colorPrimitives.map((family) => (
        <ColorFamilyTable key={family.title} family={family} />
      ))}

      <h2 className="text-display-xs font-bold mb-16 mt-32">Semânticas</h2>
      {colorSemantic.map((family) => (
        <ColorFamilyTable key={family.title} family={family} />
      ))}
    </div>
  );
}
