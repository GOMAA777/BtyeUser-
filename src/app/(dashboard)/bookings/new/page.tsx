import { AddBookingView } from "@/features/bookings/components/add-booking-view";

export const metadata = {
  title: "إضافة حجز جديد | إدارتي",
  description: "أدخل بيانات الحجز والإقامة لتسجيل التسكين وإصدار الرمز الذكي",
};

export default function NewBookingPage() {
  return <AddBookingView />;
}
