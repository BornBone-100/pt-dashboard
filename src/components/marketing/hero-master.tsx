import Link from "next/link";

type HeroMasterProps = {
  kakaoConsultUrl: string;
};

export function HeroMaster({ kakaoConsultUrl }: HeroMasterProps) {
  return (
    <section className="relative overflow-hidden bg-[#0B1120] px-6 pb-24 pt-20 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="z-10 flex flex-col items-start">
          <div className="mb-6 rounded-full border border-gray-700 bg-gray-800/50 px-4 py-1.5 text-xs font-semibold tracking-wide text-gray-300">
            B2B SaaS Physical Care Platform
          </div>

          <h1 className="mb-6 max-w-4xl break-keep text-4xl font-extrabold leading-[1.25] tracking-tight md:text-5xl lg:text-6xl">
            데이터는 정직하며, <br />
            전문 물리치료사가 <br />
            <span className="text-blue-400">케어를 정밀하게 실행합니다.</span>
          </h1>

          <p className="mb-10 max-w-lg break-keep text-lg leading-relaxed text-gray-400">
            기존 AI SOAP 데이터를 실시간으로 통합하여 환자 평가, 문서 품질, 치료사 생산성을 한 화면에서 완벽하게 관리합니다.
          </p>

          <div className="flex w-full flex-wrap gap-4 sm:w-auto">
            <Link
              href="#contact"
              className="rounded-lg bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-700"
            >
              무료 데모 신청
            </Link>
            <a
              href={kakaoConsultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-[#FEE500] px-7 py-3.5 font-semibold text-black shadow-md transition hover:bg-[#FDD800]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 3c-5.523 0-10 3.582-10 8 0 2.536 1.487 4.788 3.784 6.208-.344 1.258-1.246 4.354-1.282 4.492-.047.18.064.295.197.23 1.116-.547 3.9-1.922 4.672-2.33 1.096.34 2.302.535 3.56.535 5.523 0 10-3.582 10-8s-4.477-8-10-8z" />
              </svg>
              카카오톡 상담
            </a>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-md lg:ml-auto">
          <div className="rounded-2xl bg-white p-8 text-gray-900 shadow-2xl shadow-black/50">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold">클리닉 신뢰 지수</h3>
                <p className="text-sm text-gray-500">실시간 데이터 분석</p>
              </div>
              <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-bold text-green-700">
                +12.5%
              </span>
            </div>

            <div className="mb-2 text-5xl font-extrabold">4.9</div>
            <div className="mb-8 flex text-green-500">★★★★★</div>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2 text-sm">
                <span className="text-gray-600">재방문 유지율</span>
                <span className="font-bold">87%</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-2 text-sm">
                <span className="text-gray-600">P-note 정확도</span>
                <span className="font-bold">99%</span>
              </div>
              <div className="flex items-center justify-between pb-2 text-sm">
                <span className="text-gray-600">업무 소요 시간</span>
                <span className="font-bold text-blue-600">-32%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-20 flex max-w-5xl flex-col items-center justify-between gap-6 rounded-2xl border border-gray-700/50 bg-gray-800/40 px-8 py-6 backdrop-blur-sm md:flex-row">
        <div className="flex items-center gap-3">
          <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm font-medium text-gray-300">7년 차 임상 전문가 설계</span>
        </div>
        <div className="flex items-center gap-3">
          <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm font-medium text-gray-300">치료 프로토콜 최적화</span>
        </div>
        <div className="flex items-center gap-3">
          <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm font-medium text-gray-300">AI SOAP 완벽 연동</span>
        </div>
      </div>
    </section>
  );
}
