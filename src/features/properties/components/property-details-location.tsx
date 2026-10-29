"use client";

import Image from "next/image";

export function PropertyDetailsLocation() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 flex flex-col gap-4 w-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-neutral-100/60">
        <a
          href="https://maps.google.com/?q=24.8143,46.6341"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-semibold text-[#34422a] hover:underline cursor-pointer"
        >
          <div className="relative size-3 shrink-0">
            <Image
              src="/assets/properties/details/80ea2c0175293444bb6f34bc018084584c301b1a.svg"
              alt="external"
              width={12}
              height={12}
              className="w-full h-full object-contain"
            />
          </div>
          <span>فتح في خرائط Google</span>
        </a>

        <div className="flex items-center gap-2.5">
          <h2 className="font-bold text-[#181d17] text-lg leading-tight">
            الموقع الجغرافي والوصول
          </h2>
          <div className="bg-[#4b5940] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[12px] size-9 flex items-center justify-center shrink-0">
            <div className="relative size-[15px]">
              <Image
                src="/assets/properties/details/fda91819cd094524a6666ce32ba95a8aaf2aaa2f.svg"
                alt="map"
                width={15}
                height={15}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Map Graphic Container */}
      <div className="relative h-[256px] rounded-[12px] overflow-hidden shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] group">
        <Image
          src="/assets/properties/details/b7e7678d81c0c092344e4b56a79bae0fa8e1b908.png"
          alt="Location map"
          fill
          unoptimized
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#34422a]/10 pointer-events-none" />

        {/* Floating Property Location Card Pin */}
        <div className="backdrop-blur-[6px] bg-white/95 rounded-[12px] p-2 flex items-center gap-2.5 absolute bottom-4 right-4 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] max-w-[280px]">
          <div className="bg-[#34422a] rounded-[8px] size-8 flex items-center justify-center shrink-0">
            <div className="relative w-3 h-[15px]">
              <Image
                src="/assets/properties/details/ce96056330b902f2dddbb4a7878008a16cd1a5ad.svg"
                alt="pin"
                width={12}
                height={15}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[#181d17] text-[11px] leading-tight">
              عمارة النخيل
            </span>
            <span className="font-medium text-[#75786f] text-[11px] leading-tight mt-0.5">
              طريق أنس بن مالك، الرياض
            </span>
          </div>
        </div>
      </div>

      {/* Location Metadata Card */}
      <div className="bg-[#f1f5eb] rounded-[12px] p-4 flex flex-col sm:flex-row items-start justify-between gap-4">
        {/* Right in RTL: Address */}
        <div className="flex flex-col items-start gap-1 flex-1">
          <span className="font-medium text-[#75786f] text-[11px] leading-tight">
            العنوان الوطني الموثق
          </span>
          <span className="font-medium text-[#181d17] text-[13px] leading-relaxed text-right">
            طريق أنس بن مالك، حي الياسمين، الرياض 13326، المملكة العربية السعودية
          </span>
        </div>

        {/* Left in RTL: GPS & Distances */}
        <div className="flex flex-col items-start sm:items-end gap-1 flex-1">
          <span className="font-medium text-[#75786f] text-[11px] leading-tight">
            الإحداثيات الدقيقة (GPS)
          </span>
          <div className="flex items-center gap-2">
            <div className="relative size-3.5 shrink-0">
              <Image
                src="/assets/properties/details/de8f0cabd98de72528beb2fb534a7179b458c102.svg"
                alt="gps"
                width={14}
                height={14}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-[#181d17] text-[13px] leading-tight">
              24.8143° N, 46.6341° E
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#75786f] mt-1">
            <span>يبعد 18 دقيقة عن مطار الملك خالد</span>
            <span>•</span>
            <span>12 دقيقة عن مركز KAFD</span>
          </div>
        </div>
      </div>
    </div>
  );
}
