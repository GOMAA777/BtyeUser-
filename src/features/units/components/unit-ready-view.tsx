"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { showToast } from "@/lib/toast";

export function UnitReadyView() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("583921");
    setCopied(true);
    showToast.success("تم نسخ كود الدخول الذكي (583921) إلى الحافظة");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="min-h-full w-full bg-[#f1f5eb] flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8"
      data-node-id="1:5119"
      data-name="تمت إضافة الوحدة"
      dir="rtl"
    >
      <div className="w-full max-w-[672px] flex flex-col items-center">
        {/* Visual Halo & Celebration Icon */}
        <div
          className="relative flex items-center justify-center mb-6"
          data-node-id="1:5150"
          data-name="Visual Halo & Animated Celebration Icon"
        >
          {/* Ambient Glow */}
          <div
            className="absolute bg-[rgba(216,232,203,0.5)] blur-[12px] rounded-full size-[112px]"
            data-node-id="1:5151"
            data-name="Overlay+Blur"
          />

          {/* Outer circle */}
          <div
            className="bg-[#d8e8cb] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-full shrink-0 size-[80px]"
            data-node-id="1:5152"
            data-name="Background+Shadow"
          >
            {/* Inner Dark Green circle */}
            <div
              className="bg-[#34422a] flex items-center justify-center relative rounded-full shrink-0 size-[56px]"
              data-node-id="1:5153"
              data-name="Background"
            >
              <div className="h-[16px] relative shrink-0 w-[30.7px]">
                <Image
                  src="/assets/units/added/12734.svg"
                  alt="celebration"
                  width={31}
                  height={16}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Verification Badge top-left in RTL */}
          <div
            className="absolute bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center p-1 rounded-full -top-1 -right-1 shadow-sm"
            data-node-id="1:5156"
            data-name="Background+Shadow"
          >
            <div className="relative size-[16.7px]">
              <Image
                src="/assets/units/added/c64c2.svg"
                alt="check"
                width={17}
                height={17}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Title & Operational Subtitle */}
        <div
          className="flex flex-col items-center text-center gap-1 mb-6"
          data-node-id="1:5124"
          data-name="Main Title & Operational Subtitle"
        >
          {/* Badge: جاهزة للتأجير الفوري */}
          <div
            className="bg-[#d8e8cb] flex gap-1.5 items-center px-3 py-1 rounded-full shrink-0 mb-1"
            data-node-id="1:5126"
            data-name="Background"
          >
            <span className="font-semibold text-[#3d4b36] text-[11px] leading-[16px]">
              جاهزة للتأجير الفوري
            </span>
            <div
              className="bg-[#34422a] rounded-full shrink-0 size-2"
              data-node-id="1:5129"
            />
          </div>

          {/* Heading */}
          <h1
            className="font-bold text-[#181d17] text-[30px] leading-[42px] tracking-[-0.75px]"
            data-node-id="1:5130"
          >
            تمت إضافة الوحدة
          </h1>

          {/* Subtitle */}
          <p
            className="font-normal text-[#75786f] text-[16px] leading-[26px] max-w-[448px]"
            data-node-id="1:5132"
          >
            تمت إضافة الوحدة 101 إلى عمارة النخيل بنجاح وجاهزة لاستقبال النزلاء فوراً.
          </p>
        </div>

        {/* Structured Architectural Summary Card */}
        <div
          className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-4 items-center pb-6 rounded-[16px] w-full border border-neutral-100/60 overflow-hidden"
          data-node-id="1:5160"
          data-name="Structured Architectural Summary Card"
        >
          {/* Card Header Profile */}
          <div
            className="bg-[rgba(241,245,235,0.4)] flex items-center justify-between p-6 pb-4 w-full border-b border-[#ebefe6]/60"
            data-node-id="1:5161"
            data-name="Card Header Profile"
          >
            {/* System ID */}
            <div className="flex flex-col gap-1 items-start text-start" data-node-id="1:5162">
              <span className="font-medium text-[#75786f] text-[11px] leading-[16px]">
                معرف النظام
              </span>
              <span className="font-bold text-[#454840] text-[12px] leading-[18px]">
                #UN-9024
              </span>
            </div>

            {/* Unit Details & Icon */}
            <div className="flex gap-4 items-center" data-node-id="1:5165">
              <div className="flex flex-col items-end text-right" data-node-id="1:5166">
                <div className="flex gap-2 items-center" data-node-id="1:5167">
                  <div
                    className="bg-[#d8e8cb] flex gap-1 items-center px-2.5 py-0.5 rounded-full shrink-0"
                    data-node-id="1:5168"
                  >
                    <span className="font-semibold text-[#121f0d] text-[11px] leading-[16px]">
                      جاهز
                    </span>
                    <div className="bg-[#34422a] rounded-full shrink-0 size-1.5" />
                  </div>
                  <h3 className="font-bold text-[#181d17] text-[18px] leading-[28px]">
                    الوحدة 101
                  </h3>
                </div>
                <p className="font-normal text-[#75786f] text-[13px] leading-[20px] mt-0.5">
                  عمارة النخيل • الرياض
                </p>
              </div>

              {/* Unit building avatar */}
              <div
                className="bg-[#ebefe6] flex items-center justify-center rounded-[12px] shrink-0 size-12"
                data-node-id="1:5176"
              >
                <div className="relative size-[19.5px]">
                  <Image
                    src="/assets/units/added/bf40f.svg"
                    alt="building"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Compact 2x2 Specifications Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 w-full"
            data-node-id="1:5179"
            data-name="Compact 2x2 Specifications Grid"
          >
            {/* Spec 1: Unit Type */}
            <div
              className="bg-[rgba(241,245,235,0.7)] flex flex-col gap-1 p-2.5 rounded-[12px]"
              data-node-id="1:5180"
              data-name="Spec 1"
            >
              <span className="font-medium text-[#75786f] text-[11px] leading-[16px] text-right">
                نوع الوحدة
              </span>
              <div className="flex gap-2 items-center justify-end">
                <span className="font-semibold text-[#181d17] text-[18px] leading-[28px] text-right">
                  استوديو فندقي
                </span>
                <div className="h-[11px] w-[15px] relative shrink-0">
                  <Image
                    src="/assets/units/added/f2cd9.svg"
                    alt="type"
                    width={15}
                    height={11}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Spec 2: Floor & Orientation */}
            <div
              className="bg-[rgba(241,245,235,0.7)] flex flex-col gap-1 p-2.5 rounded-[12px]"
              data-node-id="1:5188"
              data-name="Spec 2"
            >
              <span className="font-medium text-[#75786f] text-[11px] leading-[16px] text-right">
                الدور والاتجاه
              </span>
              <div className="flex gap-2 items-center justify-end">
                <span className="font-semibold text-[#181d17] text-[18px] leading-[28px] text-right">
                  الدور الأول • واجهة
                </span>
                <div className="h-[15px] w-[14px] relative shrink-0">
                  <Image
                    src="/assets/units/added/e1b77.svg"
                    alt="floor"
                    width={14}
                    height={15}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Spec 3: Default Nightly Price */}
            <div
              className="bg-[rgba(241,245,235,0.7)] flex flex-col gap-1 p-2.5 rounded-[12px]"
              data-node-id="1:5196"
              data-name="Spec 3"
            >
              <span className="font-medium text-[#75786f] text-[11px] leading-[16px] text-right">
                السعر الافتراضي / الليلة
              </span>
              <div className="flex items-baseline justify-end gap-1.5">
                <span className="font-bold text-[#34422a] text-[30px] leading-[30px]">
                  450
                </span>
                <span className="font-semibold text-[#75786f] text-[12px] leading-[18px]">
                  ر.س / ليلة
                </span>
              </div>
            </div>

            {/* Spec 4: Smart Access Code Showcase */}
            <div
              className="bg-[rgba(216,232,203,0.4)] flex flex-col gap-1 p-2.5 rounded-[12px] overflow-hidden"
              data-node-id="1:5204"
              data-name="Spec 4: Smart Access Code Showcase"
            >
              <div className="flex items-center justify-between w-full">
                <div className="h-[14px] w-[11px] relative shrink-0">
                  <Image
                    src="/assets/units/added/a9895.svg"
                    alt="keyhole"
                    width={11}
                    height={14}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-medium text-[#3d4b36] text-[11px] leading-[16px] text-right">
                  كود الدخول الذكي للباب
                </span>
              </div>
              <div className="flex items-center justify-between w-full pt-1">
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] hover:bg-neutral-50 active:scale-95 transition-all flex gap-1 items-center px-2.5 py-1 rounded-[8px] cursor-pointer shadow-xs"
                  data-node-id="1:5212"
                >
                  <span className="font-medium text-[#181d17] text-[11px] leading-[16px]">
                    {copied ? "تم النسخ!" : "نسخ"}
                  </span>
                  <div className="h-[12px] w-[10px] relative shrink-0">
                    <Image
                      src="/assets/units/added/32d5d.svg"
                      alt="copy"
                      width={10}
                      height={12}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </button>
                <span
                  className="font-bold text-[#34422a] text-[20px] leading-[30px] tracking-[1px]"
                  data-node-id="1:5218"
                >
                  583921
                </span>
              </div>
            </div>
          </div>

          {/* Reassurance Micro-banner */}
          <div
            className="bg-[#f1f5eb] flex gap-2 items-center mx-6 p-2.5 rounded-[12px] w-[calc(100%-48px)] justify-end"
            data-node-id="1:5219"
            data-name="Reassurance Micro-banner"
          >
            <p className="font-normal text-[#454840] text-[13px] leading-[20px] text-right">
              تم ربط القفل الذكي بنجاح وجدولة رسائل الترحيب التلقائية عبر واتساب للنزلاء القادمين.
            </p>
            <div className="relative size-[17px] shrink-0">
              <Image
                src="/assets/units/added/18050.svg"
                alt="whatsapp"
                width={17}
                height={17}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Action Command Center Buttons */}
        <div
          className="flex flex-col-reverse sm:flex-row items-center justify-center gap-4 w-full mt-6"
          data-node-id="1:5133"
          data-name="Action Command Center (Buttons)"
        >
          {/* Button - Tertiary: Return to Inventory List */}
          <Link
            href="/units"
            className="flex gap-1.5 h-[44px] items-center justify-center px-4 rounded-[12px] text-[#75786f] hover:text-[#181d17] hover:bg-neutral-100 transition-colors"
            data-node-id="1:5134"
            data-name="Button - Tertiary: Return to Inventory List"
          >
            <span className="font-semibold text-[14px] leading-[20px]">
              العودة إلى قائمة الوحدات
            </span>
            <div className="h-[12px] w-[14px] relative shrink-0">
              <Image
                src="/assets/units/added/198e0.svg"
                alt="back"
                width={14}
                height={12}
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Button - Secondary: Create Another Unit */}
          <Link
            href="/properties/new/unit"
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] hover:bg-neutral-50 active:scale-98 transition-all flex gap-2 h-[44px] items-center justify-center px-6 rounded-[12px] border border-neutral-100 shadow-xs"
            data-node-id="1:5139"
            data-name="Button - Secondary: Create Another Unit"
          >
            <span className="font-semibold text-[#181d17] text-[14px] leading-[20px]">
              إضافة وحدة أخرى
            </span>
            <div className="relative size-[11px] shrink-0">
              <Image
                src="/assets/units/added/d4a42.svg"
                alt="plus"
                width={11}
                height={11}
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Button - Primary: View Unit Details */}
          <Link
            href="/units/details"
            className="bg-[#34422a] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] hover:bg-[#283420] active:scale-98 transition-all flex gap-2 h-[44px] items-center justify-center min-w-[150px] px-6 rounded-[12px] shadow-sm text-white"
            data-node-id="1:5144"
            data-name="Button - Primary: View Unit Details"
          >
            <div className="relative size-[12px] shrink-0">
              <Image
                src="/assets/units/added/180c0.svg"
                alt="eye"
                width={12}
                height={12}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-semibold text-[14px] leading-[20px] text-white">
              عرض الوحدة
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
