import type { Metadata } from "next";
import { IntegrationStatusDisconnectedView } from "@/features/integrations/components/integration-status-disconnected-view";

export const metadata: Metadata = {
  title: "حالة الطلب — غير متصل | أبراج",
  description:
    "استعادة الربط المباشر مع منصات الحجز بعد توقف المصادقة وإعادة توثيق الشريك.",
};

export default function IntegrationStatusDisconnectedPage() {
  return <IntegrationStatusDisconnectedView />;
}
