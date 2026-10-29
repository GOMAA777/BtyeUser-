"use client";

import Image from "next/image";
import Link from "next/link";
import { PropertyReadyStepper } from "./property-ready-stepper";
import { PropertyReadyCard } from "./property-ready-card";

export function PropertyReadyView() {
  return (
    <div
      className="w-full min-h-screen bg-[#f1f5eb] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center"
      data-node-id="1:2819"
      data-name="Main"
    >
      <div className="w-full max-w-[640px] flex flex-col items-center gap-7">
        {/* 1. Progress Stepper */}
        <PropertyReadyStepper />

        {/* 2. Celebration Emblem */}
        <div className="relative flex items-center justify-center size-24 pt-2">
          {/* Outer ring */}
          <div className="bg-[#d8e8cb]/60 rounded-full size-24 flex items-center justify-center shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)] relative">
            {/* Inner dark circle */}
            <div className="bg-[#34422a] rounded-full size-16 flex items-center justify-center shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
              <div className="relative w-[28.3px] h-[22.7px]">
                <Image
                  src="/assets/properties/ready/59818bbf3f2c5e137c6d14b7af14f71a4e4c47a1.svg"
                  alt="emblem"
                  width={28}
                  height={23}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Check badge on top-right */}
            <div className="absolute -top-1 -right-1 bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-full size-6 flex items-center justify-center shadow-sm">
              <div className="relative w-[14.7px] h-[14px]">
                <Image
                  src="/assets/properties/ready/ca63bd874b0ae716ff200647e2e530f19907734d.svg"
                  alt="verified"
                  width={15}
                  height={14}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3. Heading & Greeting Content */}
        <div className="flex flex-col items-center text-center gap-2 max-w-[480px]">
          {/* Ready pill */}
          <div className="bg-[#d8e8cb] rounded-full px-2.5 py-0.5 flex items-center gap-1.5 shrink-0">
            <span className="font-semibold text-[#121f0d] text-[11px] leading-tight">
              جاهز للتشغيل والجدولة الفورية
            </span>
            <div className="bg-[#34422a] rounded-full size-1.5 shrink-0" />
          </div>

          {/* Heading 1 */}
          <h1 className="font-bold text-[#181d17] text-3xl sm:text-4xl tracking-[-0.9px] leading-tight">
            عقارك جاهز
          </h1>

          {/* Subtitle */}
          <p className="font-normal text-[#454840] text-sm sm:text-base leading-relaxed">
            تم إنشاء <span className="font-semibold text-[#181d17]">عمارة النخيل</span> وإضافة جميع وحداتها بنجاح إلى منصة ابراج لإدارة وتشغيل العقارات.
          </p>
        </div>

        {/* 4. Property Summary Card */}
        <PropertyReadyCard />

        {/* 5. Action Buttons */}
        <div className="w-full max-w-[576px] flex flex-col-reverse sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-1">
          {/* Secondary: الانتقال إلى الرئيسية */}
          <Link
            href="/dashboard"
            className="w-full sm:flex-1 bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] hover:bg-neutral-50 active:scale-[0.98] transition-all duration-150 h-[50px] px-6 rounded-[12px] flex items-center justify-center gap-2 cursor-pointer border border-neutral-100"
          >
            <span className="font-semibold text-[#181d17] text-sm leading-none">
              الانتقال إلى الرئيسية
            </span>
            <div className="relative size-[15px] shrink-0">
              <Image
                src="/assets/properties/ready/a5e25ad60a8c9258e93c94f7a8df431104a5b672.svg"
                alt="home"
                width={15}
                height={15}
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Primary: عرض العقار */}
          <Link
            href="/properties/details"
            className="w-full sm:flex-1 bg-[#34422a] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] hover:bg-[#283420] active:scale-[0.98] transition-all duration-150 h-[50px] px-6 rounded-[12px] flex items-center justify-center gap-2 cursor-pointer shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] text-white"
          >
            <div className="relative w-[13.3px] h-[10px] shrink-0">
              <Image
                src="/assets/properties/ready/be0a82bbe302c495fa952fb97d41c8d068634970.svg"
                alt="arrow"
                width={13}
                height={10}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-semibold text-white text-sm leading-none">
              عرض العقار
            </span>
          </Link>
        </div>

        {/* 6. Legal / Verification Trust Line */}
        <div className="flex items-center gap-2 text-center pt-2">
          <span className="font-medium text-[#454840] text-[11px] leading-tight">
            تم تسجيل وتوثيق صك الملكية برقم اعتماد معتمد لدى الهيئة العامة للعقار
          </span>
          <div className="relative w-3 h-[15px] shrink-0">
            <Image
              src="/assets/properties/ready/e4b2c328ed52541e72c9c84bff2525206f8e1bda.svg"
              alt="trust"
              width={12}
              height={15}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
