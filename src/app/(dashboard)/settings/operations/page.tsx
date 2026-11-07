import type { Metadata } from "next";
import { SettingsOperationsView } from "@/features/settings/components/settings-operations-view";

export const metadata: Metadata = { title: "إعدادات التشغيل | أبراج" };

export default function OperationsSettingsPage() {
  return <SettingsOperationsView />;
}
