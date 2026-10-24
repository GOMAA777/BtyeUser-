import Image from "next/image";

export function RegisterBrandSide() {
  return (
    <div
      className="hidden lg:flex bg-[#4b5940] flex-col items-start justify-between overflow-hidden p-[56px] relative self-stretch shrink-0 w-[588px] z-[1]"
      data-node-id="1:17587"
    >
      {/* Background Architectural Geometry & Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <Image
          src="/assets/register/bg_architecture_lines_reg.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Ambient Glows */}
      <div
        className="absolute bg-[#d8e8cb]/10 blur-[32px] rounded-full size-[384px] -top-[128px] -right-[128px] pointer-events-none"
        data-node-id="1:17598"
      />
      <div
        className="absolute bg-[#d8e8c7]/[0.05] blur-[32px] rounded-full size-[320px] bottom-[40px] left-0 pointer-events-none"
        data-node-id="1:17599"
      />

      {/* Top Section: Identity & Government Accreditation */}
      <div className="flex flex-col gap-[16px] relative z-10 w-full" data-node-id="1:17600">
        <div className="flex items-center gap-[16px] w-full" data-node-id="1:17601">
          {/* Logo Glass Container */}
          <div
            className="backdrop-blur-[6px] bg-white/10 flex items-center justify-center p-[10px] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[56px] shrink-0"
            data-node-id="1:17606"
          >
            <div className="relative size-[36px]" data-node-id="1:17607">
              <Image
                src="/assets/auth/logo_abraj.png"
                alt="شعار أبراج"
                width={36}
                height={36}
                className="size-full object-contain"
              />
            </div>
          </div>

          {/* Brand Name & Tagline */}
          <div className="flex flex-col items-start gap-[2.5px]" data-node-id="1:17602">
            <h2
              className="font-cairo font-semibold text-[30px] leading-[42px] text-white tracking-[-0.75px]"
              data-node-id="1:17604"
            >
              ابراج
            </h2>
            <p
              className="font-cairo font-medium text-[12px] leading-[18px] text-[#bfcfaf] tracking-[0.3px]"
              data-node-id="1:17605"
            >
              المنصة المؤسسية لإدارة وتشغيل الأصول العقارية
            </p>
          </div>
        </div>

        {/* Pill Badge */}
        <div
          className="backdrop-blur-[6px] bg-white/10 flex items-center gap-[8px] px-[14px] py-[6px] rounded-full shrink-0 w-fit"
          data-node-id="1:17608"
        >
          <div
            className="bg-[#d8e8c7] rounded-full size-[8px] shrink-0"
            data-node-id="1:17611"
          />
          <span
            className="font-cairo font-semibold text-[12px] leading-[18px] text-[#bfcfaf]"
            data-node-id="1:17610"
          >
            الجيل الجديد لإدارة الاملاك
          </span>
        </div>
      </div>

      {/* Middle Section: Hero & 4 Feature Tiles */}
      <div
        className="flex flex-col gap-[24px] items-start relative z-10 w-full py-[32px]"
        data-node-id="1:17613"
      >
        {/* Hero Headings */}
        <div className="flex flex-col gap-[12px] items-start w-full text-right" data-node-id="1:17614">
          <h1
            className="w-full font-cairo font-bold text-[34px] xl:text-[36px] leading-[45px] text-white"
            data-node-id="1:17616"
          >
            ابدأ بإدارة عقاراتك بذكاء
          </h1>
          <p
            className="w-full font-cairo font-normal text-[15px] xl:text-[16px] leading-[26px] text-[#c1c8c0]"
            data-node-id="1:17618"
          >
            من إدارة الوحدات والحجوزات إلى التشغيل والأتمتة، كل أدواتك في منصة واحدة متكاملة ترتقي بتجربة الضيافة والاستثمار العقاري.
          </p>
        </div>

        {/* 4 Frosted Feature Cards Grid */}
        <div
          className="grid grid-cols-2 gap-[14px] w-full pt-[8px]"
          data-node-id="1:17619"
        >
          {/* Card 1: Real Estate & Units */}
          <div
            className="bg-[rgba(80,87,80,0.3)] backdrop-blur-[4px] border border-white/10 flex flex-col gap-[8px] p-[16px] rounded-[12px] text-right"
            data-node-id="1:17620"
          >
            <div className="flex items-center justify-between w-full" data-node-id="1:17621">
              <h3
                className="font-cairo font-semibold text-[16px] xl:text-[17px] leading-[26px] text-white"
                data-node-id="1:17623"
              >
                إدارة العقارات والوحدات
              </h3>
              <div
                className="bg-[rgba(223,228,219,0.2)] flex items-center justify-center rounded-[8px] size-[32px] shrink-0"
                data-node-id="1:17624"
              >
                <div className="relative size-[15px]" data-node-id="1:17625">
                  <Image
                    src="/assets/register/icon_card_buildings.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="size-full object-contain"
                  />
                </div>
              </div>
            </div>
            <p
              className="font-cairo font-normal text-[12px] xl:text-[13px] leading-[20px] text-[#c1c8c0]"
              data-node-id="1:17628"
            >
              متابعة الإشغال والجاهزية اللحظية وعقود التأجير بكل دقة.
            </p>
          </div>

          {/* Card 2: Booking & Airbnb Sync */}
          <div
            className="bg-[rgba(80,87,80,0.3)] backdrop-blur-[4px] border border-white/10 flex flex-col gap-[8px] p-[16px] rounded-[12px] text-right"
            data-node-id="1:17629"
          >
            <div className="flex items-center justify-between w-full" data-node-id="1:17630">
              <h3
                className="font-cairo font-semibold text-[16px] xl:text-[17px] leading-[26px] text-white"
                data-node-id="1:17632"
              >
                ربط Booking و Airbnb
              </h3>
              <div
                className="bg-[rgba(223,228,219,0.2)] flex items-center justify-center rounded-[8px] size-[32px] shrink-0"
                data-node-id="1:17633"
              >
                <div className="relative size-[16px]" data-node-id="1:17634">
                  <Image
                    src="/assets/register/icon_card_sync.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="size-full object-contain"
                  />
                </div>
              </div>
            </div>
            <p
              className="font-cairo font-normal text-[12px] xl:text-[13px] leading-[20px] text-[#c1c8c0]"
              data-node-id="1:17637"
            >
              مزامنة فورية للتقاويم والأسعار ومنع التعارض المزدوج تلقائياً.
            </p>
          </div>

          {/* Card 3: Operations & Maintenance */}
          <div
            className="bg-[rgba(80,87,80,0.3)] backdrop-blur-[4px] border border-white/10 flex flex-col gap-[8px] p-[16px] rounded-[12px] text-right"
            data-node-id="1:17638"
          >
            <div className="flex items-center justify-between w-full" data-node-id="1:17639">
              <h3
                className="font-cairo font-semibold text-[16px] xl:text-[17px] leading-[26px] text-white"
                data-node-id="1:17641"
              >
                التشغيل والصيانة تلقائيًا
              </h3>
              <div
                className="bg-[rgba(223,228,219,0.2)] flex items-center justify-center rounded-[8px] size-[32px] shrink-0"
                data-node-id="1:17642"
              >
                <div className="relative size-[16px]" data-node-id="1:17643">
                  <Image
                    src="/assets/register/icon_card_tools.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="size-full object-contain"
                  />
                </div>
              </div>
            </div>
            <p
              className="font-cairo font-normal text-[12px] xl:text-[13px] leading-[20px] text-[#c1c8c0]"
              data-node-id="1:17646"
            >
              توليد مهام التنظيف وتعيين الفنيين اللحظي فور مغادرة الضيوف.
            </p>
          </div>

          {/* Card 4: WhatsApp Integration */}
          <div
            className="bg-[rgba(80,87,80,0.3)] backdrop-blur-[4px] border border-white/10 flex flex-col gap-[8px] p-[16px] rounded-[12px] text-right"
            data-node-id="1:17647"
          >
            <div className="flex items-center justify-between w-full" data-node-id="1:17648">
              <h3
                className="font-cairo font-semibold text-[16px] xl:text-[17px] leading-[26px] text-white"
                data-node-id="1:17650"
              >
                تواصل ذكي عبر واتساب
              </h3>
              <div
                className="bg-[rgba(223,228,219,0.2)] flex items-center justify-center rounded-[8px] size-[32px] shrink-0"
                data-node-id="1:17651"
              >
                <div className="relative size-[16px]" data-node-id="1:17652">
                  <Image
                    src="/assets/register/icon_card_whatsapp.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="size-full object-contain"
                  />
                </div>
              </div>
            </div>
            <p
              className="font-cairo font-normal text-[12px] xl:text-[13px] leading-[20px] text-[#c1c8c0]"
              data-node-id="1:17655"
            >
              إرسال تلقائي لأكواد الدخول الذكي وتأكيدات الحجز وفواتير الضريبة.
            </p>
          </div>
        </div>

        {/* Metric Inline Ribbon */}
        <div
          className="bg-[rgba(223,228,219,0.15)] backdrop-blur-[2px] flex items-center justify-between p-[16px] rounded-[12px] w-full"
          data-node-id="1:17656"
        >
          {/* Metric 1 (Right in RTL): Active units */}
          <div className="flex flex-col items-center flex-1 text-center" data-node-id="1:17669">
            <span
              className="font-cairo font-bold text-[20px] leading-[30px] text-[#d8e8c7]"
              data-node-id="1:17671"
            >
              +14,200
            </span>
            <span
              className="font-cairo font-normal text-[12px] xl:text-[13px] leading-[20px] text-[#c1c8c0]"
              data-node-id="1:17673"
            >
              وحدة نشطة تحت الإدارة
            </span>
          </div>

          {/* Divider */}
          <div className="bg-[rgba(223,228,219,0.3)] h-[32px] w-px shrink-0" data-node-id="1:17668" />

          {/* Metric 2: Uptime & Sync */}
          <div className="flex flex-col items-center flex-1 text-center" data-node-id="1:17663">
            <span
              className="font-cairo font-bold text-[20px] leading-[30px] text-[#d8e8c7]"
              data-node-id="1:17665"
            >
              99.98%
            </span>
            <span
              className="font-cairo font-normal text-[12px] xl:text-[13px] leading-[20px] text-[#c1c8c0]"
              data-node-id="1:17667"
            >
              توافر الأنظمة والمزامنة
            </span>
          </div>

          {/* Divider */}
          <div className="bg-[rgba(223,228,219,0.3)] h-[32px] w-px shrink-0" data-node-id="1:17662" />

          {/* Metric 3: Speed Multiplier */}
          <div className="flex flex-col items-center flex-1 text-center" data-node-id="1:17657">
            <span
              className="font-cairo font-bold text-[20px] leading-[30px] text-[#d8e8c7]"
              data-node-id="1:17659"
            >
              3.8x
            </span>
            <span
              className="font-cairo font-normal text-[12px] xl:text-[13px] leading-[20px] text-[#c1c8c0]"
              data-node-id="1:17661"
            >
              تسارع كفاءة التشغيل
            </span>
          </div>
        </div>
      </div>

      {/* Brand Footer Endorsements */}
      <div
        className="flex items-center justify-between relative z-10 w-full pt-[24px]"
        data-node-id="1:17674"
      >
        {/* REGA Endorsement */}
        <div className="flex items-center gap-[8px]" data-node-id="1:17680">
          <div className="relative size-[22px] shrink-0" data-node-id="1:17683">
            <Image
              src="/assets/auth/icon_authority_badge.svg"
              alt=""
              width={22}
              height={22}
              className="size-full object-contain"
            />
          </div>
          <span
            className="font-cairo font-semibold text-[12px] leading-[18px] text-[rgba(191,207,175,0.9)] text-right"
            data-node-id="1:17682"
          >
            معتمد ومتوافق مع معايير الهيئة العامة للعقار
          </span>
        </div>

        {/* 256-bit Security */}
        <div className="flex items-center gap-[8px] opacity-80" data-node-id="1:17675">
          <div className="relative w-[11px] h-[14px] shrink-0" data-node-id="1:17678">
            <Image
              src="/assets/auth/icon_security_lock.svg"
              alt=""
              width={11}
              height={14}
              className="size-full object-contain"
            />
          </div>
          <span
            className="font-cairo font-semibold text-[12px] leading-[18px] text-[rgba(191,207,175,0.9)] text-right"
            data-node-id="1:17677"
          >
            تشفير آمن للبيانات 256-bit
          </span>
        </div>
      </div>
    </div>
  );
}
