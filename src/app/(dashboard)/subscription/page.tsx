import type { Metadata } from "next";
import { SubscriptionLandingView } from "@/features/subscription/components/subscription-landing-view";

export const metadata: Metadata = {
  title: "اشتراكي | أبراج",
  description: "اشترك بعدد الشقق المناسب وزد رصيدك وقت الحاجة.",
};

export default function SubscriptionPage() {
  return <SubscriptionLandingView />;
}
