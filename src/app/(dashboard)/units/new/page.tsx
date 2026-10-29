import { Metadata } from "next";
import { AddUnitView } from "@/features/units/components/add-unit-view";

export const metadata: Metadata = {
  title: "إضافة وحدة جديدة | ابراج",
  description: "الخطوة 2 من 2 - إضافة مواصفات وتفاصيل الوحدة وإعداد الأقفال الذكية والتسعير",
};

export default function AddUnitPage() {
  return <AddUnitView />;
}

