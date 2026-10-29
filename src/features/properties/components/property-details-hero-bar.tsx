"use client";

import Link from "next/link";
import Image from "next/image";

export function PropertyDetailsHeroBar() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
      {/* Title & Subtitle */}
      <div className="flex flex-col items-start gap-1">
        <h1 className="font-bold text-[#181d17] text-2xl leading-tight">
          تفاصيل العقار
        </h1>
        <p className="font-normal text-[#454840] text-sm leading-relaxed">
          أدخل بيانات العقار الأساسية للبدء.
        </p>
      </div>

      {/* Back to properties link */}
      <Link
        href="/properties"
        className="bg-[#f1f5eb] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] hover:bg-[#e4ebd9] active:scale-[0.98] transition-all duration-150 flex items-center gap-1.5 h-[38px] px-4 py-1 rounded-[12px] shrink-0 self-start md:self-center cursor-pointer"
      >
        <span className="font-semibold text-[#181d17] text-xs">
          العودة إلى العقارات
        </span>
        <div className="relative size-3 shrink-0">
          <Image
            src="/assets/properties/details/2cddfb0f89c224217f4575b4e9c396ae153a7545.svg"
            alt="arrow"
            width={12}
            height={12}
            className="w-full h-full object-contain"
          />
        </div>
      </Link>
    </div>
  );
}
