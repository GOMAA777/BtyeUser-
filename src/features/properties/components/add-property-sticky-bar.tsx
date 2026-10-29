"use client";

import Image from "next/image";
import Link from "next/link";

interface AddPropertyStickyBarProps {
  isSubmitting?: boolean;
  onCancel?: () => void;
}

export function AddPropertyStickyBar({
  isSubmitting = false,
  onCancel,
}: AddPropertyStickyBarProps) {
  return (
    <div
      className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.92)] rounded-[16px] px-[24px] lg:px-[36px] py-[16px] flex flex-col sm:flex-row items-center justify-between gap-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] w-full border border-white/60 sticky bottom-[16px] z-20"
      data-node-id="1:2236"
      data-name="Bottom Sticky Action Area"
    >
      {/* Right Side: Explanatory State Text */}
      <div className="flex items-center gap-[6px] order-2 sm:order-1" data-node-id="1:2247">
        <span
          className="font-cairo font-semibold text-[12px] leading-[18px] text-[#454840] text-right"
          data-node-id="1:2249"
        >
          سيتم حفظ البيانات ومتابعة إعداد الوحدات التابعة لهذا العقار.
        </span>
        <div className="relative shrink-0 size-[16.67px]" data-node-id="1:2250">
          <Image
            src="/assets/properties/add/info-state.svg"
            alt="تنبيه"
            width={17}
            height={17}
            className="size-full object-contain"
          />
        </div>
      </div>

      {/* Left Side: Buttons Hierarchy (Cancel + Save & Continue) */}
      <div
        className="flex items-center gap-[8px] w-full sm:w-auto justify-end order-1 sm:order-2"
        data-node-id="1:2238"
        data-name="Buttons Hierarchy"
      >
        {/* Cancel Button */}
        {onCancel ? (
          <button
            type="button"
            onClick={onCancel}
            disabled={isSubmitting}
            className="bg-[#ebefe6] hover:bg-[#dfe4db] active:scale-[0.98] rounded-[12px] px-[24px] py-[10px] text-[#181d17] font-cairo font-semibold text-[14px] leading-[20px] transition-all cursor-pointer text-center"
            data-node-id="1:2245"
            data-name="Button"
          >
            إلغاء
          </button>
        ) : (
          <Link
            href="/properties"
            className="bg-[#ebefe6] hover:bg-[#dfe4db] active:scale-[0.98] rounded-[12px] px-[24px] py-[10px] text-[#181d17] font-cairo font-semibold text-[14px] leading-[20px] transition-all cursor-pointer text-center"
            data-node-id="1:2245"
            data-name="Button"
          >
            إلغاء
          </Link>
        )}

        {/* Primary Save & Continue Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#34422a] hover:bg-[#273220] active:scale-[0.98] drop-shadow-[0px_4px_6px_rgba(0,0,0,0.1)] rounded-[12px] px-[36px] py-[10px] text-white font-cairo font-bold text-[14px] leading-[20px] flex items-center justify-center gap-[8px] transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
          data-node-id="1:2239"
          data-name="Button"
        >
          <div className="relative shrink-0 size-[10px]" data-node-id="1:2241">
            <Image
              src="/assets/properties/add/arrow-continue.svg"
              alt="متابعة"
              width={6}
              height={10}
              className="size-full object-contain"
            />
          </div>
          <span data-node-id="1:2244">
            {isSubmitting ? "جاري الحفظ..." : "حفظ ومتابعة"}
          </span>
        </button>
      </div>
    </div>
  );
}

