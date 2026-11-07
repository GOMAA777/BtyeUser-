"use client";

import Link from "next/link";
import { useState } from "react";
import { showToast } from "@/lib/toast";

const ASSETS = {
  refresh: "/assets/integrations/pending/pending_icon_refresh.svg",
  badgeClock: "/assets/integrations/pending/pending_icon_badge_clock.svg",
  partner: "/assets/integrations/pending/pending_icon_partner.svg",
  etaClock: "/assets/integrations/pending/pending_icon_eta_clock.svg",
  statusHourglass: "/assets/integrations/pending/pending_icon_status_hourglass.svg",
  stepSync: "/assets/integrations/pending/pending_icon_step_sync.svg",
  stepReview: "/assets/integrations/pending/pending_icon_step_review.svg",
  stepCheck: "/assets/integrations/pending/pending_icon_step_check.svg",
  lock: "/assets/integrations/pending/pending_icon_lock.svg",
  details: "/assets/integrations/pending/pending_icon_details.svg",
  copy: "/assets/integrations/pending/pending_icon_copy.svg",
  refId: "/assets/integrations/pending/pending_icon_ref_id.svg",
  info: "/assets/integrations/pending/pending_icon_info.svg",
  audit: "/assets/integrations/pending/pending_icon_audit.svg",
  cloud: "/assets/integrations/pending/pending_icon_cloud.svg",
  refreshBottom: "/assets/integrations/pending/pending_icon_refresh_bottom.svg",
  back: "/assets/integrations/pending/pending_icon_back.svg",
  shield: "/assets/integrations/pending/pending_icon_shield.svg",
} as const;

const PROPERTY_ID = "BK-SA-982140";
const REQUEST_ID = "REQ-BK-8849201";

function AssetIcon({
  src,
  width,
  height,
  alt = "",
}: {
  src: string;
  width: number;
  height: number;
  alt?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="block max-w-none"
      draggable={false}
    />
  );
}

