"use client";

import Link from "next/link";
import Image from "next/image";

export function AddUnitHeroBar() {
  return (
    <div
      className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 lg:px-[32px] lg:py-[24px] flex flex-col md:flex-row md:items-center justify-between gap-4 w-full"
      data-node-id="1:4687"
      data-name="Section - TOP HERO GREETING BAR"
      dir="rtl"
    >
      {/* Right side in RTL: Title & Subtitle */}
      <div className="flex flex-col items-start gap-1">
        <h1
          className="font-cairo font-bold text-[#181d17] text-[24px] leading-[34px]"
          data-node-id="1:4692"
          data-name="Heading 1"
        >
          إضافة وحدة
        </h1>
        <p
          className="font-cairo font-normal text-[#75786f] text-[14px] leading-[22px] max-w-2xl"
          data-node-id="1:4695"
        >
          أدخل مواصفات وتفاصيل الوحدة لتفعيل إدارتها وتخصيص التسعير الموسمي وربط الأقفال الذكية وأنظمة الجدولة.
        </p>
      </div>

      {/* Left side in RTL: Back Link */}
      <Link
        href="/units"
        className="bg-[#f1f5eb] hover:bg-[#e4ebd9] active:scale-[0.98] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-all h-[38px] px-[16px] py-[4px] rounded-[12px] flex items-center gap-[6px] shrink-0 self-start md:self-center"
        data-node-id="1:4696"
        data-name="Link"
      >
        <span
          className="font-cairo font-semibold text-[#181d17] text-[12px] leading-[18px] whitespace-nowrap"
          data-node-id="1:4700"
        >
          العودة إلى الوحدات
        </span>
        <div className="relative size-[12px] shrink-0" data-node-id="1:4697">
          <Image
            src="/assets/units/add/a75e9.svg"
            alt="العودة"
            width={12}
            height={12}
            className="size-full object-contain"
          />
        </div>
      </Link>
    </div>
  );
}
