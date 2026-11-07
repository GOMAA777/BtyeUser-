import type { Metadata } from "next";
import { IntegrationsConnectedView } from "@/features/integrations/components/integrations-connected-view";

export const metadata: Metadata = {
  title: "ربط منصات الحجز | أبراج",
  description:
    "اربط حسابات الحجز العالمية والمحلية لمزامنة الحجوزات والتوافر والأسعار تلقائيًا لحظة بلحظة.",
};

export default function IntegrationsPage() {
  return <IntegrationsConnectedView />;
}
