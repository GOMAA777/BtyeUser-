"use client";

import { useState, useMemo } from "react";
import { initialBookings } from "../data/mock-bookings";
import { BookingItem } from "../types/booking";
import { BookingsHeroBar } from "./bookings-hero-bar";
import { BookingsFilterBar } from "./bookings-filter-bar";
import { BookingsTable } from "./bookings-table";
import { showToast } from "@/lib/toast";

export function BookingsView() {
  const [bookings, setBookings] = useState<BookingItem[]>(initialBookings);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const counts = useMemo(() => {
    return {
      all: bookings.length,
      current: bookings.filter((b) => b.status === "current").length,
      upcoming: bookings.filter((b) => b.status === "upcoming").length,
      completed: bookings.filter((b) => b.status === "completed").length,
      cancelled: bookings.filter((b) => b.status === "cancelled").length,
    };
  }, [bookings]);

  const filteredBookings = useMemo(() => {
    return bookings.filter((item) => {
      // Status filter
      if (selectedStatus !== "all" && item.status !== selectedStatus) {
        return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.trim().toLowerCase();
        const matchesGuest = item.guest.name.toLowerCase().includes(q);
        const matchesRef = item.reference.toLowerCase().includes(q);
        const matchesUnit = item.unit.name.toLowerCase().includes(q);
        const matchesProp = item.property.toLowerCase().includes(q);
        if (!matchesGuest && !matchesRef && !matchesUnit && !matchesProp) {
          return false;
        }
      }

      return true;
    });
  }, [bookings, selectedStatus, searchQuery]);

  const handleBookingCancel = (id: string) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === id
          ? {
              ...b,
              status: "cancelled",
              statusLabel: "ملغى",
              accessCode: {
                ...b.accessCode,
                status: "expired",
                statusLabel: "تم إلغاء الكود",
              },
            }
          : b
      )
    );
    showToast.info("إلغاء الحجز", "تم إلغاء الحجز بنجاح");
  };

  return (
    <div
      className="bg-[#f1f5eb] min-h-screen p-[24px] lg:p-[32px] flex flex-col gap-[20px] w-full"
      dir="rtl"
    >
      {/* 1. TOP HERO GREETING BAR */}
      <BookingsHeroBar
        activeCount={counts.current + counts.upcoming}
        totalCount={counts.all}
      />

      {/* 2. FILTER & SEARCH TOOLBAR */}
      <BookingsFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        counts={counts}
      />

      {/* 3. BOOKINGS DATA TABLE */}
      <BookingsTable
        bookings={filteredBookings}
        totalCount={28}
        onBookingCancel={handleBookingCancel}
      />
    </div>
  );
}
