import Image from "next/image";

export function TrialAssuranceBadge() {
  return (
    <div
      className="flex flex-col items-center pt-[20px] w-full"
      data-node-id="1:17581"
    >
      <div
        className="bg-[#f1f5eb] flex items-center gap-[8px] px-[16px] py-[8px] rounded-full shadow-[0px_1px_1px_rgba(0,0,0,0.03)]"
        data-node-id="1:17582"
      >
        <span
          className="font-cairo font-bold text-[11px] leading-[16px] text-[#54624c] text-center"
          data-node-id="1:17584"
        >
          تسجيل مجاني تجريبي لمدة 14 يوماً بدون الحاجة لبطاقة ائتمانية
        </span>
        <div className="relative size-[15px] shrink-0" data-node-id="1:17585">
          <Image
            src="/assets/register/icon_credit_card.svg"
            alt=""
            width={15}
            height={15}
            className="size-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
