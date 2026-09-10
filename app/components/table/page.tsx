import { ReactNode } from "react";
import { PageHeader } from "@/components/PageHeader";
import { CodeBlock } from "@/components/CodeBlock";
import { Table, TableRow, TableHeaderCell, TableCell, Avatar, Badge, Checkbox, Switch, Radio, Rating } from "@brunosantossss/ds";

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M11.3 2.3a1.4 1.4 0 0 1 2 2L4.5 13 1.5 14l1-3 8.8-8.7Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2.5 4.5h11M6 4.5V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5M12.5 4.5 12 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1L3.5 4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CaretDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3.5 5.25 7 8.75l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Composição do Type=Checked do Figma: círculo verde 24px + check branco — um indicador de "concluído/aprovado", distinto do Checkbox marcado. */
function CheckedIcon() {
  return (
    <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-success" aria-label="Concluído">
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M2.5 7.5 5.5 10.5 11.5 3.5" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/** Botão-ícone 32×32 usado nos Types Button/Button Group — chip em --color-table-line, igual ao Figma. */
function IconButton({ label, children }: { label: string; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className="flex h-32 w-32 shrink-0 items-center justify-center rounded-md bg-table-line text-ink transition-colors hover:bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-card"
    >
      {children}
    </button>
  );
}

function ActionsGroup() {
  return (
    <div className="flex items-center gap-4">
      <IconButton label="Ver">
        <EyeIcon />
      </IconButton>
      <IconButton label="Editar">
        <PencilIcon />
      </IconButton>
      <IconButton label="Excluir">
        <TrashIcon />
      </IconButton>
    </div>
  );
}

function AvatarGroupPreview({ items }: { items: { initials: string }[] }) {
  return (
    <div className="flex items-center">
      {items.map((a, i) => (
        <div key={i} className={`rounded-full ring-2 ring-page ${i > 0 ? "-ml-8" : ""}`}>
          <Avatar size="sm" initials={a.initials} />
        </div>
      ))}
    </div>
  );
}

const alunos = [
  { name: "Ana Souza", initials: "AS", status: "success" as const, statusLabel: "Ativo", progress: 82, notify: true },
  { name: "Carlos Lima", initials: "CL", status: "success" as const, statusLabel: "Ativo", progress: 45, notify: true },
  { name: "Beatriz Alves", initials: "BA", status: "neutral" as const, statusLabel: "Pendente", progress: 20, notify: false },
  { name: "João Pedro", initials: "JP", status: "danger" as const, statusLabel: "Inativo", progress: 12, notify: false },
];

const turmas = [
  {
    nome: "Marketing Digital",
    mentor: "Ana Souza",
    mentorIniciais: "AS",
    mentores: [{ initials: "AS" }, { initials: "CL" }, { initials: "BA" }, { initials: "JP" }],
    tags: ["Marketing", "Growth", "+2"],
    status: "success" as const,
    statusLabel: "Ativa",
    rating: 4.8,
    reviews: 132,
    plano: "Anual",
  },
  {
    nome: "Vendas Consultivas",
    mentor: "Carlos Lima",
    mentorIniciais: "CL",
    mentores: [{ initials: "CL" }, { initials: "AS" }],
    tags: ["Vendas", "B2B"],
    status: "success" as const,
    statusLabel: "Ativa",
    rating: 4.5,
    reviews: 87,
    plano: "Mensal",
  },
  {
    nome: "Gestão de Produto",
    mentor: "Beatriz Alves",
    mentorIniciais: "BA",
    mentores: [{ initials: "BA" }],
    tags: ["Produto"],
    status: "neutral" as const,
    statusLabel: "Em breve",
    rating: 4.2,
    reviews: 21,
    plano: "Mensal",
  },
];

const cellTypes: { name: string; content: ReactNode; note?: string }[] = [
  {
    name: "Lead",
    content: (
      <>
        <Avatar size="sm" initials="AS" />
        <span className="text-body-sm text-ink">Ana Souza</span>
      </>
    ),
  },
  { name: "Avatar", content: <Avatar size="sm" initials="CL" status="online" /> },
  { name: "Avatar Group", content: <AvatarGroupPreview items={[{ initials: "AS" }, { initials: "CL" }, { initials: "BA" }]} /> },
  { name: "Badge", content: <Badge color="success" dot>Ativo</Badge> },
  {
    name: "Badges Group",
    content: (
      <div className="flex gap-4">
        <Badge size="sm">Marketing</Badge>
        <Badge size="sm">Growth</Badge>
        <Badge size="sm">+2</Badge>
      </div>
    ),
  },
  {
    name: "Button",
    content: (
      <IconButton label="Mais opções">
        <CaretDownIcon />
      </IconButton>
    ),
  },
  { name: "Button Group", content: <ActionsGroup /> },
  { name: "Checkbox", content: <Checkbox aria-label="Selecionar" /> },
  { name: "Checked", content: <CheckedIcon /> },
  { name: "Radio", content: <Radio checked aria-label="Plano selecionado" /> },
  { name: "Rating", content: <Rating value={4.8} count={132} /> },
  { name: "Switch", content: <Switch defaultChecked aria-label="Notificar" /> },
];

function PropsTable({ rows }: { rows: { prop: string; type: string; default?: string; description: string }[] }) {
  return (
    <div className="rounded-lg border border-line-subtle overflow-hidden">
      <div className="grid grid-cols-[1fr_1.3fr_0.7fr_2fr] gap-12 px-16 py-8 bg-card">
        {["Prop", "Tipo", "Default", "Descrição"].map((h) => (
          <span key={h} className="text-body-xs font-bold uppercase tracking-[0.5px] text-ink-muted">
            {h}
          </span>
        ))}
      </div>
      {rows.map((r) => (
        <div key={r.prop} className="grid grid-cols-[1fr_1.3fr_0.7fr_2fr] gap-12 px-16 py-12 border-t border-line-subtle">
          <span className="text-body-sm text-ink font-mono">{r.prop}</span>
          <span className="text-body-sm text-ink-muted font-mono">{r.type}</span>
          <span className="text-body-sm text-ink-muted font-mono">{r.default ?? "—"}</span>
          <span className="text-body-sm text-ink-muted">{r.description}</span>
        </div>
      ))}
    </div>
  );
}

function DoCard({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-line-subtle overflow-hidden">
      <div className="overflow-hidden bg-card p-16">{children}</div>
      <div className="p-16">
        <span className="mb-4 inline-block text-body-xs font-bold uppercase tracking-[0.5px] text-success">✓ Do</span>
        <p className="text-body-sm font-medium text-ink mb-4">{title}</p>
        <p className="text-body-xs text-ink-muted">{description}</p>
      </div>
    </div>
  );
}

function DontCard({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-line-subtle overflow-hidden">
      <div className="overflow-hidden bg-card p-16">{children}</div>
      <div className="p-16">
        <span className="mb-4 inline-block text-body-xs font-bold uppercase tracking-[0.5px] text-danger">✕ Don&apos;t</span>
        <p className="text-body-sm font-medium text-ink mb-4">{title}</p>
        <p className="text-body-xs text-ink-muted">{description}</p>
      </div>
    </div>
  );
}

export default function TablePage() {
  return (
    <div>
      <PageHeader
        category="Complex Component"
        title="Table"
        description="Exibe dados estruturados em linhas e colunas. Em vez de um componente por tipo de coluna (como o Figma modela com o eixo Type da Table Cell), o código expõe primitivas — Table, TableRow, TableHeaderCell, TableCell — que se compõem com Avatar, Badge, Checkbox, Switch, Radio e Rating já existentes."
      />

      <CodeBlock
        className="mb-32"
        code={`import { Table, TableRow, TableHeaderCell, TableCell, Badge } from "@brunosantossss/ds";

<Table>
  <thead>
    <TableRow>
      <TableHeaderCell sortable>Aluno</TableHeaderCell>
      <TableHeaderCell align="center">Status</TableHeaderCell>
    </TableRow>
  </thead>
  <tbody>
    <TableRow>
      <TableCell>Ana Souza</TableCell>
      <TableCell align="center">
        <Badge color="success" dot>Ativo</Badge>
      </TableCell>
    </TableRow>
  </tbody>
</Table>`}
      />

      <div className="mb-48">
        <h2 className="text-body-xl font-bold mb-8">Visão geral</h2>
        <p className="text-body-sm text-ink-muted mb-24 max-w-[720px]">
          <code className="text-body-xs font-mono text-ink">TableCell</code> e{" "}
          <code className="text-body-xs font-mono text-ink">TableHeaderCell</code> já centralizam o conteúdo
          verticalmente e alinham horizontalmente sozinhos via a prop{" "}
          <code className="text-body-xs font-mono text-ink">align</code> — sem precisar envolver Switch ou
          Checkbox num <code className="text-body-xs font-mono text-ink">&lt;div className=&quot;flex&quot;&gt;</code>{" "}
          à parte, como versões anteriores exigiam.
        </p>
        <div className="rounded-lg border border-line-subtle p-24">
          <Table>
            <thead>
              <TableRow>
                <TableHeaderCell className="w-48" align="center">
                  <Checkbox aria-label="Selecionar todos" />
                </TableHeaderCell>
                <TableHeaderCell sortable sortDirection="ascending">
                  Aluno
                </TableHeaderCell>
                <TableHeaderCell align="center">Status</TableHeaderCell>
                <TableHeaderCell align="right">Progresso</TableHeaderCell>
                <TableHeaderCell align="center">Notificar</TableHeaderCell>
                <TableHeaderCell align="right">Ações</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              {alunos.map((s) => (
                <TableRow key={s.name}>
                  <TableCell align="center">
                    <Checkbox aria-label={`Selecionar ${s.name}`} />
                  </TableCell>
                  <TableCell>
                    <Avatar size="sm" initials={s.initials} />
                    <span>{s.name}</span>
                  </TableCell>
                  <TableCell align="center">
                    <Badge color={s.status} dot>
                      {s.statusLabel}
                    </Badge>
                  </TableCell>
                  <TableCell align="right">{s.progress}%</TableCell>
                  <TableCell align="center">
                    <Switch size="sm" defaultChecked={s.notify} aria-label={`Notificar ${s.name}`} />
                  </TableCell>
                  <TableCell align="right">
                    <ActionsGroup />
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <div className="mb-48">
        <h2 className="text-body-xl font-bold mb-8">Tipo de conteúdo</h2>
        <p className="text-body-sm text-ink-muted mb-24 max-w-[720px]">
          O Figma documenta 12 composições comuns de conteúdo pra uma TableCell — todas construídas a partir de
          componentes que já existiam no DS. As exceções são{" "}
          <code className="text-body-xs font-mono text-ink">Radio</code> e{" "}
          <code className="text-body-xs font-mono text-ink">Rating</code>: só existiam como conteúdo dentro da
          própria Table Cell no Figma (sem component set avulso), então viraram componentes novos do pacote
          nesta rodada.
        </p>
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 lg:grid-cols-4">
          {cellTypes.map((t) => (
            <div key={t.name} className="rounded-lg border border-line-subtle overflow-hidden">
              <div className="flex h-56 items-center gap-8 overflow-hidden bg-card px-16">{t.content}</div>
              <p className="border-t border-line-subtle px-16 py-8 text-body-xs font-mono text-ink-muted">{t.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-48">
        <h2 className="text-body-xl font-bold mb-8">Tamanho</h2>
        <p className="text-body-sm text-ink-muted mb-24 max-w-[720px]">
          3 alturas fixas, extraídas direto do Figma: <code className="text-body-xs font-mono text-ink">lg</code>{" "}
          = 64px, <code className="text-body-xs font-mono text-ink">md</code> = 56px (padrão),{" "}
          <code className="text-body-xs font-mono text-ink">sm</code> = 48px. O texto do conteúdo fica no mesmo
          tamanho (14px) nos três — só a altura da célula muda. Use{" "}
          <code className="text-body-xs font-mono text-ink">lg</code> em tabelas principais e{" "}
          <code className="text-body-xs font-mono text-ink">sm</code> em painéis laterais ou listagens compactas.
        </p>
        <div className="rounded-lg border border-line-subtle overflow-hidden">
          <table className="w-full border-collapse [&_tbody_tr:last-child>td]:border-b-0">
            <tbody>
              {(["lg", "md", "sm"] as const).map((size) => (
                <tr key={size}>
                  <TableCell size={size}>
                    <Avatar size="sm" initials="AS" />
                    <span>Ana Souza</span>
                  </TableCell>
                  <TableCell size={size} align="right">
                    <span className="font-mono text-body-xs text-ink-muted">
                      {size} · {{ sm: 48, md: 56, lg: 64 }[size]}px
                    </span>
                  </TableCell>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-48">
        <h2 className="text-body-xl font-bold mb-8">Alinhamento</h2>
        <p className="text-body-sm text-ink-muted mb-24 max-w-[720px]">
          3 opções de alinhamento horizontal. Use <code className="text-body-xs font-mono text-ink">left</code>{" "}
          pra texto e Lead, <code className="text-body-xs font-mono text-ink">center</code> pra controls
          (checkbox, switch, radio) e <code className="text-body-xs font-mono text-ink">right</code> pra
          valores numéricos.
        </p>
        <div className="rounded-lg border border-line-subtle overflow-hidden">
          <table className="w-full border-collapse [&_tbody_tr:last-child>td]:border-b-0">
            <tbody>
              <tr>
                <TableCell align="left">
                  <Avatar size="sm" initials="AS" />
                  <span>Ana Souza</span>
                </TableCell>
                <TableCell align="center">
                  <Badge color="success" dot>
                    Ativo
                  </Badge>
                </TableCell>
                <TableCell align="right">82%</TableCell>
              </tr>
              <tr>
                <TableCell align="left">
                  <Avatar size="sm" initials="CL" />
                  <span>Carlos Lima</span>
                </TableCell>
                <TableCell align="center">
                  <Badge color="neutral" dot>
                    Pendente
                  </Badge>
                </TableCell>
                <TableCell align="right">45%</TableCell>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-48">
        <h2 className="text-body-xl font-bold mb-8">Table Header Cell</h2>
        <p className="text-body-sm text-ink-muted mb-24 max-w-[720px]">
          Altura fixa de 44px, fundo <code className="text-body-xs font-mono text-ink">--color-table-line</code>
          , padding 16px. Aceita rótulo de texto e ícone de ordenação opcional (
          <code className="text-body-xs font-mono text-ink">sortable</code>) — sem variante própria no Figma,
          adicionado por ser um recurso comum de tabela real, sem mudar a aparência das colunas não-ordenáveis.
        </p>
        <div className="rounded-lg border border-line-subtle overflow-hidden mb-16">
          <table className="w-full border-collapse [&_tbody_tr:last-child>td]:border-b-0">
            <thead>
              <tr>
                <TableHeaderCell className="w-48" align="center">
                  <Checkbox aria-label="Selecionar todos" />
                </TableHeaderCell>
                <TableHeaderCell sortable sortDirection="ascending">
                  Com sort
                </TableHeaderCell>
                <TableHeaderCell>Sem sort</TableHeaderCell>
              </tr>
            </thead>
          </table>
        </div>
        <CodeBlock
          code={`<TableHeaderCell sortable sortDirection="ascending">
  Última alteração
</TableHeaderCell>
<TableHeaderCell>Ações</TableHeaderCell>`}
        />
      </div>

      <div className="mb-48">
        <h2 className="text-body-xl font-bold mb-8">Em contexto</h2>
        <p className="text-body-sm text-ink-muted mb-24 max-w-[720px]">
          TableCell e TableHeaderCell compõem uma tabela de dados real. Combine tipos de célula diferentes em
          colunas — aqui, Lead, Avatar Group, Badges Group, Rating e Radio — pra layouts ricos e consistentes.
        </p>
        <div className="rounded-lg border border-line-subtle p-24">
          <Table>
            <thead>
              <TableRow>
                <TableHeaderCell sortable sortDirection="ascending">
                  Turma
                </TableHeaderCell>
                <TableHeaderCell align="center">Mentores</TableHeaderCell>
                <TableHeaderCell>Tags</TableHeaderCell>
                <TableHeaderCell align="center">Status</TableHeaderCell>
                <TableHeaderCell align="right">Avaliação</TableHeaderCell>
                <TableHeaderCell align="center">Plano anual</TableHeaderCell>
                <TableHeaderCell align="right">Ações</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              {turmas.map((t) => (
                <TableRow key={t.nome}>
                  <TableCell>
                    <Avatar size="sm" initials={t.mentorIniciais} />
                    <span>{t.nome}</span>
                  </TableCell>
                  <TableCell align="center">
                    <AvatarGroupPreview items={t.mentores} />
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-4">
                      {t.tags.map((tag) => (
                        <Badge key={tag} size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <Badge color={t.status} dot>
                      {t.statusLabel}
                    </Badge>
                  </TableCell>
                  <TableCell align="right">
                    <Rating value={t.rating} count={t.reviews} />
                  </TableCell>
                  <TableCell align="center">
                    <Radio checked={t.plano === "Anual"} aria-label={`Plano anual — ${t.nome}`} />
                  </TableCell>
                  <TableCell align="right">
                    <ActionsGroup />
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <div className="mb-48">
        <h2 className="text-body-xl font-bold mb-8">Anatomia &amp; espaçamento</h2>
        <p className="text-body-sm text-ink-muted mb-24 max-w-[720px]">
          Dimensões e tokens reais, extraídos direto do arquivo Figma via Plugin API (component sets &quot;Table
          Cell&quot; e &quot;Table Header Cell&quot;).
        </p>
        <div className="rounded-lg border border-line-subtle bg-card p-24 mb-16 flex justify-center overflow-x-auto">
          <svg width="640" height="285" viewBox="0 0 640 285" fontFamily="var(--font-sans)">
            {/* Header cell */}
            <rect x="40" y="20" width="220" height="44" fill="var(--color-table-line)" stroke="var(--color-table-line)" />
            <text x="56" y="46" fontSize="12" fontWeight="700" fill="var(--color-ink)" fontFamily="ui-monospace, monospace">
              Header Cell
            </text>
            {/* Data cells */}
            <rect x="40" y="64" width="220" height="64" fill="var(--color-nav)" stroke="var(--color-table-line)" />
            <rect x="40" y="128" width="220" height="56" fill="var(--color-nav)" stroke="var(--color-table-line)" />
            <rect x="40" y="184" width="220" height="48" fill="var(--color-nav)" stroke="var(--color-table-line)" />
            <text x="56" y="100" fontSize="11" fontWeight="700" fill="var(--color-ink)" fontFamily="ui-monospace, monospace">
              lg
            </text>
            <text x="56" y="160" fontSize="11" fontWeight="700" fill="var(--color-ink)" fontFamily="ui-monospace, monospace">
              md
            </text>
            <text x="56" y="212" fontSize="11" fontWeight="700" fill="var(--color-ink)" fontFamily="ui-monospace, monospace">
              sm
            </text>

            {/* Dimension lines (redline style) */}
            <g stroke="var(--color-danger)" strokeWidth="2">
              <line x1="300" y1="20" x2="300" y2="64" />
              <line x1="296" y1="20" x2="304" y2="20" />
              <line x1="296" y1="64" x2="304" y2="64" />
              <line x1="300" y1="64" x2="300" y2="128" />
              <line x1="296" y1="64" x2="304" y2="64" />
              <line x1="296" y1="128" x2="304" y2="128" />
              <line x1="300" y1="128" x2="300" y2="184" />
              <line x1="296" y1="128" x2="304" y2="128" />
              <line x1="296" y1="184" x2="304" y2="184" />
              <line x1="300" y1="184" x2="300" y2="232" />
              <line x1="296" y1="184" x2="304" y2="184" />
              <line x1="296" y1="232" x2="304" y2="232" />
            </g>
            <g fontFamily="ui-monospace, monospace" fontSize="10" fontWeight="700" fill="#fff">
              <rect x="310" y="33" width="42" height="18" rx="4" fill="var(--color-danger)" />
              <text x="331" y="46" textAnchor="middle">
                44px
              </text>
              <rect x="310" y="87" width="42" height="18" rx="4" fill="var(--color-danger)" />
              <text x="331" y="100" textAnchor="middle">
                64px
              </text>
              <rect x="310" y="147" width="42" height="18" rx="4" fill="var(--color-danger)" />
              <text x="331" y="160" textAnchor="middle">
                56px
              </text>
              <rect x="310" y="199" width="42" height="18" rx="4" fill="var(--color-danger)" />
              <text x="331" y="212" textAnchor="middle">
                48px
              </text>
            </g>

            {/* Detail column */}
            <g fontFamily="ui-monospace, monospace" fontSize="10.5">
              <circle cx="386" cy="36" r="3" fill="var(--color-brand)" />
              <text x="394" y="40">
                <tspan fill="var(--color-ink)" fontWeight="700">
                  px-16
                </tspan>
                <tspan fill="var(--color-ink-muted)"> · padding horizontal</tspan>
              </text>
              <circle cx="386" cy="70" r="3" fill="var(--color-brand)" />
              <text x="394" y="74">
                <tspan fill="var(--color-ink)" fontWeight="700">
                  gap-8
                </tspan>
                <tspan fill="var(--color-ink-muted)"> · entre ícone/avatar e texto</tspan>
              </text>
              <circle cx="386" cy="104" r="3" fill="var(--color-brand)" />
              <text x="394" y="108">
                <tspan fill="var(--color-ink)" fontWeight="700">
                  items-center
                </tspan>
                <tspan fill="var(--color-ink-muted)"> · alinhamento vertical</tspan>
              </text>
              <circle cx="386" cy="138" r="3" fill="var(--color-brand)" />
              <text x="394" y="142">
                <tspan fill="var(--color-ink)" fontWeight="700">
                  text-[14px]
                </tspan>
                <tspan fill="var(--color-ink-muted)"> · mesmo em lg/md/sm</tspan>
              </text>
              <circle cx="386" cy="172" r="3" fill="var(--color-brand)" />
              <text x="394" y="176">
                <tspan fill="var(--color-ink)" fontWeight="700">
                  table-line
                </tspan>
                <tspan fill="var(--color-ink-muted)"> #262626 · borda/fundo header</tspan>
              </text>
            </g>

            {/* Bottom token badges */}
            <g fontFamily="ui-monospace, monospace" fontSize="10" fontWeight="700" fill="var(--color-ink-on-brand)">
              <rect x="120" y="245" width="60" height="20" rx="10" fill="var(--color-brand)" />
              <text x="150" y="259" textAnchor="middle">
                h-[64px]
              </text>
              <rect x="188" y="245" width="60" height="20" rx="10" fill="var(--color-brand)" />
              <text x="218" y="259" textAnchor="middle">
                h-[56px]
              </text>
              <rect x="256" y="245" width="60" height="20" rx="10" fill="var(--color-brand)" />
              <text x="286" y="259" textAnchor="middle">
                h-[48px]
              </text>
              <rect x="324" y="245" width="60" height="20" rx="10" fill="var(--color-brand)" />
              <text x="354" y="259" textAnchor="middle">
                h-[44px]
              </text>
              <rect x="392" y="245" width="56" height="20" rx="10" fill="var(--color-brand)" />
              <text x="420" y="259" textAnchor="middle">
                px-16
              </text>
            </g>
          </svg>
        </div>
        <PropsTable
          rows={[
            { prop: "height · LG", type: "h-64 · 64px", description: "Altura da TableCell no tamanho Large — use em tabelas principais." },
            { prop: "height · MD", type: "h-56 · 56px", description: "Altura padrão da TableCell." },
            { prop: "height · SM", type: "h-48 · 48px", description: "Altura compacta — painéis laterais ou listagens densas." },
            { prop: "header height", type: "h-44 · 44px", description: "Altura fixa da TableHeaderCell, igual nos três tamanhos de célula." },
            { prop: "padding", type: "px-16 · 16px", description: "Padding horizontal de todas as células (dado e cabeçalho)." },
            { prop: "content gap", type: "gap-8 · 8px", description: "Espaço entre ícone/avatar e texto dentro da célula (ex: Lead)." },
            { prop: "label text", type: "text-[14px]", description: "Tamanho do texto de conteúdo — igual nos três tamanhos de célula (só a altura muda)." },
            { prop: "row/header line", type: "table-line · #262626", description: "Cor de fundo do header e da divisória entre linhas — mesmo valor extraído do Figma nos dois casos." },
            { prop: "header text", type: "12px · bold · ink", description: "Tipografia do label do cabeçalho — quase-branco, alto contraste sobre o fundo table-line." },
            { prop: "sort icon", type: "14×14px · caret", description: "Ícone de ordenação exibido quando sortable=true — não é uma variante do Figma, adicionado no código." },
          ]}
        />
      </div>

      <div className="mb-48">
        <h2 className="text-body-xl font-bold mb-8">Acessibilidade</h2>
        <p className="text-body-sm text-ink-muted mb-16 max-w-[720px]">
          A Table usa <code className="text-body-xs font-mono text-ink">th</code>/
          <code className="text-body-xs font-mono text-ink">td</code> nativos com{" "}
          <code className="text-body-xs font-mono text-ink">scope</code> e{" "}
          <code className="text-body-xs font-mono text-ink">aria-sort</code> pra que leitores de tela relacionem
          cabeçalhos com células de dados e anunciem o estado de ordenação.
        </p>
        <div className="mb-24">
          <h3 className="text-body-md font-bold mb-12">Já implementado pelo componente</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Elementos th e td nativos",
                body: "TableHeaderCell usa <th> e TableCell usa <td> dentro de uma <table>, permitindo que tecnologias assistivas compreendam a relação entre cabeçalhos e dados.",
              },
              {
                title: "scope=col nos cabeçalhos",
                body: "Toda TableHeaderCell recebe scope=\"col\" por padrão, associando cada coluna de dados ao seu rótulo.",
              },
              {
                title: "aria-sort nos cabeçalhos ordenáveis",
                body: "Quando sortable e sortDirection são passados, o th recebe aria-sort=\"ascending\"/\"descending\" — sem sortDirection, aria-sort=\"none\".",
              },
              {
                title: "Ícone de sort oculto do leitor de tela",
                body: "O ícone de ordenação (caret) tem aria-hidden — é decorativo, o estado real é comunicado via aria-sort.",
              },
              {
                title: "Controles com foco visível",
                body: "Checkbox, Radio e os botões de ação dentro de uma célula têm focus-visible:ring — nenhum usa outline:none sem substituto.",
              },
              {
                title: "Rating com aria-label",
                body: 'As estrelas são decorativas (aria-hidden); o valor real é lido via role="img" + aria-label na nota completa ("Avaliação 4.8 de 5, 132 avaliações").',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-line-subtle p-16">
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
                title: "Tabela construída com divs",
                body: "Usar divs em vez de table/tr/th/td remove toda a semântica de tabela — leitores de tela não conseguem relacionar cabeçalhos com dados.",
              },
              {
                title: "Omitir aria-label em controls sem texto",
                body: "Checkbox, Radio, Switch e os IconButton de ação não têm label visível — sem aria-label, ficam mudos pra leitor de tela.",
              },
              {
                title: "Elementos interativos em ordem ilógica",
                body: "Botões, links ou switches dentro de células devem seguir a ordem visual da esquerda pra direita, linha a linha.",
              },
              {
                title: "aria-sort não atualizado após ordenar",
                body: "Ao implementar ordenação real, esquecer de atualizar sortDirection deixa o leitor de tela sem feedback da direção atual.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-line-subtle p-16">
                <p className="text-body-sm font-medium text-danger mb-4">{item.title}</p>
                <p className="text-body-xs text-ink-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h3 className="text-body-md font-bold mb-12">Como testar manualmente</h3>
          <ol className="text-body-sm text-ink-muted list-decimal pl-20 flex flex-col gap-8">
            <li>Com um leitor de tela ativo, navegue pela tabela célula a célula e confirme que cada uma anuncia o valor e o cabeçalho da coluna correspondente.</li>
            <li>
              Inspecione o DOM e confirme que os cabeçalhos são <code className="font-mono">&lt;th scope=&quot;col&quot;&gt;</code>.
            </li>
            <li>Pressione Tab pra navegar pelos elementos interativos dentro das células — a ordem de foco deve seguir da esquerda pra direita, linha a linha.</li>
            <li>
              Em uma coluna ordenável, confirme que <code className="font-mono">aria-sort</code> muda corretamente ao trocar a direção.
            </li>
            <li>Verifique o contraste do texto do cabeçalho (ink sobre table-line) com uma ferramenta de verificação — deve atingir 4.5:1.</li>
          </ol>
          <p className="text-body-xs text-ink-muted mt-12">
            Leitores de tela recomendados: VoiceOver (macOS/iOS), NVDA + Firefox (Windows) e TalkBack (Android).
          </p>
        </div>

        <div>
          <h3 className="text-body-md font-bold mb-12">Critérios WCAG 2.1 / 2.2</h3>
          <PropsTable
            rows={[
              { prop: "1.3.1", type: "A", default: "Informações e Relações", description: "th/td com scope=col comunicam a relação entre cabeçalhos e dados." },
              { prop: "1.4.3", type: "AA", default: "Contraste", description: "Texto do header (ink) sobre o fundo table-line mantém contraste ≥ 4.5:1." },
              { prop: "2.4.3", type: "A", default: "Ordem do Foco", description: "Elementos interativos em células seguem a ordem visual, esquerda pra direita, linha a linha." },
              { prop: "4.1.2", type: "A", default: "Nome, Função, Valor", description: "aria-sort em th ordenáveis; ícone de sort com aria-hidden; controls sem texto com aria-label." },
            ]}
          />
        </div>
      </div>

      <div className="mb-48">
        <h2 className="text-body-xl font-bold mb-16">Dos &amp; Don&apos;ts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <DoCard title="Use o mesmo size em todas as linhas" description="Altura consistente garante alinhamento entre colunas e facilita o escaneamento da tabela.">
            <table className="w-full border-collapse [&_tbody_tr:last-child>td]:border-b-0">
              <tbody>
                {alunos.slice(0, 2).map((s) => (
                  <tr key={s.name}>
                    <TableCell size="sm">
                      <Avatar size="sm" initials={s.initials} />
                      <span>{s.name}</span>
                    </TableCell>
                  </tr>
                ))}
              </tbody>
            </table>
          </DoCard>
          <DontCard title="Não misture tamanhos de célula" description="Alturas alternadas criam desalinhamento visual e tornam a tabela difícil de escanear.">
            <table className="w-full border-collapse [&_tbody_tr:last-child>td]:border-b-0">
              <tbody>
                <tr>
                  <TableCell size="lg">
                    <Avatar size="sm" initials="AS" />
                    <span>Ana Souza</span>
                  </TableCell>
                </tr>
                <tr>
                  <TableCell size="sm">
                    <Avatar size="sm" initials="CL" />
                    <span>Carlos Lima</span>
                  </TableCell>
                </tr>
              </tbody>
            </table>
          </DontCard>
          <DoCard title="Centralize controls como checkbox, switch e radio" description="Elementos interativos centralizados ficam visualmente equilibrados e com área de clique mais generosa.">
            <table className="w-full border-collapse [&_tbody_tr:last-child>td]:border-b-0">
              <tbody>
                <tr>
                  <TableCell align="center">
                    <Switch defaultChecked />
                  </TableCell>
                </tr>
              </tbody>
            </table>
          </DoCard>
          <DontCard title="Não sobrecarregue uma célula com elementos demais" description="Mais de dois elementos distintos por célula prejudica a legibilidade. Prefira dividir em colunas separadas.">
            <table className="w-full border-collapse [&_tbody_tr:last-child>td]:border-b-0">
              <tbody>
                <tr>
                  <TableCell>
                    <Avatar size="sm" initials="AS" />
                    <span>Ana Souza</span>
                    <Badge color="success" dot>
                      Ativo
                    </Badge>
                    <Switch defaultChecked />
                  </TableCell>
                </tr>
              </tbody>
            </table>
          </DontCard>
        </div>
      </div>

      <div>
        <h2 className="text-body-xl font-bold mb-16">Props</h2>
        <div className="mb-24">
          <h3 className="text-body-md font-bold mb-12">TableCell</h3>
          <PropsTable
            rows={[
              { prop: "size", type: "'lg' | 'md' | 'sm'", default: "'md'", description: "Altura da célula: lg=64px, md=56px, sm=48px. Mantenha o mesmo size em todas as células de uma tabela." },
              { prop: "align", type: "'left' | 'center' | 'right'", default: "'left'", description: "Alinhamento horizontal do conteúdo — vira justify-content, funciona com qualquer children." },
              { prop: "children", type: "ReactNode", description: "Conteúdo da célula — Badge, Avatar, Switch, Rating, Checkbox, Radio, ícones ou texto." },
              { prop: "className", type: "string", description: "Classes adicionais no <td> — largura, cor de fundo etc." },
            ]}
          />
        </div>
        <div>
          <h3 className="text-body-md font-bold mb-12">TableHeaderCell</h3>
          <PropsTable
            rows={[
              { prop: "align", type: "'left' | 'center' | 'right'", default: "'left'", description: "Alinhamento horizontal do label." },
              { prop: "sortable", type: "boolean", default: "false", description: "Mostra o ícone de ordenação (caret) ao lado do label." },
              { prop: "sortDirection", type: "'ascending' | 'descending'", description: "Direção atual — só relevante com sortable. Vira o aria-sort do <th>." },
              { prop: "children", type: "ReactNode", description: "Rótulo da coluna ou elemento (ex: Checkbox pra selecionar todos)." },
              { prop: "className", type: "string", description: "Classes adicionais no <th> — largura ou customização visual." },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
