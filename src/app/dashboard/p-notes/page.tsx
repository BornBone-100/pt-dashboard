import { AsyncState } from "@/components/shared/async-state";
import { getPrioritySortedNotes } from "@/lib/view-models";

export default function PNotesPage() {
  const notes = getPrioritySortedNotes();
  const status = notes.length ? ("success" as const) : ("empty" as const);

  return (
    <section>
      <h1 className="mb-2 text-2xl font-bold">P-notes</h1>
      <p className="mb-4 text-sm text-slate-500">
        P-note가 항상 상단에 표시되도록 기본 정렬이 적용됩니다.
      </p>
      <AsyncState status={status} emptyMessage="표시할 노트가 없습니다.">
        <div className="space-y-3">
          {notes.map((note) => (
            <article key={note.id} className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="font-semibold">{note.patientName}</p>
                <span
                  className={`rounded-full px-2 py-1 text-xs font-semibold ${
                    note.type === "p-note"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {note.type.toUpperCase()}
                </span>
              </div>
              <p className="text-sm text-slate-700">{note.summary}</p>
              <p className="mt-2 text-xs text-slate-500">{note.updatedAt}</p>
            </article>
          ))}
        </div>
      </AsyncState>
    </section>
  );
}
