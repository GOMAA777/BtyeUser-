"use client";

import Image from "next/image";
import { useEffect } from "react";

interface StartMaintenanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  reportId?: string;
  unitTitle?: string;
  ownerName?: string;
  problemType?: string;
  technicianName?: string;
}

export function StartMaintenanceModal({
  isOpen,
  onClose,
  onConfirm,
  reportId = "MT-2048",
  unitTitle = "الوحدة 305 (الطابق 3 - برج الياسمين)",
  ownerName = "سارة القحطاني (OWN-8823)",
  problemType = "عطل قفل الباب الذكي (Smart Lock)",
  technicianName = "فريق الصيانة (م. طارق العسيري)",
}: StartMaintenanceModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      dir="rtl"
    >
      <div
        className="bg-white rounded-[16px] overflow-hidden shadow-[0px_24px_48px_-12px_rgba(30,40,26,0.18),0px_8px_16px_-4px_rgba(30,40,26,0.08)] w-full max-w-[540px] border border-neutral-100 animate-in zoom-in-95 duration-200 flex flex-col"
        data-node-id="1:12453"
        data-name="بدء تنفيذ الصيانة"
      >
        {/* Top Decorative Accent Bar (6px Primary Olive Accent) */}
        <div
          className="bg-[#34422a] h-[6px] w-full shrink-0"
          data-node-id="1:12454"
          data-name="Top Subtle Decorative Accent Bar"
        />

        {/* Modal Body Wrapper */}
        <div className="flex flex-col gap-[20px] p-[28px] sm:p-[36px] w-full">
          {/* Header Section */}
          <div
            className="flex items-center justify-between w-full"
            data-node-id="1:12456"
            data-name="Header Section"
          >
            <div className="flex flex-col items-start gap-1">
              <h2
                className="font-cairo font-semibold text-[#181d17] text-[22px] sm:text-[24px] leading-[32px] tracking-[-0.6px]"
                data-node-id="1:12463"
              >
                بدء تنفيذ الصيانة
              </h2>
              <p className="font-cairo text-[12px] text-[#75786f]">
                تأكيد مباشرة العمل الميداني للبلاغ وتحديث الحالة
              </p>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="size-[36px] rounded-[12px] hover:bg-[#f1f5eb] flex items-center justify-center transition-colors cursor-pointer text-[#75786f] hover:text-[#181d17]"
              data-node-id="1:12457"
              aria-label="إغلاق النافذة"
            >
              <div className="relative size-[14px]">
                <Image
                  src="/assets/maintenance/modal/c2552.svg"
                  alt="close"
                  width={14}
                  height={14}
                  className="size-full object-contain"
                />
              </div>
            </button>
          </div>

          {/* Ticket Context Card */}
          <div
            className="bg-[#f1f5eb] rounded-[12px] p-[16px] flex flex-col gap-[12px] w-full border border-[#dfe4db]/60"
            data-node-id="1:12464"
            data-name="Ticket Context Card"
          >
            {/* Top Bar: Report number & Tag */}
            <div
              className="border-b border-[#dfe4db] flex items-center justify-between pb-[10px] w-full"
              data-node-id="1:12465"
            >
              <div className="flex items-center gap-[8px]">
                <span className="font-cairo font-semibold text-[#454840] text-[12px] leading-[18px]">
                  رقم البلاغ:
                </span>
                <span className="font-cairo font-bold text-[#181d17] text-[14px] leading-[20px]">
                  {reportId}
                </span>
              </div>
              <span className="bg-[#dfe4db] px-[10px] py-[2px] rounded-full font-cairo font-bold text-[#454840] text-[11px] leading-[16px]">
                FL-305-YAS
              </span>
            </div>

            {/* Context Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px] gap-y-[10px] w-full pt-[2px]">
              {/* Target Unit */}
              <div className="flex flex-col items-start">
                <span className="font-cairo font-medium text-[#75786f] text-[11px] leading-[16px]">
                  الوحدة المستهدفة
                </span>
                <span className="font-cairo font-semibold text-[#181d17] text-[13px] leading-[20px]">
                  {unitTitle}
                </span>
              </div>

              {/* Owner */}
              <div className="flex flex-col items-start">
                <span className="font-cairo font-medium text-[#75786f] text-[11px] leading-[16px]">
                  مالك الأصل العقاري
                </span>
                <span className="font-cairo font-semibold text-[#181d17] text-[13px] leading-[20px]">
                  {ownerName}
                </span>
              </div>

              {/* Problem Type */}
              <div className="flex flex-col items-start">
                <span className="font-cairo font-medium text-[#75786f] text-[11px] leading-[16px]">
                  نوع المشكلة
                </span>
                <span className="font-cairo font-semibold text-[#181d17] text-[13px] leading-[20px]">
                  {problemType}
                </span>
              </div>

              {/* Assigned Technician */}
              <div className="flex flex-col items-start">
                <span className="font-cairo font-medium text-[#75786f] text-[11px] leading-[16px]">
                  المسؤول المكلف
                </span>
                <span className="font-cairo font-semibold text-[#181d17] text-[13px] leading-[20px]">
                  {technicianName}
                </span>
              </div>
            </div>

            {/* Priority Strip */}
            <div className="border-t border-[#dfe4db] pt-[8px] flex items-center justify-between">
              <span className="font-cairo font-medium text-[#75786f] text-[11px]">
                مستوى الأولوية المقيد في النظام:
              </span>
              <span className="inline-flex items-center gap-[6px] w-fit bg-[#fee2e2] border border-[#fecaca] px-[10px] py-[2px] rounded-full text-[#dc2626] font-cairo font-bold text-[11px]">
                <span className="size-[6px] rounded-full bg-[#dc2626] shrink-0" />
                أولوية عاجلة / فورية
              </span>
            </div>
          </div>

          {/* System Operational Impact & Governance Section */}
          <div
            className="flex flex-col gap-[12px] bg-white rounded-[12px] border border-[#dfe4db] p-[16px]"
            data-node-id="1:12497"
            data-name="System Operational Impact & Governance Section"
          >
            <h3 className="font-cairo font-bold text-[#181d17] text-[13px] leading-[20px]">
              الأثر التشغيلي والحوكمة للمنظومة:
            </h3>

            {/* Governance Points */}
            <div className="flex flex-col gap-[10px]">
              {/* Point 1 */}
              <div className="flex items-start gap-[10px]">
                <div className="relative size-[16px] shrink-0 mt-[2px]">
                  <Image
                    src="/assets/maintenance/modal/def38.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="size-full object-contain"
                  />
                </div>
                <p className="font-cairo text-[12px] text-[#454840] leading-[18px]">
                  <span className="font-semibold text-[#181d17]">تغير حالة البلاغ:</span>{" "}
                  تتحول حالة البلاغ فورياً إلى{" "}
                  <span className="font-bold text-[#b86b14]">«قيد التنفيذ»</span>.
                </p>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-[10px]">
                <div className="relative size-[16px] shrink-0 mt-[2px]">
                  <Image
                    src="/assets/maintenance/modal/8a946.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="size-full object-contain"
                  />
                </div>
                <p className="font-cairo text-[12px] text-[#454840] leading-[18px]">
                  <span className="font-semibold text-[#181d17]">تسجيل الطابع الزمني:</span>{" "}
                  تقييد وتوثيق لحظة المباشرة الفعلية في مقاييس سرعة الاستجابة (SLA).
                </p>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-[10px]">
                <div className="relative size-[16px] shrink-0 mt-[2px]">
                  <Image
                    src="/assets/maintenance/modal/9ea8c.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="size-full object-contain"
                  />
                </div>
                <p className="font-cairo text-[12px] text-[#454840] leading-[18px]">
                  <span className="font-semibold text-[#181d17]">قيد رسمي في السجل:</span>{" "}
                  إدراج إشعار تلقائي بسجل نشاط العقار والمنصة: «بدأ تنفيذ بلاغ الصيانة بواسطة {technicianName}».
                </p>
              </div>

              {/* Point 4 */}
              <div className="flex items-start gap-[10px]">
                <div className="relative size-[16px] shrink-0 mt-[2px]">
                  <Image
                    src="/assets/maintenance/modal/b4434.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="size-full object-contain"
                  />
                </div>
                <p className="font-cairo text-[12px] text-[#454840] leading-[18px]">
                  <span className="font-semibold text-[#181d17]">قفل حجز الوحدة:</span>{" "}
                  الإبقاء على حالة الوحدة في المنظومة{" "}
                  <span className="font-bold text-[#dc2626]">«تحت الصيانة»</span> ومحظورة من التسكين أو الحجز حتى اكتمال الصيانة.
                </p>
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div
            className="flex items-center justify-between gap-[12px] pt-[8px] w-full"
            data-node-id="1:12538"
            data-name="MODAL FOOTER ACTIONS"
          >
            {/* Cancel Button */}
            <button
              type="button"
              onClick={onClose}
              className="px-[20px] py-[10px] rounded-[12px] font-cairo font-semibold text-[#75786f] hover:text-[#181d17] hover:bg-[#f1f5eb] transition-colors cursor-pointer text-[14px]"
              data-node-id="1:12544"
            >
              إلغاء
            </button>

            {/* Primary Confirm Button */}
            <button
              type="button"
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className="bg-[#34422a] hover:bg-[#283420] active:scale-[0.98] transition-all drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center gap-[8px] h-[44px] px-[28px] rounded-[12px] text-white font-cairo font-semibold text-[14px] cursor-pointer shadow-sm"
              data-node-id="1:12539"
            >
              <span>بدء التنفيذ</span>
              <div className="relative size-[16px]">
                <Image
                  src="/assets/maintenance/modal/48036.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="size-full object-contain"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

