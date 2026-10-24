import Image from "next/image";

export function BrandSide() {
  return (
    <div
      className="flex bg-brand-panel flex-col items-start justify-between overflow-hidden p-6 sm:p-8 lg:px-10 lg:py-6 xl:px-12 xl:py-8 2xl:p-[64px] relative self-stretch w-full max-w-[563px] z-[1]"
      data-node-id="1:111"
    >
      {/* Background Architectural Grid / Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/assets/auth/bg_architecture_lines.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Faint Ambient Glow Top-Right */}
      <div
        className="absolute bg-[#d8e8cb]/10 blur-[32px] rounded-full size-[384px] -top-[128px] -right-[128px] pointer-events-none"
        data-node-id="1:123"
      />

      {/* Faint Ambient Glow Bottom-Left */}
      <div
        className="absolute bg-[#546349]/20 blur-[32px] rounded-full size-[384px] -bottom-[128px] -left-[128px] pointer-events-none"
        data-node-id="1:124"
      />

      {/* Header / Platform Identity */}
      <div
        className="flex items-center gap-[16px] relative z-10 w-full"
        data-node-id="1:125"
      >
        {/* Logo Glass Container */}
        <div
          className="backdrop-blur-[6px] bg-white/10 flex items-center justify-center p-[10px] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[56px] shrink-0"
          data-node-id="1:130"
        >
          <div className="relative size-[36px]" data-node-id="1:131">
            <Image
              src="/assets/auth/logo_abraj.png"
              alt="شعار أبراج لإدارة العقارات"
              width={36}
              height={36}
              className="size-full object-contain"
            />
          </div>
        </div>

        {/* Brand Name & Tagline */}
        <div className="flex flex-col items-start gap-[2px]" data-node-id="1:126">
          <h2
            className="font-cairo font-semibold text-[30px] leading-[42px] text-white tracking-[-0.75px]"
            data-node-id="1:128"
          >
            ابراج
          </h2>
          <p
            className="font-cairo font-medium text-[12px] leading-[18px] text-brand-panel-text tracking-[0.3px]"
            data-node-id="1:129"
          >
            المنصة المؤسسية لإدارة وتشغيل الأصول العقارية
          </p>
        </div>
      </div>

      {/* Center Narrative & Pillars */}
      <div
        className="flex flex-col gap-3 xl:gap-4 2xl:gap-[24px] items-start relative z-10 w-full my-auto py-2 xl:py-4 2xl:py-[48px]"
        data-node-id="1:132"
      >
        {/* Pill Badge */}
        <div
          className="backdrop-blur-[6px] bg-white/10 flex items-center gap-[8px] px-[14px] py-[6px] rounded-full shrink-0"
          data-node-id="1:134"
        >
          <div
            className="bg-brand-panel-dot rounded-full size-[8px] shrink-0"
            data-node-id="1:137"
          />
          <span
            className="font-cairo font-semibold text-[12px] leading-[18px] text-brand-panel-text"
            data-node-id="1:136"
          >
            الجيل الجديد لإدارة الاملاك
          </span>
        </div>

        {/* Heading 1 */}
        <h1
          className="font-cairo font-bold text-[36px] leading-[45px] text-white text-right"
          data-node-id="1:138"
        >
          المنظومة المتكاملة لإدارة
          <br />
          الأصول والوحدات الفندقية
          <br />
          والسكنية بالمملكة
        </h1>

        {/* Subtitle Description */}
        <p
          className="font-cairo font-normal text-[16px] leading-[26px] text-brand-panel-text text-right max-w-[480px]"
          data-node-id="1:140"
        >
          تمكّن مُلاك العقارات، الصناديق الاستثمارية، ومديري الضيافة من أتمتة الإشغال، التحصيل، وتكامل الأنظمة التشغيلية عبر تجربة ذكية موحدة وموثوقة.
        </p>

        {/* 3 Feature Pillars / Trust Badges */}
        <div
          className="flex flex-col gap-2.5 xl:gap-3 2xl:gap-[16px] w-full pt-1 xl:pt-2 2xl:pt-[8px]"
          data-node-id="1:142"
        >
          {/* Feature 1 */}
          <div
            className="backdrop-blur-[2px] bg-white/[0.05] flex items-start gap-3 xl:gap-4 2xl:gap-[16px] p-3 xl:p-3.5 2xl:p-[16px] rounded-[12px] w-full"
            data-node-id="1:143"
          >
            <div
              className="bg-white/15 flex items-center justify-center rounded-[8px] size-[40px] shrink-0"
              data-node-id="1:149"
            >
              <div className="relative w-[17px] h-[14px]" data-node-id="1:150">
                <Image
                  src="/assets/auth/icon_feature_calendar.svg"
                  alt=""
                  width={17}
                  height={14}
                  className="size-full object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[2px] flex-1 text-right" data-node-id="1:144">
              <h3
                className="font-cairo font-semibold text-[18px] leading-[28px] text-white"
                data-node-id="1:146"
              >
                ربط مباشر مع منصات الحجز والتقويم الذكي
              </h3>
              <p
                className="font-cairo font-normal text-[13px] leading-[20px] text-brand-panel-text"
                data-node-id="1:148"
              >
                مزامنة فورية للأسعار، التوافر، وسجلات النزلاء لمنع الازدواجية البرمجية.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div
            className="backdrop-blur-[2px] bg-white/[0.05] flex items-start gap-3 xl:gap-4 2xl:gap-[16px] p-3 xl:p-3.5 2xl:p-[16px] rounded-[12px] w-full"
            data-node-id="1:152"
          >
            <div
              className="bg-white/15 flex items-center justify-center rounded-[8px] size-[40px] shrink-0"
              data-node-id="1:158"
            >
              <div className="relative w-[13px] h-[16px]" data-node-id="1:159">
                <Image
                  src="/assets/auth/icon_feature_lock.svg"
                  alt=""
                  width={13}
                  height={16}
                  className="size-full object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[2px] flex-1 text-right" data-node-id="1:153">
              <h3
                className="font-cairo font-semibold text-[18px] leading-[28px] text-white"
                data-node-id="1:155"
              >
                إدارة تشغيلية وأقفال ذكية بدون تدخل يدوي
              </h3>
              <p
                className="font-cairo font-normal text-[13px] leading-[20px] text-brand-panel-text"
                data-node-id="1:157"
              >
                توليد رموز الدخول الذاتية للوحدات وجدولة فرق النظافة والصيانة آلياً.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div
            className="backdrop-blur-[2px] bg-white/[0.05] flex items-start gap-3 xl:gap-4 2xl:gap-[16px] p-3 xl:p-3.5 2xl:p-[16px] rounded-[12px] w-full"
            data-node-id="1:161"
          >
            <div
              className="bg-white/15 flex items-center justify-center rounded-[8px] size-[40px] shrink-0"
              data-node-id="1:167"
            >
              <div className="relative size-[16px]" data-node-id="1:168">
                <Image
                  src="/assets/auth/icon_feature_tax.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="size-full object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[2px] flex-1 text-right" data-node-id="1:162">
              <h3
                className="font-cairo font-semibold text-[18px] leading-[28px] text-white"
                data-node-id="1:164"
              >
                تقارير مالية وتوافق تشغيلي معتمد
              </h3>
              <p
                className="font-cairo font-normal text-[13px] leading-[20px] text-brand-panel-text"
                data-node-id="1:166"
              >
                امتثال شامل للفوترة الإلكترونية وأنظمة الضرائب والتقارير الاستثمارية الربعية.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Footer Endorsements */}
      <div
        className="flex items-center justify-between relative z-10 w-full pt-3 xl:pt-4 2xl:pt-[24px]"
        data-node-id="1:170"
      >
        {/* REGA Endorsement */}
        <div className="flex items-center gap-[8px]" data-node-id="1:176">
          <div className="relative size-[22px] shrink-0" data-node-id="1:179">
            <Image
              src="/assets/auth/icon_authority_badge.svg"
              alt=""
              width={22}
              height={22}
              className="size-full object-contain"
            />
          </div>
          <span
            className="font-cairo font-semibold text-[12px] leading-[18px] text-brand-panel-text/90 text-right"
            data-node-id="1:178"
          >
            معتمد ومتوافق مع معايير الهيئة العامة للعقار
          </span>
        </div>

        {/* 256-bit Security */}
        <div className="flex items-center gap-[8px] opacity-90" data-node-id="1:171">
          <div className="relative w-[11px] h-[14px] shrink-0" data-node-id="1:174">
            <Image
              src="/assets/auth/icon_security_lock.svg"
              alt=""
              width={11}
              height={14}
              className="size-full object-contain"
            />
          </div>
          <span
            className="font-cairo font-semibold text-[12px] leading-[18px] text-brand-panel-text/90 text-right"
            data-node-id="1:173"
          >
            تشفير آمن للبيانات 256-bit
          </span>
        </div>
      </div>
    </div>
  );
}
