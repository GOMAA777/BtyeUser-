"use client";

import Image from "next/image";

export function GuestTrafficCard() {
  return (
    <div
      className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-[24px] flex flex-col justify-between h-full"
      data-node-id="1:348"
      data-name="Card B: Today's Arrival / Departure Summary (5 cols)"
    >
      <div className="flex flex-col gap-[16px] w-full" data-node-id="1:349">
        {/* Header */}
        <div className="flex items-center justify-between w-full" data-node-id="1:350">
          <span
            className="bg-[#d8e8cb] text-[#34422a] font-cairo font-semibold text-[11px] leading-[16px] px-[8px] py-[2px] rounded-full"
            data-node-id="1:351"
          >
            3 تحركات مجدولة
          </span>
          <h3 className="font-cairo font-semibold text-[18px] leading-[28px] text-[#181d17]" data-node-id="1:354">
            حركة النزلاء اليوم
          </h3>
        </div>

        {/* Movements List */}
        <div className="flex flex-col gap-[10px] w-full" data-node-id="1:355">
          {/* Movement 1: Scheduled Arrivals */}
          <div
            className="bg-[#f1f5eb] p-[16px] rounded-[12px] flex items-center justify-between gap-[12px]"
            data-node-id="1:356"
          >
            <div className="flex flex-col items-start" data-node-id="1:358">
              <span className="font-cairo font-semibold text-[14px] leading-[20px] text-[#181d17]" data-node-id="1:361">
                2 وصول مجدول
              </span>
              <span className="font-cairo font-normal text-[13px] leading-[20px] text-[#454840] pt-[2px]" data-node-id="1:363">
                سعود العتيبي (02:00 م) · عبد الله الشمري (04:30 م)
              </span>
            </div>

            <div
              className="bg-[#303b25] size-[36px] rounded-[12px] flex items-center justify-center shrink-0"
              data-node-id="1:364"
            >
              <div className="relative size-[18px] flex items-center justify-center" data-node-id="1:365">
                <Image
                  src="/assets/dashboard/e3d07a3d615397bffb07eb60ab359598fff2d2aa.svg"
                  alt="Arrival"
                  width={18}
                  height={15}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Movement 2: Completed Departure */}
          <div
            className="bg-[#f1f5eb] p-[16px] rounded-[12px] flex items-center justify-between gap-[12px]"
            data-node-id="1:367"
          >
            <div className="flex flex-col items-start" data-node-id="1:369">
              <span className="font-cairo font-semibold text-[14px] leading-[20px] text-[#181d17]" data-node-id="1:372">
                1 مغادرة مكتملة
              </span>
              <span className="font-cairo font-normal text-[13px] leading-[20px] text-[#454840] pt-[2px]" data-node-id="1:374">
                سعود العتيبي (02:00 م)
              </span>
            </div>

            <div
              className="bg-[#dfe4db] size-[36px] rounded-[12px] flex items-center justify-center shrink-0"
              data-node-id="1:375"
            >
              <div className="relative size-[18px] flex items-center justify-center" data-node-id="1:376">
                <Image
                  src="/assets/dashboard/c00e23a841966e23b1f5c613173670274fcbf274.svg"
                  alt="Departure"
                  width={18}
                  height={15}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Assurance */}
      <div className="pt-[16px] flex items-center justify-end gap-[6px] w-full" data-node-id="1:381">
        <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840]" data-node-id="1:382">
          جميع أكواد الأقفال الذكية مجهزة تلقائياً
        </span>
        <div className="relative size-[15px] flex items-center justify-center shrink-0" data-node-id="1:383">
          <Image
            src="/assets/dashboard/ca63bd874b0ae716ff200647e2e530f19907734d.svg"
            alt="Secure"
            width={15}
            height={14}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
