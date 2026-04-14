import { MessageCircle } from "lucide-react";
import Link from "next/link";

type HeroCtaGroupProps = {
  kakaoConsultUrl: string;
};

export function HeroCtaGroup({ kakaoConsultUrl }: HeroCtaGroupProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/"
        className="inline-flex h-11 items-center rounded-md bg-emerald-500 px-7 font-semibold text-slate-950 hover:bg-emerald-400"
      >
        웹사이트 방문
      </Link>
      <a
        href={kakaoConsultUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-11 items-center rounded-md border border-slate-500 bg-slate-900/50 px-7 font-semibold text-white hover:bg-slate-800"
      >
        <MessageCircle className="mr-2 size-4" />
        카카오톡 상담
      </a>
    </div>
  );
}
