type HeroCtaGroupProps = {
  kakaoConsultUrl: string;
};

export function HeroCtaGroup({ kakaoConsultUrl }: HeroCtaGroupProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <button className="h-11 rounded-md bg-emerald-500 px-7 font-semibold text-slate-950 hover:bg-emerald-400">
        무료 데모 신청하기
      </button>
      <a
        href={kakaoConsultUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-11 items-center rounded-md border border-slate-500 bg-slate-900/50 px-7 font-semibold text-white hover:bg-slate-800"
      >
        도입 문의
      </a>
    </div>
  );
}
