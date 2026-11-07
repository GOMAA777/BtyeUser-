"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function OnboardingCards() {
  const router = useRouter();
  const [selectedMode, setSelectedMode] = useState<"auto" | "manual" | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAction = async (mode: "auto" | "manual") => {
    setSelectedMode(mode);
    setIsLoading(true);
    try {
      if (mode === "auto") {
        toast.info("جاري توجيهك لربط منصات Booking.com و Airbnb...");
      } else {
        toast.info("جاري تهيئة نموذج تسجيل العقار الجديد يدويًا...");
      }
      await new Promise((resolve) => setTimeout(resolve, 600));
      router.push(`/dashboard?onboarding=${mode}`);
    } catch {
      toast.error("حدث خطأ أثناء المتابعة");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col lg:flex-row items-stretch justify-center gap-[24px] max-w-[1024px] w-full"
      data-node-id="1:21098"
    >
      {/* ========================================================
          CARD 1: Automated Sync & Import (Recommended) — visual RIGHT
      ======================================================== */}
      <div
        className="bg-white flex-1 min-w-[320px] rounded-[20px] shadow-[0px_4px_20px_-4px_rgba(38,51,32,0.06)] p-[24px] flex flex-col justify-between transition-all duration-200 hover:shadow-[0px_8px_30px_-4px_rgba(38,51,32,0.12)] border border-[#dfe4db]/30"
        data-node-id="1:21171"
      >
        <div>
          {/* 1. Header Badges */}
          <div
            className="flex items-center justify-between pb-[16px] w-full"
            data-node-id="1:21174"
          >
            {/* Left label in RTL */}
            <span
              className="font-cairo font-medium text-[11px] leading-[16px] text-[#75786f]"
              data-node-id="1:21176"
            >
              مزامنة في ٣ دقائق
            </span>

            {/* Right recommendation pill in RTL */}
            <div
              className="bg-[#d8e8c7] flex items-center gap-[6px] px-[12px] py-[4px] rounded-[9999px]"
              data-node-id="1:21177"
            >
              <span
                className="font-cairo font-semibold text-[12px] leading-[18px] text-[#131f0b]"
                data-node-id="1:21179"
              >
                موصى به · توفير الوقت والجهد
              </span>
              <div className="relative size-[14.67px] shrink-0" data-node-id="1:21180">
                <Image
                  src="/assets/onboarding/icon_sparkle.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="size-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* 2. Heading & Subtitle */}
          <div className="flex flex-col gap-[4px] text-right" data-node-id="1:21182">
            <h2
              className="font-cairo font-bold text-[24px] leading-[34px] text-[#181d17]"
              data-node-id="1:21184"
            >
              استيراد من Booking.com أو Airbnb
            </h2>
            <p
              className="font-cairo font-normal text-[14px] leading-[22.75px] text-[#75786f]"
              data-node-id="1:21186"
            >
              استورد العقارات والوحدات والحجوزات المتاحة فوراً من منصات الحجز المرتبطة بحسابك بضغطة زر واحدة.
            </p>
          </div>

          {/* 3. Visual Synchronization Graphic Asset */}
          <div
            className="bg-[#f1f5eb] rounded-[16px] p-[16px] my-[24px] flex flex-col items-center justify-center"
            data-node-id="1:21188"
          >
            {/* Row 1: Figma order LTR — صرح | sync | channels */}
            <div
              className="flex items-center justify-between w-full px-[4px]"
              dir="ltr"
              data-node-id="1:21189"
            >
              <div
                className="bg-[#34422a] text-white h-[40px] px-[14px] rounded-[12px] flex items-center gap-[6px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] select-none"
                data-node-id="1:21190"
              >
                <span
                  className="font-cairo font-bold text-[12px] leading-[18px] text-white"
                  data-node-id="1:21192"
                >
                  صرح
                </span>
                <div className="relative w-[15px] h-[12px]" data-node-id="1:21193">
                  <Image
                    src="/assets/onboarding/icon_sarh_seal.svg"
                    alt=""
                    width={15}
                    height={12}
                    className="size-full object-contain"
                  />
                </div>
              </div>

              <div
                className="flex flex-col items-center justify-center px-[4px]"
                data-node-id="1:21195"
              >
                <div
                  className="bg-white size-[40px] rounded-[9999px] flex items-center justify-center drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
                  data-node-id="1:21196"
                >
                  <div className="relative w-[16.67px] h-[15px]" data-node-id="1:21197">
                    <Image
                      src="/assets/onboarding/icon_sync.svg"
                      alt="مزامنة"
                      width={17}
                      height={15}
                      className="size-full object-contain"
                    />
                  </div>
                </div>
                <span
                  className="font-cairo font-semibold text-[10px] leading-[15px] text-[#34422a] mt-[4px]"
                  data-node-id="1:21201"
                >
                  مزامنة حية
                </span>
              </div>

              <div className="flex items-center gap-[4px]" data-node-id="1:21202">
                <div
                  className="bg-[#ff385c] text-white font-cairo font-bold text-[12px] tracking-[-0.3px] h-[40px] px-[12px] rounded-[12px] flex items-center justify-center drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] select-none"
                  data-node-id="1:21203"
                >
                  airbnb
                </div>
                <div
                  className="bg-[#003580] text-white font-cairo font-bold text-[12px] tracking-[-0.3px] h-[40px] px-[12px] rounded-[12px] flex items-center justify-center drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] select-none"
                  data-node-id="1:21206"
                >
                  Booking.com
                </div>
              </div>
            </div>

            {/* Row 2: Taglines under diagram */}
            <div
              className="flex items-center justify-center gap-[16px] pt-[16px] w-full"
              data-node-id="1:21210"
            >
              <div className="flex items-center gap-[4px]" data-node-id="1:21215">
                <div className="relative w-[9.33px] h-[12.25px]" data-node-id="1:21217">
                  <Image
                    src="/assets/onboarding/icon_bank_lock.svg"
                    alt=""
                    width={10}
                    height={12}
                    className="size-full object-contain"
                  />
                </div>
                <span
                  className="font-cairo font-medium text-[11px] leading-[16px] text-[#54624c]"
                  data-node-id="1:21216"
                >
                  تشفير مصرفي آمن
                </span>
              </div>

              <div className="flex items-center gap-[4px]" data-node-id="1:21211">
                <div className="relative w-[9.33px] h-[11.67px]" data-node-id="1:21213">
                  <Image
                    src="/assets/onboarding/icon_lightning.svg"
                    alt=""
                    width={10}
                    height={12}
                    className="size-full object-contain"
                  />
                </div>
                <span
                  className="font-cairo font-medium text-[11px] leading-[16px] text-[#54624c]"
                  data-node-id="1:21212"
                >
                  تحديث اللحظة باللحظة
                </span>
              </div>
            </div>
          </div>

          {/* 4. Feature Points List */}
          <div
            className="flex flex-col gap-[8px] pb-[24px] text-right"
            data-node-id="1:21220"
          >
            {/* Point 1 */}
            <div className="flex items-start gap-[8px] w-full" data-node-id="1:21221">
              <div
                className="bg-[#d8e8cb] size-[20px] rounded-[9999px] flex items-center justify-center shrink-0 mt-[2px]"
                data-node-id="1:21225"
              >
                <div className="relative w-[10.44px] h-[7.96px]" data-node-id="1:21226">
                  <Image
                    src="/assets/onboarding/icon_check.svg"
                    alt=""
                    width={11}
                    height={8}
                    className="size-full object-contain"
                  />
                </div>
              </div>
              <p
                className="font-cairo font-normal text-[13px] leading-[20px] text-[#181d17]"
                data-node-id="1:21223"
              >
                استيراد كامل لبيانات وتفاصيل العقارات، المواصفات الفنية، والصور المعتمدة بدقة عالية.
              </p>
            </div>

            {/* Point 2 */}
            <div className="flex items-start gap-[8px] w-full" data-node-id="1:21228">
              <div
                className="bg-[#d8e8cb] size-[20px] rounded-[9999px] flex items-center justify-center shrink-0 mt-[2px]"
                data-node-id="1:21232"
              >
                <div className="relative w-[10.44px] h-[7.96px]" data-node-id="1:21233">
                  <Image
                    src="/assets/onboarding/icon_check.svg"
                    alt=""
                    width={11}
                    height={8}
                    className="size-full object-contain"
                  />
                </div>
              </div>
              <p
                className="font-cairo font-normal text-[13px] leading-[20px] text-[#181d17]"
                data-node-id="1:21230"
              >
                نقل تلقائي لكافة الوحدات، الغرف، الملحقات، والتقسيمات الداخلية المرتبطة بالأصل.
              </p>
            </div>

            {/* Point 3 */}
            <div className="flex items-start gap-[8px] w-full" data-node-id="1:21235">
              <div
                className="bg-[#d8e8cb] size-[20px] rounded-[9999px] flex items-center justify-center shrink-0 mt-[2px]"
                data-node-id="1:21239"
              >
                <div className="relative w-[10.44px] h-[7.96px]" data-node-id="1:21240">
                  <Image
                    src="/assets/onboarding/icon_check.svg"
                    alt=""
                    width={11}
                    height={8}
                    className="size-full object-contain"
                  />
                </div>
              </div>
              <p
                className="font-cairo font-normal text-[13px] leading-[20px] text-[#181d17]"
                data-node-id="1:21237"
              >
                مزامنة فورية شاملة لجداول الأسعار الديناميكية، التقويم، والحجوزات المستقبلية.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Primary Action Button */}
        <button
          type="button"
          onClick={() => handleAction("auto")}
          disabled={isLoading}
          className="bg-[#34422a] hover:bg-[#2c3723] active:scale-[0.99] text-white h-[48px] rounded-[12px] flex items-center justify-center gap-[8px] w-full font-cairo font-semibold text-[14px] leading-[20px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          data-node-id="1:21242"
        >
          {isLoading && selectedMode === "auto" ? (
            <span className="inline-block size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <div className="relative size-[12px]" data-node-id="1:21243">
                <Image
                  src="/assets/onboarding/icon_arrow_auto.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="size-full object-contain"
                />
              </div>
              <span data-node-id="1:21246">استيراد العقارات تلقائياً</span>
            </>
          )}
        </button>
      </div>

      {/* ========================================================
          CARD 2: Manual Registration (Bespoke / Controlled)
          Physical LEFT in RTL
      ======================================================== */}
      <div
        className="bg-white flex-1 min-w-[320px] rounded-[20px] shadow-[0px_4px_20px_-4px_rgba(38,51,32,0.06)] p-[24px] flex flex-col justify-between transition-all duration-200 hover:shadow-[0px_8px_30px_-4px_rgba(38,51,32,0.12)] border border-[#dfe4db]/30"
        data-node-id="1:21099"
      >
        <div>
          {/* 1. Header Badges */}
          <div
            className="flex items-center justify-between pb-[16px] w-full"
            data-node-id="1:21102"
          >
            {/* Left label in RTL */}
            <span
              className="font-cairo font-medium text-[11px] leading-[16px] text-[#75786f]"
              data-node-id="1:21104"
            >
              إدخال خطوة بخطوة
            </span>

            {/* Right pill in RTL */}
            <div
              className="bg-[#ebefe6] flex items-center gap-[6px] px-[12px] py-[4px] rounded-[9999px]"
              data-node-id="1:21105"
            >
              <span
                className="font-cairo font-semibold text-[12px] leading-[18px] text-[#454840]"
                data-node-id="1:21107"
              >
                تحكم يدوي مخصص
              </span>
              <div className="relative size-[12px] shrink-0" data-node-id="1:21108">
                <Image
                  src="/assets/onboarding/icon_sliders.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="size-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* 2. Heading & Subtitle */}
          <div className="flex flex-col gap-[4px] text-right" data-node-id="1:21110">
            <h2
              className="font-cairo font-bold text-[24px] leading-[34px] text-[#181d17]"
              data-node-id="1:21112"
            >
              إضافة عقار يدويًا
            </h2>
            <p
              className="font-cairo font-normal text-[14px] leading-[22.75px] text-[#75786f]"
              data-node-id="1:21114"
            >
              أدخل مواصفات العقار، التراخيص الحكومية، وحدد شروط وقواعد التأجير والأسعار بنفسك بالكامل.
            </p>
          </div>

          {/* 3. Architectural Blueprint Illustration Banner */}
          <div
            className="bg-[#f1f5eb] rounded-[16px] p-[16px] my-[24px] flex flex-col items-center justify-center"
            data-node-id="1:21144"
          >
            {/* Row 1: Structural Illustration Box */}
            <div
              className="flex items-center justify-between w-full px-[4px]"
              data-node-id="1:21145"
            >
              {/* Architecture Blueprint Icon Square (Physical Right in RTL) */}
              <div
                className="bg-white size-[64px] rounded-[16px] flex items-center justify-center drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] shrink-0"
                data-node-id="1:21158"
              >
                <div className="relative size-[24px]" data-node-id="1:21159">
                  <Image
                    src="/assets/onboarding/icon_blueprint_building.svg"
                    alt="مخطط معماري"
                    width={24}
                    height={24}
                    className="size-full object-contain"
                  />
                </div>
              </div>

              {/* Text Information Stack (Physical Left in RTL) */}
              <div
                className="flex flex-col items-end text-right"
                data-node-id="1:21146"
              >
                <span
                  className="font-cairo font-bold text-[14px] leading-[20px] text-[#181d17]"
                  data-node-id="1:21148"
                >
                  إعداد هيكلي متكامل
                </span>
                <span
                  className="font-cairo font-medium text-[11px] leading-[16px] text-[#75786f] mt-[2px]"
                  data-node-id="1:21151"
                >
                  صك الملكية · تراخيص بلدي وإيجار
                </span>
                <div
                  className="flex items-center gap-[4px] mt-[4px]"
                  data-node-id="1:21153"
                >
                  <span
                    className="font-cairo font-normal text-[12px] leading-[20px] text-[#34422a]"
                    data-node-id="1:21155"
                  >
                    تخصيص كامل للتسعير والسياسات
                  </span>
                  <div className="relative w-[10.5px] h-[9.33px] shrink-0" data-node-id="1:21156">
                    <Image
                      src="/assets/onboarding/icon_pricing.svg"
                      alt=""
                      width={11}
                      height={10}
                      className="size-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Taglines under diagram */}
            <div
              className="flex items-center justify-center gap-[16px] pt-[16px] w-full"
              data-node-id="1:21162"
            >
              <div className="flex items-center gap-[4px]" data-node-id="1:21167">
                <div className="relative w-[12.83px] h-[12.25px]" data-node-id="1:21169">
                  <Image
                    src="/assets/onboarding/icon_shield_compliance.svg"
                    alt=""
                    width={13}
                    height={13}
                    className="size-full object-contain"
                  />
                </div>
                <span
                  className="font-cairo font-medium text-[11px] leading-[16px] text-[#54624c]"
                  data-node-id="1:21168"
                >
                  مطابق لاشتراطات الهيئة
                </span>
              </div>

              <div className="flex items-center gap-[4px]" data-node-id="1:21163">
                <div className="relative size-[10.5px]" data-node-id="1:21165">
                  <Image
                    src="/assets/onboarding/icon_contracts.svg"
                    alt=""
                    width={11}
                    height={11}
                    className="size-full object-contain"
                  />
                </div>
                <span
                  className="font-cairo font-medium text-[11px] leading-[16px] text-[#54624c]"
                  data-node-id="1:21164"
                >
                  تحكم كامل في العقود
                </span>
              </div>
            </div>
          </div>

          {/* 4. Feature Points List */}
          <div
            className="flex flex-col gap-[8px] pb-[24px] text-right"
            data-node-id="1:21116"
          >
            {/* Point 1 */}
            <div className="flex items-start gap-[8px] w-full" data-node-id="1:21117">
              <div
                className="bg-[#d8e8cb] size-[20px] rounded-[9999px] flex items-center justify-center shrink-0 mt-[2px]"
                data-node-id="1:21121"
              >
                <div className="relative w-[10.44px] h-[7.96px]" data-node-id="1:21122">
                  <Image
                    src="/assets/onboarding/icon_check.svg"
                    alt=""
                    width={11}
                    height={8}
                    className="size-full object-contain"
                  />
                </div>
              </div>
              <p
                className="font-cairo font-normal text-[13px] leading-[20px] text-[#181d17]"
                data-node-id="1:21119"
              >
                تسجيل بيانات العقار، موقعه الجغرافي الدقيق، وربطه برقم الترخيص السياحي والوطني.
              </p>
            </div>

            {/* Point 2 */}
            <div className="flex items-start gap-[8px] w-full" data-node-id="1:21124">
              <div
                className="bg-[#d8e8cb] size-[20px] rounded-[9999px] flex items-center justify-center shrink-0 mt-[2px]"
                data-node-id="1:21128"
              >
                <div className="relative w-[10.44px] h-[7.96px]" data-node-id="1:21129">
                  <Image
                    src="/assets/onboarding/icon_check.svg"
                    alt=""
                    width={11}
                    height={8}
                    className="size-full object-contain"
                  />
                </div>
              </div>
              <p
                className="font-cairo font-normal text-[13px] leading-[20px] text-[#181d17]"
                data-node-id="1:21126"
              >
                إضافة الوحدات المستقلة وتحديد مواسم التسعير وسياسات التأمين والتأجير المرنة.
              </p>
            </div>

            {/* Point 3 */}
            <div className="flex items-start gap-[8px] w-full" data-node-id="1:21131">
              <div
                className="bg-[#d8e8cb] size-[20px] rounded-[9999px] flex items-center justify-center shrink-0 mt-[2px]"
                data-node-id="1:21135"
              >
                <div className="relative w-[10.44px] h-[7.96px]" data-node-id="1:21136">
                  <Image
                    src="/assets/onboarding/icon_check.svg"
                    alt=""
                    width={11}
                    height={8}
                    className="size-full object-contain"
                  />
                </div>
              </div>
              <p
                className="font-cairo font-normal text-[13px] leading-[20px] text-[#181d17]"
                data-node-id="1:21133"
              >
                إعداد جداول مهام النظافة والتشغيل، وتهيئة بروتوكولات أقفال الدخول الذكية.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Secondary Action Button */}
        <button
          type="button"
          onClick={() => handleAction("manual")}
          disabled={isLoading}
          className="bg-white hover:bg-[#f6fbf1] active:scale-[0.99] text-[#34422a] border border-[#dfe4db]/80 h-[48px] rounded-[12px] flex items-center justify-center gap-[8px] w-full font-cairo font-semibold text-[14px] leading-[20px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          data-node-id="1:21138"
        >
          {isLoading && selectedMode === "manual" ? (
            <span className="inline-block size-5 border-2 border-[#34422a]/30 border-t-[#34422a] rounded-full animate-spin" />
          ) : (
            <>
              <div className="relative size-[12px]" data-node-id="1:21139">
                <Image
                  src="/assets/onboarding/icon_arrow_manual.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="size-full object-contain"
                />
              </div>
              <span data-node-id="1:21142">إضافة عقار يدويًا</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
