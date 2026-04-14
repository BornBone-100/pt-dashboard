import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  "기존 AI SOAP 앱과 양방향 연동",
  "실시간 데이터 동기화 및 환자 경과 반영",
  "치료사 업무 흐름 중심의 인사이트 대시보드",
];

export default function Home() {
  return (
    <main className="min-h-screen break-keep bg-white font-sans tracking-tight text-slate-900">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 lg:px-6">
        <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-white">
          <div className="bg-slate-800/80 px-4 py-2 text-center text-xs text-slate-200">
            AI SOAP 데이터 연동으로 기록 품질과 환자 회복률을 동시에 높이세요.
          </div>

          <div className="relative px-6 pb-14 pt-8 sm:px-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_75%_70%,rgba(30,64,175,0.28),transparent_42%),linear-gradient(180deg,rgba(15,23,42,0.5),rgba(2,6,23,0.86))]" />
            <div className="relative">
              <nav className="mb-16 flex items-center justify-between">
                <div className="text-2xl font-semibold tracking-tight">PT Pulse</div>
                <div className="hidden items-center gap-6 text-xs font-medium text-slate-200 md:flex">
                  <button className="hover:text-white">HOME</button>
                  <button className="hover:text-white">BENEFITS</button>
                  <button className="hover:text-white">HOW IT WORKS</button>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="h-8 border-slate-600 bg-transparent px-4 text-xs text-slate-200 hover:bg-slate-800"
                  >
                    SIGN IN
                  </Button>
                  <Button className="h-8 bg-blue-600 px-4 text-xs font-semibold text-white hover:bg-blue-700">
                    REGISTER
                  </Button>
                </div>
              </nav>

              <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="text-left">
                  <Badge className="mb-6 border border-white/20 bg-white/10 text-slate-100 hover:bg-white/15">
                    B2B SaaS Physical Care Platform
                  </Badge>
                  <h1 className="mb-5 max-w-xl text-4xl font-extrabold leading-[1.15] tracking-tight md:text-5xl">
                    데이터로 환자 회복을 가속하고
                    <br />
                    클리닉 운영 성과를 높이세요.
                  </h1>
                  <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-300">
                    기존 AI SOAP 데이터를 실시간으로 통합해 환자 경과, 문서 품질, 치료사 생산성을 한 화면에서 관리합니다.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button className="h-11 bg-emerald-500 px-7 font-semibold text-slate-950 hover:bg-emerald-400">
                      무료 데모 신청하기
                    </Button>
                    <Button
                      variant="outline"
                      className="h-11 border-slate-500 bg-slate-900/50 px-7 font-semibold text-white hover:bg-slate-800"
                    >
                      도입 문의
                    </Button>
                  </div>
                </div>

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
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <h2 className="mb-6 text-center text-3xl font-bold tracking-tight text-slate-900">핵심 기능</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature} className="border-gray-200 bg-white ring-0">
                <CardContent className="flex items-center gap-3 py-8 text-sm font-medium tracking-tight text-slate-700">
                  <CheckCircle2 className="size-5 text-emerald-300" />
                  <p>{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <footer className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-normal tracking-tight text-slate-600">
          데이터는 정직하며, 전문 물리치료사가 함께 케어를 정밀하게 실행합니다.
          <Link href="/dashboard" className="ml-3 inline-flex items-center text-slate-900">
            서비스 보기 <ArrowRight className="ml-1 size-4" />
          </Link>
        </footer>
      </div>
    </main>
  );
}
