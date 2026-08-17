"use client";
// O pacote é bundlado num único arquivo (tsup), então essa diretiva precisa
// ficar no entry point: Select/Tabs/Modal/Checkbox usam hooks e exigem
// "use client" — sem isso, o bundler não preserva a diretiva por módulo e o
// Next trata o pacote inteiro como Server Component, quebrando o build.

export { Button } from "./Button";
export type { ButtonProps, ButtonType, ButtonSize } from "./Button";

export { Input } from "./Input";
export type { InputProps, InputSize } from "./Input";

export { Badge } from "./Badge";
export type { BadgeProps, BadgeColor, BadgeSize } from "./Badge";

export { Avatar } from "./Avatar";
export type { AvatarProps, AvatarSize, AvatarType, AvatarStatus } from "./Avatar";

export { Card } from "./Card";
export type { CardProps, CardStyle, CardPadding } from "./Card";

export { SidebarItem } from "./SidebarItem";
export type { SidebarItemProps } from "./SidebarItem";

export { Switch } from "./Switch";
export type { SwitchProps, SwitchSize } from "./Switch";

export { Checkbox } from "./Checkbox";
export type { CheckboxProps } from "./Checkbox";

export { Select } from "./Select";
export type { SelectProps, SelectOption } from "./Select";

export { Tabs } from "./Tabs";
export type { TabsProps, TabItem } from "./Tabs";

export { Modal } from "./Modal";
export type { ModalProps } from "./Modal";

export { Tooltip } from "./Tooltip";
export type { TooltipProps, TooltipPosition } from "./Tooltip";

export { Table, TableRow, TableHeaderCell, TableCell } from "./Table";
export type { TableProps, TableRowProps, TableHeaderCellProps, TableCellProps, CellAlign, CellSize } from "./Table";

export { Sidebar, SidebarSubmenu } from "./Sidebar";
export type { SidebarProps, SidebarSubmenuProps } from "./Sidebar";
