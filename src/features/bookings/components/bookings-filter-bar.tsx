"use client";

import { Search, SlidersHorizontal, Download } from "lucide-react";

interface BookingsFilterBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  counts: {
    all: number;
    current: number;
    upcoming: number;
    completed: number;
    cancelled: number;
  };
}

export function BookingsFilterBar({
  searchQuery,
  onSearchChange,
  selectedStatus,
  onStatusChange,
  counts,
}: BookingsFilterBarProps) {
  const tabs = [
    { id: "all", label: `الكل (${counts.all})` },
    { id: "upcoming", label: `القادمة (${counts.upcoming})` },
    { id: "current", label: `الحالية (${counts.current})` },
    { id: "completed", label: `المنتهية (${counts.completed})` },
    { id: "cancelled", label: `الملغاة (${counts.cancelled})` },
  ];

  return (
    <div
      className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-4 lg:p-[16px] flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 w-full"
      data-node-id="1:5848"
      data-name="Search and Filter Toolbar"
      dir="rtl"
    >
      {/* Right side: Search Input */}
      <div
        className="relative flex-1 max-w-full lg:max-w-[480px]"
        data-node-id="1:5849"
        data-name="Search Field"
      >
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#73786f]">
          <Search className="size-[18px]" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="ابحث باسم الضيف، رقم الحجز أو الوحدة..."
          className="w-full h-[40px] pr-[40px] pl-[16px] bg-[#f6f7f4] hover:bg-[#eef1eb] focus:bg-white border border-transparent focus:border-[#4b5940] rounded-[12px] font-cairo font-medium text-[12px] text-[#181d17] placeholder:text-[rgba(115,120,111,0.7)] outline-none transition-all"
          data-node-id="1:5850"
        />
      </div>

      {/* Center / Left: Status Tabs */}
      <div
        className="bg-[#f6f7f4] p-[3px] rounded-[12px] flex items-center overflow-x-auto no-scrollbar gap-1 self-start lg:self-auto"
        data-node-id="1:5856"
        data-name="Background+Border"
      >
        {tabs.map((tab) => {
          const isActive = selectedStatus === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onStatusChange(tab.id)}
              className={`font-cairo text-[12px] leading-[16px] px-[14px] py-[6px] rounded-[8px] whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? "bg-white text-[#181d17] font-bold shadow-[0px_1px_2px_rgba(0,0,0,0.06)]"
                  : "text-[#73786f] font-semibold hover:text-[#181d17]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
