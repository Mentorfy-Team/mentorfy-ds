import { PageHeader } from "@/components/PageHeader";
import { Sidebar, SidebarGroupLabel, SidebarItem, Avatar } from "@brunosantossss/ds";
import {
  PainelIcon,
  AlunosIcon,
  RelatoriosIcon,
  ReunioesIcon,
  IndicacoesIcon,
  MeusProdutosIcon,
  VitrineIcon,
  AprovacoesIcon,
  MeusClientesIcon,
  GruposIcon,
  AiStudioIcon,
  BrandStudioIcon,
  MeuCopilotoIcon,
  CopilotoDoAlunoIcon,
  EquipeIcon,
  DominioIcon,
  IntegracoesIcon,
  SegurancaIcon,
  PerfilIcon,
  SenhaIcon,
  AssinaturaIcon,
  TutoriaisIcon,
  PrecisaDeAjudaIcon,
  CollapseIcon,
  CloseIcon,
  MenuIcon,
  MentorfyMarkIcon,
} from "./icons";

// Na sidebar colapsada, os grupos não têm label — são separados por uma
// linha divisória fina (só existe nessa variante; a expandida usa o
// respiro do label de texto). Contagem por grupo confere com a IA real:
// Gestão(5) · Mentorias(3) · Clientes(2) · AI Studio(1) · Brand Studio(1)
// · Copiloto(2) · Configurações(4) · Minha Conta(3) · Ajuda(2).
function CollapsedDivider() {
  return <div className="my-14 h-px w-full shrink-0 bg-line" />;
}

// Espelha a IA real da sidebar do produto (página "❖ · Sidebar" no Bússola.DS):
// mesmos grupos, mesmos itens, mesmo item ativo ("Indicações"), mesmo estado
// padrão (Alunos fechado — o Figma real não mostra o submenu aberto) e mesmos
// ícones (extraídos vetor por vetor do Figma). Só os nomes/dados de exemplo
// (avatar, usuário) seguem placeholder, já que dependem da sessão real da
// aplicação. <SidebarSubmenu> existe e pode ser usado quando `expanded` for
// true — só não é o estado padrão desta demo, pra bater 1:1 com o Figma.
function DemoNavTop() {
  return (
    <>
      <SidebarGroupLabel>Gestão</SidebarGroupLabel>
      <SidebarItem icon={<PainelIcon />}>Painel</SidebarItem>
      <SidebarItem icon={<AlunosIcon />} expandable>
        Alunos
      </SidebarItem>
      <SidebarItem icon={<RelatoriosIcon />}>Relatórios</SidebarItem>
      <SidebarItem icon={<ReunioesIcon />}>Reuniões</SidebarItem>
      <SidebarItem icon={<IndicacoesIcon />} active>
        Indicações
      </SidebarItem>
    </>
  );
}

const collapsedGroups: { icons: (typeof PainelIcon)[]; activeIndex?: number }[] = [
  { icons: [PainelIcon, AlunosIcon, RelatoriosIcon, ReunioesIcon, IndicacoesIcon], activeIndex: 4 },
  { icons: [MeusProdutosIcon, VitrineIcon, AprovacoesIcon] },
  { icons: [MeusClientesIcon, GruposIcon] },
  { icons: [AiStudioIcon] },
  { icons: [BrandStudioIcon] },
  { icons: [MeuCopilotoIcon, CopilotoDoAlunoIcon] },
  { icons: [EquipeIcon, DominioIcon, IntegracoesIcon, SegurancaIcon] },
  { icons: [PerfilIcon, SenhaIcon, AssinaturaIcon] },
];

