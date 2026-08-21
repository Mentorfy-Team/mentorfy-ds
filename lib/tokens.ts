// Mentorfy.DS — dados estruturados dos design tokens.
// Hoje é uma transcrição manual das Variables do Figma. Isso é o arquivo
// que o pipeline de sincronização (Figma REST API) deve gerar automaticamente
// no futuro — mantendo esta mesma "forma" de dados para não quebrar as páginas.

export type ColorToken = {
  name: string;
  value: string; // hex resolvido
  cssVar: string; // var(--color-...)
};

export type ColorFamily = {
  title: string;
  description: string;
  tokens: ColorToken[];
};

export const colorPrimitives: ColorFamily[] = [
  {
    title: "Neutral",
    description: "Escala de cinza (quente) usada para fundos, textos e bordas em toda a interface. Atualizada para a paleta oficial da marca (Pantone Black 4C + Neutral Black C + Warm Gray 5C, 2026).",
    tokens: [
      { name: "color/neutral/50", value: "#DBD8D4", cssVar: "var(--color-neutral-50)" },   // Secundária — Warm Gray 5C, tint claro
      { name: "color/neutral/100", value: "#C9C5C0", cssVar: "var(--color-neutral-100)" }, // Secundária — Warm Gray 5C, tint
      { name: "color/neutral/300", value: "#B8B3AC", cssVar: "var(--color-neutral-300)" }, // Secundária — Warm Gray 5C, tint
      { name: "color/neutral/500", value: "#A6A098", cssVar: "var(--color-neutral-500)" }, // Secundária — Warm Gray 5C (base)
      { name: "color/neutral/600", value: "#6F6B6B", cssVar: "var(--color-neutral-600)" }, // Secundária — Neutral Black C, tint claro
      { name: "color/neutral/700", value: "#575454", cssVar: "var(--color-neutral-700)" }, // Secundária — Neutral Black C, tint
      { name: "color/neutral/800", value: "#3F3C3C", cssVar: "var(--color-neutral-800)" }, // Secundária — Neutral Black C, tint
      { name: "color/neutral/900", value: "#1A1009", cssVar: "var(--color-neutral-900)" }, // Primária — Pantone Black 4C (base)
      { name: "color/neutral/950", value: "#0D0804", cssVar: "var(--color-neutral-950)" }, // Secundária — Neutral Black C (base)
    ],
  },
  {
    title: "Orange",
    description: "Cor primária da marca Mentorfy, usada em ações principais e destaques. Base atualizada para Pantone 6018 C; 700/900 usam os tons de apoio (Pantone Black 4C / 2319 C) da paleta oficial 2026.",
    tokens: [
      { name: "color/orange/50", value: "#FDF1E7", cssVar: "var(--color-orange-50)" },   // legado — não faz parte da paleta oficial 2026
      { name: "color/orange/100", value: "#FBDFC5", cssVar: "var(--color-orange-100)" }, // legado — não faz parte da paleta oficial 2026
      { name: "color/orange/300", value: "#F5B583", cssVar: "var(--color-orange-300)" }, // legado — não faz parte da paleta oficial 2026
      { name: "color/orange/500", value: "#F27C39", cssVar: "var(--color-orange-500)" }, // Primária — Pantone 6018 C (base)
      { name: "color/orange/700", value: "#905A34", cssVar: "var(--color-orange-700)" }, // Primária — Pantone 2319 C (tom de apoio, hover) — ajustado para manter contraste com texto escuro
      { name: "color/orange/900", value: "#905A34", cssVar: "var(--color-orange-900)" }, // Primária — Pantone 2319 C (tom de apoio, chip de ícone)
    ],
  },
  {
    title: "Teal",
    description: "Verde-petróleo (Pantone 4168 C) — nova cor de destaque da paleta oficial 2026. Ainda não aplicada a nenhum componente ou tela existente; disponível para uso futuro.",
    tokens: [
      { name: "color/teal/300", value: "#488783", cssVar: "var(--color-teal-300)" }, // Secundária — Pantone 4168 C, tint claro
      { name: "color/teal/500", value: "#103F3C", cssVar: "var(--color-teal-500)" }, // Secundária — Pantone 4168 C (base)
      { name: "color/teal/700", value: "#306F6B", cssVar: "var(--color-teal-700)" }, // Secundária — Pantone 4168 C, tint escuro
      { name: "color/teal/900", value: "#01100F", cssVar: "var(--color-teal-900)" }, // Secundária — Pantone 4168 C, tint mais escuro
    ],
  },
  {
    title: "Brown",
    description: "Tons de apoio da marca (Pantone 2319 C) — paleta oficial 2026. Ainda não aplicados a nenhum componente existente.",
    tokens: [
      { name: "color/brown/300", value: "#A38A79", cssVar: "var(--color-brown-300)" }, // Primária — tom de apoio (Pantone 2319 C), tint claro
      { name: "color/brown/500", value: "#755B48", cssVar: "var(--color-brown-500)" }, // Primária — tom de apoio (Pantone 2319 C), tint médio
      { name: "color/brown/700", value: "#473222", cssVar: "var(--color-brown-700)" }, // Primária — tom de apoio (Pantone 2319 C), tint escuro
    ],
  },
  {
    title: "Green",
    description: "Usado para indicar sucesso e status online.",
    tokens: [{ name: "color/green/500", value: "#4CAF6E", cssVar: "var(--color-green-500)" }], // não faz parte da paleta oficial 2026
  },
  {
    title: "Red",
    description: "Usado para ações destrutivas e mensagens de erro.",
    tokens: [
      { name: "color/red/500", value: "#EF4444", cssVar: "var(--color-red-500)" }, // não faz parte da paleta oficial 2026
      { name: "color/red/700", value: "#B91C1C", cssVar: "var(--color-red-700)" }, // não faz parte da paleta oficial 2026
    ],
  },
];

