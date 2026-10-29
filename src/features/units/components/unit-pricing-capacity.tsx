"use client";

import Image from "next/image";
import { UseFormReturn } from "react-hook-form";
import type { AddUnitInput } from "../schemas/add-unit-schema";

interface UnitPricingCapacityProps {
  form: UseFormReturn<AddUnitInput>;
}

export function UnitPricingCapacity({ form }: UnitPricingCapacityProps) {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = form;
  const nightlyPrice = watch("nightlyPrice") || 0;
  const maxGuests = watch("maxGuests") || 1;

  // Calculate yield at 80% occupancy (30 days * 0.8 = 24 days)
  const monthlyYield = Math.round(Number(nightlyPrice) * 24);

  const incrementGuests = () => {
    if (maxGuests < 20) {
      setValue("maxGuests", maxGuests + 1, { shouldValidate: true });
    }
  };

  const decrementGuests = () => {
    if (maxGuests > 1) {
      setValue("maxGuests", maxGuests - 1, { shouldValidate: true });
    }
  };

  return (
    <div
      className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-[24px] flex flex-col gap-[20px] w-full"
      data-node-id="1:4895"
      data-name="Section 4: التسعير والسعة (Pricing & Capacity)"
      dir="rtl"
    >
      {/* Section Header */}
      <div className="flex items-center gap-[12px]">
        <div
          className="bg-[#ebefe6] rounded-[8px] size-[32px] flex items-center justify-center shrink-0"
          data-node-id="1:4900"
        >
          <div className="relative w-[18.33px] h-[13.33px]">
            <Image
              src="/assets/units/add/efdb8.svg"
              alt="Pricing"
              width={18}
              height={14}
              className="size-full object-contain"
            />
          </div>
        </div>
        <h3
          className="font-cairo font-semibold text-[#252820] text-[18px] leading-[28px]"
          data-node-id="1:4899"
        >
          التسعير والسعة
        </h3>
      </div>

      {/* Nightly Price */}
      <div className="flex flex-col gap-[4px]" data-node-id="1:4904">
        <label className="flex items-center gap-[2px] font-cairo font-semibold text-[12px] text-[#181d17]">
          <span className="text-[#ba1a1a]">*</span>
          <span>السعر الأساسي لكل ليلة</span>
        </label>
        <div
          className="bg-[#f1f5eb] h-[44px] rounded-[12px] px-[12px] flex items-center justify-between relative"
          data-node-id="1:4909"
        >
          <div
            className="bg-[#ebefe6] rounded-[6px] px-[8px] py-[4px] shrink-0"
            data-node-id="1:4916"
          >
            <span className="font-cairo font-semibold text-[#75786f] text-[12px] leading-[18px] block whitespace-nowrap">
              ر.س / ليلة
            </span>
          </div>
          <input
            type="number"
            {...register("nightlyPrice", { valueAsNumber: true })}
            placeholder="550"
            className="w-full bg-transparent text-right font-cairo font-bold text-[18px] text-[#181d17] outline-none pr-[8px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        <span
          className="font-cairo font-medium text-[11px] leading-[16px] text-[#75786f]"
          data-node-id="1:4919"
        >
          شامل رسوم الصيانة والإدارة الأساسية
        </span>
        {errors.nightlyPrice && (
          <span className="text-[#ba1a1a] text-xs font-medium">
            {errors.nightlyPrice.message}
          </span>
        )}
      </div>

      {/* Max Capacity */}
      <div className="flex flex-col gap-[4px]" data-node-id="1:4920">
        <label className="flex items-center gap-[2px] font-cairo font-semibold text-[12px] text-[#181d17]">
          <span className="text-[#ba1a1a]">*</span>
          <span>الحد الأقصى للضيوف</span>
        </label>
        <div
          className="bg-[#f1f5eb] rounded-[12px] p-[8px] flex items-center justify-between"
          data-node-id="1:4924"
        >
          {/* Plus button (increase on right in RTL) */}
          <button
            type="button"
            onClick={incrementGuests}
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[8px] size-[40px] flex items-center justify-center hover:bg-neutral-50 active:scale-95 transition-all cursor-pointer"
            title="زيادة عدد الضيوف"
            data-node-id="1:4925"
          >
            <div className="relative size-[11.67px]">
              <Image
                src="/assets/units/add/ba889.svg"
                alt="plus"
                width={12}
                height={12}
                className="size-full object-contain"
              />
            </div>
          </button>

          {/* Number and label */}
          <div className="flex items-center gap-[6px]">
            <span className="font-cairo font-semibold text-[#181d17] text-[14px] leading-[20px]">
              ضيوف
            </span>
            <span className="font-cairo font-bold text-[#34422a] text-[20px] leading-[30px] min-w-[28px] text-center">
              {maxGuests}
            </span>
          </div>

          {/* Minus button (decrease on left in RTL) */}
          <button
            type="button"
            onClick={decrementGuests}
            disabled={maxGuests <= 1}
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[8px] size-[40px] flex items-center justify-center hover:bg-neutral-50 active:scale-95 disabled:opacity-40 transition-all cursor-pointer"
            title="تقليل عدد الضيوف"
            data-node-id="1:4934"
          >
            <div className="relative w-[11.67px] h-[1.67px]">
              <Image
                src="/assets/units/add/c5ec6.svg"
                alt="minus"
                width={12}
                height={2}
                className="size-full object-contain"
              />
            </div>
          </button>
        </div>
        {errors.maxGuests && (
          <span className="text-[#ba1a1a] text-xs font-medium">
            {errors.maxGuests.message}
          </span>
        )}
      </div>

      {/* Calculated Yield Snapshot */}
      <div
        className="bg-[#ebefe6] rounded-[12px] p-[16px] flex flex-col gap-[4px]"
        data-node-id="1:4938"
        data-name="Calculated Yield Snapshot"
      >
        <div className="flex items-center justify-between w-full">
          <div className="relative w-[13.33px] h-[8px]" data-node-id="1:4940">
            <Image
              src="/assets/units/add/da714.svg"
              alt="trend"
              width={13}
              height={8}
              className="size-full object-contain"
            />
          </div>
          <span
            className="font-cairo font-medium text-[#75786f] text-[11px] leading-[16px]"
            data-node-id="1:4943"
          >
            العائد الشهري التقديري (إشغال 80%)
          </span>
        </div>
        <div className="flex items-baseline justify-end gap-[4px]">
          <span
            className="font-cairo font-bold text-[#34422a] text-[18px] leading-[28px]"
            data-node-id="1:4945"
          >
            {monthlyYield.toLocaleString("en-US")}
          </span>
          <span
            className="font-cairo font-normal text-[#181d17] text-[11px] leading-[16px]"
            data-node-id="1:4946"
          >
            ر.س / شهر
          </span>
        </div>
      </div>
    </div>
  );
}
