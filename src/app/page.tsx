import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

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
    <main className="min-h-screen tracking-tight bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_32%),linear-gradient(180deg,_#09090b_0%,_#111217_45%,_#0b0c10_100%)] text-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 lg:px-6">
        <header className="mb-10 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-white text-black">
              <Building2 className="size-4" />
            </div>
            <p className="font-semibold tracking-tight text-white">PT Pulse B2B</p>
          </div>
          <Link href="/dashboard">
            <Button variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
              대시보드 미리보기
            </Button>
          </Link>
        </header>

        <section className="py-24 text-center">
          <div className="mx-auto max-w-4xl space-y-7">
            <Badge className="bg-cyan-400/15 text-cyan-200 hover:bg-cyan-400/15">B2B SaaS Physical Care Platform</Badge>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white lg:text-6xl">
              데이터는 정직하며, 전문 물리치료사가 함께 케어를 정밀하게 실행합니다.
            </h1>
            <p className="mx-auto max-w-2xl text-base font-normal leading-7 tracking-tight text-zinc-400 lg:text-lg">
              기존 AI SOAP 앱 데이터를 기반으로 클리닉의 운영 효율과 치료 품질을 동시에 향상하는 프리미엄 B2B 대시보드입니다.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button className="h-10 bg-cyan-300 px-6 font-semibold text-black shadow-[0_12px_40px_-15px_rgba(34,211,238,0.9)] hover:bg-cyan-200">
                무료 데모 신청하기
              </Button>
              <Button variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
                도입 문의
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-6 backdrop-blur">
            <div className="mb-4 flex items-center gap-2">
              <ShieldCheck className="size-5 text-emerald-300" />
              <p className="text-lg font-bold tracking-tight text-white">Trust & Authority</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm font-normal leading-6 tracking-tight text-zinc-300">
                7년 차 임상 전문가의 실제 치료 프로토콜을 기준으로 지표 구조와 업무 흐름이 설계되었습니다.
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm font-normal leading-6 tracking-tight text-zinc-300">
                <span className="inline-flex items-center gap-1">
                  <Sparkles className="size-4 text-cyan-300" />
                  AI SOAP 연동
                </span>
                을 통해 기록 누락을 줄이고, 환자 경과를 일관된 기준으로 추적합니다.
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <h2 className="mb-6 text-center text-3xl font-bold tracking-tight text-white">핵심 기능</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature} className="border-white/10 bg-white/5 ring-0">
                <CardContent className="flex items-center gap-3 py-8 text-sm font-medium tracking-tight text-zinc-300">
                  <CheckCircle2 className="size-5 text-emerald-300" />
                  <p>{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <footer className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-normal tracking-tight text-zinc-300">
          데이터는 정직하며, 전문 물리치료사가 함께 케어를 정밀하게 실행합니다.
          <Link href="/dashboard" className="ml-3 inline-flex items-center text-white">
            서비스 보기 <ArrowRight className="ml-1 size-4" />
          </Link>
        </footer>
      </div>
    </main>
  );
}
