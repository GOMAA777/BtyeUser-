import { Metadata } from "next";
import { MaintenanceDetailsView } from "@/features/maintenance/components/maintenance-details-view";

export function generateStaticParams() {
  return [
    { id: "MT-2048" },
    { id: "MT-2049" },
    { id: "details" },
  ];
}

interface MaintenancePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: MaintenancePageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `بلاغ صيانة ${id} | أبراج`,
    description: `تفاصيل بلاغ الصيانة ${id} وحالة التنفيذ الميداني`,
  };
}

export default function MaintenanceIdPage() {
  return <MaintenanceDetailsView />;
}
