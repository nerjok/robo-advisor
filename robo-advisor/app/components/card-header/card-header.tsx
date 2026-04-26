export default function CardHeader({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-lg font-bold">{title}</p>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
