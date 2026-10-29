"use client";

import { useState } from "react";
import { MaintenanceTask } from "../types";

interface AssignSupervisorModalProps {
  task: MaintenanceTask | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (supervisorName: string, notes: string) => void;
}

const supervisors = [
  {
    id: "sup-1",
    name: "أحمد سالم (شركة النقاء للتشغيل الفندقي)",
    shortName: "أحمد سالم",
    initials: "أس",
    role: "مشرف تنظيف معتمد",
    rating: "4.9",
    status: "متاح حالياً",
    statusColor: "text-[#436734] bg-[#eaf1e8]",
  },
  {
    id: "sup-2",
    name: "سالم الدوسري",
    shortName: "سالم الدوسري",
    initials: "سد",
    role: "فني نظافة وضيافة",
    rating: "4.8",
    status: "مشغول حتى 01:30 م",
    statusColor: "text-[#c07010] bg-[#fdf5e8]",
  },
  {
    id: "sup-3",
    name: "شركة النقاء للخدمات",
    shortName: "شركة النقاء",
    initials: "نق",
    role: "مقاول تشغيل ونظافة فندقية معتمد",
    rating: "4.95",
    status: "طاقم جاهز (3 أفراد)",
    statusColor: "text-[#436734] bg-[#eaf1e8]",
  },
];

