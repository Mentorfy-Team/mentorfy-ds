import { PageHeader } from "@/components/PageHeader";
import { Rating } from "@brunosantossss/ds";

const values = [5, 4.5, 4, 3, 1.5];

export default function RatingPage() {
  return (
    <div>
      <PageHeader
        category="Complex Component"
        title="Rating"
        description="Exibe uma nota média com estrelas — somente leitura, sem interação de avaliar. Novo componente, extraído do conteúdo Type=Rating da Table Cell no Figma."
      />

      <div className="rounded-lg border border-line-subtle bg-card p-16 mb-32">
        <pre className="text-body-xs font-mono text-ink-muted overflow-x-auto">
{`import { Rating } from "@brunosantossss/ds";

<Rating value={4.8} count={132} />`}
        </pre>
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Notas</h3>
        <p className="text-body-sm text-ink-muted mb-12 max-w-[640px]">
          O preenchimento das estrelas reflete{" "}
          <code className="text-body-xs font-mono text-ink">value</code> arredondado — a instância do Figma
          mostra só o caso de 4.5/5 com as 5 estrelas cheias, mas o componente funciona pra qualquer nota.
        </p>
        <div className="flex flex-col gap-16">
          {values.map((v) => (
            <Rating key={v} value={v} count={Math.round(v * 30)} />
          ))}
        </div>
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Sem contagem</h3>
        <p className="text-body-sm text-ink-muted mb-12 max-w-[640px]">
          <code className="text-body-xs font-mono text-ink">count</code> é opcional — sem ele, some só o texto
          entre parênteses.
        </p>
        <Rating value={4.5} />
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Max customizado</h3>
        <p className="text-body-sm text-ink-muted mb-12 max-w-[640px]">
          <code className="text-body-xs font-mono text-ink">max</code> muda o total de estrelas exibidas
          (padrão 5, igual ao Figma).
        </p>
        <Rating value={2.5} max={3} count={8} />
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Propriedades</h3>
        <div className="rounded-lg border border-line-subtle overflow-hidden">
          {[
            ["value", "number — nota exibida com 1 casa decimal"],
            ["count", "number — opcional, total de avaliações entre parênteses"],
            ["max", "number — total de estrelas, padrão 5"],
            ["className", "string"],
          ].map(([prop, value]) => (
            <div key={prop} className="grid grid-cols-2 px-16 py-12 border-b border-line-subtle last:border-b-0">
              <span className="text-body-sm text-ink font-mono">{prop}</span>
              <span className="text-body-sm text-ink-muted font-mono">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
