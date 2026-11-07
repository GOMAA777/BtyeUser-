"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Calendar, CreditCard, Lock, ShieldCheck } from "lucide-react";
import { SubscriptionHero } from "./subscription-hero";
import {
  type BillingPlan,
  clampUnits,
  formatMoney,
  grossTotal,
  proratedExtra,
  splitVat,
} from "../pricing";

const methods = [
  { id: "mada", title: "مدى (mada)", hint: "الأكثر استخداماً" },
  { id: "card", title: "البطاقات الائتمانية", hint: "VISA · MC" },
  { id: "apple", title: "Apple Pay", hint: "لمسة واحدة" },
] as const;

export function SubscriptionCheckoutView() {
  const params = useSearchParams();
  const router = useRouter();
  const mode = params.get("mode") === "extra" ? "extra" : "new";
  const plan: BillingPlan = params.get("plan") === "yearly" ? "yearly" : "monthly";
  const units = clampUnits(Number(params.get("units")) || (mode === "extra" ? 2 : 9));
  const [method, setMethod] = useState<(typeof methods)[number]["id"]>("mada");
  const [saveCard, setSaveCard] = useState(true);

  const totals = useMemo(() => {
    if (mode === "extra") return proratedExtra(units);
    return splitVat(grossTotal(units, plan));
  }, [mode, units, plan]);

  const pay = () => {
    const query = new URLSearchParams({
      mode,
      plan,
      units: String(units),
      amount: String(totals.gross),
    });
    router.push(`/subscription/success?${query.toString()}`);
  };

  return (
    <div className="flex flex-col gap-[20px] w-full" data-node-id="1:31324">
      <SubscriptionHero
        title="إتمام الدفع"
        subtitle="راجع المبلغ واختر طريقة الدفع المناسبة لإتمام اشتراكك وتفعيل سعة الشقق بأمان."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[16px]">
        <div className="lg:col-span-7 flex flex-col gap-[16px]">
          <section className="bg-white rounded-[16px] p-[20px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
            <h2 className="font-cairo font-bold text-[18px] text-[#181d17] mb-[12px] inline-flex items-center gap-[8px]">
              <CreditCard size={18} />
              طريقة الدفع
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[10px]">
              {methods.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setMethod(item.id)}
                  className={`rounded-[12px] border px-[12px] py-[12px] text-start ${
                    method === item.id ? "border-[#34422a] bg-[#f8f1e3]" : "border-[#e5eae0] bg-white"
                  }`}
                >
                  <span className="flex items-center justify-between font-cairo font-bold text-[14px] text-[#181d17]">
                    {item.title}
                    <span className={`size-[14px] rounded-full border-2 ${method === item.id ? "border-[#34422a] bg-[#34422a]" : "border-[#c5c8bd]"}`} />
                  </span>
                  <span className="font-cairo text-[11px] text-[#75786f]">{item.hint}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-[16px] p-[20px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px]">
            <h2 className="font-cairo font-bold text-[18px] text-[#181d17] inline-flex items-center gap-[8px]">
              <Lock size={16} />
              بيانات بطاقة مدى / البطاقة الائتمانية
            </h2>
            <Field label="رقم البطاقة" defaultValue="4847 1290 8472 9018" />
            <Field label="اسم حامل البطاقة (كما هو مدون على البطاقة)" defaultValue="محمد بن عبد الله العتيبي" />
            <div className="grid grid-cols-2 gap-[12px]">
              <Field label="تاريخ الانتهاء" defaultValue="11 / 28" icon={<Calendar size={14} />} />
              <Field label="رمز الأمان (CVV)" defaultValue="782" />
            </div>
            <label className="flex items-center justify-end gap-[8px] font-cairo text-[13px] text-[#454840]">
              حفظ البطاقة كوسيلة دفع افتراضية للتجديد التلقائي الآمن (مشفّر برمز توكن دون تخزين رقم البطاقة).
              <input type="checkbox" checked={saveCard} onChange={(event) => setSaveCard(event.target.checked)} className="accent-[#34422a]" />
            </label>
          </section>

          <section className="bg-white rounded-[16px] p-[20px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
            <h2 className="font-cairo font-bold text-[18px] text-[#181d17] mb-[12px]">بيانات المستلم للفاتورة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[10px]">
              <InfoTile label="اسم المستفيد المعتمد" value="محمد بن عبد الله العتيبي" />
              <InfoTile label="البريد الإلكتروني المفوتر" value="m.alotaibi@abraj.sa" />
              <InfoTile label="رقم الجوال للتوثيق" value="+966 50 512 3456" />
            </div>
          </section>
        </div>

        <aside className="lg:col-span-5 flex flex-col gap-[16px]">
          <section className="bg-white rounded-[16px] p-[20px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px]">
            <h2 className="font-cairo font-bold text-[18px] text-[#181d17]">ملخص الطلب</h2>
            <div className="bg-[#f1f5eb] rounded-[12px] p-[14px] flex items-center justify-between">
              <div className="text-start">
                <p className="font-cairo font-bold text-[28px] leading-[34px] text-[#181d17]">{units}</p>
                <p className="font-cairo text-[12px] text-[#454840]">وحدات سكنية مؤهلة أو متاحة</p>
              </div>
              <p className="font-cairo font-bold text-[16px] text-[#181d17]">سعة الشقق</p>
            </div>
            <SummaryLine label="سعر الشقة المعتمد" value={mode === "extra" ? "99.00 ر.س / شقة / شهر" : `${plan === "yearly" ? "999.00" : "99.00"} ر.س / شقة / ${plan === "yearly" ? "سنة" : "شهر"}`} />
            <SummaryLine label="دورة الفوترة" value={mode === "extra" ? "تناسب زمني حتى 30 نوفمبر 2026" : plan === "yearly" ? "سنوي، التجديد بعد 365 يوماً" : "شهري، التجديد تلقائي في 30 نوفمبر 2026"} />
            <SummaryLine label="نوع العملية" value={mode === "extra" ? "شراء سعة شقق إضافية" : "اشتراك جديد لسعة الشقق"} />
            <div className="h-px bg-[#e5eae0]" />
            <SummaryLine label="المجموع الأساسي الخاضع للضريبة" value={`${formatMoney(totals.net)} ر.س`} />
            <SummaryLine label="ضريبة القيمة المضافة 15% ZATCA" value={`${formatMoney(totals.vat)} ر.س`} />
            <div className="bg-[#f6f8f3] rounded-[12px] p-[12px] flex items-center justify-between">
              <p className="font-cairo font-bold text-[28px] text-[#181d17]">{formatMoney(totals.gross)} ر.س</p>
              <p className="font-cairo font-semibold text-[14px] text-[#181d17]">الإجمالي النهائي المستحق</p>
            </div>
          </section>

          <section className="bg-white rounded-[16px] p-[20px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
            <h2 className="font-cairo font-bold text-[16px] text-[#181d17] mb-[12px] inline-flex items-center gap-[6px]">
              <ShieldCheck size={16} />
              ضمانات الأمان والموثوقية
            </h2>
            <div className="grid grid-cols-2 gap-[8px]">
              {[
                ["PCI-DSS", "متوافق كامل · معايير أمان بطاقات الدفع العالمية"],
                ["bit SSL-256", "اتصال محمي وفق أعلى البروتوكولات"],
                ["ZATCA Phase 2", "فوترة إلكترونية مطابقة نظامياً"],
                ["3D Secure", "التحقق الثنائي · رمز OTP يرسل من بنكك المعتمد"],
              ].map(([title, body]) => (
                <div key={title} className="bg-[#f1f5eb] rounded-[12px] p-[10px]">
                  <p className="font-cairo font-bold text-[12px] text-[#181d17]">{title}</p>
                  <p className="font-cairo text-[11px] leading-[16px] text-[#454840]">{body}</p>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>

      <div className="bg-white rounded-[16px] px-[16px] py-[12px] flex items-center justify-between gap-3 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
        <button type="button" onClick={pay} className="bg-[#34422a] text-white rounded-[12px] px-[28px] py-[12px] font-cairo font-semibold text-[16px] inline-flex items-center gap-[8px]">
          <Lock size={14} />
          ادفع {formatMoney(totals.gross)} ر.س
        </button>
        <Link href={mode === "extra" ? "/subscription/capacity" : "/subscription/configure"} className="bg-[#ebefe6] text-[#181d17] rounded-[12px] px-[20px] py-[12px] font-cairo font-semibold text-[14px]">
          العودة
        </Link>
      </div>
    </div>
  );
}

function Field({ label, defaultValue, icon }: { label: string; defaultValue: string; icon?: ReactNode }) {
  return (
    <label className="flex flex-col items-start gap-[6px]">
      <span className="font-cairo text-[12px] text-[#75786f]">{label}</span>
      <span className="w-full bg-[#f6f8f3] rounded-[12px] h-[46px] px-[14px] flex items-center justify-between">
        {icon}
        <input defaultValue={defaultValue} className="bg-transparent outline-none w-full font-cairo text-[14px] text-[#181d17] text-end" />
      </span>
    </label>
  );
}

function SummaryLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="font-cairo font-semibold text-[13px] text-[#181d17]">{value}</span>
      <span className="font-cairo text-[13px] text-[#454840]">{label}</span>
    </div>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#f6f8f3] rounded-[12px] p-[12px] text-start">
      <p className="font-cairo text-[11px] text-[#75786f]">{label}</p>
      <p className="font-cairo font-semibold text-[13px] text-[#181d17] mt-[4px]">{value}</p>
    </div>
  );
}
