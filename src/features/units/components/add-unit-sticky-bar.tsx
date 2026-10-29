"use client";

import Image from "next/image";
import Link from "next/link";

interface AddUnitStickyBarProps {
  isSubmitting?: boolean;
}

export function AddUnitStickyBar({ isSubmitting }: AddUnitStickyBarProps) {
  return (
    <div
      className="sticky bottom-6 z-20 backdrop-blur-[6px] bg-[rgba(255,255,255,0.95)] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] border border-neutral-100/50 px-6 sm:px-[36px] py-[16px] flex flex-col-reverse sm:flex-row items-center justify-between gap-4 transition-all w-full"
      data-node-id="1:4723"
      data-name="Bottom Sticky Action Area"
      dir="rtl"
    >
      {/* Left side in RTL: Action Buttons */}
      <div
        className="flex items-center gap-[8px] w-full sm:w-auto justify-end"
        data-node-id="1:4725"
        data-name="Buttons Hierarchy"
      >
        {/* Cancel button */}
        <Link
          href="/units"
          className="bg-[#ebefe6] hover:bg-[#dfe4db] active:scale-[0.98] transition-all duration-150 rounded-[12px] px-[24px] py-[10px] font-cairo font-semibold text-[#181d17] text-[14px] leading-[20px] text-center cursor-pointer"
          data-node-id="1:4730"
          data-name="Button"
        >
          إلغاء
        </Link>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#34422a] hover:bg-[#2b3722] active:scale-[0.98] transition-all duration-150 rounded-[12px] px-[36px] py-[10px] font-cairo font-bold text-white text-[14px] leading-[20px] text-center cursor-pointer shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] disabled:opacity-50 flex items-center justify-center gap-2"
          data-node-id="1:4726"
          data-name="Button"
        >
          {isSubmitting ? (
            <span className="inline-block animate-spin size-4 border-2 border-white border-t-transparent rounded-full" />
          ) : null}
          <span data-node-id="1:4729">حفظ الوحدة</span>
        </button>
      </div>

      {/* Right side in RTL: Explanatory text with info icon */}
      <div
        className="flex items-center gap-[6px] self-start sm:self-center"
        data-node-id="1:4732"
        data-name="Explanatory State Text"
      >
        <div className="relative size-[16.67px] shrink-0" data-node-id="1:4735">
          <Image
            src="/assets/units/add/c71dd.svg"
            alt="info"
            width={17}
            height={17}
            className="size-full object-contain"
          />
        </div>
        <span
          className="font-cairo font-semibold text-[#454840] text-[12px] leading-[18px]"
          data-node-id="1:4734"
        >
          سيتم إدراج الوحدة فور الحفظ وتجهيزها لاستقبال الحجوزات وربط نظام التنظيف.
        </span>
      </div>
    </div>
  );
}
