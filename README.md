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
aqui automaticamente ainda. O próximo passo do workflow de sincronização é:

1. Um script (`scripts/sync-tokens.ts`, a construir) chama a
   [Figma REST API](https://www.figma.com/developers/api#variables) —
   endpoint `GET /v1/files/:file_key/variables/local` — usando um token de
   acesso pessoal do Figma.
2. O script transforma o JSON de Variables no mesmo formato de
   `lib/tokens.ts` e regrava `app/globals.css` + `lib/tokens.ts`.
3. Uma GitHub Action roda esse script (manualmente ou em cron) e abre um PR
   automático quando os tokens do Figma mudarem — assim toda mudança de
   token passa por revisão antes de ir pro código.

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
