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
    <div
      className="w-full max-w-[576px] bg-white rounded-[16px] overflow-hidden p-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] relative flex flex-col gap-[16px]"
      data-node-id="1:22786"
    >
      {/* Top row: match Figma visual — ID on left, details+icon on right */}
      <div
        className="flex items-start justify-between w-full"
        dir="ltr"
        data-node-id="1:22787"
      >
        <div className="flex flex-col items-start text-right" data-node-id="1:22788">
          <span
            className="font-cairo font-medium text-[11px] leading-[16px] text-[#75786f]"
            data-node-id="1:22789"
          >
            معرّف الأصل
          </span>
          <span
            className="font-cairo font-bold text-[12px] leading-[18px] text-[#34422a]"
            data-node-id="1:22790"
          >
            {assetId}
          </span>
        </div>

        <div className="flex items-center gap-[16px]" data-node-id="1:22791">
          <div className="flex flex-col items-end" data-node-id="1:22792">
            <div className="flex items-center gap-[8px]" data-node-id="1:22793">
              <div
                className="bg-[#ebefe6] px-[8px] py-[2px] rounded-full"
                data-node-id="1:22794"
              >
                <span
                  className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840]"
                  data-node-id="1:22795"
                >
                  {propertyType}
                </span>
              </div>
              <h2
                className="font-cairo font-bold text-[18px] leading-[28px] text-[#181d17]"
                data-node-id="1:22797"
              >
                {propertyName}
              </h2>
            </div>
            <div className="pt-[4px] w-full" data-node-id="1:22798">
              <div className="flex items-center gap-[4px] justify-end" data-node-id="1:22799">
                <span
                  className="font-cairo font-normal text-[13px] leading-[20px] text-[#454840]"
                  data-node-id="1:22801"
                >
                  {propertyLocation}
                </span>
                <div className="relative w-[10.667px] h-[13.333px] shrink-0" data-node-id="1:22802">
                  <Image
                    src="/assets/properties/ready/icon_location_pin.svg"
                    alt=""
                    width={11}
                    height={13}
                    className="size-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-[#f1f5eb] rounded-[12px] size-[56px] flex items-center justify-center shrink-0"
            data-node-id="1:22804"
          >
            <div className="relative size-[24px]" data-node-id="1:22805">
              <Image
                src="/assets/properties/ready/icon_building.svg"
                alt=""
                width={24}
                height={24}
                className="size-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats: Figma LTR order — نشط | متصلة | 12 */}
      <div
        className="bg-[rgba(241,245,235,0.7)] flex gap-[8px] items-start justify-center p-[16px] rounded-[12px] w-full"
        dir="ltr"
        data-node-id="1:22807"
      >
        <div
          className="flex-1 flex flex-col items-center justify-center min-w-0 px-[4px] py-[8px]"
          data-node-id="1:22808"
        >
          <div className="pb-[4px]" data-node-id="1:22809">
            <div className="flex items-center gap-[4px]" data-node-id="1:22810">
              <span
                className="font-cairo font-bold text-[12px] leading-[18px] text-[#181d17]"
                data-node-id="1:22812"
              >
                نشط
              </span>
              <div className="relative size-[13.333px] shrink-0" data-node-id="1:22813">
                <Image
                  src="/assets/properties/ready/icon_sync_active.svg"
                  alt=""
                  width={13}
                  height={13}
                  className="size-full object-contain"
                />
              </div>
            </div>
          </div>
          <span
            className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840] text-center"
            data-node-id="1:22816"
          >
            ربط الجدولة والحجز
          </span>
        </div>

        <div
          className="flex-1 flex flex-col items-center justify-center min-w-0 px-[5px] py-[8px] border-x border-[rgba(197,200,189,0.3)]"
          data-node-id="1:22817"
        >
          <div className="pb-[4px]" data-node-id="1:22818">
            <div className="flex items-center gap-[4px]" data-node-id="1:22819">
              <span
                className="font-cairo font-bold text-[12px] leading-[18px] text-[#181d17]"
                data-node-id="1:22821"
              >
                متصلة
              </span>
              <div className="relative w-[13.333px] h-[17.5px] shrink-0" data-node-id="1:22822">
                <Image
                  src="/assets/properties/ready/icon_smart_lock.svg"
                  alt=""
                  width={13}
                  height={18}
                  className="size-full object-contain"
                />
              </div>
            </div>
          </div>
          <span
            className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840] text-center"
            data-node-id="1:22825"
          >
            بوابة الأقفال الذكية
          </span>
        </div>

        <div
          className="flex-1 flex flex-col items-center justify-center min-w-0 p-[4px]"
          data-node-id="1:22826"
        >
          <div className="pb-[4px]" data-node-id="1:22827">
            <div className="flex items-center gap-[6px]" data-node-id="1:22828">
              <span
                className="font-cairo font-bold text-[18px] leading-[28px] text-[#181d17]"
                data-node-id="1:22830"
              >
                {unitsCount}
              </span>
              <div
                className="bg-[#34422a] rounded-full size-[8px] shrink-0"
                data-node-id="1:22831"
              />
            </div>
          </div>
          <span
            className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840] text-center"
            data-node-id="1:22833"
          >
            وحدة سكنية مفعّلة
          </span>
        </div>
      </div>
    </div>
  );
}
