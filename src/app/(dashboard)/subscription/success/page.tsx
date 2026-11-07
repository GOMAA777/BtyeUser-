import { Suspense } from "react";
import type { Metadata } from "next";
import { SubscriptionSuccessView } from "@/features/subscription/components/subscription-success-view";

export const metadata: Metadata = {
  title: "تم الدفع بنجاح | أبراج",
  description: "تم تفعيل الاشتراك وإضافة رصيد الشقق.",
};

export default function SubscriptionSuccessPage() {
  return (
    <Suspense>
      <SubscriptionSuccessView />
    </Suspense>
  );
}
