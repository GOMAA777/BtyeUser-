"use client";

import Image from "next/image";
import Link from "next/link";
import { PropertyReadyCard } from "./property-ready-card";

export function PropertyReadyView() {
  return (
    <div
      className="w-full flex flex-col items-center py-[16px] sm:py-[24px]"
      data-node-id="1:22743"
      data-name="Main"
    >
      <div
        className="w-full max-w-[896px] flex flex-col items-center"
        data-node-id="1:22744"
      >
        {/* 1. Success emblem — no stepper in Figma 1:22742 */}
        <div
          className="relative flex items-center justify-center pb-[24px]"
          data-node-id="1:22775"
        >
          <div
            className="relative flex items-center justify-center size-[96px] rounded-full"
            data-node-id="1:22777"
          >
            <div
              aria-hidden
              className="absolute inset-0 rounded-full bg-[rgba(216,232,203,0.6)] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]"
            />
            <div
              className="relative bg-[#34422a] rounded-full size-[64px] flex items-center justify-center shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
              data-node-id="1:22778"
            >
              <div className="relative w-[28.333px] h-[22.667px]" data-node-id="1:22780">
                <Image
                  src="/assets/properties/ready/icon_folder_check.svg"
                  alt=""
                  width={28}
                  height={23}
                  className="size-full object-contain"
                />
              </div>
            </div>
            <div
              className="absolute -top-[4px] -end-[4px] bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-full size-[24px] flex items-center justify-center"
              data-node-id="1:22782"
            >
              <div className="relative w-[14.667px] h-[14px]" data-node-id="1:22783">
                <Image
                  src="/assets/properties/ready/icon_verified_badge.svg"
                  alt=""
                  width={15}
                  height={14}
                  className="size-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. Heading block */}
        <div
          className="w-full max-w-[512px] flex flex-col items-center gap-[4px] text-center pb-[36px]"
          data-node-id="1:22746"
        >
          <div className="pb-[4px]" data-node-id="1:22747">
            <div
              className="bg-[#d8e8cb] flex items-center gap-[4px] px-[8px] py-[2px] rounded-full"
              data-node-id="1:22748"
            >
              <span
                className="font-cairo font-semibold text-[11px] leading-[16px] text-[#121f0d]"
                data-node-id="1:22750"
              >
                جاهز للتشغيل والجدولة الفورية
              </span>
              <div
                className="bg-[#34422a] rounded-full size-[6px] shrink-0"
                data-node-id="1:22751"
              />
            </div>
          </div>

          <h1
            className="font-cairo font-bold text-[36px] leading-[48px] tracking-[-0.9px] text-[#181d17]"
            data-node-id="1:22752"
          >
            عقارك جاهز
          </h1>

          <p
            className="font-cairo font-normal text-[16px] leading-[26px] text-[#454840] max-w-[448px]"
            data-node-id="1:22753"
          >
            تم إنشاء{" "}
            <span className="font-semibold text-[#181d17]">عمارة النخيل</span>
            {" "}وإضافة جميع وحداتها بنجاح إلى منصة ابراج لإدارة وتشغيل العقارات.
          </p>
        </div>

        {/* 3. Property summary card */}
        <div className="w-full max-w-[576px] pb-[36px]" data-node-id="1:22785">
          <PropertyReadyCard />
        </div>

        {/* 4. Actions — primary (عرض العقار) on the right in RTL */}
        <div
          className="w-full max-w-[512px] flex flex-col sm:flex-row items-center justify-center gap-[16px]"
          dir="ltr"
          data-node-id="1:22758"
        >
          <Link
            href="/dashboard"
            className="w-full sm:flex-1 min-w-[200px] h-[50px] px-[32px] bg-white rounded-[12px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] hover:bg-[#f6fbf1] active:scale-[0.99] transition-all flex items-center justify-center gap-[8px]"
            data-node-id="1:22759"
          >
            <span
              className="font-cairo font-semibold text-[14px] leading-[20px] text-[#181d17]"
              data-node-id="1:22761"
            >
              الانتقال إلى الرئيسية
            </span>
            <div className="relative size-[15px] shrink-0" data-node-id="1:22762">
              <Image
                src="/assets/properties/ready/icon_home.svg"
                alt=""
                width={15}
                height={15}
                className="size-full object-contain"
              />
            </div>
          </Link>

          <Link
            href="/properties/details"
            className="w-full sm:flex-1 min-w-[200px] h-[50px] px-[32px] bg-[#34422a] rounded-[12px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] hover:bg-[#2c3823] active:scale-[0.99] transition-all flex items-center justify-center gap-[8px]"
            data-node-id="1:22764"
          >
            <div className="relative w-[13.333px] h-[10px] shrink-0" data-node-id="1:22765">
              <Image
                src="/assets/properties/ready/icon_arrow_view.svg"
                alt=""
                width={13}
                height={10}
                className="size-full object-contain"
              />
            </div>
            <span
              className="font-cairo font-semibold text-[14px] leading-[20px] text-white"
              data-node-id="1:22768"
            >
              عرض العقار
            </span>
          </Link>
        </div>

        {/* 5. Trust line */}
        <div className="pt-[36px]" data-node-id="1:22769">
          <div
            className="flex items-center gap-[8px]"
            data-node-id="1:22770"
          >
            <span
              className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840] text-end"
              data-node-id="1:22772"
            >
              تم تسجيل وتوثيق صك الملكية برقم اعتماد معتمد لدى الهيئة العامة للعقار
            </span>
            <div className="relative w-[12px] h-[15px] shrink-0" data-node-id="1:22773">
              <Image
                src="/assets/properties/ready/icon_deed_shield.svg"
                alt=""
                width={12}
                height={15}
                className="size-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
