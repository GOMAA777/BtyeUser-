"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { showToast } from "@/lib/toast";
import {
  addPropertySchema,
  type AddPropertyInput,
  type PropertyType,
} from "../schemas/add-property-schema";
import { addPropertyAction } from "../actions/add-property-action";
import { AddPropertyMediaUpload } from "./add-property-media-upload";
import { AddPropertyLocationMap } from "./add-property-location-map";
import { AddPropertyIoTBadge } from "./add-property-iot-badge";
import { AddPropertyStickyBar } from "./add-property-sticky-bar";

interface PropertyTypeOption {
  id: PropertyType;
  label: string;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
}

const PROPERTY_TYPES: PropertyTypeOption[] = [
  {
    id: "building",
    label: "عمارة",
    iconSrc: "/assets/properties/add/type-building.svg",
    iconWidth: 18,
    iconHeight: 16.5,
  },
  {
    id: "commercial",
    label: "مبنى تجاري",
    iconSrc: "/assets/properties/add/type-commercial.svg",
    iconWidth: 18,
    iconHeight: 16.5,
  },
  {
    id: "complex",
    label: "مجمع شقق",
    iconSrc: "/assets/properties/add/type-complex.svg",
    iconWidth: 16.5,
    iconHeight: 17.5,
  },
  {
    id: "resort",
    label: "منتجع/شاليه",
    iconSrc: "/assets/properties/add/type-resort.svg",
    iconWidth: 18.5,
    iconHeight: 18.5,
  },
  {
    id: "villa",
    label: "فيلا مستقلة",
    iconSrc: "/assets/properties/add/type-villa.svg",
    iconWidth: 16.5,
    iconHeight: 16.5,
  },
];

const SAUDI_CITIES = [
  "الرياض",
  "جدة",
  "الدمام",
  "مكة المكرمة",
  "المدينة المنورة",
  "الخبر",
];

