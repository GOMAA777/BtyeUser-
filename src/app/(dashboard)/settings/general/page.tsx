import type { Metadata } from "next";
import { SettingsGeneralView } from "@/features/settings/components/settings-general-view";

export const metadata: Metadata = { title: "الإعدادات العامة | أبراج" };

export default function GeneralSettingsPage() {
  return <SettingsGeneralView />;
}
