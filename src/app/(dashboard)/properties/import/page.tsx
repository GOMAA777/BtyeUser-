import type { Metadata } from "next";
import { ImportedPropertiesView } from "@/features/properties/components/imported-properties-view";

export const metadata: Metadata = {
  title: "مراجعة العقارات المستوردة | أبراج",
  description: "مراجعة واعتماد العقارات والوحدات والحجوزات المستوردة من Booking.com",
};

export default function PropertiesImportPage() {
  return <ImportedPropertiesView />;
}
