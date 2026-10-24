"use client";

import Image from "next/image";

export function HeroGreetingBar() {
  return (
    <div
      className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-[24px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[20px] w-full"
      data-node-id="1:184"
      data-name="Section - TOP HERO GREETING BAR"
    >
      {/* Right Side: Greeting & Description */}
      <div className="flex flex-col items-start" data-node-id="1:206">
        <div className="flex items-center gap-[8px]" data-node-id="1:207">
          <h2 className="font-cairo font-bold text-[24px] leading-[34px] text-[#181d17]" data-node-id="1:211">
            صباح الخير، محمد
          </h2>
          <span className="text-[24px] leading-[32px]" data-node-id="1:209">
            👋
          </span>
        </div>
        <p className="font-cairo font-normal text-[14px] leading-[22px] text-[#454840] pt-[4px]" data-node-id="1:214">
          إليك ملخص مؤشرات التشغيل والإيرادات اليومية لأصولك العقارية
        </p>
      </div>

      {/* Left Side: Sync Indicator & Action Buttons */}
      <div className="flex flex-wrap items-center gap-[12px]" data-node-id="1:185">
        {/* Sync & Date Indicator */}
        <div
          className="bg-[#f1f5eb] flex items-center gap-[10px] px-[16px] py-[8px] rounded-[12px]"
          data-node-id="1:197"
        >
          <div className="relative size-[10px] flex items-center justify-center shrink-0" data-node-id="1:203">
            <span className="absolute inset-0 rounded-full bg-[#54624c] opacity-75 animate-ping" data-node-id="1:204" />
            <span className="relative size-[10px] rounded-full bg-[#34422a]" data-node-id="1:205" />
          </div>
          <div className="flex flex-col items-start" data-node-id="1:198">
            <span className="font-cairo font-semibold text-[12px] leading-[18px] text-[#181d17]" data-node-id="1:200">
              اليوم، الثلاثاء 24 أكتوبر 2026
            </span>
            <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840]" data-node-id="1:202">
              الأنظمة: متزامنة ومستقرة 99.9%
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-[8px]" data-node-id="1:186">
          {/* Secondary: Import Booking / Airbnb */}
          <button
            type="button"
            className="bg-[#f1f5eb] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center gap-[6px] px-[16px] py-[10px] rounded-[12px] hover:bg-[#e8ede1] transition-colors"
            data-node-id="1:192"
          >
            <div className="relative size-[14px] flex items-center justify-center shrink-0" data-node-id="1:195">
              <Image
                src="/assets/dashboard/87247dd554eb396caf5d905e801fcbe551a3ac01.svg"
                alt="Import"
                width={14}
                height={14}
                className="object-contain"
              />
            </div>
            <span className="font-cairo font-semibold text-[12px] leading-[18px] text-[#181d17]" data-node-id="1:194">
              استيراد Booking/Airbnb
            </span>
          </button>

          {/* Primary: Add Property */}
          <button
            type="button"
            className="bg-[#34422a] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center gap-[6px] px-[16px] py-[10px] rounded-[12px] hover:bg-[#2c3823] transition-colors"
            data-node-id="1:187"
          >
            <div className="relative size-[15px] flex items-center justify-center shrink-0" data-node-id="1:190">
              <Image
                src="/assets/dashboard/7f9661f842275efef5b6a44871928e3e99b76e91.svg"
                alt="Add"
                width={15}
                height={15}
                className="object-contain"
              />
            </div>
            <span className="font-cairo font-semibold text-[12px] leading-[18px] text-white" data-node-id="1:189">
              إضافة عقار
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
