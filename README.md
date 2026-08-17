# Mentorfy.DS

Monorepo do Design System da Mentorfy: o pacote instalável com os
componentes + tokens, e o site de documentação que os exibe. Construído com
Next.js, React e Tailwind v4.

## Instalando o pacote em outro projeto

```bash
npm install @brunosantossss/ds
```

```tsx
import {
  Button, Badge, Avatar, Card, Input,
  Sidebar, SidebarItem, Switch, Checkbox, Select, Tabs, Modal, Tooltip,
  Table, TableRow, TableHeaderCell, TableCell,
} from "@brunosantossss/ds";
```

O pacote só entrega componentes — cores, espaçamento e radius vêm de
classes Tailwind (`bg-brand`, `px-16`, `rounded-lg`, etc.), então o projeto
que instalar precisa importar os tokens também, uma vez, no seu CSS global:

```css
@import "tailwindcss";
@import "@brunosantossss/ds/theme.css";
```

E garantir que o Tailwind escaneie o pacote por classes (Tailwind v4, no
mesmo arquivo CSS):

```css
@source "../node_modules/@brunosantossss/ds/src/**/*.{ts,tsx}";
```

Sem os dois passos acima, os componentes renderizam sem estilo nenhum.

## Rodando o site de documentação localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). O `npm install` na raiz
já resolve o pacote via npm workspaces (sem precisar publicar pra testar
localmente).

## Estrutura

```
packages/ds/            # O pacote publicado (@brunosantossss/ds)
  src/
    Button.tsx           # Cada componente é a implementação real
    Input.tsx
    Badge.tsx
    Avatar.tsx
    Card.tsx
    SidebarItem.tsx
    Sidebar.tsx, Switch.tsx, Checkbox.tsx, Select.tsx, Tabs.tsx,
    Modal.tsx, Tooltip.tsx, Table.tsx
    theme.css            # Tokens (bloco @theme do Tailwind v4)
    index.ts              # Barrel export
  package.json
app/
  foundations/colors/       # Tabela de cores (primitivas + semânticas)
  foundations/typography/   # Escala tipográfica (Display/Text x pesos)
  foundations/spacing/      # Spacing + Radius
  components/{button,input,badge,avatar,card,sidebar-item,sidebar,switch,checkbox,select,tabs,modal,tooltip,table}/  # Documentação viva
components/ui/
  Button.tsx, Input.tsx...  # Re-exports de @brunosantossss/ds — mantidos só
                             # para não quebrar imports internos do site
lib/
  tokens.ts                 # Dados estruturados dos tokens — ver seção abaixo
```

## De onde vêm os tokens

Hoje (`v0.1`) os valores em `app/globals.css` (bloco `@theme`) e em `lib/tokens.ts`
são uma **transcrição manual** das Variables do arquivo Figma "Mentorfy.DS"
(coleções `Color Primitives`, `Color Semantic`, `Foundations - Size`).

Hoje (`v0.1`) os valores em `packages/ds/src/theme.css` e em `lib/tokens.ts`
(usado pelas páginas de documentação) são uma **transcrição manual** das
Variables do arquivo Figma "Mentorfy.DS" (coleções `Color Primitives`,
`Color Semantic`, `Foundations - Size`).

Isso significa: se alguém mudar uma cor no Figma, esse valor **não** atualiza
aqui automaticamente ainda — e como o pacote já está publicado, um projeto
que instalou `@brunosantossss/ds` só recebe a mudança quando alguém publicar
uma nova versão (`npm version` + `npm publish` dentro de `packages/ds`).

**Por que não é 100% automático:** a API REST de Variables do Figma
(`GET /v1/files/:file_key/variables/local`) só está disponível em planos
**Enterprise**. Sem isso, não existe um jeito de um servidor/GitHub Action
puxar as Variables direto do Figma sem intervenção humana.

**Como o sync funciona hoje:** sob demanda, usando a Plugin API do Figma
(via Figma Desktop + plugin "Desktop Bridge", que funciona em qualquer
plano). O fluxo é:

1. Abra o arquivo "Mentorfy.DS" no Figma Desktop e rode o plugin Desktop
   Bridge.
2. Peça a sincronização (para a Claude, ou rodando a extração das Variables
   manualmente) — os valores atuais são lidos direto do arquivo Figma.
3. `app/globals.css` e `lib/tokens.ts` são regravados com os valores
   atualizados, e o commit/push é feito normalmente.

Não é um cron automático, mas garante que toda atualização passe por uma
leitura real do arquivo Figma (sem transcrição manual sujeita a erro), e
pode ser disparada sempre que os tokens mudarem no Figma.

Os componentes (`packages/ds/src/*.tsx`) **não** são gerados a partir do
Figma — não existe uma forma confiável de gerar código de produção a partir
de um componente Figma. O jeito real de manter design e código alinhados
seria o [Figma Code Connect](https://www.figma.com/code-connect-docs/): você
mapeia cada componente do Figma ao componente de código equivalente, e no
Dev Mode o time vê o snippet de código real ali do lado do design.

**Isso hoje não está disponível no plano atual do Figma** — Code Connect
exige seat Dev ou Full num plano Organization ou Enterprise, e as contas
usadas neste projeto são Starter/Pro. Sem isso, a referência entre
componente Figma e código é só esta documentação: quem for implementar um
componente novo deve olhar a página correspondente em `app/components/*` e
nas páginas do Figma, e manter os dois emparelhados manualmente.

## Pacote publicado

`@brunosantossss/ds` está publicado no [npm público](https://www.npmjs.com/package/@brunosantossss/ds),
sob o escopo pessoal de quem publicou — não `@mentorfy-team`, porque esse
escopo exigiria criar uma Organization paga no npm (separada da organização
do GitHub). Publicar sob o nome da equipe é possível a qualquer momento
criando essa Organization em [npmjs.com/org/create](https://www.npmjs.com/org/create)
e republicando com o nome atualizado em `packages/ds/package.json`.

Para lançar uma nova versão depois de mudar algo em `packages/ds/src`:

```bash
cd packages/ds
npm version patch   # ou minor/major
npm publish --access public
```

## Repositório

Código versionado em [Mentorfy-Team/mentorfy-ds](https://github.com/Mentorfy-Team/mentorfy-ds).

```bash
git clone https://github.com/Mentorfy-Team/mentorfy-ds.git
cd mentorfy-ds
npm install
npm run dev
```

## Deploy

Como é um app Next.js padrão, funciona direto na [Vercel](https://vercel.com/new).
