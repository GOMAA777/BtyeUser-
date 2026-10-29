import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CleaningDetailsView } from "@/features/maintenance/components/cleaning-details-view";
import { initialTasks } from "@/features/maintenance/data/mock-maintenance";

export function generateStaticParams() {
  return initialTasks.map((t) => ({ id: t.id }));
}

interface MaintenancePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: MaintenancePageProps): Promise<Metadata> {
  const { id } = await params;
  const task = initialTasks.find((t) => t.id === id);
  return {
    title: task
      ? `مهمة ${task.typeLabel} ${task.reference} | منصة ابراج`
      : `تفاصيل العملية ${id} | منصة ابراج`,
    description: "متابعة بيانات التنفيذ والتشغيل وسجل العمليات الفعلي والأقفال الذكية",
  };
}

export default async function MaintenanceDetailPage({
  params,
}: MaintenancePageProps) {
  const { id } = await params;
  const task =
    initialTasks.find((t) => t.id === id) ||
    initialTasks.find((t) => t.id === "CL-10482") ||
    initialTasks[0];

  if (!task) {
    notFound();
  }

  return <CleaningDetailsView task={task} />;
}
