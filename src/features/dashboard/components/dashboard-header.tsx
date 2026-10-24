"use client";

import Image from "next/image";
import { ChevronLeft, Building2, Search, Bell } from "lucide-react";
import { useSidebar } from "../context/sidebar-context";
import { PropertySelectorDropdown } from "./property-selector-dropdown";

export function DashboardHeader() {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <header
      className="bg-white h-[72px] border-b border-[#E5EAE0] drop-shadow-[0px_1px_4px_rgba(0,0,0,0.04)] flex items-center justify-between px-[20px] lg:px-[32px] w-full shrink-0 z-20 gap-[16px]"
      data-name="Header"
    >
      {/* 1. Right Side (RTL Start): Sidebar Toggle + Property Selector Pill */}
      <div className="flex items-center gap-[12px] shrink-0">
        {/* Circular Sidebar Collapse/Expand Toggle Button */}
        <button
          type="button"
          onClick={toggleSidebar}
          title={isCollapsed ? "توسيع القائمة الجانبية" : "طي القائمة الجانبية"}
          className="size-[28px] rounded-full bg-white border border-[#DFE4DB] shadow-xs flex items-center justify-center text-[#454840] hover:bg-neutral-50 hover:text-black transition-all shrink-0 cursor-pointer"
        >
          <ChevronLeft
            size={16}
            className={`transition-transform duration-200 ${isCollapsed ? "rotate-180" : ""}`}
          />
        </button>

        {/* Property Selector Pill Button */}
        <div className="shrink-0">
          <PropertySelectorDropdown />
        </div>
      </div>

      {/* 2. Center: Search Bar */}
      <div className="flex-1 max-w-[520px] mx-[16px]">
        <div className="bg-[#F1F5EB] border border-transparent hover:border-[#DFE4DB] focus-within:border-[#34422A] h-[40px] rounded-[12px] flex items-center justify-between px-[16px] w-full transition-all">
          <input
            type="text"
            dir="rtl"
            placeholder="ابحث عن وحدة، مستأجر، عقد..."
            className="bg-transparent outline-none w-full font-cairo text-[13px] text-[#181D17] placeholder:text-[#75786F]"
          />
          <Search size={15} className="text-[#75786F] shrink-0 me-[2px]" />
        </div>
      </div>

      {/* 3. Left Side (RTL End): Notification Bell + Divider + User Profile Card */}
      <div className="flex items-center gap-[16px] shrink-0">
        {/* Notification Bell with Red Indicator Dot */}
        <button
          type="button"
          aria-label="التنبيهات"
          className="relative p-[6px] rounded-full hover:bg-neutral-100 transition-colors text-[#454840] shrink-0 cursor-pointer"
        >
          <Bell size={18} />
          <span className="absolute top-[5px] left-[5px] size-[8px] bg-[#BA1A1A] rounded-full ring-2 ring-white" />
        </button>

        {/* Vertical Divider */}
        <div className="h-[24px] w-px bg-[rgba(197,200,189,0.4)] shrink-0" />

        {/* User Profile Card */}
        <div className="flex items-center gap-[10px] shrink-0">
          <div className="flex flex-col items-end">
            <span className="font-cairo font-bold text-[12px] leading-[18px] text-[#181D17]">
              محمد أحمد
            </span>
            <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840]">
              مالك العقار
            </span>
          </div>

          <div className="relative size-[32px] rounded-full overflow-hidden shrink-0 border border-neutral-200/60 shadow-xs">
            <Image
              src="/assets/import-properties/de01e5fde3da237802f4f5f9f19a4aa8998f2967.png"
              alt="محمد أحمد"
              width={32}
              height={32}
              className="object-cover size-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
