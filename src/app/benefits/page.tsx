export default function BenefitsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 font-sans">
      <div className="mx-auto max-w-4xl rounded-xl border border-slate-200 bg-white p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Benefits</h1>
        <ul className="mt-6 space-y-3 text-slate-700">
          <li>환자 회복률 추적 자동화</li>
          <li>P-note 우선 워크플로우로 임상 기록 품질 향상</li>
          <li>치료사별 업무 로드맵 분석으로 운영 효율 최적화</li>
        </ul>
      </div>
    </main>
  );
}
