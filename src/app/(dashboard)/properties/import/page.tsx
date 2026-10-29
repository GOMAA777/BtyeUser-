import type { Metadata } from "next";
import { Suspense } from "react";
import { PropertiesImportClient } from "@/features/properties/components/properties-import-client";

export const metadata: Metadata = {
  title: "استيراد العقارات | أبراج",
  description: "اختر منصة الحجز التي تريد الاستيراد منها لمزامنة الوحدات وبيانات الإشغال تلقائياً.",
};

export default function PropertiesImportPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f1f5eb]" />}>
      <PropertiesImportClient />
    </Suspense>
  );
}
