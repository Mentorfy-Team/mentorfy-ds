import { PageHeader } from "@/components/PageHeader";
import { Radio } from "@brunosantossss/ds";

export default function RadioPage() {
  return (
    <div>
      <PageHeader
        category="Complex Component"
        title="Radio"
        description="Seleção única entre opções mutuamente exclusivas — diferente do Checkbox, usado em seleção múltipla. Novo componente, extraído do conteúdo Type=Radio da Table Cell no Figma."
      />

      <div className="rounded-lg border border-line-subtle bg-card p-16 mb-32">
        <pre className="text-body-xs font-mono text-ink-muted overflow-x-auto">
{`import { Radio } from "@brunosantossss/ds";

<Radio checked={value} onCheckedChange={setValue} />`}
        </pre>
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Default</h3>
        <div className="flex items-center gap-32">
          <div className="flex flex-col items-center gap-8">
            <Radio aria-label="Off" />
            <span className="text-body-xs text-ink-muted">Off</span>
          </div>
          <div className="flex flex-col items-center gap-8">
            <Radio checked aria-label="On" />
            <span className="text-body-xs text-ink-muted">On</span>
          </div>
        </div>
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Disabled</h3>
        <div className="flex items-center gap-32">
          <div className="flex flex-col items-center gap-8">
            <Radio disabled aria-label="Off" />
            <span className="text-body-xs text-ink-muted">Off</span>
          </div>
          <div className="flex flex-col items-center gap-8">
            <Radio disabled checked aria-label="On" />
            <span className="text-body-xs text-ink-muted">On</span>
          </div>
        </div>
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Grupo de opções</h3>
        <p className="text-body-sm text-ink-muted mb-12 max-w-[640px]">
          Sem <code className="text-body-xs font-mono text-ink">name</code> nativo — quem usa controla o
          agrupamento mantendo só uma opção com <code className="text-body-xs font-mono text-ink">checked=true</code> por
          vez, igual ao padrão do Checkbox.
        </p>
        <div className="flex flex-col gap-12">
          {["Mensal", "Anual"].map((label, i) => (
            <label key={label} className="flex items-center gap-8 text-body-sm text-ink">
              <Radio checked={i === 1} aria-label={label} />
              {label}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Propriedades</h3>
        <div className="rounded-lg border border-line-subtle overflow-hidden">
          {[
            ["checked", "boolean"],
            ["disabled", "boolean"],
            ["onCheckedChange", "(checked: boolean) => void"],
            ["...props", "qualquer atributo de <button>, incluindo aria-label"],
          ].map(([prop, value]) => (
            <div key={prop} className="grid grid-cols-2 px-16 py-12 border-b border-line-subtle last:border-b-0">
              <span className="text-body-sm text-ink font-mono">{prop}</span>
              <span className="text-body-sm text-ink-muted font-mono">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
