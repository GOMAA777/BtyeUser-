"use client";

import Image from "next/image";
import { UnitStatus } from "../data/units-data";

interface StatusCounts {
  all: number;
  available: number;
  booked: number;
  cleaning: number;
  maintenance: number;
}

interface UnitsFilterBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  statusCounts: StatusCounts;
  selectedProperty: string;
  onPropertyChange: (prop: string) => void;
  selectedFloor: string;
  onFloorChange: (floor: string) => void;
  selectedType: string;
  onTypeChange: (type: string) => void;
  selectedPriceRange: string;
  onPriceRangeChange: (price: string) => void;
  selectedGuestCapacity: string;
  onGuestCapacityChange: (cap: string) => void;
  sortBy: string;
  onSortByChange: (sort: string) => void;
}

export function UnitsFilterBar({
  searchQuery,
  onSearchChange,
  selectedStatus,
  onStatusChange,
  statusCounts,
  selectedProperty,
  onPropertyChange,
  selectedFloor,
  onFloorChange,
  selectedType,
  onTypeChange,
  selectedPriceRange,
  onPriceRangeChange,
  selectedGuestCapacity,
  onGuestCapacityChange,
  sortBy,
  onSortByChange,
}: UnitsFilterBarProps) {
  const tabs = [
    { id: "all", label: `الكل (${statusCounts.all})` },
    { id: "available", label: `متاحة (${statusCounts.available})` },
    { id: "booked", label: `محجوزة (${statusCounts.booked})` },
    { id: "cleaning", label: `تحت التنظيف (${statusCounts.cleaning})` },
    { id: "maintenance", label: `تحت الصيانة (${statusCounts.maintenance})` },
  ];

  return (
    <div className="flex flex-col gap-3 w-full" dir="rtl">
      {/* 1. Search Field and Segment Tabs Container */}
      <div
        className="bg-white border border-[#e5e8e2] drop-shadow-[0px_2px_5px_rgba(0,0,0,0.03)] rounded-[16px] p-4 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 w-full"
        data-node-id="1:4333"
        data-name="Background+Border+Shadow"
      >
        {/* Right side in RTL: Search Input */}
        <div
          className="relative flex-1 max-w-full lg:max-w-[440px]"
          data-node-id="1:4334"
          data-name="Search Field"
        >
          <div
            className="bg-[#f6f7f4] rounded-[12px] flex items-center pr-[40px] pl-[16px] h-[40px] w-full"
            data-node-id="1:4335"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="ابحث برقم الوحدة أو اسم الضيف..."
              className="bg-transparent font-cairo font-medium text-[12px] text-[#252a24] placeholder:text-[rgba(115,120,111,0.7)] outline-none w-full text-right"
              data-node-id="1:4337"
            />
          </div>
          <div className="absolute right-[14px] top-1/2 -translate-y-1/2 size-[15px] pointer-events-none">
            <Image
              src="/assets/units/list/fcc47.svg"
              alt="search"
              width={15}
              height={15}
              className="size-full object-contain"
            />
          </div>
        </div>

        {/* Left side in RTL: Status Segment Tabs */}
        <div
          className="bg-[#f6f7f4] h-[36px] p-[2px] rounded-[12px] flex items-center gap-[2px] overflow-x-auto shrink-0 select-none"
          data-node-id="1:4341"
          data-name="Background+Border"
        >
          {tabs.map((tab) => {
            const isActive = selectedStatus === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onStatusChange(tab.id)}
                className={`px-[16px] py-[6px] rounded-[8px] font-cairo font-semibold text-[12px] leading-[16px] whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-white text-[#252a24] shadow-[0px_1px_2px_rgba(0,0,0,0.06)]"
                    : "text-[#73786f] hover:text-[#252a24]"
                }`}
                data-name="Button"
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Refined Filter Dropdowns & Sort Row */}
      <div
        className="border-t border-[#f0f2ed] pt-[13px] flex flex-wrap items-center justify-between gap-3 w-full"
        data-node-id="1:4352"
        data-name="Bottom Row: Refined Filter Dropdowns"
      >
        {/* Right side in RTL: Dropdown Filters */}
        <div className="flex flex-wrap items-center gap-[10px]">
          {/* Property Dropdown */}
          <div className="relative">
            <select
              value={selectedProperty}
              onChange={(e) => onPropertyChange(e.target.value)}
              className="bg-[#f9faf8] border border-[#e5e8e2] rounded-[12px] pr-[15px] pl-[34px] py-[8px] font-cairo font-medium text-[#252a24] text-[12px] leading-[16px] appearance-none outline-none cursor-pointer hover:bg-neutral-50 transition-colors"
            >
              <option value="all">العقار: جميع العقارات</option>
              <option value="عمارة النخيل">العقار: عمارة النخيل</option>
              <option value="مجمع الواحة">العقار: مجمع الواحة</option>
            </select>
            <div className="absolute left-[10px] top-1/2 -translate-y-1/2 size-[14px] pointer-events-none">
              <Image
                src="/assets/units/list/4b298.svg"
                alt="v"
                width={14}
                height={14}
                className="size-full object-contain"
              />
            </div>
          </div>

          {/* Floor Dropdown */}
          <div className="relative">
            <select
              value={selectedFloor}
              onChange={(e) => onFloorChange(e.target.value)}
              className="bg-[#f9faf8] border border-[#e5e8e2] rounded-[12px] pr-[15px] pl-[34px] py-[8px] font-cairo font-medium text-[#252a24] text-[12px] leading-[16px] appearance-none outline-none cursor-pointer hover:bg-neutral-50 transition-colors"
            >
              <option value="all">الدور: جميع الأدوار</option>
              <option value="الأرضي">الدور: الأرضي</option>
              <option value="الأول">الدور: الأول</option>
              <option value="الثاني">الدور: الثاني</option>
              <option value="الثالث">الدور: الثالث</option>
            </select>
            <div className="absolute left-[10px] top-1/2 -translate-y-1/2 size-[14px] pointer-events-none">
              <Image
                src="/assets/units/list/4b298.svg"
                alt="v"
                width={14}
                height={14}
                className="size-full object-contain"
              />
            </div>
          </div>

          {/* Unit Type Dropdown */}
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => onTypeChange(e.target.value)}
              className="bg-[#f9faf8] border border-[#e5e8e2] rounded-[12px] pr-[15px] pl-[34px] py-[8px] font-cairo font-medium text-[#252a24] text-[12px] leading-[16px] appearance-none outline-none cursor-pointer hover:bg-neutral-50 transition-colors"
            >
              <option value="all">نوع الوحدة: الكل</option>
              <option value="استوديو">نوع الوحدة: استوديو</option>
              <option value="شقة">نوع الوحدة: شقة</option>
              <option value="غرفة فردية">نوع الوحدة: غرفة فردية</option>
              <option value="دوبلكس">نوع الوحدة: دوبلكس</option>
            </select>
            <div className="absolute left-[10px] top-1/2 -translate-y-1/2 size-[14px] pointer-events-none">
              <Image
                src="/assets/units/list/4b298.svg"
                alt="v"
                width={14}
                height={14}
                className="size-full object-contain"
              />
            </div>
          </div>

          {/* Price Range Dropdown */}
          <div className="relative">
            <select
              value={selectedPriceRange}
              onChange={(e) => onPriceRangeChange(e.target.value)}
              className="bg-[#f9faf8] border border-[#e5e8e2] rounded-[12px] pr-[15px] pl-[34px] py-[8px] font-cairo font-medium text-[#252a24] text-[12px] leading-[16px] appearance-none outline-none cursor-pointer hover:bg-neutral-50 transition-colors"
            >
              <option value="all">السعر: الكل</option>
              <option value="under_300">أقل من 300 ر.س</option>
              <option value="300_500">300 - 500 ر.س</option>
              <option value="above_500">أكثر من 500 ر.س</option>
            </select>
            <div className="absolute left-[10px] top-1/2 -translate-y-1/2 size-[14px] pointer-events-none">
              <Image
                src="/assets/units/list/4b298.svg"
                alt="v"
                width={14}
                height={14}
                className="size-full object-contain"
              />
            </div>
          </div>

          {/* Guest Capacity Dropdown */}
          <div className="relative">
            <select
              value={selectedGuestCapacity}
              onChange={(e) => onGuestCapacityChange(e.target.value)}
              className="bg-[#f9faf8] border border-[#e5e8e2] rounded-[12px] pr-[15px] pl-[34px] py-[8px] font-cairo font-medium text-[#252a24] text-[12px] leading-[16px] appearance-none outline-none cursor-pointer hover:bg-neutral-50 transition-colors"
            >
              <option value="all">عدد الضيوف: الكل</option>
              <option value="1_2">1 - 2 ضيوف</option>
              <option value="3_4">3 - 4 ضيوف</option>
              <option value="5_plus">5+ ضيوف</option>
            </select>
            <div className="absolute left-[10px] top-1/2 -translate-y-1/2 size-[14px] pointer-events-none">
              <Image
                src="/assets/units/list/4b298.svg"
                alt="v"
                width={14}
                height={14}
                className="size-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Left side in RTL: Sort Button */}
        <div
          className="relative flex items-center gap-[6px] px-[12px] py-[6px] rounded-[8px] cursor-pointer hover:bg-white/80 transition-colors"
          data-node-id="1:4353"
          data-name="Sort Button"
        >
          <select
            value={sortBy}
            onChange={(e) => onSortByChange(e.target.value)}
            className="font-cairo font-semibold text-[#73786f] text-[12px] leading-[16px] appearance-none bg-transparent outline-none cursor-pointer pr-1"
          >
            <option value="newest">ترتيب حسب: الأحدث</option>
            <option value="oldest">ترتيب حسب: الأقدم</option>
            <option value="price_asc">ترتيب حسب: السعر (الأقل)</option>
            <option value="price_desc">ترتيب حسب: السعر (الأعلى)</option>
          </select>
          <div className="relative size-[14px] shrink-0 pointer-events-none" data-node-id="1:4356">
            <Image
              src="/assets/units/list/25ddd.svg"
              alt="sort"
              width={14}
              height={14}
              className="size-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
