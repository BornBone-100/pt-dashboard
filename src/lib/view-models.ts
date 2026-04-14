export type NoteType = "p-note" | "treatment";

export type ClinicalNote = {
  id: string;
  patientName: string;
  type: NoteType;
  summary: string;
  updatedAt: string;
};

export type DashboardStatus = "loading" | "error" | "empty" | "success";

export const clinicalNotes: ClinicalNote[] = [
  {
    id: "n1",
    patientName: "김민재",
    type: "p-note",
    summary: "외회전 ROM 개선 속도가 빠르고 통증 감소 패턴이 안정적입니다.",
    updatedAt: "2026-04-14",
  },
  {
    id: "n2",
    patientName: "박서윤",
    type: "treatment",
    summary: "중간 강도 운동 단계 유지, 수면 질 관련 코칭 필요",
    updatedAt: "2026-04-14",
  },
  {
    id: "n3",
    patientName: "이도현",
    type: "p-note",
    summary: "스포츠 복귀 단계 진입, 점프 착지 평가 추가 권장",
    updatedAt: "2026-04-13",
  },
];

export function getPrioritySortedNotes() {
  return [...clinicalNotes].sort((a, b) => {
    if (a.type === b.type) return 0;
    return a.type === "p-note" ? -1 : 1;
  });
}
