import { AsyncState } from "@/components/shared/async-state";

export default function AnalyticsPage() {
  const status = "success" as const;

  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">Analytics</h1>
      <AsyncState status={status}>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">환자 회복률</p>
            <p className="mt-2 text-3xl font-bold">83%</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">치료사 평균 문서화 시간</p>
            <p className="mt-2 text-3xl font-bold">3.8분</p>
          </article>
        </div>
      </AsyncState>
    </section>
  );
}
