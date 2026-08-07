import { HTMLAttributes } from "react";

export type AvatarSize = "xs" | "sm" | "md" | "lg";
export type AvatarType = "initials" | "placeholder";
export type AvatarStatus = "none" | "online" | "offline";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  size?: AvatarSize;
  type?: AvatarType;
  status?: AvatarStatus;
  initials?: string;
}

const sizePx: Record<AvatarSize, number> = { xs: 24, sm: 32, md: 40, lg: 48 };
const fontSize: Record<AvatarSize, string> = {
  xs: "text-[10px]",
  sm: "text-[12px]",
  md: "text-body-sm",
  lg: "text-body-md",
};

/**
 * Avatar — Mentorfy.DS
 * Espelha o component set "Avatar" do Figma (Size x Type x Status).
 * No tamanho xs, o texto das iniciais é ligeiramente recuado do canto
 * inferior direito para não colidir com o indicador de status (mesmo
 * ajuste feito no componente do Figma).
 */
export function Avatar({
  size = "md",
  type = "initials",
  status = "none",
  initials = "AB",
  className = "",
  ...props
}: AvatarProps) {
  const px = sizePx[size];
  const dotSize = Math.round(px * 0.28);
  const ringSize = dotSize + 4;

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full font-medium ${
        type === "initials" ? "bg-brand-subtle text-ink-brand" : "bg-hover-strong"
      } ${fontSize[size]} ${className}`}
      style={{ width: px, height: px }}
      {...props}
    >
      {type === "initials" && (
        <span className={size === "xs" ? "-translate-x-[1px] -translate-y-[1px]" : ""}>
          {initials}
        </span>
      )}
      {status !== "none" && (
        <span
          className="absolute rounded-full bg-page flex items-center justify-center"
          style={{ width: ringSize, height: ringSize, right: 0, bottom: 0 }}
        >
          <span
            className={`rounded-full ${status === "online" ? "bg-success" : "bg-ink-muted"}`}
            style={{ width: dotSize, height: dotSize }}
          />
        </span>
      )}
    </div>
  );
}
