export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16 font-sans">
      <div className="mx-auto max-w-4xl rounded-xl border border-slate-200 bg-white p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">How It Works</h1>
        <ol className="mt-6 space-y-3 text-slate-700">
          <li>1. SOAP 데이터 수집 및 정규화</li>
          <li>2. AI 요약과 위험 신호 자동 분류</li>
          <li>3. 대시보드에서 치료 액션 실행</li>
        </ol>
      </div>
    </main>
  );
}
