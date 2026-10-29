import { Metadata } from "next";
import { MaintenanceView } from "@/features/maintenance/components/maintenance-view";

export const metadata: Metadata = {
  title: "الصيانة والتنظيف | منصة ابراج",
  description: "متابعة كل عمليات التنظيف والصيانة على مستوى المنصة وحوكمة الأقفال الذكية",
};

export default function MaintenancePage() {
  return <MaintenanceView />;
}
