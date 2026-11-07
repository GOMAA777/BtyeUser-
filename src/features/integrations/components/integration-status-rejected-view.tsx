"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { showToast } from "@/lib/toast";

const ASSETS = "/assets/integrations/rejected";

const SYNC_OPTIONS = [
  {
    value: "full-2way",
    label: "مزامنة شاملة ثنائية (الأسعار، الحجوزات، والتوافر)",
  },
  {
    value: "rates-availability",
    label: "مزامنة الأسعار والتوافر فقط",
  },
  {
    value: "bookings-only",
    label: "مزامنة الحجوزات الواردة فقط",
  },
] as const;

const AUDIT_LOG = [
  {
    time: "10:45 ص",
    tag: "فحص آلي",
    tagBg: "bg-[#fef8ed]",
    tagColor: "text-[#8a5314]",
    dot: "bg-[#e99a38]",
    lines: [
      "فحص دوري آلي لحالة المعالجة عبر Booking",
      "Connectivity API — (النتيجة: الطلب قيد",
      "المراجعة الفنية)",
    ],
  },
  {
    time: "09:32 ص",
    tag: "استلام كود التأكيد",
    tagBg: "bg-[#eaf1e8]",
    tagColor: "text-[#3e8a5a]",
    dot: "bg-[#3e8a5a]",
    lines: [
      "استلام إشعار التأكيد المبدئي من Booking",
      "Partner Hub برقم الطلب #REQ-BK-",
      "8849201",
    ],
  },
  {
    time: "09:30 ص",
    tag: "إرسال الحزمة",
    tagBg: "bg-[#eaf1e8]",
    tagColor: "text-[#3e8a5a]",
    dot: "bg-[#3e8a5a]",
    lines: [
      "إرسال حزمة الربط وتأكيد شهادة الملكية",
      "وبيانات الوحدات الفندقية بنجاح",
    ],
  },
] as const;

function AssetIcon({
  name,
  width,
  height,
  className,
  alt = "",
}: {
  name: string;
  width: number;
  height: number;
  className?: string;
  alt?: string;
}) {
  return (
    <Image
      src={`${ASSETS}/${name}`}
      alt={alt}
      width={width}
      height={height}
      className={className ?? "object-contain"}
      unoptimized
    />
  );
}

