"use client";

import Image from "next/image";
import { UseFormReturn } from "react-hook-form";
import type { AddUnitInput, UnitType } from "../schemas/add-unit-schema";

interface UnitPrimarySpecsProps {
  form: UseFormReturn<AddUnitInput>;
}

const UNIT_TYPES: {
  id: UnitType;
  title: string;
  subtitle: string;
  iconPath: string;
}[] = [
  {
    id: "studio",
    title: "استوديو",
    subtitle: "مساحة مفتوحة",
    iconPath: "/assets/units/add/a853b.svg",
  },
  {
    id: "private_apartment",
    title: "شقة خاصة",
    subtitle: "غرفة معيشة ونوم",
    iconPath: "/assets/units/add/2d70d.svg",
  },
  {
    id: "single_room",
    title: "غرفة فردية",
    subtitle: "جناح ضيافة",
    iconPath: "/assets/units/add/2a889.svg",
  },
  {
    id: "duplex_other",
    title: "أخرى / دوبلكس",
    subtitle: "تصميم خاص",
    iconPath: "/assets/units/add/85ef8.svg",
  },
];

const FLOOR_OPTIONS = [
  "الدور الأرضي",
  "الدور الأول",
  "الدور الثاني",
  "الدور الثالث",
  "الدور الرابع",
  "الدور الخامس فأعلى",
  "بنتهاوس / السطح",
];

export function UnitPrimarySpecs({ form }: UnitPrimarySpecsProps) {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = form;
  const currentUnitType = watch("unitType");

  return (
    <div
      className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-[24px] flex flex-col gap-[20px] w-full"
      data-node-id="1:4739"
      data-name="Section 1"
      dir="rtl"
    >
      {/* Section Header */}
      <div className="flex items-center gap-[12px]">
        <div
          className="bg-[#ebefe6] rounded-[8px] size-[32px] flex items-center justify-center shrink-0"
          data-node-id="1:4745"
        >
          <div className="relative size-[15px]">
            <Image
              src="/assets/units/add/50ac6.svg"
              alt="Specs"
              width={15}
              height={15}
              className="size-full object-contain"
            />
          </div>
        </div>
        <h3
          className="font-cairo font-semibold text-[#252820] text-[18px] leading-[28px]"
          data-node-id="1:4743"
        >
          البيانات الأساسية للوحدة
        </h3>
      </div>

      {/* Row 1: Floor and Unit Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
        {/* Floor */}
        <div className="flex flex-col gap-[4px]" data-node-id="1:4749">
          <label className="flex items-center gap-[2px] font-cairo font-semibold text-[12px] text-[#181d17]">
            <span className="text-[#ba1a1a]">*</span>
            <span>الدور / الطابق</span>
          </label>
          <div className="relative">
            <select
              {...register("floor")}
              className="w-full bg-[#f1f5eb] h-[44px] rounded-[12px] pr-[16px] pl-[36px] font-cairo font-normal text-[#181d17] text-[14px] leading-[22px] appearance-none outline-none focus:ring-1 focus:ring-[#34422a] transition-all cursor-pointer"
            >
              {FLOOR_OPTIONS.map((floor) => (
                <option key={floor} value={floor}>
                  {floor}
                </option>
              ))}
            </select>
            <div className="absolute left-[16px] top-1/2 -translate-y-1/2 pointer-events-none w-[9px] h-[5.55px]">
              <Image
                src="/assets/units/add/6059c.svg"
                alt="chevron"
                width={9}
                height={6}
                className="size-full object-contain"
              />
            </div>
          </div>
          {errors.floor && (
            <span className="text-[#ba1a1a] text-xs font-medium">
              {errors.floor.message}
            </span>
          )}
        </div>

        {/* Unit Number */}
        <div className="flex flex-col gap-[4px]" data-node-id="1:4758">
          <label className="flex items-center gap-[2px] font-cairo font-semibold text-[12px] text-[#181d17]">
            <span className="text-[#ba1a1a]">*</span>
            <span>رقم الوحدة</span>
          </label>
          <div className="relative">
            <input
              type="text"
              {...register("unitNumber")}
              placeholder="الوحدة 204"
              className="w-full bg-[#f1f5eb] h-[44px] rounded-[12px] pr-[16px] pl-[36px] font-cairo font-normal text-[#181d17] text-[14px] outline-none focus:ring-1 focus:ring-[#34422a] transition-all"
            />
            <div className="absolute left-[14px] top-1/2 -translate-y-1/2 pointer-events-none w-[15px] h-[13.3px]">
              <Image
                src="/assets/units/add/a9a85.svg"
                alt="unit"
                width={15}
                height={14}
                className="size-full object-contain"
              />
            </div>
          </div>
          {errors.unitNumber && (
            <span className="text-[#ba1a1a] text-xs font-medium">
              {errors.unitNumber.message}
            </span>
          )}
        </div>
      </div>

      {/* Row 2: Unit Type Cards */}
      <div className="flex flex-col gap-[8px]" data-node-id="1:4767">
        <label className="flex items-center gap-[2px] font-cairo font-semibold text-[12px] text-[#181d17]">
          <span className="text-[#ba1a1a]">*</span>
          <span>نوع وتصميم الوحدة</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-[8px]">
          {UNIT_TYPES.map((type) => {
            const isSelected = currentUnitType === type.id;
            return (
              <button
                key={type.id}
                type="button"
                onClick={() =>
                  setValue("unitType", type.id, { shouldValidate: true })
                }
                className={`relative flex flex-col items-center justify-center h-[86px] p-[16px] rounded-[12px] transition-all duration-150 cursor-pointer text-center ${
                  isSelected
                    ? "bg-[#d8e8cb] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
                    : "bg-[#f1f5eb] hover:bg-[#ebefe6]"
                }`}
                data-name="Label"
              >
                {/* Active check badge */}
                {isSelected && (
                  <div
                    className="absolute -top-[4px] -right-[4px] bg-[#34422a] rounded-full size-[16px] flex items-center justify-center shadow-sm"
                    data-node-id="1:4796"
                  >
                    <div className="relative w-[8.15px] h-[6px]">
                      <Image
                        src="/assets/units/add/e4a1e.svg"
                        alt="check"
                        width={8}
                        height={6}
                        className="size-full object-contain"
                      />
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className="mb-[4px] flex items-center justify-center h-[20px]">
                  <div className="relative size-[18px]">
                    <Image
                      src={type.iconPath}
                      alt={type.title}
                      width={18}
                      height={18}
                      className="size-full object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
                <span
                  className={`font-cairo text-[14px] leading-[20px] ${
                    isSelected
                      ? "font-bold text-[#34422a]"
                      : "font-semibold text-[#181d17]"
                  }`}
                >
                  {type.title}
                </span>

                {/* Subtitle */}
                <span
                  className={`font-cairo text-[11px] leading-[16px] ${
                    isSelected
                      ? "font-medium text-[#54624c]"
                      : "font-medium text-[#75786f]"
                  }`}
                >
                  {type.subtitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
