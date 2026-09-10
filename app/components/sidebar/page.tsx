"use client";

import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Sidebar, SidebarGroupLabel, SidebarItem, SidebarSubmenu, SidebarSubItem, SidebarSection, Avatar } from "@brunosantossss/ds";
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
// respiro do label de texto). Espaçamento exato do Figma: 14px antes da
// linha, linha de 1px (cor nav-line), 8px depois — não simétrico — e a
// linha é recuada 4px de cada lado (não vai de ponta a ponta da coluna).
function CollapsedDivider() {
  return <div className="mx-4 mt-14 mb-8 h-px shrink-0 bg-nav-line" />;
}

// Cada ícone colapsado precisa de um nome acessível próprio (aria-label +
// title) já que o texto visível some — sem isso o item fica "mudo" pra quem
// usa leitor de tela ou só vê um ícone sem contexto no hover. Ver seção
// Acessibilidade mais abaixo.
const collapsedGroups: { label: string; icon: typeof PainelIcon }[][] = [
  [
    { label: "Painel", icon: PainelIcon },
    { label: "Alunos", icon: AlunosIcon },
    { label: "Relatórios", icon: RelatoriosIcon },
    { label: "Reuniões", icon: ReunioesIcon },
    { label: "Indicações", icon: IndicacoesIcon },
  ],
  [
    { label: "Meus Produtos", icon: MeusProdutosIcon },
    { label: "Vitrine", icon: VitrineIcon },
    { label: "Aprovações", icon: AprovacoesIcon },
  ],
  [
    { label: "Meus Clientes", icon: MeusClientesIcon },
    { label: "Grupos", icon: GruposIcon },
  ],
  [{ label: "AI Studio", icon: AiStudioIcon }],
  [{ label: "Brand Studio", icon: BrandStudioIcon }],
  [
    { label: "Meu Copiloto", icon: MeuCopilotoIcon },
    { label: "Copiloto do Aluno", icon: CopilotoDoAlunoIcon },
  ],
  [
    { label: "Equipe", icon: EquipeIcon },
    { label: "Domínio", icon: DominioIcon },
    { label: "Integrações", icon: IntegracoesIcon },
    { label: "Segurança", icon: SegurancaIcon },
  ],
  [
    { label: "Perfil", icon: PerfilIcon },
    { label: "Senha", icon: SenhaIcon },
    { label: "Assinatura", icon: AssinaturaIcon },
  ],
];

const ACTIVE_LABEL = "Indicações";

function AjudaBlock({ collapsed }: { collapsed?: boolean }) {
  return (
    <div className="pt-2">
      <div className="flex flex-col gap-0 border-t border-nav-line pt-12">
        <SidebarItem
          icon={<TutoriaisIcon />}
          className="text-nav-muted"
          aria-label={collapsed ? "Tutoriais" : undefined}
          title={collapsed ? "Tutoriais" : undefined}
        >
          {collapsed ? undefined : "Tutoriais"}
        </SidebarItem>
        <SidebarItem
          icon={<PrecisaDeAjudaIcon />}
          className="text-nav-muted"
          aria-label={collapsed ? "Precisa de ajuda?" : undefined}
          title={collapsed ? "Precisa de ajuda?" : undefined}
        >
          {collapsed ? undefined : "Precisa de ajuda?"}
        </SidebarItem>
      </div>
    </div>
  );
}

/**
 * Demo principal — uma única Sidebar de verdade (não dois boxes estáticos
 * lado a lado) alternando collapsed/expanded ao vivo, com o submenu de
 * "Alunos" abrindo com animação. Espelha a IA real da sidebar do produto
 * (página "❖ · Sidebar" no Bússola.DS): mesmos grupos, mesmos ícones
 * (extraídos vetor por vetor do Figma) e mesmo item ativo ("Indicações").
 */
