import { PageHeader } from "@/components/PageHeader";
import { Sidebar, SidebarSubmenu, SidebarItem, Avatar } from "@brunosantossss/ds";

const dotIcon = <span className="h-20 w-20 shrink-0 rounded-md bg-hover-strong" />;

function DemoNav() {
  return (
    <>
      <SidebarItem active>Dashboard</SidebarItem>
      <SidebarItem badge={5}>Mentorias</SidebarItem>
      <SidebarItem>Alunos</SidebarItem>
      <SidebarSubmenu>
        <SidebarItem className="text-body-sm">Turmas</SidebarItem>
        <SidebarItem className="text-body-sm">Certificados</SidebarItem>
      </SidebarSubmenu>
      <SidebarItem>Financeiro</SidebarItem>
      <SidebarItem disabled>Relatórios</SidebarItem>
    </>
  );
}

export default function SidebarPage() {
  return (
    <div>
      <PageHeader
        category="Complex Component"
        title="Sidebar"
        description="Navegação principal do produto, em duas larguras (Expanded/Collapsed). É um contêiner de layout — a navegação é composta com SidebarItem, já que a rota ativa depende da aplicação."
      />

      <div className="rounded-lg border border-line bg-card p-16 mb-32">
        <pre className="text-body-xs font-mono text-ink-muted overflow-x-auto">
{`import { Sidebar, SidebarItem, SidebarSubmenu } from "@brunosantossss/ds";

<Sidebar footer={<UserFooter />}>
  <SidebarItem active icon={<DashboardIcon />}>Dashboard</SidebarItem>
  <SidebarItem badge={5} icon={<ChatIcon />}>Mentorias</SidebarItem>
  <SidebarSubmenu>
    <SidebarItem>Turmas</SidebarItem>
  </SidebarSubmenu>
</Sidebar>`}
        </pre>
      </div>

      <div className="mb-32 flex flex-wrap gap-24">
        <div>
          <h3 className="text-body-lg font-bold mb-12">Expanded</h3>
          <div className="h-[520px] overflow-hidden rounded-lg border border-line">
            <Sidebar
              footer={
                <div className="flex items-center gap-8">
                  <Avatar size="sm" initials="BS" status="online" />
                  <div className="flex flex-col">
                    <span className="text-body-sm font-medium">Bruno Santos</span>
                    <span className="text-body-xs text-ink-muted">Founder</span>
                  </div>
                </div>
              }
            >
              <DemoNav />
            </Sidebar>
          </div>
        </div>

        <div>
          <h3 className="text-body-lg font-bold mb-12">Collapsed</h3>
          <div className="h-[520px] overflow-hidden rounded-lg border border-line">
            <Sidebar
              collapsed
              footer={
                <div className="flex justify-center">
                  <Avatar size="sm" initials="BS" status="online" />
                </div>
              }
            >
              <SidebarItem active title="Dashboard" icon={dotIcon} />
              <SidebarItem title="Mentorias" icon={dotIcon} />
              <SidebarItem title="Alunos" icon={dotIcon} />
              <SidebarItem title="Financeiro" icon={dotIcon} />
              <SidebarItem disabled title="Relatórios" icon={dotIcon} />
            </Sidebar>
          </div>
        </div>
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Propriedades</h3>
        <div className="rounded-lg border border-line overflow-hidden">
          {[
            ["collapsed", "boolean — largura 88px (ícones) em vez de 280px"],
            ["header / footer", "ReactNode"],
            ["children", "ReactNode — normalmente <SidebarItem> e <SidebarSubmenu>"],
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
