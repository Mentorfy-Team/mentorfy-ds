"use client";

import { ReactNode, useMemo, useState } from "react";
import Link from "next/link";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Input,
  Radio,
  Rating,
  Select,
  SidebarItem,
  Switch,
  Table,
  TableCell,
  TableHeaderCell,
  TableRow,
  Tabs,
  Tooltip,
} from "@brunosantossss/ds";

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0 text-ink-muted">
      <circle cx="6.1" cy="6.1" r="4.6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12.5 12.5L9.6 9.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

// Slot de preview: tamanho fixo (valor arbitrário, fora da allowlist de
// spacing do theme.css de propósito — é só um recorte decorativo da home,
// não uma medida de componente real) + overflow-hidden, pra qualquer
// componente real (Table, Select...) caber sem estourar o card.
// aria-hidden + pointer-events-none: é decorativo — quem navega por
// teclado/leitor de tela deve pular direto pro link com o nome do
// componente (ver stretched-link no card), não tropeçar num Switch ou
// Input "fantasma" que não faz nada aqui dentro.
function Preview({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none flex h-[100px] w-full items-center justify-center overflow-hidden rounded-md bg-page"
    >
      {children}
    </div>
  );
}

type Item = {
  label: string;
  href: string;
  preview: ReactNode;
};

type Section = {
  group: string;
  description: string;
  items: Item[];
};

const sections: Section[] = [
  {
    group: "Foundations",
    description: "Cores, tipografia e espaçamento/grid que sustentam todo o sistema.",
    items: [
      {
        label: "Colors",
        href: "/foundations/colors",
        preview: (
          <div className="flex gap-8">
            {["bg-brand", "bg-success", "bg-danger", "bg-ink", "bg-ink-muted"].map((c) => (
              <span key={c} className={`h-24 w-24 rounded-full ${c}`} />
            ))}
          </div>
        ),
      },
      {
        label: "Typography",
        href: "/foundations/typography",
        preview: (
          <div className="flex items-baseline gap-8">
            <span className="text-display-md font-bold text-ink">Aa</span>
            <span className="text-body-sm text-ink-muted">Aa</span>
          </div>
        ),
      },
      {
        label: "Grid & Spacing",
        href: "/foundations/spacing",
        preview: (
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="h-8 w-8 rounded-sm bg-hover-strong" />
            ))}
          </div>
        ),
      },
    ],
  },
  {
    group: "Base Components",
    description: "Componentes atômicos documentados com variações, estados e props.",
    items: [
      {
        label: "Button",
        href: "/components/button",
        preview: <Button size="sm">Button</Button>,
      },
      {
        label: "Badge",
        href: "/components/badge",
        preview: (
          <Badge color="success" dot>
            Ativo
          </Badge>
        ),
      },
      {
        label: "Avatar",
        href: "/components/avatar",
        preview: <Avatar size="lg" initials="AS" status="online" />,
      },
    ],
  },
  {
    group: "Complex Components",
    description: "Componentes compostos com lógica de interação.",
    items: [
      {
        label: "Input",
        href: "/components/input",
        preview: (
          <div className="w-[160px]">
            <Input size="sm" placeholder="Buscar..." />
          </div>
        ),
      },
      {
        label: "Card",
        href: "/components/card",
        preview: (
          <Card style_="bordered" padding="sm" className="w-[140px]">
            Conteúdo do card
          </Card>
        ),
      },
      {
        label: "Sidebar Item",
        href: "/components/sidebar-item",
        preview: (
          <div className="w-[160px] rounded-md bg-nav p-8">
            <SidebarItem active>Item ativo</SidebarItem>
          </div>
        ),
      },
      {
        label: "Sidebar",
        href: "/components/sidebar",
        preview: (
          <div className="flex h-[72px] w-[64px] flex-col gap-4 rounded-md border border-nav-line bg-nav p-8">
            <span className="h-8 w-full rounded-sm bg-surface" />
            <span className="h-8 w-full rounded-sm bg-hover" />
            <span className="h-8 w-full rounded-sm bg-hover" />
          </div>
        ),
      },
      {
        label: "Switch",
        href: "/components/switch",
        preview: <Switch defaultChecked />,
      },
      {
        label: "Checkbox",
        href: "/components/checkbox",
        preview: <Checkbox checked />,
      },
      {
        label: "Radio",
        href: "/components/radio",
        preview: <Radio checked />,
      },
      {
        label: "Rating",
        href: "/components/rating",
        preview: <Rating value={4.5} count={128} />,
      },
      {
        label: "Select",
        href: "/components/select",
        preview: (
          <div className="w-[160px] overflow-hidden">
            <Select options={[{ value: "a", label: "Opção A" }]} value="a" />
          </div>
        ),
      },
      {
        label: "Tabs",
        href: "/components/tabs",
        preview: (
          <Tabs
            items={[
              { value: "a", label: "Turmas" },
              { value: "b", label: "Alunos" },
            ]}
            defaultValue="a"
          />
        ),
      },
      {
        label: "Modal",
        href: "/components/modal",
        // Mimic estático em vez do componente Modal de verdade: o Modal real
        // é uma camada absolute/fixed de 480px pensada pra cobrir a tela
        // inteira — encaixar essa lógica de overlay dentro de um cartãozinho
        // de preview é frágil (a lib de posicionamento não foi feita pra
        // caber em 160×100px). Aqui é só o "retrato" do componente.
        preview: (
          <div className="flex h-64 w-[140px] items-center justify-center rounded-md bg-black/60">
            <div className="w-[104px] overflow-hidden rounded-md border border-line bg-page">
              <div className="border-b border-line px-8 py-4 text-[9px] font-bold text-ink">Excluir turma</div>
              <div className="px-8 py-8 text-[8px] text-ink-muted">Ação não pode ser desfeita.</div>
            </div>
          </div>
        ),
      },
      {
        label: "Tooltip",
        href: "/components/tooltip",
        preview: (
          <Tooltip content="Editar turma" visible position="top">
            <Button size="sm" type_="secondary">
              Hover
            </Button>
          </Tooltip>
        ),
      },
      {
        label: "Table",
        href: "/components/table",
        preview: (
          <div className="w-[220px]">
            <Table>
              <thead>
                <TableRow>
                  <TableHeaderCell>Aluno</TableHeaderCell>
                  <TableHeaderCell align="right">Status</TableHeaderCell>
                </TableRow>
              </thead>
              <tbody>
                <TableRow>
                  <TableCell size="sm">Ana Souza</TableCell>
                  <TableCell size="sm" align="right">
                    <Badge size="sm" color="success" dot>
                      Ativo
                    </Badge>
                  </TableCell>
                </TableRow>
              </tbody>
            </Table>
          </div>
        ),
      },
    ],
  },
];

