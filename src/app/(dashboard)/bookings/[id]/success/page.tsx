import { BookingSuccessView } from "@/features/bookings/components/booking-success-view";
import { initialBookings } from "@/features/bookings/data/mock-bookings";

export function generateStaticParams() {
  const ids = new Set(["[id]", "details", ...initialBookings.map((b) => b.id)]);
  return Array.from(ids).map((id) => ({ id }));
}

interface BookingSuccessPageProps {
  params: Promise<{ id: string }>;
}

export default async function BookingSuccessWithIdPage({
  params,
}: BookingSuccessPageProps) {
  const { id } = await params;
  const booking = initialBookings.find((b) => b.id === id) || initialBookings[1] || initialBookings[0];

  return (
    <BookingSuccessView
      reference={booking.reference}
      guestName={booking.guest.name}
      unitName={booking.unit.name}
      unitType={`(${booking.unit.type})`}
      propertyName={booking.property}
      checkIn={`${booking.checkIn.date} — ${booking.checkIn.time}`}
      checkOut={`${booking.checkOut.date} — ${booking.checkOut.time}`}
      nights={booking.nights}
      accessCode={booking.accessCode.code}
    />
  );
}
