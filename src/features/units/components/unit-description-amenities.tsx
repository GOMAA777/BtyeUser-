"use client";

import Image from "next/image";
import { UseFormReturn } from "react-hook-form";
import type { AddUnitInput } from "../schemas/add-unit-schema";

interface UnitDescriptionAmenitiesProps {
  form: UseFormReturn<AddUnitInput>;
}

const AMENITIES = [
  {
    id: "wifi",
    name: "واي فاي عالي السرعة",
    iconPath: "/assets/units/add/48634.svg",
  },
  {
    id: "ac",
    name: "تكييف ذكي مستقل",
    iconPath: "/assets/units/add/9a51c.svg",
  },
  {
    id: "tv",
    name: "شاشة ذكية 65 بوصة",
    iconPath: "/assets/units/add/8e0b9.svg",
  },
  {
    id: "parking",
    name: "موقف سيارات مخصص",
    iconPath: "/assets/units/add/75d18.svg",
  },
  {
    id: "kitchen",
    name: "مطبخ تحضيري",
    iconPath: "/assets/units/add/c3ea4.svg",
  },
];

export function UnitDescriptionAmenities({
  form,
}: UnitDescriptionAmenitiesProps) {
  const { register, watch, setValue } = form;
  const selectedAmenities = watch("amenities") || [];

  const toggleAmenity = (id: string) => {
    if (selectedAmenities.includes(id)) {
      setValue(
        "amenities",
        selectedAmenities.filter((item) => item !== id)
      );
    } else {
      setValue("amenities", [...selectedAmenities, id]);
    }
  };

  return (
    <div
      className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-[24px] flex flex-col gap-[16px] w-full"
      data-node-id="1:4807"
      data-name="Section 2"
      dir="rtl"
    >
      {/* Section Header */}
      <div className="flex items-center gap-[12px]">
        <div
          className="bg-[#ebefe6] rounded-[8px] size-[32px] flex items-center justify-center shrink-0"
          data-node-id="1:4812"
        >
          <div className="relative w-[15px] h-[10px]">
            <Image
              src="/assets/units/add/29c98.svg"
              alt="Description"
              width={15}
              height={10}
              className="size-full object-contain"
            />
          </div>
        </div>
        <h3
          className="font-cairo font-semibold text-[#181d17] text-[18px] leading-[28px]"
          data-node-id="1:4811"
        >
          وصف الوحدة والميزات
        </h3>
      </div>

      {/* Description Textarea */}
      <div className="flex flex-col gap-[4px]" data-node-id="1:4815">
        <label
          className="font-cairo font-semibold text-[12px] leading-[18px] text-[#181d17]"
          data-node-id="1:4817"
        >
          تفاصيل الوحدة والمرافق
        </label>
        <textarea
          {...register("description")}
          rows={3}
          placeholder="أدخل تفاصيل ومميزات الوحدة (مثال: شقة مؤثثة بالكامل بطراز معماري حديث، إطلالة شمالية هادئة على الحديقة، مطبخ متكامل مع آلة قهوة، ونظام تكييف مركزي ذكي...)"
          className="w-full bg-[#f1f5eb] rounded-[12px] p-[16px] font-cairo font-normal text-[14px] leading-[22px] text-[#181d17] placeholder:text-[#9ca3af] outline-none focus:ring-1 focus:ring-[#34422a] transition-all resize-none"
          data-node-id="1:4818"
        />
      </div>

      {/* Amenities Toggles */}
      <div className="flex flex-col gap-[8px] pt-[8px]" data-node-id="1:4821">
        <span
          className="font-cairo font-semibold text-[12px] leading-[18px] text-[#75786f]"
          data-node-id="1:4823"
        >
          المرافق الأساسية المتوفرة:
        </span>
        <div className="flex flex-wrap gap-[8px]">
          {AMENITIES.map((amenity) => {
            const isSelected = selectedAmenities.includes(amenity.id);
            return (
              <button
                key={amenity.id}
                type="button"
                onClick={() => toggleAmenity(amenity.id)}
                className={`flex items-center gap-[6px] px-[12px] py-[6px] rounded-full transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? "bg-[#d8e8cb] text-[#34422a]"
                    : "bg-[#ebefe6] text-[#75786f] hover:bg-[#dfe4db]"
                }`}
                data-name="Button"
              >
                <div className="relative size-[14px] shrink-0">
                  <Image
                    src={amenity.iconPath}
                    alt={amenity.name}
                    width={14}
                    height={14}
                    className="size-full object-contain"
                  />
                </div>
                <span className="font-cairo font-medium text-[11px] leading-[16px] whitespace-nowrap">
                  {amenity.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
