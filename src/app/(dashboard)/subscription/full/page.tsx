import type { Metadata } from "next";
import { SubscriptionActiveView } from "@/features/subscription/components/subscription-active-view";

export const metadata: Metadata = {
  title: "رصيد الشقق ممتلئ | أبراج",
  description: "تم استهلاك كامل رصيد الشقق في الاشتراك.",
};

export default function SubscriptionFullPage() {
  return <SubscriptionActiveView full />;
}
