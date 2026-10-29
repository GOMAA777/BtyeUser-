"use client";

import Image from "next/image";
import Link from "next/link";

interface AddUnitStickyBarProps {
  isSubmitting?: boolean;
}

export function AddUnitStickyBar({ isSubmitting }: AddUnitStickyBarProps) {
  return (
    <div className="sticky bottom-6 z-20 backdrop-blur-[6px] bg-white/95 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] border border-neutral-100/50 px-6 sm:px-9 py-4 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 transition-all">
      {/* Buttons */}
      <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
        {/* Cancel button */}
        <Link
          href="/properties"
          className="bg-[#ebefe6] hover:bg-[#dfe4db] active:scale-[0.98] transition-all duration-150 rounded-[12px] px-6 py-2.5 font-semibold text-[#181d17] text-sm text-center cursor-pointer"
        >
          إلغاء
        </Link>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#34422a] hover:bg-[#2b3722] active:scale-[0.98] transition-all duration-150 rounded-[12px] px-9 py-2.5 font-bold text-white text-sm text-center cursor-pointer shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <span className="inline-block animate-spin size-4 border-2 border-white border-t-transparent rounded-full" />
          ) : null}
          <span>حفظ وإنهاء الإعداد</span>
        </button>
      </div>

      {/* Explanatory text with info icon */}
      <div className="flex items-center gap-2 self-start sm:self-center">
        <div className="relative size-[16.7px] shrink-0">
          <Image
            src="/assets/units/add/832c84bbe0592e2e5c089e09dbe68460e85a7f84.svg"
            alt="info"
            width={17}
            height={17}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="font-semibold text-[#454840] text-xs leading-relaxed">
          سيتم إدراج الوحدة فور الحفظ وتجهيزها لاستقبال الحجوزات وربط نظام التنظيف.
        </span>
      </div>
    </div>
  );
}

