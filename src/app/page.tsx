import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HeroCtaGroup } from "@/components/marketing/hero-cta-group";
import { HeroInsightCard } from "@/components/marketing/hero-insight-card";
import { MainNav } from "@/components/marketing/main-nav";
import { TopNoticeBar } from "@/components/marketing/top-notice-bar";
import { TrustBand } from "@/components/marketing/trust-band";

const kakaoConsultUrl =
  process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL ?? "https://pf.kakao.com/";

const navItems = [
  { href: "#benefits", label: "BENEFITS" },
  { href: "#how-it-works", label: "HOW IT WORKS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Home() {
  return (
    <main className="min-h-screen break-keep bg-slate-950 font-sans tracking-tight text-slate-100">
      <div className="relative">
        <div
          className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(3, 7, 18, 0.78), rgba(2, 6, 23, 0.92)), url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
      </div>
      <div className="mx-auto w-full max-w-6xl px-4 py-8 lg:px-6">
        <section className="overflow-hidden rounded-2xl border border-white/20 bg-slate-950/45 text-white backdrop-blur-sm">
          <TopNoticeBar />
          <div className="relative px-6 pb-14 pt-8 sm:px-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_75%_70%,rgba(30,64,175,0.28),transparent_42%),linear-gradient(180deg,rgba(15,23,42,0.5),rgba(2,6,23,0.86))]" />
            <div className="relative">
              <MainNav items={navItems} />
              <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="text-left">
                  <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                    B2B SaaS Physical Care Platform
                  </div>
                  <h1 className="mb-5 max-w-xl text-4xl font-extrabold leading-[1.15] md:text-5xl">
                    데이터로 환자 회복을 가속하고
                    <br />
                    클리닉 운영 성과를 높이세요.
                  </h1>
                  <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-300">
                    기존 AI SOAP 데이터를 실시간으로 통합해 환자 경과, 문서 품질, 치료사 생산성을 한 화면에서 관리합니다.
                  </p>
                  <HeroCtaGroup kakaoConsultUrl={kakaoConsultUrl} />
                </div>
                <HeroInsightCard />
              </div>
              <TrustBand />
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20 text-white">
          <h2 className="mb-6 text-3xl font-bold">Benefits</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "환자 회복률 추적 자동화",
              "P-note 우선 워크플로우",
              "치료사별 업무 생산성 분석",
            ].map((item) => (
              <article
                key={item}
                className="rounded-xl border border-white/15 bg-slate-900/55 p-5 backdrop-blur-sm"
              >
                <p className="font-medium">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="py-20 text-white">
          <h2 className="mb-6 text-3xl font-bold">How It Works</h2>
          <ol className="grid gap-4 md:grid-cols-3">
            {[
              "SOAP 데이터 수집 및 정규화",
              "AI 요약과 위험 신호 자동 분류",
              "대시보드에서 즉시 액션 실행",
            ].map((item, idx) => (
              <li
                key={item}
                className="rounded-xl border border-white/15 bg-slate-900/55 p-5 backdrop-blur-sm"
              >
                <p className="mb-2 text-xs text-slate-300">STEP {idx + 1}</p>
                <p className="font-medium">{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="contact"
          className="rounded-xl border border-white/15 bg-slate-900/55 p-6 text-white backdrop-blur-sm"
        >
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-slate-300">데모 신청과 도입 상담을 통해 클리닉 맞춤 설정을 시작하세요.</p>
          <div className="mt-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
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
