import { PageHeader } from "@/components/PageHeader";
import { Button, type ButtonType, type ButtonSize } from "@brunosantossss/ds";

const types: ButtonType[] = ["primary", "secondary", "ghost", "danger"];
const sizes: ButtonSize[] = ["sm", "md", "lg"];

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 4.16667V15.8333M4.16667 10H15.8333"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
    />
  </svg>
);

export default function ButtonPage() {
  return (
    <div>
      <PageHeader
        category="Base Component"
        title="Button"
        description="Os botões representam ações que os usuários podem realizar. Usados em modais, formulários, cards ou barras de ferramentas."
      />

      <div className="rounded-lg border border-line bg-card p-16 mb-8">
        <pre className="text-body-xs font-mono text-ink-muted overflow-x-auto">
{`import { Button } from "@brunosantossss/ds";

<Button type_="primary" size="md">Button</Button>`}
        </pre>
      </div>

      {types.map((type_) => (
        <div key={type_} className="mb-32">
          <h3 className="text-body-lg font-bold mb-12 capitalize">{type_}</h3>
          <div className="flex flex-col gap-16">
            {sizes.map((size) => (
              <div key={size} className="flex items-center gap-16">
                <span className="w-32 text-body-xs text-ink-muted uppercase">{size}</span>
                <Button type_={type_} size={size}>
                  Button
                </Button>
                <Button type_={type_} size={size} icon={<PlusIcon />}>
                  Button
                </Button>
                <Button type_={type_} size={size} disabled>
                  Button
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Propriedades</h3>
        <div className="rounded-lg border border-line overflow-hidden">
          {[
            ["type_", "primary | secondary | ghost | danger"],
            ["size", "sm | md | lg"],
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
