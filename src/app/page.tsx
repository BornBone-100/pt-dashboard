import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HeroMaster } from "@/components/marketing/hero-master";
import { SiteHeader } from "@/components/marketing/site-header";

const kakaoConsultUrl =
  process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL ?? "https://pf.kakao.com/";

export default function Home() {
  return (
    <main className="min-h-screen break-keep bg-[#0B1120] font-sans tracking-tight text-slate-100">
      <SiteHeader />
      <HeroMaster kakaoConsultUrl={kakaoConsultUrl} />

      <div className="mx-auto w-full max-w-7xl px-6 pb-24">
        <section id="features" className="scroll-mt-28 py-24 text-white">
          <h2 className="mb-8 text-3xl font-bold tracking-tight">핵심 기능</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "환자 회복률 추적 자동화",
              "P-note 우선 워크플로우",
              "치료사별 업무 생산성 분석",
            ].map((item) => (
              <article
                key={item}
                className="rounded-xl border border-gray-700/50 bg-gray-800/40 p-5 backdrop-blur-sm"
              >
                <p className="font-medium text-gray-100">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="benefits" className="scroll-mt-28 py-24 text-white">
          <h2 className="mb-8 text-3xl font-bold tracking-tight">도입 효과</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "운영 효율",
                desc: "문서화 시간·재방문 관리 업무를 줄여 치료에 집중할 수 있습니다.",
              },
              {
                title: "임상 품질",
                desc: "SOAP·P-note 기반으로 경과 추적과 팀 내 공유가 일관됩니다.",
              },
              {
                title: "의사결정",
                desc: "대시보드 지표로 센터별 성과와 리스크를 빠르게 파악합니다.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-gray-700/50 bg-gray-800/40 p-6 backdrop-blur-sm"
              >
                <p className="mb-2 font-semibold text-white">{item.title}</p>
                <p className="text-sm leading-relaxed text-gray-400">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-28 py-24 text-white">
          <h2 className="mb-8 text-3xl font-bold tracking-tight">이용 방법</h2>
          <ol className="grid gap-4 md:grid-cols-3">
            {[
              "SOAP 데이터 수집 및 정규화",
              "AI 요약과 위험 신호 자동 분류",
              "대시보드에서 즉시 액션 실행",
            ].map((item, idx) => (
              <li
                key={item}
                className="rounded-xl border border-gray-700/50 bg-gray-800/40 p-5 backdrop-blur-sm"
              >
                <p className="mb-2 text-xs text-gray-400">단계 {idx + 1}</p>
                <p className="font-medium text-gray-100">{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="pricing" className="scroll-mt-28 py-24 text-white">
          <h2 className="mb-8 text-3xl font-bold tracking-tight">요금 안내</h2>
          <p className="mb-8 max-w-2xl text-gray-400">
            센터 규모·좌석 수·연동 범위에 따라 맞춤 견적을 제공합니다. 아래는 참고용 구성 예시입니다.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { name: "스타터", price: "월 문의", note: "소규모 클리닉·파일럿" },
              { name: "프로", price: "월 문의", note: "다중 지점·연동 확장" },
              { name: "엔터프라이즈", price: "별도 협의", note: "보안·SSO·전담 지원" },
            ].map((plan) => (
              <article
                key={plan.name}
                className="rounded-xl border border-gray-700/50 bg-gray-800/40 p-6 backdrop-blur-sm"
              >
                <p className="text-sm font-medium text-gray-500">{plan.name}</p>
                <p className="mt-2 text-2xl font-bold text-white">{plan.price}</p>
                <p className="mt-3 text-sm text-gray-400">{plan.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-28 rounded-2xl border border-gray-700/50 bg-gray-800/40 px-6 py-24 text-white backdrop-blur-sm md:px-10"
        >
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">도입 문의</h2>
          <p className="mt-3 text-gray-400">
            데모·도입 상담을 통해 클리닉에 맞는 설정과 일정을 안내해 드립니다.
          </p>
          <div className="mt-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
            >
              대시보드 미리보기
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
