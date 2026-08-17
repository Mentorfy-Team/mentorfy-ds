import { PageHeader } from "@/components/PageHeader";
import { Checkbox } from "@brunosantossss/ds";

export default function CheckboxPage() {
  return (
    <div>
      <PageHeader
        category="Complex Component"
        title="Checkbox"
        description="Seleção múltipla em formulários e listas — com estado Indeterminate para seleção parcial (ex: 'selecionar todos')."
      />

      <div className="rounded-lg border border-line bg-card p-16 mb-32">
        <pre className="text-body-xs font-mono text-ink-muted overflow-x-auto">
{`import { Checkbox } from "@brunosantossss/ds";

<Checkbox checked={value} onCheckedChange={setValue} />`}
        </pre>
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Default</h3>
        <div className="flex items-center gap-32">
          <div className="flex flex-col items-center gap-8">
            <Checkbox />
            <span className="text-body-xs text-ink-muted">Off</span>
          </div>
          <div className="flex flex-col items-center gap-8">
            <Checkbox checked />
            <span className="text-body-xs text-ink-muted">On</span>
          </div>
          <div className="flex flex-col items-center gap-8">
            <Checkbox indeterminate />
            <span className="text-body-xs text-ink-muted">Indeterminate</span>
          </div>
        </div>
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Disabled</h3>
        <div className="flex items-center gap-32">
          <div className="flex flex-col items-center gap-8">
            <Checkbox disabled />
            <span className="text-body-xs text-ink-muted">Off</span>
          </div>
          <div className="flex flex-col items-center gap-8">
            <Checkbox disabled checked />
            <span className="text-body-xs text-ink-muted">On</span>
          </div>
          <div className="flex flex-col items-center gap-8">
            <Checkbox disabled indeterminate />
            <span className="text-body-xs text-ink-muted">Indeterminate</span>
          </div>
        </div>
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Propriedades</h3>
        <div className="rounded-lg border border-line overflow-hidden">
          {[
            ["checked", "boolean"],
            ["indeterminate", "boolean — visual apenas, não usa a propriedade DOM nativa"],
            ["disabled", "boolean"],
            ["onCheckedChange", "(checked: boolean) => void"],
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
