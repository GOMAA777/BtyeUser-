import type { Metadata } from "next";
import { SubscriptionActiveView } from "@/features/subscription/components/subscription-active-view";

export const metadata: Metadata = {
  title: "اشتراكي النشط | أبراج",
  description: "إدارة الاشتراك النشط ورصيد الشقق.",
};

export default function SubscriptionActivePage() {
  return <SubscriptionActiveView />;
}
