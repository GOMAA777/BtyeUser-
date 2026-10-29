"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/lib/toast";

export function UnitLockErrorView() {
  const router = useRouter();
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = () => {
    setIsRetrying(true);
    showToast.info("جاري إعادة محاولة التحقق من الاتصال بالبوابة والخوادم السحابية...");
    setTimeout(() => {
      setIsRetrying(false);
      showToast.success("تم استعادة الاتصال بنجاح وتحديث ربط القفل");
      router.push("/units/lock");
    }, 1200);
  };

  const handleReauth = () => {
    showToast.info("جاري توجيهك إلى شاشة إعادة مصادقة تفويض حساب TTLock...");
  };

  const handleManualCodes = () => {
    showToast.success("تم تفعيل نمط التشغيل اليدوي لأكواد الدخول (Offline Fallback)");
    router.push("/units/details");
  };

  const handleRequestHelp = () => {
    showToast.info("تم إرسال إشعار عاجل إلى فريق الدعم الفني للأصول العقارية (تذكرة #TK-8812)");
  };

  return (
    <div
      className="min-h-full w-full bg-[#f1f5eb] flex flex-col p-4 sm:p-6 lg:p-8 gap-6"
      data-node-id="1:22403"
      data-name="حالة فشل ربط القفل"
      dir="rtl"
    >
      {/* Main Asymmetric Workspace Layout (8 Cols Right, 4 Cols Left) */}
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        data-node-id="1:22405"
        data-name="Main Asymmetric Workspace Layout"
      >
        {/* PRIMARY ERROR RESOLUTION WORKSPACE (8 Cols) */}
        <div
          className="lg:col-span-8 flex flex-col gap-6"
          data-node-id="1:22406"
          data-name="Primary Error Resolution Workspace (8 Cols)"
        >
          {/* Primary Error Resolution Card */}
          <div
            className="bg-white rounded-[16px] p-5 sm:p-6 flex flex-col gap-6 border border-neutral-100/60 shadow-xs relative overflow-hidden"
            data-node-id="1:22407"
            data-name="Primary Error Resolution Card"
          >
            {/* Top status gradient accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-l from-[#ba1a1a] via-[#ba1a1a]/60 to-transparent"
              data-node-id="1:22524"
            />

            {/* Alert Header Banner */}
            <div
              className="flex flex-col-reverse sm:flex-row items-start justify-between gap-4 w-full pt-1"
              data-node-id="1:22408"
            >
              <div className="flex flex-col items-start gap-1.5 flex-1">
                <div className="flex items-center justify-between w-full">
                  <div
                    className="bg-[#ffdad6] flex gap-1.5 items-center px-3 py-1 rounded-full shrink-0"
                    data-node-id="1:22411"
                  >
                    <span className="font-semibold text-[#93000a] text-[11px] leading-[16px]">
                      فشل الاتصال / Disconnected
                    </span>
                    <div className="bg-[#ba1a1a] rounded-full size-1.5 shrink-0" />
                  </div>

                  <h1
                    className="font-bold text-[#181d17] text-[24px] sm:text-[26px] leading-[34px] text-right"
                    data-node-id="1:22415"
                  >
                    تعذر ربط القفل
                  </h1>
                </div>

                <p
                  className="font-normal text-[#454840] text-[15px] sm:text-[16px] leading-[26px] text-right mt-1"
                  data-node-id="1:22417"
                >
                  فشل التحقق من مصادقة مزود الخدمة السحابي{" "}
                  <span className="font-semibold text-[#181d17]">TTLock</span> وتعذر ربط القفل الرقمي بالوحدة المحددة.
                </p>
              </div>

              <div
                className="bg-[#ffdad6] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center rounded-[16px] shrink-0 size-14 shadow-xs"
                data-node-id="1:22422"
              >
                <div className="h-[25px] w-[28px] relative shrink-0">
                  <Image
                    src="/assets/units/lock-error/474b3.svg"
                    alt="alert-error"
                    width={28}
                    height={25}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Partner Card: TTLock Cloud Bridge Context */}
            <div
              className="bg-[#f1f5eb] p-4 rounded-[12px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 w-full"
              data-node-id="1:22425"
            >
              <div className="flex gap-1.5 items-center text-[#ba1a1a]" data-node-id="1:22427">
                <div className="h-[11px] w-[12px] relative shrink-0">
                  <Image
                    src="/assets/units/lock-error/7bdbd.svg"
                    alt="warning"
                    width={12}
                    height={11}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-medium text-[11px] leading-[16px]">
                  تعذر الاتصال بحساب TTLock
                </span>
              </div>

              <div className="flex gap-3.5 items-center">
                <div className="flex flex-col items-end text-right">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#181d17] text-[14px] leading-[20px]">
                      منظومة TTLock السحابية
                    </span>
                    <div className="bg-[#dfe4db] px-2 py-0.5 rounded-[4px] shrink-0">
                      <span className="font-medium text-[#454840] text-[11px] leading-[16px]">
                        OAuth 2.0 API
                      </span>
                    </div>
                  </div>
                  <span className="font-normal text-[#454840] text-[13px] leading-[20px]">
                    بوابة التزامن المركزي للأقفال الكهروميكانيكية
                  </span>
                </div>

                <div className="bg-white flex items-center justify-center rounded-[12px] size-12 shrink-0 shadow-xs">
                  <div className="h-[23px] w-[12px] relative shrink-0">
                    <Image
                      src="/assets/units/lock-error/c7085.svg"
                      alt="lock-provider"
                      width={12}
                      height={23}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Probable Causes Section */}
            <div className="flex flex-col gap-3 w-full" data-node-id="1:22443">
              <div className="flex gap-2 items-center justify-end" data-node-id="1:22444">
                <span className="font-semibold text-[#181d17] text-[14px] leading-[20px]">
                  الأسباب المحتملة لفشل الإجراء:
                </span>
                <div className="relative size-[15px] shrink-0">
                  <Image
                    src="/assets/units/lock-error/fa0dd.svg"
                    alt="question"
                    width={15}
                    height={15}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2.5 w-full">
                {/* Cause 1 */}
                <div
                  className="bg-[rgba(241,245,235,0.7)] p-3.5 rounded-[12px] flex items-start justify-between gap-3"
                  data-node-id="1:22449"
                >
                  <div className="bg-[#e5eae0] flex items-center justify-center rounded-full size-6 shrink-0 mt-0.5">
                    <span className="font-bold text-[#454840] text-[11px] leading-[16px]">
                      ١
                    </span>
                  </div>

                  <div className="flex flex-col items-end text-right flex-1">
                    <h4 className="font-medium text-[#181d17] text-[14px] leading-[22px]">
                      بيانات الحساب أو رمز التحقق (OAuth Token)
                    </h4>
                    <p className="font-normal text-[#454840] text-[13px] leading-[20px] mt-0.5">
                      انتهت صلاحية جلسة التفويض الخاصة بحساب المالك لدى المزود، أو تم تغيير كلمة المرور مؤخراً.
                    </p>
                  </div>
                </div>

                {/* Cause 2 */}
                <div
                  className="bg-[rgba(241,245,235,0.7)] p-3.5 rounded-[12px] flex items-start justify-between gap-3"
                  data-node-id="1:22458"
                >
                  <div className="bg-[#e5eae0] flex items-center justify-center rounded-full size-6 shrink-0 mt-0.5">
                    <span className="font-bold text-[#454840] text-[11px] leading-[16px]">
                      ٢
                    </span>
                  </div>

                  <div className="flex flex-col items-end text-right flex-1">
                    <h4 className="font-medium text-[#181d17] text-[14px] leading-[22px]">
                      تعذر الوصول إلى خوادم مزود الخدمة السحابي
                    </h4>
                    <p className="font-normal text-[#454840] text-[13px] leading-[20px] mt-0.5">
                      انقطاع مؤقت في الربط الشبكي بين مركز البيانات الخارجي وشبكة الأجهزة الذكية.
                    </p>
                  </div>
                </div>

                {/* Cause 3 */}
                <div
                  className="bg-[rgba(241,245,235,0.7)] p-3.5 rounded-[12px] flex items-start justify-between gap-3"
                  data-node-id="1:22467"
                >
                  <div className="bg-[#e5eae0] flex items-center justify-center rounded-full size-6 shrink-0 mt-0.5">
                    <span className="font-bold text-[#454840] text-[11px] leading-[16px]">
                      ٣
                    </span>
                  </div>

                  <div className="flex flex-col items-end text-right flex-1">
                    <h4 className="font-medium text-[#181d17] text-[14px] leading-[22px]">
                      البوابة اللاسلكية (Gateway / G2 Hub) غير متصلة
                    </h4>
                    <p className="font-normal text-[#454840] text-[13px] leading-[20px] mt-0.5">
                      جهاز الربط الوسيط في الطابق الثاني لا يستجيب عبر شبكة Wi-Fi المحلية للمبنى.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Non-technical Live Telemetry Assistance Box */}
            <div
              className="bg-[#f1f5eb] p-4 rounded-[12px] flex flex-col gap-3 w-full"
              data-node-id="1:22476"
            >
              <div className="flex gap-1.5 items-center justify-end">
                <span className="font-bold text-[#181d17] text-[12px] leading-[18px]">
                  الفحص التشخيصي المباشر للأصول المحيطة
                </span>
                <div className="h-[13.5px] w-[14px] relative shrink-0">
                  <Image
                    src="/assets/units/lock-error/08f9e.svg"
                    alt="diagnostic"
                    width={14}
                    height={13.5}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {/* Hub Status (Identified issue) */}
                <div
                  className="bg-[rgba(255,218,214,0.4)] border border-[#ffdad6] p-3 rounded-[12px] flex items-center justify-between"
                  data-node-id="1:22483"
                >
                  <div className="bg-[#ba1a1a] rounded-full size-2.5 shrink-0" />
                  <div className="flex gap-2.5 items-center">
                    <div className="flex flex-col items-end text-right">
                      <span className="font-medium text-[#454840] text-[11px] leading-[16px]">
                        بوابة G2 Hub (الدور الثاني)
                      </span>
                      <span className="font-semibold text-[#ba1a1a] text-[12px] leading-[18px]">
                        غير متصلة (Offline) منذ 25 دقيقة
                      </span>
                    </div>
                    <div className="h-[16px] w-[15.5px] relative shrink-0">
                      <Image
                        src="/assets/units/lock-error/1e196.svg"
                        alt="hub"
                        width={16}
                        height={16}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Cloud Health */}
                <div
                  className="bg-white border border-neutral-100 p-3 rounded-[12px] flex items-center justify-between shadow-xs"
                  data-node-id="1:22493"
                >
                  <div className="bg-[#54624c] rounded-full size-2.5 shrink-0" />
                  <div className="flex gap-2.5 items-center">
                    <div className="flex flex-col items-end text-right">
                      <span className="font-medium text-[#454840] text-[11px] leading-[16px]">
                        خوادم TTLock السحابية
                      </span>
                      <span className="font-semibold text-[#181d17] text-[12px] leading-[18px]">
                        متصلة وتعمل بصورة طبيعية
                      </span>
                    </div>
                    <div className="h-[13px] w-[18px] relative shrink-0">
                      <Image
                        src="/assets/units/lock-error/edd4c.svg"
                        alt="cloud"
                        width={18}
                        height={13}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons Flow */}
            <div
              className="flex flex-col gap-3 pt-2 border-t border-[#ebefe6]"
              data-node-id="1:22503"
            >
              <div className="flex flex-wrap items-center justify-end gap-3">
                {/* Secondary: Re-authenticate */}
                <button
                  type="button"
                  onClick={handleReauth}
                  className="bg-white hover:bg-neutral-50 active:scale-98 transition-all flex gap-2 h-[44px] items-center justify-center px-5 rounded-[12px] text-[#181d17] font-semibold text-[14px] border border-neutral-200 cursor-pointer shadow-xs"
                  data-node-id="1:22505"
                >
                  <div className="relative size-[17px] shrink-0">
                    <Image
                      src="/assets/units/lock-error/4065f.svg"
                      alt="re-auth"
                      width={17}
                      height={17}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span>تغيير الحساب وتحديث الربط</span>
                </button>

                {/* Primary: Retry */}
                <button
                  type="button"
                  onClick={handleRetry}
                  disabled={isRetrying}
                  className="bg-[#34422a] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] hover:bg-[#283420] active:scale-98 transition-all flex gap-2 h-[44px] items-center justify-center px-6 rounded-[12px] text-white font-semibold text-[14px] shadow-sm cursor-pointer disabled:opacity-70"
                  data-node-id="1:22510"
                >
                  <div className="relative size-[13.5px] shrink-0">
                    <Image
                      src="/assets/units/lock-error/c6112.svg"
                      alt="retry"
                      width={14}
                      height={14}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span>{isRetrying ? "جاري المحاولة..." : "إعادة المحاولة الآن"}</span>
                </button>
              </div>

              {/* Fallback secondary options */}
              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleManualCodes}
                  className="flex gap-1.5 items-center text-[#34422a] hover:underline font-semibold text-[12px] h-[40px] px-3 rounded-[12px] cursor-pointer"
                  data-node-id="1:22519"
                >
                  <div className="h-[16.5px] w-[12px] relative shrink-0">
                    <Image
                      src="/assets/units/lock-error/df5d0.svg"
                      alt="manual"
                      width={12}
                      height={16.5}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span>التشغيل اليدوي لأكواد الدخول</span>
                </button>

                <Link
                  href="/units/details"
                  className="flex items-center text-[#454840] hover:text-[#181d17] font-semibold text-[12px] h-[40px] px-3 rounded-[12px] transition-colors"
                  data-node-id="1:22516"
                >
                  العودة لإعدادات الوحدة
                </Link>
              </div>
            </div>
          </div>

          {/* Inline Visual Guide / Hardware Placement Panel */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-5 sm:p-6 flex flex-col gap-4 border border-neutral-100/60"
            data-node-id="1:22525"
            data-name="Inline Visual Guide / Hardware Placement Accordion Panel"
          >
            <div className="flex items-center justify-between w-full" data-node-id="1:22526">
              <span className="font-medium text-[#454840] text-[11px] leading-[16px]">
                إجراءات الموقع الفوري
              </span>

              <div className="flex gap-2.5 items-center">
                <h3 className="font-semibold text-[#181d17] text-[18px] leading-[28px]">
                  إرشادات ميدانية سريعة لفرق التشغيل والصيانة
                </h3>
                <div className="h-[18px] w-[16.5px] relative shrink-0">
                  <Image
                    src="/assets/units/lock-error/501d4.svg"
                    alt="tools"
                    width={17}
                    height={18}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full" data-node-id="1:22534">
              {/* Guidance 1: Gateway Power */}
              <div
                className="bg-[#f1f5eb] p-3.5 rounded-[12px] flex flex-col justify-between gap-2"
                data-node-id="1:22551"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="h-[13.5px] w-[9px] relative shrink-0">
                    <Image
                      src="/assets/units/lock-error/66e09.svg"
                      alt="plug"
                      width={9}
                      height={13.5}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-semibold text-[#34422a] text-[12px] leading-[18px] text-right">
                    ١. فحص مصدر طاقة البوابة
                  </span>
                </div>
                <p className="font-normal text-[#454840] text-[13px] leading-[20px] text-right">
                  تأكد من إضاءة المؤشر الأزرق الثابت في محول الطاقة لجهاز G2 Hub بجوار ممر الجناح 204.
                </p>
              </div>

              {/* Guidance 2: Wi-Fi Frequency */}
              <div
                className="bg-[#f1f5eb] p-3.5 rounded-[12px] flex flex-col justify-between gap-2"
                data-node-id="1:22543"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="h-[13px] w-[18px] relative shrink-0">
                    <Image
                      src="/assets/units/lock-error/00bea.svg"
                      alt="wifi"
                      width={18}
                      height={13}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-semibold text-[#34422a] text-[12px] leading-[18px] text-right">
                    ٢. تردد الشبكة اللاسلكية
                  </span>
                </div>
                <p className="font-normal text-[#454840] text-[13px] leading-[20px] text-right">
                  تتطلب أقفال وبوابات الأصول العقارية الاتصال بتردد 2.4 GHz وليس 5.0 GHz للوصول المستقر.
                </p>
              </div>

              {/* Guidance 3: Manual Guest Protocol */}
              <div
                className="bg-[#f1f5eb] p-3.5 rounded-[12px] flex flex-col justify-between gap-2"
                data-node-id="1:22535"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="h-[16.5px] w-[12px] relative shrink-0">
                    <Image
                      src="/assets/units/lock-error/8e9b4.svg"
                      alt="user-lock"
                      width={12}
                      height={16.5}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-semibold text-[#34422a] text-[12px] leading-[18px] text-right">
                    ٣. بروتوكول الضيوف اليدوي
                  </span>
                </div>
                <p className="font-normal text-[#454840] text-[13px] leading-[20px] text-right">
                  يمكن توليد رموز وصول مشفرة بلا إنترنت مؤقتاً لتفادي تأخير تسجيل دخول نزلاء الجناح.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LATERAL SIDEBAR (4 Cols) */}
        <div
          className="lg:col-span-4 flex flex-col gap-6"
          data-node-id="1:22559"
          data-name="Right Lateral Telemetry & Asset Ledger Sidebar (4 Cols)"
        >
          {/* Unit & Hardware Identity Card (Disabled / Warning Context) */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-5 sm:p-6 flex flex-col gap-4 border border-neutral-100/60"
            data-node-id="1:22560"
            data-name="Unit & Hardware Identity Card (Disabled / Warning Context)"
          >
            {/* Header */}
            <div className="flex items-center justify-between w-full" data-node-id="1:22561">
              <div className="bg-[#ffdad6] px-2.5 py-0.5 rounded-full shrink-0">
                <span className="font-semibold text-[#93000a] text-[11px] leading-[16px]">
                  غير نشط
                </span>
              </div>
              <h3 className="font-bold text-[#181d17] text-[14px] leading-[20px]">
                بيانات القفل والوحدة المستهدفة
              </h3>
            </div>

            {/* Grayscale Unit Visual Preview */}
            <div
              className="relative h-[144px] rounded-[12px] overflow-hidden w-full flex flex-col justify-end p-3.5 shadow-xs"
              data-node-id="1:22566"
            >
              <Image
                src="/assets/units/lock-error/5ea85.png"
                alt="الوحدة 204"
                fill
                className="object-cover grayscale opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(45,50,44,0.9)] via-[rgba(45,50,44,0.4)] to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col items-end text-right text-white">
                <span className="font-bold text-[#eef2e9] text-[18px] leading-[28px]">
                  الوحدة 204 (جناح ديلوكس)
                </span>
                <span className="font-medium text-[rgba(238,242,233,0.8)] text-[11px] leading-[16px]">
                  الدور الثاني • الجناح الشرقي الفاخر
                </span>
              </div>
            </div>

            {/* Detailed Status Ledger */}
            <div className="flex flex-col gap-2.5 w-full" data-node-id="1:22573">
              <div className="bg-[#f1f5eb] px-3 py-2 rounded-[8px] flex items-center justify-between text-[13px]">
                <div className="flex items-center gap-1.5 text-[#ba1a1a] font-semibold">
                  <div className="bg-[#ba1a1a] rounded-full size-1.5 shrink-0" />
                  <span>غير متصل - يتطلب الإعداد</span>
                </div>
                <span className="font-normal text-[#454840]">حالة القفل الذكي:</span>
              </div>

              <div className="bg-[#f1f5eb] px-3 py-2 rounded-[8px] flex items-center justify-between text-[13px]">
                <span className="font-semibold text-[#181d17]">معلق مؤقتاً لحين استعادة الربط</span>
                <span className="font-normal text-[#454840]">نمط الوصول الحالي:</span>
              </div>

              <div className="bg-[#f1f5eb] px-3 py-2 rounded-[8px] flex items-center justify-between text-[13px]">
                <span className="font-normal text-[#75786f]">لا يوجد ربط نشط</span>
                <span className="font-normal text-[#454840]">آخر مزامنة ناجحة:</span>
              </div>

              <div className="bg-[#f1f5eb] px-3 py-2 rounded-[8px] flex items-center justify-between text-[13px]">
                <span className="font-normal text-[#181d17]">TTLock K2 Mortise Pro</span>
                <span className="font-normal text-[#454840]">طراز القفل المسجل:</span>
              </div>

              <div className="bg-[#f1f5eb] px-3 py-2 rounded-[8px] flex items-center justify-between text-[13px]">
                <span className="font-normal text-[#181d17] font-mono text-[11px]">
                  E4:5F:01:8A:2B:C4
                </span>
                <span className="font-normal text-[#454840]">المعرّف التسلسلي:</span>
              </div>
            </div>

            {/* Property Management Support Contact */}
            <div
              className="bg-[#ebefe6] p-3 rounded-[12px] flex items-center justify-between pt-2"
              data-node-id="1:22601"
            >
              <button
                type="button"
                onClick={handleRequestHelp}
                className="font-semibold text-[#34422a] text-[11px] hover:underline cursor-pointer"
                data-node-id="1:22602"
              >
                طلب مساعدة
              </button>

              <div className="flex gap-2.5 items-center">
                <div className="flex flex-col items-end text-right">
                  <span className="font-semibold text-[#181d17] text-[11px] leading-[16px]">
                    فريق الدعم الفني للأصول
                  </span>
                  <span className="font-medium text-[#454840] text-[11px] leading-[16px]">
                    متاح على مدار الساعة للمسؤولين
                  </span>
                </div>
                <div className="bg-[#4b5940] flex items-center justify-center rounded-full size-8 shrink-0">
                  <div className="h-[12px] w-[13.3px] relative shrink-0">
                    <Image
                      src="/assets/units/lock-error/5a815.svg"
                      alt="support"
                      width={13}
                      height={12}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Physical Key Override Emergency Dispatch Box */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-5 sm:p-6 flex flex-col gap-3 border border-neutral-100/60"
            data-node-id="1:22613"
            data-name="Physical Key Override Emergency Dispatch Box"
          >
            <div className="flex gap-2 items-center justify-end" data-node-id="1:22614">
              <h3 className="font-semibold text-[#34422a] text-[18px] leading-[28px]">
                النسخة الميكانيكية الاحتياطية
              </h3>
              <div className="h-[10px] w-[18px] relative shrink-0">
                <Image
                  src="/assets/units/lock-error/7a625.svg"
                  alt="key-override"
                  width={18}
                  height={10}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <p className="font-normal text-[#454840] text-[13px] leading-[21px] text-right">
              في حالات الطوارئ القصوى لوصول النزلاء قبل استعادة الاتصال السحابي، يُمكن لمشرف الاستقبال استخدام المفتاح الرئيسي (Master Mechanical Key #M-204) المتواجد في خزنة الأمان المركزية.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
