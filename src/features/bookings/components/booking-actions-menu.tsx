"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface BookingActionsMenuProps {
  bookingId: string;
  isOpen: boolean;
  onClose: () => void;
  onViewDetails?: () => void;
  onEditBooking?: () => void;
  onManageLockCode?: () => void;
  onCancelBooking?: () => void;
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
}

export function BookingActionsMenu({
  bookingId,
  isOpen,
  onClose,
  onViewDetails,
  onEditBooking,
  onManageLockCode,
  onCancelBooking,
  position = "bottom-left",
}: BookingActionsMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className={`absolute z-50 bg-white border border-[#e5e8e2] border-solid flex flex-col gap-[4px] p-[7px] rounded-[12px] w-[208px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] text-right select-none animate-in fade-in-50 zoom-in-95 duration-100 ${
        position === "bottom-left"
          ? "top-full left-0 mt-1"
          : position === "bottom-right"
          ? "top-full right-0 mt-1"
          : "bottom-full left-0 mb-1"
      }`}
      data-node-id="1:6283"
      data-name="الحجوزات"
      dir="rtl"
    >
      {/* 1. عرض تفاصيل الحجز */}
      <Link
        href={`/bookings/${bookingId}`}
        onClick={() => {
          onViewDetails?.();
          onClose();
        }}
        className="bg-[#eaf1e8] hover:bg-[#dfeada] transition-colors h-[32px] px-[12px] flex items-center gap-[10px] rounded-[8px] w-full group cursor-pointer text-right"
        data-node-id="1:6285"
        data-name="Link"
      >
        <div className="size-[16px] relative shrink-0" data-node-id="1:6288">
          <Image
            src="/assets/bookings/actions/f2ed2.svg"
            alt="تفاصيل الحجز"
            width={16}
            height={16}
            className="size-full object-contain"
          />
        </div>
        <span
          className="font-cairo font-bold text-[#4b5940] text-[12px] leading-[16px] whitespace-nowrap"
          data-node-id="1:6287"
        >
          عرض تفاصيل الحجز
        </span>
      </Link>

      {/* 2. تعديل الحجز */}
      <button
        type="button"
        onClick={() => {
          onEditBooking?.();
          onClose();
        }}
        className="hover:bg-[#f6f7f4] transition-colors h-[32px] px-[12px] flex items-center gap-[10px] rounded-[8px] w-full text-right cursor-pointer"
        data-node-id="1:6291"
        data-name="Link"
      >
        <div className="size-[16px] relative shrink-0" data-node-id="1:6294">
          <Image
            src="/assets/bookings/actions/2a22d.svg"
            alt="تعديل الحجز"
            width={16}
            height={16}
            className="size-full object-contain"
          />
        </div>
        <span
          className="font-cairo font-semibold text-[#252a24] text-[12px] leading-[16px] whitespace-nowrap"
          data-node-id="1:6293"
        >
          تعديل الحجز
        </span>
      </button>

      {/* 3. إدارة كود الدخول */}
      <button
        type="button"
        onClick={() => {
          onManageLockCode?.();
          onClose();
        }}
        className="hover:bg-[#f6f7f4] transition-colors h-[32px] px-[12px] flex items-center gap-[10px] rounded-[8px] w-full text-right cursor-pointer"
        data-node-id="1:6296"
        data-name="Link"
      >
        <div className="size-[16px] relative shrink-0 flex items-center justify-center" data-node-id="1:6299">
          <Image
            src="/assets/bookings/actions/d15bf.svg"
            alt="إدارة كود الدخول"
            width={16}
            height={16}
            className="size-full object-contain"
          />
        </div>
        <span
          className="font-cairo font-semibold text-[#252a24] text-[12px] leading-[16px] whitespace-nowrap"
          data-node-id="1:6298"
        >
          إدارة كود الدخول
        </span>
      </button>

      {/* Horizontal Divider */}
      <div
        className="border-[#e5e8e2] border-solid border-t h-px my-[2px] w-full"
        data-node-id="1:6302"
        data-name="Horizontal Divider"
      />

      {/* 4. إلغاء الحجز */}
      <button
        type="button"
        onClick={() => {
          onCancelBooking?.();
          onClose();
        }}
        className="hover:bg-[#fdeded] transition-colors h-[32px] px-[12px] flex items-center gap-[10px] rounded-[8px] w-full text-right cursor-pointer group"
        data-node-id="1:6303"
        data-name="Link"
      >
        <div className="size-[16px] relative shrink-0" data-node-id="1:6306">
          <Image
            src="/assets/bookings/actions/c83f7.svg"
            alt="إلغاء الحجز"
            width={16}
            height={16}
            className="size-full object-contain"
          />
        </div>
        <span
          className="font-cairo font-semibold text-[#b12515] text-[12px] leading-[16px] whitespace-nowrap"
          data-node-id="1:6305"
        >
          إلغاء الحجز
        </span>
      </button>
    </div>
  );
}
