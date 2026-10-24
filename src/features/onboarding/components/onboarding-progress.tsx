export function OnboardingProgress() {
  return (
    <div
      className="flex flex-col items-center max-w-[896px] w-full pb-[36px] text-center"
      data-node-id="1:21083"
    >
      {/* 1. Pill Badge */}
      <div className="pb-[16px]" data-node-id="1:21084">
        <div
          className="bg-[rgba(216,232,203,0.6)] flex items-center gap-[8px] px-[16px] py-[6px] rounded-[9999px]"
          data-node-id="1:21085"
        >
          <div
            className="font-cairo font-semibold text-[12px] leading-[18px] text-[#5a6952] tracking-[0.3px]"
            data-node-id="1:21087"
          >
            الخطوة 1 من 3 · تهيئة المحفظة العقارية
          </div>
          <div
            className="bg-[#34422a] size-[8px] rounded-[9999px] shrink-0"
            data-node-id="1:21088"
          />
        </div>
      </div>

      {/* 2. Main Title */}
      <h1
        className="font-cairo font-bold text-[36px] leading-[48px] tracking-[-0.9px] text-[#181d17]"
        data-node-id="1:21089"
      >
        أضف عقاراتك
      </h1>

      {/* 3. Subtitle */}
      <div className="max-w-[576px] pt-[4px]" data-node-id="1:21090">
        <p
          className="font-cairo font-normal text-[16px] leading-[26px] text-[#75786f]"
          data-node-id="1:21092"
        >
          ابدأ بإضافة عقاراتك إلى المنصة بالطريقة التي تناسب وتيرة أعمالك الفندقية وإدارة أملاكك.
        </p>
      </div>

      {/* 4. Three-step progress bar */}
      <div className="w-[256px] pt-[24px]" data-node-id="1:21093">
        <div
          className="flex items-center justify-center gap-[8px] w-full"
          data-node-id="1:21094"
        >
          {/* Step 1: Active (dark green) on right in RTL */}
          <div
            className="bg-[#34422a] h-[6px] flex-1 rounded-[9999px] transition-all"
            data-node-id="1:21097"
          />
          {/* Step 2: Inactive (light sage) */}
          <div
            className="bg-[#dfe4db] h-[6px] flex-1 rounded-[9999px] transition-all"
            data-node-id="1:21096"
          />
          {/* Step 3: Inactive (light sage) */}
          <div
            className="bg-[#dfe4db] h-[6px] flex-1 rounded-[9999px] transition-all"
            data-node-id="1:21095"
          />
        </div>
      </div>
    </div>
  );
}
