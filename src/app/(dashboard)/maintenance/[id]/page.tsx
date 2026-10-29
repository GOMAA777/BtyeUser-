import { Metadata } from "next";
import { MaintenanceDetailsView } from "@/features/maintenance/components/maintenance-details-view";

export function generateStaticParams() {
  return [
    { id: "[id]" },
    { id: "CL-10482" },
    { id: "CL-10481" },
    { id: "CL-10479" },
    { id: "MT-2048" },
    { id: "MT-2047" },
    { id: "MT-2045" },
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
