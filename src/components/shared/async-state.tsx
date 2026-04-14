type AsyncStateProps = {
  status: "loading" | "error" | "empty" | "success";
  emptyMessage?: string;
  errorMessage?: string;
  children: React.ReactNode;
};

export function AsyncState({
  status,
  emptyMessage = "데이터가 없습니다.",
  errorMessage = "데이터를 불러오지 못했습니다.",
  children,
}: AsyncStateProps) {
  if (status === "loading") {
    return <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-500">Loading...</div>;
  }

  if (status === "error") {
    return <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">{errorMessage}</div>;
  }

  if (status === "empty") {
    return <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-500">{emptyMessage}</div>;
  }

  return <>{children}</>;
}
