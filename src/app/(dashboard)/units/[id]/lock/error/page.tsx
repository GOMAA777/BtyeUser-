import { Metadata } from "next";
import { UnitLockErrorView } from "@/features/units/components/unit-lock-error-view";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "101" }, { id: "204" }];
}

interface UnitLockErrorPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: UnitLockErrorPageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `تعذر ربط القفل - الوحدة ${id} | ابراج`,
    description: `تشخيص فشل ربط القفل للوحدة ${id} وإرشادات الاستعادة`,
  };
}

export default function UnitIdLockErrorPage() {
  return <UnitLockErrorView />;
}
