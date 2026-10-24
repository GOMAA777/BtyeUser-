"use client";

import Image from "next/image";

export function UnitOccupancyCard() {
  return (
    <div
      className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-[24px] flex flex-col justify-between h-full"
      data-node-id="1:288"
      data-name="Card A: Unit Status Visualizer (7 cols)"
    >
      <div className="flex flex-col gap-[20px] w-full" data-node-id="1:289">
        {/* Header */}
        <div className="flex items-center justify-between w-full" data-node-id="1:290">
          {/* Left: View All button */}
          <button
            type="button"
            className="flex items-center gap-[4px] hover:opacity-80 transition-opacity"
            data-node-id="1:291"
          >
            <div className="relative size-[11px] flex items-center justify-center shrink-0" data-node-id="1:292">
              <Image
                src="/assets/dashboard/e9e0c880f5a2886e2f3c9de6b6042c0370e51a64.svg"
                alt="Arrow"
                width={11}
                height={11}
                className="object-contain"
              />
            </div>
            <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#34422a]" data-node-id="1:295">
              عرض الكل
            </span>
          </button>

          {/* Right: Title & Total Badge */}
          <div className="flex items-center gap-[8px]" data-node-id="1:296">
            <span className="bg-[#e5eae0] text-[#454840] font-cairo font-medium text-[11px] leading-[16px] px-[10px] py-[2px] rounded-full" data-node-id="1:297">
              إجمالي 12 وحدة سكنية
            </span>
            <h3 className="font-cairo font-semibold text-[18px] leading-[28px] text-[#181d17]" data-node-id="1:300">
              حالة الوحدات والعقارات
            </h3>
          </div>
        </div>

        {/* Segmented Horizontal Visualizer Bar */}
        <div
          className="bg-[#f1f5eb] flex gap-[4px] h-[16px] items-center p-[2px] rounded-[12px] w-full overflow-hidden"
          data-node-id="1:301"
          data-name="Segmented Horizontal Visualizer"
        >
          {/* Under Maintenance (1 unit = ~8.4%) */}
          <div
            className="bg-[#ba1a1a] h-full rounded-[8px] shrink-0"
            style={{ width: "8.4%" }}
            title="تحت الصيانة: وحدة واحدة"
            data-node-id="1:302"
          />
          {/* Available (1 unit = ~8.3%) */}
          <div
            className="bg-[#bccbb0] h-full rounded-[8px] shrink-0"
            style={{ width: "8.3%" }}
            title="متاحة فوراً: وحدة واحدة"
            data-node-id="1:303"
          />
          {/* Occupied (10 units = ~83.3%) */}
          <div
            className="bg-[#34422a] h-full rounded-[8px] shrink-0"
            style={{ width: "83.3%" }}
            title="محجوزة: 10 وحدات"
            data-node-id="1:304"
          />
        </div>

        {/* Metric Legend Breakdown (4 cards) */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-[8px] w-full"
          data-node-id="1:305"
          data-name="Metric Legend Breakdown"
        >
          {/* 1. Occupied */}
          <div className="bg-[#f1f5eb] flex flex-col gap-[4px] p-[8px] rounded-[12px]" data-node-id="1:327">
            <div className="flex items-center gap-[6px]" data-node-id="1:328">
              <span className="size-[10px] rounded-full bg-[#34422a] shrink-0" data-node-id="1:331" />
              <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840]" data-node-id="1:330">
                محجوزة
              </span>
            </div>
            <span className="font-cairo font-bold text-[18px] leading-[28px] text-[#181d17]" data-node-id="1:333">
              10
            </span>
          </div>

          {/* 2. Available */}
          <div className="bg-[#f1f5eb] flex flex-col gap-[4px] p-[8px] rounded-[12px]" data-node-id="1:320">
            <div className="flex items-center gap-[6px]" data-node-id="1:321">
              <span className="size-[10px] rounded-full bg-[#bccbb0] shrink-0" data-node-id="1:324" />
              <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840]" data-node-id="1:323">
                متاحة فوراً
              </span>
            </div>
            <span className="font-cairo font-bold text-[18px] leading-[28px] text-[#181d17]" data-node-id="1:326">
              1
            </span>
          </div>

          {/* 3. Under Maintenance */}
          <div className="bg-[#f1f5eb] flex flex-col gap-[4px] p-[8px] rounded-[12px]" data-node-id="1:313">
            <div className="flex items-center gap-[6px]" data-node-id="1:314">
              <span className="size-[10px] rounded-full bg-[#ba1a1a] shrink-0" data-node-id="1:317" />
              <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840]" data-node-id="1:316">
                تحت الصيانة
              </span>
            </div>
            <span className="font-cairo font-bold text-[18px] leading-[28px] text-[#181d17]" data-node-id="1:319">
              1
            </span>
          </div>

          {/* 4. Under Cleaning */}
          <div className="bg-[#f1f5eb] flex flex-col gap-[4px] p-[8px] rounded-[12px]" data-node-id="1:306">
            <div className="flex items-center gap-[6px]" data-node-id="1:307">
              <span className="size-[10px] rounded-full bg-[#c5c8bd] shrink-0" data-node-id="1:310" />
              <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840]" data-node-id="1:309">
                تحت التنظيف
              </span>
            </div>
            <span className="font-cairo font-bold text-[18px] leading-[28px] text-[#181d17]" data-node-id="1:312">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Specific Unit Pills (Distribution Breakdown) */}
      <div className="pt-[16px] w-full" data-node-id="1:334">
        <div
          className="bg-[rgba(241,245,235,0.6)] rounded-[12px] p-[12px] flex flex-col gap-[8px] w-full"
          data-node-id="1:335"
        >
          <div className="flex flex-wrap items-center gap-[8px]">
            <span className="font-cairo font-bold text-[11px] leading-[16px] text-[#181d17] shrink-0" data-node-id="1:338">
              توزيع الوحدات:
            </span>

            {/* Available Unit Pill */}
            <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center gap-[6px] px-[10px] py-[4px] rounded-[8px]" data-node-id="1:339">
              <span className="size-[8px] rounded-full bg-[#bccbb0] shrink-0" data-node-id="1:341" />
              <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#181d17]" data-node-id="1:340">
                متاحة: الوحدة 302
              </span>
            </div>

            {/* Maintenance Unit Pill */}
            <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center gap-[6px] px-[10px] py-[4px] rounded-[8px]" data-node-id="1:342">
              <span className="size-[8px] rounded-full bg-[#ba1a1a] shrink-0" data-node-id="1:344" />
              <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#181d17]" data-node-id="1:343">
                صيانة: الوحدة 205
              </span>
            </div>
          </div>

          {/* Occupied Units Pill */}
          <div className="flex items-center">
            <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center gap-[6px] px-[10px] py-[4px] rounded-[8px] flex-wrap" data-node-id="1:345">
              <span className="size-[8px] rounded-full bg-[#34422a] shrink-0" data-node-id="1:347" />
              <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#181d17]" data-node-id="1:346">
                محجوزة: 101، 102، 103، 104، 105، 201، 202، 204، 301، 303
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
