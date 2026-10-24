import type { Metadata } from "next";
import { DashboardContent } from "@/features/dashboard/components/dashboard-content";

export const metadata: Metadata = {
  title: "الرئيسية | أبراج لإدارة وتشغيل العقارات",
  description: "ملخص مؤشرات التشغيل والإيرادات اليومية لأصولك العقارية",
};

export default function DashboardPage() {
  return <DashboardContent />;
}
