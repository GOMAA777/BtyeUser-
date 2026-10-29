"use client";

import { useState } from "react";
import { MaintenanceTask } from "../types";

interface ConfirmCompletionModalProps {
  task: MaintenanceTask | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (notes?: string) => void;
}

export function ConfirmCompletionModal({
  task,
  isOpen,
  onClose,
  onConfirm,
}: ConfirmCompletionModalProps) {
  const [notes, setNotes] = useState("");

  if (!isOpen || !task) return null;

  const supervisorName =
    task.assignedStaff?.name || "أحمد سالم (مشرف معتمد — النقاء)";

  const handleConfirm = () => {
    onConfirm(notes);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto"
      dir="rtl"
    >
      <div
        className="bg-white rounded-[16px] border border-[#e5e8e2] w-full max-w-[560px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden my-8"
        data-node-id="1:11472"
        data-name="تأكيد اكتمال التنظيف"
      >
        {/* Header */}
        <div className="p-[20px] pb-[16px] border-b border-[#e5e8e2] flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <div className="size-[32px] rounded-full bg-[#ebefe6] text-[#34422a] flex items-center justify-center shrink-0">
              <svg
                className="size-[18px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2 className="font-cairo font-bold text-[18px] text-[#181d17]">
              تأكيد اكتمال التنظيف
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="size-[32px] rounded-full hover:bg-[#f6f7f4] flex items-center justify-center text-[#75786f] transition-colors cursor-pointer"
            aria-label="إغلاق"
          >
            <svg
              className="size-[18px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-[20px] space-y-[16px] text-right font-cairo">
          {/* Summary Card */}
          <div className="bg-[#f8faf7] border border-[#e5e8e2] rounded-[12px] p-[14px]">
            <h3 className="font-bold text-[#181d17] text-[13px] mb-2.5">
              ملخص المهمة الميدانية
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[10px] gap-x-[16px] text-[12px]">
              <div>
                <p className="text-[#75786f] text-[11px]">الوحدة المستهدفة</p>
                <p className="font-bold text-[#181d17] mt-0.5">
                  {task.unit.name} ({task.unit.floor})
                </p>
              </div>
              <div>
                <p className="text-[#75786f] text-[11px]">الأصل العقاري</p>
                <p className="font-bold text-[#181d17] mt-0.5">
                  {task.property.name} — {task.property.district || "حي العليا"}
                </p>
              </div>
              <div>
                <p className="text-[#75786f] text-[11px]">المالك المسجل</p>
                <p className="font-bold text-[#181d17] mt-0.5">
                  {task.owner.name} ({task.owner.code})
                </p>
              </div>
              <div>
                <p className="text-[#75786f] text-[11px]">نوع الإجراء المعتمد</p>
                <p className="font-bold text-[#34422a] mt-0.5">
                  مغادرة وتسليم فوري
                </p>
              </div>
              <div className="sm:col-span-2 border-t border-[#edf1eb] pt-2">
                <p className="text-[#75786f] text-[11px]">المسؤول المنفذ:</p>
                <p className="font-bold text-[#181d17] mt-0.5">
                  {supervisorName}
                </p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-[#75786f] text-[11px]">وقت البدء والمدة:</p>
                <p className="font-bold text-[#181d17] mt-0.5">
                  18 سبتمبر 2026 - 12:25 م (مدة العمل: 42 دقيقة)
                </p>
              </div>
            </div>
          </div>

          {/* Governance & Automation Impact Box */}
          <div className="bg-[#f0f4ec] border border-[#d8e2d4] rounded-[12px] p-[14px]">
            <h3 className="font-bold text-[#34422a] text-[13px] mb-2 flex items-center gap-1.5">
              <svg
                className="size-[16px] text-[#4b5940]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              الحوكمة التشغيلية والأتمتة النظامية
            </h3>
            <ul className="space-y-[8px] text-[12px] leading-[18px] text-[#4b5940]">
              <li className="flex items-start gap-2">
                <span className="text-[#34422a] font-bold">•</span>
                <span>
                  <strong>تحديث حالة المهمة:</strong> تتحول فوراً إلى مكتملة مع قيد زمن الإكمال الفعلي (18 سبتمبر 2026 - 01:07 م).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#34422a] font-bold">•</span>
                <span>
                  <strong>حوكمة حالة الوحدة:</strong> تتحول {task.unit.name} تلقائياً إلى متاحة في محركات الحجز (لعدم وجود تعارض مع حجوزات قادمة فورية أو بلاغات صيانة نشطة). لا يُسمح بتعديل الحالة يدوياً.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#34422a] font-bold">•</span>
                <span>
                  <strong>قيد السجل الرسمي:</strong> إدراج توثيق دائم في سجل التدقيق: تم إكمال مهمة التنظيف بواسطة أحمد سالم واعتماد جاهزية الوحدة.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#34422a] font-bold">•</span>
                <span>
                  <strong>الأقفال الذكية:</strong> إلغاء صلاحية كود الدخول المؤقت لطاقم التنظيف تلقائياً وبشكل فوري بمجرد إغلاق الباب.
                </span>
              </li>
            </ul>
          </div>

          {/* Operational Notes Field */}
          <div>
            <label className="font-bold text-[#181d17] text-[13px] block mb-1">
              ملاحظات إضافية (اختياري)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="أضف أي ملاحظات تشغيلية أو تنبيهات متعلقة بسلامة الوحدة (مثال: تم إغلاق النوافذ، فحص بطارية القفل، إلخ)..."
              className="w-full border border-[#e5e8e2] rounded-[10px] p-[10px] text-[12px] font-cairo text-[#181d17] placeholder:text-[#a0a59b] focus:outline-none focus:border-[#4b5940] transition-colors resize-none"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-[16px] px-[20px] bg-[#fcfdfa] border-t border-[#e5e8e2] flex items-center justify-end gap-[10px]">
          <button
            type="button"
            onClick={onClose}
            className="px-[18px] h-[38px] border border-[#e5e8e2] bg-white hover:bg-[#f6f7f4] rounded-[8px] text-[13px] font-semibold text-[#586249] transition-colors cursor-pointer"
          >
            إلغاء
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className="px-[22px] h-[38px] bg-[#34422a] hover:bg-[#283320] text-white rounded-[8px] text-[13px] font-bold transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <svg
              className="size-[14px]"
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
        </div>
      </div>
    </div>
  );
}
