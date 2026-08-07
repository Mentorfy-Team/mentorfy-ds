import { PageHeader } from "@/components/PageHeader";
import { typographyDisplay, typographyText, type TypeGroup } from "@/lib/tokens";

function TypeGroupTable({ group }: { group: TypeGroup }) {
  return (
    <div className="mb-32">
      <div className="mb-12">
        <h3 className="text-body-lg font-bold">{group.label}</h3>
        <p className="text-body-xs text-ink-muted">
          {group.sizePx}px / {(group.sizePx / 16).toFixed(2).replace(/0$/, "")}rem
        </p>
      </div>
      <div className="rounded-lg border border-line overflow-hidden">
        <div className="grid grid-cols-6 bg-card px-16 py-8">
          {["Nome", "Family", "Size", "Weight", "Line Height", "Letter Spacing"].map((h) => (
            <span key={h} className="text-body-xs uppercase tracking-wide text-ink-muted">
              {h}
            </span>
          ))}
        </div>
        {group.rows.map((row) => (
          <div
            key={row.name}
            className="grid grid-cols-6 items-center px-16 py-12 border-t border-line"
          >
            <span className="text-body-xs text-ink font-mono">{row.name}</span>
            <span className="text-body-xs text-ink-muted">{row.family}</span>
            <span className="text-body-xs text-ink-muted">
              {row.sizePx}px / {(row.sizePx / 16).toFixed(2).replace(/0$/, "")}rem
            </span>
            <span className="text-body-xs text-ink-muted">{row.weight}</span>
            <span className="text-body-xs text-ink-muted">{row.lineHeight}</span>
            <span className="text-body-xs text-ink-muted">{row.letterSpacing}</span>
          </div>
        ))}
      </div>
      <div
        className="mt-12 p-16 rounded-lg bg-card border border-line"
        style={{
          fontSize: group.sizePx,
          lineHeight: group.rows[0].lineHeight,
          fontWeight: 700,
        }}
      >
        Mentorfy Ag 123
      </div>
    </div>
  );
}

export default function TypographyPage() {
  return (
    <div>
      <PageHeader
        category="Foundation"
        title="Typography"
        description="Escala tipográfica em duas famílias: Display (títulos e destaques) e Text (corpo de texto), cada uma com pesos Bold, Medium e Regular."
      />

      <h2 className="text-display-xs font-bold mb-16">Display</h2>
      {typographyDisplay.map((group) => (
        <TypeGroupTable key={group.label} group={group} />
      ))}

      <h2 className="text-display-xs font-bold mb-16 mt-32">Text</h2>
      {typographyText.map((group) => (
        <TypeGroupTable key={group.label} group={group} />
      ))}
    </div>
  );
}
