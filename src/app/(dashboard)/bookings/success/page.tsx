import { BookingSuccessView } from "@/features/bookings/components/booking-success-view";

export const metadata = {
  title: "تم إنشاء الحجز بنجاح | إدارتي",
  description: "تم توثيق الحجز في النظام وجدولة مواعيد الدخول وتوليد كود القفل الذكي",
};

export default function BookingSuccessPage() {
  return <BookingSuccessView />;
}