export function IntegrationStatusPendingView() {
  const [isRechecking, setIsRechecking] = useState(false);

  const handleRecheck = () => {
    if (isRechecking) return;
    setIsRechecking(true);
    showToast.info(
      "جاري إعادة التحقق من حالة الربط",
      "يتم الاستعلام عن حالة اعتماد الشريك عبر Booking Connectivity API..."
    );
    window.setTimeout(() => {
      setIsRechecking(false);
      showToast.success("لا تزال حالة الطلب: بانتظار موافقة فريق الشركاء");
    }, 1200);
  };

  const handleCopy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      showToast.success(`تم نسخ ${label}`);
    } catch {
      showToast.error("تعذر النسخ إلى الحافظة");
    }
  };

  return (
    <div
      className="flex w-full flex-col gap-[24px]"
      data-node-id="1:19843"
      data-name="Container"
      dir="rtl"
    >
      {/* TOP HERO GREETING BAR */}
      <section
        className="flex min-h-[102px] flex-col justify-center gap-[12px] rounded-[16px] bg-white px-[24px] py-[17px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] sm:flex-row sm:items-center sm:justify-between"
        data-node-id="1:19844"
        data-name="Section - TOP HERO GREETING BAR"
      >
        <div className="flex min-w-0 flex-1 flex-col items-start gap-[4px]">
          <div className="flex flex-wrap items-center gap-[8px]">
            <h1
              className="text-[24px] font-bold leading-[34px] text-[#181d17]"
              data-node-id="1:19857"
            >
              ربط منصات الحجز — حالة الطلب
            </h1>
            <div
              className="flex items-center gap-[6px] rounded-full bg-[#d8e8cb] px-[12px] py-[4px]"
              data-node-id="1:19851"
              data-name="Background"
            >
              <span className="text-[11px] font-medium leading-[16px] text-[#5a6952]">
                معالجة سحابية نشطة
              </span>
              <span className="size-[8px] shrink-0 rounded-full bg-[#34422a]" />
            </div>
          </div>
          <p
            className="text-[14px] font-normal leading-[22px] text-[#454840]"
            data-node-id="1:19861"
          >
            متابعة حالة اعتماد وتفعيل الربط المباشر مع منصات الحجز وقنوات الـ OTA.
          </p>
        </div>

        <button
          type="button"
          onClick={handleRecheck}
          disabled={isRechecking}
          className="inline-flex h-[44px] shrink-0 items-center gap-[4px] rounded-[12px] bg-[#34422a] px-[16px] text-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-opacity hover:opacity-95 disabled:opacity-70"
          data-node-id="1:19846"
        >
          <span className="text-[14px] font-semibold leading-[20px]">إعادة التحقق من حالة الربط</span>
          <AssetIcon src={ASSETS.refresh} width={13.333} height={13.333} />
        </button>
      </section>

      {/* Booking.com channel card */}
      <div className="flex w-full items-start justify-center" data-node-id="1:19862">
        <div
          className="relative flex min-h-[229px] w-full flex-col justify-between overflow-clip rounded-[16px] bg-white p-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
          data-node-id="1:19863"
          data-name="Booking.com Active Channel (Selected)"
        >
          <div className="absolute inset-x-0 top-0 h-[6px] bg-[#34422a]" data-node-id="1:19892" />

          <div className="flex w-full flex-col gap-[15.375px]">
            <div className="flex w-full items-start justify-between gap-[12px]">
              <div
                className="flex shrink-0 items-center gap-[6px] rounded-full bg-[#fef8ed] px-[12px] py-[4px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
                data-node-id="1:19866"
              >
                <span className="text-[11px] font-medium leading-[16px] text-[#8a5314]">
                  بانتظار الموافقة
                </span>
                <AssetIcon src={ASSETS.badgeClock} width={10.667} height={13.333} />
              </div>

              <div className="flex items-center gap-[16px]">
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-[4px]">
                    <AssetIcon src={ASSETS.partner} width={16.5} height={15.75} />
                    <span className="text-[18px] font-semibold leading-[28px] text-[#181d17]">
                      Booking.com
                    </span>
                  </div>
                  <span className="text-[11px] font-medium leading-[16px] text-[#454840]">
                    شريك اتصال فندقي معتمد (Connectivity Partner)
                  </span>
                </div>
                <div
                  className="flex size-[48px] shrink-0 items-center justify-center rounded-[12px] bg-[#003580] pb-[8.5px] pt-[7.5px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
                  data-node-id="1:19880"
                >
                  <span className="text-[24px] font-bold leading-[32px] tracking-[-1.2px] text-white">
                    B.
                  </span>
                </div>
              </div>
            </div>

            <p className="text-start text-[14px] font-normal leading-[22.75px] text-[#454840]">
              تم إرسال مفاتيح الربط وتأكيد الملكية إلى مركز إدارة شركاء Booking.com
              <br />
              بنجاح للمصادقة الفنية والتعاقدية.
            </p>
          </div>

          <div className="w-full pt-[16px]">
            <div
              className="flex w-full items-center justify-between rounded-[12px] bg-[#f1f5eb] px-[16px] pb-[10px] pt-[16px]"
              data-node-id="1:19885"
            >
              <span className="text-[11px] font-medium leading-[16px] text-[#75786f]">
                تحديث دوري كل 15 دقيقة
              </span>
              <div className="flex items-center gap-[8px]">
                <span className="text-[11px] font-medium leading-[16px] text-[#454840]">
                  جاري التحقق من التوافق والمصادقة
                </span>
                <span className="size-[8px] shrink-0 rounded-full bg-[#e99a38]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN PENDING STATUS SECTION */}
      <section
        className="flex w-full flex-col gap-[24px] overflow-clip rounded-[16px] bg-[#fef9ee] p-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
        data-node-id="1:19893"
        data-name="MAIN PENDING STATUS SECTION & BANNER"
      >
        <div className="flex w-full flex-col-reverse items-start justify-between gap-[16px] sm:flex-row sm:items-center">
          <div
            className="flex items-center gap-[12px] rounded-[12px] bg-[rgba(255,255,255,0.8)] px-[16px] py-[8px] backdrop-blur-[2px]"
            data-node-id="1:19895"
          >
            <div className="flex flex-col items-end">
              <span className="text-[11px] font-medium leading-[16px] text-[#75786f]">
                الوقت التقديري المتبقي
              </span>
              <span className="text-[14px] font-bold leading-[20px] text-[#181d17]">
                قرابة 4 ساعات عمل
              </span>
            </div>
            <AssetIcon src={ASSETS.etaClock} width={16.667} height={16.667} />
          </div>

          <div className="flex items-start gap-[15.99px]">
            <div className="flex flex-col gap-[3.375px]">
              <h2 className="text-start text-[20px] font-bold leading-[30px] text-[#5a380a]">
                تم إرسال طلب الربط، وبانتظار موافقة المنصة.
              </h2>
              <p className="max-w-[768px] text-start text-[14px] font-normal leading-[22.75px] text-[#7a5214]">
                يستغرق اعتماد الشريك وقناة الربط من قِبل فريق Booking.com عادةً ما بين ساعتين إلى 24
                ساعة عمل. بعد
                <br />
                إتمام الاعتماد، سيبدأ النظام بمزامنة الحجوزات، الأسعار، وحالات الوحدات آلياً دون
                الحاجة لأي تدخل يدوي.
              </p>
            </div>
            <div className="flex h-[52px] w-[48px] shrink-0 items-start pt-[4px]">
              <div
                className="flex size-[48px] items-center justify-center rounded-[16px] bg-[rgba(233,154,56,0.15)]"
                data-node-id="1:19910"
              >
                <AssetIcon src={ASSETS.statusHourglass} width={23.333} height={23.333} />
              </div>
            </div>
          </div>
        </div>

        {/* Stepper */}
        <div
          className="flex w-full flex-col items-stretch gap-[12px] rounded-[12px] bg-[rgba(255,255,255,0.9)] p-[16px] lg:flex-row lg:items-center lg:justify-between lg:gap-[8px]"
          data-node-id="1:19913"
          data-name="Stepper Indicator"
        >
          {/* Step 1 — complete (RTL start / right) */}
          <div className="flex min-w-px flex-1 items-center gap-[8px]" data-node-id="1:19938">
            <div
              className="flex size-[40px] shrink-0 items-center justify-center rounded-full bg-[#eaf1e8]"
              data-node-id="1:19947"
            >
              <AssetIcon src={ASSETS.stepCheck} width={14.942} height={11.023} />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex flex-wrap items-center gap-[6px]">
                <div className="rounded-[4px] bg-[#eaf1e8] px-[8px] py-[2px]">
                  <span className="text-[11px] font-semibold leading-[16px] text-[#3e8a5a]">مكتمل</span>
                </div>
                <p className="text-start text-[14px] font-bold leading-[20px] text-[#181d17]">
                  1. إرسال الطلب
                  <br />
                  والمستندات
                </p>
              </div>
              <span className="text-start text-[13px] font-normal leading-[20px] text-[#75786f]">
                18 سبتمبر 2026، 09:30 ص
              </span>
            </div>
          </div>

          <div
            className="hidden h-[2px] w-[48px] shrink-0 bg-[rgba(62,138,90,0.3)] lg:block"
            data-node-id="1:19937"
          />

          {/* Step 2 — current */}
          <div className="flex min-w-px flex-1 items-center gap-[8px]" data-node-id="1:19924">
            <div
              className="relative flex size-[40px] shrink-0 items-center justify-center rounded-full bg-[#fef8ed]"
              data-node-id="1:19933"
            >
              <AssetIcon src={ASSETS.stepReview} width={13.333} height={16.667} />
              <span className="absolute -start-[4px] -top-[4px] size-[12px] rounded-full bg-[#e99a38]" />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex flex-wrap items-center gap-[6px]">
                <div className="rounded-[4px] bg-[#fef8ed] px-[8px] py-[2px]">
                  <span className="text-[11px] font-semibold leading-[16px] text-[#8a5314]">
                    قيد
                    <br />
                    المعالجة
                  </span>
                </div>
                <p className="text-start text-[14px] font-bold leading-[20px] text-[#181d17]">
                  2. مراجعة وتوثيق
                  <br />
                  Booking.com
                </p>
              </div>
              <span className="text-start text-[13px] font-normal leading-[20px] text-[#8a5314]">
                بانتظار موافقة فريق الشركاء
              </span>
            </div>
          </div>

          <div
            className="hidden h-[2px] w-[48px] shrink-0 bg-[rgba(197,200,189,0.5)] lg:block"
            data-node-id="1:19923"
          />

          {/* Step 3 — pending */}
          <div
            className="flex min-w-px flex-1 items-center gap-[8px] opacity-60"
            data-node-id="1:19914"
          >
            <div
              className="flex size-[40px] shrink-0 items-center justify-center rounded-full bg-[#e5eae0]"
              data-node-id="1:19920"
            >
              <AssetIcon src={ASSETS.stepSync} width={16.667} height={15} />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-start text-[14px] font-bold leading-[20px] text-[#181d17]">
                3. تفعيل المزامنة اللحظية
              </p>
              <span className="text-start text-[13px] font-normal leading-[20px] text-[#75786f]">
                بانتظار الاعتماد للبدء آلياً
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Duplicate submission banner */}
      <div
        className="flex w-full flex-col-reverse items-start gap-[12px] rounded-[16px] bg-[#f1f5eb] p-[16px] sm:flex-row sm:items-center sm:gap-[16px]"
        data-node-id="1:19950"
        data-name="Duplicate Submission Notification Banner"
      >
        <div className="flex shrink-0 items-start justify-end rounded-[4px] bg-[#e5eae0] px-[10px] py-[4px]">
          <span className="text-[11px] font-medium leading-[16px] text-[#75786f]">محمي آلياً</span>
        </div>
        <p className="min-w-px flex-1 text-start text-[13px] font-normal leading-[21.13px] text-[#454840]">
          تم قفل إرسال طلبات الربط الإضافية لهذا العقار منعاً لتكرار الطلبات وتفادياً لتعليق الحساب
          في نظام Booking Partner Hub. يرجى الانتظار حتى اكتمال
          <br />
          المعالجة الجارية.
        </p>
        <div className="shrink-0">
          <AssetIcon src={ASSETS.lock} width={14.667} height={19.25} />
        </div>
      </div>

      {/* Details + Audit grid */}
      <div
        className="grid w-full grid-cols-1 gap-[24px] lg:grid-cols-3"
        data-node-id="1:19957"
        data-name="Details and Audit Log Grid"
      >
        {/* Connection details — 2 cols (RTL start) */}
        <div
          className="flex flex-col justify-between rounded-[16px] bg-white p-[24px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] lg:col-span-2"
          data-node-id="1:19958"
          data-name="Connection Details Card (2 cols on large screen)"
        >
          <div className="flex w-full flex-col gap-[16px]">
            <div className="flex w-full items-center justify-between gap-[12px]">
              <div className="rounded-[6px] bg-[#f1f5eb] px-[8px] py-[4px]">
                <span className="text-[11px] font-medium leading-[16px] text-[#75786f]">
                  حزمة التشفير TLS 1.3
                </span>
              </div>
              <div className="flex items-center gap-[8px]">
                <h3 className="text-[18px] font-bold leading-[28px] text-[#181d17]">
                  بيانات الربط المرسلة
                </h3>
                <div className="flex size-[36px] items-center justify-center rounded-[12px] bg-[#ebefe6]">
                  <AssetIcon src={ASSETS.details} width={13.333} height={16.667} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-[16px] pt-[4px] sm:grid-cols-2">
              {/* Property ID */}
              <div className="flex flex-col justify-between gap-[8px] rounded-[12px] bg-[#f1f5eb] p-[16px]">
                <span className="text-start text-[11px] font-medium leading-[16px] text-[#75786f]">
                  معرف العقار لدى Booking (Property ID)
                </span>
                <div className="flex items-center justify-between gap-[8px]">
                  <button
                    type="button"
                    onClick={() => handleCopy(PROPERTY_ID, "معرف العقار")}
                    className="flex items-center gap-[4px] rounded-[4px] p-[4px] transition-colors hover:bg-[#e5eae0]"
                  >
                    <span className="text-[11px] font-medium leading-[16px] text-[#34422a]">نسخ</span>
                    <AssetIcon src={ASSETS.copy} width={12.75} height={15} />
                  </button>
                  <span className="text-[14px] font-bold leading-[20px] text-[#181d17]" dir="ltr">
                    {PROPERTY_ID}
                  </span>
                </div>
              </div>

              {/* Request ID */}
              <div className="flex flex-col justify-between gap-[8px] rounded-[12px] bg-[#f1f5eb] p-[16px]">
                <span className="text-start text-[11px] font-medium leading-[16px] text-[#75786f]">
                  المعرف المرجعي للطلب لدى Booking
                </span>
                <div className="flex items-center justify-between gap-[8px]">
                  <button
                    type="button"
                    onClick={() => handleCopy(REQUEST_ID, "المعرف المرجعي للطلب")}
                    className="rounded-[4px] p-[4px] transition-colors hover:bg-[#e5eae0]"
                    aria-label="نسخ المعرف المرجعي"
                    title="نسخ"
                  >
                    <AssetIcon src={ASSETS.refId} width={13.5} height={12} />
                  </button>
                  <span className="text-[14px] font-bold leading-[20px] text-[#181d17]" dir="ltr">
                    {REQUEST_ID}
                  </span>
                </div>
              </div>

              {/* Property name */}
              <div className="flex flex-col gap-[4px] rounded-[12px] bg-[#f1f5eb] p-[16px]">
                <span className="text-start text-[11px] font-medium leading-[16px] text-[#75786f]">
                  اسم العقار المعتمد والحجم
                </span>
                <div className="flex flex-wrap items-center gap-[8px]">
                  <div className="rounded-[4px] bg-[#ebefe6] px-[8px] py-[2px]">
                    <span className="text-[11px] font-medium leading-[16px] text-[#454840]">
                      (24 وحدة سكنية)
                    </span>
                  </div>
                  <span className="text-[14px] font-semibold leading-[20px] text-[#181d17]">
                    عمارة النخيل الفندقية
                  </span>
                </div>
              </div>

              {/* Protocol */}
              <div className="flex flex-col gap-[4px] rounded-[12px] bg-[#f1f5eb] p-[16px]">
                <span className="text-start text-[11px] font-medium leading-[16px] text-[#75786f]">
                  بروتوكول الاتصال وتدفق البيانات
                </span>
                <div className="flex flex-wrap items-center gap-[8px]">
                  <span className="text-start text-[11px] font-medium leading-[16px] text-[#75786f]">
                    (مزامنة كاملة ثنائية
                    <br />
                    الاتجاه)
                  </span>
                  <span className="text-start text-[14px] font-semibold leading-[20px] text-[#34422a]">
                    2-Way Full API
                    <br />
                    Sync
                  </span>
                </div>
              </div>

              {/* Submission date */}
              <div className="flex flex-col gap-[4px] rounded-[12px] bg-[#f1f5eb] p-[16px]">
                <span className="text-start text-[11px] font-medium leading-[16px] text-[#75786f]">
                  تاريخ ووقت إرسال الطلب
                </span>
                <span className="text-start text-[14px] font-medium leading-[20px] text-[#181d17]">
                  18 سبتمبر 2026 — 09:30 ص
                </span>
              </div>

              {/* Last poll */}
              <div className="flex flex-col gap-[4px] rounded-[12px] bg-[#f1f5eb] p-[16px]">
                <span className="text-start text-[11px] font-medium leading-[16px] text-[#75786f]">
                  آخر استعلام واستجابة من السيرفر
                </span>
                <div className="flex items-center gap-[8px]">
                  <span className="size-[8px] shrink-0 rounded-full bg-[#d8e8cb]" />
                  <span className="text-[14px] font-medium leading-[20px] text-[#181d17]">
                    منذ 12 دقيقة (10:45 ص)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-[16px] flex w-full flex-col-reverse items-start justify-between gap-[12px] rounded-[12px] bg-[#ebefe6] p-[16px] sm:flex-row sm:items-center"
            data-node-id="1:20017"
          >
            <div className="text-start text-[11px] font-medium leading-[16px] text-[#75786f]">
              حالة البوابة: متصل
              <br />
              ومستقر
            </div>
            <div className="flex items-center gap-[8px]">
              <p className="text-start text-[13px] font-normal leading-[20px] text-[#454840]">
                سيتم تفعيل استقبال الحجوزات وتحديث التقويم تلقائياً بمجرد رد سيرفر
                <br />
                Booking.
              </p>
              <AssetIcon src={ASSETS.info} width={20} height={19.167} />
            </div>
          </div>
        </div>

        {/* Audit log — 1 col */}
        <div
          className="flex min-h-[474px] flex-col justify-between rounded-[16px] bg-white p-[24px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
          data-node-id="1:20025"
          data-name="Operational Activities & Audit Log (1 col on large screen)"
        >
          <div className="flex w-full flex-col">
            <div className="mb-[16px] flex items-center gap-[8px]">
              <div className="flex size-[36px] items-center justify-center rounded-[12px] bg-[#ebefe6]">
                <AssetIcon src={ASSETS.audit} width={15} height={15} />
              </div>
              <h3 className="text-start text-[18px] font-bold leading-[28px] text-[#181d17]">
                سجل التدقيق
                <br />
                والتحديثات
              </h3>
            </div>

            <div className="relative flex flex-col gap-[16px] ps-[16px]" data-node-id="1:20035">
              <div
                className="absolute bottom-[8px] start-[6px] top-[8px] w-[2px] bg-[#e5eae0]"
                data-node-id="1:20036"
              />

              {/* Log 1 */}
              <div className="relative flex flex-col gap-[3.125px]">
                <span className="absolute start-[-22px] top-[6px] size-[12px] rounded-full bg-[#e99a38] shadow-[0px_0px_0px_4px_white]" />
                <div className="flex items-center justify-between gap-[8px]">
                  <div className="rounded-[4px] bg-[#fef8ed] px-[8px] py-[2px]">
                    <span className="text-[11px] font-medium leading-[16px] text-[#8a5314]">
                      فحص آلي
                    </span>
                  </div>
                  <span className="text-[11px] font-bold leading-[16px] text-[#181d17]">10:45 ص</span>
                </div>
                <p className="text-start text-[13px] font-normal leading-[21.13px] text-[#454840]">
                  فحص دوري آلي لحالة المعالجة عبر Booking
                  <br />
                  Connectivity API — (النتيجة: الطلب قيد
                  <br />
                  المراجعة الفنية)
                </p>
              </div>

              {/* Log 2 */}
              <div className="relative flex flex-col gap-[3.125px]">
                <span className="absolute start-[-22px] top-[6px] size-[12px] rounded-full bg-[#3e8a5a] shadow-[0px_0px_0px_4px_white]" />
                <div className="flex items-center justify-between gap-[8px]">
                  <div className="rounded-[4px] bg-[#eaf1e8] px-[8px] py-[2px]">
                    <span className="text-[11px] font-medium leading-[16px] text-[#3e8a5a]">
                      استلام كود التأكيد
                    </span>
                  </div>
                  <span className="text-[11px] font-bold leading-[16px] text-[#181d17]">09:32 ص</span>
                </div>
                <p className="text-start text-[13px] font-normal leading-[21.13px] text-[#454840]">
                  استلام إشعار التأكيد المبدئي من Booking
                  <br />
                  Partner Hub برقم الطلب #REQ-BK-
                  <br />
                  8849201
                </p>
              </div>

              {/* Log 3 */}
              <div className="relative flex flex-col gap-[3.065px]">
                <span className="absolute start-[-22px] top-[6px] size-[12px] rounded-full bg-[#3e8a5a] shadow-[0px_0px_0px_4px_white]" />
                <div className="flex items-center justify-between gap-[8px]">
                  <div className="rounded-[4px] bg-[#eaf1e8] px-[8px] py-[2px]">
                    <span className="text-[11px] font-medium leading-[16px] text-[#3e8a5a]">
                      إرسال الحزمة
                    </span>
                  </div>
                  <span className="text-[11px] font-bold leading-[16px] text-[#181d17]">09:30 ص</span>
                </div>
                <p className="text-start text-[13px] font-normal leading-[21.13px] text-[#454840]">
                  إرسال حزمة الربط وتأكيد شهادة الملكية
                  <br />
                  وبيانات الوحدات الفندقية بنجاح
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center pt-[8px]">
            <div className="flex items-center gap-[4px]">
              <span className="text-[11px] font-medium leading-[16px] text-[#75786f]">
                مزامنة السجلات محفوظة سحابياً
              </span>
              <AssetIcon src={ASSETS.cloud} width={14.667} height={10.667} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom actions */}
      <section
        className="flex w-full flex-col gap-[16px] rounded-[16px] bg-white p-[24px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
        data-node-id="1:20072"
        data-name="Bottom Action Controls and Safety Panel"
      >
        <div className="flex w-full flex-col-reverse items-start justify-between gap-[16px] sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-[8px]" data-node-id="1:20074">
            <button
              type="button"
              onClick={handleRecheck}
              disabled={isRechecking}
              className="inline-flex h-[44px] items-center justify-center gap-[4px] rounded-[12px] bg-[#34422a] px-[24px] text-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-opacity hover:opacity-95 disabled:opacity-70"
              data-node-id="1:20075"
            >
              <span className="text-[14px] font-semibold leading-[20px]">
                إعادة التحقق من حالة الربط
              </span>
              <AssetIcon src={ASSETS.refreshBottom} width={13.333} height={13.333} />
            </button>

            <Link
              href="/properties/"
              className="inline-flex h-[44px] items-center justify-center gap-[3.99px] rounded-[12px] bg-[#ebefe6] px-[16px] transition-colors hover:bg-[#e5eae0]"
              data-node-id="1:20080"
            >
              <span className="text-[14px] font-semibold leading-[20px] text-[#181d17]">
                العودة إلى قائمة العقارات
              </span>
              <AssetIcon src={ASSETS.back} width={13.333} height={13.333} />
            </Link>
          </div>

          <div className="flex items-center gap-[8px]" data-node-id="1:20085">
            <span className="text-[11px] font-medium leading-[16px] text-[#454840]">
              الاتصال في طور الاعتماد (غير قابل للفصل الآن)
            </span>
            <span className="size-[10px] shrink-0 rounded-full bg-[#e99a38]" />
          </div>
        </div>

        <div
          className="flex w-full flex-col-reverse items-start justify-between gap-[8px] pt-[8px] sm:flex-row sm:items-center"
          data-node-id="1:20089"
        >
          <span className="text-[11px] font-normal leading-[16px] text-[#c5c8bd]" dir="ltr">
            Hash: c7e199f30b2e
          </span>
          <div className="flex items-center gap-[8px]">
            <span className="text-start text-[11px] font-medium leading-[16px] text-[#75786f]">
              اتصال مشفر بمعايير TLS 1.3 ومطابق لاشتراطات أمن البيانات المعتمدة في المملكة العربية
              السعودية.
            </span>
            <AssetIcon src={ASSETS.shield} width={12} height={15} />
          </div>
        </div>
      </section>
    </div>
  );
}