const totalComponents = sections.reduce((sum, s) => sum + s.items.length, 0);

export default function Home() {
  const [query, setQuery] = useState("");

  const filteredSections = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sections;
    return sections
      .map((section) => ({ ...section, items: section.items.filter((item) => item.label.toLowerCase().includes(q)) }))
      .filter((section) => section.items.length > 0);
  }, [query]);

  const stats = [
    { value: String(totalComponents), label: "Componentes" },
    { value: String(sections.length), label: "Seções" },
    { value: "49", label: "Tokens" },
    { value: "v0.1", label: "Versão atual" },
  ];

  return (
    <div className="flex flex-col gap-48">
      <section className="flex flex-col gap-16 py-32">
        <h1 className="text-display-2xl font-bold">Mentorfy.DS</h1>
        <p className="max-w-[560px] text-body-md text-ink-muted">
          O sistema de design da Mentorfy: fundações, tokens e componentes para
          construir produtos consistentes — em sincronia com a biblioteca do Figma.
        </p>
        <div>
          <Link
            href="/foundations/colors"
            className="inline-flex items-center rounded-lg bg-brand px-16 py-12 text-body-sm font-medium text-ink hover:bg-brand-hover transition-colors"
          >
            Explorar documentação
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-16">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-line-subtle bg-card px-16 py-16">
            <p className="text-display-sm font-bold text-brand">{stat.value}</p>
            <p className="text-body-xs text-ink-muted">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-24">
        <div className="flex flex-col gap-16 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-display-xs font-bold">O que tem no Mentorfy.DS</h2>
          <div className="flex h-40 w-full items-center gap-8 rounded-md border border-line-subtle bg-card px-12 sm:w-[280px]">
            <SearchIcon />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Buscar componente..."
              aria-label="Buscar componente"
              className="w-full bg-transparent text-body-sm text-ink placeholder:text-ink-muted outline-none"
            />
          </div>
        </div>

        {filteredSections.length === 0 ? (
          <p className="text-body-sm text-ink-muted">Nada encontrado para &quot;{query}&quot;.</p>
        ) : (
          filteredSections.map((section) => (
            <div key={section.group} className="flex flex-col gap-12">
              <div>
                <h3 className="text-body-md font-bold text-ink">
                  {section.group} <span className="text-body-xs font-normal text-ink-muted">· {section.items.length} itens</span>
                </h3>
                <p className="text-body-xs text-ink-muted">{section.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-16 sm:grid-cols-3 lg:grid-cols-4">
                {section.items.map((item) => (
                  // Os previews têm controles reais (Switch, Input, botão do
                  // Select...) — aninhar isso dentro do próprio <a> geraria
                  // HTML inválido (elemento interativo dentro de elemento
                  // interativo). Em vez de embrulhar o card inteiro num Link,
                  // só o rótulo vira link de verdade; um "stretched link"
                  // (::after cobrindo o card via position:absolute inset-0)
                  // estende a área de clique pro card inteiro do mesmo jeito.
                  <div
                    key={item.href}
                    className="relative flex flex-col gap-12 rounded-lg border border-line-subtle bg-card p-12 transition-colors hover:border-brand"
                  >
                    <Preview>{item.preview}</Preview>
                    <Link href={item.href} className="text-body-sm font-medium text-ink after:absolute after:inset-0">
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
