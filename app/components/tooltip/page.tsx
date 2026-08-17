import { PageHeader } from "@/components/PageHeader";
import { Tooltip, type TooltipPosition } from "@brunosantossss/ds";

const positions: TooltipPosition[] = ["top", "bottom", "left", "right"];

export default function TooltipPage() {
  return (
    <div>
      <PageHeader
        category="Complex Component"
        title="Tooltip"
        description="Texto de apoio exibido ao passar o mouse. Interatividade 100% via CSS — sem JavaScript."
      />

      <div className="rounded-lg border border-line bg-card p-16 mb-32">
        <pre className="text-body-xs font-mono text-ink-muted overflow-x-auto">
{`import { Tooltip, Button } from "@brunosantossss/ds";

<Tooltip content="Salvar alterações" position="top">
  <Button type_="secondary">Salvar</Button>
</Tooltip>`}
        </pre>
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Passe o mouse</h3>
        <div className="flex items-center gap-48 py-32">
          {positions.map((position) => (
            <Tooltip key={position} content="Dica rápida" position={position}>
              <span className="rounded-md border border-line bg-card px-16 py-8 text-body-sm capitalize">
                {position}
              </span>
            </Tooltip>
          ))}
        </div>
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Com hint (forçado visível, para documentação)</h3>
        <div className="flex items-center gap-48 py-32">
          {positions.map((position) => (
            <Tooltip
              key={position}
              content="Dica rápida"
              hint="Texto de apoio adicional"
              position={position}
              visible
            >
              <span className="rounded-md border border-line bg-card px-16 py-8 text-body-sm capitalize">
                {position}
              </span>
            </Tooltip>
          ))}
        </div>
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Propriedades</h3>
        <div className="rounded-lg border border-line overflow-hidden">
          {[
            ["content", "ReactNode"],
            ["hint", "ReactNode (opcional, linha secundária)"],
            ["position", "top | bottom | left | right"],
            ["visible", "boolean — força a exibição (documentação); em uso real é o hover"],
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
