# Mentorfy.DS

Site de documentação do Design System da Mentorfy — fundações, tokens e
componentes, em sincronia com a biblioteca do Figma. Construído com Next.js
e Tailwind v4.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

```
app/
  foundations/colors/       # Tabela de cores (primitivas + semânticas)
  foundations/typography/   # Escala tipográfica (Display/Text x pesos)
  foundations/spacing/      # Spacing + Radius
  components/button/        # Documentação viva do Button
  components/input/         # Documentação viva do Input
components/ui/
  Button.tsx                # Componente React real (não é só ilustrativo)
  Input.tsx
lib/
  tokens.ts                 # Dados estruturados dos tokens — ver seção abaixo
```

## De onde vêm os tokens

Hoje (`v0.1`) os valores em `app/globals.css` (bloco `@theme`) e em `lib/tokens.ts`
são uma **transcrição manual** das Variables do arquivo Figma "Mentorfy.DS"
(coleções `Color Primitives`, `Color Semantic`, `Foundations - Size`).

Isso significa: se alguém mudar uma cor no Figma, esse valor **não** atualiza
aqui automaticamente ainda.

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

Os componentes (`Button.tsx`, `Input.tsx`) **não** são gerados a partir do
Figma — não existe uma forma confiável de gerar código de produção a partir
de um componente Figma. O jeito real de manter design e código alinhados é o
[Figma Code Connect](https://www.figma.com/code-connect-docs/): você mapeia
cada componente do Figma ao componente de código equivalente, e no Dev Mode
do Figma o time vê o snippet de código real ali do lado do design.

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
