"use client";

import Image from "next/image";
import Link from "next/link";

export function AddPropertyHeroBar() {
  return (
    <div
      className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] px-[24px] lg:px-[32px] py-[20px] flex flex-col sm:flex-row sm:items-center justify-between gap-[16px] w-full min-h-[102px]"
      data-node-id="1:2044"
      data-name="Section - TOP HERO GREETING BAR"
    >
      {/* Right Side: Title, Step Badge & Subtitle */}
      <div className="flex flex-col items-start gap-[6px]" data-node-id="1:2045">
        <div className="flex items-center gap-[12px] flex-wrap" data-node-id="1:2046">
          <h1
            className="font-cairo font-bold text-[24px] leading-[34px] text-[#181d17]"
            data-node-id="1:2053"
          >
            إضافة عقار
          </h1>

          {/* Step Pill */}
          <div
            className="bg-[rgba(223,228,219,0.6)] flex items-center gap-[6px] px-[16px] py-[4px] rounded-full"
            data-node-id="1:2047"
            data-name="Overlay"
          >
            <span
              className="font-cairo font-bold text-[12px] leading-[18px] text-[#34422a]"
              data-node-id="1:2049"
            >
              الخطوة 1 من 2
            </span>
            <div
              className="bg-[#34422a] rounded-full size-[8px]"
              data-node-id="1:2050"
              data-name="Background"
            />
          </div>
        </div>

        {/* Subtitle */}
        <p
          className="font-cairo font-normal text-[14px] leading-[22px] text-[#454840]"
          data-node-id="1:2056"
        >
          أدخل بيانات العقار الأساسية للبدء.
        </p>
      </div>

      {/* Left Side: Back to Properties Link */}
      <Link
        href="/properties"
        className="bg-[#f1f5eb] hover:bg-[#e4ebd9] active:scale-[0.98] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center gap-[8px] h-[38px] px-[16px] py-[4px] rounded-[12px] text-[#181d17] font-cairo font-semibold text-[12px] leading-[18px] transition-all cursor-pointer self-start sm:self-center"
        data-node-id="1:2057"
        data-name="Link"
      >
        <span data-node-id="1:2061">العودة إلى العقارات</span>
        <div className="relative shrink-0 size-[12px] rotate-180" data-node-id="1:2058">
          <Image
            src="/assets/properties/add/back-arrow.svg"
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

