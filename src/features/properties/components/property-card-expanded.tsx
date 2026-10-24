"use client";

import Image from "next/image";
import { ImportedProperty, PropertyUnit } from "../types";

interface PropertyCardExpandedProps {
  property: ImportedProperty;
  onTogglePropertySelect: (propertyId: string) => void;
  onToggleUnitSelect: (propertyId: string, unitId: string) => void;
  onSelectAllUnits: (propertyId: string) => void;
  onDeselectAllUnits: (propertyId: string) => void;
}

export function PropertyCardExpanded({
  property,
  onTogglePropertySelect,
  onToggleUnitSelect,
  onSelectAllUnits,
  onDeselectAllUnits,
}: PropertyCardExpandedProps) {
  const selectedUnitsCount = property.units.filter((u) => u.isSelected).length;

  return (
    <div
      className="bg-white flex flex-col items-start overflow-hidden rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-[#E5EAE0]/60 w-full shrink-0"
      data-name="PROPERTY CARD 1: EXPANDED"
    >
      {/* 1. Main Card Header & Overview */}
      <div className="p-[20px] lg:p-[24px] w-full flex items-center justify-between gap-[16px] flex-wrap">
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

          {/* Property Metadata Titles & Chips */}
          <div className="flex flex-col gap-[8px]">
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
                <div className="w-[15px] h-[10px] relative shrink-0">
                  <Image
                    src="/assets/import-properties/a4ff9b9770a9bc3d7fc610923d4d1fd45e2a7f58.svg"
                    alt=""
                    width={15}
                    height={10}
                    className="object-contain"
                  />
                </div>
                <span className="font-cairo font-normal text-[#454840] text-[13px] leading-[20px]">
                  {property.unitsCount} وحدة {property.unitsType}
                </span>
              </div>

              {/* Active Bookings */}
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
                  {property.importedBookingsCount} حجوزات نشطة مستوردة
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Expanded Units Table Component */}
      <div
        className="bg-[#F1F5EB] flex flex-col gap-[16px] p-[20px] lg:p-[24px] w-full border-t border-[#DFE4DB]/50"
        data-name="Expanded Units Table Component"
      >
        {/* Table Subheader Bar */}
        <div className="bg-white flex items-center justify-between p-[8px] px-[16px] rounded-[12px] border border-[#DFE4DB]/40 shadow-xs">
          <div className="flex items-center gap-[12px]">
            <span className="font-cairo font-bold text-[#181D17] text-[12px] leading-[18px]">
              قائمة الوحدات المستوردة وبيانات التسعير:
            </span>
            <span className="font-cairo font-medium text-[#454840] text-[11px] leading-[16px]">
              محدد حالياً {selectedUnitsCount} من {property.units.length} وحدة
            </span>
          </div>

          <div className="flex items-center gap-[8px]">
            <button
              type="button"
              onClick={() => onSelectAllUnits(property.id)}
              className="font-cairo font-bold text-[#34422A] text-[11px] leading-[16px] hover:underline cursor-pointer"
            >
              تحديد جميع وحدات هذا العقار
            </button>
            <span className="text-[#C5C8BD] text-[16px]">·</span>
            <button
              type="button"
              onClick={() => onDeselectAllUnits(property.id)}
              className="font-cairo font-medium text-[#454840] text-[11px] leading-[16px] hover:text-[#181D17] cursor-pointer"
            >
              إلغاء تحديد الكل
            </button>
          </div>
        </div>

        {/* Units Data Ledger Table */}
        <div className="bg-white rounded-[12px] overflow-hidden border border-[#DFE4DB]/50 shadow-xs">
          {/* Table Header */}
          <div className="bg-[#EBEFE6] grid grid-cols-12 gap-[8px] px-[16px] py-[12px] items-center font-cairo font-bold text-[#454840] text-[12px] leading-[18px]">
            <div className="col-span-1 flex items-center justify-center">#</div>
            <div className="col-span-4 text-start">الوحدة والنوع</div>
            <div className="col-span-2 text-start">المساحة والطابق</div>
            <div className="col-span-2 text-start">السعر الأساسي / ليلة</div>
            <div className="col-span-2 text-start">الحجوزات المتزامنة</div>
            <div className="col-span-1 text-center">الحالة</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#EBEFE6]/60">
            {property.units.map((unit, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={unit.id}
                  className={`grid grid-cols-12 gap-[8px] px-[16px] py-[14px] items-center transition-colors hover:bg-neutral-50/70 ${
                    isEven ? "bg-[rgba(241,245,235,0.3)]" : "bg-white"
                  }`}
                >
                  {/* Checkbox column */}
                  <div className="col-span-1 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => onToggleUnitSelect(property.id, unit.id)}
                      className="cursor-pointer"
                      aria-label={`تحديد ${unit.name}`}
                    >
                      {unit.isSelected ? (
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
                  </div>

                  {/* Unit info & Badge */}
                  <div className="col-span-4 flex items-center gap-[12px]">
                    <div className="bg-[#E5EAE0] size-[32px] rounded-[8px] flex items-center justify-center shrink-0 font-cairo font-bold text-[#34422A] text-[11px] leading-[16px]">
                      {unit.unitNumber}
                    </div>

                    <div className="flex flex-col items-start gap-[2px]">
                      <span className="font-cairo font-bold text-[#181D17] text-[14px] leading-[20px]">
                        {unit.name}
                      </span>
                      <span className="font-cairo font-normal text-[#454840] text-[11px] leading-[16px] font-mono">
                        {unit.unitCode}
                      </span>
                    </div>
                  </div>

                  {/* Floor & Area */}
                  <div className="col-span-2 font-cairo text-[13px] leading-[20px]">
                    <span className="font-normal text-[#454840]">{unit.floor} · </span>
                    <span className="font-bold text-[#181D17]">{unit.area} م²</span>
                  </div>

                  {/* Price */}
                  <div className="col-span-2 font-cairo leading-[20px] flex items-baseline gap-[4px]">
                    <span className="font-bold text-[#181D17] text-[14px]">{unit.pricePerNight}</span>
                    <span className="font-normal text-[#454840] text-[11px]">ر.س</span>
                  </div>

                  {/* Synchronized Bookings */}
                  <div className="col-span-2 flex items-center gap-[6px]">
                    <div className="w-[12px] h-[14px] relative shrink-0">
                      <Image
                        src={
                          unit.bookingsCount > 0
                            ? "/assets/import-properties/bb43444869260c3389b6435efcd50fcd88f94bd2.svg"
                            : "/assets/import-properties/9c24ba81cadaade0c1579c006f11123d97c6dfe0.svg"
                        }
                        alt=""
                        width={12}
                        height={14}
                        className="object-contain"
                      />
                    </div>
                    <span
                      className={`font-cairo text-[13px] leading-[20px] ${
                        unit.bookingsCount > 0
                          ? "font-medium text-[#34422A]"
                          : "font-normal text-[#454840]"
                      }`}
                    >
                      {unit.bookingsStatusText}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="col-span-1 flex items-center justify-center">
                    {unit.status === "synced" ? (
                      <span className="bg-[#D8E8CB] text-[#5A6952] font-cairo font-semibold text-[11px] leading-[16px] px-[8px] py-[2px] rounded-full whitespace-nowrap">
                        {unit.statusText}
                      </span>
                    ) : (
                      <span className="bg-[rgba(62,138,90,0.15)] text-[#3E8A5A] font-cairo font-semibold text-[11px] leading-[16px] px-[8px] py-[2px] rounded-full whitespace-nowrap">
                        {unit.statusText}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* More Units Expand Bar */}
          <div className="bg-white flex items-center justify-between px-[16px] py-[12px] border-t border-[#EBEFE6]">
            <div className="flex items-center gap-[6px]">
              <div className="size-[15px] relative shrink-0">
                <Image
                  src="/assets/import-properties/55ecb641bf14ab32e4ce23d3a92282f43a2a9ded.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="object-contain"
                />
              </div>
              <span className="font-cairo font-medium text-[#34422A] text-[13px] leading-[20px]">
                8 وحدات إضافية محددة وجاهزة للترحيل المباشر
              </span>
            </div>

            <button
              type="button"
              className="font-cairo font-semibold text-[#181D17] text-[11px] leading-[16px] hover:underline cursor-pointer"
            >
              عرض باقي الوحدات بالتفصيل (5 - 12)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
