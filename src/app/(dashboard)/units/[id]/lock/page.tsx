import { Metadata } from "next";
import { UnitLockSetupView } from "@/features/units/components/unit-lock-setup-view";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "101" }, { id: "204" }];
}

interface UnitLockPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: UnitLockPageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `إعداد القفل الذكي - الوحدة ${id} | ابراج`,
    description: `ربط وتخصيص القفل الذكي للوحدة ${id} وأتمتة أكواد الدخول`,
  };
}

export default function UnitIdLockPage() {
  return <UnitLockSetupView />;
}
