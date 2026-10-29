import { Metadata } from "next";
import { PropertyDetailsView } from "@/features/properties/components/property-details-view";

export const metadata: Metadata = {
  title: "تفاصيل العقار - عمارة النخيل الفاخرة | ابراج",
  description: "عرض كافة تفاصيل العقار، المواصفات المعمارية، الموقع، الوحدات التابعة، والحجوزات القادمة",
};

export default function PropertyDetailsPage() {
  return <PropertyDetailsView />;
}

