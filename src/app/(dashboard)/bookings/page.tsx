import { BookingsView } from "@/features/bookings/components/bookings-view";

export const metadata = {
  title: "الحجوزات | إدارتي",
  description: "إدارة ومتابعة الحجوزات والرموز الذكية للوحدات",
};

export default function BookingsPage() {
  return <BookingsView />;
}
