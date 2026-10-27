"use client";

import Image from "next/image";
import { showToast } from "@/lib/toast";

export type PropertyStatusFilter = "all" | "active" | "inactive";

interface PropertiesFilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  statusFilter: PropertyStatusFilter;
  onStatusFilterChange: (status: PropertyStatusFilter) => void;
  totalCount: number;
  activeCount: number;
  inactiveCount: number;
  onToggleAdvancedFilter?: () => void;
}

export function PropertiesFilterBar({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  totalCount,
  activeCount,
  inactiveCount,
  onToggleAdvancedFilter,
}: PropertiesFilterBarProps) {
  const handleSecondaryFilter = () => {
    if (onToggleAdvancedFilter) {
      onToggleAdvancedFilter();
    } else {
      showToast.info("تصفية متقدمة", "يمكنك تصفية العقارات حسب المدينة، أو نوع العقار، أو حالة الأقفال الذكية.");
    }
  };

  return (
    <div
      className="bg-white border border-[#e5e8e2] drop-shadow-[0px_2px_5px_rgba(0,0,0,0.03)] rounded-[16px] p-[16px] lg:p-[17px] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-[16px] w-full"
      data-node-id="1:1601"
      data-name="Background+Border+Shadow"
    >
      {/* Right Side: Search Field (RTL start) */}
      <div
        className="w-full md:w-[480px] lg:w-[569px] max-w-full"
        data-node-id="1:1615"
        data-name="Search Field"
      >
        <div
          className="bg-[#f6f7f4] border border-transparent focus-within:border-[#34422a]/40 focus-within:bg-white rounded-[12px] h-[37px] flex items-center relative px-[16px] pr-[40px] transition-all"
          data-node-id="1:1616"
          data-name="Input"
        >
          {/* Search Icon */}
          <div
            className="absolute right-[14px] top-1/2 -translate-y-1/2 size-[15px] pointer-events-none"
            data-node-id="1:1620"
          >
            <Image
              src="/assets/properties/search-icon.svg"
              alt="بحث"
              width={15}
              height={15}
              className="size-full object-contain"
            />
          </div>

          <input
            type="text"
            dir="rtl"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="ابحث باسم العقار أو المدينة..."
            className="w-full bg-transparent outline-none font-cairo font-medium text-[12px] text-[#181d17] placeholder:text-[rgba(115,120,111,0.7)]"
            data-node-id="1:1618"
          />

          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="text-[#73786f] hover:text-[#181d17] text-[11px] font-cairo px-[6px] py-[2px] rounded-md hover:bg-neutral-200/50 transition-colors cursor-pointer"
            >
              مسح
            </button>
          )}
        </div>
      </div>

      {/* Left Side: Status Filter Segmented Control & Action Button (RTL end) */}
      <div
        className="flex items-center gap-[12px] justify-between md:justify-end shrink-0"
        data-node-id="1:1602"
        data-name="Status Filter Segmented Control"
      >
        {/* Label "الحالة:" */}
        <span
          className="font-cairo font-semibold text-[12px] leading-[16px] text-[#73786f] whitespace-nowrap"
          data-node-id="1:1614"
        >
          الحالة:
        </span>

        {/* Segmented Control Buttons */}
        <div
          className="bg-[#f6f7f4] flex items-center gap-[4px] p-[4px] rounded-[12px]"
          data-node-id="1:1606"
          data-name="Background+Border"
        >
          {/* All Filter */}
          <button
            type="button"
            onClick={() => onStatusFilterChange("all")}
            className={`px-[16px] py-[6px] rounded-[8px] font-cairo font-semibold text-[12px] leading-[16px] whitespace-nowrap transition-all cursor-pointer ${
              statusFilter === "all"
                ? "bg-white text-[#252a24] shadow-xs"
                : "text-[#73786f] hover:text-[#252a24]"
            }`}
            data-node-id="1:1611"
            data-name="Button"
          >
            الكل ({totalCount})
          </button>

          {/* Active Filter */}
          <button
            type="button"
            onClick={() => onStatusFilterChange("active")}
            className={`px-[16px] py-[6px] rounded-[8px] font-cairo font-semibold text-[12px] leading-[16px] whitespace-nowrap transition-all cursor-pointer ${
              statusFilter === "active"
                ? "bg-white text-[#252a24] shadow-xs"
                : "text-[#73786f] hover:text-[#252a24]"
            }`}
            data-node-id="1:1609"
            data-name="Button"
          >
            نشط ({activeCount})
          </button>

          {/* Inactive Filter */}
          <button
            type="button"
            onClick={() => onStatusFilterChange("inactive")}
            className={`px-[16px] py-[6px] rounded-[8px] font-cairo font-semibold text-[12px] leading-[16px] whitespace-nowrap transition-all cursor-pointer ${
              statusFilter === "inactive"
                ? "bg-white text-[#252a24] shadow-xs"
                : "text-[#73786f] hover:text-[#252a24]"
            }`}
            data-node-id="1:1607"
            data-name="Button"
          >
            غير نشط ({inactiveCount})
          </button>
        </div>

        {/* Secondary Filter Action Button */}
        <button
          type="button"
          onClick={handleSecondaryFilter}
          title="خيارات الفرز والتصفية الإضافية"
          className="border border-[#e5e8e2] hover:border-[#34422a]/40 bg-white hover:bg-[#f6f7f4] rounded-[12px] p-[10.5px] transition-all flex items-center justify-center shrink-0 cursor-pointer shadow-2xs"
          data-node-id="1:1603"
          data-name="Button - Secondary Filter Icon Action"
        >
          <div className="relative shrink-0 size-[16px]" data-node-id="1:1604">
            <Image
              src="/assets/properties/filter-icon.svg"
              alt="تصفية"
              width={16}
              height={16}
              className="size-full object-contain"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
