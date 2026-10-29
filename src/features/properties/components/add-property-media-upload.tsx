"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { showToast } from "@/lib/toast";
import { DeletePropertyImageModal } from "./delete-property-image-modal";

interface AddPropertyMediaUploadProps {
  onImageChange?: (imageUrl: string) => void;
}

export function AddPropertyMediaUpload({ onImageChange }: AddPropertyMediaUploadProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(
    "/assets/properties/add/building-preview.png"
  );
  const [fileName, setFileName] = useState("villa-luxury-facade-render-01.jpg");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("deleteModal") === "true") {
        setIsDeleteModalOpen(true);
      }
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        showToast.error("حجم الملف يتجاوز 10 ميجابايت");
        return;
      }
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        const url = event.target?.result as string;
        setPreviewImage(url);
        onImageChange?.(url);
        showToast.success("تم تحديث صورة الغلاف بنجاح");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setPreviewImage(null);
    onImageChange?.("");
    setIsDeleteModalOpen(false);
    showToast.info("تمت إزالة الصورة الرئيسية", "يمكنك رفع صورة جديدة أو تصفح ملفاتك.");
  };

  const handleViewImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (previewImage) {
      window.open(previewImage, "_blank");
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        showToast.error("حجم الملف يتجاوز 10 ميجابايت");
        return;
      }
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        const url = event.target?.result as string;
        setPreviewImage(url);
        onImageChange?.(url);
        showToast.success("تم رفع الصورة بنجاح");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="flex flex-col gap-[16px] items-start w-full"
      data-node-id="1:2146"
      data-name="Left Side (Media Upload Column - 5 Columns)"
    >
      {/* Header Label & Badge */}
      <div className="flex flex-col gap-[2px] items-start w-full" data-node-id="1:2147">
        <div className="flex items-center justify-between w-full" data-node-id="1:2148">
          <div data-node-id="1:2151">
            <span
              className="font-cairo font-semibold text-[14px] leading-[20px] text-[#252820]"
              data-node-id="1:2152"
            >
              صورة العقار الرئيسية
            </span>
          </div>
          <div data-node-id="1:2149">
            <span
              className="font-cairo font-semibold text-[11px] leading-[16px] text-[#54624c]"
              data-node-id="1:2150"
            >
              صورة الغلاف
            </span>
          </div>
        </div>
        <p
          className="font-cairo font-medium text-[11px] leading-[16px] text-[#a1a49d] text-right"
          data-node-id="1:2154"
        >
          تظهر كصورة غلاف رئيسية للعقار في البطاقات ولوحة التحكم والتقارير المالية
        </p>
      </div>

      {/* Large Dropzone Upload Container */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`bg-[#f1f5eb] min-h-[346px] rounded-[16px] p-[24px] flex flex-col justify-between relative w-full cursor-pointer transition-all border-2 ${
          isDragging ? "border-[#34422a] bg-[#e8efe2]" : "border-transparent"
        }`}
        data-node-id="1:2155"
        data-name="Large Dropzone Upload Container"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png"
          className="hidden"
          onChange={handleFileSelect}
        />

        {/* 1. Image Preview Snapshot */}
        {previewImage ? (
          <div
            className="h-[176px] sm:h-[190px] rounded-[12px] overflow-hidden relative shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-full shrink-0"
            data-node-id="1:2171"
            data-name="Image preview snapshot mimicking architectural mockups"
          >
            <Image
              src={previewImage}
              alt="صورة العقار الرئيسية"
              fill
              className="object-cover"
              priority
              data-node-id="1:2172"
            />

            {/* Gradient Overlay & Actions */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[rgba(52,66,42,0.8)] via-[rgba(52,66,42,0.2)] to-transparent flex items-end justify-between p-[16px]"
              data-node-id="1:2173"
            >
              {/* Action Buttons: Delete & View */}
              <div className="flex items-center gap-[6px]" data-node-id="1:2174">
                <button
                  type="button"
                  onClick={handleDeleteImage}
                  title="حذف الصورة"
                  className="size-[32px] rounded-[8px] bg-[rgba(244,63,94,0.8)] hover:bg-[rgba(244,63,94,1)] backdrop-blur-[4px] flex items-center justify-center transition-colors cursor-pointer"
                  data-node-id="1:2175"
                >
                  <div className="relative size-[16px]" data-node-id="1:2176">
                    <Image
                      src="/assets/properties/add/trash-icon.svg"
                      alt="حذف"
                      width={16}
                      height={16}
                      className="size-full object-contain"
                    />
                  </div>
                </button>

                <button
                  type="button"
                  onClick={handleViewImage}
                  title="معاينة الصورة"
                  className="size-[32px] rounded-[8px] bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.35)] backdrop-blur-[4px] flex items-center justify-center transition-colors cursor-pointer"
                  data-node-id="1:2178"
                >
                  <div className="relative size-[16px]" data-node-id="1:2179">
                    <Image
                      src="/assets/properties/add/eye-icon.svg"
                      alt="معاينة"
                      width={16}
                      height={16}
                      className="size-full object-contain"
                    />
                  </div>
                </button>
              </div>

              {/* Current Preview Badge */}
              <div
                className="bg-[rgba(255,255,255,0.9)] backdrop-blur-[2px] rounded-[6px] px-[8px] py-[4px]"
                data-node-id="1:2181"
              >
                <span
                  className="font-cairo font-bold text-[11px] leading-[16px] text-[#34422a]"
                  data-node-id="1:2182"
                >
                  المعاينة الحالية
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[176px] rounded-[12px] border-2 border-dashed border-[#dfe4db] flex flex-col items-center justify-center bg-white/50 text-[#75786f]">
            <span className="font-cairo text-[13px]">لا توجد صورة محددة حالياً</span>
          </div>
        )}

        {/* 2. Secondary Action Bar inside Dropzone */}
        <div
          className="flex flex-col items-center gap-[4px] text-center"
          data-node-id="1:2156"
          data-name="Secondary Action Bar inside Dropzone"
        >
          <div className="flex items-center gap-[6px] justify-center" data-node-id="1:2157">
            <span
              className="font-cairo font-bold text-[12px] leading-[18px] text-[#34422a]"
              data-node-id="1:2159"
            >
              اسحب صورة جديدة هنا أو تصفح ملفاتك
            </span>
            <div className="relative size-[18px]" data-node-id="1:2160">
              <Image
                src="/assets/properties/add/upload-cloud.svg"
                alt="رفع"
                width={18}
                height={14}
                className="size-full object-contain"
              />
            </div>
          </div>
          <span
            className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840]"
            data-node-id="1:2163"
          >
            يدعم صيغ JPG, PNG حتى 10 ميجابايت
          </span>
        </div>

        {/* 3. Upload Trigger Button */}
        <div className="flex justify-center" data-node-id="1:2164">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
            className="bg-white hover:bg-[#fafbfa] active:scale-[0.98] rounded-[12px] px-[16px] py-[8px] flex items-center gap-[6px] text-[#34422a] font-cairo font-semibold text-[12px] leading-[18px] transition-all cursor-pointer shadow-2xs border border-[#dfe4db]/40"
            data-node-id="1:2165"
            data-name="Upload Trigger Button"
          >
            <span data-node-id="1:2167">اضف صور اخري</span>
            <div className="relative size-[13.5px]" data-node-id="1:2168">
              <Image
                src="/assets/properties/add/plus-icon.svg"
                alt="إضافة"
                width={14}
                height={14}
                className="size-full object-contain"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal (Figma Nodes 1:3899 & 1:3900) */}
      <DeletePropertyImageModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        imageSrc={previewImage || "/assets/properties/delete-modal-preview.png"}
        fileName={fileName}
      />
    </div>
  );
}

