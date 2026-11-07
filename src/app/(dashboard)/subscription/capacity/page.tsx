import type { Metadata } from "next";
import { SubscriptionCapacityView } from "@/features/subscription/components/subscription-capacity-view";

export const metadata: Metadata = {
  title: "شراء سعة شقق إضافية | أبراج",
  description: "أضف شققاً إضافية مع احتساب تناسب زمني.",
};

export default function SubscriptionCapacityPage() {
  return <SubscriptionCapacityView />;
}
