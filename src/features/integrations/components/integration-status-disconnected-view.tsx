"use client";

import Link from "next/link";
import { useState } from "react";
import { showToast } from "@/lib/toast";

const ASSETS = {
  refresh: "/assets/integrations/disconnected/icon_refresh.svg",
  badgeX: "/assets/integrations/disconnected/icon_badge_x.svg",
  partner: "/assets/integrations/disconnected/icon_partner.svg",
  syncOff: "/assets/integrations/disconnected/icon_sync_off.svg",
  warning: "/assets/integrations/disconnected/icon_warning.svg",
  details: "/assets/integrations/disconnected/icon_details.svg",
  copy: "/assets/integrations/disconnected/icon_copy.svg",
  refId: "/assets/integrations/disconnected/icon_ref_id.svg",
  gears: "/assets/integrations/disconnected/icon_gears.svg",
  audit: "/assets/integrations/disconnected/icon_audit.svg",
  cloud: "/assets/integrations/disconnected/icon_cloud.svg",
  steps: "/assets/integrations/disconnected/icon_steps.svg",
  step3Ext: "/assets/integrations/disconnected/icon_step3_ext.svg",
  play: "/assets/integrations/disconnected/icon_play.svg",
  step2: "/assets/integrations/disconnected/icon_step2.svg",
  check: "/assets/integrations/disconnected/icon_check.svg",
  step1: "/assets/integrations/disconnected/icon_step1.svg",
  external: "/assets/integrations/disconnected/icon_external.svg",
  refreshBottom: "/assets/integrations/disconnected/icon_refresh_bottom.svg",
  back: "/assets/integrations/disconnected/icon_back.svg",
  lock: "/assets/integrations/disconnected/icon_lock.svg",
} as const;

const PROPERTY_ID = "BK-SA-982140";
const REQUEST_ID = "REQ-BK-8849201";
const EXTRANET_URL = "https://admin.booking.com/";

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

