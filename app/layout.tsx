import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Mentorfy.DS",
  description: "Design System da Mentorfy — fundações, tokens e componentes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-page text-ink">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 px-24 py-32 max-w-[1080px]">{children}</main>
        </div>
      </body>
    </html>
  );
}
