import { PageHeader } from "@/components/PageHeader";
import { Badge, type BadgeColor, type BadgeSize } from "@/components/ui/Badge";

const colors: BadgeColor[] = ["neutral", "brand", "success", "danger"];
const sizes: BadgeSize[] = ["sm", "md"];

export default function BadgePage() {
  return (
    <div>
      <PageHeader
        category="Base Component"
        title="Badge"
        description="Rótulo compacto usado para status, categorias e contadores."
      />

      <div className="rounded-lg border border-line bg-card p-16 mb-32">
        <pre className="text-body-xs font-mono text-ink-muted overflow-x-auto">
{`import { Badge } from "@/components/ui/Badge";

<Badge color="brand" size="sm" dot>Badge</Badge>`}
        </pre>
      </div>

      {colors.map((color) => (
        <div key={color} className="mb-32">
          <h3 className="text-body-lg font-bold mb-12 capitalize">{color}</h3>
          <div className="flex flex-col gap-16">
            {sizes.map((size) => (
              <div key={size} className="flex items-center gap-16">
                <span className="w-32 text-body-xs text-ink-muted uppercase">{size}</span>
                <Badge color={color} size={size}>
                  Badge
                </Badge>
                <Badge color={color} size={size} dot>
                  Badge
                </Badge>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Propriedades</h3>
        <div className="rounded-lg border border-line overflow-hidden">
          {[
            ["color", "neutral | brand | success | danger"],
            ["size", "sm | md"],
            ["dot", "boolean (indicador visual antes do texto)"],
          ].map(([prop, value]) => (
            <div key={prop} className="grid grid-cols-2 px-16 py-12 border-b border-line last:border-b-0">
              <span className="text-body-sm text-ink font-mono">{prop}</span>
              <span className="text-body-sm text-ink-muted font-mono">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
