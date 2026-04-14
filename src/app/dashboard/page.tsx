import { AsyncState } from "@/components/shared/async-state";

export default function DashboardOverviewPage() {
  const status = "success" as const;

  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">Overview</h1>
      <AsyncState status={status}>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { label: "전체 환자", value: "284" },
            { label: "AI SOAP 연동률", value: "92%" },
            { label: "평균 통증 개선", value: "-2.9" },
          ].map((card) => (
            <article key={card.label} className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-sm text-slate-500">{card.label}</p>
              <p className="mt-2 text-3xl font-bold">{card.value}</p>
            </article>
          ))}
        </div>
      </AsyncState>
    </section>
  );
}
