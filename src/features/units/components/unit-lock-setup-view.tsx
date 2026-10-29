"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/lib/toast";

export function UnitLockSetupView() {
  const router = useRouter();
  const [accessMode, setAccessMode] = useState<"dynamic" | "static">("dynamic");
  const [firstOpenNotification, setFirstOpenNotification] = useState(true);
  const [cleaningStaffCode, setCleaningStaffCode] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      showToast.success("تم حفظ إعدادات القفل الذكي وقواعد الأتمتة بنجاح");
      router.push("/units/details");
    }, 600);
  };

  const handleUnlink = () => {
    showToast.error("تم فصل القفل عن الوحدة — حالة الاتصال معلقة");
    router.push("/units/lock/error");
  };

  return (
    <div
      className="min-h-full w-full bg-[#f1f5eb] flex flex-col p-4 sm:p-6 lg:p-8 gap-6 pb-24"
      data-node-id="1:22004"
      data-name="إعداد القفل الذكي"
      dir="rtl"
    >
      {/* 1. TOP HERO GREETING BAR */}
      <div
        className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-neutral-100/60"
        data-node-id="1:22006"
        data-name="Section - TOP HERO GREETING BAR"
      >
        <div className="flex flex-col items-start gap-1">
          <h1
            className="font-bold text-[#181d17] text-[24px] sm:text-[28px] leading-[34px]"
            data-node-id="1:22011"
          >
            إعداد القفل الذكي
          </h1>
          <p
            className="font-normal text-[#454840] text-[14px] leading-[22px]"
            data-node-id="1:22014"
          >
            اربط القفل الرقمي بالوحدة لإدارة ومزامنة أكواد الدخول تلقائيًا مع الحجوزات الفندقية
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Tag 1: عمارة النخيل الفندقية */}
          <div
            className="bg-[#ebefe6] flex gap-1.5 items-center px-3 py-1.5 rounded-[12px]"
            data-node-id="1:22015"
          >
            <span className="font-medium text-[#181d17] text-[11px] leading-[16px]">
              عمارة النخيل الفندقية - الرياض
            </span>
            <div className="h-[12px] w-[13.3px] relative shrink-0">
              <Image
                src="/assets/units/lock/1ed53.svg"
                alt="building"
                width={13}
                height={12}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Tag 2: الوحدة 204 */}
          <div
            className="bg-[#d8e8cb] flex gap-1.5 items-center px-3 py-1.5 rounded-[12px]"
            data-node-id="1:22020"
          >
            <span className="font-semibold text-[#121f0d] text-[11px] leading-[16px]">
              الوحدة 204 (جناح ديلوكس)
            </span>
            <div className="h-[10px] w-[14.7px] relative shrink-0">
              <Image
                src="/assets/units/lock/c80ee.svg"
                alt="key"
                width={15}
                height={10}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT GRID (8 Cols Right, 4 Cols Left) */}
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        data-node-id="1:22025"
        data-name="Main Content Grid"
      >
        {/* RIGHT COLUMN: Setup Workflow (8 Cols) */}
        <div
          className="lg:col-span-8 flex flex-col gap-6"
          data-node-id="1:22026"
          data-name="Right Column: Setup Workflow (8 Cols)"
        >
          {/* SECTION 1: Provider Connectivity */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-5 sm:p-6 flex flex-col gap-4 border border-neutral-100/60"
            data-node-id="1:22027"
            data-name="SECTION 1: Provider Connectivity"
          >
            <div className="flex items-start justify-between w-full" data-node-id="1:22028">
              <div className="flex gap-4 items-center">
                <div
                  className="bg-[#f1f5eb] flex items-center justify-center rounded-[16px] shrink-0 size-14 relative"
                  data-node-id="1:22039"
                >
                  <div className="relative size-[34px]">
                    <Image
                      src="/assets/units/lock/b0a66.svg"
                      alt="TTLock"
                      width={34}
                      height={34}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Connected Badge */}
                  <div
                    className="absolute -bottom-1 -right-1 bg-[#d8e8cb] border-2 border-white rounded-full size-4 flex items-center justify-center"
                    data-node-id="1:22045"
                  >
                    <div className="bg-[#34422a] rounded-full size-2" />
                  </div>
                </div>

                <div className="flex flex-col items-start text-right">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-[#181d17] text-[18px] leading-[28px]">
                      مزود الخدمة: TTLock
                    </h3>
                    <div className="bg-[#dfe4db] px-2.5 py-0.5 rounded-full shrink-0">
                      <span className="font-medium text-[#454840] text-[11px] leading-[16px]">
                        Cloud API Partner
                      </span>
                    </div>
                  </div>
                  <p className="font-normal text-[#454840] text-[13px] leading-[20px] mt-0.5">
                    بوابة الربط السحابي المعتمدة لأجهزة الأقفال الذكية والبوابات اللاسلكية.
                  </p>
                </div>
              </div>
            </div>

            {/* OAuth Security Note */}
            <div
              className="bg-[#f1f5eb] p-3.5 rounded-[12px] flex items-center gap-3 w-full"
              data-node-id="1:22048"
            >
              <div className="h-[17px] w-[13px] relative shrink-0">
                <Image
                  src="/assets/units/lock/07c69.svg"
                  alt="shield"
                  width={13}
                  height={17}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-normal text-[#454840] text-[13px] leading-[20px] text-right">
                يتم الربط بمصادقة مشفرة{" "}
                <span className="font-semibold text-[#181d17]">OAuth 2.0 Enterprise</span>{" "}
                المباشرة. لا يتم تخزين مفاتيح التشفير أو كلمات مرور الحساب على خوادم التطبيق المحلية امتثالاً للمعايير.
              </p>
            </div>

            {/* Controls */}
            <div
              className="flex items-center justify-between pt-2 border-t border-[#ebefe6]"
              data-node-id="1:22056"
            >
              <div className="flex gap-2 items-center text-[#454840]">
                <div className="h-[14px] w-[15px] relative shrink-0">
                  <Image
                    src="/assets/units/lock/e1296.svg"
                    alt="server"
                    width={15}
                    height={14}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-medium text-[11px] leading-[16px]">
                  رمز الخادم: tt-sa-central-01
                </span>
              </div>

              <button
                type="button"
                onClick={() => showToast.success("تم تحديث جلسة مصادقة حساب TTLock بنجاح")}
                className="bg-[#34422a] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] hover:bg-[#283420] active:scale-98 transition-all flex gap-2 h-[44px] items-center px-5 rounded-[12px] text-white shadow-sm cursor-pointer"
                data-node-id="1:22063"
              >
                <div className="h-[14px] w-[15px] relative shrink-0">
                  <Image
                    src="/assets/units/lock/51826.svg"
                    alt="refresh"
                    width={15}
                    height={14}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-semibold text-[14px] leading-[20px] text-white">
                  تحديث مصادقة الحساب
                </span>
              </button>
            </div>
          </div>

          {/* SECTION 2: Lock Selector */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-5 sm:p-6 flex flex-col gap-4 border border-neutral-100/60"
            data-node-id="1:22068"
            data-name="SECTION 2: Lock Selector"
          >
            <div className="flex items-center justify-between w-full" data-node-id="1:22069">
              <div className="flex gap-2 items-center">
                <div className="bg-[#ebefe6] flex items-center justify-center rounded-[8px] size-8 shrink-0">
                  <div className="h-[10px] w-[19px] relative shrink-0">
                    <Image
                      src="/assets/units/lock/9fd6a.svg"
                      alt="lock-select"
                      width={19}
                      height={10}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <h2 className="font-semibold text-[#181d17] text-[18px] leading-[28px]">
                  اختيار القفل وتخصيصه للوحدة
                </h2>
              </div>

              <div className="bg-[#f1f5eb] px-2.5 py-1 rounded-[8px] shrink-0">
                <span className="font-medium text-[#454840] text-[11px] leading-[16px]">
                  3 أجهزة مكتشفة
                </span>
              </div>
            </div>

            {/* Lock Selector input */}
            <div className="flex flex-col gap-2 w-full" data-node-id="1:22078">
              <label className="font-semibold text-[#181d17] text-[14px] leading-[20px] text-right">
                القفل المخصص للباب الرئيسي
              </label>

              <div
                className="bg-[#f1f5eb] h-[48px] rounded-[12px] px-3.5 flex items-center justify-between w-full border border-neutral-200/50 cursor-pointer"
                data-node-id="1:22081"
              >
                <div className="h-[18px] w-[13px] relative shrink-0">
                  <Image
                    src="/assets/units/lock/b4bbc.svg"
                    alt="lock-icon"
                    width={13}
                    height={18}
                    className="w-full h-full object-contain"
                  />
                </div>

                <span className="font-normal text-[#181d17] text-[14px] leading-[22px] text-right px-2 flex-1">
                  Lock 204 — Main Door (MAC: D4:36:39:B2:A1 · بطارية 94% · إشارة Zigbee ممتازة)
                </span>

                <div className="h-[6px] w-[10px] relative shrink-0">
                  <Image
                    src="/assets/units/lock/b4d1a.svg"
                    alt="chevron"
                    width={10}
                    height={6}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex gap-1.5 items-center justify-end text-[#454840] text-[13px] pt-0.5">
                <span>يتم جلب حالة الأقفال اللحظية عبر بوابة G2 Hub المثبتة بممر الدور الثاني.</span>
                <div className="relative size-[13px] shrink-0">
                  <Image
                    src="/assets/units/lock/9dc88.svg"
                    alt="info"
                    width={13}
                    height={13}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Footer controls */}
            <div
              className="flex items-center justify-between pt-2 border-t border-[#ebefe6]"
              data-node-id="1:22094"
            >
              <span className="font-medium text-[#454840] text-[11px] leading-[16px]">
                الرقم التسلسلي: TTL-204-NX-99
              </span>

              <div className="flex gap-2 items-center">
                <button
                  type="button"
                  onClick={() => showToast.info("جاري إعادة مسح واكتشاف الأقفال القريبة...")}
                  className="flex gap-1 items-center h-[40px] px-3 rounded-[12px] text-[#454840] hover:text-[#181d17] hover:bg-black/5 font-semibold text-[12px] transition-colors cursor-pointer"
                  data-node-id="1:22098"
                >
                  <div className="relative size-[12px] shrink-0">
                    <Image
                      src="/assets/units/lock/2ec63.svg"
                      alt="scan"
                      width={12}
                      height={12}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span>إعادة مسح الأجهزة</span>
                </button>

                <button
                  type="button"
                  onClick={() => showToast.success("تم تحديث تعيين القفل Lock 204 للوحدة")}
                  className="bg-[#4b5940] hover:bg-[#3d4934] active:scale-98 transition-all flex gap-1.5 h-[40px] items-center px-4 rounded-[12px] text-white font-semibold text-[12px] shadow-xs cursor-pointer"
                  data-node-id="1:22103"
                >
                  <div className="h-[8px] w-[15px] relative shrink-0">
                    <Image
                      src="/assets/units/lock/69b63.svg"
                      alt="assign"
                      width={15}
                      height={8}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span>تحديث تعيين القفل</span>
                </button>
              </div>
            </div>
          </div>

          {/* SECTION 4: Access Code Automation Engine */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-5 sm:p-6 flex flex-col gap-5 border border-neutral-100/60"
            data-node-id="1:22108"
            data-name="SECTION 4: Access Code Automation Engine"
          >
            <div className="flex items-center justify-end gap-2" data-node-id="1:22110">
              <h2 className="font-semibold text-[#181d17] text-[18px] leading-[28px]">
                طريقة إنشاء وإدارة أكواد الدخول
              </h2>
              <div className="bg-[#ebefe6] flex items-center justify-center rounded-[8px] size-8 shrink-0">
                <div className="h-[13px] w-[17px] relative shrink-0">
                  <Image
                    src="/assets/units/lock/85375.svg"
                    alt="automation"
                    width={17}
                    height={13}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Radio Options Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-node-id="1:22117">
              {/* Option 1: Dynamic Per-Booking (Recommended) */}
              <div
                onClick={() => setAccessMode("dynamic")}
                className={`p-4 rounded-[16px] flex flex-col gap-2 cursor-pointer transition-all ${
                  accessMode === "dynamic"
                    ? "bg-[rgba(216,232,203,0.4)] border-2 border-[#34422a] shadow-xs"
                    : "bg-[#f1f5eb] border-2 border-transparent"
                }`}
                data-node-id="1:22118"
              >
                <div className="flex items-center justify-between w-full">
                  <div
                    className={`rounded-full size-4 border flex items-center justify-center ${
                      accessMode === "dynamic"
                        ? "border-[#34422a] bg-white"
                        : "border-[#767676] bg-white"
                    }`}
                  >
                    {accessMode === "dynamic" && (
                      <div className="bg-[#34422a] rounded-full size-2.5" />
                    )}
                  </div>
                  <h3 className="font-bold text-[#181d17] text-[18px] leading-[28px] text-right">
                    كود لكل حجز (أوتوماتيكي)
                  </h3>
                </div>

                <p className="font-normal text-[#454840] text-[13px] leading-[20px] text-right">
                  توليد ديناميكي مشفر مرتبط ببيانات الحجز. يبدأ مع وقت تسجيل الوصول وينتهي تلقائياً عند المغادرة.
                </p>
              </div>

              {/* Option 2: Static Code */}
              <div
                onClick={() => setAccessMode("static")}
                className={`p-4 rounded-[16px] flex flex-col gap-2 cursor-pointer transition-all ${
                  accessMode === "static"
                    ? "bg-[rgba(216,232,203,0.4)] border-2 border-[#34422a] shadow-xs"
                    : "bg-[#f1f5eb] border-2 border-transparent"
                }`}
                data-node-id="1:22128"
              >
                <div className="flex items-center justify-between w-full">
                  <div
                    className={`rounded-full size-4 border flex items-center justify-center ${
                      accessMode === "static"
                        ? "border-[#34422a] bg-white"
                        : "border-[#767676] bg-white"
                    }`}
                  >
                    {accessMode === "static" && (
                      <div className="bg-[#34422a] rounded-full size-2.5" />
                    )}
                  </div>
                  <h3 className="font-semibold text-[#181d17] text-[18px] leading-[28px] text-right">
                    كود رئيسي ثابت
                  </h3>
                </div>

                <p className="font-normal text-[#454840] text-[13px] leading-[20px] text-right">
                  كود دائم محدد من قبل المالك أو مدير الصيانة. لا يتغير تلقائيًا مع الحجوزات، ويُستخدم للطوارئ والوصول اليدوي.
                </p>
              </div>
            </div>

            {/* Automation Add-ons */}
            <div className="flex flex-col gap-3 pt-2" data-node-id="1:22136">
              <span className="font-semibold text-[#181d17] text-[14px] leading-[20px] text-right">
                إعدادات الأتمتة المتقدمة للوحدة:
              </span>

              {/* Toggle 1 */}
              <div
                onClick={() => setFirstOpenNotification(!firstOpenNotification)}
                className="bg-[#f1f5eb] p-3.5 rounded-[12px] flex items-center justify-between gap-3 cursor-pointer hover:bg-[#ebefe6] transition-colors"
                data-node-id="1:22139"
              >
                <div className="relative size-5 shrink-0">
                  <Image
                    src="/assets/units/lock/2608e.svg"
                    alt="check"
                    width={20}
                    height={20}
                    className={`w-full h-full object-contain transition-opacity ${
                      firstOpenNotification ? "opacity-100" : "opacity-30 grayscale"
                    }`}
                  />
                </div>

                <div className="flex flex-col items-end text-right flex-1">
                  <h4 className="font-semibold text-[#181d17] text-[14px] leading-[20px]">
                    إشعار فوري عند الفتح الأول
                  </h4>
                  <p className="font-normal text-[#454840] text-[13px] leading-[20px]">
                    إرسال تنبيه لفريق الاستقبال فور فتح النزيل لباب الجناح لأول مرة لتأكيد إتمام تسجيل الدخول السلس.
                  </p>
                </div>
              </div>

              {/* Toggle 2 */}
              <div
                onClick={() => setCleaningStaffCode(!cleaningStaffCode)}
                className="bg-[#f1f5eb] p-3.5 rounded-[12px] flex items-center justify-between gap-3 cursor-pointer hover:bg-[#ebefe6] transition-colors"
                data-node-id="1:22149"
              >
                <div className="relative size-5 shrink-0">
                  <Image
                    src="/assets/units/lock/2608e.svg"
                    alt="check"
                    width={20}
                    height={20}
                    className={`w-full h-full object-contain transition-opacity ${
                      cleaningStaffCode ? "opacity-100" : "opacity-30 grayscale"
                    }`}
                  />
                </div>

                <div className="flex flex-col items-end text-right flex-1">
                  <h4 className="font-semibold text-[#181d17] text-[14px] leading-[20px]">
                    توليد كود مؤقت لطاقم النظافة
                  </h4>
                  <p className="font-normal text-[#454840] text-[13px] leading-[20px]">
                    إصدار رمز دخول ذكي لمرة واحدة صالح لساعتين فقط بعد خروج النزيل للقيام بأعمال التجهيز والصيانة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LEFT COLUMN: Unit State & Telemetry Card (4 Cols) */}
        <div
          className="lg:col-span-4 flex flex-col gap-6"
          data-node-id="1:22159"
          data-name="Left Column: Unit State & Telemetry Card (4 Cols)"
        >
          {/* SECTION 3: Live Unit Lock Telemetry */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-5 sm:p-6 flex flex-col gap-4 border border-neutral-100/60"
            data-node-id="1:22160"
            data-name="SECTION 3: Live Unit Lock Telemetry"
          >
            {/* Header */}
            <div className="flex items-center justify-between w-full" data-node-id="1:22162">
              <div
                className="bg-[#eaf1e8] flex items-center gap-1.5 px-2.5 py-1 rounded-full shrink-0"
                data-node-id="1:22163"
              >
                <div className="relative size-2">
                  <div className="absolute inset-0 bg-[#3e8a5a] rounded-full animate-ping opacity-75" />
                  <div className="bg-[#3e8a5a] rounded-full size-2 relative" />
                </div>
                <span className="font-semibold text-[#3e8a5a] text-[11px] leading-[16px]">
                  متصل لحظياً
                </span>
              </div>

              <h3 className="font-semibold text-[#181d17] text-[18px] leading-[28px] text-right">
                بطاقة بيانات القفل النشط
              </h3>
            </div>

            {/* Visual Preview */}
            <div
              className="relative h-[176px] rounded-[12px] overflow-hidden w-full flex flex-col justify-end p-3.5 shadow-xs"
              data-node-id="1:22172"
            >
              <Image
                src="/assets/units/lock/23168.png"
                alt="الوحدة 204"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col items-end text-right text-white">
                <span className="font-semibold text-[18px] leading-[28px]">
                  الوحدة 204 — الجناح الملكي
                </span>
                <span className="font-normal text-[#dfe4db] text-[13px] leading-[20px]">
                  عمارة النخيل الفندقية · الرياض
                </span>
              </div>
            </div>

            {/* Metrics Matrix (2x2 grid) */}
            <div className="grid grid-cols-2 gap-2.5 w-full" data-node-id="1:22179">
              {/* Battery */}
              <div className="bg-[#f1f5eb] p-3 rounded-[12px] flex flex-col justify-between">
                <div className="flex items-center justify-between w-full">
                  <div className="h-[8px] w-[15px] relative shrink-0">
                    <Image
                      src="/assets/units/lock/c4ebe.svg"
                      alt="battery"
                      width={15}
                      height={8}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-medium text-[#454840] text-[11px] leading-[16px]">
                    شحن البطارية
                  </span>
                </div>
                <div className="flex items-baseline justify-end gap-1.5 py-1">
                  <span className="font-medium text-[#3e8a5a] text-[11px]">ممتاز</span>
                  <span className="font-bold text-[#181d17] text-[24px]">94%</span>
                </div>
                <div className="bg-[#d7dbd2] h-[6px] rounded-full overflow-hidden w-full">
                  <div className="bg-[#3e8a5a] h-full w-[94%] rounded-full" />
                </div>
              </div>

              {/* Gateway Hub */}
              <div className="bg-[#f1f5eb] p-3 rounded-[12px] flex flex-col justify-between">
                <div className="flex items-center justify-between w-full">
                  <div className="h-[14px] w-[14px] relative shrink-0">
                    <Image
                      src="/assets/units/lock/f0d90.svg"
                      alt="gateway"
                      width={14}
                      height={14}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-medium text-[#454840] text-[11px] leading-[16px]">
                    البوابة اللاسلكية
                  </span>
                </div>
                <div className="flex justify-end py-1">
                  <span className="font-bold text-[#181d17] text-[20px] leading-[30px]">
                    G2 Hub
                  </span>
                </div>
                <span className="font-medium text-[#454840] text-[11px] text-right">
                  مسجلة بالدور 2
                </span>
              </div>

              {/* Ping Latency */}
              <div className="bg-[#f1f5eb] p-3 rounded-[12px] flex flex-col justify-between">
                <div className="flex items-center justify-between w-full">
                  <div className="h-[12px] w-[15px] relative shrink-0">
                    <Image
                      src="/assets/units/lock/04578.svg"
                      alt="ping"
                      width={15}
                      height={12}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-medium text-[#454840] text-[11px] leading-[16px]">
                    زمن الاستجابة
                  </span>
                </div>
                <div className="flex items-baseline justify-end gap-1 py-1">
                  <span className="font-medium text-[#454840] text-[11px]">ms</span>
                  <span className="font-bold text-[#181d17] text-[24px]">12</span>
                </div>
                <span className="font-medium text-[#3e8a5a] text-[11px] text-right">
                  استجابة فائقة
                </span>
              </div>

              {/* Sync Stamp */}
              <div className="bg-[#f1f5eb] p-3 rounded-[12px] flex flex-col justify-between">
                <div className="flex items-center justify-between w-full">
                  <div className="relative size-[14px] shrink-0">
                    <Image
                      src="/assets/units/lock/c5a23.svg"
                      alt="sync"
                      width={14}
                      height={14}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-medium text-[#454840] text-[11px] leading-[16px]">
                    آخر مزامنة
                  </span>
                </div>
                <div className="flex justify-end py-1">
                  <span className="font-bold text-[#181d17] text-[16px] leading-[24px]">
                    منذ دقيقتين
                  </span>
                </div>
                <span className="font-medium text-[#454840] text-[11px] text-right">
                  مزامنة سحابية
                </span>
              </div>
            </div>

            {/* Detailed Specs List */}
            <div className="flex flex-col w-full text-right divide-y divide-[#ebefe6] pt-1">
              <div className="flex items-center justify-between py-2 text-[13px]">
                <span className="font-bold text-[#181d17]">Lock 204 — Main Door</span>
                <span className="font-normal text-[#454840]">اسم الجهاز المقترن:</span>
              </div>
              <div className="flex items-center justify-between py-2 text-[13px]">
                <span className="font-normal text-[#181d17] font-mono text-[11px]">
                  D4:36:39:B2:A1:08
                </span>
                <span className="font-normal text-[#454840]">معرف الجهاز (MAC):</span>
              </div>
              <div className="flex items-center justify-between py-2 text-[13px]">
                <span className="font-normal text-[#181d17]">Bluetooth 5.2 + Zigbee 3.0</span>
                <span className="font-normal text-[#454840]">البروتوكول اللاسلكي:</span>
              </div>
              <div className="flex items-center justify-between py-2 text-[13px]">
                <span className="font-normal text-[#181d17] font-mono text-[12px]">
                  v4.8.1-build29
                </span>
                <span className="font-normal text-[#454840]">إصدار البرنامج الثابت:</span>
              </div>
            </div>
          </div>

          {/* Security Compliance Card */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-4 flex flex-col gap-2 border border-neutral-100/60"
            data-node-id="1:22255"
            data-name="Security Compliance Card"
          >
            <div className="flex gap-2 items-center justify-end">
              <h4 className="font-semibold text-[#34422a] text-[14px] leading-[20px]">
                حوكمة وأمان التشفير
              </h4>
              <div className="h-[17px] w-[13px] relative shrink-0">
                <Image
                  src="/assets/units/lock/990ee.svg"
                  alt="shield-lock"
                  width={13}
                  height={17}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="font-normal text-[#454840] text-[13px] leading-[21px] text-right">
              وفقاً لسياسة إدارة الأصول الفندقية، يتم حجب مفاتيح التشفير الحساسة (API Secret & App Key) لمنع التسريب، وتُنفذ كافة عمليات توليد الرموز عبر خوادم خلفية محصنة ومعتمدة بشهادة ISO 27001.
            </p>
          </div>
        </div>
      </div>

      {/* 3. STICKY / BOTTOM MASTER ACTIONS BAR */}
      <div
        className="fixed bottom-4 left-4 right-4 sm:left-8 sm:right-8 z-30 backdrop-blur-md bg-white/95 p-4 rounded-[16px] shadow-lg border border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4"
        data-node-id="1:22263"
        data-name="Sticky / Bottom Master Actions Bar"
      >
        <div className="flex gap-3 items-center" data-node-id="1:22278">
          <div
            className="bg-[#d8e8cb] flex items-center justify-center rounded-full size-9 shrink-0"
            data-node-id="1:22284"
          >
            <div className="relative size-[17px]">
              <Image
                src="/assets/units/lock/c7b9d.svg"
                alt="alert"
                width={17}
                height={17}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col items-start text-start">
            <span className="font-semibold text-[#181d17] text-[14px] leading-[20px]">
              التغييرات الحالية غير محفوظة
            </span>
            <span className="font-normal text-[#454840] text-[13px] leading-[20px]">
              اضغط على زر الحفظ لتحديث قواعد الأتمتة وجدولة الرسائل.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end" data-node-id="1:22265">
          {/* Unlink */}
          <button
            type="button"
            onClick={handleUnlink}
            className="bg-white hover:bg-red-50 active:scale-98 transition-all flex gap-1.5 h-[44px] items-center px-4 rounded-[12px] text-[#d85c5c] font-semibold text-[14px] border border-neutral-200 cursor-pointer shadow-xs"
            data-node-id="1:22273"
          >
            <div className="h-[15px] w-[15.5px] relative shrink-0">
              <Image
                src="/assets/units/lock/e34f4.svg"
                alt="unlink"
                width={16}
                height={15}
                className="w-full h-full object-contain"
              />
            </div>
            <span>فصل القفل عن الوحدة</span>
          </button>

          {/* Cancel */}
          <Link
            href="/units/details"
            className="bg-[#ebefe6] hover:bg-[#dfe4da] active:scale-98 transition-all flex h-[44px] items-center justify-center px-5 rounded-[12px] text-[#181d17] font-semibold text-[14px]"
            data-node-id="1:22271"
          >
            إلغاء والعودة
          </Link>

          {/* Save */}
          <button
            type="button"
            onClick={handleSave}
            disabled={isSaving}
            className="bg-[#34422a] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] hover:bg-[#283420] active:scale-98 transition-all flex gap-2 h-[44px] items-center px-7 rounded-[12px] text-white font-semibold text-[14px] shadow-sm cursor-pointer disabled:opacity-70"
            data-node-id="1:22266"
          >
            <div className="relative size-[15px] shrink-0">
              <Image
                src="/assets/units/lock/b4b05.svg"
                alt="save"
                width={15}
                height={15}
                className="w-full h-full object-contain"
              />
            </div>
            <span>{isSaving ? "جاري الحفظ..." : "حفظ إعدادات القفل"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
