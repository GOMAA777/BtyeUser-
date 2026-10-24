import Image from "next/image";

export function ConflictSafeguardBanner() {
  return (
    <div
      className="bg-[#E5EAE0] border border-[#DFE4DB]/60 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-start gap-[16px] p-[24px] rounded-[16px] w-full shrink-0"
      data-name="Conflict Prevention & Safe Guarding Banner"
    >
      {/* 1. Shield Icon Container (Right in RTL) */}
      <div className="bg-[#34422A] size-[40px] rounded-[12px] flex items-center justify-center shrink-0 shadow-xs">
        <div className="w-[15px] h-[18px] relative">
          <Image
            src="/assets/import-properties/f9b3331b2d07978be4c53dbea0cd47e0869d95d1.svg"
            alt=""
            width={15}
            height={18}
            className="object-contain"
          />
        </div>
      </div>

      {/* 2. Content Details (Left in RTL) */}
      <div className="flex flex-col items-start gap-[4px] flex-1">
        <h3 className="font-cairo font-bold text-[#181D17] text-[14px] leading-[20px]">
          ضمان التوافق وحماية البيانات وسياسة عدم التعارض
        </h3>
        <p className="font-cairo font-normal text-[#454840] text-[14px] leading-[22.75px]">
          لن يتم إنشاء أي عقار أو وحدة تلقائيًا دون تأكيدك ومراجعة الأسعار. عند الضغط على الاستيراد، سيتم استيراد تفاصيل الوحدات، التقويم المالي، وسياسات الأسعار، وربطها فوراً بنظام المزامنة المزدوج ثنائي الاتجاه (2-Way iCal &amp; API Sync) لمنع الحجز المزدوج (Overbooking) عبر كافة القنوات الشريكة.
        </p>
      </div>
    </div>
  );
}
