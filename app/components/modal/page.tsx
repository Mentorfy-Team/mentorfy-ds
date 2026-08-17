import { PageHeader } from "@/components/PageHeader";
import { Modal, Button } from "@brunosantossss/ds";

export default function ModalPage() {
  return (
    <div>
      <PageHeader
        category="Complex Component"
        title="Modal"
        description="Janela sobreposta para confirmações e formulários curtos. Header/Body/Footer separados por divisores, sobre um scrim escuro."
      />

      <div className="rounded-lg border border-line bg-card p-16 mb-32">
        <pre className="text-body-xs font-mono text-ink-muted overflow-x-auto">
{`import { Modal, Button } from "@brunosantossss/ds";

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Cancelar matrícula"
  footer={<>
    <Button type_="secondary" onClick={() => setOpen(false)}>Voltar</Button>
    <Button type_="danger" onClick={confirm}>Confirmar cancelamento</Button>
  </>}
>
  Essa ação não pode ser desfeita.
</Modal>`}
        </pre>
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Exemplo (variant=&quot;inline&quot;, para documentação)</h3>
        <div className="relative h-[420px] rounded-lg border border-line bg-page overflow-hidden">
          <Modal
            open
            variant="inline"
            title="Cancelar matrícula"
            footer={
              <>
                <Button type_="secondary">Voltar</Button>
                <Button type_="danger">Confirmar cancelamento</Button>
              </>
            }
          >
            Essa ação não pode ser desfeita. O aluno perderá acesso ao conteúdo do curso imediatamente.
          </Modal>
        </div>
        <p className="text-body-xs text-ink-muted mt-8">
          Em produção use <code className="font-mono">variant=&quot;fixed&quot;</code> (padrão) — ele cobre a viewport
          inteira em vez de um contêiner posicionado.
        </p>
      </div>

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Propriedades</h3>
        <div className="rounded-lg border border-line overflow-hidden">
          {[
            ["open", "boolean"],
            ["onClose", "() => void — chamado ao clicar no scrim"],
            ["title", "ReactNode"],
            ["footer", "ReactNode"],
            ["variant", "fixed (padrão, cobre a viewport) | inline (posicionamento absoluto)"],
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
