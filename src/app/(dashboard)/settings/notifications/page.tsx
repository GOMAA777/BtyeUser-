import type { Metadata } from "next";
import { SettingsNotificationsView } from "@/features/settings/components/settings-notifications-view";

export const metadata: Metadata = { title: "إعدادات الإشعارات | أبراج" };

export default function NotificationSettingsPage() {
  return <SettingsNotificationsView />;
}