export function IntegrationStatusRejectedView() {
  const router = useRouter();
  const [hotelId, setHotelId] = useState("982140");
  const [syncPattern, setSyncPattern] = useState<string>(SYNC_OPTIONS[0].value);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyPropertyId = async () => {
    try {
      await navigator.clipboard.writeText("BK-SA-982140");
      showToast.success("تم نسخ معرف العقار");
    } catch {
      showToast.error("تعذر نسخ المعرف");
    }
  };

  const handleReverify = () => {
    showToast.info(
      "إعادة التحقق من حالة الربط",
      "جاري الاستعلام عن حالة المصادقة لدى Booking.com Connectivity Hub..."
    );
  };

  const handleResend = () => {
    const trimmed = hotelId.trim();
    if (!trimmed || /[a-zA-Z-]/.test(trimmed)) {
      showToast.error("أدخل المعرف الرقمي فقط بدون بادئة");
      return;
    }
    setIsSubmitting(true);
    showToast.success("تم حفظ المعرف وإعادة إرسال طلب الربط");
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/integrations/status/pending/");
    }, 600);
  };

  const handleCancel = () => {
    router.push("/integrations/");
  };

  return (
    <div
      className="flex w-full flex-col gap-[24px] font-cairo"
      data-node-id="1:20213"
      data-name="ربط منصات الحجز — حالة الطلب/فشل المصادقة"
      dir="rtl"
    >
      {/* TOP HERO GREETING BAR */}
      <section
        className="flex flex-col gap-[12px] rounded-[16px] bg-white p-[24px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] sm:flex-row sm:items-center sm:justify-between"
        data-node-id="1:20216"
        data-name="Section - TOP HERO GREETING BAR"
      >
        <div className="flex min-w-0 flex-1 flex-col items-end gap-[6px]">
          <div className="flex flex-wrap items-center justify-end gap-[8px]">
            <h1 className="text-right text-[24px] font-bold leading-[34px] text-[#181d17]">
              ربط منصات الحجز — حالة الطلب
            </h1>
            <div className="flex items-center gap-[4px] rounded-full bg-[#ffdad6] px-[8px] py-[2px]">
              <span className="text-[11px] font-medium leading-[16px] text-[#93000a]">
                فشل المصادقة
              </span>
              <span className="size-[6px] shrink-0 rounded-full bg-[#ba1a1a]" />
            </div>
          </div>
          <p className="text-right text-[14px] font-normal leading-[22px] text-[#454840]">
            متابعة حالة اعتماد وتفعيل الربط المباشر مع منصات الحجز وقنوات الـ OTA.
          </p>
        </div>
        <button
          type="button"
          onClick={handleReverify}
          className="inline-flex h-[44px] shrink-0 items-center gap-[4px] rounded-[12px] bg-[#34422a] px-[16px] text-white shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-opacity hover:opacity-90"
        >
          <span className="text-[14px] font-semibold leading-[20px]">
            إعادة التحقق من حالة الربط
          </span>
          <AssetIcon name="icon_refresh.svg" width={14} height={14} className="size-[13.333px]" />
        </button>
      </section>

      {/* Booking.com channel card */}
      <section
        className="relative overflow-hidden rounded-[16px] bg-white p-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
        data-node-id="1:20235"
        data-name="Booking.com Active Channel (Selected)"
      >
        <div className="absolute inset-x-0 top-0 h-[6px] bg-[#34422a]" />
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-wrap items-start justify-between gap-[12px]">
            <div className="flex items-center gap-[16px]">
              <div className="flex size-[48px] shrink-0 items-center justify-center rounded-[12px] bg-[#003580] shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
                <span className="text-[24px] font-bold leading-[32px] tracking-[-1.2px] text-white">
                  B.
                </span>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-[4px]">
                  <span className="text-[18px] font-semibold leading-[28px] text-[#181d17]">
                    Booking.com
                  </span>
                  <AssetIcon
                    name="icon_check_booking.svg"
                    width={17}
                    height={16}
                    className="h-[15.75px] w-[16.5px]"
                  />
                </div>
                <p className="text-right text-[11px] font-medium leading-[16px] text-[#454840]">
                  شريك اتصال فندقي معتمد (Connectivity Partner)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[4.01px] rounded-full bg-[#ffdad6] px-[8px] py-[4px]">
              <span className="text-[11px] font-bold leading-[16px] text-[#ba1a1a]">تم الرفض</span>
              <AssetIcon name="icon_rejected_x.svg" width={13} height={13} className="size-[12.5px]" />
            </div>
          </div>

          <p className="text-right text-[14px] font-normal leading-[22.75px] text-[#454840]">
            تم إرسال مفاتيح الربط وتأكيد الملكية إلى مركز إدارة شركاء Booking.com
            <br />
            بنجاح للمصادقة الفنية والتعاقدية.
          </p>

          <div className="flex items-center justify-between rounded-[12px] bg-[#f1f5eb] px-[16px] pb-[10px] pt-[16px]">
            <div className="flex items-center gap-[4px]">
              <span className="text-[11px] font-medium leading-[16px] text-[#ba1a1a]">
                المزامنة معطلة
              </span>
              <AssetIcon
                name="icon_sync_off.svg"
                width={12}
                height={11}
                className="h-[10.667px] w-[12px]"
              />
            </div>
            <span className="text-[11px] font-medium leading-[16px] text-[#75786f]">
              تحديث دوري كل 15 دقيقة
            </span>
          </div>
        </div>
      </section>

      {/* Rejection Alert Banner */}
      <section
        className="relative overflow-hidden rounded-[16px] bg-[rgba(255,218,214,0.4)] p-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
        data-node-id="1:20265"
        data-name="Rejection Alert Banner"
      >
        <div className="pointer-events-none absolute -bottom-10 -start-10 size-[176px] rounded-full bg-[rgba(186,26,26,0.05)] blur-[20px]" />
        <div className="relative flex flex-col gap-[8px] sm:flex-row sm:items-start sm:gap-[16px]">
          <div className="flex size-[48px] shrink-0 items-center justify-center rounded-[12px] bg-[rgba(186,26,26,0.1)]">
            <AssetIcon name="icon_alert.svg" width={24} height={24} className="size-[23.333px]" />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-[4px] items-end">
            <div className="flex flex-wrap items-center justify-end gap-[8px]">
              <h2 className="text-right text-[18px] font-semibold leading-[28px] tracking-[-0.45px] text-[#181d17]">
                تعذر إتمام ربط المنصة المباشر
              </h2>
              <span className="rounded-[4px] bg-[#ba1a1a] px-[4px] py-[2px] text-[11px] font-medium leading-[16px] text-white">
                HTTP 422
              </span>
            </div>
            <p className="max-w-[768px] text-right text-[14px] font-normal leading-[22.75px] text-[#454840]">
              تم رفض طلب مزامنة العقار من قِبل بوابة{" "}
              <span className="font-bold text-[#181d17]">Booking.com Connectivity Hub</span> نظراً
              لعدم تطابق بيانات المعرف الفندقي
              <br />
              أو غياب الصلاحيات التعاقدية الكاملة على الحساب.
            </p>
            <div className="flex flex-wrap items-center justify-end gap-[4px] pt-[4px]">
              <AssetIcon name="icon_inactive.svg" width={14} height={14} className="size-[13.333px]" />
              <span className="text-[11px] font-medium leading-[16px] text-[#ba1a1a]">
                الاتصال غير نشط حالياً
              </span>
              <span className="text-[11px] font-medium leading-[16px] text-[#c5c8bd]">•</span>
              <span className="text-[11px] font-medium leading-[16px] text-[#454840]">
                تم إيقاف محاولات المزامنة الآلية تلقائياً لتفادي حظر مفاتيح الـ API الخاصة بالمنصة.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Details + Audit Log */}
      <div
        className="grid grid-cols-1 gap-[24px] lg:grid-cols-3"
        data-node-id="1:20293"
        data-name="Details and Audit Log Grid"
      >
        {/* Connection Details — 2 cols */}
        <section
          className="flex flex-col justify-between gap-[16px] rounded-[16px] bg-white p-[24px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] lg:col-span-2"
          data-node-id="1:20294"
          data-name="Connection Details Card"
        >
          <div className="flex flex-col gap-[16px]">
            <div className="flex items-center justify-between gap-[12px]">
              <div className="flex items-center gap-[8px]">
                <div className="flex size-[36px] items-center justify-center rounded-[12px] bg-[#ebefe6]">
                  <AssetIcon
                    name="icon_details_doc.svg"
                    width={14}
                    height={17}
                    className="h-[16.667px] w-[13.333px]"
                  />
                </div>
                <h3 className="text-[18px] font-bold leading-[28px] text-[#181d17]">
                  بيانات الربط المرسلة
                </h3>
              </div>
              <div className="rounded-[6px] bg-[#f1f5eb] px-[8px] py-[4px]">
                <span className="text-[11px] font-medium leading-[16px] text-[#75786f]">
                  حزمة التشفير TLS 1.3
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-[16px] pt-[4px] sm:grid-cols-2">
              <div className="flex flex-col justify-between gap-[8px] rounded-[12px] bg-[#f1f5eb] p-[16px]">
                <span className="text-right text-[11px] font-medium leading-[16px] text-[#75786f]">
                  معرف العقار لدى Booking (Property ID)
                </span>
                <div className="flex items-center justify-between gap-[8px]">
                  <span className="text-[14px] font-bold leading-[20px] text-[#181d17]">
                    BK-SA-982140
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyPropertyId}
                    className="inline-flex items-center gap-[4px] rounded-[4px] p-[4px] transition-opacity hover:opacity-80"
                  >
                    <span className="text-[11px] font-medium leading-[16px] text-[#34422a]">نسخ</span>
                    <AssetIcon
                      name="icon_copy.svg"
                      width={13}
                      height={15}
                      className="h-[15px] w-[12.75px]"
                    />
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-[8px] rounded-[12px] bg-[#f1f5eb] p-[16px]">
                <span className="text-right text-[11px] font-medium leading-[16px] text-[#75786f]">
                  المعرف المرجعي للطلب لدى Booking
                </span>
                <div className="flex items-center justify-between gap-[8px]">
                  <span className="text-[14px] font-bold leading-[20px] text-[#181d17]">
                    REQ-BK-8849201
                  </span>
                  <AssetIcon
                    name="icon_ref_hash.svg"
                    width={14}
                    height={12}
                    className="h-[12px] w-[13.5px]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[4px] rounded-[12px] bg-[#f1f5eb] p-[16px]">
                <span className="text-right text-[11px] font-medium leading-[16px] text-[#75786f]">
                  اسم العقار المعتمد والحجم
                </span>
                <div className="flex flex-wrap items-center justify-end gap-[8px]">
                  <span className="text-[14px] font-semibold leading-[20px] text-[#181d17]">
                    عمارة النخيل الفندقية
                  </span>
                  <span className="rounded-[4px] bg-[#ebefe6] px-[8px] py-[2px] text-[11px] font-medium leading-[16px] text-[#454840]">
                    (24 وحدة سكنية)
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[4px] rounded-[12px] bg-[#f1f5eb] p-[16px]">
                <span className="text-right text-[11px] font-medium leading-[16px] text-[#75786f]">
                  بروتوكول الاتصال وتدفق البيانات
                </span>
                <div className="flex flex-wrap items-start justify-end gap-[8px]">
                  <span className="text-right text-[14px] font-semibold leading-[20px] text-[#34422a]">
                    2-Way Full API
                    <br />
                    Sync
                  </span>
                  <span className="text-right text-[11px] font-medium leading-[16px] text-[#75786f]">
                    (مزامنة كاملة ثنائية
                    <br />
                    الاتجاه)
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[4px] rounded-[12px] bg-[#f1f5eb] p-[16px]">
                <span className="text-right text-[11px] font-medium leading-[16px] text-[#75786f]">
                  تاريخ ووقت إرسال الطلب
                </span>
                <span className="text-right text-[14px] font-medium leading-[20px] text-[#181d17]">
                  18 سبتمبر 2026 — 09:30 ص
                </span>
              </div>

              <div className="flex flex-col gap-[4px] rounded-[12px] bg-[#f1f5eb] p-[16px]">
                <span className="text-right text-[11px] font-medium leading-[16px] text-[#75786f]">
                  آخر استعلام واستجابة من السيرفر
                </span>
                <div className="flex items-center justify-end gap-[8px]">
                  <span className="text-[14px] font-medium leading-[20px] text-[#181d17]">
                    منذ 12 دقيقة (10:45 ص)
                  </span>
                  <span className="size-[8px] shrink-0 rounded-full bg-[#d8e8cb]" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[12px] rounded-[12px] bg-[#ebefe6] p-[16px] sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-[8px]">
              <AssetIcon
                name="icon_info_server.svg"
                width={20}
                height={20}
                className="mt-[2px] h-[19.167px] w-[20px] shrink-0"
              />
              <p className="text-right text-[13px] font-normal leading-[20px] text-[#454840]">
                سيتم تفعيل استقبال الحجوزات وتحديث التقويم تلقائياً بمجرد رد سيرفر
                <br />
                Booking.
              </p>
            </div>
            <p className="shrink-0 text-right text-[11px] font-medium leading-[16px] text-[#75786f]">
              حالة البوابة: متصل
              <br />
              ومستقر
            </p>
          </div>
        </section>

        {/* Audit Log — 1 col */}
        <section
          className="relative flex min-h-[474px] flex-col rounded-[16px] bg-white p-[24px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
          data-node-id="1:20361"
          data-name="Operational Activities & Audit Log"
        >
          <div className="mb-[16px] flex items-center gap-[8px]">
            <div className="flex size-[36px] items-center justify-center rounded-[12px] bg-[#ebefe6]">
              <AssetIcon name="icon_audit.svg" width={15} height={15} className="size-[15px]" />
            </div>
            <h3 className="text-right text-[18px] font-bold leading-[28px] text-[#181d17]">
              سجل التدقيق
              <br />
              والتحديثات
            </h3>
          </div>

          <div className="relative flex flex-1 flex-col gap-[16px] pe-[16px]">
            <div className="absolute bottom-[8px] end-[6px] top-[8px] w-[2px] bg-[#e5eae0]" />
            {AUDIT_LOG.map((entry) => (
              <div key={entry.time + entry.tag} className="relative flex flex-col gap-[3px]">
                <div
                  className={`absolute end-[-22px] top-[6px] size-[12px] rounded-full ${entry.dot} shadow-[0px_0px_0px_4px_white]`}
                />
                <div className="flex items-center justify-between gap-[8px]">
                  <span className="text-[11px] font-bold leading-[16px] text-[#181d17]">
                    {entry.time}
                  </span>
                  <span
                    className={`rounded-[4px] px-[8px] py-[2px] text-[11px] font-medium leading-[16px] ${entry.tagBg} ${entry.tagColor}`}
                  >
                    {entry.tag}
                  </span>
                </div>
                <p className="text-right text-[13px] font-normal leading-[21.13px] text-[#454840]">
                  {entry.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-center gap-[4px] pt-[16px]">
            <span className="text-[11px] font-medium leading-[16px] text-[#75786f]">
              مزامنة السجلات محفوظة سحابياً
            </span>
            <AssetIcon
              name="icon_cloud_logs.svg"
              width={15}
              height={11}
              className="h-[10.667px] w-[14.667px]"
            />
          </div>
        </section>
      </div>

      {/* Remediation Steps */}
      <section
        className="flex flex-col gap-[16px] rounded-[16px] bg-white p-[24px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
        data-node-id="1:20408"
        data-name="Recommended Remediation Steps"
      >
        <div className="flex flex-wrap items-center justify-between gap-[12px] pb-[8px]">
          <div className="flex items-center gap-[8px]">
            <div className="flex size-[36px] items-center justify-center rounded-[12px] bg-[#4b5940]">
              <AssetIcon
                name="icon_steps_header.svg"
                width={15}
                height={17}
                className="h-[16.667px] w-[15px]"
              />
            </div>
            <div className="flex flex-col items-end">
              <h3 className="text-[18px] font-semibold leading-[28px] text-[#181d17]">
                خطوات المعالجة المقترحة لاستعادة الربط
              </h3>
              <p className="text-[13px] font-normal leading-[20px] text-[#454840]">
                اتبع الخطوات التالية لتصحيح المعرف وتأكيد اعتماد الشريك لدى Booking.com
              </p>
            </div>
          </div>
          <div className="rounded-full bg-[#d8e8c7] px-[8px] py-[4px]">
            <span className="text-[11px] font-bold leading-[16px] text-[#34422a]">3 خطوات سهلة</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[16px] md:grid-cols-3">
          {/* Step 1 */}
          <div className="flex min-h-[211px] flex-col justify-between rounded-[16px] bg-[#f1f5eb] p-[16px]">
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center justify-between">
                <div className="flex size-[32px] items-center justify-center rounded-full bg-[#34422a]">
                  <span className="text-[14px] font-bold leading-[20px] text-white">1</span>
                </div>
                <AssetIcon name="icon_step1.svg" width={15} height={15} className="size-[15px]" />
              </div>
              <h4 className="text-right text-[18px] font-semibold leading-[28px] text-[#181d17]">
                الدخول إلى Booking Extranet
              </h4>
              <p className="text-right text-[13px] font-normal leading-[21.13px] text-[#454840]">
                قم بتسجيل الدخول إلى حساب مالك العقار في
                <br />
                بوابة Booking.com Extranet، ثم انتقل إلى قسم
                <br />
                <span className="font-bold text-[#181d17]">
                  &quot;Account&quot; &gt; &quot;Connectivity Provider&quot;
                </span>{" "}
                (مزود
                <br />
                الربط).
              </p>
            </div>
            <a
              href="https://admin.booking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[4px] self-end transition-opacity hover:opacity-80"
            >
              <span className="text-[12px] font-semibold leading-[18px] text-[#34422a]">
                فتح Booking Extranet
              </span>
              <AssetIcon
                name="icon_external_link.svg"
                width={9}
                height={9}
                className="size-[8.667px]"
              />
            </a>
          </div>

          {/* Step 2 */}
          <div className="flex min-h-[211px] flex-col justify-between rounded-[16px] bg-[#f1f5eb] p-[16px]">
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center justify-between">
                <div className="flex size-[32px] items-center justify-center rounded-full bg-[#34422a]">
                  <span className="text-[14px] font-bold leading-[20px] text-white">2</span>
                </div>
                <AssetIcon
                  name="icon_step2.svg"
                  width={19}
                  height={17}
                  className="h-[16.667px] w-[18.342px]"
                />
              </div>
              <h4 className="text-right text-[18px] font-semibold leading-[28px] text-[#181d17]">
                تعيين &quot;صرح العقارية&quot; كمزود كامل
              </h4>
              <p className="text-right text-[13px] font-normal leading-[21.13px] text-[#454840]">
                ابحث عن <span className="font-bold text-[#181d17]">Sarh Real Estate Cloud</span> واعتمد
                الربط
                <br />
                الثنائي الكامل مع تحديد الصلاحيات الشاملة:
                <br />
                (الأسعار، التقويم والتوافر، والرسائل اللحظية).
              </p>
            </div>
            <div className="flex items-center gap-[4px] self-end">
              <span className="text-[11px] font-medium leading-[16px] text-[#454840]">
                تأكد من تفعيل Two-way Sync
              </span>
              <AssetIcon
                name="icon_twoway_check.svg"
                width={14}
                height={14}
                className="size-[13.333px]"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex min-h-[211px] flex-col justify-between rounded-[16px] bg-[#f1f5eb] p-[16px]">
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center justify-between">
                <div className="flex size-[32px] items-center justify-center rounded-full bg-[#34422a]">
                  <span className="text-[14px] font-bold leading-[20px] text-white">3</span>
                </div>
                <AssetIcon
                  name="icon_step3.svg"
                  width={14}
                  height={14}
                  className="size-[13.333px]"
                />
              </div>
              <h4 className="text-right text-[18px] font-semibold leading-[28px] text-[#181d17]">
                تحديث الرقم وإعادة الإرسال
              </h4>
              <p className="text-right text-[13px] font-normal leading-[21.13px] text-[#454840]">
                انسخ الرقم الرقمي الفعلي (Numeric Hotel ID)
                <br />
                من الزاوية العليا في لوحة Booking، وضعه في
                <br />
                حقل المعرف ثم اضغط &quot;إعادة إرسال طلب الربط&quot;.
              </p>
            </div>
            <p className="self-end text-[11px] font-medium leading-[16px] text-[#75786f]">
              متوسط وقت التحقق الآلي: 12 ثانية فقط
            </p>
          </div>
        </div>
      </section>

      {/* Live Edit Form */}
      <section
        className="flex flex-col gap-[16px] rounded-[16px] bg-white p-[24px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
        data-node-id="1:20472"
        data-name="Live Edit Form Drawer / Card"
      >
        <div className="flex flex-wrap items-center justify-between gap-[12px] pb-[8px]">
          <div className="flex items-center gap-[8px]">
            <div className="flex size-[36px] items-center justify-center rounded-[12px] bg-[#e5eae0]">
              <AssetIcon name="icon_edit_form.svg" width={15} height={15} className="size-[15px]" />
            </div>
            <div className="flex flex-col items-end">
              <h3 className="text-[18px] font-semibold leading-[28px] text-[#181d17]">
                تصحيح وتعديل المعرف الفندقي
              </h3>
              <p className="text-[13px] font-normal leading-[20px] text-[#454840]">
                عدّل البيانات أدناه ثم أعد محاولة التوثيق مع خوادم Booking
              </p>
            </div>
          </div>
          <div className="rounded-[4px] bg-[#d8e8cb] px-[8px] py-[4px]">
            <span className="text-[11px] font-medium leading-[16px] text-[#5a6952]">
              جاهز للتحديث الفوري
            </span>
          </div>
        </div>

        <form
          className="flex flex-col items-stretch gap-[16px] lg:flex-row lg:items-end"
          onSubmit={(e) => {
            e.preventDefault();
            handleResend();
          }}
        >
          <div className="flex min-w-0 flex-1 flex-col gap-[4px]">
            <div className="flex items-start justify-between gap-[8px]">
              <label
                htmlFor="hotel-numeric-id"
                className="text-right text-[12px] font-semibold leading-[18px] text-[#181d17]"
              >
                معرف الفندق الحقيقي لدى Booking
                <br />
                (Numeric ID)
              </label>
              <span className="shrink-0 text-right text-[12px] font-normal leading-[16px] text-[#ba1a1a]">
                * مطلوب بدون
                <br />
                بادئة
              </span>
            </div>
            <div className="relative">
              <input
                id="hotel-numeric-id"
                type="text"
                inputMode="numeric"
                value={hotelId}
                onChange={(e) => setHotelId(e.target.value)}
                className="h-[44px] w-full rounded-[12px] bg-[#f1f5eb] pe-[16px] ps-[40px] text-right text-[14px] font-normal leading-[22px] text-[#181d17] outline-none ring-0 focus:ring-2 focus:ring-[#34422a]/30"
                dir="ltr"
              />
              <span className="pointer-events-none absolute start-[18px] top-[16px]">
                <AssetIcon
                  name="icon_hotel_id.svg"
                  width={14}
                  height={12}
                  className="h-[12px] w-[13.5px]"
                />
              </span>
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-[4px]">
            <label
              htmlFor="sync-pattern"
              className="text-right text-[12px] font-semibold leading-[18px] text-[#181d17]"
            >
              نمط المزامنة المطلوب
            </label>
            <div className="relative">
              <select
                id="sync-pattern"
                value={syncPattern}
                onChange={(e) => setSyncPattern(e.target.value)}
                className="h-[44px] w-full appearance-none rounded-[12px] bg-[#f1f5eb] pe-[16px] ps-[40px] text-right text-[14px] font-normal leading-[22px] text-[#181d17] outline-none focus:ring-2 focus:ring-[#34422a]/30"
              >
                {SYNC_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute start-[20px] top-[19px]">
                <AssetIcon
                  name="icon_select_chevron.svg"
                  width={9}
                  height={6}
                  className="h-[5.55px] w-[9px]"
                />
              </span>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-[8px]">
            <button
              type="button"
              onClick={handleCancel}
              className="inline-flex h-[44px] items-center justify-center rounded-[12px] bg-[#ebefe6] px-[16px] text-[14px] font-semibold leading-[20px] text-[#454840] transition-opacity hover:opacity-90"
            >
              إلغاء
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative inline-flex h-[44px] flex-1 items-center justify-center gap-[4px] rounded-[12px] bg-[#34422a] px-[16px] text-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] transition-opacity hover:opacity-90 disabled:opacity-60 sm:min-w-[200px]"
            >
              <span className="text-[14px] font-semibold leading-[20px]">
                حفظ وإعادة إرسال الطلب
              </span>
              <AssetIcon
                name="icon_send.svg"
                width={15}
                height={12}
                className="h-[12px] w-[14.25px]"
              />
            </button>
          </div>
        </form>
      </section>

      {/* Bottom Action Controls */}
      <section
        className="rounded-[16px] bg-white p-[24px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
        data-node-id="1:20514"
        data-name="Bottom Action Controls and Safety Panel"
      >
        <div className="flex flex-col gap-[16px] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-[8px]">
            <span className="size-[10px] shrink-0 rounded-full bg-[#e99a38]" />
            <span className="text-[11px] font-medium leading-[16px] text-[#454840]">
              الاتصال في طور الاعتماد (غير قابل للفصل الآن)
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-[8px]">
            <Link
              href="/properties/"
              className="inline-flex h-[44px] items-center gap-[4px] rounded-[12px] bg-[#ebefe6] px-[16px] transition-opacity hover:opacity-90"
            >
              <span className="text-[14px] font-semibold leading-[20px] text-[#181d17]">
                العودة إلى قائمة العقارات
              </span>
              <AssetIcon
                name="icon_back_properties.svg"
                width={14}
                height={14}
                className="size-[13.333px]"
              />
            </Link>
            <button
              type="button"
              onClick={handleReverify}
              className="inline-flex h-[44px] items-center gap-[4px] rounded-[12px] bg-[#34422a] px-[24px] text-white shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-opacity hover:opacity-90"
            >
              <span className="text-[14px] font-semibold leading-[20px]">
                إعادة التحقق من حالة الربط
              </span>
              <AssetIcon
                name="icon_refresh_bottom.svg"
                width={14}
                height={14}
                className="size-[13.333px]"
              />
            </button>
          </div>
        </div>

        <div className="mt-[16px] flex flex-col gap-[8px] border-t border-transparent pt-[8px] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-[8px]">
            <AssetIcon
              name="icon_tls_lock.svg"
              width={12}
              height={15}
              className="h-[15px] w-[12px]"
            />
            <span className="text-right text-[11px] font-medium leading-[16px] text-[#75786f]">
              اتصال مشفر بمعايير TLS 1.3 ومطابق لاشتراطات أمن البيانات المعتمدة في المملكة العربية
              السعودية.
            </span>
          </div>
          <span className="text-[11px] font-normal leading-[16px] text-[#c5c8bd]">
            Hash: c7e199f30b2e
          </span>
        </div>
      </section>
    </div>
  );
}
