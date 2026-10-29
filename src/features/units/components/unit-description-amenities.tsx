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
    iconPath: "/assets/units/add/745fb8e1482428b1aeb76b0e6b93ef85c730ee63.svg",
  },
  {
    id: "ac",
    name: "تكييف ذكي مستقل",
    iconPath: "/assets/units/add/0ea6064023ba74480aee29da99d168a31b14f4bb.svg",
  },
  {
    id: "tv",
    name: "شاشة ذكية 65 بوصة",
    iconPath: "/assets/units/add/36500ced1206ebfccca52041f50469bf481fedfb.svg",
  },
  {
    id: "parking",
    name: "موقف سيارات مخصص",
    iconPath: "/assets/units/add/8049c1ad2ca9f909807c12c5e3970a0575906658.svg",
  },
  {
    id: "kitchen",
    name: "مطبخ تحضيري",
    iconPath: "/assets/units/add/c4c2ccdb79f1f4bd5f1fd198de2a78cb435b2660.svg",
  },
];

export function UnitDescriptionAmenities({ form }: UnitDescriptionAmenitiesProps) {
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
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 flex flex-col gap-5">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="bg-[#ebefe6] rounded-[8px] size-8 flex items-center justify-center shrink-0">
          <div className="relative w-[15px] h-[10px]">
            <Image
              src="/assets/units/add/760d82fce16e944c22b8c79b8bfaa0a532937b75.svg"
              alt="Description"
              width={15}
              height={10}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <h3 className="font-semibold text-[#181d17] text-lg leading-tight">
          وصف الوحدة والميزات
        </h3>
      </div>

      {/* Description Textarea */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-[#181d17]">
          تفاصيل الوحدة والمرافق
        </label>
        <textarea
          {...register("description")}
          rows={3}
          placeholder="أدخل تفاصيل ومميزات الوحدة (مثال: شقة مؤثثة بالكامل بطراز معماري حديث، إطلالة شمالية هادئة على الحديقة، مطبخ متكامل مع آلة قهوة، ونظام تكييف مركزي ذكي...)"
          className="w-full bg-[#f1f5eb] rounded-[12px] p-4 text-sm font-normal text-[#181d17] placeholder:text-[#9ca3af] outline-none focus:ring-1 focus:ring-[#34422a] transition-all resize-none leading-relaxed"
        />
      </div>

      {/* Amenities Toggles */}
      <div className="flex flex-col gap-2 pt-1">
        <span className="text-xs font-semibold text-[#75786f]">
          المرافق الأساسية المتوفرة:
        </span>
        <div className="flex flex-wrap gap-2.5">
          {AMENITIES.map((amenity) => {
            const isSelected = selectedAmenities.includes(amenity.id);
            return (
              <button
                key={amenity.id}
                type="button"
                onClick={() => toggleAmenity(amenity.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? "bg-[#d8e8cb] text-[#34422a]"
                    : "bg-[#ebefe6] text-[#75786f] hover:bg-[#dfe4db]"
                }`}
              >
                <div className="relative size-3.5 shrink-0">
                  <Image
                    src={amenity.iconPath}
                    alt={amenity.name}
                    width={14}
                    height={14}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[11px] font-medium leading-none">
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