export const colorSemantic: ColorFamily[] = [
  {
    title: "Background",
    description: "Cores de fundo para superfícies da interface.",
    tokens: [
      { name: "bg/page", value: "#1A1009", cssVar: "var(--color-page)" },
      { name: "bg/surface", value: "#1A1009", cssVar: "var(--color-surface)" },
      { name: "bg/card", value: "#0D0804", cssVar: "var(--color-card)" },
      { name: "bg/hover", value: "#3F3C3C", cssVar: "var(--color-hover)" }, // Secundária — Neutral Black C, tint
      { name: "bg/hover-strong", value: "#575454", cssVar: "var(--color-hover-strong)" }, // Secundária — Neutral Black C, tint
      { name: "bg/brand-subtle", value: "#473222", cssVar: "var(--color-brand-subtle)" }, // Primária — tom de apoio (Pantone 2319 C), tint escuro — repontado de orange/900 para melhorar contraste de Badge/Avatar/Button ghost-hover
    ],
  },
  {
    title: "Text",
    description: "Cores de texto para diferentes níveis de ênfase.",
    tokens: [
      { name: "text/primary", value: "#DBD8D4", cssVar: "var(--color-ink)" }, // Secundária — Warm Gray 5C, tint claro
      { name: "text/secondary", value: "#A6A098", cssVar: "var(--color-ink-muted)" }, // Secundária — Warm Gray 5C (base)
      { name: "text/brand", value: "#F27C39", cssVar: "var(--color-ink-brand)" }, // Primária — Pantone 6018 C
      { name: "text/on-brand", value: "#1A1009", cssVar: "var(--color-ink-on-brand)" }, // Primária — Pantone Black 4C — texto escuro para uso sobre fundos saturados da marca (ex: Button primary); corrige contraste após a atualização de paleta
    ],
  },
  {
    title: "Border",
    description: "Cor de borda padrão para cards, inputs e divisores. Agora com tom próprio (Pantone Neutral Black C, tint), separado do bg/hover.",
    tokens: [{ name: "border/default", value: "#6F6B6B", cssVar: "var(--color-line)" }], // Secundária — Neutral Black C, tint
  },
  {
    title: "Brand",
    description: "Cor de ação primária da marca e seu estado de hover.",
    tokens: [
      { name: "brand/primary", value: "#F27C39", cssVar: "var(--color-brand)" }, // Primária — Pantone 6018 C
      { name: "brand/primary-hover", value: "#905A34", cssVar: "var(--color-brand-hover)" }, // Primária — Pantone 2319 C — ajustado de Pantone Black 4C para manter contraste com texto escuro
    ],
  },
  {
    title: "Status",
    description: "Cores de feedback para sucesso e erros.",
    tokens: [
      { name: "status/success", value: "#4CAF6E", cssVar: "var(--color-success)" }, // não faz parte da paleta oficial 2026
      { name: "status/danger", value: "#EF4444", cssVar: "var(--color-danger)" }, // não faz parte da paleta oficial 2026
      { name: "status/danger-hover", value: "#B91C1C", cssVar: "var(--color-danger-hover)" }, // não faz parte da paleta oficial 2026
    ],
  },
  {
    title: "Accent",
    description: "Nova cor de destaque da paleta oficial 2026 (Pantone 4168 C). Ainda não aplicada às telas existentes.",
    tokens: [{ name: "accent/teal", value: "#103F3C", cssVar: "var(--color-accent-teal)" }], // Secundária — Pantone 4168 C
  },
];

