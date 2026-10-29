import type { Metadata } from "next";
import { AddPropertyView } from "@/features/properties/components/add-property-view";

export const metadata: Metadata = {
  title: "إضافة عقار | أبراج",
  description: "أدخل بيانات العقار الأساسية والموقع الجغرافي للبدء في إدارة الوحدات والأقفال الذكية.",
};

export default function AddPropertyPage() {
  return <AddPropertyView />;
}

