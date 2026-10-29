import { Metadata } from "next";
import { CreateMaintenanceView } from "@/features/maintenance/components/create-maintenance-view";

export const metadata: Metadata = {
  title: "إنشاء بلاغ صيانة جديد | أبراج",
  description: "تسجيل عطل تشغيلي أو بلاغ صيانة ميداني لربطه بالأصل العقاري وجدولته فورياً وفق بروتوكولات الحوكمة",
};

export default function NewMaintenancePage() {
  return <CreateMaintenanceView />;
}
