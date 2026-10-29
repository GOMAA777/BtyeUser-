import { Metadata } from "next";
import { CleaningDetailsView } from "@/features/maintenance/components/cleaning-details-view";
import { initialTasks } from "@/features/maintenance/data/mock-maintenance";

export const metadata: Metadata = {
  title: "تفاصيل مهمة تنظيف | منصة ابراج",
  description: "متابعة بيانات التنفيذ والتشغيل وسجل العمليات الفعلي والأقفال الذكية",
};

export default function MaintenanceDefaultDetailsPage() {
  const task =
    initialTasks.find((t) => t.id === "CL-10482") || initialTasks[0];
  return <CleaningDetailsView task={task} />;
}
