"use client";

import Link from "next/link";
import Image from "next/image";

export function AddUnitHeroBar() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
      {/* Title & Step info */}
      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center gap-3">
          <div className="bg-[#dfefe3]/70 flex items-center gap-1.5 px-3 py-1 rounded-full shrink-0">
            <span className="font-bold text-[#34422a] text-xs">
              الخطوة 2 من 2
            </span>
            <div className="bg-[#34422a] rounded-full size-2 shrink-0" />
          </div>
          <h1 className="font-bold text-[#181d17] text-2xl leading-none">
            إضافة وحدة
          </h1>
        </div>
        <p className="font-normal text-[#75786f] text-sm leading-relaxed max-w-2xl">
          أدخل مواصفات وتفاصيل الوحدة لتفعيل إدارتها وتخصيص التسعير الموسمي وربط الأقفال الذكية وأنظمة الجدولة.
        </p>
      </div>

      {/* Back link */}
      <Link
        href="/properties"
        className="bg-[#f1f5eb] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] hover:bg-[#e4ebd9] active:scale-[0.98] transition-all duration-150 flex items-center gap-1.5 h-[38px] px-4 py-1 rounded-[12px] shrink-0 self-start md:self-center"
      >
        <span className="font-semibold text-[#181d17] text-xs">
          العودة إلى العقارات
        </span>
        <div className="relative size-3 shrink-0">
          <Image
            src="/assets/units/add/2cddfb0f89c224217f4575b4e9c396ae153a7545.svg"
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

