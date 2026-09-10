import { PageHeader } from "@/components/PageHeader";
import { SidebarItem } from "@brunosantossss/ds";

const GridIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="1.5" y="1.5" width="7.5" height="7.5" rx="2" fill="currentColor" />
    <rect x="11" y="1.5" width="7.5" height="7.5" rx="2" fill="currentColor" />
    <rect x="1.5" y="11" width="7.5" height="7.5" rx="2" fill="currentColor" />
    <rect x="11" y="11" width="7.5" height="7.5" rx="2" fill="currentColor" />
  </svg>
);

export default function SidebarItemPage() {
  return (
    <div>
      <PageHeader
        category="Complex Component"
        title="Sidebar Item"
        description="Item de navegação usado na sidebar principal, com ícone, submenu expansível (caret), contador opcional (badge) e estado ativo."
      />

      <div className="rounded-lg border border-line bg-card p-16 mb-32">
        <pre className="text-body-xs font-mono text-ink-muted overflow-x-auto">
{`import { SidebarItem } from "@brunosantossss/ds";

<SidebarItem icon={<Icon />} active>
  Painel
</SidebarItem>

<SidebarItem icon={<Icon />} expandable expanded>
  Alunos
</SidebarItem>

<SidebarItem icon={<Icon />} badge={3}>
  Indicações
</SidebarItem>`}
        </pre>
      </div>

      <div className="max-w-[280px] flex flex-col gap-4 mb-32 rounded-lg border border-line bg-card p-8">
        <SidebarItem icon={<GridIcon />}>Default</SidebarItem>
        <SidebarItem icon={<GridIcon />} active>
          Active
        </SidebarItem>
        <SidebarItem icon={<GridIcon />} expandable expanded>
          Expandable (aberto)
        </SidebarItem>
        <SidebarItem icon={<GridIcon />} expandable>
          Expandable (fechado)
        </SidebarItem>
        <SidebarItem icon={<GridIcon />} badge={3}>
          Com badge
        </SidebarItem>
        <SidebarItem icon={<GridIcon />} badge={3} disabled>
          Disabled
        </SidebarItem>
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Propriedades</h3>
        <div className="rounded-lg border border-line overflow-hidden">
          {[
            ["active", "boolean — fundo bg-surface + barra de destaque de 4px na cor da marca"],
            ["icon", "ReactNode — sempre visível, representa o destino da navegação (não é variante)"],
            ["expandable", "boolean — mostra um caret à direita, para itens que expandem uma lista"],
            ["expanded", "boolean — rotaciona o caret quando o submenu está aberto (requer expandable)"],
            ["badge", "number (opcional, contador — reutiliza o componente Badge). Mutuamente exclusivo com expandable"],
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
          <li>Use expandable para itens que expandem uma lista (ex: Alunos → Turmas, Certificados). Use badge para contadores (ex: notificações não lidas). Nunca os dois ao mesmo tempo.</li>
        </ul>
      </div>
    </div>
  );
}
