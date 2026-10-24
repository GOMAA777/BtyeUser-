"use client";

import React from "react";
import { toast as sonnerToast, type ExternalToast } from "sonner";
import { Check, Clock, Info, X } from "lucide-react";

export interface ShowToastOptions extends ExternalToast {
  description?: string;
}

/**
 * Image 1: Single-line Success Toast
 * Soft mint pill, green filled checkmark circle, dark green text.
 */
export function SuccessToast({
  id,
  message,
}: {
  id: string | number;
  message: string;
}) {
  return (
    <div
      dir="rtl"
      className="relative flex items-center gap-[10px] bg-[#EDFAF0] border border-[#A4E7B8] rounded-[16px] px-[16px] py-[11px] shadow-[0px_4px_16px_rgba(14,98,56,0.08)] w-fit min-w-[260px] max-w-[calc(100vw-48px)] font-cairo select-none"
    >
      <div className="size-[22px] rounded-full bg-[#0E6238] flex items-center justify-center shrink-0 shadow-sm">
        <Check size={13} strokeWidth={3} className="text-white" />
      </div>
      <span className="font-cairo font-bold text-[13.5px] leading-[20px] text-[#0E6238] whitespace-nowrap">
        {message}
      </span>
      <button
        type="button"
        onClick={() => sonnerToast.dismiss(id)}
        aria-label="إغلاق التنبيه"
        className="ms-[6px] text-[#0E6238]/60 hover:text-[#0E6238] transition-colors p-[2px] cursor-pointer"
      >
        <X size={13} strokeWidth={2.5} />
      </button>
    </div>
  );
}

/**
 * Image 2: Announcement & Under Development Card Toast
 * Floating white card, top-left close button inside card, sage info badge,
 * bold title and muted description with zero clipping or text overlap.
 */
export function DevelopmentToast({
  id,
  featureName,
  title,
  description,
}: {
  id: string | number;
  featureName?: string;
  title?: string;
  description?: string;
}) {
  const displayTitle = title || `صفحة "${featureName}" قيد الإنشاء والتطوير`;
  const displayDescription =
    description ||
    "يجري العمل على إتاحة هذا التبويب بجميع بياناته وتفاصيله قريباً ضمن التحديث القادم لمنظومة أبراج.";

  return (
    <div
      dir="rtl"
      className="relative flex items-start gap-[14px] bg-white border border-[#DFE4DB] rounded-[16px] p-[16px] sm:p-[18px] shadow-[0px_10px_30px_rgba(0,0,0,0.08)] w-[380px] sm:w-[410px] max-w-[calc(100vw-48px)] font-cairo select-none"
    >
      {/* 1. Circular Close Button on Top-Left Corner (inside card, zero offscreen overflow) */}
      <button
        type="button"
        onClick={() => sonnerToast.dismiss(id)}
        aria-label="إغلاق التنبيه"
        className="absolute top-[12px] left-[12px] size-[24px] rounded-full bg-[#F5F7F3] hover:bg-[#E5EAE0] border border-[#DFE4DB] flex items-center justify-center text-[#75786F] hover:text-[#181D17] transition-all cursor-pointer z-10"
      >
        <X size={13} strokeWidth={2.2} />
      </button>

      {/* 2. Info Icon in Sage Circle on the Right (RTL start) matching reference */}
      <div className="size-[38px] rounded-full bg-[#EEF5E9] border border-[#D5E0CF] flex items-center justify-center shrink-0 text-[#303A2C] mt-[2px]">
        <Info size={19} strokeWidth={2.2} />
      </div>

      {/* 3. Text Body on the Left (aligned right, proper spacing, pe-6 to avoid close button) */}
      <div className="flex flex-col gap-[4px] text-right flex-1 min-w-0 pe-[22px]">
        <h4 className="font-cairo font-bold text-[14px] leading-[22px] text-[#181D17]">
          {displayTitle}
        </h4>
        <p className="font-cairo font-medium text-[12px] leading-[19px] text-[#75786F]">
          {displayDescription}
        </p>
      </div>
    </div>
  );
}

/**
 * Error Toast matching the design system
 */
export function ErrorToast({
  id,
  message,
}: {
  id: string | number;
  message: string;
}) {
  return (
    <div
      dir="rtl"
      className="relative flex items-center gap-[10px] bg-[#FFF0F0] border border-[#FFCDD2] rounded-[16px] px-[16px] py-[11px] shadow-[0px_4px_16px_rgba(186,26,26,0.08)] w-fit min-w-[260px] max-w-[calc(100vw-48px)] font-cairo select-none"
    >
      <div className="size-[22px] rounded-full bg-[#BA1A1A] flex items-center justify-center shrink-0 shadow-sm">
        <X size={13} strokeWidth={3} className="text-white" />
      </div>
      <span className="font-cairo font-bold text-[13.5px] leading-[20px] text-[#BA1A1A] whitespace-nowrap">
        {message}
      </span>
      <button
        type="button"
        onClick={() => sonnerToast.dismiss(id)}
        aria-label="إغلاق التنبيه"
        className="ms-[6px] text-[#BA1A1A]/60 hover:text-[#BA1A1A] transition-colors p-[2px] cursor-pointer"
      >
        <X size={13} strokeWidth={2.5} />
      </button>
    </div>
  );
}

export const showToast = {
  success: (message: string, options?: ShowToastOptions) => {
    return sonnerToast.custom((t) => <SuccessToast id={t} message={message} />, {
      duration: 4000,
      ...options,
    });
  },

  underDevelopment: (featureName: string, options?: ShowToastOptions) => {
    return sonnerToast.custom((t) => <DevelopmentToast id={t} featureName={featureName} />, {
      duration: 6000,
      ...options,
    });
  },

  info: (title: string, description?: string, options?: ShowToastOptions) => {
    return sonnerToast.custom(
      (t) => <DevelopmentToast id={t} title={title} description={description} />,
      {
        duration: 6000,
        ...options,
      }
    );
  },

  error: (message: string, options?: ShowToastOptions) => {
    return sonnerToast.custom((t) => <ErrorToast id={t} message={message} />, {
      duration: 4500,
      ...options,
    });
  },
};

const customToast = Object.assign(
  (message: any, data?: any) => sonnerToast(message, data),
  sonnerToast,
  {
    success: (message: any, options?: any) => {
      if (typeof message === "string") {
        return sonnerToast.custom((t) => <SuccessToast id={t} message={message} />, {
          duration: 4000,
          ...options,
        });
      }
      return sonnerToast.success(message, options);
    },
    error: (message: any, options?: any) => {
      if (typeof message === "string") {
        return sonnerToast.custom((t) => <ErrorToast id={t} message={message} />, {
          duration: 4500,
          ...options,
        });
      }
      return sonnerToast.error(message, options);
    },
    info: (title: any, options?: any) => {
      if (typeof title === "string" && options?.description) {
        return sonnerToast.custom(
          (t) => <DevelopmentToast id={t} title={title} description={options.description} />,
          {
            duration: 6000,
            ...options,
          }
        );
      }
      return sonnerToast.info(title, options);
    },
    underDevelopment: (featureName: string, options?: any) => {
      return sonnerToast.custom((t) => <DevelopmentToast id={t} featureName={featureName} />, {
        duration: 6000,
        ...options,
      });
    },
  }
);

export { customToast as toast };
