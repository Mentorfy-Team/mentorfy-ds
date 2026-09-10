import { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";

export type CellAlign = "left" | "center" | "right";
export type CellSize = "sm" | "md" | "lg";

const justifyClass: Record<CellAlign, string> = {
  left: "justify-start text-left",
  center: "justify-center text-center",
  right: "justify-end text-right",
};

// Alturas extraídas direto do Figma (component set "Table Cell", eixo
// Size): 48/56/64px — o texto do conteúdo (ex: Lead) fica no mesmo
// tamanho (14px) nos três, só a altura da célula muda.
const rowHeight: Record<CellSize, string> = {
  sm: "h-48",
  md: "h-56",
  lg: "h-64",
};

export type TableProps = HTMLAttributes<HTMLTableElement>;

/**
 * Table — Mentorfy.DS
 * Espelha os component sets "Table Cell" (Type x Size x Position, 40
 * variantes) e "Table Header Cell" (Position x Checkbox, 6 variantes) do
 * Figma. Em vez de recriar cada um dos 12 "Type" como componente separado,
 * o código expõe primitivas (Table/TableRow/TableHeaderCell/TableCell) que
 * se compõem com Avatar, Badge, Checkbox, Switch, Radio e Rating — a mesma
 * variedade do Figma, sem duplicar lógica.
 */
export function Table({ className = "", children, ...props }: TableProps) {
  return (
    // border-line-subtle (não border-line): a Table é um bloco de conteúdo
    // (como cards de doc, props tables e code blocks), não um componente
    // interativo como Input/Select — a borda não deve competir visualmente
    // com o conteúdo das linhas. Ver definição de --color-line-subtle em
    // theme.css.
    <div className="overflow-x-auto overflow-y-hidden rounded-lg border border-line-subtle bg-card">
      <table className={`w-full min-w-max border-collapse text-body-sm ${className}`} {...props}>
        {children}
      </table>
    </div>
  );
}

export type TableRowProps = HTMLAttributes<HTMLTableRowElement>;
export function TableRow({ className = "", ...props }: TableRowProps) {
  return <tr className={`transition-colors hover:bg-hover/60 ${className}`} {...props} />;
}

export interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
  align?: CellAlign;
  /** Mostra o ícone de ordenação (caret up/down) ao lado do rótulo. Não existe como variante própria no Figma — adicionado aqui por ser um recurso comum de tabela real, sem mudar a aparência das colunas não-ordenáveis. */
  sortable?: boolean;
  /** Direção atual de ordenação — só relevante com `sortable`. Vira o atributo `aria-sort` do `<th>`. */
  sortDirection?: "ascending" | "descending";
}
/**
 * Table Header Cell — altura fixa 44px, fundo/borda em --color-table-line
 * (#262626, extraído do Figma) e label 12px bold em --color-ink (o Figma
 * usa quase-branco #FAFAFA, mais próximo do nosso ink do que do ink-muted
 * usado antes aqui — esse era um mismatch de cor da versão anterior).
 */
export function TableHeaderCell({
  align = "left",
  sortable = false,
  sortDirection,
  className = "",
  children,
  ...props
}: TableHeaderCellProps) {
  return (
    <th
      scope="col"
      aria-sort={sortable ? sortDirection ?? "none" : undefined}
      className={`h-44 border-b border-t border-table-line bg-table-line px-16 text-body-xs font-bold text-ink first:rounded-tl-lg last:rounded-tr-lg ${className}`}
      {...props}
    >
      <span className={`flex items-center gap-4 ${justifyClass[align]}`}>
        {children}
        {sortable && (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0 text-ink-muted">
            <path d="M4 5.5L7 2.5L10 5.5M4 8.5L7 11.5L10 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
    </th>
  );
}

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  align?: CellAlign;
  size?: CellSize;
}
/**
 * Table Cell — no Figma é o próprio conteúdo que já vem centralizado
 * verticalmente e alinhado (Position=Left/Center/Right vira
 * justify-content) dentro da célula, em vez de depender de quem usa
 * envolver o conteúdo num div flex à parte (como a versão anterior
 * exigia pra Switch/Checkbox). Manter o mesmo `size` em todas as células
 * de uma tabela — ver seção Anatomia da doc.
 */
export function TableCell({ align = "left", size = "md", className = "", children, ...props }: TableCellProps) {
  return (
    <td
      className={`border-b border-table-line px-16 text-ink last:border-b-0 ${rowHeight[size]} ${className}`}
      {...props}
    >
      <div className={`flex h-full items-center gap-8 ${justifyClass[align]}`}>{children}</div>
    </td>
  );
}
