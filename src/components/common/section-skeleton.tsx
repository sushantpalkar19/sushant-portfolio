export function SectionSkeleton() {
  return (
    <div className="container py-12">
      <div className="animate-pulse rounded-xl border border-border bg-card p-8">
        <div className="h-5 w-28 rounded-full bg-slate-700" />
        <div className="mt-5 h-10 w-2/3 rounded-full bg-slate-700" />
        <div className="mt-4 h-4 w-full rounded-full bg-slate-700" />
        <div className="mt-3 h-4 w-5/6 rounded-full bg-slate-700" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="h-36 rounded-lg bg-slate-700" />
          <div className="h-36 rounded-lg bg-slate-700" />
          <div className="h-36 rounded-lg bg-slate-700" />
        </div>
      </div>
    </div>
  );
}
