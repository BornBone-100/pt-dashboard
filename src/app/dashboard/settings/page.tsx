import { AsyncState } from "@/components/shared/async-state";

export default function SettingsPage() {
  const status = "success" as const;

  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">Settings</h1>
      <AsyncState status={status}>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="font-medium">기본 표시 규칙</p>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
            <li>P-note 우선 정렬 활성화</li>
            <li>상태별 UI(Loading/Error/Empty/Success) 표시 활성화</li>
          </ul>
        </div>
      </AsyncState>
    </section>
  );
}
