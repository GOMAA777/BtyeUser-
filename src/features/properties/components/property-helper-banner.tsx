"use client";

import Image from "next/image";
import { showToast } from "@/lib/toast";

export function PropertyHelperBanner() {
  const handleOpenGuide = () => {
    showToast.info("دليل إعداد العقارات", "دليل إعداد العقارات والربط مع الأقفال الذكية وقنوات الحجز السحابية.");
  };

  return (
    <div
      className="bg-[rgba(234,241,232,0.7)] border border-[#d0dfcd] rounded-[16px] p-[20px] lg:p-[21px] flex flex-col md:flex-row items-start md:items-center justify-between gap-[16px] w-full"
      data-node-id="1:1759"
      data-name="Quick Helper / Integration Banner"
    >
      {/* Right Side: Icon and Description (RTL start) */}
      <div
        className="flex items-center gap-[14px] flex-1"
        data-node-id="1:1762"
      >
        {/* Shield Key Icon Badge */}
        <div
          className="bg-[#4b5940] size-[40px] rounded-[12px] flex items-center justify-center shrink-0 shadow-2xs"
          data-node-id="1:1768"
          data-name="Background"
        >
          <div className="relative size-[20px]" data-node-id="1:1769">
            <Image
              src="/assets/properties/key-shield-icon.svg"
              alt="أقفال ذكية"
              width={20}
              height={20}
              className="size-full object-contain"
            />
          </div>
        </div>

        {/* Text Info */}
        <div
          className="flex flex-col gap-[2px] items-start"
          data-node-id="1:1763"
        >
          <h4
            className="font-cairo font-bold text-[12px] leading-[16px] text-[#181d17]"
            data-node-id="1:1765"
          >
            هل تريد إضافة عقار جديد أو ربط بوابات الأقفال الذكية؟
          </h4>
          <p
            className="font-cairo font-medium text-[11px] leading-[16.5px] text-[#73786f]"
            data-node-id="1:1767"
          >
            يمكنك ربط الوحدات بالأقفال الذكية وأنظمة الحجوزات السحابية فور إضافة العقار واستكمال عناوينه الجغرافية.
          </p>
        </div>
      </div>

      {/* Left Side: Guide CTA Button (RTL end) */}
      <div className="shrink-0 w-full sm:w-auto" data-node-id="1:1760">
        <button
          type="button"
          onClick={handleOpenGuide}
          className="w-full sm:w-auto bg-white hover:bg-neutral-50 active:scale-[0.98] text-[#303a2c] font-cairo font-bold text-[12px] leading-[16px] px-[16px] py-[8px] rounded-[12px] shadow-xs transition-all cursor-pointer whitespace-nowrap text-center"
          data-node-id="1:1761"
          data-name="Button"
        >
          دليل إعداد العقارات
        </button>
      </div>
    </div>
  );
}
