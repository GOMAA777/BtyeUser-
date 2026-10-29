"use client";

import { useState } from "react";
import Link from "next/link";
import { MaintenanceTask } from "../types";
import { AssignSupervisorModal } from "./assign-supervisor-modal";
import { StartCleaningModal } from "./start-cleaning-modal";
import { ConfirmCompletionModal } from "./confirm-completion-modal";

interface CleaningDetailsViewProps {
  task: MaintenanceTask;
}

export function CleaningDetailsView({ task: initialTask }: CleaningDetailsViewProps) {
  const [task, setTask] = useState<MaintenanceTask>(initialTask);
  const [checklist, setChecklist] = useState(
    initialTask.checklist || [
      { id: "1", text: "ترتيب غرفة النوم وتغيير المفارش والوسائد", completed: false },
      { id: "2", text: "تعقيم دورة المياه وتجديد المستلزمات الفندقية", completed: false },
      { id: "3", text: "تنظيف المطبخ والأسطح والأجهزة الكهربائية", completed: false },
      { id: "4", text: "كنس ومسح الأرضيات والتخلص من النفايات", completed: false },
      { id: "5", text: "فحص سلامة الأثاث وبطارية القفل الذكي", completed: false },
    ]
  );

  // Modals state
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [isStartModalOpen, setIsStartModalOpen] = useState(false);
  const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false);

  // Toggle checklist item
  const toggleChecklist = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Handlers for workflow transitions
  const handleAssignSupervisor = (supervisorName: string, notes: string) => {
    setTask((prev) => ({
      ...prev,
      assignedStaff: {
        id: "ST-01",
        name: supervisorName,
        role: "مشرف تنظيف معتمد",
        rating: "★ 4.9 (142 مهمة)",
      },
      notes: notes,
      lastUpdated: "الآن",
    }));
  };

  const handleStartCleaning = () => {
    setTask((prev) => ({
      ...prev,
      status: "in_progress",
      statusLabel: "جاري التنظيف",
      startedAt: "18 سبتمبر 2026 — 12:25 م",
      lastUpdated: "الآن",
      accessCode: "482019",
    }));
  };

  const handleConfirmCompletion = (notes?: string) => {
    setTask((prev) => ({
      ...prev,
      status: "completed",
      statusLabel: "مكتملة",
      completedAt: "18 سبتمبر 2026 — 01:07 م",
      lastUpdated: "الآن",
      notes: notes || prev.notes,
    }));
    // Also mark all checklist items completed
    setChecklist((prev) => prev.map((item) => ({ ...item, completed: true })));
  };

  return (
    <div
      className="flex flex-col gap-[24px] w-full max-w-[1400px] mx-auto text-right font-cairo pb-[60px]"
      data-node-id="1:10810"
      data-name="تفاصيل مهمة تنظيف"
      dir="rtl"
    >
      {/* PAGE HEADER BAR */}
      <div
        className="bg-white rounded-[16px] border border-[#e5e8e2] p-[20px] shadow-[0px_1px_3px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-start md:items-center justify-between gap-[16px]"
        data-name="PAGE HEADER BAR"
      >
        {/* Right side: Title & metadata */}
        <div className="flex flex-col gap-[6px]">
          <div className="flex items-center gap-[10px]">
            <Link
              href="/maintenance"
              className="size-[32px] rounded-[8px] border border-[#e5e8e2] bg-[#f8faf7] hover:bg-[#edf1eb] transition-colors flex items-center justify-center text-[#586249]"
              title="العودة للصيانة والتنظيف"
            >
              <svg
                className="size-[18px] rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>

            <h1 className="font-cairo font-bold text-[20px] text-[#181d17] leading-[28px]">
              مهمة تنظيف {task.reference}
            </h1>

            {/* Status Badge */}
            <div
              className={`flex items-center gap-[6px] px-[10px] py-[3px] rounded-full shrink-0 ${
                task.status === "needs_cleaning"
                  ? "bg-[#fdf5e8] text-[#c07010]"
                  : task.status === "in_progress"
                  ? "bg-[#eaf1e8] text-[#436734]"
                  : "bg-[#f0f4ec] text-[#586249]"
              }`}
            >
              <span className="font-semibold text-[11px] leading-[16px]">
                {task.statusLabel}
              </span>
              <div
                className={`size-[6px] rounded-full shrink-0 ${
                  task.status === "needs_cleaning"
                    ? "bg-[#e99a38]"
                    : task.status === "in_progress"
                    ? "bg-[#5a8647]"
                    : "bg-[#7a8a68]"
                }`}
              />
            </div>
          </div>

          {/* Subtitle metadata */}
          <div className="flex flex-wrap items-center gap-[8px] text-[12px] text-[#75786f]">
            <span>معرّف المهمة: <strong className="text-[#181d17]">{task.reference}</strong></span>
            <span>•</span>
            <span>تاريخ الإنشاء: {task.createdAt}</span>
            <span>•</span>
            <span>السبب التشغيلي: {task.reason}</span>
          </div>
        </div>

        {/* Left side: Action Button Group */}
        <div className="flex flex-wrap items-center gap-[10px]">
          {/* Action 1: Assign Supervisor */}
          <button
            type="button"
            onClick={() => setIsAssignModalOpen(true)}
            className="h-[38px] px-[16px] bg-[#34422a] hover:bg-[#283320] text-white rounded-[8px] font-bold text-[12px] flex items-center gap-1.5 transition-colors cursor-pointer"
            data-name="Button - Assign Staff (Primary)"
          >
            <svg
              className="size-[15px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" y1="8" x2="19" y2="14" />
              <line x1="22" y1="11" x2="16" y2="11" />
            </svg>
            تعيين مسؤول
          </button>

          {/* Action 2: Start Cleaning (if not yet started) */}
          {task.status === "needs_cleaning" && (
            <button
              type="button"
              onClick={() => setIsStartModalOpen(true)}
              className="h-[38px] px-[16px] bg-[#eaf1e8] hover:bg-[#dce7d9] text-[#34422a] border border-[#cbd8c6] rounded-[8px] font-bold text-[12px] flex items-center gap-1.5 transition-colors cursor-pointer"
              data-name="Button - Start Cleaning (Secondary)"
            >
              <svg
                className="size-[14px]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              بدء التنظيف
            </button>
          )}

          {/* Action 3: Confirm Completion (if in progress) */}
          {task.status === "in_progress" && (
            <button
              type="button"
              onClick={() => setIsCompleteModalOpen(true)}
              className="h-[38px] px-[16px] bg-[#436734] hover:bg-[#345228] text-white rounded-[8px] font-bold text-[12px] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <svg
                className="size-[15px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              تأكيد اكتمال التنظيف
            </button>
          )}

          {/* Action 4: Cancel Task */}
          <button
            type="button"
            className="h-[38px] px-[14px] border border-[#f3d3d3] hover:bg-[#fdf2f2] text-[#ba1a1a] rounded-[8px] font-semibold text-[12px] transition-colors cursor-pointer"
          >
            إلغاء المهمة المجدولة
          </button>
        </div>
      </div>

      {/* MAIN 2-COLUMN WORKSPACE (~65% right / ~35% left in RTL) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[20px] items-start">
        {/* Right Main Column (8 cols ~67%) */}
        <div className="lg:col-span-8 flex flex-col gap-[20px]">
          {/* 1. UNIT & PROPERTY CONTEXT CARD */}
          <div
            className="bg-white rounded-[16px] border border-[#e5e8e2] p-[20px] shadow-[0px_1px_3px_rgba(0,0,0,0.05)]"
            data-name="Section - 1. UNIT & PROPERTY CONTEXT CARD"
          >
            <div className="flex items-center justify-between border-b border-[#edf1eb] pb-[12px] mb-[16px]">
              <h2 className="font-bold text-[15px] text-[#181d17]">
                سياق الأصل العقاري والمهمة
              </h2>
              <span className="text-[12px] font-mono font-medium text-[#75786f] bg-[#f8faf7] px-2.5 py-0.5 rounded-[6px] border border-[#e5e8e2]">
                رمز العقار: {task.property.code}
              </span>
            </div>

            {/* 3 stats cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[14px]">
              {/* Unit Card */}
              <div className="bg-[#f8faf7] border border-[#e5e8e2] rounded-[12px] p-[14px]">
                <p className="text-[11px] text-[#75786f] font-medium mb-1">
                  الوحدة المستهدفة
                </p>
                <p className="font-bold text-[14px] text-[#181d17]">
                  {task.unit.name} ({task.unit.floor})
                </p>
                <p className="text-[11px] text-[#586249] mt-1">
                  {task.property.name} • {task.property.city} — {task.property.district || "حي العليا"}
                </p>
              </div>

              {/* Reason Card */}
              <div className="bg-[#f8faf7] border border-[#e5e8e2] rounded-[12px] p-[14px]">
                <p className="text-[11px] text-[#75786f] font-medium mb-1">
                  سبب المهمة:
                </p>
                <p className="font-bold text-[14px] text-[#181d17]">
                  انتهاء الحجز وتسجيل المغادرة
                </p>
                <p className="text-[11px] text-[#586249] mt-1">
                  الحجز المرتبط: {task.bookingReference || "BK-10482"}
                </p>
              </div>

              {/* Owner Card */}
              <div className="bg-[#f8faf7] border border-[#e5e8e2] rounded-[12px] p-[14px]">
                <p className="text-[11px] text-[#75786f] font-medium mb-1">
                  المالك المسجل للأصل
                </p>
                <p className="font-bold text-[14px] text-[#181d17]">
                  {task.owner.name}
                </p>
                <p className="text-[11px] text-[#75786f] font-mono mt-1">
                  {task.owner.code}
                </p>
              </div>
            </div>

            {/* Auto Creation Audit Notice */}
            <div className="mt-[14px] bg-[#f0f4ec] border border-[#e2e7dd] rounded-[8px] px-[14px] py-[10px] flex items-center gap-[8px] text-[12px] text-[#4b5940]">
              <svg
                className="size-[16px] shrink-0 text-[#34422a]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>
                تم إنشاء المهمة آلياً فور تأكيد إغلاق القفل الذكي من قبل النزيل السابق.
              </span>
            </div>
          </div>

          {/* 2. OPERATIONAL CLEANING INFORMATION */}
          <div
            className="bg-white rounded-[16px] border border-[#e5e8e2] p-[20px] shadow-[0px_1px_3px_rgba(0,0,0,0.05)]"
            data-name="Section - 2. OPERATIONAL CLEANING INFORMATION"
          >
            <div className="flex items-center justify-between border-b border-[#edf1eb] pb-[12px] mb-[16px]">
              <h2 className="font-bold text-[15px] text-[#181d17]">
                بيانات التنفيذ والتشغيل
              </h2>
              <span
                className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                  task.assignedStaff
                    ? "bg-[#eaf1e8] text-[#436734]"
                    : "bg-[#fdf5e8] text-[#c07010]"
                }`}
              >
                {task.assignedStaff ? "مسندة للمشرف" : "معلقة بانتظار الإسناد"}
              </span>
            </div>

            {/* Operational Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-[14px] mb-[20px]">
              <div className="bg-[#f8faf7] border border-[#e5e8e2] rounded-[10px] p-[12px]">
                <p className="text-[11px] text-[#75786f] font-medium">
                  الحالة التشغيلية
                </p>
                <p className="font-bold text-[13px] text-[#181d17] mt-0.5">
                  {task.statusLabel}
                </p>
                <p className="text-[10px] text-[#75786f] mt-0.5">
                  في انتظار تسليم الطاقم
                </p>
              </div>

              <div className="bg-[#f8faf7] border border-[#e5e8e2] rounded-[10px] p-[12px]">
                <p className="text-[11px] text-[#75786f] font-medium">
                  المسؤول الميداني
                </p>
                {task.assignedStaff ? (
                  <>
                    <p className="font-bold text-[13px] text-[#34422a] mt-0.5">
                      {task.assignedStaff.name}
                    </p>
                    <p className="text-[10px] text-[#75786f] mt-0.5">
                      {task.assignedStaff.role}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-bold text-[13px] text-[#ba1a1a] mt-0.5">
                      شاغر (غير معيّن)
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsAssignModalOpen(true)}
                      className="text-[10px] text-[#34422a] font-bold underline mt-0.5 block hover:text-[#202919]"
                    >
                      + إسناد مشرف أو مقاول
                    </button>
                  </>
                )}
              </div>

              <div className="bg-[#f8faf7] border border-[#e5e8e2] rounded-[10px] p-[12px]">
                <p className="text-[11px] text-[#75786f] font-medium">
                  تاريخ ووقت الإنشاء
                </p>
                <p className="font-bold text-[13px] text-[#181d17] mt-0.5">
                  18 سبتمبر 2026
                </p>
                <p className="text-[10px] text-[#75786f] mt-0.5">
                  12:05 ظهراً
                </p>
              </div>

              <div className="bg-[#f8faf7] border border-[#e5e8e2] rounded-[10px] p-[12px]">
                <p className="text-[11px] text-[#75786f] font-medium">
                  وقت البدء الفعلي
                </p>
                <p className="font-bold text-[13px] text-[#181d17] mt-0.5">
                  {task.startedAt ? "12:25 م" : "—"}
                </p>
                <p className="text-[10px] text-[#75786f] mt-0.5">
                  {task.startedAt ? "تم تسجيل البدء" : "لم يبدأ طاقم العمل بعد"}
                </p>
              </div>

              <div className="bg-[#f8faf7] border border-[#e5e8e2] rounded-[10px] p-[12px]">
                <p className="text-[11px] text-[#75786f] font-medium">
                  المدة المقدرة للإنجاز
                </p>
                <p className="font-bold text-[13px] text-[#181d17] mt-0.5">
                  {task.estimatedDuration}
                </p>
                <p className="text-[10px] text-[#75786f] mt-0.5">
                  تبدأ تلقائياً فور الدخول
                </p>
              </div>

              <div className="bg-[#f8faf7] border border-[#e5e8e2] rounded-[10px] p-[12px]">
                <p className="text-[11px] text-[#75786f] font-medium">
                  وقت الإكمال المتوقع
                </p>
                <p className="font-bold text-[13px] text-[#181d17] mt-0.5">
                  {task.completedAt ? "01:07 م" : "—"}
                </p>
                <p className="text-[10px] text-[#75786f] mt-0.5">
                  {task.completedAt ? "مكتمل رسمياً" : "يحتسب بعد مباشرة العمل"}
                </p>
              </div>
            </div>

            {/* Standards & Description Box */}
            <div className="bg-[#f8faf7] border border-[#e5e8e2] rounded-[10px] p-[14px] mb-[16px]">
              <h3 className="font-bold text-[12px] text-[#181d17] mb-1">
                نوع النظافة ومعايير الخدمة المطلوبة:
              </h3>
              <p className="text-[12px] text-[#586249] leading-[20px]">
                تنظيف وتعقيم دوري شامل عالي المعايير؛ يشمل تبديل وتجهيز البياضات الفندقية بالكامل، تعقيم الحمامات والمطبخ التحضيري، تنظيف الزجاج والأرضيات، وتجهيز سلة الضيافة وفق كود الضيافة الفاخر لمنصة ابراج.
              </p>
            </div>

            {/* Checklist */}
            <div>
              <h3 className="font-bold text-[13px] text-[#181d17] mb-[10px]">
                قائمة فحص بنود النظافة والتسليم:
              </h3>
              <div className="space-y-[8px]">
                {checklist.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleChecklist(item.id)}
                    className="flex items-center gap-[10px] p-[10px] rounded-[8px] border border-[#e5e8e2] hover:bg-[#fafbfa] cursor-pointer transition-colors"
                  >
                    <div
                      className={`size-[18px] rounded-[5px] border flex items-center justify-center shrink-0 transition-colors ${
                        item.completed
                          ? "bg-[#34422a] border-[#34422a] text-white"
                          : "border-[#cbd0c7] bg-white"
                      }`}
                    >
                      {item.completed && (
                        <svg
                          className="size-[12px]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                    <span
                      className={`text-[12px] ${
                        item.completed
                          ? "line-through text-[#75786f]"
                          : "text-[#181d17] font-medium"
                      }`}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. RELATED BOOKING CARD */}
          <div
            className="bg-white rounded-[16px] border border-[#e5e8e2] p-[20px] shadow-[0px_1px_3px_rgba(0,0,0,0.05)]"
            data-name="Section - 3. RELATED BOOKING CARD"
          >
            <div className="flex items-center justify-between border-b border-[#edf1eb] pb-[12px] mb-[16px]">
              <h2 className="font-bold text-[15px] text-[#181d17]">
                بيانات الحجز المنتهي المرتبط
              </h2>
              <Link
                href="/bookings"
                className="text-[12px] font-bold text-[#34422a] hover:underline"
              >
                عرض ملف الحجز الكامل ({task.bookingReference || "BK-10482"})
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-[12px]">
              <div className="bg-[#f8faf7] border border-[#e5e8e2] rounded-[10px] p-[12px]">
                <p className="text-[11px] text-[#75786f]">كود الدخول للنزيل</p>
                <p className="font-bold text-[13px] text-[#ba1a1a] mt-0.5">
                  منتهي وملغى
                </p>
                <p className="text-[10px] text-[#75786f] mt-0.5">
                  تم الإلغاء آلياً 12:30 م
                </p>
              </div>

              <div className="bg-[#f8faf7] border border-[#e5e8e2] rounded-[10px] p-[12px]">
                <p className="text-[11px] text-[#75786f]">مدة الإقامة</p>
                <p className="font-bold text-[13px] text-[#181d17] mt-0.5">
                  3 ليالٍ
                </p>
                <p className="text-[10px] text-[#75786f] mt-0.5">
                  15 — 18 سبتمبر 2026
                </p>
              </div>

              <div className="bg-[#f8faf7] border border-[#e5e8e2] rounded-[10px] p-[12px]">
                <p className="text-[11px] text-[#75786f]">تاريخ ووقت الخروج</p>
                <p className="font-bold text-[13px] text-[#181d17] mt-0.5">
                  18 سبتمبر 2026
                </p>
                <p className="text-[10px] text-[#75786f] mt-0.5">
                  12:00 ظهراً (ذاتي)
                </p>
              </div>

              <div className="bg-[#f8faf7] border border-[#e5e8e2] rounded-[10px] p-[12px]">
                <p className="text-[11px] text-[#75786f]">النزيل المغادر</p>
                <p className="font-bold text-[13px] text-[#181d17] mt-0.5">
                  خالد العتيبي
                </p>
                <p className="text-[10px] text-[#75786f] mt-0.5 dir-ltr text-right">
                  +966 54 *** 2311
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Left Column (4 cols ~33%) */}
        <div className="lg:col-span-4 flex flex-col gap-[20px]">
          {/* Card 1: UNIT STATUS & SYSTEM GOVERNANCE CARD */}
          <div
            className="bg-white rounded-[16px] border border-[#e5e8e2] p-[18px] shadow-[0px_1px_3px_rgba(0,0,0,0.05)]"
            data-name="Section - 2. UNIT STATUS & SYSTEM GOVERNANCE CARD"
          >
            <div className="flex items-center justify-between border-b border-[#edf1eb] pb-[10px] mb-[14px]">
              <h3 className="font-bold text-[14px] text-[#181d17]">
                حوكمة المنصة المركزية
              </h3>
              <span className="size-[8px] rounded-full bg-[#e99a38] animate-pulse" />
            </div>

            <div className="bg-[#fdf5e8] border border-[#f5dfb8] rounded-[10px] p-[12px] mb-[12px]">
              <p className="text-[11px] text-[#c07010] font-medium">
                حالة الوحدة الحالية في المنظومة:
              </p>
              <div className="flex items-center gap-[8px] mt-1">
                <span className="font-bold text-[14px] text-[#c07010]">
                  غير متاحة للحجز
                </span>
                <span className="bg-[#f5dfb8] text-[#934d00] px-2 py-0.5 rounded-[4px] text-[10px] font-semibold">
                  تحت التنظيف (مغلقة)
                </span>
              </div>
              <p className="text-[11px] text-[#75786f] mt-1">
                {task.unit.name} — {task.property.name}
              </p>
            </div>

            <div className="bg-[#f8faf7] border border-[#e5e8e2] rounded-[10px] p-[12px] text-[12px] leading-[18px] text-[#586249]">
              <strong className="text-[#181d17] block mb-1">
                حظر استقبال النزلاء آلياً:
              </strong>
              لا تصبح الوحدة متاحة للحجز والاستقبال في محركات التوزيع إلا بعد اكتمال التنظيف، وإغلاق الباب الذكي من الخارج.
            </div>
          </div>

          {/* Card 2: EMERGENCY & SMART LOCK STATUS */}
          <div
            className="bg-white rounded-[16px] border border-[#e5e8e2] p-[18px] shadow-[0px_1px_3px_rgba(0,0,0,0.05)]"
            data-name="Section - 3. EMERGENCY & SMART LOCK STATUS"
          >
            <div className="flex items-center justify-between border-b border-[#edf1eb] pb-[10px] mb-[14px]">
              <h3 className="font-bold text-[14px] text-[#181d17]">
                القفل الذكي وأكواد الدخول
              </h3>
              <span className="bg-[#eaf1e8] text-[#436734] px-2 py-0.5 rounded-full text-[10px] font-semibold">
                متصل سحابياً
              </span>
            </div>

            <div className="space-y-[10px] text-[12px]">
              <div className="flex items-center justify-between p-[10px] bg-[#f8faf7] rounded-[8px] border border-[#e5e8e2]">
                <div>
                  <p className="text-[11px] text-[#75786f]">حالة الباب الفعلي</p>
                  <p className="font-bold text-[#181d17]">مغلق بإحكام</p>
                </div>
                <span className="text-[10px] text-[#586249]">
                  مستشعر المزلاج
                </span>
              </div>

              <div className="flex items-center justify-between p-[10px] bg-[#f8faf7] rounded-[8px] border border-[#e5e8e2]">
                <div>
                  <p className="text-[11px] text-[#75786f]">طراز البوابة والسحابة</p>
                  <p className="font-bold text-[#181d17]">TTLock Gateway G3</p>
                </div>
                <span className="text-[10px] text-[#586249]">
                  Wi-Fi مباشر
                </span>
              </div>

              <div className="flex items-center justify-between p-[10px] bg-[#f8faf7] rounded-[8px] border border-[#e5e8e2]">
                <div>
                  <p className="text-[11px] text-[#75786f]">طاقة بطارية القفل</p>
                  <p className="font-bold text-[#436734]">
                    {task.batteryLevel || "92% (ممتازة)"}
                  </p>
                </div>
                <span className="text-[10px] text-[#75786f]">
                  تحديث قبل 5 دقائق
                </span>
              </div>

              {/* Crew Access Code Card */}
              <div className="p-[12px] bg-[#f0f4ec] rounded-[10px] border border-[#d8e2d4]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-semibold text-[#34422a]">
                    كود طاقم النظافة المؤقت:
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      task.accessCode
                        ? "bg-[#34422a] text-white"
                        : "bg-[#e5e8e2] text-[#75786f]"
                    }`}
                  >
                    {task.accessCode ? "مفعّل (صالح لساعتين)" : "غير مفعّل"}
                  </span>
                </div>
                {task.accessCode ? (
                  <div className="my-2 p-2 bg-white rounded-[6px] text-center font-mono font-bold text-[18px] tracking-widest text-[#181d17] border border-[#cbd8c6]">
                    {task.accessCode}
                  </div>
                ) : null}
                <p className="text-[11px] text-[#586249] leading-[16px]">
                  يتم توليد وإرسال كود دخول مؤقت (صالح لمرة واحدة أو لمدة ساعتين) آلياً إلى هاتف المشرف فور الضغط على «بدء التنظيف».
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: TIMELINE OF ACTUAL EVENTS */}
          <div
            className="bg-white rounded-[16px] border border-[#e5e8e2] p-[18px] shadow-[0px_1px_3px_rgba(0,0,0,0.05)]"
            data-name="Section - 1. TIMELINE OF ACTUAL EVENTS"
          >
            <div className="flex items-center justify-between border-b border-[#edf1eb] pb-[10px] mb-[14px]">
              <h3 className="font-bold text-[14px] text-[#181d17]">
                سجل العمليات الفعلي
              </h3>
              <span className="text-[11px] text-[#75786f]">التسلسل الزمني</span>
            </div>

            <div className="relative ps-[20px] space-y-[16px] before:absolute before:top-2 before:bottom-2 before:start-[7px] before:w-[2px] before:bg-[#e5e8e2]">
              {/* Event 1 */}
              <div className="relative">
                <div className="absolute -start-[20px] top-1.5 size-[16px] rounded-full bg-[#34422a] border-[3px] border-white" />
                <p className="font-bold text-[12px] text-[#181d17]">
                  انتهاء الحجز وتسجيل المغادرة
                </p>
                <p className="text-[10px] text-[#75786f]">
                  18 سبتمبر 2026 — 12:00 ظهراً
                </p>
                <p className="text-[11px] text-[#586249] mt-0.5">
                  بواسطة النزيل خالد العتيبي (تسجيل ذاتي)
                </p>
              </div>

              {/* Event 2 */}
              <div className="relative">
                <div className="absolute -start-[20px] top-1.5 size-[16px] rounded-full bg-[#34422a] border-[3px] border-white" />
                <p className="font-bold text-[12px] text-[#181d17]">
                  إنشاء مهمة التنظيف آلياً
                </p>
                <p className="text-[10px] text-[#75786f]">
                  18 سبتمبر 2026 — 12:05 ظهراً
                </p>
                <p className="text-[11px] text-[#586249] mt-0.5">
                  محرك العمليات المؤتمت — منصة ابراج
                </p>
              </div>

              {/* Event 3 */}
              <div className="relative">
                <div
                  className={`absolute -start-[20px] top-1.5 size-[16px] rounded-full border-[3px] border-white ${
                    task.assignedStaff ? "bg-[#34422a]" : "bg-[#cbd0c7]"
                  }`}
                />
                <p className="font-bold text-[12px] text-[#181d17]">
                  تعيين مسؤول التنظيف
                </p>
                <p className="text-[11px] text-[#586249] mt-0.5">
                  {task.assignedStaff
                    ? `تم التعيين إلى ${task.assignedStaff.name}`
                    : "قيد الانتظار لمباشرة العملية"}
                </p>
              </div>

              {/* Event 4 */}
              <div className="relative">
                <div
                  className={`absolute -start-[20px] top-1.5 size-[16px] rounded-full border-[3px] border-white ${
                    task.status === "in_progress" || task.status === "completed"
                      ? "bg-[#34422a]"
                      : "bg-[#cbd0c7]"
                  }`}
                />
                <p className="font-bold text-[12px] text-[#181d17]">
                  بدء أعمال التنظيف الميداني
                </p>
                <p className="text-[11px] text-[#586249] mt-0.5">
                  {task.startedAt
                    ? `بدأ في ${task.startedAt}`
                    : "لم تبدأ بعد (تتطلب إسناد مسؤول)"}
                </p>
              </div>

              {/* Event 5 */}
              <div className="relative">
                <div
                  className={`absolute -start-[20px] top-1.5 size-[16px] rounded-full border-[3px] border-white ${
                    task.status === "completed" ? "bg-[#34422a]" : "bg-[#cbd0c7]"
                  }`}
                />
                <p className="font-bold text-[12px] text-[#181d17]">
                  اكتمال التنظيف والفحص الذاتي
                </p>
                <p className="text-[11px] text-[#586249] mt-0.5">
                  {task.status === "completed"
                    ? `مكتمل (${task.completedAt || "01:07 م"})`
                    : "بانتظار إنهاء القائمة واعتمادها"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <AssignSupervisorModal
        task={task}
        isOpen={isAssignModalOpen}
        onClose={() => setIsAssignModalOpen(false)}
        onConfirm={handleAssignSupervisor}
      />

      <StartCleaningModal
        task={task}
        isOpen={isStartModalOpen}
        onClose={() => setIsStartModalOpen(false)}
        onConfirm={handleStartCleaning}
      />

      <ConfirmCompletionModal
        task={task}
        isOpen={isCompleteModalOpen}
        onClose={() => setIsCompleteModalOpen(false)}
        onConfirm={handleConfirmCompletion}
      />
    </div>
  );
}
