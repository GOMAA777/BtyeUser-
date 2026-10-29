import Image from "next/image";

export default function Loading() {
  return (
    <div
      className="min-h-screen w-full bg-[#f1f5eb] flex flex-col items-center justify-center p-6 font-cairo select-none"
      dir="rtl"
    >
      <div className="flex flex-col items-center max-w-sm text-center">
        {/* Animated Brand Emblem */}
        <div className="relative mb-6">
          {/* Subtle Outer Radar / Pulse Rings */}
          <div className="absolute inset-0 -m-3 rounded-full bg-[#d8e8cb]/70 animate-ping opacity-50" />
          <div className="absolute inset-0 -m-1.5 rounded-full border border-[#34422a]/20 animate-pulse" />

          {/* Central Logo Container */}
          <div className="relative size-20 rounded-full bg-[#252E22] border-2 border-[rgba(201,185,154,0.45)] flex items-center justify-center shadow-md">
            <Image
              src="/assets/brand/logo.png"
              alt="أبراج"
              width={46}
              height={46}
              priority
              className="object-contain animate-pulse"
            />
          </div>
        </div>

        {/* Text */}
        <h2 className="font-bold text-lg text-[#181d17] mb-1.5">
          جاري تحميل البيانات...
        </h2>
        <p className="text-xs text-[#454840] leading-relaxed mb-5">
          يرجى الانتظار لحظات بينما نقوم بتجهيز الصفحة والمؤشرات العقارية
        </p>

        {/* Elegant Animated Progress Bar */}
        <div className="w-48 h-1.5 bg-[#dfe4db] rounded-full overflow-hidden relative">
          <div className="absolute inset-y-0 w-1/3 bg-[#34422a] rounded-full animate-indeterminate-bar" />
        </div>
      </div>
    </div>
  );
}
