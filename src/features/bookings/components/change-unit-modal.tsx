"use client";

import { useState } from "react";
import { X, Search, AlertTriangle, CheckCircle2, MessageSquare, Home } from "lucide-react";
import { showToast } from "@/lib/toast";

interface ChangeUnitModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUnitName?: string;
  onSelectUnit?: (unitId: string, unitName: string, price: number) => void;
}

interface UnitAlternative {
  id: string;
  name: string;
  title: string;
  specs: string;
  price: number;
}

const alternativeUnits: UnitAlternative[] = [
  {
    id: "105",
    name: "الوحدة 105",
    title: "شقة عائلية متميزة",
    specs: "الدور الأول • مساحة 65 م² • نفس الإطلالة والمميزات",
    price: 480,
  },
  {
    id: "102",
    name: "الوحدة 102",
    title: "استوديو ديلوكس (نفس الفئة)",
    specs: "الدور الأول • مساحة 45 م² • مطابقة لسعر الحجز الحالي",
    price: 450,
  },
  {
    id: "201",
    name: "الوحدة 201",
    title: "جناح تنفيذي فخم",
    specs: "الدور الثاني • مساحة 80 م² • شرفة بانورامية خاصة",
    price: 650,
  },
];

export function ChangeUnitModal({
  isOpen,
  onClose,
  currentUnitName = "الوحدة 101",
  onSelectUnit,
}: ChangeUnitModalProps) {
  const [selectedId, setSelectedId] = useState("105");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const filteredUnits = alternativeUnits.filter((u) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return u.name.toLowerCase().includes(q) || u.title.toLowerCase().includes(q);
  });

  const selectedUnit =
    alternativeUnits.find((u) => u.id === selectedId) || alternativeUnits[0];

  const handleConfirm = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast.success(
        `تم نقل الحجز إلى ${selectedUnit.name} بنجاح وإصدار كود دخول جديد`
      );
      onSelectUnit?.(selectedUnit.id, selectedUnit.name, selectedUnit.price);
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
        data-node-id="1:8127"
        data-name="اختيار وحدة أخرى"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-[#e5e8e2] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="size-8 rounded-[8px] bg-[#eaf1e8] flex items-center justify-center text-[#34422a]">
              <Home className="size-4" />
            </div>
            <h2 className="font-cairo font-bold text-[#181d17] text-[18px] leading-[26px]">
              اختيار وحدة أخرى
            </h2>
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
          {/* 1. Advisory Alert Banner */}
          <div className="p-4 bg-[#fffbeb] border border-[#fde68a] rounded-[12px] flex items-start gap-3">
            <span className="text-[20px] leading-none shrink-0 mt-0.5">⚠️</span>
            <div className="flex flex-col gap-1 text-right">
              <span className="font-cairo font-bold text-[13.5px] text-[#92400e]">
                الوحدة الحالية غير متاحة للفترة المطلوبة.
              </span>
              <p className="font-cairo text-[12px] text-[#b45309] leading-[18px]">
                {currentUnitName} محجوزة لنزيل آخر بدءاً من 30 أغسطس 2026. يرجى اختيار وحدة بديلة متاحة لنقل الإقامة حتى موعد المغادرة الجديد دون حدوث تعارض في الجدول التشغيلي.
              </p>
            </div>
          </div>

          {/* 2. Filters & Search Section */}
          <div className="flex flex-col gap-2">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث برقم الوحدة أو نوعها..."
                className="w-full h-[40px] pr-[36px] pl-3 bg-[#f6f7f4] border border-[#e5e8e2] rounded-[10px] font-cairo text-[12.5px] outline-none focus:border-[#4b5940]"
              />
              <Search className="size-4 text-[#75786f] absolute right-3 top-1/2 -translate-y-1/2" />
            </div>

            <div className="flex items-center justify-between text-[11px] font-cairo">
              <span className="text-[#75786f]">
                عرض الوحدات المتاحة فقط (تم استبعاد الوحدات المشغولة)
              </span>
              <span className="bg-[#ebefe6] text-[#4b5940] px-2 py-0.5 rounded-full font-semibold">
                {filteredUnits.length} وحدات متوافقة متاحة
              </span>
            </div>
          </div>

          {/* 3. Units Radio Cards */}
          <div className="flex flex-col gap-3">
            {filteredUnits.map((unit) => {
              const isSelected = selectedId === unit.id;
              return (
                <div
                  key={unit.id}
                  onClick={() => setSelectedId(unit.id)}
                  className={`p-4 rounded-[12px] border transition-all cursor-pointer flex items-center justify-between gap-4 text-right ${
                    isSelected
                      ? "bg-[#f4f7f0] border-[#4b5940] shadow-sm ring-1 ring-[#4b5940]"
                      : "bg-white border-[#e5e8e2] hover:bg-[#fafbfa]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`size-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "border-[#4b5940] bg-[#4b5940]"
                          : "border-[#cbd2c7] bg-white"
                      }`}
                    >
                      {isSelected && <div className="size-1.5 rounded-full bg-white" />}
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-cairo font-bold text-[14px] text-[#181d17]">
                          {unit.name}
                        </span>
                        <span className="text-[#75786f] text-[12px]">•</span>
                        <span className="font-cairo font-semibold text-[13px] text-[#34422a]">
                          {unit.title}
                        </span>
                      </div>
                      <span className="font-cairo text-[11.5px] text-[#75786f]">
                        {unit.specs}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end shrink-0">
                    <span className="font-cairo font-bold text-[16px] text-[#181d17]">
                      {unit.price}
                    </span>
                    <span className="font-cairo text-[10px] text-[#75786f]">
                      ر.س / ليلة
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4. Operational Auto-Notice */}
          <div className="p-3.5 bg-[#f0f6ec] border border-[#d2e2c8] rounded-[12px] flex items-start gap-2.5 text-[12px] font-cairo text-[#2d3a24]">
            <span className="text-[16px] leading-none shrink-0 mt-0.5">📲</span>
            <span>
              عند تأكيد الانتقال، سيتم إصدار كود دخول ذكي جديد للوحدة البديلة وتحديث تفاصيل الحجز تلقائياً وإرسالها على WhatsApp.
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#fcfdfa] border-t border-[#e5e8e2] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-cairo text-[12px] text-[#454840]">
            <span className="text-[#75786f]">الوحدة المختارة حالياً: </span>
            <span className="font-bold text-[#34422a]">{selectedUnit.name}</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-[10px] border border-[#e5e8e2] bg-white font-cairo font-semibold text-[13px] text-[#454840] hover:bg-[#f6f7f4] transition-colors cursor-pointer"
            >
              إلغاء
            </button>
            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleConfirm}
              className="px-6 py-2 rounded-[10px] bg-[#34422a] hover:bg-[#283420] text-white font-cairo font-bold text-[13px] shadow-sm transition-all cursor-pointer disabled:opacity-60"
            >
              {isSubmitting ? "جاري الحفظ..." : "اختيار الوحدة"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
