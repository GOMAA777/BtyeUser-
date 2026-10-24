"use client";

import Image from "next/image";

export function DashboardHeader() {
  return (
    <header
      className="bg-white h-[72px] drop-shadow-[0px_1px_4px_rgba(0,0,0,0.04)] flex items-center justify-between px-[32px] w-full shrink-0 z-20"
      data-node-id="1:572"
      data-name="Header"
    >
      {/* 1. Property Selector (Right side in RTL) */}
      <div className="flex items-center" data-node-id="1:593">
        <button
          type="button"
          className="bg-[#f1f5eb] flex items-center gap-[6px] px-[16px] py-[6px] rounded-[12px] hover:bg-[#e8ede1] transition-colors"
          data-node-id="1:594"
        >
          <div className="relative shrink-0 size-[10px] flex items-center justify-center" data-node-id="1:595">
            <Image
              src="/assets/dashboard/1812ba5f9cf264abe76bab2218fa26946d18c382.svg"
              alt="Chevron"
              width={9}
              height={6}
              className="object-contain"
            />
          </div>
          <span className="font-cairo font-semibold text-[12px] leading-[18px] text-[#181d17]" data-node-id="1:598">
            عمارة النخيل - الرياض
          </span>
        </button>
      </div>

      {/* 2. Search Bar (Center) */}
      <div className="flex-1 max-w-[520px] px-[24px]" data-node-id="1:586">
        <div className="relative w-full flex items-center" data-node-id="1:587">
          <div className="absolute right-[14px] size-[15px] flex items-center justify-center pointer-events-none" data-node-id="1:591">
            <Image
              src="/assets/dashboard/195de96be2d38f81237b67a2bf764aaabfda4fea.svg"
              alt="Search"
              width={15}
              height={15}
              className="object-contain"
            />
          </div>
          <input
            type="text"
            dir="rtl"
            placeholder="ابحث عن وحدة، مستأجر، عقد..."
            className="bg-[#f1f5eb] h-[40px] w-full rounded-[12px] pr-[38px] pl-[16px] py-[8px] font-cairo font-normal text-[13px] text-[#181d17] placeholder:text-[#75786f] outline-none focus:ring-1 focus:ring-[#34422a] transition-all"
            data-node-id="1:588"
          />
        </div>
      </div>

      {/* 3. Notification & Profile (Left side in RTL) */}
      <div className="flex items-center gap-[20px]" data-node-id="1:573">
        {/* Notification Bell */}
        <button
          type="button"
          aria-label="التنبيهات"
          className="relative flex items-center justify-center p-[6px] rounded-full hover:bg-neutral-100 transition-colors"
          data-node-id="1:581"
        >
          <div className="relative size-[18px]" data-node-id="1:582">
            <Image
              src="/assets/dashboard/a1e751134fff1b1badb7c27be8aa45703253498b.svg"
              alt="Notifications"
              width={16}
              height={20}
              className="object-contain"
            />
          </div>
          <span
            className="absolute top-[5px] left-[5px] size-[8px] bg-[#ba1a1a] rounded-full ring-2 ring-white"
            data-node-id="1:584"
          />
        </button>

        {/* Profile Card */}
        <div
          className="flex items-center gap-[10px] pr-[16px] pl-[4px] border-r border-[rgba(197,200,189,0.4)]"
          data-node-id="1:574"
        >
          <div className="relative size-[32px] rounded-full overflow-hidden shrink-0" data-node-id="1:575">
            <Image
              src="/assets/dashboard/de01e5fde3da237802f4f5f9f19a4aa8998f2967.png"
              alt="محمد أحمد"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start" data-node-id="1:576">
            <span className="font-cairo font-bold text-[12px] leading-[18px] text-[#181d17]" data-node-id="1:578">
              محمد أحمد
            </span>
            <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840]" data-node-id="1:580">
              مالك العقار
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
