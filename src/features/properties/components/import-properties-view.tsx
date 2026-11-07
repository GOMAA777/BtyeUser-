"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { showToast } from "@/lib/toast";

const CHECK_ICON = "/assets/import-properties/icon_check.svg";
const CTA_ARROW = "/assets/import-properties/icon_cta_arrow.svg";

const BOOKING_FEATURES = [
  "تفاصيل العقار، الصور والوصف المعتمد",
  "مواصفات الوحدات، الغرف، وخيارات الأسرة",
  "جدول الأسعار، قيود الإقامة والتقويم الحي",
  "الحجوزات القائمة والمؤكدة حتى نهاية العام",
] as const;

const AIRBNB_FEATURES = [
  "قوائم الإعلانات المصورة والأوصاف الذكية",
  "مواصفات الوحدات وتجهيزات الإقامة ووسائل الراحة",
  "قواعد الإقامة، الخصومات ومخططات الأسعار",
  "سجل الحجوزات المستقبلية وتفاصيل الضيوف",
] as const;

function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <div className="bg-[#f1f5eb] flex flex-col gap-[10px] items-stretch p-[16px] rounded-[12px] w-full">
      {items.map((label) => (
        <div key={label} className="flex gap-[8px] items-center w-full">
          <div className="relative size-[15px] shrink-0">
            <Image
              src={CHECK_ICON}
              alt=""
              width={15}
              height={15}
              className="size-[15px] object-contain"
            />
          </div>
          <span className="font-cairo font-normal text-[13px] leading-[20px] text-[#181d17] flex-1 text-end">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function ImportPropertiesView() {
  const router = useRouter();

  const handleBookingStart = () => {
    router.push("/properties/import?step=review");
  };

  const handleAirbnbStart = () => {
    showToast.info(
      "الربط مع Airbnb",
      "جاري إعداد قناة الاتصال المباشر بحساب Airbnb..."
    );
  };

  const handleManualAdd = () => {
    router.push("/properties/new");
  };

  const handleApiManagement = () => {
    showToast.underDevelopment("إدارة قنوات الربط والـ API");
  };

  const handleClose = () => {
    router.push("/properties");
  };

  return (
    <div
      className="w-full flex items-center justify-center py-[8px]"
      data-node-id="1:21259"
      data-name="استيراد العقارات"
    >
      <div
        className="w-full max-w-[896px] bg-white rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col"
        data-node-id="1:21375"
        data-name="Main Architectural Dialog / Workspace Frame"
      >
        {/* Header — close (start) + title block (end) */}
        <div
          className="bg-white flex items-start justify-between pb-[24px] pt-[36px] px-[24px] sm:px-[36px] w-full"
          data-node-id="1:21376"
        >
          <button
            type="button"
            onClick={handleClose}
            aria-label="إغلاق"
            className="bg-[#ebefe6] hover:bg-[#dfe4db] flex items-center justify-center rounded-[12px] size-[36px] transition-colors cursor-pointer shrink-0"
            data-node-id="1:21377"
          >
            <div className="relative size-[11.667px]">
              <Image
                src="/assets/import-properties/icon_close.svg"
                alt=""
                width={12}
                height={12}
                className="size-[11.667px] object-contain"
              />
            </div>
          </button>

          <div className="flex gap-[16px] items-start" data-node-id="1:21380">
            <div className="flex flex-col gap-[2px] items-end text-end" data-node-id="1:21381">
              <h1
                className="font-cairo font-semibold text-[#181d17] text-[24px] leading-[34px] m-0"
                data-node-id="1:21384"
              >
                استيراد العقارات
              </h1>
              <p
                className="font-cairo font-normal text-[#454840] text-[14px] leading-[22px] m-0"
                data-node-id="1:21386"
              >
                اختر منصة الحجز التي تريد الاستيراد منها لمزامنة الوحدات وبيانات الإشغال تلقائياً.
              </p>
            </div>
            <div
              className="bg-[#d8e8cb] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center rounded-[16px] size-[48px] shrink-0"
              data-node-id="1:21387"
            >
              <div className="relative w-[23.833px] h-[17.225px]">
                <Image
                  src="/assets/import-properties/icon_cloud_import.svg"
                  alt=""
                  width={24}
                  height={18}
                  className="size-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scope banner */}
        <div className="pb-[24px] px-[24px] sm:px-[36px] w-full" data-node-id="1:21390">
          <div
            className="bg-[#f1f5eb] min-h-[48px] px-[16px] py-[8px] rounded-[12px] w-full flex items-center justify-center"
            data-node-id="1:21391"
          >
            <div className="flex flex-wrap gap-[8px] items-center justify-center">
              <span className="font-cairo font-normal text-[13px] leading-[20px] text-[#454840]">
                عمارة النخيل والرياض (18 وحدة مسجلة)
              </span>
              <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#75786f]">
                •
              </span>
              <span className="font-cairo font-normal text-[11px] leading-[16px] text-[#c5c8bd]">
                (#OWN-4091)
              </span>
              <span className="font-cairo font-semibold text-[14px] leading-[20px] text-[#181d17]">
                محمد عبد الله العتيبي
              </span>
              <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#54624c]">
                مالك العقار المستهدف:
              </span>
              <div
                className="bg-[#ebefe6] flex items-center justify-center rounded-[8px] size-[32px] shrink-0"
                data-node-id="1:21406"
              >
                <div className="relative size-[15px]">
                  <Image
                    src="/assets/import-properties/icon_owner.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="size-[15px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Platform cards — Figma LTR: Airbnb | Booking */}
        <div
          className="flex flex-col md:flex-row gap-[24px] items-stretch justify-center pb-[24px] px-[24px] sm:px-[36px] w-full"
          dir="ltr"
          data-node-id="1:21409"
        >
          {/* Airbnb */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-1 flex-col items-stretch justify-between min-w-0 p-[24px] rounded-[16px]"
            dir="rtl"
            data-node-id="1:21410"
          >
            <div className="pb-[16px] w-full" data-node-id="1:21411">
              <div
                className="flex items-center justify-between w-full"
                dir="ltr"
                data-node-id="1:21412"
              >
                <div
                  className="bg-[#d8e8cb] flex gap-[6px] items-center px-[10px] py-[4px] rounded-full shrink-0"
                  data-node-id="1:21413"
                >
                  <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#5a6952]">
                    اتصال مباشر جاهز
                  </span>
                  <span className="bg-[#3e8a5a] rounded-full size-[6px] shrink-0" />
                </div>
                <div className="flex gap-[12px] items-center" data-node-id="1:21416">
                  <span
                    className="font-cairo font-bold text-[18px] leading-[28px] text-[#181d17]"
                    data-node-id="1:21419"
                  >
                    Airbnb
                  </span>
                  <div
                    className="bg-[#ff385c] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center rounded-[12px] size-[44px] shrink-0"
                    data-node-id="1:21420"
                  >
                    <div className="relative w-[20px] h-[14px]">
                      <Image
                        src="/assets/import-properties/icon_airbnb.svg"
                        alt=""
                        width={20}
                        height={14}
                        className="size-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pb-[16px] w-full min-h-[62px]" data-node-id="1:21423">
              <p
                className="font-cairo font-normal text-[#454840] text-[14px] leading-[22.75px] m-0 text-end"
                data-node-id="1:21425"
              >
                استيراد القوائم المصورة، مواصفات الضيافة، إعدادات الحجز الفوري، وتقويم المواعيد وتواريخ الحجوزات من حساب Airbnb.
              </p>
            </div>

            <div className="pb-[24px] w-full" data-node-id="1:21426">
              <FeatureList items={AIRBNB_FEATURES} />
            </div>

            <button
              type="button"
              onClick={handleAirbnbStart}
              className="bg-[#4b5940] hover:bg-[#34422a] text-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[8px] h-[44px] items-center justify-center rounded-[12px] w-full font-cairo font-semibold text-[14px] leading-[20px] transition-all cursor-pointer"
              dir="ltr"
              data-node-id="1:21448"
            >
              <div className="relative size-[12px] shrink-0">
                <Image
                  src={CTA_ARROW}
                  alt=""
                  width={12}
                  height={12}
                  className="size-[12px] object-contain"
                />
              </div>
              <span>البدء مع Airbnb</span>
            </button>
          </div>

          {/* Booking.com */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-1 flex-col items-stretch justify-between min-w-0 p-[24px] rounded-[16px]"
            dir="rtl"
            data-node-id="1:21453"
          >
            <div className="pb-[16px] w-full" data-node-id="1:21454">
              <div
                className="flex items-center justify-between w-full"
                dir="ltr"
                data-node-id="1:21455"
              >
                <div
                  className="bg-[#d8e8cb] flex gap-[6px] items-center px-[10px] py-[4px] rounded-full shrink-0"
                  data-node-id="1:21456"
                >
                  <span className="font-cairo font-medium text-[11px] leading-[16px] text-[#5a6952]">
                    جاهز للمزامنة
                  </span>
                  <span className="bg-[#3e8a5a] rounded-full size-[6px] shrink-0" />
                </div>
                <div className="flex gap-[12px] items-center" data-node-id="1:21459">
                  <span
                    className="font-cairo font-bold text-[18px] leading-[28px] text-[#181d17]"
                    data-node-id="1:21462"
                  >
                    Booking.com
                  </span>
                  <div
                    className="bg-[#003580] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center rounded-[12px] size-[44px] shrink-0"
                    data-node-id="1:21463"
                  >
                    <span className="font-cairo font-bold text-[18px] leading-[28px] text-white tracking-[-0.45px]">
                      B.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pb-[16px] w-full min-h-[62px]" data-node-id="1:21466">
              <p
                className="font-cairo font-normal text-[#454840] text-[14px] leading-[22.75px] m-0 text-end"
                data-node-id="1:21468"
              >
                استيراد مباشر وشامل لكافة العقارات، تفاصيل الغرف، وخطط الأسعار وجداول الحجوزات النشطة من شبكة Booking.com.
              </p>
            </div>

            <div className="pb-[24px] w-full" data-node-id="1:21469">
              <FeatureList items={BOOKING_FEATURES} />
            </div>

            <button
              type="button"
              onClick={handleBookingStart}
              className="bg-[#4b5940] hover:bg-[#34422a] text-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[8px] h-[44px] items-center justify-center rounded-[12px] w-full font-cairo font-semibold text-[14px] leading-[20px] transition-all cursor-pointer"
              dir="ltr"
              data-node-id="1:21491"
            >
              <div className="relative size-[12px] shrink-0">
                <Image
                  src={CTA_ARROW}
                  alt=""
                  width={12}
                  height={12}
                  className="size-[12px] object-contain"
                />
              </div>
              <span>البدء مع Booking.com</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div
          className="bg-[#ebefe6] flex flex-col gap-[16px] items-stretch px-[24px] sm:px-[36px] py-[16px] w-full"
          data-node-id="1:21496"
        >
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row gap-[12px] items-start sm:items-center justify-between p-[16px] rounded-[12px] w-full"
            dir="ltr"
            data-node-id="1:21497"
          >
            <button
              type="button"
              onClick={handleApiManagement}
              className="flex gap-[4px] items-center text-[#34422a] hover:opacity-80 transition-opacity cursor-pointer shrink-0 order-2 sm:order-1"
              data-node-id="1:21498"
            >
              <div className="relative w-[4.933px] h-[8px] shrink-0">
                <Image
                  src="/assets/import-properties/icon_api_chevron.svg"
                  alt=""
                  width={5}
                  height={8}
                  className="size-full object-contain"
                />
              </div>
              <span className="font-cairo font-bold text-[12px] leading-[18px] text-[#34422a]">
                إدارة قنوات الربط والـ API
              </span>
            </button>

            <div
              className="flex gap-[8px] items-center shrink-0 order-1 sm:order-2"
              data-node-id="1:21503"
            >
              <p
                className="font-cairo font-normal text-[13px] leading-[20px] text-[#454840] m-0 text-end"
                data-node-id="1:21505"
              >
                للاستيراد بنجاح، يجب أن يكون حساب القناة المراد السحب منها مفعلًا ومرتبطاً أولاً بإعدادات الربط بالمنصة.
              </p>
              <div className="relative size-[16.667px] shrink-0">
                <Image
                  src="/assets/import-properties/icon_info.svg"
                  alt=""
                  width={17}
                  height={17}
                  className="size-[16.667px] object-contain"
                />
              </div>
            </div>
          </div>

          <div
            className="flex items-center justify-between pt-[4px] w-full gap-[12px]"
            dir="ltr"
            data-node-id="1:21508"
          >
            <button
              type="button"
              onClick={handleManualAdd}
              className="bg-white hover:bg-[#f1f5eb] text-[#181d17] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[8px] h-[40px] items-center px-[24px] rounded-[12px] shrink-0 font-cairo font-semibold text-[12px] leading-[18px] transition-all cursor-pointer"
              data-node-id="1:21509"
            >
              <span data-node-id="1:21511">إضافة عقار يدوياً</span>
              <div className="relative w-[14.25px] h-[15px] shrink-0">
                <Image
                  src="/assets/import-properties/icon_manual_home.svg"
                  alt=""
                  width={14}
                  height={15}
                  className="size-full object-contain"
                />
              </div>
            </button>

            <button
              type="button"
              onClick={handleClose}
              className="flex gap-[8px] items-center text-[#454840] hover:text-[#181d17] transition-colors cursor-pointer"
              data-node-id="1:21514"
            >
              <span className="font-cairo font-semibold text-[12px] leading-[18px]">
                إلغاء والعودة لقائمة العقارات
              </span>
              <div className="relative size-[12px] shrink-0">
                <Image
                  src="/assets/import-properties/icon_cancel_arrow.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="size-[12px] object-contain"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
