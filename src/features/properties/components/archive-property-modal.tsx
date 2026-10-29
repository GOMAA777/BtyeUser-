"use client";

import { useEffect, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

export interface ArchivePropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void | Promise<void>;
  propertyName?: string;
  propertyCode?: string;
  propertyLocation?: string;
  isArchiving?: boolean;
}

export function ArchivePropertyModal({
  isOpen,
  onClose,
  onConfirm,
  propertyName = "عمارة النخيل",
  propertyCode = "RWQ-NKH-01",
  propertyLocation = "الرياض، حي الياسمين",
  isArchiving = false,
}: ArchivePropertyModalProps) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  // Handle escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isArchiving) {
        onClose();
      }
    },
    [onClose, isArchiving]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen, handleKeyDown]);

  if (!mounted || !isOpen) return null;

  // Render via React Portal to document.body to cover the ENTIRE viewport
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="archive-modal-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 w-screen h-screen"
      data-node-id="1:4251"
      data-name="ArchivePropertyModalBackdrop"
    >
      {/* Full-Screen Dimmed Backdrop Overlay (Figma Node 1:4251 / Rectangle 104) */}
      <div
        className="fixed inset-0 w-full h-full bg-black/40 backdrop-blur-[1px] transition-opacity animate-in fade-in duration-200"
        onClick={() => !isArchiving && onClose()}
        aria-hidden="true"
      />

      {/* Confirmation Modal Card (Figma Node 1:4252) */}
      <div
        className="relative z-10 w-full max-w-[480px] bg-white rounded-[16px] border border-[#e5e8e2] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] animate-in fade-in zoom-in-95 duration-200 overflow-hidden"
        data-node-id="1:4252"
        data-name="Modal Dialog Card"
      >
        {/* Top Decorative Accent Bar (Figma Node 1:4253) */}
        <div
          className="h-[6px] w-full shrink-0"
          data-node-id="1:4253"
          data-name="Top Decorative Accent Bar"
        />

        {/* Close Button on top-left (Figma Node 1:4309) */}
        <button
          type="button"
          onClick={onClose}
          disabled={isArchiving}
          aria-label="إغلاق النافذة"
          className="absolute top-[20px] left-[20px] size-[32px] rounded-full flex items-center justify-center text-[#5c6456] hover:bg-[#f6f8f4] active:scale-95 transition-all cursor-pointer z-20 disabled:opacity-50"
          data-node-id="1:4309"
          data-name="Button - إغلاق النافذة"
        >
          <div className="size-[16px] flex items-center justify-center" data-node-id="1:4310">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 4L4 12M4 4L12 12"
                stroke="#5C6456"
                strokeWidth="1.46667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>

        {/* Modal Content Body (Figma Node 1:4254) */}
        <div
          className="p-[28px] pt-[20px] flex flex-col gap-[24px] items-center text-center w-full"
          data-node-id="1:4254"
          data-name="Modal Content Body"
        >
          {/* Header & Icon Section (Figma Node 1:4255) */}
          <div
            className="flex flex-col items-center w-full"
            data-node-id="1:4255"
            data-name="Header & Icon Section"
          >
            {/* Badge Icon Container (Figma Node 1:4257) */}
            <div
              className="size-[64px] rounded-[16px] bg-[#f6f8f4] border border-[#d5dfcf]/80 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center shrink-0 mb-[16px]"
              data-node-id="1:4257"
              data-name="Badge Icon Container"
            >
              <div
                className="size-[32px] flex items-center justify-center text-[#4B5940]"
                data-node-id="1:4258"
                data-name="SVG - Elegant Archive Box Icon"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="4"
                    y="10.6667"
                    width="24"
                    height="17.3333"
                    stroke="#4B5940"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.33333 4H28.6667C29.7705 4 30.6667 4.89617 30.6667 6V8.66667C30.6667 9.7705 29.7705 10.6667 28.6667 10.6667H3.33333C2.2295 10.6667 1.33333 9.7705 1.33333 8.66667V6C1.33333 4.89617 2.2295 4 3.33333 4V4"
                    stroke="#4B5940"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.3333 16H18.6667"
                    stroke="#4B5940"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Title (Figma Node 1:4262) */}
            <h2
              id="archive-modal-title"
              className="font-cairo font-bold text-[24px] leading-[32px] tracking-[-0.6px] text-[#1e231b]"
              data-node-id="1:4262"
            >
              أرشفة العقار؟
            </h2>

            {/* Target Property Meta Pill (Figma Node 1:4264) */}
            <div
              dir="rtl"
              className="mt-[12px] bg-[#f8f9f6] border border-[#e5e8e2] rounded-[9999px] px-[15px] py-[7px] flex items-center gap-[8px] shrink-0"
              data-node-id="1:4264"
              data-name="Target Property Meta Pill"
            >
              {/* Building Icon */}
              <div
                className="size-[16px] flex items-center justify-center shrink-0"
                data-node-id="1:4275"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 14H14M3.33333 14V4.66667L8.66667 2V14M12.6667 14V7.33333L8.66667 4.66667M6 6H6.66667M6 8.66667H6.66667M6 11.3333H6.66667"
                    stroke="#4B5940"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Property Name */}
              <span
                className="font-cairo font-semibold text-[12px] leading-[16px] text-[#1e231b] whitespace-nowrap"
                data-node-id="1:4274"
              >
                {propertyName}
              </span>

              {/* Dot Separator */}
              <span
                className="font-cairo font-semibold text-[12px] leading-[16px] text-[#5c6456]/40 select-none"
                data-node-id="1:4272"
              >
                •
              </span>

              {/* Property Code */}
              <span
                className="font-cairo font-normal text-[12px] leading-[16px] text-[#5c6456] whitespace-nowrap"
                data-node-id="1:4270"
                dir="ltr"
              >
                {propertyCode}
              </span>

              {/* Dot Separator */}
              <span
                className="font-cairo font-semibold text-[12px] leading-[16px] text-[#5c6456]/40 select-none"
                data-node-id="1:4268"
              >
                •
              </span>

              {/* Location */}
              <span
                className="font-cairo font-normal text-[12px] leading-[16px] text-[#5c6456] whitespace-nowrap"
                data-node-id="1:4266"
              >
                {propertyLocation}
              </span>
            </div>

            {/* Primary Explanation Text (Figma Node 1:4283) */}
            <div
              className="max-w-[390px] mt-[15px]"
              data-node-id="1:4283"
              data-name="Primary Explanation Text"
            >
              <p
                className="font-cairo font-normal text-[14.5px] leading-[23.56px] text-[#5c6456] text-center"
                data-node-id="1:4284"
              >
                سيتم إخفاء العقار من القوائم النشطة ولوحة الحجوزات، مع الاحتفاظ بكافة بياناته وسجلاته السابقة في النظام.
              </p>
            </div>
          </div>

          {/* Reassurance / Safety Notice Callout Box (Figma Node 1:4285) */}
          <div
            dir="rtl"
            className="w-full bg-[#f6f8f4]/70 rounded-[12px] p-[16px] flex items-start gap-[12px] text-right"
            data-node-id="1:4285"
            data-name="Reassurance / Safety Notice Callout Box"
          >
            {/* Info Icon Badge (Figma Node 1:4294) */}
            <div
              className="size-[20px] rounded-full bg-[#4b5940]/15 flex items-center justify-center shrink-0 mt-[2px]"
              data-node-id="1:4294"
              data-name="Overlay"
            >
              <div className="size-[14px] flex items-center justify-center" data-node-id="1:4295">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M1.16667 7C1.16667 10.2195 3.7805 12.8333 7 12.8333C10.2195 12.8333 12.8333 10.2195 12.8333 7C12.8333 3.7805 10.2195 1.16667 7 1.16667C3.7805 1.16667 1.16667 3.7805 1.16667 7V7"
                    stroke="#4B5940"
                    strokeWidth="1.45833"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 9.33333V7M7 4.66667H7.00583"
                    stroke="#4B5940"
                    strokeWidth="1.45833"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Safety Text Column */}
            <div className="flex flex-col gap-[4px] text-right">
              <h4
                className="font-cairo font-bold text-[14px] leading-[20px] text-[#2a3324]"
                data-node-id="1:4288"
              >
                لن يتم حذف أية بيانات
              </h4>
              <p
                className="font-cairo font-normal text-[12px] leading-[20px] text-[#5c6456]"
                data-node-id="1:4290"
              >
                يمكنك استعادة تفعيل العقار واستعراض تقاريره وتاريخ العمليات في أي وقت من قسم{" "}
                <span className="font-semibold text-[#36412e]" data-node-id="1:4291">
                  العقارات المؤرشفة
                </span>
                .
              </p>
            </div>
          </div>

          {/* Actions / Footer Buttons (Figma Node 1:4299) */}
          <div
            dir="ltr"
            className="flex items-center gap-[12px] pt-[8px] w-full"
            data-node-id="1:4299"
            data-name="Actions / Footer Buttons"
          >
            {/* Primary Archive Action Button (Left side) (Figma Node 1:4300) */}
            <button
              type="button"
              onClick={onConfirm}
              disabled={isArchiving}
              className="flex-1 h-[44px] bg-[#4b5940] hover:bg-[#3d4934] active:scale-[0.99] text-white rounded-[12px] px-[20px] py-[12px] flex items-center justify-center gap-[8px] font-cairo font-bold text-[14px] leading-[20px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-all cursor-pointer disabled:opacity-50"
              data-node-id="1:4300"
              data-name="Button - Primary Archive Action"
            >
              <span data-node-id="1:4302">
                {isArchiving ? "جارٍ الأرشفة..." : "أرشفة العقار"}
              </span>
              <div className="size-[16px] shrink-0" data-node-id="1:4303">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="2"
                    y="5.33333"
                    width="12"
                    height="8.66667"
                    stroke="white"
                    strokeWidth="1.46667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.66667 2H14.3333C14.8852 2 15.3333 2.44808 15.3333 3V4.33333C15.3333 4.88525 14.8852 5.33333 14.3333 5.33333H1.66667C1.11475 5.33333 0.666667 4.88525 0.666667 4.33333V3C0.666667 2.44808 1.11475 2 1.66667 2V2"
                    stroke="white"
                    strokeWidth="1.46667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.66667 8H9.33333"
                    stroke="white"
                    strokeWidth="1.46667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>

            {/* Cancel Button (Right side) (Figma Node 1:4307) */}
            <button
              type="button"
              onClick={onClose}
              disabled={isArchiving}
              className="w-[128px] h-[44px] bg-white border border-[#e5e8e2] hover:bg-[#f8faf7] active:scale-[0.99] rounded-[12px] px-[21px] py-[12px] flex items-center justify-center font-cairo font-semibold text-[14px] leading-[20px] text-[#5c6456] transition-all cursor-pointer disabled:opacity-50"
              data-node-id="1:4307"
              data-name="Button - Cancel Secondary Action"
            >
              <span data-node-id="1:4308">إلغاء</span>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
