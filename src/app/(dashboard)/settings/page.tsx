import type { Metadata } from "next";
import { SettingsHubView } from "@/features/settings/components/settings-hub-view";

export const metadata: Metadata = {
  title: "الإعدادات | أبراج",
  description: "إدارة إعدادات المنصة وقواعد التشغيل والتكاملات والأمان.",
};

export default function SettingsPage() {
  return <SettingsHubView />;
}
