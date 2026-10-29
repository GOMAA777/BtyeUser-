import Image from "next/image";

export function AddPropertyIoTBadge() {
  return (
    <div
      className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[12px] p-[16px] flex flex-col sm:flex-row sm:items-center justify-between gap-[16px] w-full"
      data-node-id="1:2252"
      data-name="Property Operational Configuration Badges (Extra Value for Luxury SaaS Experience)"
    >
      {/* Right Side: IoT Icon & Descriptions */}
      <div className="flex items-center gap-[12px]" data-node-id="1:2255">
        <div
          className="bg-[#4b5940] rounded-[12px] size-[36px] flex items-center justify-center shrink-0 shadow-2xs"
          data-node-id="1:2261"
          data-name="Background"
        >
          <div className="relative size-[20px]" data-node-id="1:2262">
            <Image
              src="/assets/properties/add/iot-lock.svg"
              alt="أقفال ذكية"
              width={20}
              height={20}
              className="size-full object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-[2px] text-right" data-node-id="1:2256">
          <span
            className="font-cairo font-bold text-[12px] leading-[16px] text-[#252a24]"
            data-node-id="1:2258"
          >
            تكامل إنترنت الأشياء والأقفال الذكية (IoT & Smart Locks)
          </span>
          <p
            className="font-cairo font-normal text-[11px] leading-[16.5px] text-[#73786f]"
            data-node-id="1:2260"
          >
            سيتم ربط البوابات الرئيسية والوحدات تلقائياً بمجرد استكمال أسماء وأرقام الوحدات في الخطوة التالية.
          </p>
        </div>
      </div>

      {/* Left Side: Readiness Badge */}
      <div
        className="bg-white border border-[rgba(75,89,64,0.3)] rounded-[8px] px-[13px] py-[7px] self-start sm:self-center shrink-0"
        data-node-id="1:2253"
        data-name="Background+Border"
      >
        <span
          className="font-cairo font-bold text-[12px] leading-[16px] text-[#4b5940] whitespace-nowrap"
          data-node-id="1:2254"
        >
          جاهز للمزامنة الفورية
        </span>
      </div>
    </div>
  );
}