export function AssignSupervisorModal({
  task,
  isOpen,
  onClose,
  onConfirm,
}: AssignSupervisorModalProps) {
  const [selectedSupId, setSelectedSupId] = useState("sup-1");
  const [notes, setNotes] = useState(
    "يرجى فحص بطارية القفل الذكي والتأكد من إغلاق النوافذ والشرفات بعد انتهاء التهوية."
  );

  if (!isOpen || !task) return null;

  const selectedSupervisor =
    supervisors.find((s) => s.id === selectedSupId) || supervisors[0];

  const handleSave = () => {
    onConfirm(selectedSupervisor.shortName, notes);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto"
      dir="rtl"
    >
      <div
        className="bg-white rounded-[16px] border border-[#e5e8e2] w-full max-w-[580px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden my-8"
        data-node-id="1:11275"
        data-name="تعيين مسؤول التنظيف"
      >
        {/* Header */}
        <div className="p-[20px] pb-[16px] border-b border-[#e5e8e2] flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="font-cairo font-bold text-[18px] text-[#181d17]">
              تعيين مسؤول التنظيف
            </h2>
            <div className="flex flex-wrap items-center gap-[6px] mt-1 text-[11px] font-cairo text-[#75786f]">
              <span className="font-semibold text-[#34422a] bg-[#ebefe6] px-2 py-0.5 rounded-full">
                مهمة التنظيف: {task.reference}
              </span>
              <span>•</span>
              <span>
                {task.unit.name} — {task.property.name} ({task.property.city} - {task.property.district || "حي العليا"})
              </span>
            </div>
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

        {/* Modal Form Body */}
        <div className="p-[20px] space-y-[16px] text-right font-cairo">
          {/* Metadata pill strip */}
          <div className="flex flex-wrap items-center gap-[8px] text-[12px] text-[#586249]">
            <span className="bg-[#f3f5f0] px-2.5 py-1 rounded-[6px] font-medium">
              المالك: {task.owner.name}
            </span>
            <span className="bg-[#fdf5e8] text-[#c07010] px-2.5 py-1 rounded-[6px] font-medium">
              أولوية قياسية • مغادرة نزيل وتسليم فوري
            </span>
          </div>

          {/* Operational Context Summary Box */}
          <div className="bg-[#f8faf7] border border-[#e5e8e2] rounded-[12px] p-[14px] grid grid-cols-1 sm:grid-cols-3 gap-[10px] text-[12px]">
            <div>
              <p className="text-[#75786f] text-[11px]">موقع الوحدة:</p>
              <p className="font-bold text-[#181d17] mt-0.5">
                {task.unit.name} ({task.unit.floor})
              </p>
            </div>
            <div>
              <p className="text-[#75786f] text-[11px]">مدة التنظيف المستهدفة:</p>
              <p className="font-bold text-[#181d17] mt-0.5">
                45 دقيقة (تبدأ فور الاستلام الميداني)
              </p>
            </div>
            <div>
              <p className="text-[#75786f] text-[11px]">حالة المهمة الحالية:</p>
              <p className="font-bold text-[#c07010] mt-0.5">
                بانتظار الإسناد الميداني
              </p>
            </div>
          </div>

          {/* Supervisor Selection Field */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="font-bold text-[#181d17] text-[13px] flex items-center gap-1">
                <span>المسؤول الميداني المكلف</span>
                <span className="text-[#ba1a1a]">*</span>
              </label>
              <span className="bg-[#eaf1e8] text-[#436734] px-2 py-0.5 rounded-full text-[11px] font-semibold">
                3 متاحين حالياً في النطاق
              </span>
            </div>

            <div className="space-y-[8px]">
              {supervisors.map((sup) => {
                const isSelected = selectedSupId === sup.id;
                return (
                  <div
                    key={sup.id}
                    onClick={() => setSelectedSupId(sup.id)}
                    className={`p-[12px] rounded-[10px] border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? "border-[#4b5940] bg-[#f8faf7] shadow-sm"
                        : "border-[#e5e8e2] hover:bg-[#fafbfa]"
                    }`}
                  >
                    <div className="flex items-center gap-[10px]">
                      <div className="size-[36px] rounded-full bg-[#ebefe6] text-[#34422a] font-bold text-[13px] flex items-center justify-center shrink-0">
                        {sup.initials}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-[13px] text-[#181d17]">
                          {sup.name}
                        </span>
                        <div className="flex items-center gap-2 mt-0.5 text-[11px] text-[#75786f]">
                          <span>{sup.role}</span>
                          <span>•</span>
                          <span>★ {sup.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-[10px]">
                      <span
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${sup.statusColor}`}
                      >
                        {sup.status}
                      </span>
                      <div
                        className={`size-[18px] rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected
                            ? "border-[#34422a] bg-[#34422a] text-white"
                            : "border-[#cbd0c7]"
                        }`}
                      >
                        {isSelected && (
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
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-[11px] text-[#75786f] mt-1.5">
              سيتم إرسال إشعار فوري وتصريح كود الدخول المؤقت عبر تطبيق المشغل فور التعيين.
            </p>
          </div>

          {/* Notes Field */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="font-bold text-[#181d17] text-[13px]">
                ملاحظات وتوجيهات خاصة (اختياري)
              </label>
              <span className="text-[11px] text-[#75786f]">
                تعليمات موجهة للطاقم الميداني
              </span>
            </div>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border border-[#e5e8e2] rounded-[10px] p-[10px] text-[12px] font-cairo text-[#181d17] focus:outline-none focus:border-[#4b5940] transition-colors resize-none"
            />
          </div>

          {/* Automated Action Notice */}
          <div className="bg-[#f0f4ec] border border-[#e2e7dd] rounded-[10px] p-[12px] text-[12px] leading-[18px] text-[#4b5940]">
            <div className="font-bold mb-0.5">الإجراءات الآلية عند التأكيد:</div>
            <div>
              يتم تحديث المسؤول إلى [{selectedSupervisor.shortName}]، وتوليد كود دخول إلكتروني مؤقت صالح لمدة ساعتين، مع تسجيل رسمي في سجل نشاط المهمة: &quot;تم تعيين مهمة التنظيف إلى {selectedSupervisor.shortName}&quot;.
            </div>
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
            onClick={handleSave}
            className="px-[20px] h-[38px] bg-[#34422a] hover:bg-[#283320] text-white rounded-[8px] text-[13px] font-bold transition-colors cursor-pointer"
          >
            حفظ الإعداد
          </button>
        </div>
      </div>
    </div>
  );
}
