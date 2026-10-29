"use client";

import { useRef } from "react";
import Image from "next/image";
import { UseFormReturn } from "react-hook-form";
import type { AddUnitInput } from "../schemas/add-unit-schema";

interface UnitGalleryUploadProps {
  form: UseFormReturn<AddUnitInput>;
}

export function UnitGalleryUpload({ form }: UnitGalleryUploadProps) {
  const { watch, setValue } = form;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const images = watch("images") || [];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newImages = Array.from(files).map((file, idx) => ({
      id: `${Date.now()}-${idx}`,
      url: URL.createObjectURL(file),
      caption: file.name.replace(/\.[^/.]+$/, ""),
      isPrimary: images.length === 0 && idx === 0,
    }));

    setValue("images", [...images, ...newImages]);
  };

  const removeImage = (id: string) => {
    const remaining = images.filter((img) => img.id !== id);
    if (remaining.length > 0 && !remaining.some((img) => img.isPrimary)) {
      remaining[0].isPrimary = true;
    }
    setValue("images", remaining);
  };

  return (
    <div
      className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-[24px] flex flex-col gap-[16px] w-full"
      data-node-id="1:4845"
      data-name="Section 3: صور الوحدة (Gallery Upload & Previews)"
      dir="rtl"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-[8px]">
          <div
            className="bg-[#ebefe6] rounded-[8px] size-[32px] flex items-center justify-center shrink-0"
            data-node-id="1:4853"
          >
            <div className="relative size-[16.67px]">
              <Image
                src="/assets/units/add/c0974.svg"
                alt="Gallery"
                width={17}
                height={17}
                className="size-full object-contain"
              />
            </div>
          </div>
          <h3
            className="font-cairo font-semibold text-[#181d17] text-[18px] leading-[28px]"
            data-node-id="1:4852"
          >
            معرض صور الوحدة
          </h3>
        </div>

        <div
          className="bg-[#d8e8cb] rounded-full px-[10px] py-[4px]"
          data-node-id="1:4847"
        >
          <span
            className="font-cairo font-medium text-[#34422a] text-[11px] leading-[16px] block"
            data-node-id="1:4848"
          >
            {images.length} صور مرفوعة
          </span>
        </div>
      </div>

      {/* Drag & Drop Dropzone */}
      <div
        onClick={() => fileInputRef.current?.click()}
        className="bg-[#f1f5eb] rounded-[12px] p-[24px] flex flex-col items-center justify-center cursor-pointer border-2 border-dashed border-transparent hover:border-[#34422a]/30 transition-all duration-150 w-full"
        data-node-id="1:4856"
        data-name="Drag and Drop Dropzone"
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={handleFileUpload}
        />

        <div
          className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-full size-[48px] flex items-center justify-center mb-[8px]"
          data-node-id="1:4858"
        >
          <div className="relative w-[25.67px] h-[23.33px]">
            <Image
              src="/assets/units/add/75569.svg"
              alt="Upload cloud"
              width={26}
              height={24}
              className="size-full object-contain"
            />
          </div>
        </div>

        <p
          className="font-cairo font-semibold text-[14px] leading-[20px] text-center mb-[2px]"
          data-node-id="1:4862"
        >
          <span className="text-[#181d17]">اسحب الصور وأفلتها هنا أو </span>
          <span className="text-[#34422a] underline underline-offset-4 decoration-solid">
            تصفح ملفات جهازك
          </span>
        </p>

        <span
          className="font-cairo font-medium text-[11px] leading-[16px] text-[#75786f] text-center"
          data-node-id="1:4866"
        >
          يدعم صيغ JPG، PNG، WEBP حتى 10 ميجابايت لكل صورة
        </span>
      </div>

      {/* Visual Previews Mosaic */}
      {images.length > 0 && (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] w-full"
          data-node-id="1:4867"
          data-name="Visual Previews Mosaic"
        >
          {images.map((img) => (
            <div
              key={img.id}
              className="relative h-[176px] rounded-[12px] overflow-hidden bg-[#ebefe6] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] group"
            >
              {/* Image */}
              <Image
                src={img.url}
                alt={img.caption}
                fill
                unoptimized
                className="object-cover"
              />

              {/* Primary badge */}
              {img.isPrimary && (
                <div
                  className="absolute top-[12px] right-[12px] bg-[rgba(52,66,42,0.9)] rounded-full px-[8px] py-[2px] z-10"
                  data-node-id="1:4892"
                >
                  <span className="font-cairo font-medium text-white text-[11px] leading-[16px] block">
                    الصورة الرئيسية
                  </span>
                </div>
              )}

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[rgba(52,66,42,0.7)] via-[rgba(52,66,42,0)] to-[rgba(52,66,42,0)] opacity-80"
                data-name="Gradient"
              />

              {/* Bottom bar */}
              <div className="absolute bottom-[12px] left-[12px] right-[12px] flex items-center justify-between z-10">
                {/* Delete button (left in RTL) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeImage(img.id);
                  }}
                  className="bg-[rgba(255,255,255,0.8)] hover:bg-white size-[28px] rounded-full flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                  title="حذف الصورة"
                  data-node-id="1:4884"
                >
                  <div className="relative size-[9.33px]">
                    <Image
                      src="/assets/units/add/e76fc.svg"
                      alt="delete"
                      width={10}
                      height={10}
                      className="size-full object-contain"
                    />
                  </div>
                </button>

                {/* Caption & Icon (right in RTL) */}
                <div className="flex items-center gap-[6px] overflow-hidden">
                  <span className="font-cairo font-semibold text-white text-[12px] leading-[18px] truncate">
                    {img.caption}
                  </span>
                  <div className="relative size-[16px] shrink-0">
                    <Image
                      src={
                        img.isPrimary
                          ? "/assets/units/add/5cf8a.svg"
                          : "/assets/units/add/183a1.svg"
                      }
                      alt="icon"
                      width={16}
                      height={16}
                      className="size-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
