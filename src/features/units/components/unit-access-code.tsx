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
    <div
      className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-[24px] flex flex-col gap-[16px] w-full"
      data-node-id="1:4947"
      data-name="Section 5: إعداد كود الدخول والأقفال الذكية (Access Code Settings)"
      dir="rtl"
    >
      {/* Section Header */}
      <div className="flex items-center gap-[8px] pb-[8px]">
        <div
          className="bg-[#d8e8cb] rounded-[8px] size-[32px] flex items-center justify-center shrink-0"
          data-node-id="1:4954"
        >
          <div className="relative w-[16.67px] h-[13.33px]">
            <Image
              src="/assets/units/add/85375.svg"
              alt="Access Code"
              width={17}
              height={14}
              className="size-full object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h3
            className="font-cairo font-semibold text-[#181d17] text-[18px] leading-[28px]"
            data-node-id="1:4951"
          >
            إعداد كود الدخول
          </h3>
          <span
            className="font-cairo font-medium text-[#75786f] text-[11px] leading-[16px]"
            data-node-id="1:4953"
          >
            تزامن الباب الذكي وأقفال الأمان
          </span>
        </div>
      </div>

      {/* Mode Selection Cards */}
      <div className="flex flex-col gap-[8px]" data-node-id="1:4958">
        {/* Auto code card */}
        <div
          onClick={() =>
            setValue("accessCodeMode", "auto", { shouldValidate: true })
          }
          className={`flex items-start gap-[8px] p-[12px] rounded-[12px] cursor-pointer transition-all duration-150 ${
            accessCodeMode === "auto"
              ? "bg-[#d8e8cb] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
              : "bg-[#f1f5eb] hover:bg-[#ebefe6]"
          }`}
          data-node-id="1:4959"
        >
          <div className="pt-[4px] shrink-0">
            {accessCodeMode === "auto" ? (
              <div className="bg-white border border-[#34422a] rounded-full size-[13px] flex items-center justify-center p-[2.6px]">
                <div className="bg-[#34422a] rounded-full size-full" />
              </div>
            ) : (
              <div className="bg-white border border-[#767676] rounded-full size-[13px]" />
            )}
          </div>

          <div className="flex flex-col gap-[2px]">
            <span
              className={`font-cairo text-[14px] leading-[20px] ${
                accessCodeMode === "auto"
                  ? "font-bold text-[#34422a]"
                  : "font-semibold text-[#181d17]"
              }`}
            >
              إنشاء وتوليد تلقائي
            </span>
            <span
              className={`font-cairo font-normal text-[13px] leading-[20px] ${
                accessCodeMode === "auto" ? "text-[#54624c]" : "text-[#75786f]"
              }`}
            >
              يتغير كود القفل آلياً مع كل حجز جديد ويرسل للمستأجر عبر واتساب ورسالة SMS.
            </span>
          </div>
        </div>

        {/* Manual code card */}
        <div
          onClick={() =>
            setValue("accessCodeMode", "manual", { shouldValidate: true })
          }
          className={`flex items-start gap-[8px] p-[12px] rounded-[12px] cursor-pointer transition-all duration-150 ${
            accessCodeMode === "manual"
              ? "bg-[#d8e8cb] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
              : "bg-[#f1f5eb] hover:bg-[#ebefe6]"
          }`}
          data-node-id="1:4967"
        >
          <div className="pt-[4px] shrink-0">
            {accessCodeMode === "manual" ? (
              <div className="bg-white border border-[#34422a] rounded-full size-[13px] flex items-center justify-center p-[2.6px]">
                <div className="bg-[#34422a] rounded-full size-full" />
              </div>
            ) : (
              <div className="bg-white border border-[#767676] rounded-full size-[13px]" />
            )}
          </div>

          <div className="flex flex-col gap-[2px]">
            <span
              className={`font-cairo text-[14px] leading-[20px] ${
                accessCodeMode === "manual"
                  ? "font-bold text-[#34422a]"
                  : "font-semibold text-[#181d17]"
              }`}
            >
              إدخال يدوي مباشر
            </span>
            <span
              className={`font-cairo font-normal text-[13px] leading-[20px] ${
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
        <div
          className="flex flex-col gap-[4px] pt-[4px]"
          data-node-id="1:4977"
        >
          <div className="flex items-center justify-between">
            <span
              className="font-cairo font-normal text-[#34422a] text-[10px] leading-[16px]"
              data-node-id="1:4980"
            >
              متطابق مع القفل
            </span>
            <label
              className="font-cairo font-semibold text-[#181d17] text-[12px] leading-[18px]"
              data-node-id="1:4982"
            >
              كود الدخول المعتمد للوحدة
            </label>
          </div>

          <div className="bg-[#f1f5eb] h-[44px] rounded-[12px] pr-[44px] pl-[40px] py-[12px] flex items-center justify-between relative">
            {/* Keypad icon on right */}
            <div
              className="absolute right-[12px] top-1/2 -translate-y-1/2 size-[18px] pointer-events-none"
              data-node-id="1:4987"
            >
              <Image
                src="/assets/units/add/a19cc.svg"
                alt="lock"
                width={18}
                height={10}
                className="size-full object-contain"
              />
            </div>

            {/* Code input */}
            <input
              type="text"
              {...register("accessCode")}
              placeholder="48201#"
              className="w-full bg-transparent text-right font-cairo font-bold text-[18px] text-[#34422a] tracking-[1.8px] outline-none"
              data-node-id="1:4986"
            />

            {/* Copy button on left */}
            <button
              type="button"
              onClick={handleCopyCode}
              className="absolute left-[12px] top-1/2 -translate-y-1/2 p-[4px] hover:opacity-75 active:scale-95 transition-all cursor-pointer"
              title="نسخ الكود"
              data-node-id="1:4989"
            >
              <div className="relative w-[18.33px] h-[12.5px]">
                <Image
                  src="/assets/units/add/075c7.svg"
                  alt="copy"
                  width={18}
                  height={13}
                  className="size-full object-contain"
                />
              </div>
            </button>
          </div>

          <p
            className="font-cairo font-medium text-[#75786f] text-[11px] leading-[17.88px]"
            data-node-id="1:4994"
          >
            الكود الرقمي المبرمج على القفل الذكي للباب الرئيسي للوحدة. يجب تفعيله في لوحة التحكم الخاصة بنظام إغلاق الأبواب.
          </p>
        </div>
      )}

      {/* Lock Synchronization Status Indicator */}
      <div
        className="bg-[#f1f5eb] rounded-[12px] pl-[16px] pr-[12px] py-[12px] flex items-center gap-[8px]"
        data-node-id="1:4995"
      >
        <div className="relative w-[16px] h-[18.33px] shrink-0" data-node-id="1:5001">
          <Image
            src="/assets/units/add/08051.svg"
            alt="gateway"
            width={16}
            height={18}
            className="size-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span
            className="font-cairo font-semibold text-[#181d17] text-[11px] leading-[16px]"
            data-node-id="1:4998"
          >
            بوابة الأقفال: نشطة ومتصلة
          </span>
          <span
            className="font-cairo font-medium text-[#75786f] text-[11px] leading-[16px]"
            data-node-id="1:5000"
          >
            Tuya / Zigbee Gateway v2.4
          </span>
        </div>
      </div>
    </div>
  );
}
