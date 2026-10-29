import { PropertyDetailsHeroBar } from "./property-details-hero-bar";
import { PropertyDetailsHeroCard } from "./property-details-hero-card";
import { PropertyDetailsSpecifications } from "./property-details-specifications";
import { PropertyDetailsLocation } from "./property-details-location";
import { PropertyDetailsUnitsPreview } from "./property-details-units-preview";
import { PropertyDetailsBookingsPreview } from "./property-details-bookings-preview";

export function PropertyDetailsView() {
  return (
    <div
      className="flex flex-col gap-[20px] w-full"
      dir="rtl"
      data-node-id="1:3049"
      data-name="Property Details View"
    >
      {/* 1. Header Bar: Title, Breadcrumbs, Action Links */}
      <PropertyDetailsHeroBar />

      {/* 2. Hero Overview Card: Photo showcase + Operational metrics + Gateway strip */}
      <PropertyDetailsHeroCard />

      {/* 3. Main Asymmetric Content Grid (7 cols Specs/Map vs 5 cols Units/Bookings) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px] lg:gap-[36px] items-start w-full">
        {/* Right Column (7 cols in RTL): Specifications + Location */}
        <div className="lg:col-span-7 flex flex-col gap-[24px] lg:gap-[36px] w-full">
          {/* Section A: بيانات العقار والمواصفات المعمارية */}
          <PropertyDetailsSpecifications />

          {/* Section B: الموقع الجغرافي والوصول */}
          <PropertyDetailsLocation />
        </div>

        {/* Left Column (5 cols in RTL): Units Preview + Bookings */}
        <div className="lg:col-span-5 flex flex-col gap-[24px] lg:gap-[36px] w-full">
          {/* Section C: الوحدات التابعة */}
          <PropertyDetailsUnitsPreview />

          {/* Section D: الحجوزات القادمة */}
          <PropertyDetailsBookingsPreview />
        </div>
      </div>
    </div>
  );
}