function HeroDemo() {
  const [collapsed, setCollapsed] = useState(false);
  const [alunosOpen, setAlunosOpen] = useState(false);

  function collapse() {
    setCollapsed(true);
    setAlunosOpen(false); // colapsada não tem espaço pra mostrar um submenu aberto
  }

  return (
    <div className="h-[640px] overflow-hidden">
      <Sidebar
        collapsed={collapsed}
        header={
          collapsed ? (
            <div className="flex w-full items-center justify-between">
              <MentorfyMarkIcon />
              <button
                type="button"
                onClick={() => setCollapsed(false)}
                className="flex h-[28px] w-[28px] items-center justify-center rounded-md bg-nav-chip text-nav-muted transition-colors hover:bg-hover hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-nav"
                aria-label="Expandir sidebar"
              >
                <MenuIcon />
              </button>
            </div>
          ) : (
            <div className="flex w-full items-center justify-between">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mentorfy-logo.svg" alt="Mentorfy" className="h-[19px] w-auto" />
              <button
                type="button"
                className="flex h-[28px] w-[28px] items-center justify-center rounded-md bg-nav-chip text-nav-muted transition-colors hover:bg-hover hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-nav"
                aria-label="Fechar"
                title="Fecha a sidebar como overlay (mobile) — não faz parte deste demo"
              >
                <CloseIcon />
              </button>
            </div>
          )
        }
        footer={
          collapsed ? (
            <div className="flex justify-center">
              <Avatar size="sm" initials="CM" status="online" />
            </div>
          ) : (
            <div className="flex w-full items-center gap-12">
              <Avatar size="sm" initials="CM" status="online" />
              <div className="flex flex-1 flex-col">
                <span className="text-body-sm font-medium">Carlos Mentor</span>
                <span className="text-body-xs text-ink-muted">Mentor Pro</span>
              </div>
              <button
                type="button"
                onClick={collapse}
                className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-md bg-nav-chip text-nav-muted transition-colors hover:bg-hover hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-nav"
                aria-label="Recolher sidebar"
              >
                <CollapseIcon />
              </button>
            </div>
          )
        }
      >
        {collapsed ? (
          <>
            {collapsedGroups.map((group, gi) => (
              <div key={gi} className="contents">
                {gi > 0 && <CollapsedDivider />}
                {group.map(({ label, icon: IconCmp }) => (
                  <SidebarItem
                    key={label}
                    active={label === ACTIVE_LABEL}
                    icon={<IconCmp />}
                    aria-label={label}
                    title={label}
                  />
                ))}
              </div>
            ))}
            <AjudaBlock collapsed />
          </>
        ) : (
          <>
            <SidebarGroupLabel>Gestão</SidebarGroupLabel>
            <SidebarItem icon={<PainelIcon />}>Painel</SidebarItem>
            <SidebarItem
              icon={<AlunosIcon />}
              expandable
              expanded={alunosOpen}
              onClick={() => setAlunosOpen((o) => !o)}
              aria-expanded={alunosOpen}
            >
              Alunos
            </SidebarItem>
            <SidebarSubmenu open={alunosOpen}>
              <SidebarSubItem>Turmas</SidebarSubItem>
              <SidebarSubItem>Certificados</SidebarSubItem>
            </SidebarSubmenu>
            <SidebarItem icon={<RelatoriosIcon />}>Relatórios</SidebarItem>
            <SidebarItem icon={<ReunioesIcon />}>Reuniões</SidebarItem>
            <SidebarItem icon={<IndicacoesIcon />} active>
              Indicações
            </SidebarItem>
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
            <AjudaBlock />
          </>
        )}
      </Sidebar>
    </div>
  );
}

/**
 * Demo isolado do Submenu, sem o resto da sidebar em volta — mais fácil de
 * estudar essa peça sozinha. Mostra a variante com SidebarSection (grupos
 * com label + divisor), diferente do submenu "flat" (sem grupos) do demo
 * principal — as duas formas são válidas, dependendo de quantos sub-itens o
 * módulo tem.
 */
