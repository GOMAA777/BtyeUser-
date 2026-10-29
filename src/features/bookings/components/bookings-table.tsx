"use client";

import { useState } from "react";
import Link from "next/link";
import { MoreHorizontal } from "lucide-react";
import { BookingItem } from "../types/booking";
import { BookingActionsMenu } from "./booking-actions-menu";
import { CancelBookingModal } from "./cancel-booking-modal";

interface BookingsTableProps {
  bookings: BookingItem[];
  totalCount?: number;
  onBookingCancel?: (id: string) => void;
}

export function BookingsTable({
  bookings,
  totalCount = 28,
  onBookingCancel,
}: BookingsTableProps) {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [cancelBookingItem, setCancelBookingItem] = useState<BookingItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const getStatusBadge = (status: BookingItem["status"], label: string) => {
    switch (status) {
      case "current":
        return (
          <span className="inline-flex items-center gap-[6px] w-fit bg-[rgba(62,138,90,0.1)] border border-[rgba(62,138,90,0.2)] px-[11px] py-[4px] rounded-full whitespace-nowrap">
            <span className="size-[6px] rounded-full bg-[#3e8a5a] shrink-0" />
            <span className="font-cairo font-semibold text-[#3e8a5a] text-[11px] leading-[16px]">
              {label}
            </span>
          </span>
        );
      case "upcoming":
        return (
          <span className="inline-flex items-center gap-[6px] w-fit bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] px-[11px] py-[4px] rounded-full whitespace-nowrap">
            <span className="size-[6px] rounded-full bg-[#2563eb] shrink-0" />
            <span className="font-cairo font-semibold text-[#2563eb] text-[11px] leading-[16px]">
              {label}
            </span>
          </span>
        );
      case "completed":
        return (
          <span className="inline-flex items-center gap-[6px] w-fit bg-[#f1f2ed] border border-[#e5e8e2] px-[11px] py-[4px] rounded-full whitespace-nowrap">
            <span className="size-[6px] rounded-full bg-[#73786f] shrink-0" />
            <span className="font-cairo font-semibold text-[#73786f] text-[11px] leading-[16px]">
              {label}
            </span>
          </span>
        );
      case "cancelled":
        return (
          <span className="inline-flex items-center gap-[6px] w-fit bg-[rgba(177,37,21,0.1)] border border-[rgba(177,37,21,0.2)] px-[11px] py-[4px] rounded-full whitespace-nowrap">
            <span className="size-[6px] rounded-full bg-[#b12515] shrink-0" />
            <span className="font-cairo font-semibold text-[#b12515] text-[11px] leading-[16px]">
              {label}
            </span>
          </span>
        );
      default:
        return null;
    }
  };

  const getSourceBadge = (source: BookingItem["source"]) => {
    return (
      <span className="font-cairo font-medium text-[#454840] text-[12px] leading-[16px] bg-[#f6f7f4] px-[8px] py-[2px] rounded-[6px]">
        {source}
      </span>
    );
  };

  return (
    <div
      className="bg-white border border-[#e5e8e2] border-solid rounded-[16px] overflow-visible drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] w-full"
      data-node-id="1:5867"
      data-name="MAIN BOOKINGS DATA TABLE"
      dir="rtl"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-right border-collapse min-w-[900px]">
          <thead>
            <tr
              className="bg-[rgba(246,247,244,0.7)] border-b border-[#e5e8e2]"
              data-node-id="1:5869"
            >
              <th className="py-[14px] px-[20px] font-cairo font-bold text-[#73786f] text-[11px] tracking-[0.55px] uppercase">
                العميل
              </th>
              <th className="py-[14px] px-[20px] font-cairo font-bold text-[#73786f] text-[11px] tracking-[0.55px] uppercase">
                الوحدة
              </th>
              <th className="py-[14px] px-[20px] font-cairo font-bold text-[#73786f] text-[11px] tracking-[0.55px] uppercase">
                العقار
              </th>
              <th className="py-[14px] px-[20px] font-cairo font-bold text-[#73786f] text-[11px] tracking-[0.55px] uppercase">
                تاريخ الدخول
              </th>
              <th className="py-[14px] px-[20px] font-cairo font-bold text-[#73786f] text-[11px] tracking-[0.55px] uppercase">
                تاريخ المغادرة
              </th>
              <th className="py-[14px] px-[20px] font-cairo font-bold text-[#73786f] text-[11px] tracking-[0.55px] uppercase">
                المصدر
              </th>
              <th className="py-[14px] px-[20px] font-cairo font-bold text-[#73786f] text-[11px] tracking-[0.55px] uppercase">
                الحالة
              </th>
              <th className="py-[14px] px-[20px] font-cairo font-bold text-[#73786f] text-[11px] tracking-[0.55px] uppercase text-center w-[80px]">
                الإجراءات
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e5e8e2]">
            {bookings.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-12 text-center text-[#73786f] font-cairo">
                  لا توجد حجوزات تطابق البحث المحدد.
                </td>
              </tr>
            ) : (
              bookings.map((booking) => {
                const isMenuOpen = activeMenuId === booking.id;
                return (
                  <tr
                    key={booking.id}
                    className="hover:bg-[#fafbfa] transition-colors group"
                  >
                    {/* العميل */}
                    <td className="py-[16px] px-[20px]">
                      <div className="flex flex-col items-start gap-[2px]">
                        <Link
                          href={`/bookings/${booking.id}`}
                          className="font-cairo font-bold text-[#181d17] text-[13px] leading-[18px] hover:text-[#4b5940] transition-colors"
                        >
                          {booking.guest.name}
                        </Link>
                        <span className="font-cairo font-normal text-[#73786f] text-[11px] leading-[14px] tracking-[0.3px]">
                          #{booking.reference}
                        </span>
                      </div>
                    </td>

                    {/* الوحدة */}
                    <td className="py-[16px] px-[20px]">
                      <div className="flex flex-col items-start gap-[2px]">
                        <span className="font-cairo font-bold text-[#181d17] text-[13px] leading-[18px]">
                          {booking.unit.name}
                        </span>
                        <span className="font-cairo font-normal text-[#73786f] text-[11px] leading-[14px]">
                          ({booking.unit.type})
                        </span>
                      </div>
                    </td>

                    {/* العقار */}
                    <td className="py-[16px] px-[20px]">
                      <span className="font-cairo font-medium text-[#252a24] text-[12px] leading-[16px]">
                        {booking.property}
                      </span>
                    </td>

                    {/* تاريخ الدخول */}
                    <td className="py-[16px] px-[20px]">
                      <div className="flex flex-col items-start gap-[2px]">
                        <span className="font-cairo font-medium text-[#252a24] text-[12px] leading-[16px]">
                          {booking.checkIn.date}
                        </span>
                        <span className="font-cairo font-normal text-[#73786f] text-[11px] leading-[14px]">
                          {booking.checkIn.time}
                        </span>
                      </div>
                    </td>

                    {/* تاريخ المغادرة */}
                    <td className="py-[16px] px-[20px]">
                      <div className="flex flex-col items-start gap-[2px]">
                        <span className="font-cairo font-medium text-[#252a24] text-[12px] leading-[16px]">
                          {booking.checkOut.date}
                        </span>
                        <span className="font-cairo font-normal text-[#73786f] text-[11px] leading-[14px]">
                          {booking.checkOut.time}
                        </span>
                      </div>
                    </td>

                    {/* المصدر */}
                    <td className="py-[16px] px-[20px]">
                      {getSourceBadge(booking.source)}
                    </td>

                    {/* الحالة */}
                    <td className="py-[16px] px-[20px] whitespace-nowrap">
                      {getStatusBadge(booking.status, booking.statusLabel)}
                    </td>

                    {/* الإجراءات */}
                    <td className="py-[16px] px-[20px] text-center relative">
                      <div className="relative inline-block">
                        <button
                          type="button"
                          onClick={() =>
                            setActiveMenuId(isMenuOpen ? null : booking.id)
                          }
                          className="size-[32px] rounded-[8px] border border-transparent hover:border-[#e5e8e2] hover:bg-[#f6f7f4] flex items-center justify-center transition-all cursor-pointer text-[#73786f] hover:text-[#181d17]"
                          data-node-id="1:5889"
                          aria-label="خيارات الحجز"
                        >
                          <MoreHorizontal className="size-4" />
                        </button>

                        <BookingActionsMenu
                          bookingId={booking.id}
                          isOpen={isMenuOpen}
                          onClose={() => setActiveMenuId(null)}
                          onCancelBooking={() => {
                            setActiveMenuId(null);
                            setCancelBookingItem(booking);
                          }}
                          position="bottom-left"
                        />
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* TABLE FOOTER & PAGINATION */}
      <div
        className="bg-white border-t border-[#e5e8e2] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4"
        data-node-id="1:6145"
        data-name="TABLE FOOTER & PAGINATION"
      >
        <p className="font-cairo font-medium text-[12px] text-[#73786f] leading-[16px]">
          عرض 1 إلى {bookings.length} من أصل {totalCount} حجز
        </p>

        <div
          className="flex items-center gap-[6px]"
          data-node-id="1:6146"
          data-name="Pagination Buttons"
        >
          <button
            type="button"
            className="px-[13px] py-[6px] border border-[#e5e8e2] rounded-[8px] font-cairo font-medium text-[12px] text-[#252a24] hover:bg-[#f6f7f4] transition-colors cursor-pointer"
          >
            التالي
          </button>
          <button
            type="button"
            className="size-[32px] border border-[#e5e8e2] rounded-[8px] font-cairo font-medium text-[12px] text-[#252a24] hover:bg-[#f6f7f4] flex items-center justify-center transition-colors cursor-pointer"
          >
            24
          </button>
          <span className="font-cairo text-[#73786f] text-[12px] px-1">...</span>
          <button
            type="button"
            className="size-[32px] border border-[#e5e8e2] rounded-[8px] font-cairo font-medium text-[12px] text-[#252a24] hover:bg-[#f6f7f4] flex items-center justify-center transition-colors cursor-pointer"
          >
            3
          </button>
          <button
            type="button"
            className="size-[32px] border border-[#e5e8e2] rounded-[8px] font-cairo font-medium text-[12px] text-[#252a24] hover:bg-[#f6f7f4] flex items-center justify-center transition-colors cursor-pointer"
          >
            2
          </button>
          <button
            type="button"
            className="size-[32px] bg-[#4b5940] text-white rounded-[8px] font-cairo font-bold text-[12px] flex items-center justify-center shadow-[0px_1px_2px_rgba(0,0,0,0.1)]"
          >
            1
          </button>
          <button
            type="button"
            disabled
            className="px-[12px] py-[6px] bg-[#f6f7f4] rounded-[8px] font-cairo font-medium text-[12px] text-[#73786f] opacity-50 cursor-not-allowed"
          >
            السابق
          </button>
        </div>
      </div>

      {cancelBookingItem && (
        <CancelBookingModal
          isOpen={!!cancelBookingItem}
          onClose={() => setCancelBookingItem(null)}
          bookingReference={cancelBookingItem.reference}
          guestName={cancelBookingItem.guest.name}
          stayPeriod={`${cancelBookingItem.checkIn.date} - ${cancelBookingItem.checkOut.date}`}
          unitName={`${cancelBookingItem.unit.name} (${cancelBookingItem.unit.type})`}
          onConfirmCancel={() => {
            onBookingCancel?.(cancelBookingItem.id);
            setCancelBookingItem(null);
          }}
        />
      )}
    </div>
  );
}