export type TypeRow = {
  name: string;
  family: string;
  sizePx: number;
  weight: "Bold" | "Medium" | "Regular";
  lineHeight: string;
  letterSpacing: string;
};

export type TypeGroup = {
  label: string;
  sizePx: number;
  rows: TypeRow[];
};

function buildTypeGroup(scale: "Display" | "Text", size: string, px: number, lineHeight: string): TypeGroup {
  const weights: TypeRow["weight"][] = ["Bold", "Medium", "Regular"];
  return {
    label: `${scale} ${size}`,
    sizePx: px,
    rows: weights.map((weight) => ({
      name: `${scale}/${size}/${weight}`,
      family: "Inter",
      sizePx: px,
      weight,
      lineHeight,
      letterSpacing: "0%",
    })),
  };
}

export const typographyDisplay: TypeGroup[] = [
  buildTypeGroup("Display", "2xl", 40, "120%"),
  buildTypeGroup("Display", "xl", 36, "120%"),
  buildTypeGroup("Display", "lg", 32, "120%"),
  buildTypeGroup("Display", "md", 28, "120%"),
  buildTypeGroup("Display", "sm", 24, "120%"),
  buildTypeGroup("Display", "xs", 20, "120%"),
];

export const typographyText: TypeGroup[] = [
  buildTypeGroup("Text", "xl", 20, "150%"),
  buildTypeGroup("Text", "lg", 18, "150%"),
  buildTypeGroup("Text", "md", 16, "150%"),
  buildTypeGroup("Text", "sm", 14, "150%"),
  buildTypeGroup("Text", "xs", 12, "150%"),
];

export const spacingTokens = [
  { name: "spacing/2", px: 2 },
  { name: "spacing/4", px: 4 },
  { name: "spacing/8", px: 8 },
  { name: "spacing/12", px: 12 },
  { name: "spacing/16", px: 16 },
  { name: "spacing/20", px: 20 },
  { name: "spacing/24", px: 24 },
  { name: "spacing/32", px: 32 },
  { name: "spacing/40", px: 40 },
  { name: "spacing/48", px: 48 },
];

export const radiusTokens = [
  { name: "radius/sm", px: 6 },
  { name: "radius/md", px: 8 },
  { name: "radius/lg", px: 12 },
  { name: "radius/xl", px: 16 },
  { name: "radius/full", px: 999 },
];
