import { PageHeader } from "@/components/PageHeader";
import { Card, type CardStyle, type CardPadding } from "@brunosantossss/ds";

const styles: CardStyle[] = ["default", "bordered"];
const paddings: CardPadding[] = ["sm", "md", "lg"];

export default function CardPage() {
  return (
    <div>
      <PageHeader
        category="Complex Component"
        title="Card"
        description="Contêiner usado para agrupar conteúdo relacionado, com título e ação de rodapé opcionais."
      />

      <div className="rounded-lg border border-line bg-card p-16 mb-32">
        <pre className="text-body-xs font-mono text-ink-muted overflow-x-auto">
{`import { Card } from "@brunosantossss/ds";

<Card title="Título do Card" footerLabel="Ver mais →">
  Conteúdo do card.
</Card>`}
        </pre>
      </div>

      {styles.map((style_) => (
        <div key={style_} className="mb-32">
          <h3 className="text-body-lg font-bold mb-12 capitalize">{style_}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {paddings.map((padding) => (
              <Card key={padding} style_={style_} padding={padding} title="Título do Card" footerLabel="Ver mais →">
                Conteúdo do card. Um parágrafo curto descrevendo o item. Padding: {padding}.
              </Card>
            ))}
          </div>
        </div>
      ))}

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Propriedades</h3>
        <div className="rounded-lg border border-line overflow-hidden">
          {[
            ["style_", "default | bordered"],
            ["padding", "sm (16) | md (24) | lg (32)"],
            ["title", "string (opcional)"],
            ["footerLabel", "string (opcional, ação única de rodapé)"],
          ].map(([prop, value]) => (
            <div key={prop} className="grid grid-cols-2 px-16 py-12 border-b border-line last:border-b-0">
              <span className="text-body-sm text-ink font-mono">{prop}</span>
              <span className="text-body-sm text-ink-muted font-mono">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
