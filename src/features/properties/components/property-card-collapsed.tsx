"use client";

import Image from "next/image";
import { ImportedProperty } from "../types";

interface PropertyCardCollapsedProps {
  property: ImportedProperty;
  onTogglePropertySelect: (propertyId: string) => void;
  onToggleExpand: (propertyId: string) => void;
}

export function PropertyCardCollapsed({
  property,
  onTogglePropertySelect,
  onToggleExpand,
}: PropertyCardCollapsedProps) {
  return (
    <div
      className="bg-white flex flex-col items-start overflow-hidden rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-[#E5EAE0]/60 w-full shrink-0"
      data-name="PROPERTY CARD 2: COLLAPSED"
    >
      <div className="p-[20px] lg:p-[24px] w-full flex items-center justify-between gap-[20px] flex-wrap">
        {/* 1. Right Group (RTL): Checkbox + Image + Details */}
        <div className="flex items-center gap-[16px]">
          {/* Checkbox */}
          <button
            type="button"
            onClick={() => onTogglePropertySelect(property.id)}
            className="cursor-pointer shrink-0"
            aria-label="تحديد العقار"
          >
            {property.isSelected ? (
              <div className="size-[20px] relative">
                <Image
                  src="/assets/import-properties/72c05dc1661461b855e19d74b694cd1d95957c7d.svg"
                  alt="Checked"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="size-[20px] rounded-[5px] border-2 border-[#DFE4DB] bg-white hover:border-[#4B5940] transition-colors" />
            )}
          </button>

          {/* Property Image Thumbnail */}
          <div className="relative size-[96px] rounded-[12px] overflow-hidden shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 bg-neutral-100">
            <Image
              src={property.imageSrc}
              alt={property.name}
              fill
              className="object-cover"
            />
            <div className="absolute bg-[rgba(246,251,241,0.9)] bottom-[4px] right-[4px] px-[6px] py-[2px] rounded-[4px] backdrop-blur-xs">
              <span className="font-cairo font-bold text-[#181D17] text-[10px] leading-[15px]">
                {property.badgeUnits}
              </span>
            </div>
          </div>

          {/* Details & Status & Chips */}
          <div className="flex flex-col gap-[6px]">
            {/* Title & Code Badge & Status */}
            <div className="flex items-center gap-[10px] flex-wrap">
              <h2 className="font-cairo font-bold text-[#181D17] text-[20px] leading-[30px]">
                {property.name}
              </h2>
              <span className="bg-[#E5EAE0] text-[#454840] font-cairo font-bold text-[11px] leading-[16px] px-[10px] py-[2px] rounded-[6px]">
                {property.code}
              </span>
              <div className="bg-[#D8E8CB] flex items-center gap-[4px] px-[10px] py-[2px] rounded-full">
                <span className="size-[6px] rounded-full bg-[#3E8A5A]" />
                <span className="font-cairo font-semibold text-[#5A6952] text-[11px] leading-[16px]">
                  {property.statusText}
                </span>
              </div>
            </div>

            {/* Chips row */}
            <div className="flex items-center gap-[16px] flex-wrap">
              {/* Location */}
              <div className="flex items-center gap-[4px]">
                <div className="w-[11px] h-[14px] relative shrink-0">
                  <Image
                    src="/assets/import-properties/d9e89dcd9c33114ac9109cde7cb8f18af16bddac.svg"
                    alt=""
                    width={11}
                    height={14}
                    className="object-contain"
                  />
                </div>
                <span className="font-cairo font-normal text-[#454840] text-[13px] leading-[20px]">
                  {property.city} · {property.district}، {property.street}
                </span>
              </div>

              {/* Units count */}
              <div className="flex items-center gap-[4px]">
                <div className="w-[14px] h-[12px] relative shrink-0">
                  <Image
                    src="/assets/import-properties/752d5b8c7a9e8685a579c7eaff2e15588554d4d7.svg"
                    alt=""
                    width={14}
                    height={12}
                    className="object-contain"
                  />
                </div>
                <span className="font-cairo font-normal text-[#454840] text-[13px] leading-[20px]">
                  {property.unitsCount} وحدة {property.unitsType}
                </span>
              </div>

              {/* Bookings count */}
              <div className="flex items-center gap-[4px]">
                <div className="w-[12px] h-[14px] relative shrink-0">
                  <Image
                    src="/assets/import-properties/69d2bacb36995cf60df1b23784b7719013cb7ada.svg"
                    alt=""
                    width={12}
                    height={14}
                    className="object-contain"
                  />
                </div>
                <span className="font-cairo font-medium text-[#34422A] text-[13px] leading-[20px]">
                  {property.importedBookingsCount} حجز مؤكد مستورد
                </span>
              </div>
            </div>

            {/* Sync Pill Checkmark */}
            <div className="pt-[4px]">
              <div className="bg-[#F1F5EB] inline-flex items-center gap-[6px] px-[12px] py-[4px] rounded-[8px]">
                <div className="size-[13px] relative shrink-0">
                  <Image
                    src="/assets/import-properties/959478acc80b318006077d52815d689c03732779.svg"
                    alt=""
                    width={13}
                    height={13}
                    className="object-contain"
                  />
                </div>
                <span className="font-cairo font-medium text-[#34422A] text-[11px] leading-[16px]">
                  24 وحدة مشمولة جاهزة للمزامنة مع التقويم والأسعار
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Left Group (RTL): Income metric + Expand button */}
        <div className="flex items-center gap-[20px]">
          {/* Expected monthly income */}
          {property.expectedMonthlyIncome && (
            <div className="flex flex-col items-start gap-[2px]">
              <span className="font-cairo font-medium text-[#454840] text-[11px] leading-[16px]">
                معدل الدخل الشهري المتوقع
              </span>
              <div className="flex items-baseline gap-[4px]">
                <span className="font-cairo font-bold text-[#34422A] text-[18px] leading-[28px]">
                  {property.expectedMonthlyIncome.toLocaleString("en-US")}
                </span>
                <span className="font-cairo font-normal text-[#454840] text-[13px] leading-[20px]">
                  ر.س
                </span>
              </div>
            </div>
          )}

          {/* Dropdown Toggle Button */}
          <button
            type="button"
            onClick={() => onToggleExpand(property.id)}
            className="bg-[#E5EAE0] hover:bg-[#DFE4DB] text-[#181D17] transition-all flex items-center gap-[6px] px-[16px] py-[8px] rounded-[12px] cursor-pointer"
          >
            <div className="w-[9px] h-[6px] relative shrink-0">
              <Image
                src="/assets/import-properties/521339bb8f77cdab76e84b1b46938f8b6d0e487a.svg"
                alt=""
                width={9}
                height={6}
                className="object-contain"
              />
            </div>
            <span className="font-cairo font-semibold text-[12px] leading-[18px]">
              عرض تفاصيل الوحدات المستوردة (24 وحدة)
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
