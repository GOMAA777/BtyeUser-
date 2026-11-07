"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BadgePercent,
  Calculator,
  CalendarRange,
  Check,
  ChevronLeft,
  Info,
  MapPin,
  Minus,
  Plus,
  QrCode,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { SubscriptionHero } from "./subscription-hero";
import {
  MAX_UNITS,
  MIN_UNITS,
  YEARLY_GROSS,
  clampUnits,
  formatMoney,
  grossTotal,
} from "../pricing";

const yearlyPerks = [
  "تثبيت التسعير لمدة 365 يوماً كاملة وحماية من أي تغير في الأسعار",
  "خصم فعلي يقارب 16% مقارنة بالتجديد الشهري المتكرر",
  "تقارير دورية وحوكمة مالية معتمدة وفق متطلبات هيئة الزكاة والضريبة",
  "أولوية في الدعم التقني وربط القنوات المباشرة",
];

const monthlyPerks = [
  "مرونة تامة في التجديد شهرياً دون التزام طويل الأجل",
  "إضافة أو إلغاء شقق إضافية في أي وقت مع تسوية حسابية سلسة",
  "تجديد تلقائي آمن عبر بطاقات مدى والبطاقات الائتمانية وApple Pay",
  "إمكانية تصدير الفواتير الضريبية بصيغة PDF وXML فور السداد",
];

