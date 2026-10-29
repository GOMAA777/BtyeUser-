"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/lib/toast";
import { mockMaintenanceReportMT2048 } from "../data/maintenance-mock-data";
import { StartMaintenanceModal } from "./start-maintenance-modal";

export function MaintenanceDetailsView() {
  const router = useRouter();
  const [report, setReport] = useState(mockMaintenanceReportMT2048);
  const [isStartModalOpen, setIsStartModalOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleStartMaintenanceConfirm = () => {
    setReport((prev) => ({
      ...prev,
      status: "in_progress",
      statusLabel: "قيد التنفيذ",
    }));
    showToast.success("تم بدء تنفيذ الصيانة ميدانياً وتحديث مقاييس الاستجابة (SLA)");
  };

  const handleCompleteMaintenance = () => {
    setIsCompleted(true);
    setReport((prev) => ({
      ...prev,
      status: "completed",
      statusLabel: "مكتمل ومعتمد",
    }));
    showToast.success("تم إكمال الصيانة بنجاح واعتماد الجاهزية التشغيلية للوحدة");
  };

  const handleReassign = () => {
    showToast.info("جاري فتح نافذة إسناد المهمة لفني بديل...");
  };

  return (
    <div
      className="bg-[#f1f5eb] min-h-screen p-[24px] lg:p-[32px] flex flex-col gap-[20px] w-full"
      dir="rtl"
      data-node-id="1:11576"
      data-name="تفاصيل بلاغ صيانة"
    >
      {/* 1. PAGE HEADER BAR */}
      <div
        className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 lg:px-[32px] lg:py-[24px] flex flex-col md:flex-row md:items-center justify-between gap-4 w-full"
        data-node-id="1:11579"
        data-name="PAGE HEADER BAR"
      >
        {/* Right side in RTL: Title, Breadcrumb & Status */}
        <div className="flex flex-col items-start gap-1">
          {/* Breadcrumb strip */}
          <div className="flex items-center gap-2 text-[#73786f] text-[12px] font-cairo">
            <Link href="/maintenance" className="hover:text-[#181d17] transition-colors">
              الصيانة
            </Link>
            <span>/</span>
            <span className="text-[#181d17] font-semibold">{report.id}</span>
            <span>•</span>
            <span className="bg-[#eaf1e8] text-[#34422a] px-2 py-0.5 rounded-[6px] text-[11px] font-medium">
              {report.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-3 pt-1">
            <h1
              className="font-cairo font-bold text-[#181d17] text-[24px] leading-[34px]"
              data-node-id="1:11598"
            >
              بلاغ صيانة {report.id}
            </h1>

            {/* Status badge ("قد الكلمة فقط") */}
            <span
              className={`inline-flex items-center gap-[6px] w-fit whitespace-nowrap px-[11px] py-[4px] rounded-full ${
                report.status === "completed"
                  ? "bg-[#e8f5e9] border border-[#c8e6c9] text-[#2e7d32]"
                  : "bg-[#fff4e5] border border-[#ffe0b2] text-[#b86b14]"
              }`}
            >
              <span
                className={`size-[6px] rounded-full shrink-0 ${
                  report.status === "completed" ? "bg-[#2e7d32]" : "bg-[#b86b14]"
                }`}
              />
              <span className="font-cairo font-bold text-[12px] leading-[16px]">
                {report.statusLabel}
              </span>
            </span>

            {/* Priority Badge */}
            <span className="inline-flex items-center gap-[6px] w-fit whitespace-nowrap px-[11px] py-[4px] rounded-full bg-[#fee2e2] border border-[#fecaca] text-[#dc2626] font-cairo font-bold text-[12px]">
              <span className="size-[6px] rounded-full bg-[#dc2626] shrink-0" />
              {report.priorityLabel}
            </span>
          </div>
        </div>

        {/* Left side in RTL: Action Button Group */}
        <div
          className="flex flex-wrap items-center gap-[10px]"
          data-node-id="1:11580"
          data-name="Action Button Group"
        >
          {/* Operations Log Link */}
          <Link
            href="/operations/log"
            className="bg-[#f1f5eb] hover:bg-[#e4ecd9] active:scale-[0.98] transition-all h-[44px] px-[18px] rounded-[12px] flex items-center gap-[8px] font-cairo font-semibold text-[#34422a] text-[13px] border border-[#dfe4db]/70"
          >
            <div className="relative size-[16px]">
              <Image
                src="/assets/maintenance/details/6441c.svg"
                alt=""
                width={16}
                height={16}
                className="size-full object-contain"
              />
            </div>
            <span>سجل التشغيل</span>
          </Link>

          {/* Reassign Tech */}
          <button
            type="button"
            onClick={handleReassign}
            className="bg-[#f1f5eb] hover:bg-[#e4ecd9] active:scale-[0.98] transition-all h-[44px] px-[18px] rounded-[12px] flex items-center gap-[8px] font-cairo font-semibold text-[#34422a] text-[13px] border border-[#dfe4db]/70 cursor-pointer"
          >
            <span>تعيين فني آخر</span>
          </button>

          {/* Primary Action Button */}
          {report.status !== "completed" ? (
            <button
              type="button"
              onClick={handleCompleteMaintenance}
              className="bg-[#34422a] hover:bg-[#283420] active:scale-[0.98] transition-all drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[44px] px-[22px] rounded-[12px] flex items-center gap-[8px] font-cairo font-semibold text-white text-[14px] cursor-pointer shadow-sm"
            >
              <div className="relative size-[16px]">
                <Image
                  src="/assets/maintenance/details/0ba13.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="size-full object-contain"
                />
              </div>
              <span>إكمال الصيانة</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsStartModalOpen(true)}
              className="bg-[#34422a] hover:bg-[#283420] active:scale-[0.98] transition-all drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[44px] px-[22px] rounded-[12px] flex items-center gap-[8px] font-cairo font-semibold text-white text-[14px] cursor-pointer shadow-sm"
            >
              <span>بدء تنفيذ الصيانة</span>
            </button>
          )}
        </div>
      </div>

      {/* 2. MAIN ASYMMETRIC GRID (8 Cols Primary + 4 Cols Governance / Timeline) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[20px] w-full items-start">
        {/* Right Primary Column (8 of 12 cols in RTL) */}
        <div className="lg:col-span-8 flex flex-col gap-[20px] w-full">
          {/* SECTION A: Main Asset & Issue Information Card */}
          <div
            className="bg-white rounded-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#e5e8e2] overflow-hidden w-full"
            data-node-id="1:11605"
            data-name="Section A: Main Asset & Issue Information Card"
          >
            {/* Header Strip */}
            <div className="bg-[#f9faf8] border-b border-[#e5e8e2] px-[24px] py-[16px] flex items-center justify-between">
              <div className="flex items-center gap-[8px]">
                <div className="relative size-[18px] text-[#34422a]">
                  <Image
                    src="/assets/maintenance/details/894d7.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="size-full object-contain"
                  />
                </div>
                <h2 className="font-cairo font-bold text-[#181d17] text-[16px] leading-[24px]">
                  بيانات الأصل العقاري والبلاغ
                </h2>
              </div>
              <span className="font-cairo text-[12px] text-[#75786f]">
                كود الأصل: <strong className="text-[#181d17]">#AST-305-YAS</strong>
              </span>
            </div>

            {/* Asset Fields Grid */}
            <div className="p-[24px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[24px] gap-y-[20px] w-full">
              {/* Field 1: الوحدة المستهدفة */}
              <div className="flex flex-col items-start gap-1">
                <span className="font-cairo font-medium text-[#75786f] text-[11px] leading-[16px]">
                  الوحدة المستهدفة
                </span>
                <span className="font-cairo font-bold text-[#181d17] text-[14px] leading-[20px]">
                  {report.unitNumber}
                </span>
                <span className="font-cairo text-[#75786f] text-[11px]">
                  {report.unitSubtitle}
                </span>
              </div>

              {/* Field 2: العقار والموقع */}
              <div className="flex flex-col items-start gap-1">
                <span className="font-cairo font-medium text-[#75786f] text-[11px] leading-[16px]">
                  العقار والموقع الجغرافي
                </span>
                <span className="font-cairo font-bold text-[#181d17] text-[14px] leading-[20px]">
                  {report.property}
                </span>
                <span className="font-cairo text-[#75786f] text-[11px]">
                  {report.propertyLocation}
                </span>
              </div>

              {/* Field 3: مالك العقار */}
              <div className="flex flex-col items-start gap-1">
                <span className="font-cairo font-medium text-[#75786f] text-[11px] leading-[16px]">
                  مالك العقار المسجل
                </span>
                <span className="font-cairo font-bold text-[#181d17] text-[14px] leading-[20px]">
                  {report.ownerName}
                </span>
                <span className="font-cairo text-[#75786f] text-[11px]">
                  كود المالك: {report.ownerId}
                </span>
              </div>

              {/* Field 4: نوع المشكلة */}
              <div className="flex flex-col items-start gap-1">
                <span className="font-cairo font-medium text-[#75786f] text-[11px] leading-[16px]">
                  نوع المشكلة التشغيلية
                </span>
                <span className="font-cairo font-bold text-[#181d17] text-[14px] leading-[20px]">
                  {report.problemType}
                </span>
                <span className="font-cairo text-[#dc2626] font-medium text-[11px]">
                  {report.impactScope}
                </span>
              </div>

              {/* Field 5: تاريخ البلاغ */}
              <div className="flex flex-col items-start gap-1">
                <span className="font-cairo font-medium text-[#75786f] text-[11px] leading-[16px]">
                  تاريخ وتوقيت البلاغ
                </span>
                <span className="font-cairo font-bold text-[#181d17] text-[14px] leading-[20px]">
                  {report.reportDate}
                </span>
                <span className="font-cairo text-[#2e7d32] font-medium text-[11px]">
                  مطابق لمعايير SLA الفورية
                </span>
              </div>

              {/* Field 6: المسؤول المعين */}
              <div className="flex flex-col items-start gap-1">
                <span className="font-cairo font-medium text-[#75786f] text-[11px] leading-[16px]">
                  المسؤول المعين للمهمة
                </span>
                <span className="font-cairo font-bold text-[#181d17] text-[14px] leading-[20px]">
                  {report.technicianName}
                </span>
                <span className="font-cairo text-[#75786f] text-[11px]">
                  {report.technicianRole}
                </span>
              </div>
            </div>
          </div>

          {/* SECTION B: Operational Description & Field Diagnostics */}
          <div
            className="bg-white rounded-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#e5e8e2] overflow-hidden w-full"
            data-node-id="1:11668"
            data-name="Section B: Operational Description & Field Diagnostics"
          >
            {/* Header */}
            <div className="bg-[#f9faf8] border-b border-[#e5e8e2] px-[24px] py-[16px] flex items-center justify-between">
              <div className="flex items-center gap-[8px]">
                <div className="relative size-[18px]">
                  <Image
                    src="/assets/maintenance/details/544fd.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="size-full object-contain"
                  />
                </div>
                <h2 className="font-cairo font-bold text-[#181d17] text-[16px] leading-[24px]">
                  تفاصيل الوصف والأعراض التشغيلية
                </h2>
              </div>
            </div>

            <div className="p-[24px] flex flex-col gap-[20px] w-full">
              {/* Problem Description Statement */}
              <div className="flex flex-col gap-2">
                <span className="font-cairo font-bold text-[#181d17] text-[13px]">
                  الوصف الميداني المقدم:
                </span>
                <p className="font-cairo text-[#454840] text-[13px] leading-[22px] bg-[#f6f7f4] p-[16px] rounded-[12px] border border-[#e5e8e2]">
                  {report.problemDescription}
                </p>
              </div>

              {/* Field Technician Diagnostic Notes */}
              <div className="flex flex-col gap-2">
                <span className="font-cairo font-bold text-[#181d17] text-[13px]">
                  تقرير التشخيص الفني الأولي (ميدانياً):
                </span>
                <p className="font-cairo text-[#34422a] text-[13px] leading-[22px] bg-[rgba(216,232,203,0.35)] p-[16px] rounded-[12px] border border-[rgba(75,89,64,0.15)]">
                  {report.technicianNotes}
                </p>
              </div>

              {/* Documentation Photos Grid */}
              <div className="flex flex-col gap-2 pt-2">
                <span className="font-cairo font-bold text-[#181d17] text-[13px]">
                  الصور والتوثيق الميداني المرفق:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] w-full">
                  {report.documentationPhotos.map((photo, index) => (
                    <div
                      key={index}
                      className="relative rounded-[12px] overflow-hidden border border-[#e5e8e2] aspect-[16/10] group bg-[#f6f7f4]"
                    >
                      <Image
                        src={photo}
                        alt={`شاهد صيانة ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-[10px] flex items-center justify-between text-white text-[11px] font-cairo">
                        <span>شاهد رقم #{index + 1} - معاينة القفل</span>
                        <span>17 سبتمبر</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION C: Related Impacted Booking Card */}
          {report.impactedBooking && (
            <div
              className="bg-white rounded-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#e5e8e2] overflow-hidden w-full"
              data-node-id="1:11714"
              data-name="Section C: Related Impacted Booking Card"
            >
              {/* Header */}
              <div className="bg-[#f9faf8] border-b border-[#e5e8e2] px-[24px] py-[16px] flex items-center justify-between">
                <div className="flex items-center gap-[8px]">
                  <div className="relative size-[18px]">
                    <Image
                      src="/assets/maintenance/details/ec69c.svg"
                      alt=""
                      width={18}
                      height={18}
                      className="size-full object-contain"
                    />
                  </div>
                  <h2 className="font-cairo font-bold text-[#181d17] text-[16px] leading-[24px]">
                    الحجز المتأثر بالبلاغ التشغيلي
                  </h2>
                </div>
                <span className="bg-[#d8e8cb] text-[#34422a] px-[10px] py-[2px] rounded-full text-[11px] font-cairo font-bold">
                  حجز قادم (مؤكد)
                </span>
              </div>

              <div className="p-[24px] flex flex-col gap-[16px]">
                {/* Warning Alert Banner */}
                <div className="bg-[#fff4e5] border border-[#ffe0b2] rounded-[12px] p-[16px] flex items-start gap-[12px]">
                  <div className="relative size-[20px] shrink-0 mt-[2px]">
                    <Image
                      src="/assets/maintenance/details/809da.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="size-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-cairo font-bold text-[#b86b14] text-[13px]">
                      تنبيه جاهزية تسكين النزيل:
                    </span>
                    <p className="font-cairo text-[12px] text-[#7c4d12] leading-[18px]">
                      يوجد حجز وصول مجدول خلال أقل من{" "}
                      <strong className="underline">{report.impactedBooking.hoursRemaining} ساعة</strong> للنزيل{" "}
                      <strong>{report.impactedBooking.guestName}</strong> ({report.impactedBooking.id}). يجب إنهاء
                      واختبار كود الدخول قبل موعد الوصول المحدد في{" "}
                      <strong>{report.impactedBooking.checkInDate}</strong>.
                    </p>
                  </div>
                </div>

                {/* Deep Link to Booking File */}
                <div className="flex items-center justify-between pt-1">
                  <span className="font-cairo text-[12px] text-[#75786f]">
                    مرجع الحجز المعتمد: {report.impactedBooking.id}
                  </span>
                  <Link
                    href={`/bookings/${report.impactedBooking.id}`}
                    className="inline-flex items-center gap-[6px] text-[#34422a] hover:text-[#252a24] font-cairo font-bold text-[13px] hover:underline"
                  >
                    <span>الانتقال إلى ملف الحجز وتفاصيله</span>
                    <span className="text-[16px] leading-none">←</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Left Secondary Column (4 of 12 cols in RTL) */}
        <div className="lg:col-span-4 flex flex-col gap-[20px] w-full">
          {/* SECTION E: Unit Status & Mandatory System Governance Box */}
          <div
            className="bg-white rounded-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#e5e8e2] p-[24px] flex flex-col gap-[16px] w-full"
            data-node-id="1:11762"
            data-name="Section E: Unit Status & Mandatory System Governance Box"
          >
            <div className="flex items-center justify-between border-b border-[#e5e8e2] pb-[12px]">
              <h3 className="font-cairo font-bold text-[#181d17] text-[15px]">
                حالة الأصل والحوكمة
              </h3>
              <span
                className={`inline-flex items-center gap-[6px] w-fit whitespace-nowrap px-[10px] py-[3px] rounded-full text-[11px] font-cairo font-bold ${
                  report.status === "completed"
                    ? "bg-[#e8f5e9] text-[#2e7d32]"
                    : "bg-[#fff4e5] text-[#b86b14]"
                }`}
              >
                <span
                  className={`size-[6px] rounded-full shrink-0 ${
                    report.status === "completed" ? "bg-[#2e7d32]" : "bg-[#b86b14]"
                  }`}
                />
                {report.status === "completed" ? "متاحة للحجز" : "تحت الصيانة"}
              </span>
            </div>

            {/* Governance notice */}
            <div className="bg-[#f9faf8] rounded-[12px] p-[14px] border border-[#e5e8e2] flex flex-col gap-2">
              <span className="font-cairo font-semibold text-[#181d17] text-[12px]">
                بروتوكول الحوكمة الفورية:
              </span>
              <p className="font-cairo text-[#454840] text-[11px] leading-[18px]">
                الوحدة محجوبة تلقائياً عن قنوات التسويق الإلكتروني ومنصات الحجز لحين اعتماد الفحص الفني
                الميداني وإغلاق هذا البلاغ رسمياً.
              </p>
            </div>

            <div className="flex flex-col gap-1 text-[12px] font-cairo">
              <div className="flex items-center justify-between py-1 border-b border-[#f0f2ed]">
                <span className="text-[#75786f]">كود الباب الحالي:</span>
                <span className="font-bold text-[#181d17]">583921 (معلق)</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[#f0f2ed]">
                <span className="text-[#75786f]">حالة البطارية:</span>
                <span className="font-bold text-[#dc2626]">2.1V (حرجة)</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-[#75786f]">التزامن السحابي:</span>
                <span className="font-bold text-[#2e7d32]">متصل عبر Gateway</span>
              </div>
            </div>
          </div>

          {/* SECTION D: Detailed Maintenance Timeline */}
          <div
            className="bg-white rounded-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#e5e8e2] overflow-hidden w-full"
            data-node-id="1:11779"
            data-name="Section D: Detailed Maintenance Timeline"
          >
            {/* Header */}
            <div className="bg-[#f9faf8] border-b border-[#e5e8e2] px-[20px] py-[16px] flex items-center justify-between">
              <h3 className="font-cairo font-bold text-[#181d17] text-[15px]">
                التسلسل الزمني لأعمال الصيانة
              </h3>
              <span className="text-[11px] font-cairo text-[#75786f]">
                {report.timeline.length} محطات
              </span>
            </div>

            {/* Timeline Stream */}
            <div className="p-[20px] flex flex-col gap-[20px]">
              {report.timeline.map((step, idx) => {
                const isLast = idx === report.timeline.length - 1;
                return (
                  <div key={step.id} className="flex items-start gap-[12px] relative">
                    {/* Spine line */}
                    {!isLast && (
                      <div className="absolute top-[22px] right-[10px] w-[2px] bottom-[-20px] bg-[#e5e8e2]" />
                    )}

                    {/* Step Icon Indicator */}
                    <div
                      className={`size-[22px] rounded-full flex items-center justify-center shrink-0 z-10 ${
                        step.status === "completed"
                          ? "bg-[#34422a] text-white"
                          : step.status === "current"
                          ? "bg-[#b86b14] text-white animate-pulse"
                          : "bg-[#e5e8e2] text-[#75786f]"
                      }`}
                    >
                      <span className="text-[10px] font-bold">{idx + 1}</span>
                    </div>

                    {/* Step content */}
                    <div className="flex flex-col gap-1 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-cairo font-bold text-[#181d17] text-[13px]">
                          {step.title}
                        </span>
                      </div>
                      <span className="font-cairo text-[#75786f] text-[11px]">
                        {step.time} • {step.actor}
                      </span>
                      <p className="font-cairo text-[#454840] text-[11px] leading-[17px] pt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Start Maintenance Modal Dialog */}
      <StartMaintenanceModal
        isOpen={isStartModalOpen}
        onClose={() => setIsStartModalOpen(false)}
        onConfirm={handleStartMaintenanceConfirm}
        reportId={report.id}
        unitTitle={`${report.unitNumber} (${report.unitSubtitle})`}
        ownerName={`${report.ownerName} (${report.ownerId})`}
        problemType={report.problemType}
        technicianName={report.technicianName}
      />
    </div>
  );
}
