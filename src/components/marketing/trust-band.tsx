const trustItems = [
  "7년 차 임상 전문가 설계",
  "치료 프로토콜 최적화",
  "AI SOAP 연동",
];

export function TrustBand() {
  return (
    <div className="mt-10 rounded-2xl border border-white/15 bg-white/10 px-6 py-6 backdrop-blur-sm">
      <div className="grid gap-3 md:grid-cols-3">
        {trustItems.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-slate-100"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
