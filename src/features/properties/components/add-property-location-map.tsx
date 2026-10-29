"use client";

import { useState } from "react";
import Image from "next/image";
import { showToast } from "@/lib/toast";

interface AddPropertyLocationMapProps {
  addressLine1?: string;
  addressLine2?: string;
  onLocateCurrent?: () => void;
}

export function AddPropertyLocationMap({
  addressLine1 = "طريق أنس بن مالك، حي الياسمين",
  addressLine2 = "الرياض 13326، المملكة العربية السعودية",
  onLocateCurrent,
}: AddPropertyLocationMapProps) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isLocating, setIsLocating] = useState(false);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.15, 1.6));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.15, 0.85));
  };

  const handleLocate = () => {
    setIsLocating(true);
    if (onLocateCurrent) {
      onLocateCurrent();
    } else {
      setTimeout(() => {
        setIsLocating(false);
        showToast.info(
          "تم تحديد الموقع بنجاح",
          "الإحداثيات الحالية: 24.8197° N, 46.6342° E (حي الياسمين، الرياض)"
        );
      }, 400);
    }
  };

  return (
    <div
      className="flex flex-col gap-[8px] items-start w-full"
      data-node-id="1:2193"
      data-name="Row 3: Full Width Interactive Location Section"
    >
      {/* Header: Title, Description & GPS CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[12px] w-full" data-node-id="1:2194">
        {/* Right side: Titles */}
        <div className="flex flex-col items-start gap-[2px]" data-node-id="1:2202">
          <h3
            className="font-cairo font-semibold text-[14px] leading-[20px] text-[#181d17]"
            data-node-id="1:2204"
          >
            الموقع الجغرافي والإحداثيات
          </h3>
          <p
            className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840]"
            data-node-id="1:2206"
          >
            تحديد موقع العقار يساعد في توجيه الضيوف وأطقم التشغيل وربط الأقفال الذكية بالبوابات الرئيسية
          </p>
        </div>

        {/* Left side: Locate Button */}
        <button
          type="button"
          onClick={handleLocate}
          disabled={isLocating}
          className="bg-[#d8e8cb] hover:bg-[#c9ddba] active:scale-[0.98] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[12px] px-[16px] py-[6px] flex items-center gap-[6px] text-[#121f0d] font-cairo font-bold text-[12px] leading-[18px] transition-all cursor-pointer self-start sm:self-center shrink-0"
          data-node-id="1:2197"
          data-name="Button"
        >
          <span data-node-id="1:2199">
            {isLocating ? "جاري تحديد الموقع..." : "تحديد الموقع الحالي"}
          </span>
          <div className="relative size-[13.5px]" data-node-id="1:2200">
            <Image
              src="/assets/properties/add/gps-target.svg"
              alt="تحديد الموقع"
              width={14}
              height={14}
              className="size-full object-contain"
            />
          </div>
        </button>
      </div>

      {/* Styled Map Container */}
      <div
        className="bg-[#eaf1e8] h-[320px] lg:h-[360px] rounded-[16px] overflow-hidden relative shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-full border border-[#dfe4db]/50"
        data-node-id="1:2207"
        data-name="Styled Map Container"
      >
        {/* Map Background Image */}
        <div
          className="absolute inset-0 transition-transform duration-300"
          style={{ transform: `scale(${zoomLevel})` }}
          data-node-id="1:2208"
        >
          <Image
            src="/assets/properties/add/map-preview.png"
            alt="خريطة الموقع"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Floating Location Control Overlay (Top Right) */}
        <div
          className="absolute top-[16px] right-[16px] bg-[rgba(255,255,255,0.95)] backdrop-blur-[6px] rounded-[12px] px-[16px] py-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] flex items-center gap-[10px] max-w-[384px] z-10"
          data-node-id="1:2209"
          data-name="Location Floating Control Overlay"
        >
          {/* Location Pin Icon Box */}
          <div
            className="bg-[#34422a] rounded-[8px] size-[36px] flex items-center justify-center shrink-0"
            data-node-id="1:2216"
          >
            <div className="relative size-[16px]" data-node-id="1:2217">
              <Image
                src="/assets/properties/add/map-pin-card.svg"
                alt="دبوس"
                width={12}
                height={17}
                className="size-full object-contain"
              />
            </div>
          </div>

          {/* Address Text */}
          <div className="flex flex-col items-start gap-px text-right" data-node-id="1:2211">
            <span
              className="font-cairo font-bold text-[12px] leading-[18px] text-[#181d17] whitespace-nowrap"
              data-node-id="1:2213"
            >
              {addressLine1}
            </span>
            <span
              className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840] whitespace-nowrap"
              data-node-id="1:2215"
            >
              {addressLine2}
            </span>
          </div>
        </div>

        {/* Center Interactive Map Pin Marker */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none z-10"
          data-node-id="1:2219"
          data-name="Center Interactive Map Pin Marker"
        >
          {/* Pin Circle with White Ring & Glow Shadow */}
          <div
            className="bg-[#34422a] size-[40px] rounded-full flex items-center justify-center shadow-[0px_0px_0px_4px_white,0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]"
            data-node-id="1:2220"
          >
            <div className="relative size-[18px]" data-node-id="1:2222">
              <Image
                src="/assets/properties/add/map-pin-center.svg"
                alt="موقع العقار"
                width={18}
                height={18}
                className="size-full object-contain"
              />
            </div>
          </div>

          {/* Ground Blur Shadow */}
          <div
            className="w-[12px] h-[6px] rounded-full bg-[rgba(24,29,23,0.3)] blur-[1px] mt-[4px]"
            data-node-id="1:2225"
          />
        </div>

        {/* Map Navigation Controls Floating Corner (Bottom Left) */}
        <div
          className="absolute bottom-[16px] left-[16px] bg-white rounded-[12px] p-[4px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] flex flex-col gap-[4px] z-10"
          data-node-id="1:2226"
          data-name="Map Navigation Controls Floating Corner"
        >
          {/* Zoom In Button */}
          <button
            type="button"
            onClick={handleZoomIn}
            title="تكبير الخريطة"
            className="size-[32px] rounded-[8px] flex items-center justify-center hover:bg-[#f1f5eb] active:bg-[#e4ebd9] transition-colors cursor-pointer"
            data-node-id="1:2228"
          >
            <div className="relative size-[12px]" data-node-id="1:2229">
              <Image
                src="/assets/properties/add/zoom-plus.svg"
                alt="تكبير"
                width={12}
                height={12}
                className="size-full object-contain"
              />
            </div>
          </button>

          {/* Divider */}
          <div className="bg-[#e5eae0] h-px w-full" data-node-id="1:2231" />

          {/* Zoom Out Button */}
          <button
            type="button"
            onClick={handleZoomOut}
            title="تصغير الخريطة"
            className="size-[32px] rounded-[8px] flex items-center justify-center hover:bg-[#f1f5eb] active:bg-[#e4ebd9] transition-colors cursor-pointer"
            data-node-id="1:2232"
          >
            <div className="relative size-[12px]" data-node-id="1:2233">
              <Image
                src="/assets/properties/add/zoom-minus.svg"
                alt="تصغير"
                width={12}
                height={2}
                className="size-full object-contain"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

