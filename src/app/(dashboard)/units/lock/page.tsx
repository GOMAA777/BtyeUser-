import { Metadata } from "next";
import { UnitLockSetupView } from "@/features/units/components/unit-lock-setup-view";

export const metadata: Metadata = {
  title: "إعداد القفل الذكي | ابراج",
  description: "ربط وتخصيص القفل الذكي للوحدة وأتمتة أكواد الدخول مع حجوزات النزلاء",
};

export default function UnitLockPage() {
  return <UnitLockSetupView />;
}
