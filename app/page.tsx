import Link from "next/link";

const sections = [
  {
    count: 3,
    title: "Foundations",
    description: "Cores, tipografia e espaçamento/grid que sustentam todo o sistema.",
    items: ["Colors", "Typography", "Grid & Spacing"],
    href: "/foundations/colors",
  },
  {
    count: 3,
    title: "Base Components",
    description: "Componentes atômicos documentados com variações, estados e props.",
    items: ["Button", "Badge", "Avatar"],
    href: "/components/button",
  },
  {
    count: 3,
    title: "Complex Components",
    description: "Componentes compostos com lógica de interação.",
    items: ["Input", "Card", "Sidebar Item"],
    href: "/components/input",
  },
];

const stats = [
  { value: "6", label: "Componentes" },
  { value: "3", label: "Seções" },
  { value: "49", label: "Tokens" },
  { value: "v0.1", label: "Versão atual" },
];

export default function Home() {
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
          <div key={stat.label} className="rounded-lg border border-line bg-card px-16 py-16">
            <p className="text-display-sm font-bold text-brand">{stat.value}</p>
            <p className="text-body-xs text-ink-muted">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-16">
        <h2 className="text-display-xs font-bold">O que tem no Mentorfy.DS</h2>
        <div className="grid gap-16 md:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="flex flex-col gap-8 rounded-lg border border-line bg-card p-16 hover:border-brand transition-colors"
            >
              <span className="text-body-xs text-ink-muted">{section.count} itens</span>
              <span className="text-body-md font-bold">{section.title}</span>
              <p className="text-body-xs text-ink-muted">{section.description}</p>
              <ul className="text-body-xs text-ink flex flex-col gap-2 mt-8">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
