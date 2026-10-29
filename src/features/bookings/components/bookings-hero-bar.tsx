"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

interface BookingsHeroBarProps {
  activeCount?: number;
  totalCount?: number;
}

export function BookingsHeroBar({
  activeCount = 28,
}: BookingsHeroBarProps) {
  return (
    <div
      className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 lg:px-[32px] lg:py-[24px] flex flex-col md:flex-row md:items-center justify-between gap-4 w-full"
      data-node-id="1:5830"
      data-name="Section - TOP HERO GREETING BAR"
      dir="rtl"
    >
      {/* Right side in RTL: Title & Subtitle */}
      <div className="flex flex-col items-start gap-1">
        <div className="flex items-center gap-3">
          <h1
            className="font-cairo font-bold text-[#181d17] text-[24px] leading-[34px]"
            data-node-id="1:5842"
          >
            الحجوزات
          </h1>
          <div
            className="bg-[#eaf1e8] flex items-center justify-center px-[12px] py-[3px] rounded-full shrink-0"
            data-node-id="1:5846"
            data-name="Counter Badge"
          >
            <span
              className="font-cairo font-semibold text-[#4b5940] text-[12px] leading-[16px]"
              data-node-id="1:5847"
            >
              {activeCount} حجز نشط
            </span>
          </div>
        </div>
        <p
          className="font-cairo font-normal text-[#454840] text-[14px] leading-[22px]"
          data-node-id="1:5845"
        >
          إدارة وحدات عقاراتك ومتابعة حالتها وجاهزيتها التشغيلية.
        </p>
      </div>

      {/* Left side in RTL: Add Booking Button */}
      <Link
        href="/bookings/new"
        className="bg-[#34422a] hover:bg-[#283420] active:scale-[0.98] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[38px] px-[16px] rounded-[12px] flex items-center gap-[8px] transition-all cursor-pointer shrink-0 self-start md:self-center"
        data-node-id="1:5833"
        data-name="Button"
      >
        <span
          className="font-cairo font-semibold text-white text-[12px] leading-[18px] whitespace-nowrap"
          data-node-id="1:5835"
        >
          إضافة حجز
        </span>
        <Plus className="size-4 text-white" strokeWidth={2.5} />
      </Link>
    </div>
  );
}
