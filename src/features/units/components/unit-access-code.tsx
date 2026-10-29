"use client";

import Image from "next/image";
import { UseFormReturn } from "react-hook-form";
import { showToast } from "@/lib/toast";
import type { AddUnitInput } from "../schemas/add-unit-schema";

interface UnitAccessCodeProps {
  form: UseFormReturn<AddUnitInput>;
}

export function UnitAccessCode({ form }: UnitAccessCodeProps) {
  const { register, watch, setValue } = form;
  const accessCodeMode = watch("accessCodeMode");
  const accessCode = watch("accessCode") || "48201#";

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(accessCode);
      showToast.success("تم نسخ كود الدخول إلى الحافظة بنجاح");
    } catch {
      showToast.error("تعذر نسخ كود الدخول");
    }
  };

  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 flex flex-col gap-5">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="bg-[#d8e8cb] rounded-[8px] size-8 flex items-center justify-center shrink-0">
          <div className="relative w-[16.7px] h-[13.3px]">
            <Image
              src="/assets/units/add/260b07fe138a6b3ea0a25a068cc2837654c0530e.svg"
              alt="Access Code"
              width={17}
              height={14}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-[#181d17] text-lg leading-tight">
            إعداد كود الدخول
          </h3>
          <span className="font-medium text-[#75786f] text-[11px] leading-tight">
            تزامن الباب الذكي وأقفال الأمان
          </span>
        </div>
      </div>

      {/* Mode Selection Cards */}
      <div className="flex flex-col gap-2.5">
        {/* Auto code card */}
        <div
          onClick={() => setValue("accessCodeMode", "auto", { shouldValidate: true })}
          className={`flex items-start gap-2.5 p-3 rounded-[12px] cursor-pointer transition-all duration-150 ${
            accessCodeMode === "auto"
              ? "bg-[#d8e8cb] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
              : "bg-[#f1f5eb] hover:bg-[#ebefe6]"
          }`}
        >
          {/* Radio circle */}
          <div className="pt-0.5 shrink-0">
            {accessCodeMode === "auto" ? (
              <div className="bg-white border border-[#34422a] rounded-full size-[13px] flex items-center justify-center p-[2px]">
                <div className="bg-[#34422a] rounded-full size-full" />
              </div>
            ) : (
              <div className="bg-white border border-[#767676] rounded-full size-[13px]" />
            )}
          </div>

          <div className="flex flex-col gap-0.5">
            <span
              className={`text-sm leading-tight ${
                accessCodeMode === "auto"
                  ? "font-bold text-[#34422a]"
                  : "font-semibold text-[#181d17]"
              }`}
            >
              إنشاء وتوليد تلقائي
            </span>
            <span
              className={`text-[13px] leading-relaxed ${
                accessCodeMode === "auto" ? "text-[#54624c]" : "text-[#75786f]"
              }`}
            >
              يتغير كود القفل آلياً مع كل حجز جديد ويرسل للمستأجر عبر واتساب ورسالة SMS.
            </span>
          </div>
        </div>

        {/* Manual code card */}
        <div
          onClick={() => setValue("accessCodeMode", "manual", { shouldValidate: true })}
          className={`flex items-start gap-2.5 p-3 rounded-[12px] cursor-pointer transition-all duration-150 ${
            accessCodeMode === "manual"
              ? "bg-[#d8e8cb] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
              : "bg-[#f1f5eb] hover:bg-[#ebefe6]"
          }`}
        >
          {/* Radio circle */}
          <div className="pt-0.5 shrink-0">
            {accessCodeMode === "manual" ? (
              <div className="bg-white border border-[#34422a] rounded-full size-[13px] flex items-center justify-center p-[2px]">
                <div className="bg-[#34422a] rounded-full size-full" />
              </div>
            ) : (
              <div className="bg-white border border-[#767676] rounded-full size-[13px]" />
            )}
          </div>

          <div className="flex flex-col gap-0.5">
            <span
              className={`text-sm leading-tight ${
                accessCodeMode === "manual"
                  ? "font-bold text-[#34422a]"
                  : "font-semibold text-[#181d17]"
              }`}
            >
              إدخال يدوي مباشر
            </span>
            <span
              className={`text-[13px] leading-relaxed ${
                accessCodeMode === "manual" ? "text-[#54624c]" : "text-[#75786f]"
              }`}
            >
              تحديد كود دخول رقمي دائم للوحدة لبرمجته على القفل الذكي.
            </span>
          </div>
        </div>
      </div>

      {/* Manual Code Field Container */}
      {accessCodeMode === "manual" && (
        <div className="flex flex-col gap-1.5 pt-1">
          <div className="flex items-center justify-between">
            <span className="font-regular text-[#34422a] text-[10px]">
              متطابق مع القفل
            </span>
            <label className="font-semibold text-[#181d17] text-xs">
              كود الدخول المعتمد للوحدة
            </label>
          </div>

          <div className="bg-[#f1f5eb] h-[44px] rounded-[12px] px-3 flex items-center justify-between relative">
            {/* Copy button */}
            <button
              type="button"
              onClick={handleCopyCode}
              className="p-1 hover:opacity-75 active:scale-95 transition-all cursor-pointer"
              title="نسخ الكود"
            >
              <div className="relative w-[18.3px] h-[12.5px]">
                <Image
                  src="/assets/units/add/39272ae13486d359b895e94700c91843dcc4e0e8.svg"
                  alt="copy"
                  width={18}
                  height={13}
                  className="w-full h-full object-contain"
                />
              </div>
            </button>

            {/* Code input */}
            <input
              type="text"
              {...register("accessCode")}
              placeholder="48201#"
              className="w-full bg-transparent text-right font-bold text-lg text-[#34422a] tracking-[1.8px] outline-none px-2"
            />

            {/* Lock/keypad icon */}
            <div className="relative w-[18.3px] h-[10px] shrink-0">
              <Image
                src="/assets/units/add/9664b7f3d62866f09e2733d2bbe70c46c923df2c.svg"
                alt="lock"
                width={18}
                height={10}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <p className="font-medium text-[#75786f] text-[11px] leading-[17.88px]">
            الكود الرقمي المبرمج على القفل الذكي للباب الرئيسي للوحدة. يجب تفعيله في لوحة التحكم الخاصة بنظام إغلاق الأبواب.
          </p>
        </div>
      )}

      {/* Lock Synchronization Status Indicator */}
      <div className="bg-[#f1f5eb] rounded-[12px] p-3 flex items-center gap-2.5">
        <div className="relative w-[15.8px] h-[18.3px] shrink-0">
          <Image
            src="/assets/units/add/d12d72c7a30d88d7bb75ad20cadba749ac7b7a23.svg"
            alt="gateway"
            width={16}
            height={18}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-[#181d17] text-[11px] leading-tight">
            بوابة الأقفال: نشطة ومتصلة
          </span>
          <span className="font-medium text-[#75786f] text-[11px] leading-tight mt-0.5">
            Tuya / Zigbee Gateway v2.4
          </span>
        </div>
      </div>
    </div>
  );
}

