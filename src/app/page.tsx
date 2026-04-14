import Link from "next/link";
import { ArrowRight, Building2, Check, CheckCircle2, MessageCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  "기존 AI SOAP 앱과 양방향 연동",
  "실시간 데이터 동기화 및 환자 경과 반영",
  "치료사 업무 흐름 중심의 인사이트 대시보드",
];

const kakaoConsultUrl =
  process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL ?? "https://pf.kakao.com/";

export default function Home() {
  return (
    <main className="min-h-screen break-keep bg-white font-sans tracking-tight text-slate-900">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 lg:px-6">
        <header className="mb-10 flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-slate-900 text-white">
              <Building2 className="size-4" />
            </div>
            <p className="font-semibold tracking-tight text-slate-900">PT Pulse B2B</p>
          </div>
          <Link href="/dashboard">
            <Button variant="outline" className="border-gray-300 bg-white text-slate-900 hover:bg-gray-100">
              대시보드 미리보기
            </Button>
          </Link>
        </header>

        <section className="flex flex-col items-center justify-center px-4 pt-32 pb-24 text-center">
          <div className="mx-auto max-w-5xl">
            <Badge className="mb-8 rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-sm font-medium text-gray-600 shadow-sm hover:bg-gray-100">
              B2B SaaS Physical Care Platform
            </Badge>
            <h1 className="mx-auto mb-6 max-w-4xl break-keep text-4xl font-extrabold leading-[1.3] tracking-tight text-slate-900 md:text-6xl">
              데이터는 정직하며,
              <br className="hidden md:block" /> 전문 물리치료사가 함께 케어를 정밀하게 실행합니다.
            </h1>
            <p className="mx-auto mb-12 max-w-2xl break-keep text-lg font-normal leading-relaxed tracking-tight text-slate-500 md:text-xl">
              기존 AI SOAP 웹 데이터를 기반으로 클리닉의 운영 효율과
              <br className="hidden md:block" /> 치료 품질을 동시에 향상시키는 프리미엄 B2B 대시보드입니다.
            </p>
            <div className="mb-24 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:justify-center">
              <Button className="h-12 bg-blue-600 px-8 font-semibold text-white shadow-md hover:bg-blue-700">
                어플 신청하기
              </Button>
              <a href={kakaoConsultUrl} target="_blank" rel="noopener noreferrer">
                <Button className="h-12 bg-[#FEE500] px-8 font-semibold text-black shadow-md hover:bg-[#FDD800]">
                  <MessageCircle className="size-4" />
                  카카오톡 상담
                </Button>
              </a>
            </div>
            <div className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-6 py-8 shadow-sm sm:px-10">
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="flex items-center gap-3">
                  <Check className="size-6 text-blue-600" />
                  <span className="text-sm font-medium tracking-tight text-slate-700 md:text-base">
                    7년 차 임상 전문가 설계
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="size-6 text-blue-600" />
                  <span className="text-sm font-medium tracking-tight text-slate-700 md:text-base">
                    치료 프로토콜 최적화
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="size-6 text-blue-600" />
                  <span className="text-sm font-medium tracking-tight text-slate-700 md:text-base">
                    AI SOAP 연동
                  </span>
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
