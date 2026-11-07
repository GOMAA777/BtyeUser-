import type { Metadata } from "next";
import { SettingsBookingsView } from "@/features/settings/components/settings-bookings-view";

export const metadata: Metadata = { title: "إعدادات الحجوزات | أبراج" };

export default function BookingSettingsPage() {
  return <SettingsBookingsView />;
}
