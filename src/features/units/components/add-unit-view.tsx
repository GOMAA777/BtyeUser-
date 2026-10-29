"use client";

import { AddUnitHeroBar } from "./add-unit-hero-bar";
import { PropertyContextBanner } from "./property-context-banner";
import { AddUnitForm } from "./add-unit-form";

export function AddUnitView() {
  return (
    <div
      className="bg-[#f1f5eb] min-h-screen p-[24px] lg:p-[32px] flex flex-col gap-[20px] w-full"
      data-node-id="1:4685"
      data-name="إضافة وحدة"
      dir="rtl"
    >
      {/* 1. Top Hero Greeting Bar */}
      <AddUnitHeroBar />

      {/* 2. Property Context Banner */}
      <PropertyContextBanner />

      {/* 3. Main Multi-section Form Grid & Sticky Actions */}
      <AddUnitForm />
    </div>
  );
}
