export function PageHeader({
  category,
  title,
  description,
}: {
  category: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-8 mb-32">
      <span className="w-fit px-8 py-2 rounded-md bg-brand-subtle text-body-xs font-medium text-ink-brand">
        {category}
      </span>
      <h1 className="text-display-md font-bold">{title}</h1>
      <p className="text-body-md text-ink-muted max-w-[640px]">{description}</p>
    </div>
  );
}
