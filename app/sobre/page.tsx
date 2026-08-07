const pillars = [
  {
    name: "Orientar",
    desc: "Dar clareza e direção pra quem constrói e pra quem usa os produtos da Mentorfy — do mesmo jeito que um mentor orienta quem busca crescer.",
  },
  {
    name: "Padronizar",
    desc: "Criar consistência visual e de comportamento em todos os pontos de contato da marca.",
  },
  {
    name: "Escalar",
    desc: "Permitir que novos produtos e squads cresçam sem perder identidade nem repetir trabalho já resolvido.",
  },
  {
    name: "Conectar",
    desc: "Aproximar design, código e produto num vocabulário só — a mesma conexão que a mentoria cria entre quem ensina e quem aprende.",
  },
];

export default function SobrePage() {
  return (
    <div className="flex flex-col gap-48 max-w-[760px]">
      <section className="flex flex-col gap-16">
        <span className="w-fit px-8 py-2 rounded-md bg-brand-subtle text-body-xs font-medium text-ink-brand">
          Overview
        </span>
        <h1 className="text-display-md font-bold">Sobre a Bússola</h1>
        <p className="text-body-md text-ink-muted">
          A Bússola é o design system da Mentorfy. Ela reúne os princípios visuais, os
          tokens e os componentes que sustentam a experiência dos produtos da Mentorfy,
          funcionando como referência única entre design, produto e engenharia.
        </p>
      </section>

      <section className="flex flex-col gap-16">
        <h2 className="text-display-xs font-bold">Orientação é o que a Mentorfy faz</h2>
        <div className="flex flex-col gap-16 text-body-md text-ink-muted">
          <p>
            A Mentorfy existe pra conectar quem já percorreu um caminho com quem está
            começando a percorrer o seu. É, no fundo, sobre orientação — e foi daí que
            veio o nome Bússola.
          </p>
          <p>
            Uma bússola não decide o destino de quem a usa, mas dá clareza sobre a
            direção. É exatamente esse o papel que um bom mentor cumpre, e é esse o
            papel que esse design system cumpre dentro da Mentorfy: não substitui as
            decisões de cada time, mas dá uma referência confiável de pra onde seguir.
          </p>
          <p>
            Cada token, cada componente, cada padrão de interação é um ponto cardinal —
            pequenas certezas que, juntas, ajudam qualquer pessoa do time a construir
            interfaces sem se perder no caminho.
          </p>
          <p>
            A Bússola guia squads, evita retrabalho e mantém os produtos da Mentorfy
            reconhecíveis entre si, mesmo quando são construídos por pessoas diferentes,
            em momentos diferentes.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-16">
        <h2 className="text-display-xs font-bold">Nosso propósito</h2>
        <p className="text-body-md text-ink-muted">
          O papel da Bússola como referência que orienta e conecta os produtos da
          Mentorfy.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          {pillars.map((p) => (
            <div key={p.name} className="rounded-lg bg-card p-16 flex flex-col gap-8">
              <span className="text-body-md font-bold text-ink-brand">{p.name}</span>
              <p className="text-body-sm text-ink-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-16">
        <h2 className="text-display-xs font-bold">Como atua?</h2>
        <p className="text-body-md text-ink-muted">
          A Bússola orienta os produtos da Mentorfy em três frentes: fornece tokens de
          design — cores, tipografia, espaçamento e radius; define componentes prontos
          pra interface, documentados e reutilizáveis; e serve como guia de uso,
          alinhando design, produto e engenharia numa mesma referência.
        </p>
        <p className="text-body-md text-ink-muted">
          Cada componente é um ponto de apoio. Juntos, formam o mapa que mantém os
          produtos da Mentorfy organizados, consistentes e fáceis de evoluir.
        </p>
      </section>

      <section className="flex flex-col gap-16">
        <h2 className="text-display-xs font-bold">Impacto esperado</h2>
        <p className="text-body-md text-ink-muted">
          Resultados que a Bússola deve sustentar ao longo do tempo: identidade visual
          única em todos os produtos da Mentorfy; menos retrabalho, com componentes
          reutilizáveis e documentados; mais velocidade pra squads novas colocarem
          produto no ar; e uma cultura de design mais forte, com design e código
          falando a mesma língua.
        </p>
      </section>

      <section className="flex flex-col gap-16 pb-32">
        <h2 className="text-display-xs font-bold">Seguindo a Bússola</h2>
        <p className="text-body-md text-ink-muted">
          A Bússola não é só uma lista de componentes — é a referência que mantém os
          produtos da Mentorfy apontando pra mesma direção. Ao segui-la, os times de
          design, produto e engenharia trabalham alinhados, sem precisar reinventar
          decisão que já foi tomada.
        </p>
        <p className="text-body-md text-ink-muted">
          Cada token, cada componente e cada página de documentação é um ponto de
          referência nessa jornada. Contribua, questione, e ajude a manter a Bússola
          apontando pro lugar certo.
        </p>
      </section>
    </div>
  );
}
