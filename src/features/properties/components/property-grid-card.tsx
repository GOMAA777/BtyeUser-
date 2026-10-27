"use client";

import { useState } from "react";
import Image from "next/image";
import { PropertyItem } from "../types";
import { showToast } from "@/lib/toast";

interface PropertyGridCardProps {
  property: PropertyItem;
  onViewDetails?: (property: PropertyItem) => void;
}

export function PropertyGridCard({ property, onViewDetails }: PropertyGridCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  const handleView = () => {
    if (onViewDetails) {
      onViewDetails(property);
    } else {
      showToast.info(property.name, `عرض ملف ${property.name} والوحدات التابعة له.`);
    }
  };

  const handleMenuAction = (action: string) => {
    setShowMenu(false);
    showToast.info(action, `تم اختيار ${action} لـ ${property.name}`);
  };

  return (
    <div
      className="bg-white border border-[#e5e8e2] rounded-[16px] overflow-hidden shadow-[0px_2px_10px_0px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between"
      data-node-id={property.id === "prop-yasmin-villa" ? "1:1623" : "1:1691"}
      data-name="Background+Border+Shadow"
    >
      {/* 1. Large Compact Property Image Header */}
      <div
        className="bg-[#f3f4f6] h-[224px] relative w-full overflow-hidden shrink-0 select-none"
        data-name="Large but Compact Property Image Header"
      >
        {/* Background Property Image */}
        <div className="absolute inset-0">
          <Image
            src={property.imageSrc}
            alt={property.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            className="object-cover w-full h-full"
          />
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] via-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.1)] pointer-events-none"
          data-name="Gradient"
        />

        {/* Top Badges (Right side in RTL) */}
        <div
          className="absolute top-[14px] right-[14px] flex items-center gap-[8px] z-10"
          data-name="Top Badges on Image"
        >
          {/* Property Category Badge */}
          <div
            className="bg-[rgba(48,58,44,0.8)] backdrop-blur-xs px-[10px] py-[4px] rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex items-center justify-center"
            data-name="Overlay+Shadow"
          >
            <span className="font-cairo font-bold text-white text-[11px] leading-[16.5px]">
              {property.type}
            </span>
          </div>

          {/* Active Status Badge */}
          <div
            className="bg-[rgba(255,255,255,0.95)] backdrop-blur-xs px-[12px] py-[4px] rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex items-center gap-[6px]"
            data-name="Background+Shadow"
          >
            <span className="font-cairo font-bold text-[#065f46] text-[12px] leading-[16px]">
              {property.statusText}
            </span>
            <span className="size-[8px] rounded-full bg-[#10b981] shrink-0" />
          </div>
        </div>

        {/* Top Action Button: More Options (Left side in RTL) */}
        <div className="absolute top-[14px] left-[14px] z-20">
          <button
            type="button"
            onClick={() => setShowMenu(!showMenu)}
            aria-label="خيارات إضافية"
            className="size-[32px] rounded-full bg-[rgba(255,255,255,0.9)] hover:bg-white active:scale-95 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex items-center justify-center transition-all cursor-pointer"
            data-name="Action button on image → Button"
          >
            <div className="relative size-[16px]">
              <Image
                src="/assets/properties/more-horizontal.svg"
                alt="خيارات"
                width={16}
                height={16}
                className="size-full object-contain"
              />
            </div>
          </button>

          {/* Options Dropdown Menu */}
          {showMenu && (
            <>
              <div
                className="fixed inset-0 z-30"
                onClick={() => setShowMenu(false)}
              />
              <div className="absolute left-0 mt-[6px] w-[160px] bg-white rounded-[12px] shadow-lg border border-[#e5e8e2] py-[6px] z-40 font-cairo text-[12px]">
                <button
                  type="button"
                  onClick={() => handleMenuAction("تعديل بيانات العقار")}
                  className="w-full text-right px-[12px] py-[8px] text-[#181d17] hover:bg-[#f6f7f4] transition-colors"
                >
                  تعديل بيانات العقار
                </button>
                <button
                  type="button"
                  onClick={() => handleMenuAction("إدارة الوحدات")}
                  className="w-full text-right px-[12px] py-[8px] text-[#181d17] hover:bg-[#f6f7f4] transition-colors"
                >
                  إدارة الوحدات
                </button>
                <button
                  type="button"
                  onClick={() => handleMenuAction("سجل الحجوزات")}
                  className="w-full text-right px-[12px] py-[8px] text-[#181d17] hover:bg-[#f6f7f4] transition-colors"
                >
                  سجل الحجوزات
                </button>
                <div className="my-[4px] border-t border-[#f0f2ed]" />
                <button
                  type="button"
                  onClick={() => handleMenuAction("أرشفة العقار")}
                  className="w-full text-right px-[12px] py-[8px] text-[#ba1a1a] hover:bg-[#fef2f2] transition-colors"
                >
                  أرشفة العقار
                </button>
              </div>
            </>
          )}
        </div>

        {/* Bottom Floating Quick Tags (Right side in RTL) */}
        <div
          className="absolute bottom-[12px] right-[16px] flex items-center gap-[8px] z-10"
          data-name="Bottom Floating Quick Tag"
        >
          {/* Units Count Tag */}
          <div
            className="bg-[rgba(0,0,0,0.4)] backdrop-blur-xs px-[10px] py-[4px] rounded-[8px] flex items-center gap-[6px]"
            data-name="Overlay"
          >
            <div className="relative size-[14px] shrink-0">
              <Image
                src={property.badgeIcon}
                alt="نوع الوحدة"
                width={14}
                height={14}
                className="size-full object-contain"
              />
            </div>
            <span className="font-cairo font-semibold text-white text-[12px] leading-[16px]">
              {property.unitsCountText}
            </span>
          </div>

          {/* Rented Units Tag */}
          <div
            className="bg-[rgba(0,0,0,0.4)] backdrop-blur-xs px-[10px] py-[4px] rounded-[8px] flex items-center"
            data-name="Overlay"
          >
            <span className="font-cairo font-bold text-[#6ee7b7] text-[12px] leading-[16px]">
              {property.rentedCountText}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Card Content Body */}
      <div
        className="p-[24px] flex flex-col justify-between flex-1"
        data-name="Card Content Body"
      >
        <div className="flex flex-col gap-[16px] w-full">
          {/* Property Name & Address Row */}
          <div
            className="flex items-start justify-between w-full gap-[12px]"
            data-name="Property Name & Subtitle"
          >
            {/* Title & Street Address (RTL start) */}
            <div className="flex flex-col gap-[4px] items-start flex-1 min-w-0">
              <h3
                className="font-cairo font-bold text-[#181d17] text-[18px] leading-[28px] truncate w-full"
                data-name="Heading 3"
              >
                {property.name}
              </h3>

              <div className="flex items-center gap-[8px] text-[#73786f] font-cairo font-medium text-[12px] leading-[16px] flex-wrap">
                <div className="relative size-[14px] shrink-0">
                  <Image
                    src="/assets/properties/location-icon.svg"
                    alt="موقع"
                    width={14}
                    height={14}
                    className="size-full object-contain"
                  />
                </div>
                <span>{property.street}</span>
                <span className="text-[#e5e8e2]">•</span>
                <span>{property.district}</span>
              </div>
            </div>

            {/* Type Icon Badge (RTL end) */}
            <div
              className="bg-[#f6f7f4] size-[36px] rounded-[12px] flex items-center justify-center shrink-0"
              data-name="Type Icon Badge"
            >
              <div className="relative size-[16px]">
                <Image
                  src={property.typeBadgeIcon}
                  alt={property.type}
                  width={16}
                  height={16}
                  className="size-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Property Specifications Grid (3 Columns) */}
          <div
            className="border-t border-[rgba(229,232,226,0.8)] pt-[17px] grid grid-cols-3 gap-[12px] w-full"
            data-name="Property Specifications Grid"
          >
            {/* Box 1 (Right): Total Units */}
            <div
              className="bg-[#f6f7f4] rounded-[12px] pt-[12px] pb-[13px] px-[12px] flex flex-col items-center justify-center text-center"
              data-name="Background+Border"
            >
              <span className="font-cairo font-semibold text-[#73786f] text-[11px] leading-[16.5px]">
                إجمالي الوحدات
              </span>
              <span className="font-cairo font-bold text-[#252a24] text-[14px] leading-[20px] mt-[5px]">
                {property.unitsCount} وحدة
              </span>
            </div>

            {/* Box 2 (Center): Property Type */}
            <div
              className="bg-[#f6f7f4] rounded-[12px] pt-[12px] pb-[13px] px-[12px] flex flex-col items-center justify-center text-center"
              data-name="Background+Border"
            >
              <span className="font-cairo font-semibold text-[#73786f] text-[11px] leading-[16.5px]">
                نوع العقار
              </span>
              <span className="font-cairo font-bold text-[#252a24] text-[14px] leading-[20px] mt-[5px]">
                {property.type}
              </span>
            </div>

            {/* Box 3 (Left): Smart Locks Status */}
            <div
              className="bg-[#f6f7f4] rounded-[12px] pt-[12px] pb-[16px] px-[12px] flex flex-col items-center justify-center text-center"
              data-name="Background+Border"
            >
              <span className="font-cairo font-semibold text-[#73786f] text-[11px] leading-[16.5px]">
                الأقفال الذكية
              </span>
              <div className="flex items-center justify-center gap-[4px] mt-[2px]">
                <span className="font-cairo font-bold text-[#047857] text-[14px] leading-[20px]">
                  {property.smartLocksStatus}
                </span>
                <span className="size-[6px] rounded-full bg-[#10b981] shrink-0" />
              </div>
            </div>
          </div>
        </div>

        {/* Card Bottom Actions Row */}
        <div
          className="border-t border-[#e5e8e2] pt-[12.5px] mt-[20px] flex items-center justify-between gap-[12px] w-full"
          data-name="Card Bottom Actions Row"
        >
          {/* Last Updated Paragraph (RTL start) */}
          <div className="flex items-center gap-[4px] font-cairo text-[12px] leading-[16px]">
            <span className="font-medium text-[#73786f]">
              آخر تحديث للبيانات:
            </span>
            <span className="font-semibold text-[#252a24]">
              {property.lastUpdatedRelative}
            </span>
          </div>

          {/* CTA Button: View Property (RTL end) */}
          <button
            type="button"
            onClick={handleView}
            className="bg-[#4b5940] hover:bg-[#34422a] active:scale-[0.98] text-white font-cairo font-bold text-[12px] leading-[16px] px-[16px] py-[8px] rounded-[12px] flex items-center gap-[8px] transition-all cursor-pointer shadow-xs"
            data-name="Button - CTA"
          >
            <span>عرض العقار</span>
            <div className="relative size-[14px] shrink-0">
              <Image
                src="/assets/properties/arrow-left.svg"
                alt="عرض"
                width={14}
                height={14}
                className="size-full object-contain"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
