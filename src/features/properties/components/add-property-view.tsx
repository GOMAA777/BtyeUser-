"use client";

import { AddPropertyHeroBar } from "./add-property-hero-bar";
import { AddPropertyForm } from "./add-property-form";

export function AddPropertyView() {
  return (
    <div
      className="w-full min-h-full bg-[#f1f5eb] p-[20px] lg:p-[32px] flex flex-col gap-[24px] max-w-[1020px] mx-auto"
      data-node-id="1:2043"
      data-name="Main"
    >
      {/* 1. Top Hero Greeting Bar */}
      <AddPropertyHeroBar />

      {/* 2. Main Card Form, IoT Badges & Sticky Actions */}
      <AddPropertyForm />
    </div>
  );
}

