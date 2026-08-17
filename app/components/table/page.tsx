import { PageHeader } from "@/components/PageHeader";
import {
  Table,
  TableRow,
  TableHeaderCell,
  TableCell,
  Avatar,
  Badge,
  Checkbox,
  Switch,
  Button,
} from "@brunosantossss/ds";

const students = [
  { name: "Ana Souza", initials: "AS", status: "success" as const, statusLabel: "Ativo", progress: 82, notify: true },
  { name: "Carlos Lima", initials: "CL", status: "success" as const, statusLabel: "Ativo", progress: 45, notify: true },
  { name: "Beatriz Alves", initials: "BA", status: "neutral" as const, statusLabel: "Pendente", progress: 20, notify: false },
  { name: "João Pedro", initials: "JP", status: "danger" as const, statusLabel: "Inativo", progress: 12, notify: false },
];

export default function TablePage() {
  return (
    <div>
      <PageHeader
        category="Complex Component"
        title="Table"
        description="Exibe dados estruturados em linhas e colunas. Em vez de um componente 'Type' por tipo de coluna (como no Figma), o código expõe primitivas que se compõem com Avatar, Badge, Checkbox e Switch já existentes."
      />

      <div className="rounded-lg border border-line bg-card p-16 mb-32">
        <pre className="text-body-xs font-mono text-ink-muted overflow-x-auto">
{`import { Table, TableRow, TableHeaderCell, TableCell } from "@brunosantossss/ds";

<Table>
  <thead>
    <TableRow>
      <TableHeaderCell>Aluno</TableHeaderCell>
      <TableHeaderCell align="center">Status</TableHeaderCell>
    </TableRow>
  </thead>
  <tbody>
    <TableRow>
      <TableCell>Ana Souza</TableCell>
      <TableCell align="center"><Badge color="success" dot>Ativo</Badge></TableCell>
    </TableRow>
  </tbody>
</Table>`}
        </pre>
      </div>

      <div className="mb-32">
        <Table>
          <thead>
            <TableRow>
              <TableHeaderCell className="w-48">
                <Checkbox />
              </TableHeaderCell>
              <TableHeaderCell>Aluno</TableHeaderCell>
              <TableHeaderCell align="center">Status</TableHeaderCell>
              <TableHeaderCell align="right">Progresso</TableHeaderCell>
              <TableHeaderCell align="center">Notificar</TableHeaderCell>
              <TableHeaderCell align="right">Ações</TableHeaderCell>
            </TableRow>
          </thead>
          <tbody>
            {students.map((s) => (
              <TableRow key={s.name}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-8">
                    <Avatar size="sm" initials={s.initials} />
                    <span>{s.name}</span>
                  </div>
                </TableCell>
                <TableCell align="center">
                  <Badge color={s.status} dot>
                    {s.statusLabel}
                  </Badge>
                </TableCell>
                <TableCell align="right">{s.progress}%</TableCell>
                <TableCell align="center">
                  <div className="flex justify-center">
                    <Switch size="sm" defaultChecked={s.notify} />
                  </div>
                </TableCell>
                <TableCell align="right">
                  <div className="flex justify-end gap-4">
                    <Button type_="ghost" size="sm">
                      Editar
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Propriedades</h3>
        <div className="rounded-lg border border-line overflow-hidden">
          {[
            ["TableHeaderCell / TableCell — align", "left | center | right"],
            ["TableCell — size", "sm (48px) | md (56px, padrão) | lg (64px)"],
            ["Composição", "Reaproveita Avatar, Badge, Checkbox, Switch e Button do Bússola"],
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
