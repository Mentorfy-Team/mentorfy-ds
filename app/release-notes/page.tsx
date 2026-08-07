const releases = [
  {
    data: "07/08/2026",
    oque: "Criação do arquivo Mentorfy.DS: variáveis de cor (primitivas e semânticas), espaçamento e radius extraídos da UI real do produto.",
    versao: "0.1",
    autor: "Time Mentorfy",
  },
  {
    data: "07/08/2026",
    oque: "Construção dos componentes Button e Input (Type/Size/State/Icon), com páginas de documentação e correção dos estados disabled.",
    versao: "0.1",
    autor: "Time Mentorfy",
  },
  {
    data: "07/08/2026",
    oque: "Criação dos componentes Badge, Avatar, Card e Sidebar Item, seguindo o mesmo padrão de documentação.",
    versao: "0.1",
    autor: "Time Mentorfy",
  },
  {
    data: "07/08/2026",
    oque: "Publicação do site de documentação (Next.js + Tailwind v4) e do repositório no GitHub (Mentorfy-Team/mentorfy-ds).",
    versao: "0.1",
    autor: "Time Mentorfy",
  },
  {
    data: "07/08/2026",
    oque: "Extração dos componentes para o pacote @brunosantossss/ds, publicado no npm público.",
    versao: "0.1",
    autor: "Time Mentorfy",
  },
  {
    data: "07/08/2026",
    oque: "Definição do nome Bússola e criação das páginas de fundamentos e release notes.",
    versao: "0.1",
    autor: "Time Mentorfy",
  },
];

export default function ReleaseNotesPage() {
  return (
    <div className="flex flex-col gap-32 max-w-[900px]">
      <section className="flex flex-col gap-16">
        <span className="w-fit px-8 py-2 rounded-md bg-brand-subtle text-body-xs font-medium text-ink-brand">
          Overview
        </span>
        <h1 className="text-display-md font-bold">Release Notes</h1>
        <p className="text-body-md text-ink-muted">
          As Release Notes são um documento que descreve todas as mudanças realizadas em
          uma nova versão da Bússola. O objetivo é comunicar de forma clara e
          estruturada o que foi adicionado, alterado, removido ou corrigido.
        </p>
      </section>

      <section className="flex flex-col">
        {releases.map((r, i) => (
          <div
            key={i}
            className="grid grid-cols-[100px_1fr_50px_120px] gap-24 py-16 border-b border-line last:border-b-0"
          >
            <span className="text-body-sm text-ink-muted">{r.data}</span>
            <span className="text-body-sm text-ink">{r.oque}</span>
            <span className="text-body-sm text-ink-muted">{r.versao}</span>
            <span className="text-body-sm text-ink-muted">{r.autor}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
