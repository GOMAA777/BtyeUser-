"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { showToast } from "@/lib/toast";

export function UnitDetailsView() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("583921");
    setCopied(true);
    showToast.success("تم نسخ كود الدخول الذكي (583921) إلى الحافظة");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="flex flex-col gap-[20px] w-full"
      data-node-id="1:5340"
      data-name="عرض الوحدة"
      dir="rtl"
    >
      {/* 1. TOP HERO GREETING BAR */}
      <div
        className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-neutral-100/60"
        data-node-id="1:5342"
        data-name="Section - TOP HERO GREETING BAR"
      >
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-3">
            <h1
              className="font-bold text-[#181d17] text-[24px] sm:text-[28px] leading-[34px]"
              data-node-id="1:5347"
            >
              الوحدة 101
            </h1>
            <div
              className="bg-[rgba(216,232,203,0.6)] flex gap-2 items-center px-3.5 py-1 rounded-full shrink-0"
              data-node-id="1:5348"
            >
              <span className="font-bold text-[#34422a] text-[12px] leading-[18px]">
                متاحة للاستقبال
              </span>
              <div className="bg-[#34422a] rounded-full size-2 shrink-0" />
            </div>
          </div>

          <div
            className="flex flex-wrap items-center gap-2 sm:gap-4 text-[#75786f] text-[13px] sm:text-[14px]"
            data-node-id="1:5353"
          >
            <div className="flex gap-1.5 items-center">
              <div className="h-[15px] w-[13.5px] relative shrink-0">
                <Image
                  src="/assets/units/details/d68bb.svg"
                  alt="time"
                  width={14}
                  height={15}
                  className="w-full h-full object-contain"
                />
              </div>
              <span>تم التحديث اليوم، 12:15 م</span>
            </div>

            <div className="bg-[#c5c8bd] rounded-full size-1 shrink-0 hidden sm:block" />

            <div className="flex gap-1.5 items-center">
              <div className="h-[14px] w-[13.5px] relative shrink-0">
                <Image
                  src="/assets/units/details/e1b77.svg"
                  alt="floor"
                  width={14}
                  height={14}
                  className="w-full h-full object-contain"
                />
              </div>
              <span>الطابق الأول • جناح رقم 04</span>
            </div>

            <div className="bg-[#c5c8bd] rounded-full size-1 shrink-0 hidden sm:block" />

            <div className="flex gap-1.5 items-center">
              <div className="relative size-[13.5px] shrink-0">
                <Image
                  src="/assets/units/details/3a0d2.svg"
                  alt="location"
                  width={14}
                  height={14}
                  className="w-full h-full object-contain"
                />
              </div>
              <span>عمارة النخيل - الرياض</span>
            </div>
          </div>
        </div>

        <Link
          href="/units/new"
          className="bg-[#34422a] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] hover:bg-[#283420] active:scale-98 transition-all flex gap-2 h-[44px] items-center px-6 rounded-[12px] text-white shrink-0 shadow-sm"
          data-node-id="1:5368"
        >
          <div className="h-[13px] w-[15px] relative shrink-0">
            <Image
              src="/assets/units/details/685e5.svg"
              alt="edit"
              width={15}
              height={13}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-semibold text-[14px] leading-[20px] text-white">
            تعديل الوحدة
          </span>
        </Link>
      </div>

      {/* 2. UNIT PRIMARY METRICS SNAPSHOT STRIP */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        data-node-id="1:5372"
        data-name="Unit Primary Metrics Snapshot Strip"
      >
        {/* Metric 1: Guest Rating */}
        <div
          className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col justify-between p-4 rounded-[16px] min-h-[114px] border border-neutral-100/60"
          data-node-id="1:5373"
        >
          <span className="font-medium text-[#75786f] text-[11px] leading-[16px] text-right">
            تقييم الضيوف
          </span>
          <div className="flex items-baseline justify-end gap-1.5 pt-2">
            <span className="font-medium text-[#75786f] text-[11px] leading-[16px]">
              (34 تقييم)
            </span>
            <span className="font-normal text-[#54624c] text-[14px] leading-[22px]">
              ★
            </span>
            <span className="font-bold text-[#181d17] text-[24px] leading-[34px]">
              4.92
            </span>
          </div>
          <span className="font-medium text-[#54624c] text-[11px] leading-[22px] text-right pt-2">
            تصنيف: ضيافة فائقة التميز
          </span>
        </div>

        {/* Metric 2: Operational Readiness */}
        <div
          className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col justify-between p-4 rounded-[16px] min-h-[114px] border border-neutral-100/60"
          data-node-id="1:5387"
        >
          <span className="font-medium text-[#75786f] text-[11px] leading-[16px] text-right">
            جاهزية التشغيل
          </span>
          <div className="flex items-center justify-end gap-2 pt-2">
            <span className="font-bold text-[#181d17] text-[18px] leading-[28px]">
              جاهزة 100%
            </span>
            <div className="bg-[#34422a] rounded-full size-2.5 shrink-0" />
          </div>
          <span className="font-medium text-[#75786f] text-[11px] leading-[22px] text-right pt-2">
            فحص دوري ونظافة فندقية معتمدة
          </span>
        </div>

        {/* Metric 3: Occupancy Rate */}
        <div
          className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col justify-between p-4 rounded-[16px] min-h-[114px] border border-neutral-100/60"
          data-node-id="1:5398"
        >
          <span className="font-medium text-[#75786f] text-[11px] leading-[16px] text-right">
            نسبة الإشغال (مايو 2024)
          </span>
          <div className="flex items-baseline justify-end gap-2 pt-2">
            <span className="font-semibold text-[#54624c] text-[11px] leading-[16px]">
              +6% عن الشهر السابق
            </span>
            <span className="font-bold text-[#181d17] text-[24px] leading-[34px]">
              92%
            </span>
          </div>
          <div className="bg-[#ebefe6] h-[6px] rounded-full overflow-hidden w-full mt-2">
            <div className="bg-[#34422a] h-full rounded-full w-[92%]" />
          </div>
        </div>

        {/* Metric 4: Reference Nightly Rate */}
        <div
          className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col justify-between p-4 rounded-[16px] min-h-[114px] border border-neutral-100/60"
          data-node-id="1:5410"
        >
          <span className="font-medium text-[#75786f] text-[11px] leading-[16px] text-right">
            السعر المرجعي لليلة
          </span>
          <div className="flex items-baseline justify-end gap-1 pt-2">
            <span className="font-medium text-[#75786f] text-[11px] leading-[16px]">
              ر.س / الليلة
            </span>
            <span className="font-bold text-[#34422a] text-[24px] leading-[34px]">
              450
            </span>
          </div>
          <div className="flex items-center justify-end gap-1 pt-2">
            <span className="font-medium text-[#54624c] text-[11px] leading-[22px]">
              متوسط السوق: 420 ر.س
            </span>
            <div className="h-[7px] w-[11px] relative shrink-0">
              <Image
                src="/assets/units/details/a2a26.svg"
                alt="trend"
                width={11}
                height={7}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. MAIN TWO-COLUMN ARCHITECTURAL GRID (7 Cols Right, 5 Cols Left) */}
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        data-node-id="1:5424"
        data-name="MAIN TWO-COLUMN ARCHITECTURAL GRID"
      >
        {/* RIGHT COLUMN (7 Cols in RTL) */}
        <div className="lg:col-span-7 flex flex-col gap-6" data-node-id="1:5425">
          {/* Hero Image & Gallery Showcase */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-4 flex flex-col gap-4 border border-neutral-100/60"
            data-node-id="1:5426"
            data-name="HERO IMAGE & GALLERY SHOWCASE"
          >
            {/* Primary Large Banner */}
            <div
              className="relative h-[320px] sm:h-[380px] rounded-[12px] overflow-hidden w-full flex items-end justify-between p-4"
              data-node-id="1:5427"
            >
              <Image
                src="/assets/units/details/4a007.png"
                alt="الوحدة 101 - استوديو فاخر"
                fill
                priority
                className="object-cover"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"
                data-node-id="1:5429"
              />

              {/* Top Tags */}
              <div className="absolute top-4 right-4 flex gap-2 items-center">
                <div className="backdrop-blur-md bg-white/90 text-[#181d17] font-semibold text-[11px] px-3 py-1 rounded-full shadow-xs">
                  إضاءة طبيعية وافرة
                </div>
                <div className="backdrop-blur-md bg-black/40 text-white font-medium text-[11px] px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
                  <div className="h-[11px] w-[13px] relative shrink-0">
                    <Image
                      src="/assets/units/details/d6abf.svg"
                      alt="star"
                      width={13}
                      height={11}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span>الصورة الرئيسية</span>
                </div>
              </div>

              {/* Bottom Caption and Zoom Button */}
              <div className="relative z-10 flex items-end justify-between w-full">
                <button
                  type="button"
                  onClick={() => showToast.info("عرض الصورة بدقة كاملة")}
                  className="backdrop-blur-md bg-white/25 hover:bg-white/40 active:scale-95 transition-all p-2 rounded-[12px] text-white shrink-0 cursor-pointer"
                  data-node-id="1:5438"
                >
                  <div className="relative size-[15px]">
                    <Image
                      src="/assets/units/details/76458.svg"
                      alt="fullscreen"
                      width={15}
                      height={15}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </button>

                <div className="flex flex-col items-end text-right text-white">
                  <h3 className="font-bold text-[18px] leading-[28px] drop-shadow-sm">
                    منظور المعيشة والاسترخاء الداخلي
                  </h3>
                  <p className="font-normal text-white/90 text-[13px] leading-[20px] drop-shadow-sm max-w-[360px]">
                    تصميم عصري متوازن، أثاث من خشب البلوط الطبيعي وتجهيزات فاخرة
                  </p>
                </div>
              </div>
            </div>

            {/* Thumbnails Row & Gallery CTA */}
            <div className="flex flex-col gap-2 pt-2" data-node-id="1:5446">
              <div className="flex items-center justify-between w-full">
                <button
                  type="button"
                  onClick={() => showToast.info("فتح مدير معرض الصور")}
                  className="flex gap-1.5 items-center text-[#34422a] hover:underline font-bold text-[12px] leading-[18px]"
                  data-node-id="1:5448"
                >
                  <div className="h-[8px] w-[5px] relative shrink-0">
                    <Image
                      src="/assets/units/details/f0810.svg"
                      alt="arrow"
                      width={5}
                      height={8}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span>إدارة الصور (4 صور)</span>
                </button>

                <div className="flex gap-2 items-center" data-node-id="1:5452">
                  <span className="font-semibold text-[#181d17] text-[18px] leading-[28px]">
                    معرض الصور
                  </span>
                  <div className="relative size-[17px] shrink-0">
                    <Image
                      src="/assets/units/details/c0974.svg"
                      alt="gallery"
                      width={17}
                      height={17}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Thumbnails Grid */}
              <div className="grid grid-cols-3 gap-3 w-full" data-node-id="1:5456">
                {/* Thumb 1 */}
                <div
                  className="relative h-[90px] sm:h-[112px] rounded-[12px] overflow-hidden group cursor-pointer"
                  data-node-id="1:5457"
                  onClick={() => showToast.info("عرض: الحمام الرخامي")}
                >
                  <Image
                    src="/assets/units/details/aed48.png"
                    alt="الحمام الرخامي"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-1.5 right-2 bg-black/50 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded-[6px]">
                    الحمام الرخامي
                  </div>
                </div>

                {/* Thumb 2 */}
                <div
                  className="relative h-[90px] sm:h-[112px] rounded-[12px] overflow-hidden group cursor-pointer"
                  data-node-id="1:5462"
                  onClick={() => showToast.info("عرض: المطبخ والبار")}
                >
                  <Image
                    src="/assets/units/details/7731c.png"
                    alt="المطبخ والبار"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-1.5 right-2 bg-black/50 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded-[6px]">
                    المطبخ والبار
                  </div>
                </div>

                {/* Thumb 3 */}
                <div
                  className="relative h-[90px] sm:h-[112px] rounded-[12px] overflow-hidden group cursor-pointer"
                  data-node-id="1:5467"
                  onClick={() => showToast.info("عرض: منطقة النوم")}
                >
                  <Image
                    src="/assets/units/details/cee55.png"
                    alt="منطقة النوم"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-1.5 right-2 bg-black/50 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded-[6px]">
                    منطقة النوم
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION: OPERATIONS OVERVIEW (التشغيل والصيانة) */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-5 sm:p-6 flex flex-col gap-5 border border-neutral-100/60"
            data-node-id="1:5472"
            data-name="SECTION: OPERATIONS OVERVIEW (التشغيل والصيانة)"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between pb-3 border-b border-[#ebefe6]"
              data-node-id="1:5473"
            >
              <div
                className="bg-[rgba(216,232,203,0.7)] flex gap-1.5 items-center px-3 py-1 rounded-full shrink-0"
                data-node-id="1:5474"
              >
                <span className="font-semibold text-[#34422a] text-[12px] leading-[18px]">
                  جاهزة للاستلام الفوري
                </span>
                <div className="bg-[#34422a] rounded-full size-2 shrink-0" />
              </div>

              <div className="flex gap-3 items-center">
                <div className="flex flex-col items-end text-right">
                  <h2 className="font-semibold text-[#181d17] text-[20px] leading-[30px]">
                    حالة التشغيل والجاهزية
                  </h2>
                  <p className="font-normal text-[#75786f] text-[13px] leading-[20px]">
                    متابعة الفحص الميداني، النظافة الفندقية وجاهزية الضيافة
                  </p>
                </div>
                <div className="bg-[#e5eae0] flex items-center justify-center rounded-[12px] shrink-0 size-10">
                  <div className="h-[20px] w-[16.5px] relative shrink-0">
                    <Image
                      src="/assets/units/details/9373e.svg"
                      alt="operations"
                      width={17}
                      height={20}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2 Status Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-node-id="1:5486">
              {/* Box 1: Maintenance */}
              <div
                className="bg-[#f1f5eb] flex flex-col justify-between p-4 rounded-[12px] gap-3"
                data-node-id="1:5487"
              >
                <div className="flex items-start justify-between w-full">
                  <div className="relative size-[17px] shrink-0">
                    <Image
                      src="/assets/units/details/8e37b.svg"
                      alt="wrench"
                      width={17}
                      height={17}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-semibold text-[#75786f] text-[12px] leading-[18px] text-right">
                    حالة الصيانة والأجهزة
                  </span>
                </div>

                <div className="flex flex-col gap-1 items-end text-right">
                  <span className="font-bold text-[#181d17] text-[18px] leading-[28px]">
                    لا توجد بلاغات نشطة
                  </span>
                  <p className="font-normal text-[#75786f] text-[13px] leading-[20px]">
                    آخر فحص دوري شامل: <span className="font-medium text-[#181d17]">12 مايو 2024</span>
                  </p>
                  <div className="flex gap-2 items-center text-[#75786f] text-[11px] font-medium pt-1">
                    <span>التكييف والإنترنت يعملان بكفاءة ممتازة</span>
                    <div className="relative size-[12px] shrink-0">
                      <Image
                        src="/assets/units/details/91aed.svg"
                        alt="check"
                        width={12}
                        height={12}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2: Cleaning */}
              <div
                className="bg-[#f1f5eb] flex flex-col justify-between p-4 rounded-[12px] gap-3"
                data-node-id="1:5503"
              >
                <div className="flex items-start justify-between w-full">
                  <div className="relative size-[17px] shrink-0">
                    <Image
                      src="/assets/units/details/de7d3.svg"
                      alt="sparkles"
                      width={17}
                      height={17}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-semibold text-[#75786f] text-[12px] leading-[18px] text-right">
                    آخر عملية تنظيف
                  </span>
                </div>

                <div className="flex flex-col gap-1 items-end text-right">
                  <span className="font-bold text-[#181d17] text-[18px] leading-[28px]">
                    اليوم، 11:30 ص
                  </span>
                  <p className="font-normal text-[#75786f] text-[13px] leading-[20px]">
                    مكتملة بواسطة المشرف: <span className="font-medium text-[#181d17]">مروان علي</span>
                  </p>
                  <div className="flex gap-2 items-center text-[#54624c] text-[11px] font-medium pt-1">
                    <span>تم تجديد مستلزمات الحمام والقهوة</span>
                    <div className="relative size-[12px] shrink-0">
                      <Image
                        src="/assets/units/details/ce84c.svg"
                        alt="check"
                        width={12}
                        height={12}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div
              className="flex items-center justify-between pt-2"
              data-node-id="1:5519"
            >
              <button
                type="button"
                onClick={() => showToast.info("عرض سجل التشغيل والصيانة الشامل")}
                className="flex gap-1.5 items-center text-[#34422a] hover:underline font-semibold text-[14px] leading-[20px] cursor-pointer"
                data-node-id="1:5520"
              >
                <div className="h-[8px] w-[4px] relative shrink-0">
                  <Image
                    src="/assets/units/details/96dd8.svg"
                    alt="arrow"
                    width={4}
                    height={8}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span>عرض سجل التشغيل الكامل</span>
              </button>

              <button
                type="button"
                onClick={() => showToast.info("جاري فتح نموذج إنشاء بلاغ صيانة جديد")}
                className="bg-[#ebefe6] hover:bg-[#dfe4da] active:scale-98 transition-all flex gap-2 items-center px-4 py-2.5 rounded-[12px] text-[#181d17] font-semibold text-[14px] cursor-pointer"
                data-node-id="1:5524"
              >
                <span>إنشاء بلاغ صيانة جديد</span>
                <div className="h-[14px] w-[16px] relative shrink-0">
                  <Image
                    src="/assets/units/details/5e1ae.svg"
                    alt="ticket"
                    width={16}
                    height={14}
                    className="w-full h-full object-contain"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* LEFT COLUMN (5 Cols in RTL) */}
        <div className="lg:col-span-5 flex flex-col gap-6" data-node-id="1:5528">
          {/* SECTION: SMART ACCESS CODE (كود الدخول الذكي) */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-5 sm:p-6 flex flex-col gap-4 border border-neutral-100/60"
            data-node-id="1:5529"
            data-name="SECTION: SMART ACCESS CODE (كود الدخول الذكي)"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between pb-3 border-b border-[#ebefe6]"
              data-node-id="1:5530"
            >
              <div
                className="bg-[#ebefe6] flex gap-1.5 items-center px-2.5 py-1 rounded-full shrink-0"
                data-node-id="1:5531"
              >
                <span className="font-medium text-[#34422a] text-[11px] leading-[16px]">
                  متصل (Zigbee)
                </span>
                <div className="bg-[#34422a] rounded-full size-1.5 shrink-0" />
              </div>

              <div className="flex gap-2.5 items-center">
                <div className="flex flex-col items-end text-right">
                  <h3 className="font-semibold text-[#181d17] text-[18px] leading-[28px]">
                    كود الدخول الذكي
                  </h3>
                  <span className="font-medium text-[#75786f] text-[11px] leading-[16px]">
                    Yale Assure Lock 2
                  </span>
                </div>
                <div className="bg-[#34422a] flex items-center justify-center rounded-[12px] shrink-0 size-9">
                  <div className="h-[18px] w-[13px] relative shrink-0">
                    <Image
                      src="/assets/units/details/30c7c.svg"
                      alt="lock"
                      width={13}
                      height={18}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Code Box */}
            <div
              className="bg-[#f1f5eb] flex flex-col gap-1 items-center justify-center p-4 rounded-[12px]"
              data-node-id="1:5543"
            >
              <span className="font-medium text-[#75786f] text-[11px] leading-[16px] text-center">
                كود الإدارة الرئيسي المفعّل
              </span>
              <div className="bg-white flex flex-col items-center px-6 py-1 rounded-[12px] my-1 shadow-xs">
                <span
                  className="font-bold text-[#34422a] text-[36px] leading-[48px] tracking-[3.6px]"
                  data-node-id="1:5548"
                >
                  583921
                </span>
              </div>
              <div className="flex gap-1.5 items-center text-[#54624c] text-[11px] font-medium pt-1">
                <span>صلاحية: دائم للمالك والإدارة</span>
                <div className="h-[12px] w-[9px] relative shrink-0">
                  <Image
                    src="/assets/units/details/06a16.svg"
                    alt="key"
                    width={9}
                    height={12}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Buttons Row */}
            <div className="flex gap-2 items-center pt-1" data-node-id="1:5555">
              {/* Secondary: إعداد القفل الذكي -> Links to Lock Setup View */}
              <Link
                href="/units/lock"
                className="bg-[#ebefe6] hover:bg-[#dfe4da] active:scale-98 transition-all flex gap-2 items-center justify-center px-4 py-2.5 rounded-[12px] text-[#181d17] font-semibold text-[14px]"
                data-node-id="1:5556"
              >
                <span>إعداد القفل الذكي</span>
                <div className="h-[9px] w-[17px] relative shrink-0">
                  <Image
                    src="/assets/units/details/18477.svg"
                    alt="settings"
                    width={17}
                    height={9}
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>

              {/* Primary: نسخ الكود */}
              <button
                type="button"
                onClick={handleCopyCode}
                className="bg-[#e5eae0] hover:bg-[#d8e0d2] active:scale-98 transition-all flex flex-1 gap-2 items-center justify-center px-4 py-2.5 rounded-[12px] text-[#181d17] font-semibold text-[14px] cursor-pointer"
                data-node-id="1:5560"
              >
                <span>{copied ? "تم النسخ!" : "نسخ الكود"}</span>
                <div className="h-[15px] w-[13px] relative shrink-0">
                  <Image
                    src="/assets/units/details/babe3.svg"
                    alt="copy"
                    width={13}
                    height={15}
                    className="w-full h-full object-contain"
                  />
                </div>
              </button>
            </div>
          </div>

          {/* SECTION: CURRENT & UPCOMING BOOKINGS (حالة الحجز الحالية) */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-5 sm:p-6 flex flex-col gap-4 border border-neutral-100/60"
            data-node-id="1:5565"
            data-name="SECTION: CURRENT & UPCOMING BOOKINGS (حالة الحجز الحالية)"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between pb-3 border-b border-[#ebefe6]"
              data-node-id="1:5566"
            >
              <span className="font-medium text-[#75786f] text-[11px] leading-[16px]">
                اليوم: 16 مايو 2024
              </span>
              <div className="flex gap-2.5 items-center">
                <h3 className="font-semibold text-[#181d17] text-[18px] leading-[28px]">
                  حالة الحجز
                </h3>
                <div className="bg-[#ebefe6] flex items-center justify-center rounded-[12px] shrink-0 size-9">
                  <div className="h-[17px] w-[15px] relative shrink-0">
                    <Image
                      src="/assets/units/details/a5b3c.svg"
                      alt="calendar"
                      width={15}
                      height={17}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Vacant State Card */}
            <div
              className="bg-[#f1f5eb] p-4 rounded-[12px] flex items-center justify-between gap-3"
              data-node-id="1:5575"
            >
              <div className="bg-[#d8e8cb] flex items-center justify-center rounded-full size-12 shrink-0">
                <div className="h-[16px] w-[24px] relative shrink-0">
                  <Image
                    src="/assets/units/details/f3104.svg"
                    alt="check-circle"
                    width={24}
                    height={16}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col items-end text-right">
                <h4 className="font-bold text-[#181d17] text-[18px] leading-[28px]">
                  الوحدة شاغرة حالياً
                </h4>
                <p className="font-normal text-[#75786f] text-[13px] leading-[20px] mt-0.5">
                  الوحدة معقمة ومجهزة بانتظار استلام الضيف القادم، وجاهزة للحجز الفوري عبر جميع المنصات.
                </p>
              </div>
            </div>

            {/* Upcoming Booking Preview */}
            <div
              className="bg-white border border-[#ebefe6] p-4 rounded-[12px] flex flex-col gap-2"
              data-node-id="1:5585"
            >
              <div className="flex items-center justify-between w-full">
                <div className="bg-[#ebefe6] px-2 py-0.5 rounded-full shrink-0">
                  <span className="font-medium text-[#54624c] text-[11px] leading-[16px]">
                    مؤكد (WA API)
                  </span>
                </div>
                <span className="font-semibold text-[#75786f] text-[11px] leading-[16px]">
                  الحجز القادم
                </span>
              </div>

              <div className="flex items-center justify-between w-full pt-1">
                <div className="flex flex-col items-start text-start">
                  <span className="font-semibold text-[#181d17] text-[12px] leading-[18px]">
                    18 - 21 مايو
                  </span>
                  <span className="font-medium text-[#75786f] text-[11px] leading-[16px]">
                    3 ليالٍ (1,350 ر.س)
                  </span>
                </div>

                <div className="flex gap-2 items-center">
                  <div className="flex flex-col items-end text-right">
                    <span className="font-bold text-[#181d17] text-[14px] leading-[20px]">
                      خالد القحطاني
                    </span>
                    <span className="font-medium text-[#75786f] text-[11px] leading-[16px]">
                      ضيف معتمد • 2 بالغين
                    </span>
                  </div>
                  <div className="bg-[#34422a] text-white flex items-center justify-center rounded-full size-8 font-bold text-[12px] shrink-0">
                    خ
                  </div>
                </div>
              </div>
            </div>

            {/* View Calendar Link */}
            <button
              type="button"
              onClick={() => showToast.info("جاري الانتقال إلى جدول وتقويم الحجوزات")}
              className="bg-[#ebefe6] hover:bg-[#dfe4da] active:scale-98 transition-all flex items-center justify-center gap-2 py-2.5 rounded-[12px] text-[#181d17] font-semibold text-[14px] w-full cursor-pointer"
              data-node-id="1:5607"
            >
              <span>عرض جدول الحجوزات والتقويم</span>
              <div className="h-[15px] w-[13.5px] relative shrink-0">
                <Image
                  src="/assets/units/details/e12d7.svg"
                  alt="calendar-view"
                  width={14}
                  height={15}
                  className="w-full h-full object-contain"
                />
              </div>
            </button>
          </div>

          {/* SECTION: BASIC UNIT SPECIFICATIONS (البيانات الأساسية) */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-5 sm:p-6 flex flex-col gap-4 border border-neutral-100/60"
            data-node-id="1:5611"
            data-name="SECTION: BASIC UNIT SPECIFICATIONS (البيانات الأساسية)"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between pb-3 border-b border-[#ebefe6]"
              data-node-id="1:5612"
            >
              <button
                type="button"
                onClick={() => showToast.info("تعديل المواصفات الأساسية")}
                className="text-[#75786f] hover:text-[#181d17] cursor-pointer"
                data-node-id="1:5613"
              >
                <div className="relative size-[13.5px]">
                  <Image
                    src="/assets/units/details/7de5b.svg"
                    alt="edit-spec"
                    width={14}
                    height={14}
                    className="w-full h-full object-contain"
                  />
                </div>
              </button>

              <div className="flex gap-2.5 items-center">
                <h3 className="font-semibold text-[#181d17] text-[18px] leading-[28px]">
                  المواصفات والبيانات الأساسية
                </h3>
                <div className="bg-[#ebefe6] flex items-center justify-center rounded-[12px] shrink-0 size-9">
                  <div className="relative size-[17px] shrink-0">
                    <Image
                      src="/assets/units/details/6108d.svg"
                      alt="specs"
                      width={17}
                      height={17}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 8 Specs Grid (2 cols) */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3.5 py-1" data-node-id="1:5622">
              {/* Spec 1: Type */}
              <div className="flex flex-col items-end text-right">
                <span className="font-medium text-[#75786f] text-[11px] leading-[16px]">
                  نوع الوحدة
                </span>
                <span className="font-bold text-[#181d17] text-[14px] leading-[20px]">
                  استوديو ديلوكس (Studio)
                </span>
              </div>

              {/* Spec 2: Total Area */}
              <div className="flex flex-col items-end text-right">
                <span className="font-medium text-[#75786f] text-[11px] leading-[16px]">
                  المساحة الإجمالية
                </span>
                <span className="font-bold text-[#181d17] text-[14px] leading-[20px]">
                  48 متر مربع (م²)
                </span>
              </div>

              {/* Spec 3: Floor & Location */}
              <div className="flex flex-col items-end text-right">
                <span className="font-medium text-[#75786f] text-[11px] leading-[16px]">
                  الدور والموقع
                </span>
                <span className="font-bold text-[#181d17] text-[14px] leading-[20px]">
                  الدور الأول - شقة 101
                </span>
              </div>

              {/* Spec 4: View */}
              <div className="flex flex-col items-end text-right">
                <span className="font-medium text-[#75786f] text-[11px] leading-[16px]">
                  نوع الإطلالة
                </span>
                <span className="font-bold text-[#181d17] text-[14px] leading-[20px]">
                  واجهة أمامية (شارع مشجر)
                </span>
              </div>

              {/* Spec 5: Max Capacity */}
              <div className="flex flex-col items-end text-right">
                <span className="font-medium text-[#75786f] text-[11px] leading-[16px]">
                  السعة القصوى للضيوف
                </span>
                <span className="font-bold text-[#181d17] text-[14px] leading-[20px]">
                  2 ضيوف كبار
                </span>
              </div>

              {/* Spec 6: Beds */}
              <div className="flex flex-col items-end text-right">
                <span className="font-medium text-[#75786f] text-[11px] leading-[16px]">
                  تكوين الأسِرة
                </span>
                <span className="font-bold text-[#181d17] text-[14px] leading-[20px]">
                  1 سرير كينج فندقي فاخر
                </span>
              </div>

              {/* Spec 7: Electricity Meter */}
              <div className="flex flex-col items-end text-right">
                <span className="font-medium text-[#75786f] text-[11px] leading-[16px]">
                  عداد الكهرباء المستقل
                </span>
                <span className="font-bold text-[#181d17] text-[14px] leading-[20px]">
                  #309982410
                </span>
              </div>

              {/* Spec 8: Wi-Fi Speed */}
              <div className="flex flex-col items-end text-right">
                <span className="font-medium text-[#75786f] text-[11px] leading-[16px]">
                  سرعة شبكة Wi-Fi
                </span>
                <span className="font-bold text-[#181d17] text-[14px] leading-[20px]">
                  ألياف بصرية 500 Mbps
                </span>
              </div>
            </div>

            {/* Amenities Chips Section */}
            <div
              className="border-t border-[#ebefe6] pt-3 flex flex-col gap-2"
              data-node-id="1:5663"
            >
              <span className="font-medium text-[#75786f] text-[11px] leading-[16px] text-right">
                المرافق والمزايا المشمولة
              </span>
              <div className="flex flex-wrap gap-2 justify-end" data-node-id="1:5667">
                {/* Chip 1 */}
                <div className="bg-[#ebefe6] flex gap-1.5 items-center px-2.5 py-1 rounded-[8px]">
                  <span className="font-medium text-[#181d17] text-[11px] leading-[16px]">
                    واي فاي فائق السرعة
                  </span>
                  <div className="h-[10px] w-[14px] relative shrink-0">
                    <Image
                      src="/assets/units/details/86f73.svg"
                      alt="wifi"
                      width={14}
                      height={10}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Chip 2 */}
                <div className="bg-[#ebefe6] flex gap-1.5 items-center px-2.5 py-1 rounded-[8px]">
                  <span className="font-medium text-[#181d17] text-[11px] leading-[16px]">
                    تلفزيون ذكي 65 بوصة
                  </span>
                  <div className="h-[11px] w-[12px] relative shrink-0">
                    <Image
                      src="/assets/units/details/6513c.svg"
                      alt="tv"
                      width={12}
                      height={11}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Chip 3 */}
                <div className="bg-[#ebefe6] flex gap-1.5 items-center px-2.5 py-1 rounded-[8px]">
                  <span className="font-medium text-[#181d17] text-[11px] leading-[16px]">
                    آلة نسبريسو
                  </span>
                  <div className="relative size-[11px] shrink-0">
                    <Image
                      src="/assets/units/details/27186.svg"
                      alt="coffee"
                      width={11}
                      height={11}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Chip 4 */}
                <div className="bg-[#ebefe6] flex gap-1.5 items-center px-2.5 py-1 rounded-[8px]">
                  <span className="font-medium text-[#181d17] text-[11px] leading-[16px]">
                    كاوية وطاولة كوي
                  </span>
                  <div className="h-[7px] w-[12px] relative shrink-0">
                    <Image
                      src="/assets/units/details/0affd.svg"
                      alt="iron"
                      width={12}
                      height={7}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Chip 5 */}
                <div className="bg-[#ebefe6] flex gap-1.5 items-center px-2.5 py-1 rounded-[8px]">
                  <span className="font-medium text-[#181d17] text-[11px] leading-[16px]">
                    موقف سيارة مظلل
                  </span>
                  <div className="h-[11px] w-[8px] relative shrink-0">
                    <Image
                      src="/assets/units/details/400e2.svg"
                      alt="parking"
                      width={8}
                      height={11}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
