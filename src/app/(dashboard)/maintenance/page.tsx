import { Metadata } from "next";
import { MaintenanceView } from "@/features/maintenance/components/maintenance-view";

export const metadata: Metadata = {
  title: "الصيانة والتنظيف | أبراج",
  description: "متابعة كل عمليات التنظيف والصيانة وإدارة البلاغات على مستوى المنصة.",
};

export default function MaintenancePage() {
  return <MaintenanceView />;
}
