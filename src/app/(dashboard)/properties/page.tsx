import type { Metadata } from "next";
import { PropertiesView } from "@/features/properties/components/properties-view";

export const metadata: Metadata = {
  title: "العقارات | أبراج",
  description: "إدارة عقاراتك ومتابعة بياناتها ووحداتها.",
};

export default function PropertiesPage() {
  return <PropertiesView />;
}
