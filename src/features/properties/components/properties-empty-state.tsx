"use client";

import Image from "next/image";
import Link from "next/link";
import { showToast } from "@/lib/toast";

interface PropertiesEmptyStateProps {
  onAddProperty?: () => void;
}

export function PropertiesEmptyState({ onAddProperty }: PropertiesEmptyStateProps) {
  const handleAdd = () => {
    if (onAddProperty) {
      onAddProperty();
    } else {
      showToast.info("إضافة عقار جديد", "جاري فتح نموذج إضافة عقار جديد إلى المنظومة.");
    }
  };

  return (
    <div
      className="bg-white border border-[#e5e8e2] drop-shadow-[0px_2px_5px_rgba(0,0,0,0.03)] rounded-[16px] min-h-[540px] px-[24px] md:px-[49px] py-[80px] md:py-[133px] flex flex-col items-center justify-center text-center w-full"
      data-node-id="1:1910"
      data-name="Empty State Container"
    >
      {/* 1. Architectural Line Icon in Soft Circular Background */}
      <div
        className="mb-[24px]"
        data-node-id="1:1911"
        data-name="Icon: Clean minimal architectural line icon in soft circular background:margin"
      >
        <div
          className="bg-[#eaf1e8] border border-[#d5e3d2] size-[96px] rounded-full flex items-center justify-center p-px shadow-2xs"
          data-node-id="1:1912"
          data-name="Icon: Clean minimal architectural line icon in soft circular background"
        >
          <div className="relative size-[48px]" data-node-id="1:1913">
            <Image
              src="/assets/properties/empty-state-building.svg"
              alt="عقار"
              width={48}
              height={48}
              priority
              className="size-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* 2. Heading 3 - Title */}
      <div
        className="mb-[12px]"
        data-node-id="1:1915"
        data-name="Heading 3 - Title:margin"
      >
        <h3
          className="font-cairo font-bold text-[#252a24] text-[24px] leading-[32px] text-center"
          data-node-id="1:1917"
        >
          لم تتم إضافة أي عقارات بعد
        </h3>
      </div>

      {/* 3. Subtitle */}
      <div
        className="max-w-[448px] mb-[32px]"
        data-node-id="1:1918"
        data-name="Subtitle:margin"
      >
        <p
          className="font-cairo font-medium text-[#73786f] text-[16px] leading-[26px] text-center"
          data-node-id="1:1920"
        >
          أضف عقارك الأول للبدء في إدارة الوحدات والحجوزات والتشغيل.
        </p>
      </div>

      {/* 4. Primary CTA Button */}
      {onAddProperty ? (
        <button
          type="button"
          onClick={handleAdd}
          className="bg-[#4b5940] hover:bg-[#34422a] active:scale-[0.98] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[12px] px-[32px] py-[14px] flex items-center justify-center gap-[10px] text-white transition-all cursor-pointer shadow-xs"
          data-node-id="1:1921"
          data-name="Primary CTA Button"
        >
          <span
            className="font-cairo font-semibold text-[16px] leading-[24px] text-center text-white"
            data-node-id="1:1923"
          >
            إضافة عقار
          </span>
          <div className="relative size-[20px] shrink-0" data-node-id="1:1924">
            <Image
              src="/assets/properties/empty-state-plus.svg"
              alt="إضافة"
              width={20}
              height={20}
              className="size-full object-contain"
            />
          </div>
        </button>
      ) : (
        <Link
          href="/properties/new"
          className="bg-[#4b5940] hover:bg-[#34422a] active:scale-[0.98] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[12px] px-[32px] py-[14px] flex items-center justify-center gap-[10px] text-white transition-all cursor-pointer shadow-xs"
          data-node-id="1:1921"
          data-name="Primary CTA Button"
        >
          <span
            className="font-cairo font-semibold text-[16px] leading-[24px] text-center text-white"
            data-node-id="1:1923"
          >
            إضافة عقار
          </span>
          <div className="relative size-[20px] shrink-0" data-node-id="1:1924">
            <Image
              src="/assets/properties/empty-state-plus.svg"
              alt="إضافة"
              width={20}
              height={20}
              className="size-full object-contain"
            />
          </div>
        </Link>
      )}
    </div>
  );
}
