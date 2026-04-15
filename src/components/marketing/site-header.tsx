import Link from "next/link";

const navLinks = [
  { href: "#features", label: "핵심 기능" },
  { href: "#benefits", label: "도입 효과" },
  { href: "#how-it-works", label: "이용 방법" },
  { href: "#pricing", label: "요금 안내" },
  { href: "#contact", label: "도입 문의" },
];

export function SiteHeader() {
  return (
    <header className="w-full border-b border-gray-800 bg-[#0B1120] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold tracking-tighter">Re:PhyT</div>
        <nav className="hidden gap-8 text-sm font-medium text-gray-300 md:flex">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-sm">
          <button type="button" className="transition hover:text-gray-300">
            로그인
          </button>
          <Link
            href="/dashboard"
            className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            무료 시작하기
          </Link>
        </div>
      </div>
    </header>
  );
}
