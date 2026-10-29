import { Metadata } from "next";
import { UnitReadyView } from "@/features/units/components/unit-ready-view";

export const metadata: Metadata = {
  title: "تمت إضافة الوحدة | ابراج",
  description: "تمت إضافة الوحدة بنجاح وجاهزة للتأجير الفوري والتشغيل الميداني",
};

export default function UnitReadyPage() {
  return <UnitReadyView />;
}
