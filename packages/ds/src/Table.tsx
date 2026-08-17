import { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";

export type CellAlign = "left" | "center" | "right";
export type CellSize = "sm" | "md" | "lg";

const alignClass: Record<CellAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const rowHeight: Record<CellSize, string> = {
  sm: "h-48",
  md: "h-56",
  lg: "h-64",
};

export type TableProps = HTMLAttributes<HTMLTableElement>;

/**
 * Table — Mentorfy.DS
 * Espelha os component sets "Table Cell" (Type x Size x Position) e
 * "Table Header Cell" (Position) do Figma. Em vez de recriar cada um dos
 * 12 "Type" como componente separado, o código expõe primitivas
 * (Table/TableRow/TableHeaderCell/TableCell) que se compõem com Avatar,
 * Badge, Checkbox e Switch já existentes — a mesma variedade do Figma,
 * sem duplicar lógica.
 */
export function Table({ className = "", children, ...props }: TableProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-card">
      <table className={`w-full border-collapse text-body-sm ${className}`} {...props}>
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
}
export function TableHeaderCell({ align = "left", className = "", children, ...props }: TableHeaderCellProps) {
  return (
    <th
      className={`h-44 border-b border-line bg-hover px-16 text-body-xs font-bold text-ink-muted ${alignClass[align]} ${className}`}
      {...props}
    >
      {children}
    </th>
  );
}

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  align?: CellAlign;
  size?: CellSize;
}
export function TableCell({ align = "left", size = "md", className = "", children, ...props }: TableCellProps) {
  return (
    <td
      className={`border-b border-line px-16 text-ink last:border-b-0 ${rowHeight[size]} ${alignClass[align]} ${className}`}
      {...props}
    >
      {children}
    </td>
  );
}
