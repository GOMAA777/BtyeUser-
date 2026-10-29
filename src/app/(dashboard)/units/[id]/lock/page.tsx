import { Metadata } from "next";
import { UnitLockSetupView } from "@/features/units/components/unit-lock-setup-view";
import { initialUnits } from "@/features/units/data/units-data";

export function generateStaticParams() {
  const ids = new Set([
    "[id]",
    "details",
    "1",
    "2",
    "3",
    "4",
    "101",
    "102",
    "103",
    "104",
    "108",
    "201",
    "204",
    "210",
    "305",
    "402",
    ...initialUnits.map((u) => u.id),
  ]);

  return Array.from(ids).map((id) => ({ id }));
}

interface UnitLockPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: UnitLockPageProps): Promise<Metadata> {
  const { id } = await params;
  const displayId = id === "[id]" ? "101" : id;
  return {
    title: `إعداد القفل الذكي - الوحدة ${displayId} | ابراج`,
    description: `ربط وتخصيص القفل الذكي للوحدة ${displayId} وأتمتة أكواد الدخول`,
  };
}

export default function UnitIdLockPage() {
  return <UnitLockSetupView />;
}
