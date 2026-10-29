import { Metadata } from "next";
import { UnitDetailsView } from "@/features/units/components/unit-details-view";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "101" }, { id: "204" }];
}

interface UnitPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: UnitPageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `الوحدة ${id} | ابراج`,
    description: `تفاصيل ومواصفات الوحدة ${id} وكود الدخول والجاهزية التشغيلية`,
  };
}

export default function UnitPage() {
  return <UnitDetailsView />;
}
