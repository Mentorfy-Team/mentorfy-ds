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
    description: "Escala de cinza usada para fundos, textos e bordas em toda a interface.",
    tokens: [
      { name: "color/neutral/50", value: "#FAFAFA", cssVar: "var(--color-neutral-50)" },
      { name: "color/neutral/100", value: "#E5E5E5", cssVar: "var(--color-neutral-100)" },
      { name: "color/neutral/300", value: "#A3A3A3", cssVar: "var(--color-neutral-300)" },
      { name: "color/neutral/500", value: "#7A7A7A", cssVar: "var(--color-neutral-500)" },
      { name: "color/neutral/700", value: "#333333", cssVar: "var(--color-neutral-700)" },
      { name: "color/neutral/800", value: "#262626", cssVar: "var(--color-neutral-800)" },
      { name: "color/neutral/900", value: "#171717", cssVar: "var(--color-neutral-900)" },
      { name: "color/neutral/950", value: "#0A0A0A", cssVar: "var(--color-neutral-950)" },
    ],
  },
  {
    title: "Orange",
    description: "Cor primária da marca Mentorfy, usada em ações principais e destaques.",
    tokens: [
      { name: "color/orange/50", value: "#FDF1E7", cssVar: "var(--color-orange-50)" },
      { name: "color/orange/100", value: "#FBDFC5", cssVar: "var(--color-orange-100)" },
      { name: "color/orange/300", value: "#F5B583", cssVar: "var(--color-orange-300)" },
      { name: "color/orange/500", value: "#EE843D", cssVar: "var(--color-orange-500)" },
      { name: "color/orange/700", value: "#B85F27", cssVar: "var(--color-orange-700)" },
      { name: "color/orange/900", value: "#3A2115", cssVar: "var(--color-orange-900)" },
    ],
  },
  {
    title: "Green",
    description: "Usado para indicar sucesso e status online.",
    tokens: [{ name: "color/green/500", value: "#4CAF6E", cssVar: "var(--color-green-500)" }],
  },
  {
    title: "Red",
    description: "Usado para ações destrutivas e mensagens de erro.",
    tokens: [
      { name: "color/red/500", value: "#EF4444", cssVar: "var(--color-red-500)" },
      { name: "color/red/700", value: "#B91C1C", cssVar: "var(--color-red-700)" },
    ],
  },
];

export const colorSemantic: ColorFamily[] = [
  {
    title: "Background",
    description: "Cores de fundo para superfícies da interface.",
    tokens: [
      { name: "bg/page", value: "#171717", cssVar: "var(--color-page)" },
      { name: "bg/surface", value: "#171717", cssVar: "var(--color-surface)" },
      { name: "bg/card", value: "#0A0A0A", cssVar: "var(--color-card)" },
      { name: "bg/hover", value: "#262626", cssVar: "var(--color-hover)" },
      { name: "bg/hover-strong", value: "#333333", cssVar: "var(--color-hover-strong)" },
      { name: "bg/brand-subtle", value: "#3A2115", cssVar: "var(--color-brand-subtle)" },
    ],
  },
  {
    title: "Text",
    description: "Cores de texto para diferentes níveis de ênfase.",
    tokens: [
      { name: "text/primary", value: "#FAFAFA", cssVar: "var(--color-ink)" },
      { name: "text/secondary", value: "#7A7A7A", cssVar: "var(--color-ink-muted)" },
      { name: "text/brand", value: "#EE843D", cssVar: "var(--color-ink-brand)" },
    ],
  },
  {
    title: "Border",
    description: "Cor de borda padrão para cards, inputs e divisores.",
    tokens: [{ name: "border/default", value: "#262626", cssVar: "var(--color-line)" }],
  },
  {
    title: "Brand",
    description: "Cor de ação primária da marca e seu estado de hover.",
    tokens: [
      { name: "brand/primary", value: "#EE843D", cssVar: "var(--color-brand)" },
      { name: "brand/primary-hover", value: "#B85F27", cssVar: "var(--color-brand-hover)" },
    ],
  },
  {
    title: "Status",
    description: "Cores de feedback para sucesso e erros.",
    tokens: [
      { name: "status/success", value: "#4CAF6E", cssVar: "var(--color-success)" },
      { name: "status/danger", value: "#EF4444", cssVar: "var(--color-danger)" },
      { name: "status/danger-hover", value: "#B91C1C", cssVar: "var(--color-danger-hover)" },
    ],
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
