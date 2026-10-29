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
    iconPath: "/assets/units/add/5632b79c09634b127d996377d9f37405c7ee10d7.svg",
  },
  {
    id: "private_apartment",
    title: "شقة خاصة",
    subtitle: "غرفة معيشة ونوم",
    iconPath: "/assets/units/add/a38a6109dcf95034883e3caa001237b74f272b26.svg",
  },
  {
    id: "single_room",
    title: "غرفة فردية",
    subtitle: "جناح ضيافة",
    iconPath: "/assets/units/add/79f36f17f1435ec687b781d94869d7dcf1f9244d.svg",
  },
  {
    id: "duplex_other",
    title: "أخرى / دوبلكس",
    subtitle: "تصميم خاص",
    iconPath: "/assets/units/add/a95992af74c888317a3a4cbef890c118cfd71a4e.svg",
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
  const { register, watch, setValue, formState: { errors } } = form;
  const currentUnitType = watch("unitType");

  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 flex flex-col gap-6">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="bg-[#ebefe6] rounded-[8px] size-8 flex items-center justify-center shrink-0">
          <div className="relative size-[15px]">
            <Image
              src="/assets/units/add/034f1c4778c05c602786293a76115c73acb67c25.svg"
              alt="Specs"
              width={15}
              height={15}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <h3 className="font-semibold text-[#252820] text-lg leading-tight">
          البيانات الأساسية للوحدة
        </h3>
      </div>

      {/* Row 1: Floor and Unit Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Floor */}
        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-0.5 text-xs font-semibold text-[#181d17]">
            <span className="text-[#ba1a1a]">*</span>
            <span>الدور / الطابق</span>
          </label>
          <div className="relative">
            <select
              {...register("floor")}
              className="w-full bg-[#f1f5eb] h-[44px] rounded-[12px] px-4 pl-10 text-sm font-normal text-[#181d17] appearance-none outline-none focus:ring-1 focus:ring-[#34422a] transition-all cursor-pointer"
            >
              {FLOOR_OPTIONS.map((floor) => (
                <option key={floor} value={floor}>
                  {floor}
                </option>
              ))}
            </select>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none w-[9px] h-[5.5px]">
              <Image
                src="/assets/units/add/ab5b1d660986419bc00f3d4bd568d73a885aee7f.svg"
                alt="chevron"
                width={9}
                height={6}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          {errors.floor && (
            <span className="text-[#ba1a1a] text-xs font-medium">{errors.floor.message}</span>
          )}
        </div>

        {/* Unit Number */}
        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-0.5 text-xs font-semibold text-[#181d17]">
            <span className="text-[#ba1a1a]">*</span>
            <span>رقم الوحدة</span>
          </label>
          <div className="relative">
            <input
              type="text"
              {...register("unitNumber")}
              placeholder="الوحدة 204"
              className="w-full bg-[#f1f5eb] h-[44px] rounded-[12px] px-4 pl-10 text-sm font-normal text-[#181d17] outline-none focus:ring-1 focus:ring-[#34422a] transition-all"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none w-[15px] h-[13.3px]">
              <Image
                src="/assets/units/add/91aa8196f04f79a19da1f3f9f63922f2b0681fd0.svg"
                alt="unit"
                width={15}
                height={14}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          {errors.unitNumber && (
            <span className="text-[#ba1a1a] text-xs font-medium">{errors.unitNumber.message}</span>
          )}
        </div>
      </div>

      {/* Row 2: Unit Type Cards */}
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-0.5 text-xs font-semibold text-[#181d17]">
          <span className="text-[#ba1a1a]">*</span>
          <span>نوع وتصميم الوحدة</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {UNIT_TYPES.map((type) => {
            const isSelected = currentUnitType === type.id;
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => setValue("unitType", type.id, { shouldValidate: true })}
                className={`relative flex flex-col items-center justify-center h-[86px] p-3 rounded-[12px] transition-all duration-150 cursor-pointer text-center ${
                  isSelected
                    ? "bg-[#d8e8cb] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border-transparent"
                    : "bg-[#f1f5eb] hover:bg-[#ebefe6] border-transparent"
                }`}
              >
                {/* Active check badge */}
                {isSelected && (
                  <div className="absolute -top-1.5 -right-1.5 bg-[#34422a] rounded-full size-4 flex items-center justify-center shadow-sm">
                    <div className="relative w-[8.15px] h-[6px]">
                      <Image
                        src="/assets/units/add/83d1a46bccf9a05144aa56adebd6fd218b3fe36c.svg"
                        alt="check"
                        width={8}
                        height={6}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className="mb-1 flex items-center justify-center h-5">
                  <div className="relative size-4">
                    <Image
                      src={type.iconPath}
                      alt={type.title}
                      width={18}
                      height={18}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
                <span
                  className={`text-sm leading-tight ${
                    isSelected ? "font-bold text-[#34422a]" : "font-semibold text-[#181d17]"
                  }`}
                >
                  {type.title}
                </span>

                {/* Subtitle */}
                <span
                  className={`text-[11px] leading-tight mt-0.5 ${
                    isSelected ? "font-medium text-[#54624c]" : "font-medium text-[#75786f]"
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