function SubmenuDemo() {
  const [open, setOpen] = useState(true);
  const [activePage, setActivePage] = useState<string | null>("turmas");

  return (
    <div className="w-[280px] overflow-hidden rounded-lg bg-nav p-12">
      <SidebarItem
        icon={<AlunosIcon />}
        expandable
        expanded={open}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        Alunos
      </SidebarItem>
      <SidebarSubmenu open={open}>
        <SidebarSection label="Gestão">
          <SidebarSubItem active={activePage === "turmas"} onClick={() => setActivePage("turmas")}>
            Turmas
          </SidebarSubItem>
          <SidebarSubItem active={activePage === "certificados"} onClick={() => setActivePage("certificados")}>
            Certificados
          </SidebarSubItem>
        </SidebarSection>
        <SidebarSection label="Acompanhamento" divider={false}>
          <SidebarSubItem active={activePage === "progresso"} onClick={() => setActivePage("progresso")}>
            Progresso
          </SidebarSubItem>
          <SidebarSubItem active={activePage === "frequencia"} onClick={() => setActivePage("frequencia")}>
            Frequência
          </SidebarSubItem>
        </SidebarSection>
      </SidebarSubmenu>
    </div>
  );
}

function PropsTable({
  rows,
}: {
  rows: { prop: string; type: string; default?: string; description: string }[];
}) {
  return (
    <div className="rounded-lg border border-line overflow-hidden">
      <div className="grid grid-cols-[1fr_1.3fr_0.7fr_2fr] gap-12 px-16 py-8 bg-card">
        {["Prop", "Tipo", "Default", "Descrição"].map((h) => (
          <span key={h} className="text-body-xs font-bold uppercase tracking-[0.5px] text-ink-muted">
            {h}
          </span>
        ))}
      </div>
      {rows.map((r) => (
        <div key={r.prop} className="grid grid-cols-[1fr_1.3fr_0.7fr_2fr] gap-12 px-16 py-12 border-t border-line">
          <span className="text-body-sm text-ink font-mono">{r.prop}</span>
          <span className="text-body-sm text-ink-muted font-mono">{r.type}</span>
          <span className="text-body-sm text-ink-muted font-mono">{r.default ?? "—"}</span>
          <span className="text-body-sm text-ink-muted">{r.description}</span>
        </div>
      ))}
    </div>
  );
}

function DoCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-line overflow-hidden">
      <div className="h-[160px] overflow-hidden bg-nav p-16">{children}</div>
      <div className="p-16">
        <span className="mb-4 inline-block text-body-xs font-bold uppercase tracking-[0.5px] text-success">
          ✓ Do
        </span>
        <p className="text-body-sm font-medium text-ink mb-4">{title}</p>
        <p className="text-body-xs text-ink-muted">{description}</p>
      </div>
    </div>
  );
}

function DontCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-line overflow-hidden">
      <div className="h-[160px] overflow-hidden bg-nav p-16">{children}</div>
      <div className="p-16">
        <span className="mb-4 inline-block text-body-xs font-bold uppercase tracking-[0.5px] text-danger">
          ✕ Don&apos;t
        </span>
        <p className="text-body-sm font-medium text-ink mb-4">{title}</p>
        <p className="text-body-xs text-ink-muted">{description}</p>
      </div>
    </div>
  );
}

