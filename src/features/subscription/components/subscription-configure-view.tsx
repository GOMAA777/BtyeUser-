"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Check, Info, Minus, Plus } from "lucide-react";
import { SubscriptionHero } from "./subscription-hero";
import {
  type BillingPlan,
  MAX_UNITS,
  MIN_UNITS,
  clampUnits,
  formatMoney,
  grossTotal,
  splitVat,
  unitGross,
} from "../pricing";

const QUICK = [1, 3, 5, 9, 15];
const JUMPS = [25, 50, 100];

export function SubscriptionConfigureView() {
  const params = useSearchParams();
  const router = useRouter();
  const initialPlan: BillingPlan = params.get("plan") === "monthly" ? "monthly" : "yearly";
  const initialUnits = clampUnits(Number(params.get("units")) || 9);
  const [plan, setPlan] = useState<BillingPlan>(initialPlan);
  const [units, setUnits] = useState(initialUnits);

  const totals = useMemo(() => splitVat(grossTotal(units, plan)), [units, plan]);
  const setCount = (next: number) => setUnits(clampUnits(next));

  const continuePay = () => {
    router.push(`/subscription/checkout?plan=${plan}&units=${units}&mode=new`);
  };

  return (
    <div className="flex flex-col gap-[20px] w-full" data-node-id="1:30959">
      <SubscriptionHero
        title="حدد عدد الشقق — احسب اشتراكك"
        subtitle="اختار العدد اللي تحتاجه، والنظام يحسب لك قيمة الاشتراك تلقائياً بكل شفافية وبدون باقات مقيّدة أو تكاليف غير مستغلة."
      />

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-[16px]">
        <div className="lg:col-span-7 bg-white rounded-[16px] p-[24px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[16px]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="font-cairo font-bold text-[18px] leading-[28px] text-[#181d17]">كم شقة تحتاج؟</h2>
              <p className="font-cairo text-[14px] leading-[22px] text-[#454840] mt-[4px]">
                حدد السعة المطلوبة لمحفظتك العقارية الحالية (الحد الأدنى: 1 شقة). يمكنك زيادة الرصيد في أي وقت بنظام التناسب الزمني.
              </p>
            </div>
            <span className="bg-[#ebefe6] rounded-full px-[10px] py-[4px] font-cairo font-medium text-[12px] text-[#34422a] shrink-0">توسع فوري</span>
          </div>

          <div className="bg-[#f6f8f3] rounded-[16px] p-[20px] flex flex-col items-center gap-[12px]">
            <div className="flex items-center gap-[16px]">
              <button type="button" aria-label="زيادة" onClick={() => setCount(units + 1)} className="size-[56px] rounded-[12px] bg-[#34422a] text-white flex items-center justify-center">
                <Plus size={20} />
              </button>
              <div className="text-center min-w-[88px]">
                <p className="font-cairo font-bold text-[40px] leading-[48px] text-[#181d17]">{units}</p>
                <p className="font-cairo text-[13px] text-[#75786f]">شقة السعة المحجوزة</p>
              </div>
              <button type="button" aria-label="تقليل" onClick={() => setCount(units - 1)} className="size-[56px] rounded-[12px] bg-white border border-[#dfe4db] text-[#181d17] flex items-center justify-center">
                <Minus size={20} />
              </button>
            </div>
            <input
              type="range"
              min={MIN_UNITS}
              max={MAX_UNITS}
              value={units}
              onChange={(event) => setCount(Number(event.target.value))}
              className="w-full accent-[#34422a]"
            />
            <div className="flex justify-between w-full font-cairo text-[11px] text-[#75786f]">
              <span>1 شقة</span>
              <span>25 شقة</span>
              <span>50 شقة</span>
              <span>75 شقة</span>
              <span>+100 شقة</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-end gap-[8px]">
            {QUICK.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setCount(value)}
                className={`rounded-full px-[14px] py-[6px] font-cairo font-semibold text-[13px] ${
                  units === value ? "bg-[#34422a] text-white" : "bg-[#f1f5eb] text-[#181d17]"
                }`}
              >
                {value} شقق{units === value ? " (محدد)" : ""}
              </button>
            ))}
            {JUMPS.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setCount(units + value)}
                className="rounded-full px-[14px] py-[6px] bg-[#f1f5eb] font-cairo font-semibold text-[13px] text-[#181d17]"
              >
                +{value} شقة
              </button>
            ))}
          </div>

          <div className="bg-[#f8f1e3] rounded-[12px] px-[16px] py-[12px] flex items-start gap-[8px] font-cairo text-[13px] leading-[20px] text-[#695d43]">
            <Info size={16} className="shrink-0 mt-[2px]" />
            <span>يمكنك إضافة شقق إضافية لاحقاً في أي يوم وسيتم احتسابها تلقائياً بنظام التناسب الزمني (Prorated) دون خسارة أي مبالغ مدفوعة مسبقاً.</span>
          </div>
        </div>

        <aside className="lg:col-span-5 bg-white rounded-[16px] p-[24px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[14px]">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-cairo text-[12px] text-[#75786f]">الفاتورة المبدئية</p>
              <h2 className="font-cairo font-bold text-[20px] leading-[30px] text-[#181d17]">ملخص الاشتراك والفاتورة الفورية</h2>
            </div>
            <span className="bg-[#f2e1c0] text-[#231a06] rounded-full px-[10px] py-[4px] font-cairo font-medium text-[11px]">حساب فوري وتلقائي</span>
          </div>
          <Row label="عدد الشقق المطلوب شراؤها" value={`${units} شقق`} strong />
          <Row label="سعر الشقة المعتمد" value={`${formatMoney(unitGross(plan), 0)} ر.س / شقة / ${plan === "yearly" ? "سنة" : "شهر"}`} />
          <Row label="دورة الفوترة" value={plan === "yearly" ? "سنوي (12 شهراً)" : "شهري، التجديد تلقائي"} />
          <Row label="تاريخ السريان والتشغيل" value="فوري عند تأكيد السداد" />
          <div className="h-px bg-[#e5eae0]" />
          <Row label="الإجمالي الأساسي (قبل الضريبة)" value={`${formatMoney(totals.net)} ر.س`} />
          <Row label="ضريبة القيمة المضافة (15% ZATCA)" value={`${formatMoney(totals.vat)} ر.س`} />
          <div className="bg-[#f1f5eb] rounded-[12px] p-[14px] flex items-center justify-between">
            <div>
              <p className="font-cairo font-bold text-[28px] leading-[36px] text-[#181d17]">{formatMoney(totals.gross)}</p>
              <p className="font-cairo text-[12px] text-[#75786f]">ريال سعودي شامل ضريبة 15%</p>
            </div>
            <p className="font-cairo font-semibold text-[14px] text-[#181d17]">الإجمالي النهائي المستحق</p>
          </div>
          <button type="button" onClick={continuePay} className="bg-[#34422a] text-white rounded-[12px] py-[14px] font-cairo font-semibold text-[15px] inline-flex items-center justify-center gap-[8px]">
            متابعة الدفع
            <span aria-hidden>←</span>
          </button>
        </aside>
      </section>

      <section className="bg-white rounded-[16px] p-[24px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[16px]">
        <div>
          <h2 className="font-cairo font-bold text-[20px] text-[#181d17]">دورة الفوترة المفضلة</h2>
          <p className="font-cairo text-[14px] text-[#454840]">اختار دورة السداد الأنسب لتدفقاتك المالية مع الاستفادة من الخصم السنوي الحصري.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
          <PlanChoice
            active={plan === "yearly"}
            onSelect={() => setPlan("yearly")}
            badge="الأكثر توفيراً (15.9% خصم)"
            title="الاشتراك السنوي"
            note="موصى به · تغطية تشغيلية كاملة لـ 365 يوماً"
            price="999"
            unit="ر.س / شقة / سنة"
            extra="يعادل 83.25 ر.س / شقة شهرياً · وفر 189 ر.س لكل شقة سنوياً"
            points={["تثبيت التسعير لمدة 365 يوماً كاملة", "أولوية الربط وقنوات الـ OTA وتقارير تدقيق معتمدة"]}
          />
          <PlanChoice
            active={plan === "monthly"}
            onSelect={() => setPlan("monthly")}
            badge="دفع مرن"
            title="الاشتراك الشهري"
            note="مرونة دفع شهرية متجددة"
            price="99"
            unit="ر.س / شقة / شهر"
            extra="شامل 15% ضريبة القيمة المضافة"
            points={["مرونة كاملة في الإلغاء أو التعديل شهرياً بدون التزام زمني طويل", "تتجدد آلياً حسب عدد بطاقتك المفضلة"]}
          />
        </div>
      </section>
    </div>
  );
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className={`font-cairo text-[14px] text-[#181d17] ${strong ? "font-bold" : "font-semibold"}`}>{value}</span>
      <span className="font-cairo text-[13px] text-[#454840] text-start">{label}</span>
    </div>
  );
}

