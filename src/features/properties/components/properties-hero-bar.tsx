"use client";

import Image from "next/image";
import Link from "next/link";
import { showToast } from "@/lib/toast";

interface PropertiesHeroBarProps {
  onAddProperty?: () => void;
}

export function PropertiesHeroBar({ onAddProperty }: PropertiesHeroBarProps) {
  const handleAdd = () => {
    if (onAddProperty) {
      onAddProperty();
    } else {
      showToast.info("إضافة عقار جديد", "جاري فتح نموذج إضافة عقار جديد إلى المنظومة.");
    }
  };

  return (
    <div
      className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] px-[24px] lg:px-[32px] py-[20px] flex flex-col sm:flex-row sm:items-center justify-between gap-[16px] w-full min-h-[102px]"
      data-node-id="1:1580"
      data-name="Section - TOP HERO GREETING BAR"
    >
      {/* Right Side: Title and Subtitle */}
      <div className="flex flex-col items-start gap-[4px]" data-node-id="1:1593">
        <h1
          className="font-cairo font-bold text-[24px] leading-[34px] text-[#181d17]"
          data-node-id="1:1597"
        >
          العقارات
        </h1>
        <p
          className="font-cairo font-normal text-[14px] leading-[22px] text-[#454840]"
          data-node-id="1:1600"
        >
          إدارة عقاراتك ومتابعة بياناتها ووحداتها.
        </p>
      </div>

      {/* Left Side: Quick Action Buttons */}
      <div
        className="flex items-center gap-[8px] flex-wrap"
        data-node-id="1:1582"
        data-name="Quick Action Buttons"
      >
        {/* Add Property Button */}
        <button
          type="button"
          onClick={handleAdd}
          className="bg-[#34422a] hover:bg-[#273220] active:scale-[0.98] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center gap-[6px] px-[16px] py-[10px] rounded-[12px] text-white font-cairo font-semibold text-[12px] leading-[18px] transition-all cursor-pointer"
          data-node-id="1:1583"
          data-name="Button"
        >
          <div className="relative shrink-0 size-[15px]" data-node-id="1:1586">
            <Image
              src="/assets/properties/plus-circle.svg"
              alt="إضافة عقار"
              width={15}
              height={15}
              className="size-full object-contain"
            />
          </div>
          <span data-node-id="1:1585">إضافة عقار</span>
        </button>

        {/* Import Booking/Airbnb Button */}
        <Link
          href="/properties/import"
          className="bg-[#f1f5eb] hover:bg-[#e4ebd9] active:scale-[0.98] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center gap-[6px] px-[16px] py-[10px] rounded-[12px] text-[#181d17] font-cairo font-semibold text-[12px] leading-[18px] transition-all cursor-pointer"
          data-node-id="1:1588"
          data-name="Button"
        >
          <div className="relative shrink-0 size-[14px]" data-node-id="1:1591">
            <Image
              src="/assets/properties/import-icon.svg"
              alt="استيراد Booking/Airbnb"
              width={14}
              height={14}
              className="size-full object-contain"
            />
          </div>
          <span data-node-id="1:1590">استيراد Booking/Airbnb</span>
        </Link>
      </div>
    </div>
  );
}