export default function SidebarPage() {
  return (
    <div>
      <PageHeader
        category="Complex Component"
        title="Sidebar"
        description="Navegação principal do produto, alternando entre modo expandido (280px) e colapsado (88px, ícone-only). É um contêiner de layout — a navegação é composta com SidebarItem, SidebarGroupLabel e SidebarSubmenu, já que rota ativa e permissões dependem da aplicação. IA, ícones, cores e espaçamento espelham a sidebar real do produto no Figma, valor por valor."
      />

      <div className="rounded-lg border border-line bg-card p-16 mb-32">
        <pre className="text-body-xs font-mono text-ink-muted overflow-x-auto">
{`import { Sidebar, SidebarItem, SidebarGroupLabel, SidebarSubmenu, SidebarSubItem } from "@brunosantossss/ds";

<Sidebar header={<Header />} footer={<Footer />}>
  <SidebarGroupLabel>Gestão</SidebarGroupLabel>
  <SidebarItem icon={<PainelIcon />}>Painel</SidebarItem>
  <SidebarItem icon={<AlunosIcon />} expandable expanded={open} onClick={() => setOpen(!open)}>
    Alunos
  </SidebarItem>
  <SidebarSubmenu open={open}>
    <SidebarSubItem>Turmas</SidebarSubItem>
    <SidebarSubItem>Certificados</SidebarSubItem>
  </SidebarSubmenu>
  <SidebarItem icon={<IndicacoesIcon />} active>Indicações</SidebarItem>
</Sidebar>`}
        </pre>
      </div>

      <div className="mb-48">
        <h2 className="text-body-xl font-bold mb-8">Visão geral</h2>
        <p className="text-body-sm text-ink-muted mb-24 max-w-[720px]">
          A Sidebar tem três regiões fixas: <strong>Header</strong> (logo + ação de recolher/expandir),{" "}
          <strong>Nav</strong> rolável com os módulos, e <strong>Footer</strong> com o usuário logado. Cada módulo é
          um <code className="text-body-xs font-mono text-ink">SidebarItem</code> — a maioria navega direto, e
          &quot;Alunos&quot; expande um <code className="text-body-xs font-mono text-ink">SidebarSubmenu</code> com
          animação em vez de navegar pra outra rota. Clique no botão de recolher no rodapé do demo abaixo (ou no
          menu no cabeçalho, já colapsada) pra ver a transição de largura ao vivo — e clique em &quot;Alunos&quot;
          pra ver o submenu abrir com o acordeão animado.
        </p>
        <div className="rounded-lg border border-line overflow-hidden">
          <HeroDemo />
        </div>
      </div>

      <div className="mb-48">
        <h2 className="text-body-xl font-bold mb-8">Submenu</h2>
        <p className="text-body-sm text-ink-muted mb-24 max-w-[720px]">
          <code className="text-body-xs font-mono text-ink">SidebarSubmenu</code> é um painel colapsável — o trigger
          é um <code className="text-body-xs font-mono text-ink">SidebarItem</code> normal com{" "}
          <code className="text-body-xs font-mono text-ink">expandable</code> (o caret já existe nele). Use quando
          um módulo tem sub-páginas acessíveis direto na sidebar, sem trocar de rota. Os sub-itens podem vir soltos
          (como no demo acima) ou agrupados com <code className="text-body-xs font-mono text-ink">SidebarSection</code>{" "}
          quando há muitos, como abaixo.
        </p>
        <div className="rounded-lg border border-line p-24">
          <SubmenuDemo />
        </div>
      </div>

      <div className="mb-48">
        <h2 className="text-body-xl font-bold mb-8">Anatomia &amp; espaçamento</h2>
        <p className="text-body-sm text-ink-muted mb-24 max-w-[720px]">
          Dimensões e tokens reais, extraídos direto do arquivo Figma via Plugin API (não estimados visualmente) — a
          fonte de verdade que corrigiu os bugs de espaçamento desta página em versões anteriores.
        </p>
        <div className="rounded-lg border border-line bg-card p-24 mb-16 flex justify-center overflow-x-auto">
          <svg width="560" height="300" viewBox="0 0 560 300" fontFamily="var(--font-sans)">
            <rect x="20" y="10" width="200" height="280" rx="10" fill="var(--color-nav)" stroke="var(--color-nav-line)" />
            <rect x="20" y="10" width="200" height="46" fill="none" stroke="var(--color-brand)" strokeDasharray="3 3" />
            <text x="30" y="70" fill="var(--color-nav-muted)" fontSize="10">Header · h-[64px]</text>
            <rect x="20" y="80" width="200" height="170" fill="none" stroke="var(--color-brand)" strokeDasharray="3 3" />
            <text x="30" y="264" fill="var(--color-nav-muted)" fontSize="10">Nav · p-12 · gap-0</text>
            <rect x="20" y="244" width="200" height="46" fill="none" stroke="var(--color-brand)" strokeDasharray="3 3" />
            <text x="228" y="18" fill="var(--color-ink-muted)" fontSize="10">w-[280px] (colapsada: w-[88px])</text>

            <rect x="70" y="96" width="150" height="40" rx="8" fill="var(--color-surface)" stroke="var(--color-brand)" />
            <rect x="70" y="96" width="4" height="40" fill="var(--color-brand)" />
            <rect x="86" y="108" width="16" height="16" fill="var(--color-ink-brand)" opacity="0.5" />
            <text x="240" y="102" fill="var(--color-ink-muted)" fontSize="10">item · h-[40px]</text>
            <text x="240" y="116" fill="var(--color-ink-muted)" fontSize="10">icon 20×20 · gap-8</text>
            <text x="240" y="130" fill="var(--color-ink-muted)" fontSize="10">pl-12 pr-12</text>
            <text x="240" y="144" fill="var(--color-ink-muted)" fontSize="10">active: barra 4px bg-brand</text>

            <text x="240" y="170" fill="var(--color-ink-muted)" fontSize="10">GRUPO</text>
            <text x="240" y="184" fill="var(--color-ink-muted)" fontSize="10">label: mt-14 · pt-4 · pb-6</text>
            <text x="240" y="198" fill="var(--color-ink-muted)" fontSize="10">11px · leading-[16.5px]</text>

            <text x="240" y="224" fill="var(--color-ink-muted)" fontSize="10">bordas: nav-line #1E1E1E</text>
            <text x="240" y="238" fill="var(--color-ink-muted)" fontSize="10">chip botão: nav-chip #1A1A1A</text>
          </svg>
        </div>
        <PropsTable
          rows={[
            { prop: "width expanded", type: "w-[280px]", description: "Largura da sidebar expandida. Colapsada usa w-[88px]." },
            { prop: "header height", type: "h-[64px]", description: "Altura fixa do header, padding px-24 (colapsada: px-12)." },
            { prop: "footer height", type: "h-[72px]", description: "Altura fixa do footer, padding px-20 (as duas variantes)." },
            { prop: "nav padding", type: "p-12", description: "Padding interno da área rolável de navegação." },
            { prop: "item height", type: "h-[40px]", description: "Altura fixa de cada SidebarItem." },
            { prop: "item icon", type: "20×20px", description: "Tamanho do ícone dentro de cada item." },
            { prop: "item gap/padding", type: "gap-8 · pl-12 pr-12", description: "Espaço entre ícone/label e padding horizontal do item." },
            { prop: "active bar", type: "w-[4px] · bg-brand", description: "Barra de destaque à esquerda do item ativo, dentro do próprio raio (rounded-l-md)." },
            { prop: "group label", type: "mt-14 · pt-4 · pb-6", description: "Espaço acima do label de grupo e padding interno — 11px/leading-[16.5px]/tracking-[1.2px]." },
            { prop: "collapsed divider", type: "mt-14 · mb-8 · mx-4", description: "Linha entre grupos na colapsada — recuada 4px de cada lado, não simétrica (14px antes, 8px depois)." },
            { prop: "border", type: "border-nav-line · #1E1E1E", description: "Borda direita do painel e divisórias do header/footer — mais escura que a border-line genérica do DS." },
            { prop: "icon-button chip", type: "bg-nav-chip · #1A1A1A", description: "Fundo dos botões-ícone do header/footer (fechar, recolher, expandir), 28×28px, rounded-md." },
            { prop: "submenu indent", type: "pl-24 (trigger) · pl-[14px] (sub-item)", description: "Recuo do painel do submenu e padding esquerdo de cada SidebarSubItem." },
            { prop: "submenu animation", type: "grid-rows [0fr→1fr] · 380ms", description: "Expansão via CSS grid-template-rows, sem JS medindo altura. Curva cubic-bezier(0.25,0.46,0.45,0.94)." },
            { prop: "submenu item fade", type: "sidebar-item-in · 260ms · 45ms/item", description: "Fade + slide de cada filho ao abrir: opacity 0→1, translateY -4px→0, stagger 45ms por índice." },
          ]}
        />
      </div>

      <div className="mb-48">
        <h2 className="text-body-xl font-bold mb-8">Acessibilidade</h2>
        <p className="text-body-sm text-ink-muted mb-16 max-w-[720px]">
          A Sidebar usa um landmark de navegação distinto do resto da página, com{" "}
          <code className="text-body-xs font-mono text-ink">aria-current</code> no item ativo — garantindo
          operabilidade completa por teclado e comunicação correta com leitores de tela.
        </p>
        <div className="mb-24">
          <h3 className="text-body-md font-bold mb-12">Já implementado pelo componente</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Landmark de navegação distinto",
                body: 'O contêiner interno é um <nav aria-label="Sidebar">, separado de qualquer header/nav da página — leitores de tela pulam direto pra ela.',
              },
              {
                title: "Navegação completa por teclado",
                body: "Todo SidebarItem/SidebarSubItem é um <button> nativo, alcançável via Tab. Enter e Space ativam.",
              },
              {
                title: 'aria-current="page" no item ativo',
                body: "Definido automaticamente quando active é true — sem depender só da cor pra indicar seleção.",
              },
              {
                title: "Foco visível em todos os itens",
                body: "focus-visible:ring-2 em todo item de navegação — sem outline:none sem substituto.",
              },
              {
                title: "aria-label nos itens colapsados",
                body: "No modo ícone-only, cada SidebarItem recebe aria-label (e title, de brinde) com o nome do módulo.",
              },
              {
                title: "prefers-reduced-motion respeitado",
                body: "A animação do submenu e as transições de largura/cor encolhem pra ~0ms quando o usuário pede menos movimento no sistema.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-line p-16">
                <p className="text-body-sm font-medium text-ink mb-4">{item.title}</p>
                <p className="text-body-xs text-ink-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h3 className="text-body-md font-bold mb-12">O que pode ser quebrado por fora</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Omitir aria-label no modo colapsado",
                body: "Se um SidebarItem for usado sem children E sem aria-label, o item fica sem nome acessível — só um ícone mudo.",
              },
              {
                title: "Indicar o item ativo só por cor",
                body: "Adicionar destaque visual próprio sem usar a prop active (que já seta aria-current) é inacessível pra daltônicos e invisível pra leitor de tela.",
              },
              {
                title: "Trocar o nav por uma div",
                body: "Se o wrapper interno for reescrito, remover o <nav> apaga o landmark — leitores de tela perdem o atalho direto pra sidebar.",
              },
              {
                title: "Abrir o submenu sem manter o foco",
                body: "Ao abrir/fechar via teclado, o foco deve continuar no trigger (já é o caso por padrão) — evite mover o foco pro primeiro sub-item automaticamente.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-line p-16">
                <p className="text-body-sm font-medium text-danger mb-4">{item.title}</p>
                <p className="text-body-xs text-ink-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h3 className="text-body-md font-bold mb-12">Como testar manualmente</h3>
          <ol className="text-body-sm text-ink-muted list-decimal pl-20 flex flex-col gap-8">
            <li>Pressione Tab a partir do topo da página — o foco deve entrar na Sidebar e percorrer os itens em ordem visual, de cima pra baixo.</li>
            <li>Com foco em &quot;Alunos&quot;, pressione Enter/Space — o submenu deve abrir com animação e o foco permanecer no trigger.</li>
            <li>
              Inspecione o DOM e confirme que o wrapper de navegação é um{" "}
              <code className="font-mono">&lt;nav aria-label=&quot;Sidebar&quot;&gt;</code>.
            </li>
            <li>
              Verifique o item ativo (&quot;Indicações&quot;) no DevTools — deve ter{" "}
              <code className="font-mono">aria-current=&quot;page&quot;</code>.
            </li>
            <li>Colapse a sidebar e passe o mouse/Tab pelos ícones — cada um deve anunciar seu nome (aria-label) mesmo sem texto visível.</li>
            <li>Nas Preferências do sistema, ative &quot;reduzir movimento&quot; e recarregue — a animação do submenu deve praticamente sumir.</li>
          </ol>
          <p className="text-body-xs text-ink-muted mt-12">
            Leitores de tela recomendados: VoiceOver (macOS/iOS), NVDA + Firefox (Windows) e TalkBack (Android).
          </p>
        </div>

        <div>
          <h3 className="text-body-md font-bold mb-12">Critérios WCAG 2.1 / 2.2</h3>
          <PropsTable
            rows={[
              { prop: "1.4.3", type: "AA", default: "Contraste", description: "Labels dos itens (ink #DBD8D4) sobre o fundo nav (#0A0A0A) ≥ 4.5:1." },
              { prop: "2.1.1", type: "A", default: "Teclado", description: "Todos os itens e o trigger do submenu são operáveis via Tab e Enter/Space." },
              { prop: "2.4.1", type: "A", default: "Ignorar Blocos", description: "A Sidebar como nav landmark permite pular direto pra ela." },
              { prop: "2.4.3", type: "A", default: "Ordem do Foco", description: "A ordem de Tab respeita a sequência visual top-down dos itens." },
              { prop: "2.4.7", type: "AA", default: "Foco Visível", description: "Todos os itens exibem anel focus-visible, sem outline:none sem substituto." },
              { prop: "4.1.2", type: "A", default: "Nome, Função, Valor", description: 'aria-current="page" no item ativo; aria-expanded no trigger do submenu.' },
            ]}
          />
        </div>
      </div>

      <div className="mb-48">
        <h2 className="text-body-xl font-bold mb-16">Dos &amp; Don&apos;ts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <DoCard
            title="Use ícone em todo item de nível raiz"
            description="No modo colapsado o ícone é o único identificador visível — item sem ícone fica invisível pro usuário."
          >
            <div className="flex flex-col gap-4">
              <SidebarItem icon={<PainelIcon />} active>
                Painel
              </SidebarItem>
              <SidebarItem icon={<AlunosIcon />}>Alunos</SidebarItem>
            </div>
          </DoCard>
          <DontCard
            title="Não omita o ícone"
            description="Sem ícone, colapsar a sidebar torna esse item completamente inacessível visualmente."
          >
            <div className="flex flex-col gap-4">
              <SidebarItem icon={<PainelIcon />} active>
                Painel
              </SidebarItem>
              <SidebarItem>Alunos</SidebarItem>
            </div>
          </DontCard>
          <DoCard
            title="Use expandable só pra módulos com sub-páginas"
            description="O caret indica que o item abre um submenu — itens de navegação direta não devem ter caret."
          >
            <div className="flex flex-col gap-4">
              <SidebarItem icon={<PainelIcon />} active>
                Painel
              </SidebarItem>
              <SidebarItem icon={<AlunosIcon />} expandable>
                Alunos
              </SidebarItem>
            </div>
          </DoCard>
          <DontCard
            title="Não use a Sidebar pra ações"
            description="Botões de ação pertencem ao header ou ao corpo da página — a sidebar é exclusivamente navegação."
          >
            <div className="flex flex-col gap-4">
              <SidebarItem icon={<PainelIcon />} active>
                Painel
              </SidebarItem>
              <SidebarItem icon={<AiStudioIcon />} className="text-ink-brand">
                + Nova turma
              </SidebarItem>
            </div>
          </DontCard>
        </div>
      </div>

      <div className="mb-48">
        <h2 className="text-body-xl font-bold mb-16">Props</h2>

        <h3 className="text-body-md font-bold mb-8 mt-24">Sidebar</h3>
        <PropsTable
          rows={[
            { prop: "collapsed", type: "boolean", default: "false", description: "Alterna pro modo ícone-only, largura 88px em vez de 280px." },
            { prop: "header", type: "ReactNode", description: "Conteúdo do header fixo — logo, botão de fechar/expandir." },
            { prop: "footer", type: "ReactNode", description: "Conteúdo do footer fixo — usuário logado, botão de recolher." },
            { prop: "children", type: "ReactNode", description: "SidebarGroupLabel, SidebarItem e SidebarSubmenu." },
            { prop: "className", type: "string", description: "Classes adicionais no aside." },
          ]}
        />

        <h3 className="text-body-md font-bold mb-8 mt-24">SidebarItem</h3>
        <PropsTable
          rows={[
            { prop: "active", type: "boolean", default: "false", description: 'Estado ativo — aplica bg-surface, barra de destaque e aria-current="page".' },
            { prop: "icon", type: "ReactNode", description: "Ícone 20×20px do item." },
            { prop: "badge", type: "number", description: "Contador exibido à direita (mutuamente exclusivo com expandable)." },
            { prop: "expandable", type: "boolean", default: "false", description: "Mostra o caret de expandir à direita — combine com um SidebarSubmenu logo depois." },
            { prop: "expanded", type: "boolean", default: "false", description: "Rotaciona o caret 180°. Só tem efeito com expandable." },
            { prop: "children", type: "ReactNode", description: "Label do item. Omitido = item ícone-only (modo colapsado) — sempre passe aria-label nesse caso." },
          ]}
        />

        <h3 className="text-body-md font-bold mb-8 mt-24">SidebarGroupLabel</h3>
        <PropsTable
          rows={[
            { prop: "children", type: "ReactNode", description: 'Texto do grupo (ex: "Gestão"), renderizado em uppercase automaticamente.' },
            { prop: "className", type: "string", description: "Classes adicionais — use mt-14 nos grupos além do primeiro." },
          ]}
        />

        <h3 className="text-body-md font-bold mb-8 mt-24">SidebarSubmenu</h3>
        <PropsTable
          rows={[
            { prop: "open", type: "boolean", description: "Controla se o painel está aberto — sempre controlado por quem usa." },
            { prop: "children", type: "ReactNode", description: "SidebarSubItem soltos ou agrupados em SidebarSection." },
            { prop: "className", type: "string", description: "Classes adicionais no contêiner interno de itens." },
          ]}
        />

        <h3 className="text-body-md font-bold mb-8 mt-24">SidebarSubItem</h3>
        <PropsTable
          rows={[
            { prop: "active", type: "boolean", default: "false", description: 'Estado ativo — aplica bg-surface e aria-current="page".' },
            { prop: "children", type: "ReactNode", description: "Texto do sub-item. Sem ícone — o texto alinha com o ícone do trigger pai." },
            { prop: "className", type: "string", description: "Classes adicionais no button." },
          ]}
        />

        <h3 className="text-body-md font-bold mb-8 mt-24">SidebarSection</h3>
        <PropsTable
          rows={[
            { prop: "label", type: "string", description: 'Label pequeno do grupo (ex: "Gestão"), 10px uppercase.' },
            { prop: "divider", type: "boolean", default: "true", description: "Mostra uma linha de 1px após o grupo — desative no último grupo do submenu." },
            { prop: "children", type: "ReactNode", description: "SidebarSubItems deste grupo." },
          ]}
        />
      </div>

      <div>
        <h3 className="text-body-lg font-bold mb-12">Uso</h3>
        <ul className="text-body-sm text-ink-muted list-disc pl-20 flex flex-col gap-4">
          <li>O painel da sidebar usa o token bg-nav (mais escuro/frio que bg-page), pra o item Active (bg-surface) se destacar visualmente do fundo — assim como no Figma.</li>
          <li>SidebarGroupLabel separa os grupos de navegação (Gestão, Mentorias, Clientes, etc.), espelhando as seções da sidebar real do produto.</li>
          <li>O botão &quot;Fechar&quot; (X) no header expandido é conceitualmente diferente do botão &quot;Recolher&quot; do rodapé: o primeiro fecharia a sidebar como overlay no mobile (fora do escopo deste componente), o segundo alterna collapsed — por isso só o segundo está funcional no demo acima.</li>
          <li>Em modo colapsado não existe flyout de submenu ao passar o mouse — módulos com sub-páginas (como &quot;Alunos&quot;) mostram só o ícone; a navegação pro submenu exige expandir a sidebar primeiro.</li>
        </ul>
      </div>
    </div>
  );
}
