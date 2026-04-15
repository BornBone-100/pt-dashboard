import Link from "next/link";

type MainNavProps = {
  items: Array<{ href: string; label: string }>;
};

export function MainNav({ items }: MainNavProps) {
  return (
    <nav className="mb-16 flex items-center justify-between">
      <div className="text-2xl font-semibold tracking-tight text-white">Re:PhyT</div>
      <div className="hidden max-w-[min(100%,22rem)] flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[10px] font-medium text-slate-200 sm:max-w-none md:flex md:max-w-[36rem] md:text-[11px] lg:max-w-none lg:gap-x-4 lg:text-xs">
        {items.map((item) => (
          <a key={item.href} href={item.href} className="whitespace-nowrap hover:text-white">
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="h-8 rounded-md border border-slate-600 bg-transparent px-4 text-xs font-medium text-slate-200 hover:bg-slate-800"
        >
          로그인
        </button>
        <Link
          href="/dashboard"
          className="inline-flex h-8 items-center rounded-md bg-blue-600 px-4 text-xs font-semibold text-white shadow-sm hover:bg-blue-700"
        >
          무료 시작하기
        </Link>
      </div>
    </nav>
  );
}
