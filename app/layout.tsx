import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

// A Mentorfy usa DM Sans (Regular/Medium/SemiBold/Bold) em todos os
// componentes reais — o site estava caindo no fallback Inter porque
// nada aqui carregava a fonte de verdade. --font-sans (theme.css) agora
// aponta pra essa variável.
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Mentorfy.DS",
  description: "Design System da Mentorfy — fundações, tokens e componentes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`h-full antialiased ${dmSans.variable}`}>
      {/* h-full (não min-h-full) + overflow-hidden no body: o header fica fixo no
          topo e a linha abaixo (Sidebar + main) ocupa exatamente o resto da tela,
          cada um rolando por conta própria — Sidebar fixa com scroll interno,
          conteúdo com o seu próprio scroll, sem a página inteira rolar junto. */}
      <body className="h-full flex flex-col text-ink overflow-hidden">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto px-24 py-32 max-w-[1080px]">{children}</main>
        </div>
      </body>
    </html>
  );
}
