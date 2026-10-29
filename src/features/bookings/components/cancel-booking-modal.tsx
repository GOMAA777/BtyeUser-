"use client";

import { useState } from "react";
import { X, AlertTriangle, AlertCircle, Trash2, Calendar, User, Home } from "lucide-react";
import { showToast } from "@/lib/toast";

interface CancelBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingReference?: string;
  guestName?: string;
  stayPeriod?: string;
  unitName?: string;
  onConfirmCancel?: (reason: string, notes: string) => void;
}

export function CancelBookingModal({
  isOpen,
  onClose,
  bookingReference = "BK-2026-1048",
  guestName = "أحمد محمد",
  stayPeriod = "26 أغسطس 2026 - 30 أغسطس 2026",
  unitName = "الوحدة 101 (استوديو ديلوكس · عمارة النخيل)",
  onConfirmCancel,
}: CancelBookingModalProps) {
  const [reason, setReason] = useState("طلب من الضيف");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast.error("تم إلغاء الحجز وإبطال كود الدخول الذكي");
      onConfirmCancel?.(reason, notes);
      onClose();
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      dir="rtl"
    >
      <div
        className="bg-white rounded-[16px] shadow-[0px_10px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] w-full max-w-[600px] max-h-[92vh] flex flex-col overflow-hidden text-right border border-[#e5e8e2]"
        data-node-id="1:8260"
        data-name="إلغاء الحجز"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-[#e5e8e2] flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-[8px] bg-[#fdeded] flex items-center justify-center text-[#ba1a1a]">
                <Trash2 className="size-4" />
              </div>
              <h2 className="font-cairo font-bold text-[#ba1a1a] text-[18px] leading-[26px]">
                إلغاء الحجز؟
              </h2>
            </div>
            <p className="font-cairo text-[12px] text-[#75786f] leading-[18px]">
              يرجى مراجعة تفاصيل الحجز وتأكيد سبب الإلغاء
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="size-8 rounded-[8px] border border-[#e5e8e2] hover:bg-[#f6f7f4] flex items-center justify-center text-[#75786f] hover:text-[#181d17] transition-colors cursor-pointer shrink-0"
            aria-label="إغلاق النافذة"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 overflow-y-auto flex flex-col gap-5">
          {/* 1. Booking Summary Card */}
          <div className="p-4 bg-[#fbfcf9] border border-[#e5e8e2] rounded-[12px] flex flex-col gap-3 font-cairo text-[12.5px]">
            <div className="flex items-center justify-between pb-2 border-b border-[#e5e8e2]">
              <div className="flex items-center gap-1.5">
                <span className="text-[#75786f]">الضيف:</span>
                <span className="font-bold text-[#181d17]">{guestName}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#75786f]">رقم الحجز:</span>
                <span className="font-mono font-bold text-[#181d17] bg-[#ebefe6] px-2 py-0.5 rounded-[6px]">
                  {bookingReference}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-[12px]">
              <div className="flex items-center gap-2">
                <span className="text-[#75786f]">فترة الإقامة:</span>
                <span className="font-semibold text-[#181d17]">{stayPeriod}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#75786f]">الوحدة:</span>
                <span className="font-semibold text-[#181d17]">{unitName}</span>
              </div>
            </div>
          </div>

          {/* 2. Cancellation Reason Field */}
          <div className="flex flex-col gap-2">
            <label className="font-cairo font-semibold text-[#181d17] text-[13px] flex items-center gap-1">
              <span>سبب الإلغاء</span>
              <span className="text-[#ba1a1a]">*</span>
            </label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full h-[42px] px-3 bg-[#f6f7f4] border border-[#e5e8e2] rounded-[10px] font-cairo text-[13px] text-[#181d17] outline-none focus:border-[#ba1a1a]"
            >
              <option value="طلب من الضيف">طلب من الضيف</option>
              <option value="إلغاء من مصدر الحجز">إلغاء من مصدر الحجز</option>
              <option value="مشكلة في الوحدة">مشكلة في الوحدة</option>
              <option value="أخرى">أخرى</option>
            </select>
          </div>

          {/* 3. Additional Notes Field */}
          <div className="flex flex-col gap-2">
            <label className="font-cairo font-semibold text-[#181d17] text-[13px] flex items-center gap-1.5">
              <span>ملاحظات إضافية</span>
              <span className="text-[#75786f] text-[11px] font-normal">(اختياري)</span>
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="أضف أي تفاصيل أو أسباب إضافية لتوثيق الإلغاء في سجل النشاط..."
              className="w-full p-3 bg-[#f6f7f4] border border-[#e5e8e2] rounded-[10px] font-cairo text-[12.5px] text-[#181d17] outline-none focus:border-[#ba1a1a] resize-none"
            />
          </div>

          {/* 4. Warning Callout Card */}
          <div className="p-3.5 bg-[#fef2f2] border border-[#fecaca] rounded-[12px] flex items-start gap-3 text-[#991b1b]">
            <AlertCircle className="size-5 shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1 font-cairo text-[12px] leading-[18px]">
              <span className="font-bold">
                بعد إلغاء الحجز لن يعود هذا الحجز ضمن الحجوزات الحالية أو القادمة.
              </span>
              <span className="text-[#b91c1c]">
                وسيتم إلغاء صلاحية كود الدخول الذكي تلقائياً وإخطار القنوات المعنية.
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#fcfdfa] border-t border-[#e5e8e2] flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-[10px] border border-[#e5e8e2] bg-white font-cairo font-semibold text-[13px] text-[#454840] hover:bg-[#f6f7f4] transition-colors cursor-pointer"
          >
            العودة
          </button>
          <button
            type="button"
            disabled={isSubmitting}
            onClick={handleConfirm}
            className="px-7 py-2.5 rounded-[10px] bg-[#ba1a1a] hover:bg-[#991b1b] text-white font-cairo font-bold text-[13px] shadow-sm transition-all cursor-pointer disabled:opacity-60 flex items-center gap-2"
          >
            <Trash2 className="size-4" />
            <span>{isSubmitting ? "جاري الإلغاء..." : "تأكيد الإلغاء"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
