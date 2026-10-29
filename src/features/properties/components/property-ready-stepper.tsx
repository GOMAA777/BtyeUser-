"use client";

import Image from "next/image";

export function PropertyReadyStepper() {
  return (
    <div className="w-full max-w-[576px] mx-auto px-4">
      <div className="relative flex items-center justify-between w-full">
        {/* Connecting horizontal divider line */}
        <div
          className="absolute h-[2px] bg-[#d8e8cb] left-[52px] right-[32px] top-4 -translate-y-1/2 z-0"
          aria-hidden="true"
        />

        {/* Step 3 (الاعتماد) - Leftmost in RTL */}
        <div className="flex flex-col items-center gap-1 z-10">
          <div className="bg-[#34422a] rounded-full size-8 flex items-center justify-center text-white shadow-[0px_0px_0px_4px_rgba(216,232,203,0.6),0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
            <div className="relative w-[12.2px] h-[9px]">
              <Image
                src="/assets/properties/ready/f3eb9e458c26a50cfa7cf28128f33820f080321f.svg"
                alt="check"
                width={12}
                height={9}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <span className="font-bold text-[#34422a] text-[11px] leading-tight">
            الاعتماد
          </span>
        </div>

        {/* Step 2 (الوحدات) - Middle */}
        <div className="flex flex-col items-center gap-1 z-10">
          <div className="bg-[#4b5940] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-full size-8 flex items-center justify-center text-white">
            <div className="relative w-[12.2px] h-[9px]">
              <Image
                src="/assets/properties/ready/f3eb9e458c26a50cfa7cf28128f33820f080321f.svg"
                alt="check"
                width={12}
                height={9}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <span className="font-bold text-[#34422a] text-[11px] leading-tight">
            الوحدات
          </span>
        </div>

        {/* Step 1 (البيانات العامة) - Rightmost in RTL */}
        <div className="flex flex-col items-center gap-1 z-10">
          <div className="bg-[#4b5940] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-full size-8 flex items-center justify-center text-white">
            <div className="relative w-[12.2px] h-[9px]">
              <Image
                src="/assets/properties/ready/f3eb9e458c26a50cfa7cf28128f33820f080321f.svg"
                alt="check"
                width={12}
                height={9}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <span className="font-bold text-[#34422a] text-[11px] leading-tight">
            البيانات العامة
          </span>
        </div>
      </div>
    </div>
  );
}
