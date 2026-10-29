"use client";

import Image from "next/image";

interface StickyActionBarProps {
  selectedPropertiesCount: number;
  selectedUnitsCount: number;
  onImport: () => void;
  onCancel: () => void;
  onRescan: () => void;
}

export function StickyActionBar({
  selectedPropertiesCount,
  selectedUnitsCount,
  onImport,
  onCancel,
  onRescan,
}: StickyActionBarProps) {
  return (
    <div
      className="sticky bottom-0 z-30 backdrop-blur-[12px] bg-[rgba(255,255,255,0.95)] px-[20px] lg:px-[32px] py-[12px] shadow-[0px_-4px_24px_0px_rgba(0,0,0,0.06)] border-t border-[#E5EAE0]/80 w-full"
      data-name="Sticky Bottom Summary & Final Action Bar"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-[16px] w-full">
        {/* 1. Right Group (RTL Start): Selected Summary Badge + Estimated Time */}
        <div className="flex items-center gap-[16px] w-full sm:w-auto justify-between sm:justify-start">
          {/* Status Badge */}
          <div className="bg-[#D8E8CB] flex items-center gap-[8px] px-[14px] py-[6px] rounded-full">
            <div className="relative flex items-center justify-center size-[10px]">
              <span className="absolute bg-[#3E8A5A] rounded-full size-[10px] animate-ping opacity-75" />
              <span className="relative bg-[#3E8A5A] rounded-full size-[10px]" />
            </div>
            <span className="font-cairo font-bold text-[#121F0D] text-[12px] leading-[18px]">
              تم تحديد {selectedPropertiesCount} عقار و{selectedUnitsCount} وحدة للاستيراد
            </span>
          </div>

          {/* Time Estimation */}
          <div className="flex items-center gap-[6px] font-cairo text-[13px] leading-[20px]">
            <div className="size-[15px] relative shrink-0">
              <Image
                src="/assets/import-properties/459f1533186db49ba10397ab613bac4dbc4c7632.svg"
                alt=""
                width={15}
                height={15}
                className="object-contain"
              />
            </div>
            <span className="text-[#454840]">الوقت المتوقع للاستيراد:</span>
            <span className="font-bold text-[#181D17]">دقيقة واحدة</span>
          </div>
        </div>

        {/* 2. Left Group (RTL End): Action Buttons */}
        <div className="flex items-center gap-[12px] w-full sm:w-auto justify-end flex-wrap">
          {/* Re-scan Button */}
          <button
            type="button"
            onClick={onRescan}
            className="flex items-center gap-[8px] px-[14px] py-[8px] rounded-[12px] hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <div className="w-[16px] h-[12px] relative shrink-0">
              <Image
                src="/assets/import-properties/2225ceff10323d8d3ae105a18c97ad3beb482664.svg"
                alt=""
                width={16}
                height={12}
                className="object-contain"
              />
            </div>
            <span className="font-cairo font-semibold text-[#454840] text-[12px] leading-[18px]">
              إعادة فحص القناة (Re-scan)
            </span>
          </button>

          {/* Cancel & Return Button */}
          <button
            type="button"
            onClick={onCancel}
            className="bg-[#E5EAE0] hover:bg-[#DFE4DB] text-[#181D17] font-cairo font-semibold text-[14px] leading-[20px] px-[24px] py-[10px] rounded-[12px] transition-all cursor-pointer"
          >
            إلغاء والعودة
          </button>

          {/* Primary Import Button */}
          <button
            type="button"
            onClick={onImport}
            className="bg-[#34422A] hover:bg-[#2A3522] text-white font-cairo font-bold text-[14px] leading-[20px] px-[24px] py-[10px] rounded-[12px] flex items-center gap-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] transition-all cursor-pointer group"
          >
            <div className="w-[12px] h-[9px] relative shrink-0 transform rotate-180">
              <Image
                src="/assets/import-properties/5b0a9d243ed75cda568a6624d9712bb49424de32.svg"
                alt=""
                width={12}
                height={9}
                className="object-contain"
              />
            </div>
            <span>
              استيراد المحدد ({selectedPropertiesCount} عقار · {selectedUnitsCount} وحدة)
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
