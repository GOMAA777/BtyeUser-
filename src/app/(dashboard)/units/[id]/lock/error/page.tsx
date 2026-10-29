import { Metadata } from "next";
import { UnitLockErrorView } from "@/features/units/components/unit-lock-error-view";
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

interface UnitLockErrorPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: UnitLockErrorPageProps): Promise<Metadata> {
  const { id } = await params;
  const displayId = id === "[id]" ? "101" : id;
  return {
    title: `تعذر ربط القفل - الوحدة ${displayId} | ابراج`,
    description: `تشخيص فشل ربط القفل للوحدة ${displayId} وإرشادات الاستعادة`,
  };
}

export default function UnitIdLockErrorPage() {
  return <UnitLockErrorView />;
}
