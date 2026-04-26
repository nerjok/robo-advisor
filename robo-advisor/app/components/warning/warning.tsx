export default function Warning({
  icon,
  message,
}: {
  icon: string;
  message: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl bg-primary/5 p-5 border-l-4 border-primary">
      <span className="material-symbols-outlined text-primary">{icon}</span>
      <p className="text-sm text-slate-600 dark:text-slate-300">{message}</p>
    </div>
  );
}
