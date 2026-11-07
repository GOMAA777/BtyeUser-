import type { Metadata } from "next";
import { SettingsPlatformView } from "@/features/settings/components/settings-platform-view";

export const metadata: Metadata = { title: "إعدادات المنصة | أبراج" };

export default function PlatformSettingsPage() {
  return <SettingsPlatformView />;
}
