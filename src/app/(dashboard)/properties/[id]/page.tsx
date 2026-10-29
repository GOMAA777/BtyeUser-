import { Metadata } from "next";
import { PropertyDetailsView } from "@/features/properties/components/property-details-view";

export function generateStaticParams() {
  return [
    { id: "[id]" },
    { id: "1" },
    { id: "RWQ-NKH-01" },
    { id: "details" },
  ];
}

export const metadata: Metadata = {
  title: "تفاصيل العقار - عمارة النخيل الفاخرة | ابراج",
  description: "عرض كافة تفاصيل العقار، المواصفات المعمارية، الموقع، الوحدات التابعة، والحجوزات القادمة",
};

export default function PropertyPage() {
  return <PropertyDetailsView />;
}