export function IntegrationStatusDisconnectedView() {
  const [isRechecking, setIsRechecking] = useState(false);

  const handleRecheck = () => {
    if (isRechecking) return;
    setIsRechecking(true);
    showToast.info(
      "جاري إعادة التحقق من حالة الربط",
      "يتم فحص شهادة المصادقة وإعادة محاولة المصافحة عبر Booking Connectivity API..."
    );
    window.setTimeout(() => {
      setIsRechecking(false);
      showToast.error("لا تزال حالة الربط: غير متصل — مطلوب إعادة التوثيق");
    }, 1200);
  };

  const handleReconnectNow = () => {
    if (isRechecking) return;
    setIsRechecking(true);
    showToast.info(
      "فحص وإعادة التشغيل الآن",
      "جاري بدء فحص المصافحة الأمنية وتفريغ التحديثات المعلقة..."
    );
    window.setTimeout(() => {
      setIsRechecking(false);
      showToast.error("لا تزال حالة الربط: غير متصل — مطلوب إعادة التوثيق");
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
      data-node-id="1:20657"
      data-name="Container"
      dir="rtl"
    >
      {/* TOP HERO GREETING BAR */}
      <section
        className="flex min-h-[102px] flex-col justify-center gap-[12px] rounded-[16px] bg-white px-[24px] py-[17px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] sm:flex-row sm:items-center sm:justify-between"
        data-node-id="1:20658"
        data-name="Section - TOP HERO GREETING BAR"
      >
        <div className="flex min-w-0 flex-1 flex-col items-start gap-[4px]">
          <div className="flex flex-wrap items-center gap-[8px]">
            <h1
              className="text-[24px] font-bold leading-[34px] text-[#181d17]"
              data-node-id="1:20675"
            >
              ربط منصات الحجز — حالة الطلب
            </h1>
            <div
              className="flex items-center gap-[4px] rounded-full bg-[#ffdad6] px-[8px] py-[2px]"
              data-node-id="1:20665"
              data-name="Background"
            >
              <span className="text-[11px] font-medium leading-[16px] text-[#93000a]">
                غير متصل
              </span>
              <span className="size-[6px] shrink-0 rounded-full bg-[#ba1a1a]" />
            </div>
          </div>
          <p
            className="text-[14px] font-normal leading-[22px] text-[#454840]"
            data-node-id="1:20671"
          >
            متابعة حالة اعتماد وتفعيل الربط المباشر مع منصات الحجز وقنوات الـ OTA.
          </p>
        </div>

        <button
          type="button"
          onClick={handleRecheck}
          disabled={isRechecking}
          className="inline-flex h-[44px] shrink-0 items-center gap-[4px] rounded-[12px] bg-[#34422a] px-[16px] text-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-opacity hover:opacity-95 disabled:opacity-70"
          data-node-id="1:20660"
        >
          <span className="text-[14px] font-semibold leading-[20px]">
            إعادة التحقق من حالة الربط
          </span>
          <AssetIcon src={ASSETS.refresh} width={13.333} height={13.333} />
        </button>
      </section>

      {/* Booking.com channel card */}
      <div className="flex w-full items-start justify-center" data-node-id="1:20676">
        <div
          className="relative flex min-h-[229px] w-full flex-col justify-between overflow-clip rounded-[16px] bg-white p-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
          data-node-id="1:20677"
          data-name="Booking.com Active Channel (Selected)"
        >
          <div className="absolute inset-x-0 top-0 h-[6px] bg-[#34422a]" data-node-id="1:20706" />

          <div className="flex w-full flex-col gap-[15.375px]">
            <div className="flex w-full items-start justify-between gap-[12px]">
              <div
                className="flex shrink-0 items-center gap-[4.01px] rounded-full bg-[#ffdad6] px-[8px] py-[4px]"
                data-node-id="1:20680"
                data-name="Rejected Badge"
              >
                <span className="text-[11px] font-bold leading-[16px] text-[#ba1a1a]">
                  غير متصل
                </span>
                <AssetIcon src={ASSETS.badgeX} width={12.5} height={12.5} />
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
                  data-node-id="1:20694"
                >
                  <span className="text-[24px] font-bold leading-[32px] tracking-[-1.2px] text-white">
                    B.
                  </span>
                </div>
              </div>
            </div>

            <p className="text-end text-[14px] font-normal leading-[22.75px] text-[#454840]">
              تم إرسال مفاتيح الربط وتأكيد الملكية إلى مركز إدارة شركاء Booking.com
              <br />
              بنجاح للمصادقة الفنية والتعاقدية.
            </p>
          </div>

          <div className="w-full pt-[16px]">
            <div
              className="flex w-full items-center justify-between rounded-[12px] bg-[#f1f5eb] px-[16px] pb-[10px] pt-[16px]"
              data-node-id="1:20699"
            >
              <span className="text-[11px] font-medium leading-[16px] text-[#75786f]">
                تحديث دوري كل 15 دقيقة
              </span>
              <div className="flex items-center gap-[4px]">
                <span className="text-[11px] font-medium leading-[16px] text-[#ba1a1a]">
                  المزامنة معطلة
                </span>
                <AssetIcon src={ASSETS.syncOff} width={12} height={10.667} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Soft warning alert banner */}
      <section
        className="relative flex w-full flex-col overflow-clip rounded-[16px] bg-[rgba(255,251,235,0.7)] p-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
        data-node-id="1:20707"
        data-name="Alert / Notice Banner (Soft Warning Amber Palette - No Red)"
      >
        <div
          className="pointer-events-none absolute -end-[47px] -top-[47px] size-[192px] rounded-full bg-[rgba(253,230,138,0.25)] blur-[20px]"
          data-node-id="1:20708"
        />

        <div className="relative flex w-full flex-col-reverse items-start gap-[16px] sm:flex-row sm:justify-between">
          <div className="flex min-w-0 flex-1 flex-col items-end gap-[8px]">
            <div className="flex w-full flex-wrap items-center justify-end gap-[12px]">
              <div
                className="flex items-center gap-[6px] rounded-full bg-[#fef3c7] px-[12px] py-[4px]"
                data-node-id="1:20714"
              >
                <span className="text-[11px] font-semibold leading-[16px] text-[#78350f]">
                  توقف مؤقت • مطلوب إعادة التوثيق
                </span>
                <span className="size-[8px] shrink-0 rounded-full bg-[#f59e0b]" />
              </div>
              <h2
                className="text-end text-[18px] font-bold leading-[28px] text-[#1c1917]"
                data-node-id="1:20713"
              >
                الاتصال بالمنصة غير نشط حاليًا
              </h2>
            </div>

            <p className="text-end text-[11px] font-normal leading-[16px] text-[#78716c]">
              رمز الاستجابة: HTTP 401 Unauthorized
            </p>

            <p className="text-end text-[14px] font-semibold leading-[22.75px] text-[#292524]">
              الاتصال بالمنصة غير نشط حاليًا، ولن تتم مزامنة الحجوزات أو التوافر أو الأسعار حتى
              استكمال تفويض الشريك.
            </p>

            <p className="text-end text-[13px] font-normal leading-[19.5px] text-[#57534e]">
              تم تعطيل بروتوكول المزامنة اللحظية (Two-Way XML/JSON Sync) تلقائيًا إثر تعذر تجديد
              شهادة المصادقة الأمنية أو انتهاء تفويض API لدى بوابة Booking Connectivity Hub. لن يتم
              استقبال أي حجوزات جديدة أو إغلاق التواريخ المباعة عبر التقويم العالمي حتى يتم التوثيق.
            </p>
          </div>

          <div
            className="flex size-[48px] shrink-0 items-center justify-center rounded-[12px] bg-[#fef3c7] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
            data-node-id="1:20724"
          >
            <AssetIcon src={ASSETS.warning} width={22.317} height={21.45} />
          </div>
        </div>
      </section>

      {/* Details + Audit grid */}
      <div
        className="grid w-full grid-cols-1 gap-[24px] lg:grid-cols-3"
        data-node-id="1:20727"
        data-name="Details and Audit Log Grid"
      >
        <div
          className="flex flex-col justify-between rounded-[16px] bg-white p-[24px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] lg:col-span-2"
          data-node-id="1:20728"
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
              <div className="flex flex-col justify-between gap-[8px] rounded-[12px] bg-[#f1f5eb] p-[16px]">
                <span className="text-end text-[11px] font-medium leading-[16px] text-[#75786f]">
                  معرف العقار لدى Booking (Property ID)
                </span>
                <div className="flex items-center justify-between gap-[8px]">
                  <button
                    type="button"
                    onClick={() => handleCopy(PROPERTY_ID, "معرف العقار")}
                    className="flex items-center gap-[4px] rounded-[4px] p-[4px] transition-colors hover:bg-[#e5eae0]"
                  >
                    <span className="text-[11px] font-medium leading-[16px] text-[#34422a]">
                      نسخ
                    </span>
                    <AssetIcon src={ASSETS.copy} width={12.75} height={15} />
                  </button>
                  <span className="text-[14px] font-bold leading-[20px] text-[#181d17]" dir="ltr">
                    {PROPERTY_ID}
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-[8px] rounded-[12px] bg-[#f1f5eb] p-[16px]">
                <span className="text-end text-[11px] font-medium leading-[16px] text-[#75786f]">
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

              <div className="flex flex-col gap-[4px] rounded-[12px] bg-[#f1f5eb] p-[16px]">
                <span className="text-end text-[11px] font-medium leading-[16px] text-[#75786f]">
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

              <div className="flex flex-col gap-[4px] rounded-[12px] bg-[#f1f5eb] p-[16px]">
                <span className="text-end text-[11px] font-medium leading-[16px] text-[#75786f]">
                  بروتوكول الاتصال وتدفق البيانات
                </span>
                <div className="flex flex-wrap items-center gap-[8px]">
                  <span className="text-end text-[11px] font-medium leading-[16px] text-[#75786f]">
                    (مزامنة كاملة ثنائية
                    <br />
                    الاتجاه)
                  </span>
                  <span className="text-end text-[14px] font-semibold leading-[20px] text-[#34422a]">
                    2-Way Full API
                    <br />
                    Sync
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[4px] rounded-[12px] bg-[#f1f5eb] p-[16px]">
                <span className="text-end text-[11px] font-medium leading-[16px] text-[#75786f]">
                  تاريخ ووقت إرسال الطلب
                </span>
                <span className="text-end text-[14px] font-medium leading-[20px] text-[#181d17]">
                  18 سبتمبر 2026 — 09:30 ص
                </span>
              </div>

              <div className="flex flex-col gap-[4px] rounded-[12px] bg-[#f1f5eb] p-[16px]">
                <span className="text-end text-[11px] font-medium leading-[16px] text-[#75786f]">
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
            data-node-id="1:20787"
          >
            <div className="text-end text-[11px] font-medium leading-[16px] text-[#75786f]">
              حالة البوابة: متصل
              <br />
              ومستقر
            </div>
            <div className="flex items-center gap-[8px]">
              <p className="text-end text-[13px] font-normal leading-[20px] text-[#454840]">
                سيتم تفعيل استقبال الحجوزات وتحديث التقويم تلقائياً بمجرد رد سيرفر
                <br />
                Booking.
              </p>
              <AssetIcon src={ASSETS.gears} width={20} height={19.167} />
            </div>
          </div>
        </div>

        {/* Audit log */}
        <div
          className="flex min-h-[474px] flex-col justify-between rounded-[16px] bg-white p-[24px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
          data-node-id="1:20795"
          data-name="Operational Activities & Audit Log (1 col on large screen)"
        >
          <div className="flex w-full flex-col">
            <div className="mb-[16px] flex items-center gap-[8px]">
              <div className="flex size-[36px] items-center justify-center rounded-[12px] bg-[#ebefe6]">
                <AssetIcon src={ASSETS.audit} width={15} height={15} />
              </div>
              <h3 className="text-end text-[18px] font-bold leading-[28px] text-[#181d17]">
                سجل التدقيق
                <br />
                والتحديثات
              </h3>
            </div>

            <div className="relative flex flex-col gap-[16px] pe-[16px]" data-node-id="1:20805">
              <div
                className="absolute bottom-[8px] end-[6px] top-[8px] w-[2px] bg-[#e5eae0]"
                data-node-id="1:20806"
              />

              <div className="relative flex flex-col gap-[3.125px]">
                <span className="absolute end-[-22px] top-[6px] size-[12px] rounded-full bg-[#e99a38] shadow-[0px_0px_0px_4px_white]" />
                <div className="flex items-center justify-between gap-[8px]">
                  <div className="rounded-[4px] bg-[#fef8ed] px-[8px] py-[2px]">
                    <span className="text-[11px] font-medium leading-[16px] text-[#8a5314]">
                      فحص آلي
                    </span>
                  </div>
                  <span className="text-[11px] font-bold leading-[16px] text-[#181d17]">
                    10:45 ص
                  </span>
                </div>
                <p className="text-end text-[13px] font-normal leading-[21.13px] text-[#454840]">
                  فحص دوري آلي لحالة المعالجة عبر Booking
                  <br />
                  Connectivity API — (النتيجة: الطلب قيد
                  <br />
                  المراجعة الفنية)
                </p>
              </div>

              <div className="relative flex flex-col gap-[3.125px]">
                <span className="absolute end-[-22px] top-[6px] size-[12px] rounded-full bg-[#3e8a5a] shadow-[0px_0px_0px_4px_white]" />
                <div className="flex items-center justify-between gap-[8px]">
                  <div className="rounded-[4px] bg-[#eaf1e8] px-[8px] py-[2px]">
                    <span className="text-[11px] font-medium leading-[16px] text-[#3e8a5a]">
                      استلام كود التأكيد
                    </span>
                  </div>
                  <span className="text-[11px] font-bold leading-[16px] text-[#181d17]">
                    09:32 ص
                  </span>
                </div>
                <p className="text-end text-[13px] font-normal leading-[21.13px] text-[#454840]">
                  استلام إشعار التأكيد المبدئي من Booking
                  <br />
                  Partner Hub برقم الطلب #REQ-BK-
                  <br />
                  8849201
                </p>
              </div>

              <div className="relative flex flex-col gap-[3.065px]">
                <span className="absolute end-[-22px] top-[6px] size-[12px] rounded-full bg-[#3e8a5a] shadow-[0px_0px_0px_4px_white]" />
                <div className="flex items-center justify-between gap-[8px]">
                  <div className="rounded-[4px] bg-[#eaf1e8] px-[8px] py-[2px]">
                    <span className="text-[11px] font-medium leading-[16px] text-[#3e8a5a]">
                      إرسال الحزمة
                    </span>
                  </div>
                  <span className="text-[11px] font-bold leading-[16px] text-[#181d17]">
                    09:30 ص
                  </span>
                </div>
                <p className="text-end text-[13px] font-normal leading-[21.13px] text-[#454840]">
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

      {/* Recommended remediation steps */}
      <section
        className="flex w-full flex-col gap-[16px] rounded-[16px] bg-white p-[24px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
        data-node-id="1:20842"
        data-name="Recommended Remediation Steps (Actionable Guide)"
      >
        <div className="flex w-full flex-col-reverse items-start justify-between gap-[12px] pb-[8px] sm:flex-row sm:items-center">
          <div className="rounded-full bg-[#d8e8c7] px-[8px] py-[4px]">
            <span className="text-[11px] font-bold leading-[16px] text-[#34422a]">
              3 خطوات سهلة
            </span>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="flex flex-col items-end">
              <h3 className="text-end text-[18px] font-semibold leading-[28px] text-[#181d17]">
                خطوات المعالجة المقترحة لاستعادة الربط
              </h3>
              <p className="text-end text-[13px] font-normal leading-[20px] text-[#454840]">
                اتبع الخطوات التالية لتصحيح المعرف وتأكيد اعتماد الشريك لدى Booking.com
              </p>
            </div>
            <div className="flex size-[36px] shrink-0 items-center justify-center rounded-[12px] bg-[#4b5940]">
              <AssetIcon src={ASSETS.steps} width={15} height={16.667} />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-stretch justify-center gap-[16px] lg:flex-row">
          {/* Step 1 — RTL start / right */}
          <div
            className="flex min-h-[211px] flex-1 flex-col justify-between rounded-[16px] bg-[#f1f5eb] p-[16px]"
            data-node-id="1:20892"
            data-name="Step 1"
          >
            <div className="flex w-full flex-col gap-[8px]">
              <div className="flex w-full items-center justify-between">
                <AssetIcon src={ASSETS.step1} width={15} height={15} />
                <div className="flex size-[32px] items-center justify-center rounded-full bg-[#34422a]">
                  <span className="text-[14px] font-bold leading-[20px] text-white">1</span>
                </div>
              </div>
              <h4 className="text-end text-[18px] font-semibold leading-[28px] text-[#181d17]">
                الدخول إلى Booking Extranet
              </h4>
              <p className="text-end text-[13px] font-normal leading-[21.13px] text-[#454840]">
                قم بتسجيل الدخول إلى حساب مالك العقار في بوابة Booking.com Extranet، ثم انتقل إلى
                قسم{" "}
                <span className="font-bold text-[#181d17]">
                  &quot;Account&quot; &gt; &quot;Connectivity Provider&quot;
                </span>{" "}
                (مزود الربط).
              </p>
            </div>
            <a
              href={EXTRANET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[4px] transition-opacity hover:opacity-80"
              data-node-id="1:20905"
            >
              <span className="text-[12px] font-semibold leading-[18px] text-[#34422a]">
                فتح Booking Extranet
              </span>
              <AssetIcon src={ASSETS.external} width={8.667} height={8.667} />
            </a>
          </div>

          {/* Step 2 */}
          <div
            className="flex min-h-[211px] flex-1 flex-col justify-between rounded-[16px] bg-[#f1f5eb] p-[16px]"
            data-node-id="1:20872"
            data-name="Step 2"
          >
            <div className="flex w-full flex-col gap-[8px]">
              <div className="flex w-full items-center justify-between">
                <AssetIcon src={ASSETS.step2} width={18.342} height={16.667} />
                <div className="flex size-[32px] items-center justify-center rounded-full bg-[#34422a]">
                  <span className="text-[14px] font-bold leading-[20px] text-white">2</span>
                </div>
              </div>
              <h4 className="text-end text-[18px] font-semibold leading-[28px] text-[#181d17]">
                تجديد تفويض &quot;صرح العقارية&quot;
              </h4>
              <p className="text-end text-[13px] font-normal leading-[21.13px] text-[#454840]">
                ابحث عن مزود إدارة القنوات{" "}
                <span className="font-semibold text-[#181d17]">&quot;Sarh Asset Platform&quot;</span>{" "}
                واضغط على خيار &quot;تجديد الترخيص والموافقة على المزامنة الكاملة ثنائية الاتجاه&quot;.
              </p>
            </div>
            <div className="flex items-center gap-[4px]">
              <span className="text-end text-[11px] font-medium leading-[16px] text-[#454840]">
                تأكد من تفعيل Two-way Sync
              </span>
              <AssetIcon src={ASSETS.check} width={13.333} height={13.333} />
            </div>
          </div>

          {/* Step 3 */}
          <div
            className="flex min-h-[211px] flex-1 flex-col justify-between rounded-[16px] bg-[#f1f5eb] p-[16px]"
            data-node-id="1:20856"
            data-name="Step 3"
          >
            <div className="flex w-full flex-col gap-[8px]">
              <div className="flex w-full items-center justify-between">
                <AssetIcon src={ASSETS.step3Ext} width={13.333} height={13.333} />
                <div className="flex size-[32px] items-center justify-center rounded-full bg-[#34422a]">
                  <span className="text-[14px] font-bold leading-[20px] text-white">3</span>
                </div>
              </div>
              <h4 className="text-end text-[18px] font-semibold leading-[28px] text-[#181d17]">
                فحص المصافحة والربط اللحظي
              </h4>
              <p className="text-end text-[13px] font-normal leading-[21.13px] text-[#454840]">
                عد إلى هذه اللوحة واضغط زر &quot;إعادة ربط Booking.com&quot; لبدء عملية فحص الشهادة
                الأمنية وتفريغ التحديثات المعلقة فوراً.
              </p>
            </div>
            <button
              type="button"
              onClick={handleReconnectNow}
              disabled={isRechecking}
              className="inline-flex items-center gap-[6px] transition-opacity hover:opacity-80 disabled:opacity-70"
              data-node-id="1:20867"
            >
              <AssetIcon src={ASSETS.play} width={13.333} height={13.333} />
              <span className="text-[12px] font-bold leading-[18px] text-[#34422a]">
                فحص وإعادة التشغيل الآن
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Bottom actions */}
      <section
        className="flex w-full flex-col gap-[16px] rounded-[16px] bg-white p-[24px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
        data-node-id="1:20910"
        data-name="Bottom Action Controls and Safety Panel"
      >
        <div className="flex w-full flex-col-reverse items-start justify-between gap-[16px] sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-[8px]" data-node-id="1:20912">
            <button
              type="button"
              onClick={handleRecheck}
              disabled={isRechecking}
              className="inline-flex h-[44px] items-center justify-center gap-[4px] rounded-[12px] bg-[#34422a] px-[24px] text-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-opacity hover:opacity-95 disabled:opacity-70"
              data-node-id="1:20913"
            >
              <span className="text-[14px] font-semibold leading-[20px]">
                إعادة التحقق من حالة الربط
              </span>
              <AssetIcon src={ASSETS.refreshBottom} width={13.333} height={13.333} />
            </button>

            <Link
              href="/properties/"
              className="inline-flex h-[44px] items-center justify-center gap-[3.99px] rounded-[12px] bg-[#ebefe6] px-[16px] transition-colors hover:bg-[#e5eae0]"
              data-node-id="1:20918"
            >
              <span className="text-[14px] font-semibold leading-[20px] text-[#181d17]">
                العودة إلى قائمة العقارات
              </span>
              <AssetIcon src={ASSETS.back} width={13.333} height={13.333} />
            </Link>
          </div>

          <div className="flex items-center gap-[8px]" data-node-id="1:20923">
            <div className="flex flex-col items-end">
              <span className="text-end text-[14px] font-bold leading-[20px] text-[#181d17]">
                إجراء الربط المعلق: عقار عمارة النخيل الفندقية
              </span>
              <span className="text-end text-[13px] font-normal leading-[20px] text-[#454840]">
                البيانات المؤقتة محفوظة ومستعدة للمزامنة التلقائية بمجرد نجاح
                <br />
                المصافحة
              </span>
            </div>
            <span className="size-[10px] shrink-0 rounded-full bg-[#e99a38]" />
          </div>
        </div>

        <div
          className="flex w-full flex-col-reverse items-start justify-between gap-[8px] pt-[8px] sm:flex-row sm:items-center"
          data-node-id="1:20930"
        >
          <span className="text-[11px] font-normal leading-[16px] text-[#c5c8bd]" dir="ltr">
            Hash: c7e199f30b2e
          </span>
          <div className="flex items-center gap-[8px]">
            <span className="text-end text-[11px] font-medium leading-[16px] text-[#75786f]">
              اتصال مشفر بمعايير TLS 1.3 ومطابق لاشتراطات أمن البيانات المعتمدة في المملكة العربية
              السعودية.
            </span>
            <AssetIcon src={ASSETS.lock} width={12} height={15} />
          </div>
        </div>
      </section>
    </div>
  );
}
