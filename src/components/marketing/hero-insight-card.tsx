export function HeroInsightCard() {
  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-white/15 bg-white/95 p-5 text-slate-900 shadow-2xl">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold">클리닉 신뢰 지수</p>
          <p className="text-xs text-slate-500">실시간 평판 분석</p>
        </div>
        <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
          99.2%
        </span>
      </div>
      <div className="mb-3 text-3xl font-bold">4.9</div>
      <div className="mb-4 text-emerald-500">★★★★★</div>
      <div className="space-y-2 text-xs text-slate-600">
        <div className="flex items-center justify-between">
          <span>재방문 유지율</span>
          <span className="font-semibold text-slate-800">87%</span>
        </div>
        <div className="flex items-center justify-between">
          <span>P-note 작성률</span>
          <span className="font-semibold text-slate-800">91%</span>
        </div>
        <div className="flex items-center justify-between">
          <span>문서화 시간 단축</span>
          <span className="font-semibold text-slate-800">-32%</span>
        </div>
      </div>
    </div>
  );
}
