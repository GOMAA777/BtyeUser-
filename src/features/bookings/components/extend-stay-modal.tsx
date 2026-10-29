"use client";

import { useState } from "react";
import { X, Calendar, CheckCircle2, Clock, KeyRound, ArrowLeft } from "lucide-react";
import { showToast } from "@/lib/toast";

interface ExtendStayModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingReference?: string;
  guestName?: string;
  guestPhone?: string;
  unitName?: string;
  unitType?: string;
  currentCheckout?: string;
  dailyPrice?: number;
  accessCode?: string;
  onOpenChangeUnit?: () => void;
  onConfirmSuccess?: (newCheckoutDate: string, addedNights: number, addedCost: number) => void;
}

export function ExtendStayModal({
  isOpen,
  onClose,
  bookingReference = "BK-2026-1048",
  guestName = "أحمد محمد",
  guestPhone = "+966 55 123 4567",
  unitName = "الوحدة 101",
  unitType = "استوديو ديلوكس · عمارة النخيل",
  currentCheckout = "30 أغسطس 2026 — 12:00 م (4 ليالٍ)",
  dailyPrice = 450,
  accessCode = "583921",
  onOpenChangeUnit,
  onConfirmSuccess,
}: ExtendStayModalProps) {
  const [selectedNights, setSelectedNights] = useState<number>(3);
  const [newDate, setNewDate] = useState("2026-09-02");
  const [newTime, setNewTime] = useState("12:00 م");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const quickPills = [
    { nights: 1, label: "+ ليلة (31 أغسطس)", date: "2026-08-31" },
    { nights: 2, label: "+ ليلتان (1 سبتمبر)", date: "2026-09-01" },
    { nights: 3, label: "+ 3 ليالٍ (2 سبتمبر - مختار)", date: "2026-09-02" },
  ];

  const addedCost = selectedNights * dailyPrice;
  const initialCost = 1800;
  const totalNewCost = initialCost + addedCost;

  const handleSelectNights = (nights: number, dateStr: string) => {
    setSelectedNights(nights);
    setNewDate(dateStr);
  };

  const handleConfirm = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast.success(
        `تم تمديد الإقامة بنجاح لمدة ${selectedNights} ليالٍ وتحديث كود الدخول (${accessCode})`
      );
      onConfirmSuccess?.(newDate, selectedNights, addedCost);
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
        data-node-id="1:8004"
        data-name="تمديد الإقامة"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-[#e5e8e2] flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-[8px] bg-[#eaf1e8] flex items-center justify-center text-[#34422a]">
                <Calendar className="size-4" />
              </div>
              <h2 className="font-cairo font-bold text-[#181d17] text-[18px] leading-[26px]">
                تمديد الإقامة
              </h2>
            </div>
            <p className="font-cairo text-[12px] text-[#75786f] leading-[18px]">
              تمديد فترة إقامة النزيل وتحديث مواعيد المغادرة وصلاحية كود الدخول تلقائياً.
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
          {/* 1. بيانات الحجز الحالي */}
          <div className="p-4 bg-[#fbfcf9] border border-[#e5e8e2] rounded-[12px] flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-[#e5e8e2] pb-2">
              <span className="font-cairo font-bold text-[#181d17] text-[13px]">
                بيانات الحجز الحالي
              </span>
              <span className="font-mono font-bold text-[#4b5940] text-[12px] bg-[#ebefe6] px-2 py-0.5 rounded-[6px]">
                {bookingReference}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-[12px] font-cairo">
              <div className="flex flex-col gap-0.5">
                <span className="text-[#75786f]">الوحدة</span>
                <span className="font-bold text-[#181d17]">{unitName}</span>
                <span className="text-[#75786f] text-[11px]">{unitType}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[#75786f]">الضيف</span>
                <span className="font-bold text-[#181d17]">{guestName}</span>
                <span className="text-[#75786f] text-[11px]" dir="ltr">{guestPhone}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#e5e8e2] flex items-center justify-between text-[12px] font-cairo">
              <span className="text-[#75786f]">المغادرة الحالية المحددة:</span>
              <span className="font-bold text-[#181d17]">{currentCheckout}</span>
            </div>
          </div>

          {/* 2. تاريخ ووقت المغادرة الجديدة */}
          <div className="flex flex-col gap-2">
            <label className="font-cairo font-semibold text-[#181d17] text-[13px] flex items-center gap-1">
              <span>تاريخ ووقت المغادرة الجديدة</span>
              <span className="text-[#b12515]">*</span>
            </label>

            <div className="flex gap-2">
              <input
                type="date"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                className="flex-1 h-[42px] px-3 bg-[#f6f7f4] border border-[#e5e8e2] rounded-[10px] font-cairo text-[13px] text-[#181d17] outline-none focus:border-[#4b5940]"
              />
              <select
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                className="w-[110px] h-[42px] px-2 bg-[#f6f7f4] border border-[#e5e8e2] rounded-[10px] font-cairo text-[13px] text-[#181d17] outline-none focus:border-[#4b5940]"
              >
                <option value="12:00 م">12:00 م</option>
                <option value="01:00 م">01:00 م</option>
                <option value="02:00 م">02:00 م</option>
              </select>
            </div>

            {/* Quick night pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {quickPills.map((pill) => {
                const isSelected = selectedNights === pill.nights;
                return (
                  <button
                    key={pill.nights}
                    type="button"
                    onClick={() => handleSelectNights(pill.nights, pill.date)}
                    className={`font-cairo text-[11px] px-3 py-1.5 rounded-[8px] border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#34422a] text-white border-[#34422a] font-bold shadow-sm"
                        : "bg-white text-[#454840] border-[#e5e8e2] hover:bg-[#f6f7f4]"
                    }`}
                  >
                    {pill.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Availability Confirmation Banner */}
          <div className="p-3.5 bg-[#f0f6ec] border border-[#d2e2c8] rounded-[12px] flex items-start gap-3">
            <CheckCircle2 className="size-5 text-[#34422a] shrink-0 mt-0.5" />
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <span className="font-cairo font-bold text-[13px] text-[#1a2614]">
                  الوحدة متاحة حتى 2 سبتمبر 2026
                </span>
                <span className="bg-[#d8e8cb] text-[#2c3d22] px-2 py-0.2 rounded-full font-cairo font-bold text-[10px]">
                  مؤكد
                </span>
              </div>
              <p className="font-cairo text-[11.5px] text-[#4b5940] leading-[17px]">
                الوحدة خالية وجاهزة للتمديد دون أي تعارض مع حجوزات تالية.
              </p>
            </div>
          </div>

          {/* 4. Financial Calculation Box */}
          <div className="p-4 bg-[#fbfcf9] border border-[#e5e8e2] rounded-[12px] flex flex-col gap-2 font-cairo text-[12.5px]">
            <div className="flex justify-between text-[#454840]">
              <span>عدد الليالي الإضافية:</span>
              <span className="font-bold text-[#181d17]">{selectedNights} ليالٍ</span>
            </div>
            <div className="flex justify-between text-[#454840]">
              <span>السعر الإضافي ({dailyPrice} ر.س × {selectedNights}):</span>
              <span className="font-bold text-[#181d17]">{addedCost.toLocaleString()} ر.س</span>
            </div>
            <div className="pt-2 border-t border-[#e5e8e2] flex justify-between items-baseline text-[#181d17]">
              <div>
                <span className="font-bold text-[13.5px]">الإجمالي الجديد للحجز:</span>
                <span className="block text-[11px] text-[#75786f]">شامل 7 ليالٍ والرسوم النظامية</span>
              </div>
              <span className="font-bold text-[16px] text-[#34422a]">
                {totalNewCost.toLocaleString()} ر.س
              </span>
            </div>
          </div>

          {/* 5. Fallback Link to Change Unit */}
          <div className="flex items-center justify-between p-3 bg-[#fafbfa] border border-[#e5e8e2] rounded-[10px] text-[12px] font-cairo">
            <span className="text-[#75786f]">
              إذا كانت الوحدة غير متاحة خلال الفترة المطلوبة:
            </span>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenChangeUnit?.();
              }}
              className="text-[#4b5940] hover:text-[#2d3a24] font-bold flex items-center gap-1 cursor-pointer"
            >
              <span>اختيار وحدة أخرى</span>
              <ArrowLeft className="size-3.5" />
            </button>
          </div>

          {/* 6. Smart Access Code Sync Notice */}
          <div className="p-3 bg-[#f5f8f2] border border-[#dbe6d1] rounded-[10px] flex items-start gap-2.5 text-[11.5px] font-cairo text-[#3b4c30]">
            <KeyRound className="size-4 text-[#4b5940] shrink-0 mt-0.5" />
            <span>
              سيتم تمديد صلاحية كود الدخول الذكي ({accessCode}) وتحديث رسالة المغادرة على WhatsApp تلقائياً فور التأكيد.
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#fcfdfa] border-t border-[#e5e8e2] flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-[10px] border border-[#e5e8e2] bg-white font-cairo font-semibold text-[13px] text-[#454840] hover:bg-[#f6f7f4] transition-colors cursor-pointer"
          >
            إلغاء
          </button>
          <button
            type="button"
            disabled={isSubmitting}
            onClick={handleConfirm}
            className="px-7 py-2.5 rounded-[10px] bg-[#34422a] hover:bg-[#283420] text-white font-cairo font-bold text-[13px] shadow-sm transition-all cursor-pointer disabled:opacity-60"
          >
            {isSubmitting ? "جاري الحفظ..." : "تأكيد التمديد"}
          </button>
        </div>
      </div>
    </div>
  );
}

