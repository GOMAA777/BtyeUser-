"use client";

import Image from "next/image";
import Link from "next/link";
import { showToast } from "@/lib/toast";

interface PropertyDetailsHeroCardProps {
  propertyName?: string;
  propertyLocation?: string;
  assetId?: string;
  propertyType?: string;
  occupancyRate?: string;
  availableUnits?: string;
  occupiedUnits?: string;
  totalUnits?: string;
}

export function PropertyDetailsHeroCard({
  propertyName = "عمارة النخيل الفاخرة",
  propertyLocation = "الرياض، حي الياسمين · طريق أنس بن مالك",
  assetId = "RWQ-NKH-01",
  propertyType = "عمارة سكنية",
  occupancyRate = "83.3%",
  availableUnits = "2 وحدة",
  occupiedUnits = "10 وحدات",
  totalUnits = "12 وحدة",
}: PropertyDetailsHeroCardProps) {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Right Column in RTL: Property Overview, Metrics & Status (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-5 order-2 lg:order-1">
          {/* Top Title & Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col items-start gap-1">
              <h2 className="font-bold text-[#181d17] text-2xl leading-tight">
                {propertyName}
              </h2>
              <div className="flex items-center gap-1.5">
                <div className="relative w-[10.5px] h-[15px] shrink-0">
                  <Image
                    src="/assets/properties/details/cfbfda5892cb35c32c6db24f21007677c158b000.svg"
                    alt="location"
                    width={11}
                    height={15}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-normal text-[#75786f] text-sm leading-tight">
                  {propertyLocation}
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
              <Link
                href="/properties/new/unit"
                className="bg-[#4b5940] hover:bg-[#3d4934] active:scale-[0.98] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-all duration-150 flex items-center gap-1.5 px-4 py-2 rounded-[12px] text-white cursor-pointer"
              >
                <div className="relative size-[15px] shrink-0">
                  <Image
                    src="/assets/properties/details/7f9661f842275efef5b6a44871928e3e99b76e91.svg"
                    alt="add"
                    width={15}
                    height={15}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-semibold text-sm leading-tight">
                  إضافة وحدة
                </span>
              </Link>

              <button
                type="button"
                onClick={() => showToast.info("تعديل العقار", "جاري فتح نموذج تعديل مواصفات العقار")}
                className="bg-[#ebefe6] hover:bg-[#dfe4db] active:scale-[0.98] transition-all duration-150 flex items-center gap-1.5 h-[36px] px-3.5 py-2 rounded-[12px] text-[#181d17] cursor-pointer"
              >
                <div className="relative w-[13.5px] h-3 shrink-0">
                  <Image
                    src="/assets/properties/details/89479f6d7b2fc6899ab0fc8d1698d3bf9cef1c9b.svg"
                    alt="edit"
                    width={14}
                    height={12}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-semibold text-sm leading-tight">تعديل</span>
              </button>
            </div>
          </div>

          {/* Key Operational Metrics (4 boxes) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {/* Total Units */}
            <div className="bg-[#f1f5eb] rounded-[12px] p-2.5 flex flex-col justify-center">
              <span className="font-medium text-[#75786f] text-[11px] leading-tight mb-0.5">
                إجمالي الوحدات
              </span>
              <span className="font-bold text-[#181d17] text-lg leading-tight">
                {totalUnits}
              </span>
            </div>

            {/* Occupied Units (Highlighted) */}
            <div className="bg-[#d8e8cb]/30 rounded-[12px] p-2.5 flex flex-col justify-center">
              <span className="font-medium text-[#54624c] text-[11px] leading-tight mb-0.5">
                الوحدات المشغولة
              </span>
              <span className="font-bold text-[#34422a] text-lg leading-tight">
                {occupiedUnits}
              </span>
            </div>

            {/* Available Units */}
            <div className="bg-[#f1f5eb] rounded-[12px] p-2.5 flex flex-col justify-center">
              <span className="font-medium text-[#75786f] text-[11px] leading-tight mb-0.5">
                الوحدات المتاحة
              </span>
              <span className="font-bold text-[#181d17] text-lg leading-tight">
                {availableUnits}
              </span>
            </div>

            {/* Occupancy Rate */}
            <div className="bg-[#f1f5eb] rounded-[12px] p-2.5 flex flex-col justify-center">
              <span className="font-medium text-[#75786f] text-[11px] leading-tight mb-0.5">
                معدل الإشغال
              </span>
              <span className="font-bold text-[#34422a] text-lg leading-tight">
                {occupancyRate}
              </span>
            </div>
          </div>

          {/* Integrated Hardware / Connectivity Strip */}
          <div className="bg-[#f1f5eb]/70 rounded-[12px] px-4 py-2 flex items-center justify-between">
            {/* Right: Lock info */}
            <div className="flex items-center gap-2.5">
              <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[8px] size-8 flex items-center justify-center shrink-0">
                <div className="relative size-[15px]">
                  <Image
                    src="/assets/properties/details/36accc74424884987f286624ca9a75f6cbd00ef3.svg"
                    alt="gateway"
                    width={15}
                    height={15}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-[#181d17] text-sm leading-tight">
                  بوابة الأقفال الذكية متصلة
                </span>
                <span className="font-medium text-[#75786f] text-[11px] leading-tight mt-0.5">
                  تزامن فوري عبر Zigbee Hub
                </span>
              </div>
            </div>

            {/* Left: Status badge */}
            <div className="bg-[#d8e8cb]/50 rounded-full px-2.5 py-1 flex items-center gap-1 shrink-0">
              <span className="font-semibold text-[#34422a] text-[11px] leading-none">
                مستقر وسليم
              </span>
              <div className="relative size-[11.7px] shrink-0">
                <Image
                  src="/assets/properties/details/d01e5ae9c46b8cbbd60646395a703b43997dde08.svg"
                  alt="shield"
                  width={12}
                  height={12}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Bottom Tags / Meta badges */}
          <div className="flex items-center gap-2 pt-1">
            {/* Status dot */}
            <div className="bg-[#d8e8cb]/50 rounded-full px-3 py-1 flex items-center gap-1.5 shrink-0">
              <div className="bg-[#34422a] rounded-full size-2 shrink-0 animate-pulse" />
              <span className="font-bold text-[#34422a] text-[11px] leading-tight">
                نشط ومؤجر جزئياً
              </span>
            </div>

            {/* Property type */}
            <div className="bg-[#ebefe6] rounded-full px-3 py-1 shrink-0">
              <span className="font-medium text-[#454840] text-[11px] leading-tight">
                {propertyType}
              </span>
            </div>

            {/* Asset code */}
            <div className="bg-[#e5eae0] rounded-full px-2.5 py-1 shrink-0">
              <span className="font-bold text-[#75786f] text-[11px] tracking-[0.55px] leading-tight">
                {assetId}
              </span>
            </div>
          </div>
        </div>

        {/* Left Column in RTL: Architectural Showcase Photo (5 cols) */}
        <div className="lg:col-span-5 relative rounded-[12px] overflow-hidden min-h-[280px] lg:min-h-[300px] bg-[#ebefe6] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] order-1 lg:order-2 group">
          <Image
            src="/assets/properties/details/d04c9c6c0d57581b6cbe37fd7a90c88375acef5e.png"
            alt="showcase"
            fill
            unoptimized
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Top channel overlay pill */}
          <div className="absolute top-4 right-4 backdrop-blur-[6px] bg-[#34422a]/60 rounded-full px-3 py-1.5 z-10">
            <span className="font-medium text-white text-[11px] leading-none block">
              Booking . com
            </span>
          </div>

          {/* Bottom overlays */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
            {/* Photo credit badge */}
            <div className="backdrop-blur-[6px] bg-[#34422a]/80 rounded-full px-3 py-1.5 flex items-center gap-2">
              <div className="relative w-[13.3px] h-3 shrink-0">
                <Image
                  src="/assets/properties/details/b7ded8ac91362b51cfd7a71f5829f8ce0ee00f58.svg"
                  alt="camera"
                  width={14}
                  height={12}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-medium text-white text-[11px] leading-none">
                تصوير معماري حصري · 2024
              </span>
            </div>

            {/* Expand / fullscreen button */}
            <button
              type="button"
              onClick={() => showToast.info("معاينة الصور", "جاري فتح معرض صور العقار بالحجم الكامل")}
              className="backdrop-blur-[6px] bg-white/20 hover:bg-white/35 active:scale-95 transition-all duration-150 rounded-[12px] size-[34px] flex items-center justify-center cursor-pointer"
              title="تكبير الصورة"
            >
              <div className="relative size-[15px]">
                <Image
                  src="/assets/properties/details/ea2850e77beda36fca35ec72be5863c5f9ca0520.svg"
                  alt="expand"
                  width={15}
                  height={15}
                  className="w-full h-full object-contain"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
