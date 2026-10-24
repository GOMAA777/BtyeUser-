import Image from "next/image";

export function OnboardingReassurance() {
  return (
    <div
      className="w-full max-w-[1024px] pt-[24px]"
      data-node-id="1:21247"
    >
      <div
        className="bg-[#ebefe6] rounded-[16px] p-[16px] md:px-[24px] md:h-[72px] flex items-center justify-start text-right gap-[12px]"
        data-node-id="1:21248"
      >
        {/* Info Icon Box (Physical Right in RTL) */}
        <div
          className="bg-[#dfe4db] size-[36px] rounded-[12px] flex items-center justify-center shrink-0"
          data-node-id="1:21256"
        >
          <div className="relative size-[16.67px]" data-node-id="1:21257">
            <Image
              src="/assets/onboarding/icon_info.svg"
              alt="معلومة"
              width={17}
              height={17}
              className="size-full object-contain"
            />
          </div>
        </div>

        {/* Text information (Physical Left of Icon in RTL) */}
        <div className="flex flex-col items-start text-right" data-node-id="1:21250">
          <span
            className="font-cairo font-semibold text-[12px] leading-[18px] text-[#181d17]"
            data-node-id="1:21252"
          >
            يمكنك ربط منصات الحجز لاحقًا في أي وقت من قائمة الإعدادات.
          </span>
          <span
            className="font-cairo font-normal text-[13px] leading-[20px] text-[#75786f]"
            data-node-id="1:21255"
          >
            لا تقلق، يمكنك دائماً التبديل بين الطرق أو إضافة عقارات إضافية بأي وسيلة تناسب محفظتك.
          </span>
        </div>
      </div>
    </div>
  );
}
