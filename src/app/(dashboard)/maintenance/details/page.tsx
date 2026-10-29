import { Metadata } from "next";
import { MaintenanceDetailsView } from "@/features/maintenance/components/maintenance-details-view";

export const metadata: Metadata = {
  title: "تفاصيل بلاغ الصيانة MT-2048 | أبراج",
  description: "متابعة أعمال الصيانة الميدانية، تشخيص الأعطال، والأثر التشغيلي على الوحدات والحجوزات",
};

export default function MaintenanceDetailsPage() {
  return <MaintenanceDetailsView />;
}
