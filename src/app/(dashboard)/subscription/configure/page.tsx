import { Suspense } from "react";
import type { Metadata } from "next";
import { SubscriptionConfigureView } from "@/features/subscription/components/subscription-configure-view";

export const metadata: Metadata = {
  title: "حدد عدد الشقق | أبراج",
  description: "احسب اشتراك الشقق الشهري أو السنوي.",
};

export default function SubscriptionConfigurePage() {
  return (
    <Suspense>
      <SubscriptionConfigureView />
    </Suspense>
  );
}
