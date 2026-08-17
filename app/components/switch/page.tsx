import { PageHeader } from "@/components/PageHeader";
import { Switch, type SwitchSize } from "@brunosantossss/ds";

const sizes: SwitchSize[] = ["sm", "md"];

export default function SwitchPage() {
  return (
    <div>
      <PageHeader
        category="Complex Component"
        title="Switch"
        description="Alterna um valor booleano imediatamente, sem precisar de confirmação (diferente do Checkbox, usado em formulários)."
      />

      <div className="rounded-lg border border-line bg-card p-16 mb-32">
        <pre className="text-body-xs font-mono text-ink-muted overflow-x-auto">
{`import { Switch } from "@brunosantossss/ds";

<Switch size="md" defaultChecked />`}
        </pre>
      </div>

      {sizes.map((size) => (
        <div key={size} className="mb-32">
          <h3 className="text-body-lg font-bold mb-12 capitalize">{size === "sm" ? "Small" : "Medium"}</h3>
          <div className="flex items-center gap-32">
            <div className="flex flex-col items-center gap-8">
              <Switch size={size} />
              <span className="text-body-xs text-ink-muted">Off</span>
            </div>
            <div className="flex flex-col items-center gap-8">
              <Switch size={size} defaultChecked />
              <span className="text-body-xs text-ink-muted">On</span>
            </div>
            <div className="flex flex-col items-center gap-8">
              <Switch size={size} disabled />
              <span className="text-body-xs text-ink-muted">Disabled</span>
            </div>
            <div className="flex flex-col items-center gap-8">
              <Switch size={size} disabled defaultChecked />
              <span className="text-body-xs text-ink-muted">Disabled + On</span>
            </div>
          </div>
        </div>
      ))}

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Propriedades</h3>
        <div className="rounded-lg border border-line overflow-hidden">
          {[
            ["size", "sm | md"],
            ["checked / defaultChecked", "boolean — controlado ou não controlado"],
            ["disabled", "boolean"],
            ["...props", "qualquer atributo de <input type=\"checkbox\">, incluindo onChange"],
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
