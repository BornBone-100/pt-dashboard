import Link from "next/link";

type MainNavProps = {
  items: Array<{ href: string; label: string }>;
};

export function MainNav({ items }: MainNavProps) {
  return (
    <nav className="mb-16 flex items-center justify-between">
      <div className="text-2xl font-semibold tracking-tight text-white">Re:PhyT</div>
      <div className="hidden items-center gap-6 text-xs font-medium text-slate-200 md:flex">
        {items.map((item) => (
          <a key={item.href} href={item.href} className="hover:text-white">
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <button className="h-8 rounded-md border border-slate-600 bg-transparent px-4 text-xs text-slate-200 hover:bg-slate-800">
          SIGN IN
        </button>
        <Link
          href="/dashboard"
          className="inline-flex h-8 items-center rounded-md bg-blue-600 px-4 text-xs font-semibold text-white hover:bg-blue-700"
        >
          REGISTER
        </Link>
      </div>
    </nav>
  );
}
