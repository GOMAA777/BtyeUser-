"use client";

import Image from "next/image";

interface FilterSelectionBarProps {
  isAllSelected: boolean;
  onToggleSelectAll: () => void;
  selectedCity: string;
  onSelectCity: (city: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCountText?: string;
}

export function FilterSelectionBar({
  isAllSelected,
  onToggleSelectAll,
  selectedCity,
  onSelectCity,
  searchQuery,
  onSearchChange,
  selectedCountText = "تحديد الكل (2 عقار، 36 وحدة)",
}: FilterSelectionBarProps) {
  return (
    <div
      className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#E5EAE0]/40 flex flex-col md:flex-row items-center justify-between p-[16px] rounded-[16px] w-full shrink-0 gap-[16px]"
      data-name="Filter & Global Selection Bar"
    >
      {/* 1. Right Group (RTL Start): Select All Checkbox + Status Message */}
      <div className="flex items-center gap-[16px] w-full md:w-auto justify-between md:justify-start">
        <label
          onClick={onToggleSelectAll}
          className="flex items-center gap-[10px] cursor-pointer select-none group"
        >
          {isAllSelected ? (
            <div className="size-[20px] relative shrink-0">
              <Image
                src="/assets/import-properties/5abac901c786df4fcd43a31dae290b9c4c1d5f61.svg"
                alt="Selected"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          ) : (
            <div className="size-[20px] rounded-[5px] border-2 border-[#DFE4DB] bg-white group-hover:border-[#4B5940] transition-colors" />
          )}

          <span className="font-cairo font-bold text-[#4B5940] text-[14px] leading-[20px]">
            {selectedCountText}
          </span>
        </label>

        <span className="text-[#C5C8BD] text-[16px] select-none">|</span>

        <span className="font-cairo font-normal text-[#454840] text-[13px] leading-[20px]">
          جميع الوحدات المحددة جاهزة للاعتماد الفوري
        </span>
      </div>

      {/* 2. Left Group (RTL End): Search Input + City Filter Tabs */}
      <div className="flex items-center gap-[8px] w-full md:w-auto justify-end flex-wrap">
        {/* City Filter Pills */}
        <div className="bg-[#F1F5EB] flex items-center gap-[4px] p-[4px] rounded-[12px] border border-[#DFE4DB]/40">
          <button
            type="button"
            onClick={() => onSelectCity("all")}
            className={`px-[12px] py-[6px] rounded-[8px] font-cairo text-[11px] leading-[16px] transition-all cursor-pointer ${
              selectedCity === "all"
                ? "bg-white text-[#34422A] font-semibold shadow-xs"
                : "text-[#454840] font-medium hover:text-[#181D17]"
            }`}
          >
            جميع المدن
          </button>

          <button
            type="button"
            onClick={() => onSelectCity("riyadh")}
            className={`px-[12px] py-[6px] rounded-[8px] font-cairo text-[11px] leading-[16px] transition-all cursor-pointer ${
              selectedCity === "riyadh"
                ? "bg-white text-[#34422A] font-semibold shadow-xs"
                : "text-[#454840] font-medium hover:text-[#181D17]"
            }`}
          >
            الرياض (1)
          </button>

          <button
            type="button"
            onClick={() => onSelectCity("jeddah")}
            className={`px-[12px] py-[6px] rounded-[8px] font-cairo text-[11px] leading-[16px] transition-all cursor-pointer ${
              selectedCity === "jeddah"
                ? "bg-white text-[#34422A] font-semibold shadow-xs"
                : "text-[#454840] font-medium hover:text-[#181D17]"
            }`}
          >
            جدة (1)
          </button>
        </div>

        {/* Search Input Box */}
        <div className="relative w-full sm:w-[260px] md:w-[280px]">
          <input
            type="text"
            dir="rtl"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="بحث في العقارات أو الوحدات المستوردة..."
            className="w-full bg-[#F1F5EB] h-[44px] rounded-[12px] border border-transparent focus:border-[#4B5940] pr-[40px] pl-[16px] font-cairo font-normal text-[13px] text-[#181D17] placeholder:text-[#9CA3AF] outline-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition-all"
          />
          <div className="absolute right-[12px] top-1/2 -translate-y-1/2 size-[15px] pointer-events-none">
            <Image
              src="/assets/import-properties/195de96be2d38f81237b67a2bf764aaabfda4fea.svg"
              alt=""
              width={15}
              height={15}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
