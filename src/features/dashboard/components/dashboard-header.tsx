"use client";

import Image from "next/image";
import { ChevronLeft, Building2, Search, Bell } from "lucide-react";
import { useSidebar } from "../context/sidebar-context";
import { PropertySelectorDropdown } from "./property-selector-dropdown";

export function DashboardHeader() {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <header
      className="bg-white h-[64px] border-b border-[#E5EAE0] drop-shadow-[0px_1px_3px_rgba(0,0,0,0.03)] flex items-center justify-between px-[20px] lg:px-[28px] w-full shrink-0 z-20 gap-[16px]"
      data-name="Header"
    >
      {/* 1. Right Side: Toggle Button + Breadcrumb Trail (Expands freely as path grows) */}
      <div className="flex items-center gap-[8px] flex-1 min-w-0 overflow-x-auto no-scrollbar py-[4px]">
        {/* Circular Sidebar Collapse/Expand Toggle Button */}
        <button
          type="button"
          onClick={toggleSidebar}
          title={isCollapsed ? "توسيع القائمة الجانبية" : "طي القائمة الجانبية"}
          className="size-[28px] rounded-full bg-white border border-[#DFE4DB] shadow-sm flex items-center justify-center text-[#454840] hover:bg-neutral-50 hover:text-black transition-all shrink-0 cursor-pointer"
        >
          <ChevronLeft
            size={16}
            className={`transition-transform duration-200 ${isCollapsed ? "rotate-180" : ""}`}
          />
        </button>

        {/* Vertical Divider */}
        <div className="h-[18px] w-px bg-[#DFE4DB] mx-[2px] shrink-0" />

        {/* Breadcrumb Path Container */}
        <div className="flex items-center gap-[6px] shrink-0">
          <div className="bg-[#EEF2E6] border border-[#DFE4DB]/60 flex items-center gap-[6px] px-[12px] py-[4px] rounded-[10px]">
            <Building2 size={14} className="text-[#34422A] shrink-0" />
            <span className="font-cairo font-semibold text-[12px] leading-[18px] text-[#181D17]">
              العقارات
            </span>
          </div>
        </div>
      </div>

      {/* 2. Left Side: Property Dropdown + Search Bar + Notification Bell + Divider + User Profile */}
      <div className="flex items-center gap-[10px] lg:gap-[14px] shrink-0">
        {/* Property Selector Dropdown Menu (Repositioned next to the Search Bar) */}
        <div className="shrink-0">
          <PropertySelectorDropdown />
        </div>

        {/* Search Bar */}
        <div className="w-[220px] sm:w-[260px] lg:w-[300px] shrink-0">
          <div className="bg-[#F1F5EB] border border-transparent hover:border-[#DFE4DB] focus-within:border-[#34422A] h-[36px] rounded-[12px] flex items-center justify-between px-[12px] w-full transition-all">
            <input
              type="text"
              dir="rtl"
              placeholder="ابحث عن وحدة، مستأجر، عقد..."
              className="bg-transparent outline-none w-full font-cairo text-[12px] text-[#181D17] placeholder:text-[#75786F]"
            />
            <Search size={15} className="text-[#75786F] shrink-0 me-[2px]" />
          </div>
        </div>

        {/* Notification Bell */}
        <button
          type="button"
          aria-label="التنبيهات"
          className="relative p-[6px] rounded-full hover:bg-neutral-100 transition-colors text-[#454840] shrink-0"
        >
          <Bell size={18} />
          <span className="absolute top-[5px] left-[5px] size-[7px] bg-[#BA1A1A] rounded-full ring-2 ring-white" />
        </button>

        {/* Vertical Divider */}
        <div className="h-[22px] w-px bg-[#DFE4DB] shrink-0" />

        {/* User Profile Card */}
        <div className="flex items-center gap-[10px] shrink-0">
          <div className="flex flex-col items-end">
            <span className="font-cairo font-bold text-[13px] leading-[18px] text-[#181D17]">
              محمد أحمد
            </span>
            <span className="font-cairo font-medium text-[11px] leading-[14px] text-[#75786F]">
              مدير المنصة
            </span>
          </div>

          <div className="relative size-[32px] rounded-full overflow-hidden shrink-0 border border-neutral-200/60 shadow-sm">
            <Image
              src="/assets/dashboard/de01e5fde3da237802f4f5f9f19a4aa8998f2967.png"
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
