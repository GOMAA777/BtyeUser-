"use client";

import Image from "next/image";
import Link from "next/link";

export function DepartureSpotlightCard() {
  return (
    <div
      className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-[24px] flex flex-col justify-between h-[442px] w-full"
      data-node-id="1:534"
      data-name="Left Side (Desktop RTL): Operational Check-out Spotlight (4 cols)"
    >
      <div className="flex flex-col gap-[14px] w-full" data-node-id="1:535">
        {/* Title */}
        <h3 className="font-cairo font-semibold text-[18px] leading-[28px] text-[#181d17]" data-node-id="1:538">
          متابعة المغادرة اليوم
        </h3>

        {/* Info Box */}
        <div className="bg-[#f1f5eb] rounded-[12px] p-[16px] flex flex-col gap-[12px] w-full" data-node-id="1:539">
          {/* Previous Guest */}
          <div className="flex items-center justify-between w-full" data-node-id="1:540">
            <span className="font-cairo font-semibold text-[11px] leading-[16px] text-[#454840]" data-node-id="1:544">
              النزيل السابق
            </span>
            <span className="font-cairo font-semibold text-[11px] leading-[18px] text-[#181d17]" data-node-id="1:542">
              خالد العتيبي
            </span>
          </div>

          {/* Checkout Time */}
          <div className="flex items-center justify-between w-full" data-node-id="1:545">
            <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840]" data-node-id="1:549">
              توقيت الخروج
            </span>
            <span className="font-cairo font-semibold text-[11px] leading-[18px] text-[#181d17]" data-node-id="1:547">
              12:00 م (منذ ساعة ونصف)
            </span>
          </div>

          {/* Unit Status */}
          <div className="flex items-center justify-between w-full" data-node-id="1:550">
            <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840]" data-node-id="1:554">
              حالة الوحدة
            </span>
            <span
              className="bg-[#d8e8cb] text-[#121f0d] font-cairo font-medium text-[11px] leading-[16px] px-[8px] py-[2px] rounded-[4px]"
              data-node-id="1:551"
            >
              بانتظار التنظيف
            </span>
          </div>

          {/* Next Arrival */}
          <div className="flex items-center justify-between w-full" data-node-id="1:555">
            <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840]" data-node-id="1:559">
              الوصول التالي المتوقع
            </span>
            <span className="font-cairo font-semibold text-[11px] leading-[18px] text-[#34422a]" data-node-id="1:557">
              غداً 02:00 م
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="w-full pt-[2px]" data-node-id="1:560">
          <button
            type="button"
            className="bg-[#34422a] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] w-full py-[10px] rounded-[12px] flex items-center justify-center gap-[6px] hover:bg-[#2c3823] transition-colors"
            data-node-id="1:561"
          >
            <div className="relative size-[16px] flex items-center justify-center shrink-0" data-node-id="1:564">
              <Image
                src="/assets/dashboard/7716992645e69cf44abdb8871f0442e3b1fa5440.svg"
                alt="Assign cleaner"
                width={14}
                height={17}
                className="object-contain"
              />
            </div>
            <span className="font-cairo font-semibold text-[12px] leading-[18px] text-white" data-node-id="1:563">
              تعيين مسؤول نظافة الآن
            </span>
          </button>
        </div>
      </div>

      {/* Footer Link to Bookings */}
      <div className="pt-[16px] border-t border-neutral-100 w-full" data-node-id="1:566">
        <Link
          href="#bookings"
          className="flex items-center justify-between w-full hover:opacity-80 transition-opacity"
          data-node-id="1:567"
        >
          <span className="font-cairo font-semibold text-[14px] leading-[20px] text-[#34422a]" data-node-id="1:571">
            الانتقال لإدارة الحجوزات
          </span>
          <div className="relative size-[14px] flex items-center justify-center shrink-0" data-node-id="1:568">
            <Image
              src="/assets/dashboard/0cdb388f9dcaf04b150e7ea51cca5981b741f623.svg"
              alt="Arrow"
              width={14}
              height={14}
              className="object-contain"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
