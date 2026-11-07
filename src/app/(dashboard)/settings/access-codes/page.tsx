import type { Metadata } from "next";
import { SettingsAccessView } from "@/features/settings/components/settings-access-view";

export const metadata: Metadata = { title: "إعدادات أكواد الدخول | أبراج" };

export default function AccessSettingsPage() {
  return <SettingsAccessView />;
}
