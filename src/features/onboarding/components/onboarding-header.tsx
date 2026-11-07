import Image from "next/image";
import Link from "next/link";

export function OnboardingHeader() {
  return (
    <header className="w-full flex flex-col items-center justify-center pt-[36px] pb-[16px]" data-node-id="1:21055">
      <Link
        href="/dashboard"
        className="flex items-center gap-[8px] group transition-opacity hover:opacity-90"
        data-node-id="1:21056"
      >
        <div className="flex flex-col items-end text-right" data-node-id="1:21057">
          <span
            className="font-cairo font-semibold text-[18px] leading-[28px] text-[#34422a] tracking-[-0.45px] whitespace-nowrap"
            data-node-id="1:21059"
          >
            ابراج لإدارة الأصول
          </span>
          <span
            className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840] whitespace-nowrap -mt-1"
            data-node-id="1:21062"
          >
            منظومة إدارة المحافظ العقارية
          </span>
        </div>
        <div
          className="bg-[#34422a] size-[40px] rounded-[12px] flex items-center justify-center shadow-[0px_2px_8px_-2px_rgba(38,51,32,0.12)] shrink-0"
          data-node-id="1:21063"
        >
          <div className="relative w-[18.333px] h-[16.5px]" data-node-id="1:21065">
            <Image
              src="/assets/onboarding/logo_building.svg"
              alt="شعار ابراج"
              width={18}
              height={17}
              className="size-full object-contain"
            />
          </div>
        </div>
      </Link>
    </header>
  );
}
