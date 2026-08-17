import { PageHeader } from "@/components/PageHeader";
import { Tabs } from "@brunosantossss/ds";

const items = [
  { value: "overview", label: "Visão geral" },
  { value: "students", label: "Alunos" },
  { value: "content", label: "Conteúdo" },
  { value: "settings", label: "Configurações", disabled: true },
];

export default function TabsPage() {
  return (
    <div>
      <PageHeader
        category="Complex Component"
        title="Tabs"
        description="Alterna entre views relacionadas na mesma tela, com indicador inferior de 2px na aba ativa. Espelha o component set 'Tab Item' do Figma."
      />

      <div className="rounded-lg border border-line bg-card p-16 mb-32">
        <pre className="text-body-xs font-mono text-ink-muted overflow-x-auto">
{`import { Tabs } from "@brunosantossss/ds";

<Tabs
  items={[{ value: "overview", label: "Visão geral" }]}
  defaultValue="overview"
  onChange={(value) => console.log(value)}
/>`}
        </pre>
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Interativo</h3>
        <Tabs items={items} defaultValue="overview" />
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Propriedades</h3>
        <div className="rounded-lg border border-line overflow-hidden">
          {[
            ["items", "{ value, label, disabled? }[]"],
            ["value / defaultValue", "string — controlado ou não controlado"],
            ["onChange", "(value: string) => void"],
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
