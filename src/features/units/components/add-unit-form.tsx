"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { showToast } from "@/lib/toast";
import { addUnitSchema, type AddUnitInput } from "../schemas/add-unit-schema";
import { addUnitAction } from "../actions/add-unit-action";
import { UnitPrimarySpecs } from "./unit-primary-specs";
import { UnitDescriptionAmenities } from "./unit-description-amenities";
import { UnitGalleryUpload } from "./unit-gallery-upload";
import { UnitPricingCapacity } from "./unit-pricing-capacity";
import { UnitAccessCode } from "./unit-access-code";
import { AddUnitStickyBar } from "./add-unit-sticky-bar";

export function AddUnitForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AddUnitInput>({
    resolver: zodResolver(addUnitSchema),
    defaultValues: {
      floor: "الدور الثاني",
      unitNumber: "الوحدة 204",
      unitType: "private_apartment",
      description:
        "شقة مؤثثة بالكامل بطراز معماري حديث، إطلالة شمالية هادئة على الحديقة، مطبخ متكامل مع آلة قهوة، ونظام تكييف مركزي ذكي...",
      amenities: ["wifi", "ac", "tv"],
      images: [
        {
          id: "1",
          url: "/assets/units/add/6d126.png",
          caption: "غرفة المعيشة وغرفة النوم الرئيسية",
          isPrimary: true,
        },
        {
          id: "2",
          url: "/assets/units/add/705d7.png",
          caption: "إطلالة أفق الرياض والمطبخ التحضيري",
          isPrimary: false,
        },
      ],
      nightlyPrice: 550,
      maxGuests: 3,
      accessCodeMode: "manual",
      accessCode: "48201#",
    },
  });

  const onSubmit = async (data: AddUnitInput) => {
    setIsSubmitting(true);
    try {
      const result = await addUnitAction(data);
      if (result.success) {
        showToast.success(
          `تمت إضافة الوحدة بنجاح (${data.unitNumber}) - جاهزة للتأجير الفوري`
        );
        router.push("/units/ready");
      } else {
        showToast.error(result.error || "حدث خطأ أثناء إضافة الوحدة");
      }
    } catch {
      showToast.error("فشل الاتصال بالخادم، يرجى المحاولة لاحقاً");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-[24px] w-full"
      dir="rtl"
    >
      {/* 12-column Grid: 8 columns Specs/Description/Gallery + 4 columns Pricing/Access */}
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-[24px] items-start w-full"
        data-node-id="1:4737"
        data-name="Main Multi-section Form Grid"
      >
        {/* Right column in RTL / Primary specifications (8 cols) */}
        <div
          className="lg:col-span-8 flex flex-col gap-[24px] w-full"
          data-node-id="1:4738"
          data-name="Left Column (8 cols): Primary Specifications & Gallery"
        >
          {/* Section 1: البيانات الأساسية للوحدة */}
          <UnitPrimarySpecs form={form} />

          {/* Section 2: وصف الوحدة والميزات */}
          <UnitDescriptionAmenities form={form} />

          {/* Section 3: معرض صور الوحدة */}
          <UnitGalleryUpload form={form} />
        </div>

        {/* Left column in RTL / Pricing & Telemetry (4 cols) */}
        <div
          className="lg:col-span-4 flex flex-col gap-[24px] w-full"
          data-node-id="1:4894"
          data-name="Right Column (4 cols): Pricing, Access Code & System Telemetry"
        >
          {/* Section 4: التسعير والسعة */}
          <UnitPricingCapacity form={form} />

          {/* Section 5: إعداد كود الدخول والأقفال الذكية */}
          <UnitAccessCode form={form} />
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      <AddUnitStickyBar isSubmitting={isSubmitting} />
    </form>
  );
}
