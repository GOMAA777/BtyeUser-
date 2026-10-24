"use client";

import { Toaster as SonnerToaster } from "sonner";
import { Check, Clock, AlertCircle, X } from "lucide-react";

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-left"
      dir="rtl"
      closeButton
      richColors={false}
      offset="24px"
      gap={12}
      duration={4500}
      icons={{
        success: (
          <div className="size-[22px] rounded-full bg-[#0E6238] flex items-center justify-center shrink-0 shadow-sm">
            <Check size={13} strokeWidth={3} className="text-white" />
          </div>
        ),
        info: (
          <div className="size-[38px] rounded-full bg-[#EEF5E9] flex items-center justify-center shrink-0 text-[#34422A]">
            <Clock size={19} strokeWidth={1.8} />
          </div>
        ),
        warning: (
          <div className="size-[38px] rounded-full bg-[#FFF8E6] flex items-center justify-center shrink-0 text-[#B58500]">
            <AlertCircle size={19} strokeWidth={1.8} />
          </div>
        ),
        error: (
          <div className="size-[22px] rounded-full bg-[#BA1A1A] flex items-center justify-center shrink-0 shadow-sm">
            <X size={13} strokeWidth={3} className="text-white" />
          </div>
        ),
        close: <X size={12} strokeWidth={2.2} className="text-[#75786F]" />,
      }}
    />
  );
}
