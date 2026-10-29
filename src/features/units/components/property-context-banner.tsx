"use client";

import Image from "next/image";

export function PropertyContextBanner() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[12px] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      {/* Property details */}
      <div className="flex items-center gap-4">
        <div className="bg-[#d8e8cb] rounded-[8px] size-12 flex items-center justify-center shrink-0">
          <div className="relative size-[19.5px]">
            <Image
              src="/assets/units/add/9687967f83a66f5ed2bb18c9721ee70106261e0d.svg"
              alt="Building"
              width={20}
              height={20}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-1">
          <div className="flex items-center gap-2">
            <h2 className="font-semibold text-[#181d17] text-lg leading-tight">
              عمارة النخيل - الرياض
            </h2>
            <div className="bg-[#ebefe6] rounded-full px-2.5 py-0.5">
              <span className="font-medium text-[#75786f] text-[11px] leading-tight block">
                عمارة سكنية
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="relative w-[10px] h-[12.5px] shrink-0">
              <Image
                src="/assets/units/add/bfb226255bd17b0aea33f7c79f04f0ae68c613a3.svg"
                alt="Location"
                width={10}
                height={13}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-normal text-[#75786f] text-[13px] leading-tight">
              حي الياسمين · طريق أنس بن مالك · كود المنشأة #NK-104
            </span>
          </div>
        </div>
      </div>

      {/* Instant link badge */}
      <div className="bg-[#f1f5eb] rounded-[8px] px-3 py-1.5 flex items-center gap-1.5 self-start sm:self-center shrink-0">
        <div className="bg-[#34422a] rounded-full size-2 shrink-0 animate-pulse" />
        <span className="font-medium text-[#454840] text-[11px]">
          سيتم ربط الوحدة فورياً بالعقار
        </span>
      </div>
    </div>
  );
}

