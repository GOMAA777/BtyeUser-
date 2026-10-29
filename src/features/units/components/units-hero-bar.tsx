"use client";

import Link from "next/link";
import Image from "next/image";

interface UnitsHeroBarProps {
  totalUnitsCount: number;
}

export function UnitsHeroBar({ totalUnitsCount }: UnitsHeroBarProps) {
  return (
    <div
      className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 lg:px-[32px] lg:py-[24px] flex flex-col md:flex-row md:items-center justify-between gap-4 w-full"
      data-node-id="1:4315"
      data-name="Section - TOP HERO GREETING BAR"
      dir="rtl"
    >
      {/* Right side in RTL: Title & Subtitle */}
      <div className="flex flex-col items-start gap-1">
        <div className="flex items-center gap-3">
          <h1
            className="font-cairo font-bold text-[#181d17] text-[24px] leading-[34px]"
            data-node-id="1:4327"
          >
            الوحدات
          </h1>
          <div
            className="bg-[#eaf1e8] flex items-center justify-center px-[12px] py-[3px] rounded-full shrink-0"
            data-node-id="1:4331"
            data-name="Counter Badge"
          >
            <span
              className="font-cairo font-semibold text-[#4b5940] text-[12px] leading-[16px]"
              data-node-id="1:4332"
            >
              {totalUnitsCount} وحدات مسجلة
            </span>
          </div>
        </div>
        <p
          className="font-cairo font-normal text-[#454840] text-[14px] leading-[22px]"
          data-node-id="1:4330"
        >
          إدارة وحدات عقاراتك ومتابعة حالتها وجاهزيتها التشغيلية.
        </p>
      </div>

      {/* Left side in RTL: Add Unit Button */}
      <Link
        href="/units/new"
        className="bg-[#34422a] hover:bg-[#283420] active:scale-[0.98] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[38px] px-[16px] rounded-[12px] flex items-center gap-[8px] transition-all cursor-pointer shrink-0 self-start md:self-center"
        data-node-id="1:4318"
        data-name="Button"
      >
        <span
          className="font-cairo font-semibold text-white text-[12px] leading-[18px] whitespace-nowrap"
          data-node-id="1:4320"
        >
          إضافة وحدة جديدة
        </span>
        <div className="relative size-[15px] shrink-0" data-node-id="1:4321">
          <Image
            src="/assets/units/list/ad0e8.svg"
            alt="+"
            width={15}
            height={15}
            className="size-full object-contain"
          />
        </div>
      </Link>
    </div>
  );
}
