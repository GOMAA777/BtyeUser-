import { Metadata } from "next";
import { IntegrationStatusRejectedView } from "@/features/integrations/components/integration-status-rejected-view";

export const metadata: Metadata = {
  title: "ربط منصات الحجز — فشل المصادقة | ابراج",
  description:
    "تصحيح فشل مصادقة ربط Booking.com وإعادة إرسال طلب الربط بعد تحديث المعرف الفندقي",
};

export default function IntegrationStatusRejectedPage() {
  return <IntegrationStatusRejectedView />;
}
