"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

export interface DeletePropertyImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void | Promise<void>;
  imageSrc?: string;
  fileName?: string;
  badgeText?: string;
  title?: string;
  description?: string;
  warningCaption?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  isDeleting?: boolean;
}

export function DeletePropertyImageModal({
  isOpen,
  onClose,
  onConfirm,
  imageSrc = "/assets/properties/delete-modal-preview.png",
  fileName = "villa-luxury-facade-render-01.jpg",
  badgeText = "صورة العقار الرئيسية",
  title = "حذف الصورة؟",
  description = "هل أنت متأكد من حذف هذه الصورة من العقار؟",
  warningCaption = "لن تتمكن من استعادة الصورة بعد حذفها، ويمكنك رفع صورة بديلة في أي وقت.",
  confirmButtonText = "حذف الصورة",
  cancelButtonText = "إلغاء",
  isDeleting = false,
}: DeletePropertyImageModalProps) {
  // Handle escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isDeleting) {
        onClose();
      }
    },
    [onClose, isDeleting]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      data-node-id="1:3899"
      data-name="DeletePropertyImageModalBackdrop"
    >
      {/* Dimmed Backdrop Overlay (Figma Node 1:3899 / Rectangle 104) */}
      <div
        className="fixed inset-0 bg-black/40 transition-opacity animate-in fade-in duration-200"
        onClick={() => !isDeleting && onClose()}
        aria-hidden="true"
      />

      {/* Confirmation Modal Card (Figma Node 1:3900) */}
      <div
        dir="ltr"
        className="relative z-10 w-full max-w-[480px] bg-white rounded-[16px] border border-[#e5e8e2] p-[29px] flex flex-col gap-[20px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] animate-in fade-in zoom-in-95 duration-200 overflow-hidden"
        data-node-id="1:3900"
        data-name="ConfirmationModalCard"
      >
        {/* Subtle inner boundary shadow */}
        <div
          className="absolute inset-[-1px] rounded-[16px] pointer-events-none shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
          data-node-id="1:3901"
          data-name="ConfirmationModalCard:shadow"
        />

        {/* 1. Modal Header Section (Figma Node 1:3902) */}
        <div
          className="relative shrink-0 w-full flex items-start justify-between"
          data-node-id="1:3902"
          data-name="Modal Header Section"
        >
          {/* Left / Center Group: Text + Danger Badge */}
          <div
            className="flex items-start gap-[14px]"
            data-node-id="1:3903"
            data-name="Warning Icon and Title Group (Top Right in RTL)"
          >
            {/* Header Text (Figma Node 1:3904) */}
            <div
              className="flex flex-col gap-[4px] text-right"
              data-node-id="1:3904"
              data-name="Header Text"
            >
              <h2
                id="delete-modal-title"
                className="font-cairo font-bold text-[20px] leading-[27.5px] text-[#252820]"
                data-node-id="1:3906"
              >
                {title}
              </h2>
              <p
                className="font-cairo font-normal text-[14px] leading-[22.75px] text-[#74776f]"
                data-node-id="1:3908"
              >
                {description}
              </p>
            </div>

            {/* Danger / Warning Icon Badge (Figma Node 1:3909) */}
            <div
              className="size-[48px] rounded-full bg-[#fff1f2] border border-[#ffe4e6] flex items-center justify-center shrink-0"
              data-node-id="1:3909"
              data-name="Danger/Warning Icon Badge"
            >
              <div className="size-[24px] flex items-center justify-center" data-node-id="1:3910">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M19 7L18.133 19.142C18.0585 20.1888 17.1875 21 16.138 21H7.862C6.81251 21 5.94151 20.1888 5.867 19.142L5 7M10 11V17M14 11V17M15 7V4C15 3.44808 14.5519 3 14 3H10C9.44808 3 9 3.44808 9 4V7M4 7H20"
                    stroke="#E11D48"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Close Button on far right (Figma Node 1:3912) */}
          <button
            type="button"
            onClick={onClose}
            disabled={isDeleting}
            aria-label="إغلاق النافذة"
            className="p-[8px] rounded-[8px] text-[#74776f] hover:bg-[#f1f5eb] active:scale-95 transition-all cursor-pointer shrink-0 disabled:opacity-50"
            data-node-id="1:3912"
            data-name="Button - إغلاق النافذة"
          >
            <div className="size-[20px] flex items-center justify-center" data-node-id="1:3913">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M5 15L15 5M5 5L15 15"
                  stroke="#74776F"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* 2. ImagePreviewCard (Figma Node 1:3915) */}
        <div
          className="flex flex-col gap-[10px] w-full"
          data-node-id="1:3915"
          data-name="ImagePreviewCard"
        >
          {/* Visual Card Outer Container */}
          <div
            className="bg-[rgba(241,245,235,0.6)] border border-[#e5e8e2] rounded-[12px] p-[9px] w-full overflow-hidden"
            data-node-id="1:3916"
            data-name="Visual Card"
          >
            {/* Inner photo wrapper */}
            <div
              className="relative h-[227.25px] w-full rounded-[8px] overflow-hidden bg-[#f5f5f5] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]"
              data-node-id="1:3917"
              data-name="Background+Shadow"
            >
              {/* Actual Image */}
              <div
                className="absolute inset-0 size-full"
                data-node-id="1:3918"
                data-name="صورة العقار الرئيسية المعروضة للحذف"
              >
                <Image
                  src={imageSrc}
                  alt={badgeText}
                  fill
                  className="object-cover"
                  sizes="(max-width: 480px) 100vw, 420px"
                  priority
                />
              </div>

              {/* Badges Overlay Gradient (Figma Node 1:3919) */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] via-transparent to-transparent pointer-events-none"
                data-node-id="1:3919"
                data-name="Badges Overlay"
              />

              {/* Main Property Badge (Top Right) (Figma Node 1:3920) */}
              <div
                className="absolute top-[10px] right-[10px] bg-[rgba(48,58,44,0.85)] border border-[rgba(255,255,255,0.1)] rounded-[6px] px-[11px] py-[5px] flex items-center gap-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] backdrop-blur-[2px]"
                data-node-id="1:3920"
                data-name="Main Property Badge"
              >
                <span
                  className="font-cairo font-semibold text-[12px] leading-[16px] text-white whitespace-nowrap"
                  data-node-id="1:3921"
                >
                  {badgeText}
                </span>
                {/* Green Indicator Dot (Node 1:3922) */}
                <div
                  className="size-[6px] rounded-full bg-[#34d399] shrink-0"
                  data-node-id="1:3922"
                  data-name="Background"
                />
              </div>

              {/* Filename Tag (Bottom Right) (Figma Node 1:3923) */}
              <div
                className="absolute bottom-[10px] right-[10px] bg-[rgba(0,0,0,0.5)] rounded-[4px] px-[8px] py-[2px] max-w-[calc(100%-20px)] truncate"
                data-node-id="1:3923"
                data-name="Filename Tag"
              >
                <span
                  className="font-cairo font-normal text-[11px] leading-[16.5px] text-[rgba(255,255,255,0.9)] truncate block"
                  data-node-id="1:3924"
                  dir="ltr"
                >
                  {fileName}
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Warning Caption (Figma Node 1:3925) */}
          <div
            className="flex items-center justify-end gap-[6px] px-[4px] w-full"
            data-node-id="1:3925"
            data-name="Secondary Warning Caption"
          >
            {/* Warning Text (Figma Node 1:3927) */}
            <p
              className="font-cairo font-normal text-[12px] leading-[19.5px] text-[#74776f] text-right"
              data-node-id="1:3927"
              dir="rtl"
            >
              {warningCaption}
            </p>
            {/* Warning Icon (Figma Node 1:3928) */}
            <div className="size-[16px] shrink-0 text-[#d97706]" data-node-id="1:3928">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M8.66667 10.6667H8V8H7.33333M8 5.33333H8.00667M14 8C14 11.3115 11.3115 14 8 14C4.68851 14 2 11.3115 2 8C2 4.68851 4.68851 2 8 2C11.3115 2 14 4.68851 14 8L8.66667 10.6667"
                  stroke="#D97706"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* 3. ActionButtons (Figma Node 1:3930) */}
        <div
          className="flex items-center gap-[12px] pt-[8px] w-full"
          data-node-id="1:3930"
          data-name="ActionButtons"
        >
          {/* Primary Destructive Action Button (Left side) (Figma Node 1:3931) */}
          <button
            type="button"
            onClick={onConfirm}
            disabled={isDeleting}
            className="flex-1 h-[44px] bg-[#dc2626] hover:bg-[#b91c1c] active:scale-[0.99] text-white rounded-[12px] px-[20px] py-[12px] flex items-center justify-center gap-[8px] font-cairo font-bold text-[14px] leading-[20px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-all cursor-pointer disabled:opacity-50"
            data-node-id="1:3931"
            data-name="Button - Primary Destructive Action"
          >
            <span data-node-id="1:3933">
              {isDeleting ? "جارٍ الحذف..." : confirmButtonText}
            </span>
            <div className="size-[16px] shrink-0" data-node-id="1:3934">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12.6667 4.66667L12.0887 12.7613C12.039 13.4592 11.4583 14 10.7587 14H5.24133C4.54168 14 3.96101 13.4592 3.91133 12.7613L3.33333 4.66667M6.66667 7.33333V11.3333M9.33333 7.33333V11.3333M10 4.66667V2.66667C10 2.29872 9.70128 2 9.33333 2H6.66667C6.29872 2 6 2.29872 6 2.66667V4.66667M2.66667 4.66667H13.3333"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

          {/* Secondary Cancel Button (Right side) (Figma Node 1:3936) */}
          <button
            type="button"
            onClick={onClose}
            disabled={isDeleting}
            className="min-w-[100px] h-[44px] border border-[#e5e8e2] bg-white hover:bg-[#f8faf7] active:scale-[0.99] text-[#4b5940] rounded-[12px] px-[35px] py-[12px] flex items-center justify-center font-cairo font-semibold text-[14px] leading-[20px] transition-all cursor-pointer disabled:opacity-50"
            data-node-id="1:3936"
            data-name="Secondary Cancel Button"
          >
            <span data-node-id="1:3937">{cancelButtonText}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
