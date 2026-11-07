"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { showToast } from "@/lib/toast";
import {
  ACTIVITY_LOG,
  CONNECTION,
  type SyncStatusFilter,
} from "../data/mock-integrations";

const ASSET_BASE = "/assets/integrations";
const SHADOW_SM = "drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]";
const AIRBNB_CONNECT_HREF = "/integrations/status/pending/";

interface IconProps {
  name: string;
  width: number;
  height: number;
  className?: string;
}

function Icon({ name, width, height, className }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("relative block shrink-0", className)}
      style={{ width, height }}
    >
      <Image
        src={`${ASSET_BASE}/${name}.svg`}
        alt=""
        fill
        sizes={`${Math.ceil(width)}px`}
        className="max-w-none object-contain"
      />
    </span>
  );
}

async function copyText(value: string, successMessage: string) {
  try {
    await navigator.clipboard.writeText(value);
    showToast.success(successMessage);
  } catch {
    showToast.error("تعذر النسخ — حاول مرة أخرى");
  }
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

function IntegrationsHeroBar() {
  return (
    <section
      dir="rtl"
      data-node-id="1:19338"
      data-name="Section - TOP HERO GREETING BAR"
      className={cn(
        "flex w-full flex-col gap-4 rounded-[16px] bg-white px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-9",
        SHADOW_SM
      )}
    >
      <div className="flex flex-col items-start gap-1">
        <h1 className="font-cairo text-[24px] font-bold leading-[34px] text-[#181d17]">
          ربط منصات الحجز
        </h1>
        <p className="max-w-[520px] font-cairo text-[14px] font-normal leading-[22px] text-[#454840]">
          اربط حسابات الحجز العالمية والمحلية لمزامنة الحجوزات والتوافر والأسعار
          تلقائيًا لحظة بلحظة.
        </p>
      </div>

      <div
        className={cn(
          "flex items-center gap-2 rounded-[12px] bg-[#f1f5eb] px-4 py-2",
          SHADOW_SM
        )}
      >
        <span className="relative flex size-[10px] shrink-0 items-start">
          <span className="absolute inset-0 rounded-full bg-[#34422a] opacity-75" />
          <span className="relative size-[10px] rounded-full bg-[#34422a]" />
        </span>
        <Icon name="icon_sync_live" width={16.667} height={15} />
        <p className="max-w-[280px] text-end font-cairo text-[12px] font-semibold leading-[18px] text-[#181d17]">
          المزامنة اللحظية مفعلة (2-Way Sync) عبر بروتوكول iCal و API الرسمي
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Platform cards                                                            */
/* -------------------------------------------------------------------------- */

function BookingPlatformCard({
  onScrollToDetails,
}: {
  onScrollToDetails: () => void;
}) {
  return (
    <article
      data-node-id="1:19400"
      data-name="Platform 1: Booking.com (Connected & Active)"
      className={cn(
        "relative flex min-h-[264px] flex-1 flex-col justify-between rounded-[16px] bg-white p-6",
        SHADOW_SM
      )}
    >
      <div className="absolute inset-x-0 top-0 h-[6px] rounded-t-[16px] bg-[#34422a]" />

      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-4">
            <div
              className={cn(
                "flex size-[56px] shrink-0 items-center justify-center rounded-[12px] bg-[#003580]",
                SHADOW_SM
              )}
            >
              <span className="font-cairo text-[20px] font-bold leading-[28px] tracking-[-0.5px] text-white">
                B.
              </span>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                <span className="font-cairo text-[18px] font-semibold leading-[28px] text-[#181d17]">
                  Booking.com
                </span>
                <Icon name="icon_verified_badge" width={16.5} height={15.75} />
              </div>
              <p className="font-cairo text-[13px] font-normal leading-[20px] text-[#454840]">
                شريك اتصال تقني فندقي معتمد
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 rounded-full bg-[#d8e8cb] px-4 py-1">
            <span className="size-2 shrink-0 rounded-full bg-[#34422a]" />
            <span className="font-cairo text-[12px] font-semibold leading-[18px] text-[#121f0d]">
              تم الربط بنجاح
            </span>
          </div>
        </div>

        <p className="text-end font-cairo text-[14px] font-normal leading-[22px] text-[#454840]">
          مزامنة الحجوزات، الأسعار، التوافر التلقائي، وتفاصيل النزلاء مباشرة عبر
          واجهة الربط المباشر.
        </p>

        <div className="flex flex-wrap justify-end gap-1">
          <span className="flex items-center gap-1 rounded-[8px] bg-[#f1f5eb] px-2 py-1">
            <Icon name="icon_tag_units" width={10.5} height={10.5} />
            <span className="font-cairo text-[11px] font-medium leading-[16px] text-[#181d17]">
              24 وحدة متزامنة
            </span>
          </span>
          <span className="flex items-center gap-1 rounded-[8px] bg-[#f1f5eb] px-2 py-1">
            <Icon name="icon_tag_no_conflict" width={11.667} height={11.667} />
            <span className="font-cairo text-[11px] font-medium leading-[16px] text-[#181d17]">
              0 تعارضات تقويم
            </span>
          </span>
          <span className="flex items-center gap-1 rounded-[8px] bg-[#f1f5eb] px-2 py-1">
            <Icon name="icon_tag_realtime" width={9.333} height={11.667} />
            <span className="font-cairo text-[11px] font-medium leading-[16px] text-[#181d17]">
              مزامنة لحظية فورية
            </span>
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-[12px] bg-[rgba(241,245,235,0.5)] px-4 pb-2 pt-4">
        <p className="font-cairo text-[11px] font-medium leading-[16px] text-[#454840]">
          القناة المحددة للتهيئة الحالية
        </p>
        <button
          type="button"
          onClick={onScrollToDetails}
          className="flex cursor-pointer items-center gap-1 text-[#34422a] transition-opacity hover:opacity-80"
        >
          <Icon name="icon_data_below" width={13.5} height={13.5} />
          <span className="font-cairo text-[12px] font-semibold leading-[18px]">
            البيانات معروضة بالأسفل
          </span>
        </button>
      </div>
    </article>
  );
}

function AirbnbPlatformCard() {
  return (
    <article
      data-node-id="1:19364"
      data-name="Platform 2: Airbnb (Disconnected)"
      className={cn(
        "flex flex-1 flex-col justify-between rounded-[16px] bg-white p-6",
        SHADOW_SM
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-4">
            <div
              className={cn(
                "flex size-[56px] shrink-0 items-center justify-center rounded-[12px] bg-[#ff5a5f]",
                SHADOW_SM
              )}
            >
              <Icon name="logo_airbnb" width={25.667} height={23.333} />
            </div>
            <div className="flex flex-col items-start">
              <div className="flex flex-wrap items-center gap-1">
                <span className="font-cairo text-[18px] font-semibold leading-[28px] text-[#181d17]">
                  Airbnb
                </span>
                <span className="font-cairo text-[11px] font-medium leading-[16px] text-[#454840]">
                  المحلي والدولي
                </span>
              </div>
              <p className="font-cairo text-[13px] font-normal leading-[20px] text-[#454840]">
                إدارة الحجوزات السكنية والسياحية
              </p>
            </div>
          </div>

          <div className="rounded-full bg-[#e5eae0] px-4 py-1">
            <span className="font-cairo text-[12px] font-semibold leading-[18px] text-[#454840]">
              غير مرتبط
            </span>
          </div>
        </div>

        <p className="text-end font-cairo text-[14px] font-normal leading-[22px] text-[#454840]">
          ربط تقويم الوحدات والأسعار اليومية واستقبال الحجوزات الفورية من إير بي
          إن بي وتحديث التقويم المشترك تلقائيًا.
        </p>

        <div className="flex flex-wrap justify-end gap-1">
          <span className="flex items-center gap-1 rounded-[8px] bg-[#f1f5eb] px-2 py-1">
            <Icon name="icon_tag_ical" width={11.083} height={11.667} />
            <span className="font-cairo text-[11px] font-medium leading-[16px] text-[#454840]">
              دعم بروتوكول iCal
            </span>
          </span>
          <span className="flex items-center gap-1 rounded-[8px] bg-[#f1f5eb] px-2 py-1">
            <Icon name="icon_tag_pricing" width={12.833} height={9.333} />
            <span className="font-cairo text-[11px] font-medium leading-[16px] text-[#454840]">
              تعديل الأسعار التلقائي
            </span>
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between pt-4">
        <p className="font-cairo text-[13px] font-normal leading-[20px] text-[#454840]">
          جاهز للربط في 3 خطوات بسيطة
        </p>
        <Link
          href={AIRBNB_CONNECT_HREF}
          className="flex h-11 items-center gap-1 rounded-[12px] bg-[#f1f5eb] px-6 transition-opacity hover:opacity-90"
        >
          <Icon name="icon_connect_airbnb" width={15} height={9.75} />
          <span className="font-cairo text-[14px] font-semibold leading-5 text-[#181d17]">
            ربط Airbnb
          </span>
        </Link>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*  Connection details                                                        */
/* -------------------------------------------------------------------------- */

function ConnectionDetailsSection() {
  return (
    <section
      id="connection-details"
      data-node-id="1:19443"
      data-name="Section 2: بيانات الربط والاتصال — Booking.com"
      className={cn(
        "flex w-full scroll-mt-6 flex-col gap-6 rounded-[16px] bg-white p-6",
        SHADOW_SM
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2">
        <div className="flex items-center gap-2">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[#4b5940]">
            <Icon name="icon_connection_data" width={16.667} height={8.333} />
          </div>
          <div className="flex flex-col items-start">
            <h3 className="font-cairo text-[20px] font-semibold leading-[30px] text-[#181d17]">
              بيانات الربط والاتصال — Booking.com
            </h3>
            <p className="font-cairo text-[13px] font-normal leading-5 text-[#454840]">
              تفاصيل الربط الفني المعتمد والمصادقة الأمنية
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 rounded-full bg-[#d8e8cb] px-4 py-1">
          <Icon name="icon_cert_shield" width={12} height={15.75} />
          <span className="font-cairo text-[12px] font-semibold leading-[18px] text-[#34422a]">
            شهادة اتصال مشفرة ومصادق عليها
          </span>
        </div>
      </div>

      <div className="flex items-start gap-4 rounded-[12px] bg-[#f1f5eb] px-4 py-4">
        <Icon name="icon_banner_check" width={16} height={22} />
        <div className="flex flex-1 flex-col gap-1 items-start">
          <p className="w-full text-end font-cairo text-[14px] font-semibold leading-5 text-[#181d17]">
            {CONNECTION.bannerTitle}
          </p>
          <p className="w-full text-end font-cairo text-[13px] font-normal leading-5 text-[#454840]">
            {CONNECTION.bannerSubtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className="w-full text-end font-cairo text-[12px] font-semibold leading-[18px] text-[#454840]">
            معرف العقار لدى بوكينج (Property ID)
          </label>
          <div className="flex h-12 items-center justify-between rounded-[12px] bg-[#f1f5eb] px-4">
            <div className="flex items-center gap-2">
              <span className="font-cairo text-[18px] font-bold leading-7 text-[#181d17]">
                {CONNECTION.propertyId}
              </span>
              <span className="flex items-center gap-0.5 rounded-full bg-white px-2 py-0.5">
                <Icon name="icon_check_verified" width={12.775} height={7.015} />
                <span className="font-cairo text-[12px] font-semibold leading-[18px] text-[#34422a]">
                  معتمد ومطابق
                </span>
              </span>
            </div>
            <button
              type="button"
              onClick={() =>
                void copyText(CONNECTION.propertyId, "تم نسخ معرف العقار")
              }
              className="flex cursor-pointer items-center gap-1 text-[#454840] transition-opacity hover:opacity-80"
            >
              <Icon name="icon_copy" width={12.75} height={15} />
              <span className="font-cairo text-[11px] font-medium leading-4">
                نسخ
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="w-full text-end font-cairo text-[12px] font-semibold leading-[18px] text-[#454840]">
            العقار المرتبط بالنظام
          </label>
          <div className="flex h-12 items-center justify-between rounded-[12px] bg-[#f1f5eb] px-4">
            <div className="flex items-center gap-2">
              <Icon name="icon_property" width={15} height={15} />
              <span className="font-cairo text-[14px] font-semibold leading-5 text-[#181d17]">
                {CONNECTION.propertyName}
              </span>
            </div>
            <span className="font-cairo text-[11px] font-medium leading-4 text-[#454840]">
              {CONNECTION.activeUnitsLabel}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1 md:col-span-2">
          <label className="w-full text-end font-cairo text-[12px] font-semibold leading-[18px] text-[#454840]">
            Webhook URL / رابط المزامنة التلقائية والاشعارات اللحظية
          </label>
          <div className="flex h-12 items-center justify-between gap-3 overflow-hidden rounded-[12px] bg-[#f1f5eb] px-4">
            <p
              dir="ltr"
              className="min-w-0 flex-1 truncate text-start font-cairo text-[13px] font-normal leading-5 text-[#454840]"
            >
              {CONNECTION.webhookUrl}
            </p>
            <button
              type="button"
              onClick={() =>
                void copyText(CONNECTION.webhookUrl, "تم نسخ رابط Webhook")
              }
              className={cn(
                "flex shrink-0 cursor-pointer items-center gap-1 rounded-[8px] bg-white px-4 py-1.5",
                SHADOW_SM
              )}
            >
              <Icon name="icon_copy_link" width={11.333} height={13.333} />
              <span className="font-cairo text-[11px] font-medium leading-4 text-[#181d17]">
                نسخ الرابط
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="w-full text-end font-cairo text-[12px] font-semibold leading-[18px] text-[#454840]">
            نوع الاتصال المعتمد
          </label>
          <div className="flex h-12 items-center gap-2 rounded-[12px] bg-[#f1f5eb] px-4">
            <Icon name="icon_protocol" width={16.667} height={13.333} />
            <span className="font-cairo text-[12px] font-semibold leading-[18px] text-[#181d17]">
              {CONNECTION.protocol}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="w-full text-end font-cairo text-[12px] font-semibold leading-[18px] text-[#454840]">
            تكرار التحديث الآلي
          </label>
          <div className="flex h-12 items-center justify-between rounded-[12px] bg-[#f1f5eb] px-4">
            <div className="flex items-center gap-2">
              <Icon name="icon_sync_freq" width={15} height={17.5} />
              <span className="font-cairo text-[12px] font-semibold leading-[18px] text-[#181d17]">
                {CONNECTION.syncFrequency}
              </span>
            </div>
            <span className="font-cairo text-[11px] font-semibold leading-4 text-[#34422a]">
              {CONNECTION.syncFrequencyHint}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Sync metrics                                                              */
/* -------------------------------------------------------------------------- */

function SyncStatusSection({
  filter,
  onFilterChange,
}: {
  filter: SyncStatusFilter;
  onFilterChange: (next: SyncStatusFilter) => void;
}) {
  // Figma DOM order (LTR visual: disconnected → pending → connected active)
  const pills: { id: SyncStatusFilter; label: string; active: boolean }[] = [
    {
      id: "disconnected",
      label: "غير متصل",
      active: filter === "disconnected",
    },
    { id: "pending", label: "بانتظار الموافقة", active: filter === "pending" },
    { id: "connected", label: "تم الربط (نشط)", active: filter === "connected" },
  ];

  return (
    <section
      data-node-id="1:19525"
      data-name="Section 3"
      className="flex w-full flex-col gap-4"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[#4b5940]">
            <Icon name="icon_sync_status" width={15} height={15} />
          </div>
          <div className="flex flex-col items-start gap-0.5">
            <h3 className="font-cairo text-[20px] font-semibold leading-[30px] text-[#181d17]">
              حالة المزامنة والنشاط اللحظي
            </h3>
            <p className="font-cairo text-[13px] font-normal leading-5 text-[#454840]">
              {CONNECTION.lastSyncLabel}
            </p>
          </div>
        </div>

        <div
          dir="ltr"
          className="flex items-center rounded-[12px] bg-[#e5eae0] p-1"
        >
          {pills.map((pill) => (
            <button
              key={pill.id}
              type="button"
              dir="rtl"
              onClick={() => onFilterChange(pill.id)}
              className={cn(
                "flex cursor-pointer items-center gap-1 rounded-[8px] px-4 py-1 transition-all",
                pill.active
                  ? cn("bg-white", SHADOW_SM)
                  : "opacity-60 hover:opacity-80"
              )}
            >
              {pill.active ? (
                <span className="size-2 shrink-0 rounded-full bg-[#34422a]" />
              ) : null}
              <span
                className={cn(
                  "font-cairo text-[11px] font-medium leading-4",
                  pill.active ? "text-[#34422a]" : "text-[#454840]"
                )}
              >
                {pill.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Figma DOM: rates → availability → bookings; with dir=rtl bookings sits on the start (right) */}
      <div
        dir="ltr"
        className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:justify-center"
      >
        <div dir="rtl" className="flex w-full lg:max-w-[303px] lg:flex-1">
          <MetricCard
            icon="icon_metric_rates"
            iconWidth={18.31}
            iconHeight={18.333}
            eyebrow="قوائم التسعير"
            title="مزامنة الأسعار"
            value={"مطابقة\nللجدول"}
            time={"اليوم 09:15\nص"}
            footerLabel={"الحالة\nالسعرية:"}
            footerValue={"الأسعار الموسمية والخصومات\nسارية"}
            multilineValue
          />
        </div>
        <div dir="rtl" className="flex w-full lg:max-w-[303px] lg:flex-1">
          <MetricCard
            icon="icon_metric_availability"
            iconWidth={16.5}
            iconHeight={18.333}
            eyebrow="التقويم والشاغر"
            title="مزامنة التوافر"
            value="محدّثة بالكامل"
            time="اليوم 10:40 ص"
            footerLabel="الإغلاق الأخير:"
            footerValue="إغلاق تلقائي للوحدة 204"
          />
        </div>
        <div dir="rtl" className="flex w-full lg:max-w-[303px] lg:flex-1">
          <MetricCard
            icon="icon_metric_bookings"
            iconWidth={13.75}
            iconHeight={20.167}
            eyebrow="حجوزات المنصة"
            title="مزامنة الحجوزات"
            value="ناجحة 100%"
            time="اليوم 10:42 ص"
            footerLabel="آخر حجز وارد:"
            footerValue="#BK-10482 (أحمد محمد)"
            footerBold
          />
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  icon,
  iconWidth,
  iconHeight,
  eyebrow,
  title,
  value,
  time,
  footerLabel,
  footerValue,
  footerBold,
  multilineValue,
}: {
  icon: string;
  iconWidth: number;
  iconHeight: number;
  eyebrow: string;
  title: string;
  value: string;
  time: string;
  footerLabel: string;
  footerValue: string;
  footerBold?: boolean;
  multilineValue?: boolean;
}) {
  return (
    <article
      className={cn(
        "flex min-h-[238px] w-full flex-col justify-between rounded-[16px] bg-white p-6",
        SHADOW_SM
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col items-start">
          <p className="font-cairo text-[11px] font-medium leading-4 text-[#454840]">
            {eyebrow}
          </p>
          <h4 className="font-cairo text-[18px] font-semibold leading-7 text-[#181d17]">
            {title}
          </h4>
        </div>
        <div className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-[#d8e8cb]">
          <Icon name={icon} width={iconWidth} height={iconHeight} />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-end justify-between gap-2">
          <p
            className={cn(
              "whitespace-pre-line text-end font-cairo text-[30px] font-semibold leading-[42px] text-[#181d17]",
              multilineValue ? "" : "whitespace-nowrap"
            )}
          >
            {value}
          </p>
          <p className="whitespace-pre-line pb-1 text-end font-cairo text-[11px] font-medium leading-4 text-[#34422a]">
            {time}
          </p>
        </div>
        <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-[#e5eae0]">
          <div className="h-full w-full rounded-full bg-[#34422a]" />
        </div>
      </div>

      <div className="flex items-center justify-between rounded-[12px] bg-[#f1f5eb] px-4 py-2">
        <p className="whitespace-pre-line text-end font-cairo text-[11px] font-medium leading-4 text-[#454840]">
          {footerLabel}
        </p>
        <p
          className={cn(
            "whitespace-pre-line text-end font-cairo text-[12px] leading-[18px] text-[#181d17]",
            footerBold ? "font-bold" : "font-semibold"
          )}
        >
          {footerValue}
        </p>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*  Activity log                                                              */
/* -------------------------------------------------------------------------- */

function ActivityLogSection() {
  return (
    <section
      data-node-id="1:19613"
      data-name="Section 4"
      className={cn(
        "flex w-full flex-col gap-4 rounded-[16px] bg-white p-6",
        SHADOW_SM
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[#4b5940]">
            <Icon name="icon_activity_log" width={15} height={15} />
          </div>
          <div className="flex flex-col items-end gap-0.5">
            <h3 className="font-cairo text-[20px] font-semibold leading-[30px] text-[#181d17]">
              سجل العمليات والمزامنة الأخيرة
            </h3>
            <p className="font-cairo text-[13px] font-normal leading-5 text-[#454840]">
              تدقيق تفصيلي لتبادل البيانات بين صَرْح وبوكينج
            </p>
          </div>
        </div>
        <div className="rounded-full bg-[#f1f5eb] px-4 py-1">
          <span className="font-cairo text-[12px] font-semibold leading-[18px] text-[#454840]">
            عرض آخر 4 سجلات
          </span>
        </div>
      </div>

      <div className="w-full overflow-x-auto rounded-[12px]">
        <table className="w-full min-w-[900px] border-collapse text-end">
          <thead>
            <tr className="bg-[#f1f5eb]">
              {(
                [
                  "الوقت",
                  "نوع الحدث / العملية",
                  "النطاق والوحدة",
                  "الجهة / القناة",
                  "الحالة",
                ] as const
              ).map((label, index, arr) => (
                <th
                  key={label}
                  className={cn(
                    "p-4 font-cairo text-[12px] font-bold leading-[18px] text-[#454840]",
                    index === 0 && "rounded-se-[12px]",
                    index === arr.length - 1 && "rounded-ss-[12px]"
                  )}
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ACTIVITY_LOG.map((row, index) => (
              <tr
                key={row.id}
                className={cn(
                  index > 0 && "border-t border-[#f1f5eb]",
                  "bg-white"
                )}
              >
                <td className="px-4 py-4 font-cairo text-[13px] font-bold leading-5 text-[#454840]">
                  {row.time}
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center justify-end gap-1">
                    <span className="font-cairo text-[12px] font-semibold leading-[18px] text-[#181d17]">
                      {row.event}
                    </span>
                    <Icon
                      name={row.eventIcon}
                      width={row.eventIconWidth}
                      height={row.eventIconHeight}
                    />
                  </div>
                </td>
                <td className="px-4 py-4 font-cairo text-[13px] font-normal leading-5 text-[#181d17]">
                  {row.scope}
                </td>
                <td className="px-4 py-4 font-cairo text-[13px] font-normal leading-5 text-[#181d17]">
                  {row.channel}
                </td>
                <td className="px-4 py-4">
                  <div className="flex justify-end">
                    {row.status === "success" ? (
                      <span className="flex items-center gap-1 rounded-full bg-[#d8e8cb] px-2 py-0.5">
                        <Icon
                          name="icon_status_success"
                          width={9.508}
                          height={7.015}
                        />
                        <span className="font-cairo text-[11px] font-medium leading-4 text-[#121f0d]">
                          {row.statusLabel}
                        </span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 rounded-full bg-[#e5eae0] px-2 py-0.5">
                        <span className="size-1.5 shrink-0 rounded-full bg-[#34422a]" />
                        <span className="font-cairo text-[11px] font-medium leading-4 text-[#181d17]">
                          {row.statusLabel}
                        </span>
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Bottom actions + disconnect confirm                                       */
/* -------------------------------------------------------------------------- */

function DisconnectConfirmModal({
  open,
  onClose,
  onConfirm,
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      dir="rtl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disconnect-title"
    >
      <div className="w-full max-w-[440px] rounded-[16px] border border-[#e5e8e2] bg-white p-6 shadow-[0px_10px_25px_-5px_rgba(0,0,0,0.1)]">
        <h2
          id="disconnect-title"
          className="font-cairo text-[18px] font-bold leading-[26px] text-[#ba1a1a]"
        >
          فصل الاتصال؟
        </h2>
        <p className="mt-2 font-cairo text-[13px] font-normal leading-5 text-[#454840]">
          في حال فصل الاتصال، لن يتم إيقاف الحجوزات السابقة ولكن ستتوقف مزامنة
          التوافر التلقائية فورًا.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className={cn(
              "h-11 cursor-pointer rounded-[12px] bg-white px-6 font-cairo text-[14px] font-semibold text-[#181d17]",
              SHADOW_SM
            )}
          >
            إلغاء
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex h-11 cursor-pointer items-center gap-1 rounded-[12px] bg-[rgba(255,218,214,0.5)] px-4 font-cairo text-[14px] font-semibold text-[#ba1a1a]"
          >
            <Icon name="icon_disconnect" width={15.45} height={14.85} />
            تأكيد الفصل
          </button>
        </div>
      </div>
    </div>
  );
}

function BottomActionBar({
  onDisconnect,
  onSave,
  onResync,
}: {
  onDisconnect: () => void;
  onSave: () => void;
  onResync: () => void;
}) {
  return (
    <section
      data-node-id="1:19706"
      data-name="Bottom Action Bar"
      className={cn(
        "flex w-full flex-col gap-4 rounded-[16px] bg-white p-6 sm:flex-row sm:items-center sm:justify-between",
        SHADOW_SM
      )}
    >
      <div className="flex items-start gap-2 sm:items-center">
        <Icon name="icon_warning_info" width={16.667} height={16.667} />
        <p className="max-w-[420px] text-end font-cairo text-[13px] font-normal leading-5 text-[#454840]">
          في حال فصل الاتصال، لن يتم إيقاف الحجوزات السابقة ولكن ستتوقف مزامنة
          التوافر التلقائية فورًا.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onDisconnect}
          className="flex h-11 cursor-pointer items-center gap-1 rounded-[12px] bg-[rgba(255,218,214,0.3)] px-4 transition-opacity hover:opacity-90"
        >
          <Icon name="icon_disconnect" width={15.45} height={14.85} />
          <span className="font-cairo text-[14px] font-semibold leading-5 text-[#ba1a1a]">
            فصل الاتصال
          </span>
        </button>
        <button
          type="button"
          onClick={onSave}
          className={cn(
            "flex h-11 cursor-pointer items-center justify-center rounded-[12px] bg-white px-6",
            SHADOW_SM
          )}
        >
          <span className="font-cairo text-[14px] font-semibold leading-5 text-[#181d17]">
            حفظ إعدادات الربط
          </span>
        </button>
        <button
          type="button"
          onClick={onResync}
          className={cn(
            "flex h-11 cursor-pointer items-center gap-1 rounded-[12px] bg-[#34422a] px-6 text-white transition-opacity hover:opacity-90",
            SHADOW_SM
          )}
        >
          <Icon name="icon_resync" width={13.333} height={13.333} />
          <span className="font-cairo text-[14px] font-semibold leading-5">
            إعادة المزامنة الفورية
          </span>
        </button>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page view                                                                 */
/* -------------------------------------------------------------------------- */

export function IntegrationsConnectedView() {
  const detailsRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<SyncStatusFilter>("connected");
  const [disconnectOpen, setDisconnectOpen] = useState(false);

  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleResync = () => {
    showToast.success("تمت إعادة المزامنة الفورية بنجاح");
  };

  const handleSave = () => {
    showToast.success("تم حفظ إعدادات الربط");
  };

  const handleDisconnectConfirm = () => {
    setDisconnectOpen(false);
    showToast.error("تم فصل الاتصال — توقفت مزامنة التوافر التلقائية");
  };

  return (
    <div
      dir="rtl"
      lang="ar"
      data-node-id="1:19335"
      data-name="ربط منصات الحجز"
      className="flex w-full flex-col gap-9 font-cairo"
    >
      <IntegrationsHeroBar />

      <section
        data-node-id="1:19356"
        data-name="Section 1"
        className="flex w-full flex-col gap-4"
      >
        <div className="flex items-center justify-end gap-1">
          <h2 className="font-cairo text-[20px] font-semibold leading-[30px] text-[#181d17]">
            المنصات المدعومة
          </h2>
          <Icon name="icon_platforms" width={22} height={21.083} />
        </div>

        {/* Figma visual: Booking (connected) on the right, Airbnb on the left */}
        <div
          dir="ltr"
          className="flex flex-col gap-6 lg:flex-row lg:items-stretch"
        >
          <div dir="rtl" className="flex flex-1">
            <AirbnbPlatformCard />
          </div>
          <div dir="rtl" className="flex flex-1">
            <BookingPlatformCard onScrollToDetails={scrollToDetails} />
          </div>
        </div>
      </section>

      <div ref={detailsRef}>
        <ConnectionDetailsSection />
      </div>

      <SyncStatusSection filter={filter} onFilterChange={setFilter} />
      <ActivityLogSection />
      <BottomActionBar
        onDisconnect={() => setDisconnectOpen(true)}
        onSave={handleSave}
        onResync={handleResync}
      />

      <DisconnectConfirmModal
        open={disconnectOpen}
        onClose={() => setDisconnectOpen(false)}
        onConfirm={handleDisconnectConfirm}
      />
    </div>
  );
}
