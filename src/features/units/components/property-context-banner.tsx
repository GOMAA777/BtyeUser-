"use client";

import Image from "next/image";

export function PropertyContextBanner() {
  return (
    <div
      className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[12px] p-[16px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full"
      data-node-id="1:4701"
      data-name="Property Context Banner"
      dir="rtl"
    >
      {/* Right side in RTL: Property details */}
      <div className="flex items-center gap-[16px]">
        <div
          className="bg-[#d8e8cb] rounded-[8px] size-[48px] flex items-center justify-center shrink-0"
          data-node-id="1:4719"
          data-name="Background"
        >
          <div className="relative size-[19.5px]">
            <Image
              src="/assets/units/add/bf40f.svg"
              alt="Building"
              width={20}
              height={20}
              className="size-full object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-1">
          <div className="flex items-center gap-[8px]">
            <h2
              className="font-cairo font-semibold text-[#181d17] text-[18px] leading-[28px]"
              data-node-id="1:4712"
            >
              عمارة النخيل - الرياض
            </h2>
            <div
              className="bg-[#ebefe6] rounded-full px-[10px] py-[2px]"
              data-node-id="1:4709"
            >
              <span
                className="font-cairo font-medium text-[#75786f] text-[11px] leading-[16px] block"
                data-node-id="1:4710"
              >
                عمارة سكنية
              </span>
            </div>
          </div>
          <div className="flex items-center gap-[4px]">
            <div className="relative w-[10px] h-[12.5px] shrink-0" data-node-id="1:4717">
              <Image
                src="/assets/units/add/a8345.svg"
                alt="Location"
                width={10}
                height={13}
                className="size-full object-contain"
              />
            </div>
            <span
              className="font-cairo font-normal text-[#75786f] text-[13px] leading-[20px]"
              data-node-id="1:4716"
            >
              حي الياسمين · طريق أنس بن مالك · كود المنشأة #NK-104
            </span>
          </div>
        </div>
      </div>

      {/* Left side in RTL: Instant link badge */}
      <div
        className="bg-[#f1f5eb] rounded-[8px] px-[12px] py-[6px] flex items-center gap-[6px] self-start sm:self-center shrink-0"
        data-node-id="1:4702"
        data-name="Background"
      >
        <span
          className="font-cairo font-medium text-[#454840] text-[11px] leading-[16px]"
          data-node-id="1:4704"
        >
          سيتم ربط الوحدة فورياً بالعقار
        </span>
        <div
          className="bg-[#34422a] rounded-full size-[8px] shrink-0"
          data-node-id="1:4705"
        />
      </div>
    </div>
  );
}
