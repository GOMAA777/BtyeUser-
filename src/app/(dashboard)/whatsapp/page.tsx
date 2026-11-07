import type { Metadata } from "next";
import { Suspense } from "react";
import { WhatsAppPageClient } from "@/features/whatsapp/components/whatsapp-page-client";

export const metadata: Metadata = {
  title: "واتساب | أبراج",
  description:
    "محادثات وطلبات المستأجرين والنزلاء المرتبطة بالحجوزات والعمليات التشغيلية التلقائية.",
};

export default function WhatsAppPage() {
  return (
    <Suspense fallback={<div className="min-h-[480px] w-full bg-[#f1f5eb]" />}>
      <WhatsAppPageClient />
    </Suspense>
  );
}
