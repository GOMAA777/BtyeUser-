import Image from "next/image";

interface SummaryMetricStripProps {
  discoveredPropertiesCount?: number;
  totalUnitsCount?: number;
  upcomingBookingsCount?: number;
}

export function SummaryMetricStrip({
  discoveredPropertiesCount = 2,
  totalUnitsCount = 36,
  upcomingBookingsCount = 28,
}: SummaryMetricStripProps) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-[16px] w-full shrink-0"
      data-name="Summary Metric Strip"
    >
      {/* 1. Right Card: Discovered Properties */}
      <div
        className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#E5EAE0]/40 flex items-center justify-between p-[16px] rounded-[16px]"
        data-name="Metric: Discovered Properties"
      >
        <div className="flex flex-col items-start gap-[4px]">
          <span className="font-cairo font-medium text-[#454840] text-[11px] leading-[16px]">
            العقارات المكتشفة
          </span>
          <div className="flex items-baseline gap-[6px]">
            <span className="font-cairo font-bold text-[#181D17] text-[24px] leading-[34px]">
              {discoveredPropertiesCount}
            </span>
            <span className="font-cairo font-normal text-[#454840] text-[13px] leading-[20px]">
              عقارات
            </span>
          </div>
        </div>

        <div className="bg-[#E5EAE0] size-[48px] rounded-[12px] flex items-center justify-center shrink-0">
          <div className="size-[18px] relative">
            <Image
              src="/assets/import-properties/970ff8065475754eedfcc805f913b8be324d45eb.svg"
              alt=""
              width={18}
              height={18}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* 2. Middle Card: Total Units */}
      <div
        className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#E5EAE0]/40 flex items-center justify-between p-[16px] rounded-[16px]"
        data-name="Metric: Total Units"
      >
        <div className="flex flex-col items-start gap-[4px]">
          <span className="font-cairo font-medium text-[#454840] text-[11px] leading-[16px]">
            إجمالي الوحدات
          </span>
          <div className="flex items-baseline gap-[6px]">
            <span className="font-cairo font-bold text-[#181D17] text-[24px] leading-[34px]">
              {totalUnitsCount}
            </span>
            <span className="font-cairo font-normal text-[#454840] text-[13px] leading-[20px]">
              وحدة
            </span>
          </div>
        </div>

        <div className="bg-[#D8E8CB] size-[48px] rounded-[12px] flex items-center justify-center shrink-0">
          <div className="size-[18px] relative">
            <Image
              src="/assets/import-properties/61b36a282f03d3e905ebd3beece77a419594d23a.svg"
              alt=""
              width={18}
              height={18}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* 3. Left Card: Upcoming Bookings */}
      <div
        className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#E5EAE0]/40 flex items-center justify-between p-[16px] rounded-[16px]"
        data-name="Metric: Upcoming Bookings"
      >
        <div className="flex flex-col items-start gap-[4px]">
          <span className="font-cairo font-medium text-[#454840] text-[11px] leading-[16px]">
            الحجوزات القادمة
          </span>
          <div className="flex items-baseline gap-[6px]">
            <span className="font-cairo font-bold text-[#181D17] text-[24px] leading-[34px]">
              {upcomingBookingsCount}
            </span>
            <span className="font-cairo font-normal text-[#454840] text-[13px] leading-[20px]">
              حجز مؤكد
            </span>
          </div>
        </div>

        <div className="bg-[#DDE4DC] size-[48px] rounded-[12px] flex items-center justify-center shrink-0">
          <div className="w-[18px] h-[20px] relative">
            <Image
              src="/assets/import-properties/c0aeb45b2debcb82c5462a58a481d668406e9dfe.svg"
              alt=""
              width={18}
              height={20}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
