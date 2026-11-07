import type { Metadata } from "next";
import { IntegrationStatusPendingView } from "@/features/integrations/components/integration-status-pending-view";

export const metadata: Metadata = {
  title: "حالة الطلب — بانتظار الموافقة | أبراج",
  description: "متابعة حالة اعتماد وتفعيل الربط المباشر مع منصات الحجز وقنوات الـ OTA.",
};

export default function IntegrationStatusPendingPage() {
  return <IntegrationStatusPendingView />;
}
