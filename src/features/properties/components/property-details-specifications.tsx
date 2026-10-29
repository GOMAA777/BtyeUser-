"use client";

import Image from "next/image";

export function PropertyDetailsSpecifications() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 flex flex-col gap-4 w-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-neutral-100/60">
        <span className="font-medium text-[#75786f] text-[11px]">
          سجل الأصول الموثق
        </span>

        <div className="flex items-center gap-2.5">
          <h2 className="font-bold text-[#181d17] text-lg leading-tight">
            بيانات العقار والمواصفات المعمارية
          </h2>
          <div className="bg-[#4b5940] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[12px] size-9 flex items-center justify-center shrink-0">
            <div className="relative w-[15px] h-[16.7px]">
              <Image
                src="/assets/properties/details/9edaffdd891e367489261334740a08b54cc99ca7.svg"
                alt="specs"
                width={15}
                height={17}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Property Key Attributes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Attribute 1: نوع العقار */}
        <div className="bg-[#f1f5eb] rounded-[12px] p-2.5 flex flex-col justify-center">
          <span className="font-medium text-[#75786f] text-[11px] mb-1 leading-none">
            نوع العقار
          </span>
          <div className="flex items-center gap-2">
            <div className="relative size-[13.5px] shrink-0">
              <Image
                src="/assets/properties/details/7dd0a854d969f06f098e1ca40361e0974cdd0c44.svg"
                alt="type"
                width={14}
                height={14}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-semibold text-[#181d17] text-sm leading-tight">
              عمارة سكنية فاخرة
            </span>
          </div>
        </div>

        {/* Attribute 2: المدينة والمنطقة */}
        <div className="bg-[#f1f5eb] rounded-[12px] p-2.5 flex flex-col justify-center">
          <span className="font-medium text-[#75786f] text-[11px] mb-1 leading-none">
            المدينة والمنطقة
          </span>
          <div className="flex items-center gap-2">
            <div className="relative w-[13.5px] h-[14.3px] shrink-0">
              <Image
                src="/assets/properties/details/a8ad203d0ee4d03b11d4fe726262a1fafbf9e2be.svg"
                alt="city"
                width={14}
                height={14}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-semibold text-[#181d17] text-sm leading-tight">
              الرياض · المنطقة الشمالية
            </span>
          </div>
        </div>

        {/* Attribute 3: الحي السكني */}
        <div className="bg-[#f1f5eb] rounded-[12px] p-2.5 flex flex-col justify-center">
          <span className="font-medium text-[#75786f] text-[11px] mb-1 leading-none">
            الحي السكني
          </span>
          <div className="flex items-center gap-2">
            <div className="relative w-[15px] h-3 shrink-0">
              <Image
                src="/assets/properties/details/3d0dfc77a0a52d9c2c58a00a150300d13922b2d2.svg"
                alt="district"
                width={15}
                height={12}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-semibold text-[#181d17] text-sm leading-tight">
              حي الياسمين المتميز
            </span>
          </div>
        </div>

        {/* Attribute 4: سنة البناء وبدء التشغيل */}
        <div className="bg-[#f1f5eb] rounded-[12px] p-2.5 flex flex-col justify-center">
          <span className="font-medium text-[#75786f] text-[11px] mb-1 leading-none">
            سنة البناء وبدء التشغيل
          </span>
          <div className="flex items-center gap-2">
            <div className="relative w-[13.5px] h-[15px] shrink-0">
              <Image
                src="/assets/properties/details/a8d111d115e599d5efec8d6d1c8bb72580747b83.svg"
                alt="year"
                width={14}
                height={15}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-semibold text-[#181d17] text-sm leading-tight">
              2023 م
            </span>
          </div>
        </div>

        {/* Attribute 5: العنوان التفصيلي ومخطط القطعة (Full width) */}
        <div className="sm:col-span-2 bg-[#f1f5eb] rounded-[12px] p-2.5 flex flex-col justify-center">
          <span className="font-medium text-[#75786f] text-[11px] mb-1 leading-none">
            العنوان التفصيلي ومخطط القطعة
          </span>
          <div className="flex items-center gap-2">
            <div className="relative w-[13.5px] h-[15px] shrink-0">
              <Image
                src="/assets/properties/details/80efc8b24a0c1bda5286a4af882450e17fbdefd8.svg"
                alt="plot"
                width={14}
                height={15}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-semibold text-[#181d17] text-sm leading-tight">
              طريق أنس بن مالك، قطعة رقم 412، المخطط المعتمد 2408
            </span>
          </div>
        </div>

        {/* Attribute 6: تصريح الهيئة العامة للعقار (Full width) */}
        <div className="sm:col-span-2 bg-[#f1f5eb] rounded-[12px] p-2.5 flex flex-col justify-center">
          <span className="font-medium text-[#75786f] text-[11px] mb-1 leading-none">
            تصريح الهيئة العامة للعقار
          </span>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative w-3 h-[15px] shrink-0">
                <Image
                  src="/assets/properties/details/5005d6faac1f99ad3c89c89dff3e63f245d1d70d.svg"
                  alt="permit"
                  width={12}
                  height={15}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-[#34422a] text-sm leading-tight">
                معتمد برقم 72019482
              </span>
            </div>
            <span className="font-medium text-[#75786f] text-[11px]">
              صالح حتى ذو القعدة 1446هـ
            </span>
          </div>
        </div>
      </div>

      {/* Editorial Architectural Narrative */}
      <div className="bg-[#f1f5eb]/60 rounded-[12px] p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="relative w-3 h-[15px] shrink-0">
            <Image
              src="/assets/properties/details/6ccee37b7b7ce739133e1a9488dbf2c338c20a07.svg"
              alt="description"
              width={12}
              height={15}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="font-bold text-[#181d17] text-sm leading-tight">
            الوصف المعماري والتشغيلي
          </h3>
        </div>
        <p className="font-normal text-[#454840] text-sm leading-relaxed text-right">
          عمارة سكنية فاخرة مشيدة وفق أعلى المعايير المعمارية الحديثة بتناغم الحجر الطبيعي والواجهات الزجاجية العازلة للصوت والحرارة. مجهزة بنظام متكامل للأقفال الذكية مع شواحن سيارات كهربائية ومصاعد رقمية، تقع في موقع استراتيجي راقٍ قريب من الطرق المحورية ومطار الملك خالد الدولي.
        </p>
      </div>

      {/* Structural Features Strip (4 badges) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
        {/* Feature 1 */}
        <div className="bg-[#f1f5eb] rounded-[12px] p-2.5 flex items-center justify-between">
          <span className="font-medium text-[#181d17] text-[11px] leading-tight">
            شواحن EV مخصصة
          </span>
          <div className="relative size-[15px] shrink-0">
            <Image
              src="/assets/properties/details/6633b9f1636b3388a6dbcf8ed6711867f6456a0d.svg"
              alt="ev"
              width={15}
              height={15}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Feature 2 */}
        <div className="bg-[#f1f5eb] rounded-[12px] p-2.5 flex items-center justify-between">
          <span className="font-medium text-[#181d17] text-[11px] leading-tight">
            مصاعد أوتيس الذكية
          </span>
          <div className="relative size-[15px] shrink-0">
            <Image
              src="/assets/properties/details/c952a76c9b8a8be156fcbf0ed0fe7edd1a70abf7.svg"
              alt="elevator"
              width={15}
              height={15}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Feature 3 */}
        <div className="bg-[#f1f5eb] rounded-[12px] p-2.5 flex items-center justify-between">
          <span className="font-medium text-[#181d17] text-[11px] leading-tight">
            مواقف سفلية مظللة
          </span>
          <div className="relative w-[10.8px] h-[15px] shrink-0">
            <Image
              src="/assets/properties/details/9a2bf981aa79887e1f50b82d29abe4936eb510a0.svg"
              alt="parking"
              width={11}
              height={15}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Feature 4 */}
        <div className="bg-[#f1f5eb] rounded-[12px] p-2.5 flex items-center justify-between">
          <span className="font-medium text-[#181d17] text-[11px] leading-tight">
            مراقبة CCTV 24/7
          </span>
          <div className="relative w-[16.7px] h-[13.3px] shrink-0">
            <Image
              src="/assets/properties/details/f80e8ac4ba5c694d52f074ba1b11e17b8cf7a99e.svg"
              alt="cctv"
              width={17}
              height={14}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

