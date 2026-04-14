import { AsyncState } from "@/components/shared/async-state";

const patients = [
  { name: "김민재", diagnosis: "회전근개 봉합술 후 재활", painChange: "7.1 -> 3.9" },
  { name: "박서윤", diagnosis: "만성 요통 프로그램", painChange: "6.0 -> 4.7" },
];

export default function PatientsPage() {
  const status = "success" as const;

  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">Patients</h1>
      <AsyncState status={status}>
        <div className="space-y-3">
          {patients.map((patient) => (
            <article key={patient.name} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold">{patient.name}</p>
              <p className="text-sm text-slate-600">{patient.diagnosis}</p>
              <p className="mt-1 text-sm text-slate-500">통증 변화: {patient.painChange}</p>
            </article>
          ))}
        </div>
      </AsyncState>
    </section>
  );
}
