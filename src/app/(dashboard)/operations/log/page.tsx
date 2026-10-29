import { Metadata } from "next";
import { OperationsLogView } from "@/features/maintenance/components/operations-log-view";

export const metadata: Metadata = {
  title: "سجل التشغيل — الوحدة 204 | أبراج",
  description: "التوثيق الزمني التشغيلي المباشر لمهام النظافة والتعقيم وبلاغات الصيانة والأعطال الفنية للوحدة العقارية",
};

export default function OperationsLogPage() {
  return <OperationsLogView />;
}

