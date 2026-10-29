"use client";

import Image from "next/image";
import { UseFormReturn } from "react-hook-form";
import type { AddUnitInput } from "../schemas/add-unit-schema";

interface UnitPricingCapacityProps {
  form: UseFormReturn<AddUnitInput>;
}

export function UnitPricingCapacity({ form }: UnitPricingCapacityProps) {
  const { register, watch, setValue, formState: { errors } } = form;
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
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 flex flex-col gap-5">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="bg-[#ebefe6] rounded-[8px] size-8 flex items-center justify-center shrink-0">
          <div className="relative w-[18.3px] h-[13.3px]">
            <Image
              src="/assets/units/add/fd90252a7765d8e65d4180f3dde2492b0fe34c8a.svg"
              alt="Pricing"
              width={18}
              height={14}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <h3 className="font-semibold text-[#252820] text-lg leading-tight">
          التسعير والسعة
        </h3>
      </div>

      {/* Nightly Price */}
      <div className="flex flex-col gap-1.5">
        <label className="flex items-center gap-0.5 text-xs font-semibold text-[#181d17]">
          <span className="text-[#ba1a1a]">*</span>
          <span>السعر الأساسي لكل ليلة</span>
        </label>
        <div className="bg-[#f1f5eb] h-[44px] rounded-[12px] px-3 flex items-center justify-between">
          <div className="bg-[#ebefe6] rounded-[6px] px-2 py-1 shrink-0">
            <span className="text-[#75786f] text-xs font-semibold block leading-none">
              ر.س / ليلة
            </span>
          </div>
          <input
            type="number"
            {...register("nightlyPrice", { valueAsNumber: true })}
            placeholder="550"
            className="w-full bg-transparent text-right font-bold text-lg text-[#181d17] outline-none pr-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        <span className="text-[11px] font-medium text-[#75786f]">
          شامل رسوم الصيانة والإدارة الأساسية
        </span>
        {errors.nightlyPrice && (
          <span className="text-[#ba1a1a] text-xs font-medium">{errors.nightlyPrice.message}</span>
        )}
      </div>

      {/* Max Capacity */}
      <div className="flex flex-col gap-1.5">
        <label className="flex items-center gap-0.5 text-xs font-semibold text-[#181d17]">
          <span className="text-[#ba1a1a]">*</span>
          <span>الحد الأقصى للضيوف</span>
        </label>
        <div className="bg-[#f1f5eb] rounded-[12px] p-2 flex items-center justify-between">
          {/* Plus button */}
          <button
            type="button"
            onClick={incrementGuests}
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[8px] size-10 flex items-center justify-center hover:bg-neutral-50 active:scale-95 transition-all cursor-pointer"
            title="زيادة عدد الضيوف"
          >
            <div className="relative size-[11.7px]">
              <Image
                src="/assets/units/add/7d0ef2747eb4e63ee6ae0c10fa70120e2af50688.svg"
                alt="plus"
                width={12}
                height={12}
                className="w-full h-full object-contain"
              />
            </div>
          </button>

          {/* Number and label */}
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-[#181d17] text-sm">ضيوف</span>
            <span className="font-bold text-[#34422a] text-xl min-w-[24px] text-center">
              {maxGuests}
            </span>
          </div>

          {/* Minus button */}
          <button
            type="button"
            onClick={decrementGuests}
            disabled={maxGuests <= 1}
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[8px] size-10 flex items-center justify-center hover:bg-neutral-50 active:scale-95 disabled:opacity-40 transition-all cursor-pointer"
            title="تقليل عدد الضيوف"
          >
            <div className="relative w-[11.7px] h-[2px]">
              <Image
                src="/assets/units/add/7de6f21c23483b9678aa7a5d7e88621751e944d1.svg"
                alt="minus"
                width={12}
                height={2}
                className="w-full h-full object-contain"
              />
            </div>
          </button>
        </div>
        {errors.maxGuests && (
          <span className="text-[#ba1a1a] text-xs font-medium">{errors.maxGuests.message}</span>
        )}
      </div>

      {/* Calculated Yield Snapshot */}
      <div className="bg-[#ebefe6] rounded-[12px] p-4 flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <div className="relative w-[13.3px] h-[8px]">
            <Image
              src="/assets/units/add/b3a58c87eb8558cbed5d22490e6a76a215bd1fce.svg"
              alt="trend"
              width={13}
              height={8}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-medium text-[#75786f] text-[11px]">
            العائد الشهري التقديري (إشغال 80%)
          </span>
        </div>
        <div className="flex items-baseline justify-end gap-1">
          <span className="font-regular text-[#181d17] text-[11px]">ر.س / شهر</span>
          <span className="font-bold text-[#34422a] text-lg">
            {monthlyYield.toLocaleString("en-US")}
          </span>
        </div>
      </div>
    </div>
  );
}
