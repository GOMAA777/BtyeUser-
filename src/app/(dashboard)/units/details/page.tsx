import { Metadata } from "next";
import { UnitDetailsView } from "@/features/units/components/unit-details-view";

export const metadata: Metadata = {
  title: "عرض الوحدة 101 | ابراج",
  description: "تفاصيل الوحدة 101، حالة التشغيل والجاهزية، كود الدخول الذكي وجدول الحجوزات",
};

export default function UnitDetailsPage() {
  return <UnitDetailsView />;
}
