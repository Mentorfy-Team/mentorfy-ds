import { PageHeader } from "@/components/PageHeader";
import { Input, type InputSize } from "@/components/ui/Input";

const sizes: InputSize[] = ["sm", "md", "lg"];

export default function InputPage() {
  return (
    <div>
      <PageHeader
        category="Complex Component"
        title="Input"
        description="Campo de entrada de texto usado em formulários, com label, ícone opcional e helper/error text."
      />

      <div className="rounded-lg border border-line bg-card p-16 mb-32">
        <pre className="text-body-xs font-mono text-ink-muted overflow-x-auto">
{`import { Input } from "@/components/ui/Input";

<Input label="Label" placeholder="Placeholder" helperText="Texto de ajuda" />`}
        </pre>
      </div>

      <div className="grid grid-cols-3 gap-24 mb-32">
        {sizes.map((size) => (
          <div key={size} className="flex flex-col gap-16">
            <span className="text-body-xs text-ink-muted uppercase">{size}</span>
            <Input size={size} label="Label" placeholder="Placeholder" helperText="Texto de ajuda" />
            <Input size={size} label="Label" defaultValue="Texto digitado" helperText="Texto de ajuda" />
            <Input
              size={size}
              label="Label"
              placeholder="Placeholder"
              error
              helperText="Mensagem de erro explicando o problema"
            />
            <Input size={size} label="Label" placeholder="Placeholder" helperText="Texto de ajuda" disabled />
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-body-lg font-bold mb-12">Propriedades</h3>
        <div className="rounded-lg border border-line overflow-hidden">
          {[
            ["size", "sm | md | lg"],
            ["label", "string"],
            ["helperText", "string"],
            ["error", "boolean"],
            ["icon", "ReactNode (opcional, ícone à esquerda)"],
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
