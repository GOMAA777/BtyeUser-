import { Metadata } from "next";
import { UnitDetailsView } from "@/features/units/components/unit-details-view";
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

interface UnitPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: UnitPageProps): Promise<Metadata> {
  const { id } = await params;
  const displayId = id === "[id]" ? "101" : id;
  return {
    title: `الوحدة ${displayId} | ابراج`,
    description: `تفاصيل ومواصفات الوحدة ${displayId} وكود الدخول والجاهزية التشغيلية`,
  };
}

export default function UnitPage() {
  return <UnitDetailsView />;
}
