import { PageHeader } from "@/components/PageHeader";
import { Select } from "@brunosantossss/ds";

const options = [
  { value: "design", label: "Design" },
  { value: "dev", label: "Desenvolvimento" },
  { value: "pm", label: "Produto" },
  { value: "qa", label: "QA (indisponível)", disabled: true },
];

export default function SelectPage() {
  return (
    <div>
      <PageHeader
        category="Complex Component"
        title="Select"
        description="Menu de opção única. Espelha os component sets 'Dropdown Trigger' e 'Dropdown Option' do Figma — funcional de verdade (abre/fecha, fecha ao clicar fora)."
      />

      <div className="rounded-lg border border-line bg-card p-16 mb-32">
        <pre className="text-body-xs font-mono text-ink-muted overflow-x-auto">
{`import { Select } from "@brunosantossss/ds";

<Select
  options={[{ value: "design", label: "Design" }]}
  placeholder="Selecione"
  onChange={(value) => console.log(value)}
/>`}
        </pre>
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Default</h3>
        <Select options={options} placeholder="Selecione uma área" />
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Open (forçado, para documentação)</h3>
        <Select options={options} defaultValue="dev" open />
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Disabled</h3>
        <Select options={options} placeholder="Selecione uma área" disabled />
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Propriedades</h3>
        <div className="rounded-lg border border-line overflow-hidden">
          {[
            ["options", "{ value, label, disabled? }[]"],
            ["value / defaultValue", "string — controlado ou não controlado"],
            ["onChange", "(value: string) => void"],
            ["open", "boolean — força aberto/fechado (documentação)"],
            ["disabled", "boolean"],
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
