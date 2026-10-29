"use client";

import { AddUnitHeroBar } from "./add-unit-hero-bar";
import { PropertyContextBanner } from "./property-context-banner";
import { AddUnitForm } from "./add-unit-form";

export function AddUnitView() {
  return (
    <div
      className="w-full min-h-full bg-[#f1f5eb] p-[20px] lg:p-[32px] flex flex-col gap-[20px] lg:gap-[24px] max-w-[1400px] mx-auto"
      data-node-id="1:2381"
      data-name="Main"
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
