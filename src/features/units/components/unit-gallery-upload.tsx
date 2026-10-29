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
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 flex flex-col gap-5">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-[#ebefe6] rounded-[8px] size-8 flex items-center justify-center shrink-0">
            <div className="relative size-[16.67px]">
              <Image
                src="/assets/units/add/62721f54336df3d6043c598971cd388096437559.svg"
                alt="Gallery"
                width={17}
                height={17}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <h3 className="font-semibold text-[#181d17] text-lg leading-tight">
            معرض صور الوحدة
          </h3>
        </div>

        <div className="bg-[#d8e8cb] rounded-full px-2.5 py-1">
          <span className="font-medium text-[#34422a] text-[11px] leading-none block">
            {images.length} صور مرفوعة
          </span>
        </div>
      </div>

      {/* Drag & Drop Dropzone */}
      <div
        onClick={() => fileInputRef.current?.click()}
        className="bg-[#f1f5eb] rounded-[12px] p-6 flex flex-col items-center justify-center cursor-pointer border-2 border-dashed border-transparent hover:border-[#34422a]/30 transition-all duration-150"
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={handleFileUpload}
        />

        <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-full size-12 flex items-center justify-center mb-2">
          <div className="relative w-[25.6px] h-[23.3px]">
            <Image
              src="/assets/units/add/139275b2f8cdf37c65946b37db147b6dd4a94b95.svg"
              alt="Upload cloud"
              width={26}
              height={24}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <p className="text-sm font-semibold text-center mb-1">
          <span className="text-[#181d17]">اسحب الصور وأفلتها هنا أو </span>
          <span className="text-[#34422a] underline underline-offset-4 decoration-solid">
            تصفح ملفات جهازك
          </span>
        </p>

        <span className="text-[11px] font-medium text-[#75786f] text-center">
          يدعم صيغ JPG، PNG، WEBP حتى 10 ميجابايت لكل صورة
        </span>
      </div>

      {/* Visual Previews Mosaic */}
      {images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <div className="absolute top-3 right-3 bg-[#34422a]/90 backdrop-blur-sm rounded-full px-2 py-0.5 z-10">
                  <span className="font-medium text-white text-[11px] leading-tight block">
                    الصورة الرئيسية
                  </span>
                </div>
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(52,66,42,0.85)] via-[rgba(52,66,42,0.2)] to-transparent" />

              {/* Bottom bar */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
                {/* Delete button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeImage(img.id);
                  }}
                  className="bg-white/80 hover:bg-white text-destructive size-7 rounded-full flex items-center justify-center transition-all duration-150 cursor-pointer shadow-sm active:scale-95"
                  title="حذف الصورة"
                >
                  <div className="relative size-2.5">
                    <Image
                      src="/assets/units/add/2373cf2ff4bc0033c86716d6312f411d0a1467d3.svg"
                      alt="delete"
                      width={10}
                      height={10}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </button>

                {/* Caption & Icon */}
                <div className="flex items-center gap-1.5 overflow-hidden">
                  <span className="font-semibold text-white text-xs truncate">
                    {img.caption}
                  </span>
                  <div className="relative size-3.5 shrink-0">
                    <Image
                      src={
                        img.isPrimary
                          ? "/assets/units/add/dae2c74f48c17911a5bd078bf4260d9a3868cb57.svg"
                          : "/assets/units/add/36b0b1fccd4f27b3faf7ff2645fef8cb79d2322c.svg"
                      }
                      alt="caption"
                      width={15}
                      height={15}
                      className="w-full h-full object-contain"
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
