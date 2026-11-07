import { Suspense } from "react";
import type { Metadata } from "next";
import { SubscriptionCheckoutView } from "@/features/subscription/components/subscription-checkout-view";

export const metadata: Metadata = {
  title: "إتمام الدفع | أبراج",
  description: "إتمام دفع اشتراك سعة الشقق.",
};

export default function SubscriptionCheckoutPage() {
  return (
    <Suspense>
      <SubscriptionCheckoutView />
    </Suspense>
  );
}
