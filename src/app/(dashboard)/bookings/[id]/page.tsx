import { Metadata } from "next";
import { BookingDetailsView } from "@/features/bookings/components/booking-details-view";
import { initialBookings } from "@/features/bookings/data/mock-bookings";

export function generateStaticParams() {
  return initialBookings.map((b) => ({ id: b.id }));
}

interface BookingPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: BookingPageProps): Promise<Metadata> {
  const { id } = await params;
  const booking = initialBookings.find((b) => b.id === id);
  return {
    title: booking ? `حجز ${booking.guest.name} (${booking.reference}) | إدارتي` : `تفاصيل الحجز ${id} | إدارتي`,
    description: "تفاصيل ومواصفات الحجز والرمز الذكي للوحدة",
  };
}

export default async function BookingDetailPage({ params }: BookingPageProps) {
  const { id } = await params;
  const booking = initialBookings.find((b) => b.id === id) || initialBookings[1] || initialBookings[0];
  return <BookingDetailsView booking={booking} />;
}