export default function SidebarPage() {
  return (
    <div>
      <PageHeader
        category="Complex Component"
        title="Sidebar"
        description="Navegação principal do produto, em duas larguras (Expanded/Collapsed). É um contêiner de layout — a navegação é composta com SidebarItem e SidebarGroupLabel, já que a rota ativa depende da aplicação. IA, ícones e item ativo espelham a sidebar real do produto no Figma."
      />

      <div className="rounded-lg border border-line bg-card p-16 mb-32">
        <pre className="text-body-xs font-mono text-ink-muted overflow-x-auto">
{`import { Sidebar, SidebarItem, SidebarGroupLabel, SidebarSubmenu } from "@brunosantossss/ds";

<Sidebar footer={<UserFooter />}>
  <SidebarGroupLabel>Gestão</SidebarGroupLabel>
  <SidebarItem icon={<PainelIcon />}>Painel</SidebarItem>
  <SidebarItem icon={<AlunosIcon />} expandable>Alunos</SidebarItem>
  {/* expanded (com <SidebarSubmenu> logo depois) quando o usuário abrir */}
  <SidebarItem icon={<IndicacoesIcon />} active>Indicações</SidebarItem>
</Sidebar>`}
        </pre>
      </div>

      <div className="mb-32 flex flex-wrap gap-24">
        <div>
          <h3 className="text-body-lg font-bold mb-12">Expanded</h3>
          <div className="h-[720px] overflow-hidden rounded-lg border border-line">
            <Sidebar
              header={
                <div className="flex w-full items-center justify-between">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/mentorfy-logo.svg" alt="Mentorfy" className="h-[19px] w-auto" />
                  <button
                    type="button"
                    className="flex h-[28px] w-[28px] items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-hover hover:text-ink"
                    aria-label="Fechar"
                  >
                    <CloseIcon />
                  </button>
                </div>
              }
              footer={
                <div className="flex w-full items-center gap-12">
                  <Avatar size="sm" initials="CM" status="online" />
                  <div className="flex flex-1 flex-col">
                    <span className="text-body-sm font-medium">Carlos Mentor</span>
                    <span className="text-body-xs text-ink-muted">Mentor Pro</span>
                  </div>
                  <button
                    type="button"
                    className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-hover hover:text-ink"
                    aria-label="Recolher"
                  >
                    <CollapseIcon />
                  </button>
                </div>
              }
            >
              <DemoNavTop />
              <SidebarGroupLabel className="mt-14">Mentorias</SidebarGroupLabel>
              <SidebarItem icon={<MeusProdutosIcon />}>Meus Produtos</SidebarItem>
              <SidebarItem icon={<VitrineIcon />}>Vitrine</SidebarItem>
              <SidebarItem icon={<AprovacoesIcon />}>Aprovações</SidebarItem>
              <SidebarGroupLabel className="mt-14">Clientes</SidebarGroupLabel>
              <SidebarItem icon={<MeusClientesIcon />}>Meus Clientes</SidebarItem>
              <SidebarItem icon={<GruposIcon />}>Grupos</SidebarItem>
              <SidebarGroupLabel className="mt-14">AI Studio</SidebarGroupLabel>
              <SidebarItem icon={<AiStudioIcon />}>AI Studio</SidebarItem>
              <SidebarGroupLabel className="mt-14">Brand Studio</SidebarGroupLabel>
              <SidebarItem icon={<BrandStudioIcon />}>Brand Studio</SidebarItem>
              <SidebarGroupLabel className="mt-14">Copiloto</SidebarGroupLabel>
              <SidebarItem icon={<MeuCopilotoIcon />}>Meu Copiloto</SidebarItem>
              <SidebarItem icon={<CopilotoDoAlunoIcon />}>Copiloto do Aluno</SidebarItem>
              <SidebarGroupLabel className="mt-14">Configurações</SidebarGroupLabel>
              <SidebarItem icon={<EquipeIcon />}>Equipe</SidebarItem>
              <SidebarItem icon={<DominioIcon />}>Domínio</SidebarItem>
              <SidebarItem icon={<IntegracoesIcon />}>Integrações</SidebarItem>
              <SidebarItem icon={<SegurancaIcon />}>Segurança</SidebarItem>
              <SidebarGroupLabel className="mt-14">Minha Conta</SidebarGroupLabel>
              <SidebarItem icon={<PerfilIcon />}>Perfil</SidebarItem>
              <SidebarItem icon={<SenhaIcon />}>Senha</SidebarItem>
              <SidebarItem icon={<AssinaturaIcon />}>Assinatura</SidebarItem>
              <div className="mt-auto flex flex-col gap-0 border-t border-line pt-12">
                <SidebarItem icon={<TutoriaisIcon />} className="text-nav-muted">
                  Tutoriais
                </SidebarItem>
                <SidebarItem icon={<PrecisaDeAjudaIcon />} className="text-nav-muted">
                  Precisa de ajuda?
                </SidebarItem>
              </div>
            </Sidebar>
          </div>
        </div>

        <div>
          <h3 className="text-body-lg font-bold mb-12">Collapsed</h3>
          <div className="h-[720px] overflow-hidden rounded-lg border border-line">
            <Sidebar
              collapsed
              header={
                <div className="flex w-full items-center justify-between">
                  <MentorfyMarkIcon />
                  <button
                    type="button"
                    className="flex h-[28px] w-[28px] items-center justify-center rounded-md text-ink-muted transition-colors hover:bg-hover hover:text-ink"
                    aria-label="Expandir"
                  >
                    <MenuIcon />
                  </button>
                </div>
              }
              footer={
                <div className="flex justify-center">
                  <Avatar size="sm" initials="CM" status="online" />
                </div>
              }
            >
              {collapsedGroups.map((group, gi) => (
                <div key={gi} className="contents">
                  {gi > 0 && <CollapsedDivider />}
                  {group.icons.map((IconCmp, i) => (
                    <SidebarItem
                      key={i}
                      active={group.activeIndex === i}
                      icon={<IconCmp />}
                    />
                  ))}
                </div>
              ))}
              <CollapsedDivider />
              <SidebarItem icon={<TutoriaisIcon />} className="text-nav-muted" />
              <SidebarItem icon={<PrecisaDeAjudaIcon />} className="text-nav-muted" />
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
            ["children", "ReactNode — normalmente <SidebarGroupLabel>, <SidebarItem> e <SidebarSubmenu>"],
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
          <li>O painel da sidebar usa o token bg-nav (mais escuro/frio que bg-page), para o item Active (bg-surface) se destacar visualmente do fundo — assim como no Figma.</li>
          <li>SidebarGroupLabel separa os grupos de navegação (Gestão, Mentorias, Clientes, etc.), espelhando as seções da sidebar real do produto.</li>
        </ul>
      </div>
    </div>
  );
}
