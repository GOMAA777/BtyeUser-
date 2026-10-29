"use client";

import Image from "next/image";

interface PropertyReadyCardProps {
  propertyName?: string;
  propertyType?: string;
  propertyLocation?: string;
  assetId?: string;
  unitsCount?: number;
}

export function PropertyReadyCard({
  propertyName = "عمارة النخيل",
  propertyType = "عمارة سكنية",
  propertyLocation = "الرياض، حي الياسمين · طريق أنس بن مالك",
  assetId = "RWQ-NKH-01",
  unitsCount = 12,
}: PropertyReadyCardProps) {
  return (
    <div className="w-full max-w-[576px] mx-auto bg-white rounded-[16px] overflow-hidden p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] relative flex flex-col gap-4">
      {/* Top accent gradient bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#4b5940] via-[#34422a] to-[#d8e8cb]"
        aria-hidden="true"
      />

      {/* Upper Property Info Section */}
      <div className="flex items-start justify-between gap-4">
        {/* Left: Asset ID */}
        <div className="flex flex-col items-start shrink-0 text-left">
          <span className="font-medium text-[#75786f] text-[11px] leading-tight">
            معرّف الأصل
          </span>
          <span className="font-bold text-[#34422a] text-xs leading-normal mt-0.5">
            {assetId}
          </span>
        </div>

        {/* Right: Property Details & Icon */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-[#181d17] text-lg leading-tight">
                {propertyName}
              </h2>
              <div className="bg-[#ebefe6] rounded-full px-2 py-0.5 shrink-0">
                <span className="font-medium text-[#454840] text-[11px] leading-tight block">
                  {propertyType}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-normal text-[#454840] text-[13px] leading-tight">
                {propertyLocation}
              </span>
              <div className="relative w-[10.7px] h-[13.3px] shrink-0">
                <Image
                  src="/assets/properties/ready/e984358a0bb1c3ff38fdc7735a3e5906184a024c.svg"
                  alt="pin"
                  width={11}
                  height={13}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#f1f5eb] rounded-[12px] size-14 flex items-center justify-center shrink-0">
            <div className="relative size-6">
              <Image
                src="/assets/properties/ready/a180c501fe9fbf508a96806dcf447c15a8f1df1f.svg"
                alt="Building"
                width={24}
                height={24}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Metrics Grid */}
      <div className="bg-[#f1f5eb]/70 rounded-[12px] p-4 flex items-center justify-between">
        {/* Left: Booking sync */}
        <div className="flex flex-col items-center justify-center flex-1 px-1">
          <div className="flex items-center gap-1 pb-1">
            <span className="font-bold text-[#181d17] text-xs leading-none">
              نشط
            </span>
            <div className="relative size-[13.3px] shrink-0">
              <Image
                src="/assets/properties/ready/2005b7de96d292d5ba8214a5b633f77643828398.svg"
                alt="sync"
                width={13}
                height={13}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <span className="font-medium text-[#454840] text-[11px] leading-tight text-center">
            ربط الجدولة والحجز
          </span>
        </div>

        {/* Middle: Smart lock gateway */}
        <div className="flex flex-col items-center justify-center flex-1 px-2 border-x border-[rgba(197,200,189,0.3)]">
          <div className="flex items-center gap-1 pb-1">
            <span className="font-bold text-[#181d17] text-xs leading-none">
              متصلة
            </span>
            <div className="relative w-[13.3px] h-[17.5px] shrink-0">
              <Image
                src="/assets/properties/ready/5b37df6ee1c286439b3fd6b7d8242900b0b96d9f.svg"
                alt="lock"
                width={13}
                height={17}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <span className="font-medium text-[#454840] text-[11px] leading-tight text-center">
            بوابة الأقفال الذكية
          </span>
        </div>

        {/* Right: Active units */}
        <div className="flex flex-col items-center justify-center flex-1 px-1">
          <div className="flex items-center gap-1.5 pb-1">
            <div className="bg-[#34422a] rounded-full size-2 shrink-0" />
            <span className="font-bold text-[#181d17] text-lg leading-none">
              {unitsCount}
            </span>
          </div>
          <span className="font-medium text-[#454840] text-[11px] leading-tight text-center">
            وحدة سكنية مفعّلة
          </span>
        </div>
      </div>
    </div>
  );
}
