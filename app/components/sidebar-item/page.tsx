import { PageHeader } from "@/components/PageHeader";
import { SidebarItem } from "@brunosantossss/ds";

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path
      d="M4.16667 10L8.33333 14.1667L15.8333 5.83334"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function SidebarItemPage() {
  return (
    <div>
      <PageHeader
        category="Complex Component"
        title="Sidebar Item"
        description="Item de navegação usado na sidebar principal, com ícone, contador opcional e estado ativo."
      />

      <div className="rounded-lg border border-line bg-card p-16 mb-32">
        <pre className="text-body-xs font-mono text-ink-muted overflow-x-auto">
{`import { SidebarItem } from "@brunosantossss/ds";

<SidebarItem icon={<Icon />} badge={3} active>
  Menu Item
</SidebarItem>`}
        </pre>
      </div>

      <div className="max-w-[280px] flex flex-col gap-4 mb-32 rounded-lg border border-line bg-card p-8">
        <SidebarItem icon={<CheckIcon />} badge={3}>
          Default
        </SidebarItem>
        <SidebarItem icon={<CheckIcon />} badge={3} active>
          Active
        </SidebarItem>
        <SidebarItem icon={<CheckIcon />}>Sem badge</SidebarItem>
        <SidebarItem>Sem ícone</SidebarItem>
        <SidebarItem icon={<CheckIcon />} badge={3} disabled>
          Disabled
        </SidebarItem>
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Propriedades</h3>
        <div className="rounded-lg border border-line overflow-hidden">
          {[
            ["active", "boolean — mostra a barra de destaque na cor da marca"],
            ["icon", "ReactNode (opcional)"],
            ["badge", "number (opcional, contador — reutiliza o componente Badge)"],
            ["disabled", "boolean"],
          ].map(([prop, value]) => (
            <div key={prop} className="grid grid-cols-2 px-16 py-12 border-b border-line last:border-b-0">
              <span className="text-body-sm text-ink font-mono">{prop}</span>
              <span className="text-body-sm text-ink-muted font-mono">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-body-lg font-bold mb-12">Uso</h3>
        <ul className="text-body-sm text-ink-muted list-disc pl-20 flex flex-col gap-4">
          <li>O estado Hover é resolvido via CSS — não é uma prop.</li>
          <li>Use badge apenas para contadores (ex: notificações não lidas), não para status arbitrário.</li>
        </ul>
      </div>
    </div>
  );
}
