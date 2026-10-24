"use client";

import Image from "next/image";

export function KpiCards() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px] w-full"
      data-node-id="1:215"
      data-name="Section - ROW 1: 4 KPI CARDS"
    >
      {/* 1. KPI 1: Revenue (إجمالي الإيرادات) */}
      <div
        className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-[24px] h-[204px] flex flex-col justify-between"
        data-node-id="1:268"
        data-name="KPI 1: Revenue"
      >
        <div className="flex items-center justify-between w-full" data-node-id="1:269">
          <div className="bg-[#d8e8cb] flex items-center justify-center rounded-[12px] size-[40px] shrink-0" data-node-id="1:270">
            <Image
              src="/assets/dashboard/854519b650d61159def1f0f1134eea4b3d9a3030.svg"
              alt="Revenue"
              width={20}
              height={15}
              className="object-contain"
            />
          </div>
          <span className="font-cairo font-semibold text-[12px] leading-[18px] text-[#454840]" data-node-id="1:274">
            إجمالي الإيرادات (الشهر)
          </span>
        </div>

        <div className="flex flex-col gap-[8px]" data-node-id="1:276">
          <div className="flex items-baseline gap-[6px]" data-node-id="1:277">
            <span className="font-cairo font-bold text-[36px] leading-[48px] text-[#181d17] tracking-[-0.9px]" data-node-id="1:278">
              48,500
            </span>
            <span className="font-cairo font-semibold text-[18px] leading-[28px] text-[#454840]" data-node-id="1:279">
              ر.س
            </span>
          </div>

          <div className="flex items-center gap-[6px]" data-node-id="1:280">
            <div className="bg-[#d8e8cb] flex items-center gap-[3px] px-[8px] py-[2px] rounded-full shrink-0" data-node-id="1:283">
              <span className="font-cairo font-semibold text-[11px] leading-[16px] text-[#121f0d]" data-node-id="1:284">
                14.2%
              </span>
              <div className="relative size-[9px] flex items-center justify-center" data-node-id="1:285">
                <Image
                  src="/assets/dashboard/79902b9a0f3cd60a6a849d61f9e45a315b00d137.svg"
                  alt="Up"
                  width={9}
                  height={9}
                  className="object-contain"
                />
              </div>
            </div>
            <span className="font-cairo font-normal text-[11px] leading-[20px] text-[#454840]" data-node-id="1:282">
              مقارنة بالشهر السابق
            </span>
          </div>
        </div>
      </div>

      {/* 2. KPI 2: Occupancy Rate (نسبة الإشغال الكلية) */}
      <div
        className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-[24px] h-[204px] flex flex-col justify-between"
        data-node-id="1:248"
        data-name="KPI 2: Occupancy Rate"
      >
        <div className="flex items-center justify-between w-full" data-node-id="1:249">
          <div className="bg-[#f1f5eb] flex items-center justify-center rounded-[12px] size-[40px] shrink-0" data-node-id="1:250">
            <Image
              src="/assets/dashboard/cb8071b8f84ad180d335a345dc27f94204c5c05e.svg"
              alt="Occupancy"
              width={21}
              height={11}
              className="object-contain"
            />
          </div>
          <span className="font-cairo font-semibold text-[12px] leading-[18px] text-[#454840]" data-node-id="1:254">
            نسبة الإشغال الكلية
          </span>
        </div>

        <div className="flex flex-col gap-[8px]" data-node-id="1:256">
          <div className="flex items-baseline justify-between w-full" data-node-id="1:257">
            <span className="font-cairo font-bold text-[36px] leading-[48px] text-[#181d17] tracking-[-0.9px]" data-node-id="1:261">
              85%
            </span>
            <span className="font-cairo font-semibold text-[12px] leading-[18px] text-[#454840]" data-node-id="1:259">
              10 من 12 وحدة
            </span>
          </div>

          {/* Progress Bar */}
          <div className="bg-[#ebefe6] h-[8px] rounded-full overflow-hidden w-full relative" data-node-id="1:262">
            <div className="bg-[#34422a] h-full rounded-full w-[85%]" data-node-id="1:263" />
          </div>

          <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840] pt-[4px]" data-node-id="1:267">
            متوسط السوق: 72%
          </span>
        </div>
      </div>

      {/* 3. KPI 3: Current Bookings (الحجوزات النشطة) */}
      <div
        className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-[24px] h-[204px] flex flex-col justify-between"
        data-node-id="1:232"
        data-name="KPI 3: Current Bookings"
      >
        <div className="flex items-center justify-between w-full" data-node-id="1:233">
          <div className="bg-[#f1f5eb] flex items-center justify-center rounded-[12px] size-[40px] shrink-0" data-node-id="1:234">
            <Image
              src="/assets/dashboard/a25991bc9c608344a618f1caebff6890f26fa013.svg"
              alt="Bookings"
              width={17}
              height={18}
              className="object-contain"
            />
          </div>
          <span className="font-cairo font-semibold text-[12px] leading-[18px] text-[#454840]" data-node-id="1:238">
            الحجوزات النشطة
          </span>
        </div>

        <div className="flex flex-col gap-[8px]" data-node-id="1:240">
          <div className="flex items-center justify-between w-full" data-node-id="1:241">
            <span className="font-cairo font-bold text-[36px] leading-[48px] text-[#181d17] tracking-[-0.9px]" data-node-id="1:245">
              10
            </span>
            <span className="bg-[#d8e8cb] text-[#121f0d] font-cairo font-normal text-[11px] leading-[16px] px-[10px] py-[2px] rounded-full" data-node-id="1:242">
              نشطة الآن
            </span>
          </div>

          <span className="font-cairo font-normal text-[11px] leading-[20px] text-[#454840]" data-node-id="1:247">
            2 وصول مجدول خلال بقية اليوم
          </span>
        </div>
      </div>

      {/* 4. KPI 4: Operational Tasks (المهام التشغيلية) */}
      <div
        className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-[24px] h-[204px] flex flex-col justify-between"
        data-node-id="1:216"
        data-name="KPI 4: Needs Action"
      >
        <div className="flex items-center justify-between w-full" data-node-id="1:217">
          <div className="bg-[rgba(255,218,214,0.4)] flex items-center justify-center rounded-[12px] size-[40px] shrink-0" data-node-id="1:218">
            <Image
              src="/assets/dashboard/9497d82ac42f8cbcf8ac2aa827ecc79e30646547.svg"
              alt="Action"
              width={18}
              height={18}
              className="object-contain"
            />
          </div>
          <span className="font-cairo font-semibold text-[12px] leading-[18px] text-[#454840]" data-node-id="1:222">
            المهام التشغيلية
          </span>
        </div>

        <div className="flex flex-col gap-[4px]" data-node-id="1:224">
          <div className="flex items-center justify-between w-full" data-node-id="1:225">
            <span className="font-cairo font-bold text-[36px] leading-[48px] text-[#ba1a1a] tracking-[-0.9px]" data-node-id="1:229">
              2
            </span>
            <span className="bg-[#ffdad6] text-[#93000a] font-cairo font-normal text-[11px] leading-[16px] px-[10px] py-[2px] rounded-full" data-node-id="1:226">
              إجراء عاجل
            </span>
          </div>

          <p className="font-cairo font-normal text-[11px] leading-[18px] text-[#454840]" data-node-id="1:231">
            مهمة تنظيف بانتظار التعيين وبلاغ تقني
          </p>
        </div>
      </div>
    </div>
  );
}
