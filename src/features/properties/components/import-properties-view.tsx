"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { showToast } from "@/lib/toast";

export function ImportPropertiesView() {
  const router = useRouter();

  const handleBookingStart = () => {
    showToast.underDevelopment("الربط مع Booking.com");
  };

  const handleAirbnbStart = () => {
    showToast.underDevelopment("الربط مع Airbnb");
  };

  const handleManualAdd = () => {
    showToast.underDevelopment("إضافة عقار يدوياً");
  };

  const handleApiManagement = () => {
    showToast.underDevelopment("إدارة قنوات الربط والـ API");
  };

  const handleClose = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div
      className="min-h-full w-full flex items-center justify-center p-[16px] sm:p-[24px] lg:p-[32px] bg-[#f6fbf1]"
      dir="rtl"
    >
      {/* Main Architectural Dialog / Workspace Frame */}
      <div
        className="w-full max-w-[896px] bg-white rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden border border-[#dfe4db]/50 flex flex-col"
        data-node-id="1:21375"
        data-name="Main Architectural Dialog / Workspace Frame"
      >
        {/* Top Functional Header Bar */}
        <div
          className="bg-white flex items-start justify-between pb-[24px] pt-[32px] lg:pt-[36px] px-[24px] sm:px-[36px] relative shrink-0 w-full"
          data-node-id="1:21376"
          data-name="Top Functional Header Bar"
        >
          {/* Right Section: Cloud Badge + Title & Subtitle */}
          <div
            className="flex gap-[16px] items-start relative shrink-0 max-w-[calc(100%-52px)]"
            data-node-id="1:21380"
          >
            {/* Green Cloud Icon Badge */}
            <div
              className="bg-[#d8e8cb] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center rounded-[16px] size-[48px] shrink-0"
              data-node-id="1:21387"
              data-name="Background+Shadow"
            >
              <div className="relative size-[24px] flex items-center justify-center">
                <Image
                  src="/assets/import-properties/1f051dbbb677f92658553ae2ae8eadf6761cfa93.svg"
                  alt="استيراد"
                  width={24}
                  height={18}
                  className="w-[23.8px] h-[17.2px] object-contain"
                />
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="flex flex-col gap-[2px] items-start" data-node-id="1:21381">
              <h1
                className="font-cairo font-semibold text-[#181d17] text-[22px] sm:text-[24px] leading-[34px] tracking-normal m-0"
                data-node-id="1:21384"
              >
                استيراد العقارات
              </h1>
              <p
                className="font-cairo font-normal text-[#454840] text-[13px] sm:text-[14px] leading-[22px] m-0"
                data-node-id="1:21386"
              >
                اختر منصة الحجز التي تريد الاستيراد منها لمزامنة الوحدات وبيانات الإشغال تلقائياً.
              </p>
            </div>
          </div>

          {/* Left Section: Close Button */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="إغلاق"
            className="bg-[#ebefe6] hover:bg-[#dfe4db] flex items-center justify-center rounded-[12px] size-[36px] transition-colors cursor-pointer shrink-0"
            data-node-id="1:21377"
            data-name="Button - إغلاق"
          >
            <div className="relative size-[12px] flex items-center justify-center">
              <Image
                src="/assets/import-properties/249bc434ac0dee80ed4f359988cf4f0acb5d4dea.svg"
                alt="إغلاق"
                width={12}
                height={12}
                className="size-[11.7px] object-contain"
              />
            </div>
          </button>
        </div>

        {/* Scope Context Banner: Selected Property Owner */}
        <div
          className="flex flex-col items-start pb-[24px] px-[24px] sm:px-[36px] relative shrink-0 w-full"
          data-node-id="1:21390"
          data-name="Scope Context Banner: Selected Property Owner:margin"
        >
          <div
            className="bg-[#f1f5eb] min-h-[48px] py-[8px] sm:py-0 px-[16px] rounded-[12px] shrink-0 w-full flex items-center justify-center"
            data-node-id="1:21391"
            data-name="Scope Context Banner: Selected Property Owner"
          >
            <div className="flex flex-wrap gap-[8px] items-center justify-center text-center">
              {/* User Avatar Badge */}
              <div
                className="bg-[#ebefe6] flex items-center justify-center rounded-[8px] size-[32px] shrink-0"
                data-node-id="1:21406"
              >
                <div className="relative size-[15px] flex items-center justify-center">
                  <Image
                    src="/assets/import-properties/5dfb61e944f885b7a71dbeadd5567dd0a2110571.svg"
                    alt="مالك العقار"
                    width={15}
                    height={15}
                    className="size-[15px] object-contain"
                  />
                </div>
              </div>

              {/* Owner Label */}
              <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#54624c]">
                مالك العقار المستهدف:
              </span>

              {/* Owner Name */}
              <span className="font-cairo font-semibold text-[14px] leading-[20px] text-[#181d17]">
                محمد عبد الله العتيبي
              </span>

              {/* Owner Code */}
              <span className="font-cairo font-normal text-[11px] leading-[16px] text-[#75786f]">
                (#OWN-4091)
              </span>

              {/* Separator Dot */}
              <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#75786f] px-[2px]">
                •
              </span>

              {/* Property Name and Registered Units */}
              <span className="font-cairo font-normal text-[13px] leading-[20px] text-[#454840]">
                عمارة النخيل والرياض (18 وحدة مسجلة)
              </span>
            </div>
          </div>
        </div>

        {/* Integration Platforms Bento Grid (Card 1: Booking.com, Card 2: Airbnb) */}
        <div
          className="flex flex-col md:flex-row gap-[24px] items-stretch justify-center pb-[24px] px-[24px] sm:px-[36px] relative shrink-0 w-full"
          data-node-id="1:21409"
          data-name="Integration Platforms Bento Grid (Card 1: Booking.com, Card 2: Airbnb)"
        >
          {/* Card 1: Booking.com Card */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#dfe4db]/60 flex flex-1 flex-col items-start justify-between min-w-0 p-[24px] rounded-[16px]"
            data-node-id="1:21453"
            data-name="Booking.com Card"
          >
            {/* Platform Identity Header */}
            <div className="flex flex-col items-start pb-[16px] w-full" data-node-id="1:21454">
              <div className="flex items-center justify-between w-full" data-node-id="1:21455">
                {/* Platform Name and Logo */}
                <div className="flex gap-[12px] items-center shrink-0" data-node-id="1:21459">
                  {/* Booking.com Logo Badge */}
                  <div
                    className="bg-[#003580] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center rounded-[12px] size-[44px] shrink-0"
                    data-node-id="1:21463"
                  >
                    <span className="font-cairo font-bold text-[18px] leading-[28px] text-white tracking-[-0.45px]">
                      B.
                    </span>
                  </div>

                  {/* Platform Title */}
                  <span
                    className="font-cairo font-bold text-[18px] leading-[28px] text-[#181d17]"
                    data-node-id="1:21462"
                  >
                    Booking.com
                  </span>
                </div>

                {/* Status Badge */}
                <div
                  className="bg-[#d8e8cb] flex gap-[6px] items-center px-[10px] py-[4px] rounded-[9999px] shrink-0"
                  data-node-id="1:21456"
                >
                  <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#5a6952]">
                    جاهز للمزامنة
                  </span>
                  <span className="bg-[#3e8a5a] rounded-full size-[6px] shrink-0" />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="pb-[16px] w-full min-h-[62px]" data-node-id="1:21466">
              <p
                className="font-cairo font-normal text-[#454840] text-[14px] leading-[22.75px] m-0"
                data-node-id="1:21468"
              >
                استيراد مباشر وشامل لكافة العقارات، تفاصيل الغرف، وخطط الأسعار وجداول الحجوزات النشطة من شبكة Booking.com.
              </p>
            </div>

            {/* Feature Breakdown Checklist */}
            <div className="flex flex-col items-start pb-[24px] w-full" data-node-id="1:21469">
              <div
                className="bg-[#f1f5eb] flex flex-col gap-[10px] items-start p-[16px] rounded-[12px] w-full"
                data-node-id="1:21470"
              >
                <div className="flex gap-[8px] items-center w-full">
                  <div className="relative size-[15px] shrink-0 flex items-center justify-center">
                    <Image
                      src="/assets/import-properties/50c3cc6a53ddd6390e2e1e51ac4c1dac4f65dc6e.svg"
                      alt=""
                      width={15}
                      height={15}
                      className="size-[15px] object-contain"
                    />
                  </div>
                  <span className="font-cairo font-normal text-[13px] leading-[20px] text-[#181d17]">
                    تفاصيل العقار، الصور والوصف المعتمد
                  </span>
                </div>

                <div className="flex gap-[8px] items-center w-full">
                  <div className="relative size-[15px] shrink-0 flex items-center justify-center">
                    <Image
                      src="/assets/import-properties/50c3cc6a53ddd6390e2e1e51ac4c1dac4f65dc6e.svg"
                      alt=""
                      width={15}
                      height={15}
                      className="size-[15px] object-contain"
                    />
                  </div>
                  <span className="font-cairo font-normal text-[13px] leading-[20px] text-[#181d17]">
                    مواصفات الوحدات، الغرف، وخيارات الأسرة
                  </span>
                </div>

                <div className="flex gap-[8px] items-center w-full">
                  <div className="relative size-[15px] shrink-0 flex items-center justify-center">
                    <Image
                      src="/assets/import-properties/50c3cc6a53ddd6390e2e1e51ac4c1dac4f65dc6e.svg"
                      alt=""
                      width={15}
                      height={15}
                      className="size-[15px] object-contain"
                    />
                  </div>
                  <span className="font-cairo font-normal text-[13px] leading-[20px] text-[#181d17]">
                    جدول الأسعار، قيود الإقامة والتقويم الحي
                  </span>
                </div>

                <div className="flex gap-[8px] items-center w-full">
                  <div className="relative size-[15px] shrink-0 flex items-center justify-center">
                    <Image
                      src="/assets/import-properties/50c3cc6a53ddd6390e2e1e51ac4c1dac4f65dc6e.svg"
                      alt=""
                      width={15}
                      height={15}
                      className="size-[15px] object-contain"
                    />
                  </div>
                  <span className="font-cairo font-normal text-[13px] leading-[20px] text-[#181d17]">
                    الحجوزات القائمة والمؤكدة حتى نهاية العام
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={handleBookingStart}
              className="bg-[#4b5940] hover:bg-[#34422a] text-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[8px] h-[44px] items-center justify-center rounded-[12px] w-full font-cairo font-semibold text-[14px] leading-[20px] transition-all cursor-pointer group"
              data-node-id="1:21491"
              data-name="CTA Button"
            >
              <span>البدء مع Booking.com</span>
              <div className="relative size-[12px] shrink-0 flex items-center justify-center transition-transform group-hover:-translate-x-1">
                <Image
                  src="/assets/import-properties/f1170334bc8d6fbdc5f213c58eae681641febb80.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="size-[12px] object-contain"
                />
              </div>
            </button>
          </div>

          {/* Card 2: Airbnb Card */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#dfe4db]/60 flex flex-1 flex-col items-start justify-between min-w-0 p-[24px] rounded-[16px]"
            data-node-id="1:21410"
            data-name="Airbnb Card"
          >
            {/* Platform Identity Header */}
            <div className="flex flex-col items-start pb-[16px] w-full" data-node-id="1:21411">
              <div className="flex items-center justify-between w-full" data-node-id="1:21412">
                {/* Platform Name and Logo */}
                <div className="flex gap-[12px] items-center shrink-0" data-node-id="1:21416">
                  {/* Airbnb Logo Badge */}
                  <div
                    className="bg-[#ff385c] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center rounded-[12px] size-[44px] shrink-0"
                    data-node-id="1:21420"
                  >
                    <div className="relative size-[20px] flex items-center justify-center">
                      <Image
                        src="/assets/import-properties/d64bf9ec460f8047584fdcc722dca683d2150183.svg"
                        alt="Airbnb"
                        width={20}
                        height={14}
                        className="w-[20px] h-[14px] object-contain"
                      />
                    </div>
                  </div>

                  {/* Platform Title */}
                  <span
                    className="font-cairo font-bold text-[18px] leading-[28px] text-[#181d17]"
                    data-node-id="1:21419"
                  >
                    Airbnb
                  </span>
                </div>

                {/* Status Badge */}
                <div
                  className="bg-[#d8e8cb] flex gap-[6px] items-center px-[10px] py-[4px] rounded-[9999px] shrink-0"
                  data-node-id="1:21413"
                >
                  <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#5a6952]">
                    اتصال مباشر جاهز
                  </span>
                  <span className="bg-[#3e8a5a] rounded-full size-[6px] shrink-0" />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="pb-[16px] w-full min-h-[62px]" data-node-id="1:21423">
              <p
                className="font-cairo font-normal text-[#454840] text-[14px] leading-[22.75px] m-0"
                data-node-id="1:21425"
              >
                استيراد القوائم المصورة، مواصفات الضيافة، إعدادات الحجز الفوري، وتقويم المواعيد وتواريخ الحجوزات من حساب Airbnb.
              </p>
            </div>

            {/* Feature Breakdown Checklist */}
            <div className="flex flex-col items-start pb-[24px] w-full" data-node-id="1:21426">
              <div
                className="bg-[#f1f5eb] flex flex-col gap-[10px] items-start p-[16px] rounded-[12px] w-full"
                data-node-id="1:21427"
              >
                <div className="flex gap-[8px] items-center w-full">
                  <div className="relative size-[15px] shrink-0 flex items-center justify-center">
                    <Image
                      src="/assets/import-properties/50c3cc6a53ddd6390e2e1e51ac4c1dac4f65dc6e.svg"
                      alt=""
                      width={15}
                      height={15}
                      className="size-[15px] object-contain"
                    />
                  </div>
                  <span className="font-cairo font-normal text-[13px] leading-[20px] text-[#181d17]">
                    قوائم الإعلانات المصورة والأوصاف الذكية
                  </span>
                </div>

                <div className="flex gap-[8px] items-center w-full">
                  <div className="relative size-[15px] shrink-0 flex items-center justify-center">
                    <Image
                      src="/assets/import-properties/50c3cc6a53ddd6390e2e1e51ac4c1dac4f65dc6e.svg"
                      alt=""
                      width={15}
                      height={15}
                      className="size-[15px] object-contain"
                    />
                  </div>
                  <span className="font-cairo font-normal text-[13px] leading-[20px] text-[#181d17]">
                    مواصفات الوحدات وتجهيزات الإقامة ووسائل الراحة
                  </span>
                </div>

                <div className="flex gap-[8px] items-center w-full">
                  <div className="relative size-[15px] shrink-0 flex items-center justify-center">
                    <Image
                      src="/assets/import-properties/50c3cc6a53ddd6390e2e1e51ac4c1dac4f65dc6e.svg"
                      alt=""
                      width={15}
                      height={15}
                      className="size-[15px] object-contain"
                    />
                  </div>
                  <span className="font-cairo font-normal text-[13px] leading-[20px] text-[#181d17]">
                    قواعد الإقامة، الخصومات ومخططات الأسعار
                  </span>
                </div>

                <div className="flex gap-[8px] items-center w-full">
                  <div className="relative size-[15px] shrink-0 flex items-center justify-center">
                    <Image
                      src="/assets/import-properties/50c3cc6a53ddd6390e2e1e51ac4c1dac4f65dc6e.svg"
                      alt=""
                      width={15}
                      height={15}
                      className="size-[15px] object-contain"
                    />
                  </div>
                  <span className="font-cairo font-normal text-[13px] leading-[20px] text-[#181d17]">
                    سجل الحجوزات المستقبلية وتفاصيل الضيوف
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={handleAirbnbStart}
              className="bg-[#4b5940] hover:bg-[#34422a] text-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[8px] h-[44px] items-center justify-center rounded-[12px] w-full font-cairo font-semibold text-[14px] leading-[20px] transition-all cursor-pointer group"
              data-node-id="1:21448"
              data-name="CTA Button"
            >
              <span>البدء مع Airbnb</span>
              <div className="relative size-[12px] shrink-0 flex items-center justify-center transition-transform group-hover:-translate-x-1">
                <Image
                  src="/assets/import-properties/f1170334bc8d6fbdc5f213c58eae681641febb80.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="size-[12px] object-contain"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Footer Informational Banner & Alternative Actions */}
        <div
          className="bg-[#ebefe6] flex flex-col gap-[16px] items-start px-[24px] sm:px-[36px] py-[16px] relative shrink-0 w-full"
          data-node-id="1:21496"
          data-name="Footer Informational Banner & Alternative Actions"
        >
          {/* Prerequisite Guidance Note */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#dfe4db]/50 flex flex-col sm:flex-row gap-[12px] items-start sm:items-center justify-between p-[16px] rounded-[12px] shrink-0 w-full"
            data-node-id="1:21497"
            data-name="Prerequisite Guidance Note"
          >
            {/* Right Side: Info Icon & Guidance Message */}
            <div className="flex gap-[8px] items-center shrink-0" data-node-id="1:21503">
              <div className="relative size-[17px] shrink-0 flex items-center justify-center">
                <Image
                  src="/assets/import-properties/20daa9be054f196f13607000b015998b24d9f65c.svg"
                  alt="ملاحظة"
                  width={17}
                  height={17}
                  className="size-[16.7px] object-contain"
                />
              </div>
              <p
                className="font-cairo font-normal text-[13px] leading-[20px] text-[#454840] m-0"
                data-node-id="1:21505"
              >
                للاستيراد بنجاح، يجب أن يكون حساب القناة المراد السحب منها مفعلًا ومرتبطاً أولاً بإعدادات الربط بالمنصة.
              </p>
            </div>

            {/* Left Side: API Channels Management Link */}
            <button
              type="button"
              onClick={handleApiManagement}
              className="flex gap-[4px] items-center text-[#34422a] hover:opacity-80 transition-opacity cursor-pointer shrink-0 group self-end sm:self-auto"
              data-node-id="1:21498"
            >
              <span
                className="font-cairo font-bold text-[12px] leading-[18px] text-[#34422a]"
                data-node-id="1:21502"
              >
                إدارة قنوات الربط والـ API
              </span>
              <div className="relative w-[5px] h-[8px] shrink-0 flex items-center justify-center transition-transform group-hover:-translate-x-0.5">
                <Image
                  src="/assets/import-properties/661bde5a0d95d9300d297c5c9f041c71eeddf37e.svg"
                  alt=""
                  width={5}
                  height={8}
                  className="w-[5px] h-[8px] object-contain"
                />
              </div>
            </button>
          </div>

          {/* Action Tray */}
          <div
            className="flex items-center justify-between pt-[4px] relative shrink-0 w-full"
            data-node-id="1:21508"
            data-name="Action Tray"
          >
            {/* Right Side: Cancel & Return Link */}
            <button
              type="button"
              onClick={handleClose}
              className="flex gap-[8px] items-center text-[#454840] hover:text-[#181d17] transition-colors cursor-pointer group"
              data-node-id="1:21514"
              data-name="Button"
            >
              <div className="relative size-[12px] shrink-0 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <Image
                  src="/assets/import-properties/8a47cd03a0bd54f1ec61257847d41de8de3a3b70.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="size-[12px] object-contain"
                />
              </div>
              <span
                className="font-cairo font-semibold text-[12px] leading-[18px]"
                data-node-id="1:21516"
              >
                إلغاء والعودة لقائمة العقارات
              </span>
            </button>

            {/* Left Side: Manual Property Add Button */}
            <button
              type="button"
              onClick={handleManualAdd}
              className="bg-white hover:bg-[#f1f5eb] text-[#181d17] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#dfe4db]/60 flex gap-[8px] h-[40px] items-center px-[20px] sm:px-[24px] rounded-[12px] shrink-0 font-cairo font-semibold text-[12px] leading-[18px] transition-all cursor-pointer shadow-sm"
              data-node-id="1:21509"
              data-name="Button"
            >
              <div className="relative size-[15px] shrink-0 flex items-center justify-center">
                <Image
                  src="/assets/import-properties/e973b01152554f3e77cd10805c266064bde3d4c8.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="w-[14.3px] h-[15px] object-contain"
                />
              </div>
              <span data-node-id="1:21511">إضافة عقار يدوياً</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
