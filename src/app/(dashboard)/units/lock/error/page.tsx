import { Metadata } from "next";
import { UnitLockErrorView } from "@/features/units/components/unit-lock-error-view";

export const metadata: Metadata = {
  title: "تعذر ربط القفل | ابراج",
  description: "تشخيص ومعالجة فشل ربط القفل الذكي وإرشادات الموقع الفوري",
};

export default function UnitLockErrorPage() {
  return <UnitLockErrorView />;
}
