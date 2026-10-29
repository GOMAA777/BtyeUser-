"use client";

import { AddPropertyHeroBar } from "./add-property-hero-bar";
import { AddPropertyForm } from "./add-property-form";

export function AddPropertyView() {
  return (
    <div
      className="bg-[#f1f5eb] min-h-screen p-[24px] lg:p-[32px] flex flex-col gap-[20px] w-full"
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

