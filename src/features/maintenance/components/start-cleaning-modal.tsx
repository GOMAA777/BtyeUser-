"use client";

import { MaintenanceTask } from "../types";

interface StartCleaningModalProps {
  task: MaintenanceTask | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function StartCleaningModal({
  task,
  isOpen,
  onClose,
  onConfirm,
}: StartCleaningModalProps) {
  if (!isOpen || !task) return null;

  const supervisorName = task.assignedStaff?.name || "أحمد سالم";
  const supervisorRole = task.assignedStaff?.role || "مشرف تنظيف معتمد";

  const handleStart = () => {
    onConfirm();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto"
      dir="rtl"
    >
      <div
        className="bg-white rounded-[16px] border border-[#e5e8e2] w-full max-w-[540px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden my-8"
        data-node-id="1:11378"
        data-name="بدء التنظيف"
      >
        {/* Header */}
        <div className="p-[20px] pb-[16px] border-b border-[#e5e8e2] flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <div className="size-[32px] rounded-full bg-[rgba(216,232,203,0.6)] text-[#34422a] flex items-center justify-center shrink-0">
              <svg
                className="size-[16px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <h3 className="font-cairo font-bold text-[18px] text-[#181d17]">
              بدء التنظيف
            </h3>
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
          {/* Structured Context Summary Box */}
          <div className="bg-[#f8faf7] border border-[#e5e8e2] rounded-[12px] p-[14px] space-y-[12px] text-[12px]">
            {/* Row 1: Property & Target Unit */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
              <div>
                <p className="text-[#75786f] text-[11px]">العقار والموقع</p>
                <p className="font-bold text-[#181d17] mt-0.5">
                  {task.property.name} — {task.property.city} ({task.property.district || "حي العليا"})
                </p>
              </div>
              <div>
                <p className="text-[#75786f] text-[11px]">الوحدة المستهدفة</p>
                <p className="font-bold text-[#181d17] mt-0.5">
                  {task.unit.name} ({task.unit.floor})
                </p>
              </div>
            </div>

            <div className="border-t border-[#edf1eb]" />

            {/* Row 2: Owner & Task Ref */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
              <div>
                <p className="text-[#75786f] text-[11px]">المالك المسجل</p>
                <p className="font-bold text-[#181d17] mt-0.5">
                  {task.owner.name} ({task.owner.code})
                </p>
              </div>
              <div>
                <p className="text-[#75786f] text-[11px]">رقم أمر العمل</p>
                <p className="font-bold text-[#34422a] mt-0.5">
                  {task.reference} (مغادرة وتسليم فوري)
                </p>
              </div>
            </div>

            <div className="border-t border-[#edf1eb]" />

            {/* Row 3: Assigned Supervisor */}
            <div>
              <p className="text-[#75786f] text-[11px] mb-1">
                المسؤول المكلف بالمباشرة:
              </p>
              <div className="flex items-center gap-[8px]">
                <div className="size-[28px] rounded-full bg-[#ebefe6] text-[#34422a] font-bold text-[11px] flex items-center justify-center shrink-0">
                  أس
                </div>
                <span className="font-bold text-[13px] text-[#181d17]">
                  {supervisorName}
                </span>
                <span className="text-[#75786f] text-[11px]">
                  ({supervisorRole})
                </span>
              </div>
            </div>
          </div>

          {/* Operational Impact & Governance Notice */}
          <div className="bg-[#f0f4ec] border border-[#d8e2d4] rounded-[12px] p-[14px]">
            <h4 className="font-bold text-[#34422a] text-[13px] mb-2 flex items-center gap-1.5">
              <svg
                className="size-[16px] text-[#4b5940]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              الأثر التشغيلي عند التأكيد:
            </h4>
            <ul className="space-y-[8px] text-[12px] leading-[18px] text-[#4b5940]">
              <li className="flex items-start gap-2">
                <span className="text-[#34422a] font-bold">•</span>
                <span>
                  تحديث حالة المهمة فوراً إلى: <strong className="text-[#181d17]">«جاري التنظيف»</strong> (تسجيل وقت البدء: 18 سبتمبر 2026 - 12:25 م).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#34422a] font-bold">•</span>
                <span>
                  إدراج قيد رسمي في سجل نشاط العقار: <strong className="text-[#181d17]">«بدأ {supervisorName} تنفيذ مهمة التنظيف.»</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#34422a] font-bold">•</span>
                <span>
                  حالة {task.unit.name} بالمنظومة المركزية: <strong className="text-[#181d17]">«تحت التنظيف»</strong> (محظورة برمجياً من الحجز والاستقبال حتى اكتمال كافة بنود الفحص).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#34422a] font-bold">•</span>
                <span>
                  تفعيل كود الدخول الرقمي الذكي المخصص لطاقم التنظيف تلقائياً وصلاحيته <strong className="text-[#181d17]">ساعتين</strong> من الآن.
                </span>
              </li>
            </ul>
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
            onClick={handleStart}
            className="px-[22px] h-[38px] bg-[#34422a] hover:bg-[#283320] text-white rounded-[8px] text-[13px] font-bold transition-colors cursor-pointer flex items-center gap-1.5"
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
        </div>
      </div>
    </div>
  );
}
