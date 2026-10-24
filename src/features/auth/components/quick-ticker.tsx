import Image from "next/image";

export function QuickTicker() {
  return (
    <div
      className="bg-card-ticker drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-between px-[16px] py-[16px] rounded-[16px] w-full max-w-[576px]"
      data-node-id="1:77"
    >
      {/* Metric 1: Uptime */}
      <div className="flex gap-[12px] items-center" data-node-id="1:78">
        <div className="flex flex-col items-start w-[120px]" data-node-id="1:79">
          <div className="w-full text-right font-cairo font-semibold text-[14px] leading-[20px] text-text-primary" data-node-id="1:81">
            99.98%
          </div>
          <div className="w-full text-right font-cairo font-medium text-[11px] leading-[16px] text-text-muted" data-node-id="1:83">
            جاهزية واستقرار السيرفرات
          </div>
        </div>
        <div className="bg-white flex items-center justify-center rounded-[12px] size-[36px] shrink-0" data-node-id="1:84">
          <div className="relative w-[13.3px] h-[10.7px]" data-node-id="1:85">
            <Image
              src="/assets/auth/icon_metric_check.svg"
              alt=""
              width={13}
              height={11}
              className="size-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="bg-divider h-[32px] w-px shrink-0" data-node-id="1:87" />

      {/* Metric 2: Managed Units */}
      <div className="flex gap-[12px] items-center" data-node-id="1:88">
        <div className="flex flex-col items-start w-[117px]" data-node-id="1:89">
          <div className="w-full text-right font-cairo font-semibold text-[14px] leading-[20px] text-text-primary" data-node-id="1:91">
            +18,400 وحدة
          </div>
          <div className="w-full text-right font-cairo font-medium text-[11px] leading-[16px] text-text-muted" data-node-id="1:93">
            تدار وتشغّل نشطاً بالمنصة
          </div>
        </div>
        <div className="bg-white flex items-center justify-center rounded-[12px] size-[36px] shrink-0" data-node-id="1:94">
          <div className="relative size-[12px]" data-node-id="1:95">
            <Image
              src="/assets/auth/icon_metric_building.svg"
              alt=""
              width={12}
              height={12}
              className="size-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