function PlanChoice({
  active,
  onSelect,
  badge,
  title,
  note,
  price,
  unit,
  extra,
  points,
}: {
  active: boolean;
  onSelect: () => void;
  badge: string;
  title: string;
  note: string;
  price: string;
  unit: string;
  extra: string;
  points: string[];
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`text-start rounded-[16px] p-[18px] border flex flex-col gap-[10px] ${
        active ? "bg-[#f3f6ef] border-[#34422a]" : "bg-white border-[#e5eae0]"
      }`}
    >
      <span className={`self-end rounded-full px-[10px] py-[3px] font-cairo font-bold text-[11px] ${active ? "bg-[#34422a] text-white" : "bg-[#ebefe6] text-[#454840]"}`}>
        {badge}
      </span>
      <div className="flex items-center justify-between">
        <span className={`size-[18px] rounded-full border-2 ${active ? "border-[#34422a] bg-[#34422a]" : "border-[#c5c8bd]"}`} />
        <div>
          <p className="font-cairo font-bold text-[18px] text-[#181d17]">{title}</p>
          <p className="font-cairo text-[12px] text-[#75786f]">{note}</p>
        </div>
      </div>
      <p className="font-cairo font-bold text-[36px] leading-[42px] text-[#181d17]">
        {price} <span className="text-[14px] font-semibold">{unit}</span>
      </p>
      <p className="font-cairo text-[12px] text-[#695d43]">{extra}</p>
      <ul className="flex flex-col gap-[6px]">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-[6px] font-cairo text-[13px] leading-[20px] text-[#181d17]">
            <Check size={14} className="mt-[3px] shrink-0 text-[#34422a]" />
            {point}
          </li>
        ))}
      </ul>
    </button>
  );
}
