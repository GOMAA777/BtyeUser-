"use client";

import Image from "next/image";

interface PropertyActionsMenuProps {
  onView: () => void;
  onEdit: () => void;
  onArchive: () => void;
}

export function PropertyActionsMenu({ onView, onEdit, onArchive }: PropertyActionsMenuProps) {
  return (
    <div
      className="bg-white border border-[#e5e8e2] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] flex flex-col gap-[4px] p-[7px] w-[208px] z-50 text-right select-none animate-in fade-in-50 zoom-in-95 duration-100"
      dir="rtl"
      data-node-id="1:3938"
      data-name="Background+Border"
    >
      {/* 1. View Property Action (Active Light Green State) */}
      <button
        type="button"
        onClick={onView}
        className="bg-[#eaf1e8] hover:bg-[#dfeada] rounded-[8px] py-[8px] px-[12px] flex items-center gap-[10px] w-full transition-colors cursor-pointer text-right"
        data-node-id="1:3940"
        data-name="Link"
      >
        <div className="relative size-[16px] shrink-0" data-node-id="1:3943">
          <Image
            src="/assets/properties/action-view-eye.svg"
            alt="عرض العقار"
            width={16}
            height={16}
            className="size-full object-contain"
          />
        </div>
        <span
          className="font-cairo font-bold text-[#4b5940] text-[12px] leading-[16px] whitespace-nowrap"
          data-node-id="1:3942"
        >
          عرض العقار
        </span>
      </button>

      {/* 2. Edit Property Action */}
      <button
        type="button"
        onClick={onEdit}
        className="hover:bg-[#f6f7f4] rounded-[8px] py-[8px] px-[12px] flex items-center gap-[10px] w-full transition-colors cursor-pointer text-right"
        data-node-id="1:3946"
        data-name="Link"
      >
        <div className="relative size-[16px] shrink-0" data-node-id="1:3949">
          <Image
            src="/assets/properties/action-edit-pencil.svg"
            alt="تعديل العقار"
            width={16}
            height={16}
            className="size-full object-contain"
          />
        </div>
        <span
          className="font-cairo font-semibold text-[#252a24] text-[12px] leading-[16px] whitespace-nowrap"
          data-node-id="1:3948"
        >
          تعديل العقار
        </span>
      </button>

      {/* Horizontal Divider */}
      <div
        className="border-t border-[#e5e8e2] my-[2px] w-full"
        data-node-id="1:3951"
        data-name="Horizontal Divider"
      />

      {/* 3. Archive Property Action */}
      <button
        type="button"
        onClick={onArchive}
        className="hover:bg-[#fef2f2] rounded-[8px] py-[8px] px-[12px] flex items-center gap-[10px] w-full transition-colors cursor-pointer text-right group"
        data-node-id="1:3952"
        data-name="Link"
      >
        <div className="relative size-[16px] shrink-0" data-node-id="1:3955">
          <Image
            src="/assets/properties/action-archive-box.svg"
            alt="أرشفة العقار"
            width={16}
            height={16}
            className="size-full object-contain"
          />
        </div>
        <span
          className="font-cairo font-semibold text-[#73786f] group-hover:text-[#ba1a1a] text-[12px] leading-[16px] whitespace-nowrap transition-colors"
          data-node-id="1:3954"
        >
          أرشفة العقار
        </span>
      </button>
    </div>
  );
}
