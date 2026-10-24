"use client";

import Image from "next/image";

interface ArrivalRow {
  id: string;
  guestName: string;
  initials: string;
  phone: string;
  unit: string;
  unitType: string;
  time: string;
  day: string;
  source: string;
  status: string;
}

const arrivalsData: ArrivalRow[] = [
  {
    id: "1",
    guestName: "سعود العتيبي",
    initials: "س.ع",
    phone: "+966 66 78787",
    unit: "الوحدة 105",
    unitType: "استوديو تنفيذي",
    time: "02:00 م",
    day: "(اليوم)",
    source: "whatsapp API",
    status: "كود الباب مفعل",
  },
  {
    id: "2",
    guestName: "سعود العتيبي",
    initials: "س.ع",
    phone: "+966 66 78787",
    unit: "الوحدة 105",
    unitType: "استوديو تنفيذي",
    time: "02:00 م",
    day: "(اليوم)",
    source: "whatsapp API",
    status: "بانتظار السداد",
  },
  {
    id: "3",
    guestName: "سعود العتيبي",
    initials: "س.ع",
    phone: "+966 66 78787",
    unit: "الوحدة 105",
    unitType: "استوديو تنفيذي",
    time: "02:00 م",
    day: "(اليوم)",
    source: "whatsapp API",
    status: "مؤكد و مسدد",
  },
];

export function UpcomingArrivalsTable() {
  return (
    <div
      className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-[24px] flex flex-col justify-between h-[442px] w-full"
      data-node-id="1:451"
      data-name="Right Side (Desktop RTL): Upcoming Arrivals Table (8 cols)"
    >
      <div className="flex flex-col gap-[16px] w-full">
        {/* Header */}
        <div className="flex items-center justify-between w-full" data-node-id="1:453">
          {/* Left: Filter dropdown */}
          <div className="flex items-center gap-[6px]" data-node-id="1:454">
            <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840]" data-node-id="1:459">
              تصفية حسب:
            </span>
            <div className="bg-[#f1f5eb] flex items-center px-[12px] py-[6px] rounded-[12px]" data-node-id="1:455">
              <span className="font-cairo font-medium text-[11px] leading-[12px] text-[#181d17]" data-node-id="1:457">
                كل المنصات
              </span>
            </div>
          </div>

          {/* Right: Title + Count Badge */}
          <div className="flex items-center gap-[8px]" data-node-id="1:460">
            <span className="bg-[#f1f5eb] text-[#34422a] font-cairo font-medium text-[11px] leading-[16px] px-[10px] py-[2px] rounded-full" data-node-id="1:461">
              3 نزلاء قادمون
            </span>
            <h3 className="font-cairo font-semibold text-[18px] leading-[28px] text-[#181d17]" data-node-id="1:464">
              الوصول القادم
            </h3>
          </div>
        </div>

        {/* Table Container */}
        <div className="w-full overflow-x-auto" data-node-id="1:465">
          <table className="w-full text-right border-collapse">
            {/* Table Header */}
            <thead>
              <tr className="bg-[#f1f5eb] h-[52px] rounded-[12px]">
                <th className="font-cairo font-bold text-[12px] leading-[18px] text-[#454840] px-[16px] rounded-r-[12px] whitespace-nowrap">
                  العميل
                </th>
                <th className="font-cairo font-bold text-[12px] leading-[18px] text-[#454840] px-[16px] whitespace-nowrap">
                  الوحدة
                </th>
                <th className="font-cairo font-bold text-[12px] leading-[18px] text-[#454840] px-[16px] whitespace-nowrap">
                  وقت الوصول
                </th>
                <th className="font-cairo font-bold text-[12px] leading-[18px] text-[#454840] px-[16px] whitespace-nowrap">
                  مصدر الحجز
                </th>
                <th className="font-cairo font-bold text-[12px] leading-[18px] text-[#454840] px-[16px] rounded-l-[12px] whitespace-nowrap">
                  الحالة والأقفال
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {arrivalsData.map((row) => (
                <tr key={row.id} className="h-[74px] border-b border-neutral-100 last:border-b-0">
                  {/* Client */}
                  <td className="px-[16px] py-[12px] whitespace-nowrap">
                    <div className="flex items-center gap-[10px]">
                      <div className="bg-[#4b5940] size-[32px] rounded-full flex items-center justify-center shrink-0">
                        <span className="font-cairo font-bold text-[12px] leading-[16px] text-white">
                          {row.initials}
                        </span>
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="font-cairo font-bold text-[12px] leading-[16px] text-black">
                          {row.guestName}
                        </span>
                        <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840]">
                          {row.phone}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Unit */}
                  <td className="px-[16px] py-[12px] whitespace-nowrap">
                    <div className="flex flex-col items-start">
                      <span className="font-cairo font-semibold text-[12px] leading-[18px] text-[#181d17]">
                        {row.unit}
                      </span>
                      <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840]">
                        {row.unitType}
                      </span>
                    </div>
                  </td>

                  {/* Arrival Time */}
                  <td className="px-[16px] py-[12px] whitespace-nowrap">
                    <div className="flex flex-col items-start">
                      <span className="font-cairo font-semibold text-[12px] leading-[18px] text-[#181d17]">
                        {row.time}
                      </span>
                      <span className="font-cairo font-semibold text-[12px] leading-[18px] text-[#181d17]">
                        {row.day}
                      </span>
                    </div>
                  </td>

                  {/* Booking Source */}
                  <td className="px-[16px] py-[12px] whitespace-nowrap">
                    <span className="bg-[#f1f5eb] font-cairo font-semibold text-[11px] leading-[16px] text-[#454840] px-[8px] py-[3px] rounded-[8px] inline-block">
                      {row.source}
                    </span>
                  </td>

                  {/* Status & Smart Locks */}
                  <td className="px-[16px] py-[12px] whitespace-nowrap">
                    <span className="bg-[#d8e8cb] font-cairo font-semibold text-[11px] leading-[16px] text-[#252820] px-[12px] py-[4px] rounded-full inline-block">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-[16px] w-full" data-node-id="1:526">
        <button
          type="button"
          className="flex items-center gap-[4px] hover:opacity-80 transition-opacity"
          data-node-id="1:527"
        >
          <div className="relative size-[11px] flex items-center justify-center shrink-0" data-node-id="1:528">
            <Image
              src="/assets/dashboard/e9e0c880f5a2886e2f3c9de6b6042c0370e51a64.svg"
              alt="Arrow"
              width={11}
              height={11}
              className="object-contain"
            />
          </div>
          <span className="font-cairo font-bold text-[11px] leading-[16px] text-[#34422a]" data-node-id="1:531">
            سجل الوصول الكامل
          </span>
        </button>

        <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840]" data-node-id="1:533">
          إجمالي وصول الأسبوع: 14 نزيل
        </span>
      </div>
    </div>
  );
}
