import { BookingDetailsView } from "@/features/bookings/components/booking-details-view";
import { initialBookings } from "@/features/bookings/data/mock-bookings";

export const metadata = {
  title: "تفاصيل الحجز | إدارتي",
  description: "عرض تفاصيل الحجز والإقامة وبيانات الضيف والقفل الذكي",
};

export default function BookingDetailsAliasPage() {
  const defaultBooking = initialBookings[1] || initialBookings[0];
  return <BookingDetailsView booking={defaultBooking} />;
}
