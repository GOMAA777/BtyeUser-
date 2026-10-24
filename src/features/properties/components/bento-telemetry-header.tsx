import Image from "next/image";

export function BentoTelemetryHeader() {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-12 gap-[16px] w-full shrink-0"
      data-name="Header & Target Owner Banner (Bento Architecture)"
    >
      {/* 1. Right Card: Title & Context (8 Columns in RTL) */}
      <div
        className="bg-white lg:col-span-8 flex flex-col justify-between p-[24px] rounded-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#E5EAE0]/40"
        data-name="Title & Context (8 Cols)"
      >
        <div className="flex flex-col gap-[8px] items-start w-full">
          {/* Sub-tag / Breadcrumb Indicator */}
          <div className="flex items-center gap-[8px]">
            <div className="size-[15px] relative shrink-0">
              <Image
                src="/assets/import-properties/3f81ffe03b13d69715e5689d42ca4469affe0cfd.svg"
                alt=""
                width={15}
                height={14}
                className="object-contain"
              />
            </div>
            <span className="font-cairo font-semibold text-[#34422A] text-[12px] leading-[18px] tracking-[0.6px]">
              بوابة المزامنة الذكية للأصول الفندقية
            </span>
          </div>

          {/* Heading 1 */}
          <h1 className="font-cairo font-bold text-[#181D17] text-[24px] leading-[34px]">
            مراجعة العقارات المستوردة
          </h1>

          {/* Subtitle / Description */}
          <p className="font-cairo font-normal text-[#454840] text-[16px] leading-[26px] max-w-[672px]">
            راجع العقارات والوحدات والحجوزات المستوردة من Booking.com قبل اعتماد إضافتها النهائية إلى محفظة المنصة وتفعيل المزامنة المزدوجة.
          </p>
        </div>

        {/* Connected Account Info Box */}
        <div className="pt-[24px] w-full">
          <div className="bg-[#F1F5EB] flex items-center justify-between p-[16px] rounded-[12px] border border-[#DFE4DB]/50">
            <div className="flex items-center gap-[16px]">
              {/* House/Property Icon Container */}
              <div className="bg-[#4B5940] size-[44px] rounded-[12px] flex items-center justify-center shrink-0 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
                <Image
                  src="/assets/import-properties/2150b6c0f7127e7cb74e76be64ec83972fd1a1e8.svg"
                  alt=""
                  width={21}
                  height={21}
                  className="object-contain"
                />
              </div>

              {/* Account Details */}
              <div className="flex flex-col items-start gap-[2px]">
                <div className="flex items-center gap-[8px]">
                  <span className="font-cairo font-bold text-[#181D17] text-[14px] leading-[20px]">
                    محمد عبد الله العتيبي
                  </span>
                  <span className="bg-[#DFE4DB] text-[#454840] font-cairo font-medium text-[11px] leading-[16px] px-[8px] py-[2px] rounded-full">
                    #OWN-4091
                  </span>
                </div>
                <div className="flex items-center gap-[4px] font-cairo text-[13px] leading-[20px]">
                  <span className="text-[#454840]">الحساب المرتبط:</span>
                  <span className="text-[#34422A] font-medium font-mono">booking_hotel_riyadh_sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Left Card: Live Sync Telemetry (4 Columns in RTL) */}
      <div
        className="bg-[#34422A] lg:col-span-4 flex flex-col justify-between p-[24px] rounded-[16px] relative overflow-hidden shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] min-h-[240px]"
        data-name="Live Sync Telemetry (4 Cols)"
      >
        {/* Decorative blur backdrop orb */}
        <div className="absolute bg-[rgba(84,99,73,0.2)] blur-[20px] bottom-[-40px] left-[-40px] rounded-full size-[160px] pointer-events-none" />

        {/* Top Header Row */}
        <div className="flex items-center justify-between w-full relative z-10">
          <span className="font-cairo font-semibold text-[#D8E8C7] text-[12px] leading-[18px] tracking-[0.6px] uppercase">
            حالة التكامل الفوري
          </span>
          <div className="relative flex items-center justify-center size-[10px]">
            <span className="absolute bg-[#D8E8C7] rounded-full size-[10px] animate-ping opacity-75" />
            <span className="relative bg-[#D8E8C7] rounded-full size-[10px]" />
          </div>
        </div>

        {/* Middle Metric: 100% Ready */}
        <div className="flex flex-col gap-[4px] py-[16px] relative z-10">
          <div className="flex items-baseline gap-[12px]">
            <span className="font-cairo font-bold text-white text-[36px] leading-[48px]">
              100%
            </span>
            <span className="font-cairo font-normal text-[#E5EAE0] text-[13px] leading-[20px]">
              جاهز للترحيل
            </span>
          </div>

          <p className="font-cairo font-normal text-[#BCCCAC] text-[13px] leading-[20px]">
            تمت مطابقة مواصفات وتواريخ 36 وحدة بنجاح دون أي تعارضات زمنية في التقويم المالي.
          </p>
        </div>
      </div>
    </div>
  );
}