export function AddPropertyForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<AddPropertyInput>({
    resolver: zodResolver(addPropertySchema),
    defaultValues: {
      name: "عمارة النخيل الفاخرة",
      type: "building",
      city: "الرياض",
      district: "حي الياسمين",
      streetAddress: "طريق أنس بن مالك، قطعة رقم 412",
      description:
        "عمارة سكنية فاخرة مشيدة وفق أعلى المعايير المعمارية الحديثة، مجهزة بنظام متكامل للأقفال الذكية مع شواحن سيارات كهربائية ومصاعد رقمية، تقع في موقع استراتيجي راقٍ قريب من الطرق المحورية ومطار الملك خالد الدولي.",
      imageUrl: "/assets/properties/add/building-preview.png",
    },
  });

  const selectedType = watch("type");
  const selectedCity = watch("city");
  const currentDistrict = watch("district");
  const currentStreet = watch("streetAddress");

  const onSubmit = async (data: AddPropertyInput) => {
    setIsSubmitting(true);
    try {
      const result = await addPropertyAction(data);
      if (result.success) {
        showToast.success(`تم حفظ بيانات العقار بنجاح (${data.name}) - جاري الانتقال للخطوة 2`);
        router.push("/properties/new/unit");
      } else {
        showToast.error(result.error || "فشل حفظ بيانات العقار");
      }
    } catch {
      showToast.error("حدث خطأ غير متوقع أثناء حفظ العقار");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[24px] w-full">
      {/* Main Card Form Container */}
      <div
        className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-[24px] lg:p-[36px] flex flex-col gap-[36px] w-full"
        data-node-id="1:2062"
        data-name="Main Card Form Container"
      >
        {/* Row 1: Two Column Inputs & Media */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-[36px] items-start w-full"
          data-node-id="1:2063"
          data-name="Row 1: Two Column Inputs & Media"
        >
          {/* Right Side (RTL Primary Inputs - 7 Columns) */}
          <div
            className="lg:col-span-7 flex flex-col gap-[24px] items-start w-full"
            data-node-id="1:2064"
            data-name="Right Side (RTL Primary Inputs - 7 Columns)"
          >
            {/* Field 1: Property Name */}
            <div
              className="flex flex-col gap-[4px] items-start w-full"
              data-node-id="1:2065"
              data-name="Field 1: Property Name"
            >
              <label
                htmlFor="propertyName"
                className="flex items-center gap-[4px] w-full text-right cursor-pointer"
                data-node-id="1:2066"
              >
                <span
                  className="font-cairo font-bold text-[14px] leading-[20px] text-[#ba1a1a]"
                  data-node-id="1:2068"
                >
                  *
                </span>
                <span
                  className="font-cairo font-semibold text-[14px] leading-[20px] text-[#252820]"
                  data-node-id="1:2070"
                >
                  اسم العقار
                </span>
              </label>

              <div className="w-full relative" data-node-id="1:2071">
                <input
                  id="propertyName"
                  type="text"
                  {...register("name")}
                  className={`bg-[#f1f5eb] rounded-[12px] h-[44px] px-[16px] py-[9px] w-full font-cairo font-normal text-[14px] text-[#181d17] text-right outline-none transition-all border ${
                    errors.name
                      ? "border-[#ba1a1a] focus:ring-1 focus:ring-[#ba1a1a]"
                      : "border-transparent focus:border-[#34422a]/40 focus:ring-1 focus:ring-[#34422a]"
                  }`}
                  placeholder="أدخل اسم العقار..."
                  data-node-id="1:2072"
                />
              </div>

              {errors.name ? (
                <span className="font-cairo text-[11px] text-[#ba1a1a]">
                  {errors.name.message}
                </span>
              ) : (
                <p
                  className="font-cairo font-medium text-[11px] leading-[16px] text-[#a1a49d] text-right"
                  data-node-id="1:2076"
                >
                  الاسم التعريفي المستخدم في المراسلات وتقارير الأداء
                </p>
              )}
            </div>

            {/* Field 2: Property Type (Visual Selector Pills) */}
            <div
              className="flex flex-col gap-[4px] items-start w-full"
              data-node-id="1:2077"
              data-name="Field 2: Property Type (Visual Selector Pills)"
            >
              <div className="flex items-center gap-[4px] w-full text-right" data-node-id="1:2078">
                <span
                  className="font-cairo font-bold text-[14px] leading-[20px] text-[#ba1a1a]"
                  data-node-id="1:2080"
                >
                  *
                </span>
                <span
                  className="font-cairo font-semibold text-[14px] leading-[20px] text-[#181d17]"
                  data-node-id="1:2082"
                >
                  نوع العقار
                </span>
              </div>

              <div
                className="grid grid-cols-2 sm:grid-cols-5 gap-[4px] pt-[4px] w-full"
                data-node-id="1:2083"
              >
                {PROPERTY_TYPES.map((typeOption) => {
                  const isSelected = selectedType === typeOption.id;
                  return (
                    <button
                      key={typeOption.id}
                      type="button"
                      onClick={() => setValue("type", typeOption.id, { shouldValidate: true })}
                      className={`flex flex-col items-center justify-center py-[8px] px-[12px] rounded-[12px] transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#d8e8cb] text-[#121f0d] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
                          : "bg-[#f1f5eb] text-[#454840] hover:bg-[#e6ecdf]"
                      }`}
                      data-node-id={isSelected ? "1:2108" : "1:2084"}
                    >
                      <div className="pb-[4px] flex items-center justify-center h-[22px]">
                        <div
                          className="relative flex items-center justify-center"
                          style={{
                            width: `${typeOption.iconWidth}px`,
                            height: `${typeOption.iconHeight}px`,
                          }}
                        >
                          <Image
                            src={typeOption.iconSrc}
                            alt={typeOption.label}
                            width={typeOption.iconWidth}
                            height={typeOption.iconHeight}
                            className="size-full object-contain"
                          />
                        </div>
                      </div>
                      <span
                        className={`font-cairo text-[12px] leading-[18px] text-center whitespace-nowrap ${
                          isSelected ? "font-semibold" : "font-medium"
                        }`}
                      >
                        {typeOption.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Field 3 & 4: City & Neighborhood (Inline Responsive Grid) */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] items-start w-full"
              data-node-id="1:2114"
              data-name="Field 3 & 4: City & Neighborhood (Inline Responsive Grid)"
            >
              {/* City Select (Right column in RTL) */}
              <div
                className="flex flex-col gap-[4px] items-start w-full relative"
                data-node-id="1:2124"
                data-name="City Select"
              >
                <div className="flex items-center gap-[4px] w-full text-right" data-node-id="1:2125">
                  <span
                    className="font-cairo font-bold text-[14px] leading-[20px] text-[#ba1a1a]"
                    data-node-id="1:2127"
                  >
                    *
                  </span>
                  <span
                    className="font-cairo font-semibold text-[14px] leading-[20px] text-[#181d17]"
                    data-node-id="1:2129"
                  >
                    المدينة
                  </span>
                </div>

                <div className="relative w-full" data-node-id="1:2130">
                  <button
                    type="button"
                    onClick={() => setIsCityDropdownOpen((prev) => !prev)}
                    className="bg-[#f1f5eb] h-[44px] rounded-[12px] pl-[16px] pr-[16px] w-full flex items-center justify-between text-right cursor-pointer hover:bg-[#ebefe6] transition-colors border border-transparent focus:border-[#34422a]/40"
                    data-node-id="1:2131"
                  >
                    <div className="relative size-[10px] shrink-0" data-node-id="1:2135">
                      <Image
                        src="/assets/properties/add/select-chevron.svg"
                        alt="خيارات"
                        width={10}
                        height={6}
                        className={`size-full object-contain transition-transform ${
                          isCityDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <span
                      className="font-cairo font-normal text-[14px] leading-[22px] text-[#181d17]"
                      data-node-id="1:2133"
                    >
                      {selectedCity}
                    </span>
                  </button>

                  {/* Dropdown Options List */}
                  {isCityDropdownOpen && (
                    <div className="absolute top-[48px] right-0 left-0 bg-white rounded-[12px] shadow-lg border border-[#dfe4db] py-[6px] z-30">
                      {SAUDI_CITIES.map((city) => (
                        <button
                          key={city}
                          type="button"
                          onClick={() => {
                            setValue("city", city, { shouldValidate: true });
                            setIsCityDropdownOpen(false);
                          }}
                          className={`w-full px-[16px] py-[8px] text-right font-cairo text-[13px] hover:bg-[#f1f5eb] transition-colors flex items-center justify-between ${
                            city === selectedCity
                              ? "bg-[#d8e8cb]/40 font-semibold text-[#181d17]"
                              : "text-[#454840]"
                          }`}
                        >
                          <span>{city}</span>
                          {city === selectedCity && (
                            <span className="size-[6px] rounded-full bg-[#34422a]" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {errors.city && (
                  <span className="font-cairo text-[11px] text-[#ba1a1a]">
                    {errors.city.message}
                  </span>
                )}
              </div>

              {/* Neighborhood Input (Left column in RTL) */}
              <div
                className="flex flex-col gap-[4px] items-start w-full"
                data-node-id="1:2115"
                data-name="Neighborhood"
              >
                <label
                  htmlFor="neighborhood"
                  className="flex items-center gap-[4px] w-full text-right cursor-pointer"
                  data-node-id="1:2116"
                >
                  <span
                    className="font-cairo font-bold text-[14px] leading-[20px] text-[#ba1a1a]"
                    data-node-id="1:2118"
                  >
                    *
                  </span>
                  <span
                    className="font-cairo font-semibold text-[14px] leading-[20px] text-[#181d17]"
                    data-node-id="1:2120"
                  >
                    الحي
                  </span>
                </label>

                <div className="w-full" data-node-id="1:2121">
                  <input
                    id="neighborhood"
                    type="text"
                    {...register("district")}
                    className={`bg-[#f1f5eb] rounded-[12px] h-[44px] px-[16px] py-[9px] w-full font-cairo font-normal text-[14px] text-[#181d17] text-right outline-none transition-all border ${
                      errors.district
                        ? "border-[#ba1a1a] focus:ring-1 focus:ring-[#ba1a1a]"
                        : "border-transparent focus:border-[#34422a]/40 focus:ring-1 focus:ring-[#34422a]"
                    }`}
                    placeholder="أدخل الحي..."
                    data-node-id="1:2123"
                  />
                </div>

                {errors.district && (
                  <span className="font-cairo text-[11px] text-[#ba1a1a]">
                    {errors.district.message}
                  </span>
                )}
              </div>
            </div>

            {/* Field 5: Detailed Street Address */}
            <div
              className="flex flex-col gap-[4px] items-start w-full"
              data-node-id="1:2136"
              data-name="Field 5: Detailed Street Address"
            >
              <label
                htmlFor="streetAddress"
                className="flex items-center gap-[4px] w-full text-right cursor-pointer"
                data-node-id="1:2137"
              >
                <span
                  className="font-cairo font-bold text-[14px] leading-[20px] text-[#ba1a1a]"
                  data-node-id="1:2139"
                >
                  *
                </span>
                <span
                  className="font-cairo font-semibold text-[14px] leading-[20px] text-[#181d17]"
                  data-node-id="1:2141"
                >
                  العنوان التفصيلي
                </span>
              </label>

              <div className="w-full" data-node-id="1:2142">
                <input
                  id="streetAddress"
                  type="text"
                  {...register("streetAddress")}
                  className={`bg-[#f1f5eb] rounded-[12px] h-[44px] px-[16px] py-[9px] w-full font-cairo font-normal text-[14px] text-[#181d17] text-right outline-none transition-all border ${
                    errors.streetAddress
                      ? "border-[#ba1a1a] focus:ring-1 focus:ring-[#ba1a1a]"
                      : "border-transparent focus:border-[#34422a]/40 focus:ring-1 focus:ring-[#34422a]"
                  }`}
                  placeholder="الشارع، رقم القطعة أو المبنى..."
                  data-node-id="1:2145"
                />
              </div>

              {errors.streetAddress && (
                <span className="font-cairo text-[11px] text-[#ba1a1a]">
                  {errors.streetAddress.message}
                </span>
              )}
            </div>
          </div>

          {/* Left Side (Media Upload Column - 5 Columns) */}
          <div className="lg:col-span-5 w-full">
            <Controller
              name="imageUrl"
              control={control}
              render={({ field }) => (
                <AddPropertyMediaUpload onImageChange={field.onChange} />
              )}
            />
          </div>
        </div>

        {/* Divider Line */}
        <div
          className="bg-[#dfe4db] h-px w-full"
          data-node-id="1:2183"
          data-name="Divider Line via Pure Background"
        />

        {/* Row 2: Full Width Description Field */}
        <div
          className="flex flex-col gap-[4px] items-start w-full"
          data-node-id="1:2184"
          data-name="Row 2: Full Width Description Field"
        >
          <div className="flex items-center justify-between w-full" data-node-id="1:2185">
            <label
              htmlFor="propertyDescription"
              className="font-cairo font-semibold text-[14px] leading-[20px] text-[#181d17] cursor-pointer"
              data-node-id="1:2189"
            >
              الوصف الشامل للعقار (اختياري)
            </label>
            <span
              className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840]"
              data-node-id="1:2187"
            >
              أقصى حد 500 حرف
            </span>
          </div>

          <div className="w-full" data-node-id="1:2190">
            <textarea
              id="propertyDescription"
              rows={4}
              maxLength={500}
              {...register("description")}
              className="bg-[#f1f5eb] rounded-[12px] p-[16px] w-full font-cairo font-normal text-[14px] leading-[22px] text-[#181d17] text-right outline-none transition-all resize-none border border-transparent focus:border-[#34422a]/40 focus:ring-1 focus:ring-[#34422a]"
              placeholder="اكتب وصفاً مفصلاً للعقار ومرافقه..."
              data-node-id="1:2192"
            />
          </div>
        </div>

        {/* Row 3: Full Width Interactive Location Section */}
        <AddPropertyLocationMap
          city={selectedCity}
          addressLine1={`${currentStreet || "طريق أنس بن مالك"}، ${currentDistrict || "حي الياسمين"}`}
          addressLine2={`${selectedCity} 13326، المملكة العربية السعودية`}
          onCoordinatesChange={(coords) => {
            setValue("latitude", coords.lat);
            setValue("longitude", coords.lng);
          }}
        />
      </div>

      {/* Property Operational Configuration Badges */}
      <AddPropertyIoTBadge />

      {/* Bottom Sticky Action Area */}
      <AddPropertyStickyBar isSubmitting={isSubmitting} />
    </form>
  );
}

