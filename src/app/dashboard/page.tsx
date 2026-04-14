"use client";

import { Activity, BrainCircuit, FileChartColumnIncreasing, FileText, Users } from "lucide-react";
import { Area, AreaChart, CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const menuItems = [
  "Overview",
  "Patient Records",
  "Clinical Notes",
  "Analytics",
];

const painData = [
  { week: "1주", pain: 7.7, adherence: 58 },
  { week: "2주", pain: 6.8, adherence: 62 },
  { week: "3주", pain: 5.9, adherence: 69 },
  { week: "4주", pain: 4.9, adherence: 74 },
  { week: "5주", pain: 3.9, adherence: 79 },
  { week: "6주", pain: 3.1, adherence: 83 },
];

const loadData = [
  { therapist: "김 치료사", load: 38, quality: 92 },
  { therapist: "박 치료사", load: 34, quality: 89 },
  { therapist: "이 치료사", load: 29, quality: 95 },
  { therapist: "최 치료사", load: 31, quality: 91 },
];

const painConfig = {
  pain: { label: "통증 점수", color: "oklch(0.72 0.16 18)" },
  adherence: { label: "운동 순응도", color: "oklch(0.75 0.1 210)" },
} satisfies ChartConfig;

const loadConfig = {
  load: { label: "업무 로드", color: "oklch(0.68 0.05 260)" },
  quality: { label: "품질 점수", color: "oklch(0.78 0.13 165)" },
} satisfies ChartConfig;

const pNotes = [
  {
    patient: "김민재",
    note: "외회전 가동범위 개선 속도 우수. 통증 감소 패턴 일치. 다음 주 저항 운동 단계 상승 가능.",
    updatedAt: "오늘 09:20",
  },
  {
    patient: "박서윤",
    note: "통증 점수 정체. 수면 질 저하 관련 코멘트 반복. 생활습관 개입 메시지와 홈운동 강도 조절 권장.",
    updatedAt: "오늘 08:45",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_30%),linear-gradient(180deg,_#09090b_0%,_#111217_45%,_#0b0c10_100%)] text-foreground">
      <div className="mx-auto flex w-full max-w-7xl gap-6 px-4 py-6 lg:px-6">
        <aside className="hidden w-72 shrink-0 rounded-3xl border border-white/10 bg-white/5 p-5 xl:block">
          <p className="mb-6 text-sm font-semibold text-white">Dashboard App</p>
          <nav className="space-y-2">
            {menuItems.map((item, i) => (
              <div
                key={item}
                className={`rounded-xl px-3 py-2 text-sm ${
                  i === 0 ? "bg-white text-black" : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
          <p className="mt-8 text-xs text-zinc-500">
            데이터는 정직하며, 전문 물리치료사가 함께 케어를 정밀하게 실행합니다.
          </p>
        </aside>

        <section className="flex-1 space-y-6">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Card className="border-white/10 bg-white/5 ring-0">
              <CardHeader>
                <CardDescription>전체 환자</CardDescription>
                <CardTitle className="text-3xl text-white">284명</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-2 text-emerald-300">
                <Users className="size-4" /> +12.4%
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/5 ring-0">
              <CardHeader>
                <CardDescription>AI SOAP 연동률</CardDescription>
                <CardTitle className="text-3xl text-white">92%</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-2 text-cyan-300">
                <BrainCircuit className="size-4" /> 실시간 동기화
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/5 ring-0">
              <CardHeader>
                <CardDescription>평균 통증 개선</CardDescription>
                <CardTitle className="text-3xl text-white">-2.9점</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-2 text-emerald-300">
                <Activity className="size-4" /> 6주 기준
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/5 ring-0">
              <CardHeader>
                <CardDescription>기록 품질 점수</CardDescription>
                <CardTitle className="text-3xl text-white">91점</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-2 text-zinc-300">
                <FileChartColumnIncreasing className="size-4" /> P-note 우선
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">
            <Card className="border-white/10 bg-white/5 ring-0">
              <CardHeader className="flex flex-row items-start justify-between">
                <div>
                  <CardTitle className="text-white">환자 통증 변화 그래프</CardTitle>
                  <CardDescription>6주 코호트 추적</CardDescription>
                </div>
                <Badge className="bg-emerald-400/15 text-emerald-200 hover:bg-emerald-400/15">핵심</Badge>
              </CardHeader>
              <CardContent>
                <ChartContainer config={painConfig} className="h-[300px] w-full">
                  <LineChart data={painData} margin={{ left: 8, right: 8 }}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="week" tickLine={false} axisLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
                    <Area
                      type="monotone"
                      dataKey="adherence"
                      stroke="var(--color-adherence)"
                      fill="var(--color-adherence)"
                      fillOpacity={0.12}
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="pain"
                      stroke="var(--color-pain)"
                      strokeWidth={3}
                      dot={{ fill: "var(--color-pain)", strokeWidth: 0, r: 4 }}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 ring-0">
              <CardHeader>
                <CardTitle className="text-white">AI 요약</CardTitle>
                <CardDescription>실시간 SOAP 분석 인사이트</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-zinc-300">
                <p className="rounded-xl border border-cyan-400/20 bg-cyan-400/8 p-4">
                  수술 후 재활 그룹의 4주 차 이후 통증 감소가 가장 빠르며, P-note 작성률이 높은 치료사 그룹에서 추적 정확도가 높습니다.
                </p>
                <p className="rounded-xl border border-white/10 bg-black/20 p-4">
                  만성 통증군은 통증 지표 대비 기능 회복 속도가 느려 중간점검 빈도 상향을 권장합니다.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-white/10 bg-white/5 ring-0">
            <CardHeader>
              <CardTitle className="text-white">Clinical Notes</CardTitle>
              <CardDescription>P-note를 최우선으로 노출 및 정렬</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="pnote" className="w-full">
                <TabsList variant="line" className="mb-4">
                  <TabsTrigger value="pnote">P-note Priority</TabsTrigger>
                  <TabsTrigger value="treatment">Treatment Records</TabsTrigger>
                </TabsList>
                <TabsContent value="pnote" className="space-y-3">
                  {pNotes.map((item) => (
                    <div key={item.patient} className="rounded-xl border border-white/10 bg-black/20 p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <p className="font-medium text-white">{item.patient}</p>
                        <Badge className="bg-white text-black hover:bg-zinc-200">P-note</Badge>
                      </div>
                      <p className="text-zinc-300">{item.note}</p>
                      <p className="mt-2 text-xs text-zinc-500">{item.updatedAt}</p>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="treatment" className="rounded-xl border border-white/10 bg-black/20 p-4 text-zinc-400">
                  일반 치료 기록은 P-note 하단 우선순위로 표시됩니다.
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 ring-0">
            <CardHeader>
              <CardTitle className="text-white">Analytics</CardTitle>
              <CardDescription>치료사별 업무 로드맵 통계</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={loadConfig} className="h-[280px] w-full">
                <AreaChart data={loadData} margin={{ left: 4, right: 8 }}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="therapist" tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
                  <Area type="monotone" dataKey="quality" stroke="var(--color-quality)" fill="var(--color-quality)" fillOpacity={0.35} />
                  <Area type="monotone" dataKey="load" stroke="var(--color-load)" fill="var(--color-load)" fillOpacity={0.2} />
                </AreaChart>
              </ChartContainer>
              <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
                <FileText className="size-4" />
                Data Integrity: Loading/Error/Success 상태 컴포넌트를 API 연동 단계에서 명시적으로 연결하세요.
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
