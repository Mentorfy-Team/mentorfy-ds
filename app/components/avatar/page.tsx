import { PageHeader } from "@/components/PageHeader";
import { Avatar, type AvatarSize, type AvatarType, type AvatarStatus } from "@/components/ui/Avatar";

const sizes: AvatarSize[] = ["xs", "sm", "md", "lg"];
const types: AvatarType[] = ["initials", "placeholder"];
const statuses: AvatarStatus[] = ["none", "online", "offline"];

export default function AvatarPage() {
  return (
    <div>
      <PageHeader
        category="Base Component"
        title="Avatar"
        description="Representação visual de um usuário, com iniciais ou placeholder, e indicador de status opcional."
      />

      <div className="rounded-lg border border-line bg-card p-16 mb-32">
        <pre className="text-body-xs font-mono text-ink-muted overflow-x-auto">
{`import { Avatar } from "@/components/ui/Avatar";

<Avatar size="md" type="initials" status="online" initials="AB" />`}
        </pre>
      </div>

      {sizes.map((size) => (
        <div key={size} className="mb-32">
          <h3 className="text-body-lg font-bold mb-12 uppercase">{size}</h3>
          <div className="flex flex-col gap-16">
            {types.map((type) => (
              <div key={type} className="flex items-center gap-16">
                <span className="w-64 text-body-xs text-ink-muted capitalize">{type}</span>
                {statuses.map((status) => (
                  <Avatar key={status} size={size} type={type} status={status} />
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mb-32">
        <h3 className="text-body-lg font-bold mb-12">Propriedades</h3>
        <div className="rounded-lg border border-line overflow-hidden">
          {[
            ["size", "xs (24) | sm (32) | md (40) | lg (48)"],
            ["type", "initials | placeholder"],
            ["status", "none | online | offline"],
            ["initials", "string (padrão: \"AB\")"],
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
