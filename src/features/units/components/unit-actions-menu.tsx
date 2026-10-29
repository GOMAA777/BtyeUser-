"use client";

import Image from "next/image";

interface UnitActionsMenuProps {
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onArchive: () => void;
}

export function UnitActionsMenu({
  onView,
  onEdit,
  onDelete,
  onArchive,
}: UnitActionsMenuProps) {
  return (
    <div
      className="bg-white border border-[#e5e8e2] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] flex flex-col gap-[4px] p-[7px] w-[208px] z-50 text-right select-none animate-in fade-in-50 zoom-in-95 duration-100"
      dir="rtl"
      data-node-id="1:5804"
      data-name="الإجراءات"
    >
      {/* 1. عرض الوحدة (Active Light Green state in Figma) */}
      <button
        type="button"
        onClick={onView}
        className="bg-[#eaf1e8] hover:bg-[#dfeada] rounded-[8px] py-[8px] px-[12px] flex items-center gap-[10px] w-full transition-colors cursor-pointer text-right"
        data-node-id="1:5806"
        data-name="Link"
      >
        <div className="relative size-[16px] shrink-0" data-node-id="1:5809">
          <Image
            src="/assets/units/actions/cd0fa.svg"
            alt="عرض الوحدة"
            width={16}
            height={16}
            className="size-full object-contain"
          />
        </div>
        <span
          className="font-cairo font-bold text-[#4b5940] text-[12px] leading-[16px] whitespace-nowrap"
          data-node-id="1:5808"
        >
          عرض الوحدة
        </span>
      </button>

      {/* 2. تعديل الوحدة */}
      <button
        type="button"
        onClick={onEdit}
        className="hover:bg-[#f6f7f4] rounded-[8px] py-[8px] px-[12px] flex items-center gap-[10px] w-full transition-colors cursor-pointer text-right"
        data-node-id="1:5812"
        data-name="Link"
      >
        <div className="relative size-[16px] shrink-0" data-node-id="1:5815">
          <Image
            src="/assets/units/actions/54ab0.svg"
            alt="تعديل الوحدة"
            width={16}
            height={16}
            className="size-full object-contain"
          />
        </div>
        <span
          className="font-cairo font-semibold text-[#252a24] text-[12px] leading-[16px] whitespace-nowrap"
          data-node-id="1:5814"
        >
          تعديل الوحدة
        </span>
      </button>

      {/* Horizontal Divider */}
      <div
        className="border-t border-[#e5e8e2] my-[2px] w-full h-px"
        data-node-id="1:5817"
        data-name="Horizontal Divider"
      />

      {/* 3. حذف الوحدة (Destructive / Red state) */}
      <button
        type="button"
        onClick={onDelete}
        className="hover:bg-[#fef2f2] rounded-[8px] py-[8px] px-[12px] flex items-center gap-[10px] w-full transition-colors cursor-pointer text-right group"
        data-node-id="1:5818"
        data-name="Link"
      >
        <div className="relative size-[16px] shrink-0" data-node-id="1:5821">
          <Image
            src="/assets/units/actions/c83f7.svg"
            alt="حذف الوحدة"
            width={16}
            height={16}
            className="size-full object-contain"
          />
        </div>
        <span
          className="font-cairo font-semibold text-[#b12515] text-[12px] leading-[16px] whitespace-nowrap"
          data-node-id="1:5820"
        >
          حذف الوحدة
        </span>
      </button>

      {/* 4. أرشفة الوحدة */}
      <button
        type="button"
        onClick={onArchive}
        className="hover:bg-[#f6f7f4] rounded-[8px] py-[8px] px-[12px] flex items-center gap-[10px] w-full transition-colors cursor-pointer text-right"
        data-node-id="1:5823"
        data-name="Link"
      >
        <div className="relative size-[16px] shrink-0" data-node-id="1:5826">
          <Image
            src="/assets/units/actions/48d77.svg"
            alt="أرشفة الوحدة"
            width={16}
            height={16}
            className="size-full object-contain"
          />
        </div>
        <span
          className="font-cairo font-semibold text-[#73786f] text-[12px] leading-[16px] whitespace-nowrap"
          data-node-id="1:5825"
        >
          أرشفة الوحدة
        </span>
      </button>
    </div>
  );
}