export function SubscriptionLandingView() {
  const [units, setUnits] = useState(5);
  const monthly = grossTotal(units, "monthly");
  const yearly = grossTotal(units, "yearly");

  const setCount = (next: number) => setUnits(clampUnits(next));

  return (
    <div className="flex flex-col gap-[20px] w-full" data-node-id="1:30539" data-name="اشتراكي">
      <SubscriptionHero
        nodeId="1:30542"
        title="اشتراكي"
        subtitle="اشترك بالعدد اللي يناسبك من الشقق، وزوّد رصيدك وقت ما تحتاج بكل مرونة وشفافية وبدون باقات مقيدة"
      />

      <section
        className="bg-white rounded-[16px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] overflow-hidden relative"
        data-node-id="1:30553"
      >
        <div className="pointer-events-none absolute -top-24 -start-24 size-[384px] rounded-full bg-[rgba(216,232,199,0.3)] blur-[32px]" />
        <div className="pointer-events-none absolute -bottom-16 -end-16 size-[320px] rounded-full bg-[rgba(242,225,192,0.4)] blur-[32px]" />
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-[32px] p-[28px] lg:p-[40px]">
          <div className="lg:col-span-7 flex flex-col items-start gap-[16px]">
            <span className="inline-flex items-center gap-[8px] bg-[#ebefe6] text-[#454840] rounded-full px-[12px] py-[4px] font-cairo font-semibold text-[12px] leading-[18px]">
              <Info size={15} />
              حالة الحساب: غير مشترك حالياً
            </span>
            <h2 className="font-cairo font-semibold text-[#181d17] text-[32px] leading-[40px]">
              ابدأ اشتراكك مع أبراج بحرية مطلقة
            </h2>
            <p className="font-cairo text-[16px] leading-[26px] text-[#454840]">
              حدد عدد الشقق اللي تحتاج تديرها، واختار الاشتراك الشهري أو السنوي.
              تحكّم بكامل عقاراتك، وحداتك السكنية، أجهزة أكواد الدخول الذكية،
              والمزامنة اللحظية مع المنصات العالمية بدون التزامات طويلة الأجل.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-[8px] gap-y-[8px] w-full">
              {[
                "تسعير مرن يبدأ من شقة واحدة",
                "ترقية أو تخفيض الرصيد في أي وقت",
                "ربط فوري لبوابات الكالندر والأسعار",
                "دعم فني مخصص للملاك عبر الواتساب",
              ].map((item) => (
                <li key={item} className="flex items-center gap-[6px] font-cairo font-semibold text-[14px] leading-[20px] text-[#181d17]">
                  <Check size={16} className="text-[#34422a] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-[8px] pt-[8px]">
              <Link
                href={`/subscription/configure?plan=yearly&units=${units}`}
                className="bg-[#34422a] text-white rounded-[12px] px-[24px] py-[12px] font-cairo font-semibold text-[14px] leading-[20px] inline-flex items-center gap-[6px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
              >
                <Calculator size={15} />
                احسب اشتراكي الآن
              </Link>
              <a
                href="#pricing"
                className="bg-[#d8e8c7] text-[#131f0b] rounded-[12px] px-[24px] py-[12px] font-cairo font-semibold text-[14px] leading-[20px] inline-flex items-center gap-[6px]"
              >
                <ChevronLeft size={16} />
                معرفة تفاصيل الأسعار
              </a>
            </div>
          </div>

          <div
            id="calculator"
            className="lg:col-span-5 bg-[#f1f5eb] rounded-[16px] p-[24px] flex flex-col gap-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
            data-node-id="1:30599"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-[8px] font-cairo font-semibold text-[18px] leading-[28px] text-[#181d17]">
                <Calculator size={16} />
                حاسبة السعة السريعة
              </span>
              <span className="bg-white rounded-[6px] px-[8px] py-[4px] font-cairo font-medium text-[11px] text-[#454840]">
                محاكاة فورية
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-cairo font-semibold text-[12px] text-[#454840]">كم عدد الشقق التي تديرها؟</span>
              <span className="font-cairo font-bold text-[20px] leading-[30px] text-[#34422a]">{units} شقق</span>
            </div>
            <div className="bg-white rounded-[12px] p-[8px] flex items-center gap-[8px]">
              <button type="button" aria-label="زيادة" onClick={() => setCount(units + 1)} className="size-[40px] rounded-[8px] bg-[#ebefe6] text-[#181d17] flex items-center justify-center">
                <Plus size={14} />
              </button>
              <input
                type="range"
                min={MIN_UNITS}
                max={MAX_UNITS}
                value={units}
                onChange={(event) => setCount(Number(event.target.value))}
                className="flex-1 accent-[#34422a]"
              />
              <button type="button" aria-label="تقليل" onClick={() => setCount(units - 1)} className="size-[40px] rounded-[8px] bg-[#ebefe6] text-[#181d17] flex items-center justify-center">
                <Minus size={14} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-[8px]">
              <div className="bg-white rounded-[12px] p-[8px] flex flex-col gap-[4px]">
                <span className="inline-flex items-center justify-between font-cairo font-medium text-[11px] text-[#454840]">
                  الاشتراك الشهري
                  <CalendarRange size={13} />
                </span>
                <p className="font-cairo font-bold text-[24px] leading-[34px] text-[#181d17]">
                  {formatMoney(monthly, 0)}
                  <span className="font-medium text-[11px] text-[#454840] ms-[6px]">ر.س / شهر</span>
                </p>
                <p className="font-cairo font-medium text-[11px] text-[#75786f]">99 ر.س لكل شقة</p>
              </div>
              <div className="relative bg-[rgba(242,225,192,0.4)] rounded-[12px] p-[8px] flex flex-col gap-[4px]">
                <span className="absolute top-[4px] start-[4px] bg-[#34422a] text-white rounded-[4px] px-[6px] py-[2px] font-cairo font-bold text-[10px]">
                  وفر 16%
                </span>
                <span className="inline-flex items-center justify-between font-cairo font-semibold text-[11px] text-[#231a06]">
                  الاشتراك السنوي
                  <BadgePercent size={13} />
                </span>
                <p className="font-cairo font-bold text-[24px] leading-[34px] text-[#231a06]">
                  {formatMoney(yearly, 0)}
                  <span className="font-medium text-[11px] ms-[6px]">ر.س / سنة</span>
                </p>
                <p className="font-cairo font-medium text-[11px] text-[#6f6349]">
                  يعادل {formatMoney(yearly / 12)} ر.س / شهرياً
                </p>
              </div>
            </div>
            <p className="font-cairo font-medium text-[11px] leading-[16px] text-[#75786f] text-center">
              * الأسعار تشمل ضريبة القيمة المضافة 15% وتتيح كامل خصائص المنصة دون أي استقطاع من حجوزاتك.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[rgba(216,232,199,0.6)] rounded-[16px] p-[24px] flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between" data-node-id="1:30657">
        <div className="flex items-start gap-[16px]">
          <span className="size-[48px] rounded-[12px] bg-[#34422a] text-white flex items-center justify-center shrink-0">
            <MapPin size={18} />
          </span>
          <div>
            <h3 className="font-cairo font-bold text-[18px] leading-[28px] text-[#131f0b]">
              تقدر تبدأ بالعدد اللي تحتاجه وتشتري شقق إضافية لاحقًا.
            </h3>
            <p className="font-cairo text-[14px] leading-[22px] text-[#3d4b33] mt-[2px]">
              عند إضافة وحدة جديدة إلى محفظتك في أي يوم من الشهر، سيتم احتساب تكلفتها بنظام التناسب الزمني (Prorated) للفترة المتبقية من اشتراكك الحالي تلقائياً دون تعقيد.
            </p>
          </div>
        </div>
        <span className="bg-white rounded-[12px] px-[12px] py-[6px] inline-flex items-center gap-[6px] font-cairo font-semibold text-[12px] text-[#181d17] shrink-0">
          <RefreshCw size={14} />
          توسع تدريجي ومستمر
        </span>
      </section>

      <section id="pricing" className="flex flex-col gap-[24px]" data-node-id="1:30672">
        <h2 className="font-cairo font-semibold text-[32px] leading-[42px] text-[#181d17] text-start">أسعار الاشتراك</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
          <article className="relative bg-white rounded-[16px] p-[24px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] flex flex-col gap-[16px]">
            <span className="absolute -top-[14px] end-[24px] bg-[#f2e1c0] text-[#231a06] rounded-full px-[14px] py-[4px] font-cairo font-bold text-[12px] inline-flex items-center gap-[6px]">
              <BadgePercent size={13} />
              الأفضل قيمة — وفر 189 ر.س لكل شقة
            </span>
            <PlanHead eyebrow="توفير سنوي مباشر" title="الاشتراك السنوي" iconBg="bg-[#d8e8c7]" icon={<BadgePercent size={20} />} />
            <div className="bg-[rgba(242,225,192,0.3)] rounded-[12px] p-[16px]">
              <p className="font-cairo font-bold text-[56px] leading-[72px] text-[#181d17]">
                {YEARLY_GROSS}
                <span className="text-[18px] font-semibold text-[#454840] ms-[8px]">ر.س</span>
                <span className="text-[14px] font-normal text-[#75786f] ms-[6px]">/ لكل شقة سنوياً</span>
              </p>
              <div className="flex items-center justify-between pt-[4px]">
                <span className="font-cairo font-medium text-[11px] text-[#454840]">شامل ضريبة القيمة المضافة 15%</span>
                <span className="font-cairo font-bold text-[12px] text-[#695d43]">ما يعادل 83.25 ر.س شهرياً للشقة</span>
              </div>
            </div>
            <PerkList items={yearlyPerks} />
            <Link href={`/subscription/configure?plan=yearly&units=${units}`} className="mt-[16px] bg-[#34422a] text-white rounded-[12px] py-[14px] font-cairo font-semibold text-[14px] inline-flex items-center justify-center gap-[6px]">
              بدء الاشتراك السنوي
              <ArrowLeft size={14} />
            </Link>
          </article>

          <article className="bg-white rounded-[16px] p-[24px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[16px]">
            <PlanHead eyebrow="خطة مرنة" title="الاشتراك الشهري" iconBg="bg-[#ebefe6]" icon={<CalendarRange size={18} />} />
            <div className="bg-[#f1f5eb] rounded-[12px] p-[16px]">
              <p className="font-cairo font-bold text-[56px] leading-[72px] text-[#181d17]">
                99
                <span className="text-[18px] font-semibold text-[#454840] ms-[8px]">ر.س</span>
                <span className="text-[14px] font-normal text-[#75786f] ms-[6px]">/ لكل شقة شهرياً</span>
              </p>
              <p className="font-cairo font-medium text-[11px] text-[#454840]">شامل ضريبة القيمة المضافة 15%</p>
            </div>
            <PerkList items={monthlyPerks} />
            <Link href={`/subscription/configure?plan=monthly&units=${units}`} className="mt-[16px] bg-[#e5eae0] text-[#181d17] rounded-[12px] py-[14px] font-cairo font-semibold text-[14px] inline-flex items-center justify-center gap-[6px]">
              بدء الاشتراك الشهري
              <ArrowLeft size={14} />
            </Link>
          </article>
        </div>
      </section>

      <section className="bg-[#f1f5eb] rounded-[16px] p-[28px] lg:p-[40px] flex flex-col gap-[24px]" data-node-id="1:30787">
        <div>
          <h3 className="font-cairo font-bold text-[20px] leading-[30px] text-[#181d17]">كيف يعمل نموذج الاشتراك في أبراج؟</h3>
          <p className="font-cairo text-[14px] leading-[22px] text-[#454840] mt-[4px]">
            ثلاث خطوات بسيطة تمنحك السيطرة الكاملة على محفظتك الإيجارية اليوم.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          <Step n="١" tone="bg-[#4b5940]" title="حدد رصيد الشقق" body={"اختر عدد الشقق التي تديرها اليوم بدقة. لا داعي لدفع رسوم باقات كبيرة تفوق احتياجك الفعلي."} />
          <Step n="٢" tone="bg-[#34422a]" title="فعّل اشتراكك فورياً" body={"ادفع بأمان عبر مدى، Apple Pay، أو البطاقات الائتمانية ليتم تفعيل كامل صلاحيات حسابك في ثوانٍ."} />
          <Step n="٣" tone="bg-[#695d43]" title="زوّد السعة في أي ثانية" body={"كلما أضفت عقاراً أو شقة جديدة، ادفع الفرق الزمني التناسبي فقط واستمر في العمل دون انقطاع."} />
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
        <Trust icon={<ShieldCheck size={20} />} iconBg="bg-[#f2e1c0]" title="مرخص وموثوق" body="متوافق مع تنظيمات الهيئة العامة للعقار في المملكة" />
        <Trust icon={<RefreshCw size={20} />} iconBg="bg-[#d8e8c7]" title="مزامنة القنوات" body="ربط تلقائي مع Booking.com و Airbnb و Gathern" />
        <Trust icon={<QrCode size={20} />} iconBg="bg-[#ebefe6]" title="فوترة ZATCA المرحلة 2" body="فواتير إلكترونية مشفرة بـ QR Code معتمد نظامياً" />
      </div>
    </div>
  );
}

function PlanHead({
  eyebrow,
  title,
  icon,
  iconBg,
}: {
  eyebrow: string;
  title: string;
  icon: ReactNode;
  iconBg: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-start">
        <p className="font-cairo font-bold text-[12px] leading-[18px] text-[#34422a]">{eyebrow}</p>
        <h3 className="font-cairo font-bold text-[20px] leading-[30px] text-[#181d17]">{title}</h3>
      </div>
      <span className={`${iconBg} size-[44px] rounded-[12px] flex items-center justify-center text-[#34422a]`}>{icon}</span>
    </div>
  );
}

function PerkList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-[8px]">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-[6px] font-cairo text-[14px] leading-[22px] text-[#181d17]">
          <Check size={16} className="text-[#34422a] mt-[3px] shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Step({ n, tone, title, body }: { n: string; tone: string; title: string; body: string }) {
  return (
    <article className="bg-white rounded-[12px] p-[24px] flex flex-col items-start gap-[8px]">
      <span className={`${tone} size-[40px] rounded-full text-white font-cairo font-bold text-[24px] leading-[34px] flex items-center justify-center`}>{n}</span>
      <h4 className="font-cairo font-bold text-[18px] leading-[28px] text-[#181d17]">{title}</h4>
      <p className="font-cairo text-[14px] leading-[22.75px] text-[#454840]">{body}</p>
    </article>
  );
}

function Trust({
  icon,
  iconBg,
  title,
  body,
}: {
  icon: ReactNode;
  iconBg: string;
  title: string;
  body: string;
}) {
  return (
    <article className="bg-white rounded-[12px] p-[16px] flex items-center gap-[16px]">
      <span className={`${iconBg} size-[48px] rounded-[12px] flex items-center justify-center text-[#34422a] shrink-0`}>{icon}</span>
      <div className="text-start">
        <h5 className="font-cairo font-semibold text-[18px] leading-[28px] text-[#181d17]">{title}</h5>
        <p className="font-cairo text-[14px] leading-[22px] text-[#454840]">{body}</p>
      </div>
    </article>
  );
}
