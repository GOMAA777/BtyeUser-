"use client";

import Image from "next/image";

export function AttentionAlertsSection() {
  return (
    <div
      className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-[24px] flex flex-col gap-[16px] w-full"
      data-node-id="1:385"
      data-name="Section - ROW 3: 'NEEDS ATTENTION' ACTION ALERTS"
    >
      {/* Header */}
      <div className="flex items-center justify-between w-full" data-node-id="1:386">
        {/* Left: Alerts Count Badge */}
        <span
          className="bg-[#ffdad6] text-[#93000a] font-cairo font-normal text-[12px] leading-[18px] px-[12px] py-[4px] rounded-full"
          data-node-id="1:387"
        >
          3 تنبيهات نشطة
        </span>

        {/* Right: Icon + Title */}
        <div className="flex items-center gap-[8px]" data-node-id="1:389">
          <h3 className="font-cairo font-semibold text-[18px] leading-[28px] text-[#181d17]" data-node-id="1:391">
            يحتاج انتباهك
          </h3>
          <div
            className="bg-[#ffdad6] size-[32px] rounded-[8px] flex items-center justify-center shrink-0"
            data-node-id="1:393"
          >
            <div className="relative size-[18px] flex items-center justify-center" data-node-id="1:394">
              <Image
                src="/assets/dashboard/eeef9872aed8f1bcceb7e6ee9a727220ce0a067f.svg"
                alt="Alert"
                width={18}
                height={16}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3 Alerts Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-[16px] w-full"
        data-node-id="1:396"
      >
        {/* Card 1: Unit 204 (Needs Cleaning) */}
        <div
          className="bg-[#f1f5eb] p-[16px] rounded-[12px] flex flex-col justify-between h-[218px]"
          data-node-id="1:433"
        >
          <div className="flex flex-col gap-[6px]">
            {/* Top row: Unit Name + Badge */}
            <div className="flex items-center justify-between w-full" data-node-id="1:435">
              <span className="font-cairo font-semibold text-[18px] leading-[28px] text-[#181d17]" data-node-id="1:437">
                الوحدة 204
              </span>
              <span
                className="bg-[#d8e8cb] text-[#121f0d] font-cairo font-semibold text-[11px] leading-[16px] px-[8px] py-[2px] rounded-[4px]"
                data-node-id="1:438"
              >
                تحتاج اجراء
              </span>
            </div>

            <h4 className="font-cairo font-semibold text-[14px] leading-[20px] text-[#181d17]" data-node-id="1:440">
              انتهى الحجز وتحتاج إلى التنظيف
            </h4>

            <p className="font-cairo font-normal text-[13px] leading-[20px] text-[#454840]" data-node-id="1:442">
              غادر النزيل خالد العتيبي في تمام 12:00 م · جاهزة لدخول فريق النظافة والتعقيم الفوري.
            </p>
          </div>

          <div className="flex items-center justify-between pt-[12px] w-full" data-node-id="1:444">
            <button
              type="button"
              className="bg-[#34422a] text-white font-cairo font-medium text-[11px] leading-[18px] px-[16px] py-[8px] rounded-[12px] hover:bg-[#2c3823] transition-colors"
              data-node-id="1:446"
            >
              عرض المهمة
            </button>
            <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#75786f]" data-node-id="1:448">
              منذ 90 دقيقة
            </span>
          </div>
        </div>

        {/* Card 2: Unit 108 (Reservation Ending Tomorrow) */}
        <div
          className="bg-[#f1f5eb] p-[16px] rounded-[12px] flex flex-col justify-between h-[218px]"
          data-node-id="1:415"
        >
          <div className="flex flex-col gap-[6px]">
            {/* Top row: Unit Name + Badge */}
            <div className="flex items-center justify-between w-full" data-node-id="1:417">
              <span className="font-cairo font-semibold text-[18px] leading-[28px] text-[#181d17]" data-node-id="1:421">
                الوحدة 108
              </span>
              <span
                className="bg-[#dfe4db] text-[#181d17] font-cairo font-semibold text-[11px] leading-[16px] px-[8px] py-[2px] rounded-[4px]"
                data-node-id="1:418"
              >
                تنبيه تمديد
              </span>
            </div>

            <h4 className="font-cairo font-semibold text-[14px] leading-[20px] text-[#181d17]" data-node-id="1:423">
              ينتهي الحجز غداً
            </h4>

            <p className="font-cairo font-normal text-[13px] leading-[20px] text-[#454840]" data-node-id="1:425">
              النزيل فهد المنصور · مغادرة مجدولة غداً 12:00 م تم إرسال التمديد عبر WhatsApp آلياً.
            </p>
          </div>

          <div className="flex items-center justify-between pt-[12px] w-full" data-node-id="1:427">
            <button
              type="button"
              className="bg-white text-[#34422a] font-cairo font-medium text-[11px] leading-[18px] px-[16px] py-[8px] rounded-[12px] hover:bg-neutral-50 shadow-sm transition-colors"
              data-node-id="1:429"
            >
              عرض الحجز
            </button>
            <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#75786f]" data-node-id="1:431">
              متبقي 22 ساعة
            </span>
          </div>
        </div>

        {/* Card 3: Unit 205 (Smart Lock Disconnected) */}
        <div
          className="bg-[#f1f5eb] p-[16px] rounded-[12px] flex flex-col justify-between h-[218px]"
          data-node-id="1:397"
        >
          <div className="flex flex-col gap-[6px]">
            {/* Top row: Unit Name + Badge */}
            <div className="flex items-center justify-between w-full" data-node-id="1:399">
              <span className="font-cairo font-semibold text-[18px] leading-[28px] text-[#181d17]" data-node-id="1:403">
                الوحدة 205
              </span>
              <span
                className="bg-[#ffdad6] text-[#93000a] font-cairo font-semibold text-[11px] leading-[16px] px-[8px] py-[2px] rounded-[4px]"
                data-node-id="1:400"
              >
                تحت الصيانة
              </span>
            </div>

            <h4 className="font-cairo font-semibold text-[14px] leading-[20px] text-[#ba1a1a]" data-node-id="1:405">
              تعثر اتصال القفل الذكي
            </h4>

            <p className="font-cairo font-normal text-[13px] leading-[20px] text-[#454840]" data-node-id="1:407">
              مشكلة في القفل الذكي (Smart Lock Gateway تجاوب متقطع) · تم إشعار فني الصيانة للزيارة اليوم 03:00 م.
            </p>
          </div>

          <div className="flex items-center justify-between pt-[12px] w-full" data-node-id="1:409">
            <button
              type="button"
              className="bg-white text-[#34422a] font-cairo font-medium text-[11px] leading-[18px] px-[16px] py-[8px] rounded-[12px] hover:bg-neutral-50 shadow-sm transition-colors"
              data-node-id="1:411"
            >
              عرض التفاصيل
            </button>
            <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#75786f]" data-node-id="1:413">
              متبقي 22 ساعة
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
