import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  "기존 AI SOAP 앱과 양방향 연동",
  "실시간 데이터 동기화 및 환자 경과 반영",
  "치료사 업무 흐름 중심의 인사이트 대시보드",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_35%),linear-gradient(180deg,_#09090b_0%,_#111217_45%,_#0b0c10_100%)] text-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 lg:px-6">
        <header className="mb-16 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-white text-black">
              <Building2 className="size-4" />
            </div>
            <p className="font-semibold text-white">PT Pulse B2B</p>
          </div>
          <Link href="/dashboard">
            <Button variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
              대시보드 미리보기
            </Button>
          </Link>
        </header>

        <section className="mb-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <Badge className="bg-cyan-400/15 text-cyan-200 hover:bg-cyan-400/15">B2B 랜딩 페이지</Badge>
            <h1 className="text-3xl font-semibold leading-tight text-white lg:text-5xl">
              데이터는 정직하며, 전문 물리치료사가 함께 케어를 정밀하게 실행합니다.
            </h1>
            <p className="max-w-xl text-zinc-400">
              기존 AI SOAP 앱 데이터를 기반으로 클리닉의 운영 효율과 치료 품질을 동시에 향상하는 프리미엄 B2B 대시보드입니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-white text-black hover:bg-zinc-200">무료 데모 신청하기</Button>
              <Button variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
                도입 문의
              </Button>
            </div>
          </div>

          <Card className="border-white/10 bg-white/5 ring-0">
            <CardHeader>
              <CardTitle className="text-white">Trust & Authority</CardTitle>
              <CardDescription>7년 차 임상 전문가 설계</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-zinc-300">
              <div className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 size-4 text-emerald-300" />
                치료 프로토콜과 지표 해석이 실제 임상 워크플로우를 기준으로 설계되었습니다.
              </div>
              <div className="flex items-start gap-2">
                <Sparkles className="mt-0.5 size-4 text-cyan-300" />
                AI SOAP 연동으로 치료 기록의 누락을 줄이고, 경과 추적의 정확도를 높입니다.
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-14">
          <h2 className="mb-4 text-2xl font-semibold text-white">핵심 기능</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature} className="border-white/10 bg-white/5 ring-0">
                <CardContent className="flex items-center gap-3 py-6 text-zinc-300">
                  <CheckCircle2 className="size-5 text-emerald-300" />
                  <p>{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <footer className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-zinc-300">
          데이터는 정직하며, 전문 물리치료사가 함께 케어를 정밀하게 실행합니다.
          <Link href="/dashboard" className="ml-3 inline-flex items-center text-white">
            서비스 보기 <ArrowRight className="ml-1 size-4" />
          </Link>
        </footer>
      </div>
    </main>
  );
}
