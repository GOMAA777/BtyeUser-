"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface MaintenanceActionsMenuProps {
  taskId: string;
  isOpen: boolean;
  onClose: () => void;
  onViewDetails?: () => void;
  onAssignStaff?: () => void;
  onCreateReport?: () => void;
  onViewActivity?: () => void;
  position?: "bottom-left" | "bottom-right";
}

export function MaintenanceActionsMenu({
  taskId,
  isOpen,
  onClose,
  onViewDetails,
  onAssignStaff,
  onCreateReport,
  onViewActivity,
  position = "bottom-left",
}: MaintenanceActionsMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className={`absolute z-50 bg-white border border-[#e5e8e2] border-solid flex flex-col gap-[4px] p-[7px] rounded-[12px] w-[208px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] text-right select-none animate-in fade-in-50 zoom-in-95 duration-100 ${
        position === "bottom-left" ? "top-full left-0 mt-1" : "top-full right-0 mt-1"
      }`}
      data-node-id="1:12546"
      data-name="الاجراءات"
      dir="rtl"
    >
      {/* 1. تفاصيل العملية */}
      <Link
        href={`/maintenance/${taskId}`}
        onClick={() => {
          onViewDetails?.();
          onClose();
        }}
        className="bg-[#eaf1e8] hover:bg-[#dfeada] transition-colors h-[32px] px-[12px] flex items-center gap-[10px] rounded-[8px] w-full group cursor-pointer text-right"
        data-node-id="1:12548"
      >
        <div className="size-[16px] relative shrink-0">
          <Image
            src="/assets/maintenance/actions/f2ed2.svg"
            alt="تفاصيل العملية"
            width={16}
            height={16}
            className="size-full object-contain"
          />
        </div>
        <span className="font-cairo font-bold text-[#4b5940] text-[12px] leading-[16px] whitespace-nowrap">
          تفاصيل العملية
        </span>
      </Link>

      {/* 2. تعيين مسئول */}
      <button
        type="button"
        onClick={() => {
          onAssignStaff?.();
          onClose();
        }}
        className="hover:bg-[#f6f7f4] transition-colors h-[32px] px-[12px] flex items-center gap-[10px] rounded-[8px] w-full text-right cursor-pointer"
        data-node-id="1:12554"
      >
        <div className="size-[16px] relative shrink-0 flex items-center justify-center">
          <Image
            src="/assets/maintenance/actions/79c38.svg"
            alt="تعيين مسئول"
            width={18}
            height={14}
            className="size-full object-contain"
          />
        </div>
        <span className="font-cairo font-semibold text-[#252a24] text-[12px] leading-[16px] whitespace-nowrap">
          تعيين مسئول
        </span>
      </button>

      {/* 3. انشاء بلاغ */}
      <button
        type="button"
        onClick={() => {
          onCreateReport?.();
          onClose();
        }}
        className="hover:bg-[#f6f7f4] transition-colors h-[32px] px-[12px] flex items-center gap-[10px] rounded-[8px] w-full text-right cursor-pointer"
        data-node-id="1:12559"
      >
        <div className="size-[14px] relative shrink-0 flex items-center justify-center">
          <Image
            src="/assets/maintenance/actions/e268f.svg"
            alt="انشاء بلاغ"
            width={14}
            height={14}
            className="size-full object-contain"
          />
        </div>
        <span className="font-cairo font-semibold text-[#252a24] text-[12px] leading-[16px] whitespace-nowrap">
          انشاء بلاغ
        </span>
      </button>

      {/* 4. عرض سجل النشاط */}
      <button
        type="button"
        onClick={() => {
          onViewActivity?.();
          onClose();
        }}
        className="hover:bg-[#f6f7f4] transition-colors h-[32px] px-[12px] flex items-center gap-[10px] rounded-[8px] w-full text-right cursor-pointer"
        data-node-id="1:12564"
      >
        <div className="size-[16px] relative shrink-0 flex items-center justify-center">
          <Image
            src="/assets/maintenance/actions/84e64.svg"
            alt="عرض سجل النشاط"
            width={16}
            height={16}
            className="size-full object-contain"
          />
        </div>
        <span className="font-cairo font-semibold text-[#252a24] text-[12px] leading-[16px] whitespace-nowrap">
          عرض سجل النشاط
        </span>
      </button>
    </div>
  );
}
