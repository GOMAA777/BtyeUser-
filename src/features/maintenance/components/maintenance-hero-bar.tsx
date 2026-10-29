"use client";

import { Download } from "lucide-react";
import { showToast } from "@/lib/toast";

export function MaintenanceHeroBar() {
  const handleExport = () => {
    showToast.success("جاري تصدير قائمة العمليات (CSV / Excel)...");
  };

  return (
    <div
      className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 lg:px-[32px] lg:py-[24px] flex flex-col md:flex-row md:items-center justify-between gap-4 w-full"
      data-node-id="1:10349"
      data-name="Section - TOP HERO GREETING BAR"
      dir="rtl"
    >
      {/* Right side in RTL: Title & Subtitle */}
      <div className="flex flex-col items-start gap-1">
        <h1
          className="font-cairo font-bold text-[#181d17] text-[24px] leading-[34px]"
          data-node-id="1:10351"
        >
          الصيانة والتنظيف
        </h1>
        <p
          className="font-cairo font-normal text-[#454840] text-[14px] leading-[22px]"
          data-node-id="1:10354"
        >
          متابعة كل عمليات التنظيف والصيانة على مستوى المنصة.
        </p>
      </div>

      {/* Left side in RTL: Export Button */}
      <button
        type="button"
        onClick={handleExport}
        className="bg-white hover:bg-[#f6f7f4] border border-[#e5e8e2] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[38px] px-[16px] rounded-[12px] flex items-center gap-[8px] transition-all cursor-pointer shrink-0 self-start md:self-center font-cairo font-semibold text-[#181d17] text-[12px]"
        data-node-id="1:10356"
      >
        <Download className="size-4 text-[#75786f]" />
        <span>تصدير القائمة (CSV / Excel)</span>
      </button>
    </div>
  );
}
