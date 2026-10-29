import { Metadata } from "next";
import { PropertyReadyView } from "@/features/properties/components/property-ready-view";

export const metadata: Metadata = {
  title: "عقارك جاهز | ابراج",
  description: "تم إنشاء العقار وإضافة جميع وحداته بنجاح إلى منصة ابراج",
};

export default function PropertyReadyPage() {
  return <PropertyReadyView />;
}
