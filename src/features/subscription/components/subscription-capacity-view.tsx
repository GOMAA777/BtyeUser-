"use client";

import { useMemo, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Building2, Check, Home, Info, Minus, Plus, X } from "lucide-react";
import { SubscriptionHero } from "./subscription-hero";
import { DAYS_LEFT, MONTHLY_GROSS, clampUnits, formatMoney, proratedExtra } from "../pricing";

const BASE = 9;
const USED = 6;
const QUICK = [1, 2, 3, 5, 10];

export function SubscriptionCapacityView() {
  const router = useRouter();
  const [extra, setExtra] = useState(3);
  const [open, setOpen] = useState(false);
  const quote = useMemo(() => proratedExtra(extra), [extra]);
  const setCount = (next: number) => setExtra(clampUnits(next));
  const percent = Math.round((USED / BASE) * 1000) / 10;

  return (
    <div className="flex flex-col gap-[20px] w-full" data-node-id="1:32443">
      <SubscriptionHero
        title="شراء سعة شقق إضافية"
        subtitle="أضف شققاً جديدة لمحفظتك التشغيلية فوراً مع احتساب القيمة تلقائياً"
      />

      <section className="bg-white rounded-[16px] p-[20px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[14px]">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <span className="font-cairo text-[13px] text-[#454840] inline-flex items-center gap-[6px]">
            <Info size={14} />
            متبقي {DAYS_LEFT} يوماً من الدورة الحالية (تجديد 30 نوفمبر 2026)
          </span>
          <div className="text-start">
            <h2 className="font-cairo font-bold text-[18px] text-[#181d17] inline-flex items-center gap-[8px]">
              <Home size={16} />
              محفظة رصيد الشقق الحالي
            </h2>
            <p className="font-cairo text-[12px] text-[#75786f]">معرف الباقة: ABR-PRO-88424 · عمارة النخيل + برج الياسمين · ساري المفعول</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[10px]">
          <CapacityStat icon={<Building2 size={16} />} label="إجمالي السعة المشتراة" value={`${BASE} شقق معتمدة`} />
          <CapacityStat icon={<Home size={16} />} label="الشقق المستخدمة حالياً" value={`${USED} شقق نشطة`} hint="عمارة النخيل 4 + برج الياسمين 2" />
          <CapacityStat icon={<Plus size={16} />} label="الشقق المتاحة للشغل" value={`${BASE - USED} شقق شاغرة بالرصيد`} hint="جاهزة لإسناد المباشر" />
        </div>
        <div>
          <div className="flex justify-between font-cairo text-[12px] text-[#454840] mb-[6px]">
            <span>{percent}% مستخدمة ({USED} من أصل {BASE})</span>
            <span>نسبة استهلاك سعة المحفظة الحالية</span>
          </div>
          <div className="h-[8px] rounded-full bg-[#e7efe2] overflow-hidden">
            <div className="h-full bg-[#34422a]" style={{ width: `${percent}%` }} />
          </div>
          <div className="flex justify-between font-cairo text-[11px] text-[#75786f] mt-[6px]">
            <span>المستخدمة {USED} شقق</span>
            <span>المتبقى / الشاغر {BASE - USED} شقق</span>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-[16px] p-[20px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[16px]">
        <div className="flex items-start justify-between">
          <span className="bg-[#f8f1e3] rounded-full px-[10px] py-[4px] font-cairo text-[12px] text-[#695d43]">{MONTHLY_GROSS} ر.س / شقة / شهر</span>
          <div className="text-start">
            <p className="font-cairo text-[12px] text-[#75786f]">الخطوة الأولى: تحديد الحجم</p>
            <h2 className="font-cairo font-bold text-[22px] text-[#181d17]">كم شقة إضافية تحتاج لمحفظتك؟</h2>
          </div>
        </div>
        <div className="bg-[#f6f8f3] rounded-[16px] p-[16px] flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-cairo text-[14px] leading-[22px] text-[#454840] max-w-[420px]">
            حدد الشقق الإضافية المراد إضافتها. يمكنك زيادة أي عدد من الشقق الجديدة بما يتّسق التوسع الجديد.
          </p>
          <div className="flex items-center gap-[12px]">
            <button type="button" aria-label="زيادة" onClick={() => setCount(extra + 1)} className="size-[48px] rounded-[12px] bg-[#34422a] text-white flex items-center justify-center"><Plus size={18} /></button>
            <div className="min-w-[72px] text-center">
              <p className="font-cairo font-bold text-[32px] leading-[36px] text-[#181d17]">{extra}</p>
              <p className="font-cairo text-[12px] text-[#75786f]">شقق إضافية</p>
            </div>
            <button type="button" aria-label="تقليل" onClick={() => setCount(extra - 1)} className="size-[48px] rounded-[12px] bg-white border border-[#dfe4db] flex items-center justify-center"><Minus size={18} /></button>
          </div>
        </div>
        <div className="flex flex-wrap justify-end gap-[8px]">
          {QUICK.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setCount(value)}
              className={`rounded-full px-[14px] py-[6px] font-cairo font-semibold text-[13px] ${extra === value ? "bg-[#34422a] text-white" : "bg-[#f1f5eb] text-[#181d17]"}`}
            >
              {value === 1 ? "1+ شقة" : value === 2 ? "2+ شقة" : `${value}+ شقق`}{extra === value ? " (محدد)" : ""}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-[16px] p-[20px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[14px]">
        <div className="flex items-center justify-between">
          <span className="bg-[#e7f0df] text-[#34422a] rounded-full px-[10px] py-[4px] font-cairo text-[12px]">معادلة دقيقة 100%</span>
          <h2 className="font-cairo font-bold text-[18px] text-[#181d17]">آلية الاحتساب التناسبي الزمني المعتمدة</h2>
        </div>
        <div className="bg-[#f6f8f3] rounded-[12px] p-[16px] flex flex-col gap-[12px] lg:flex-row lg:items-center lg:justify-between">
          <p className="font-cairo text-[13px] text-[#454840]">معادلة الحساب المطبقة على هذه الفاتورة:</p>
          <div className="flex flex-wrap items-center gap-[8px] font-cairo font-semibold text-[14px] text-[#181d17]">
            <span className="bg-white rounded-[8px] px-[10px] py-[6px]">{extra} شقق</span>
            <span>×</span>
            <span className="bg-white rounded-[8px] px-[10px] py-[6px]">{MONTHLY_GROSS} ر.س × {DAYS_LEFT} يوماً / 30</span>
            <span>=</span>
            <span className="font-bold text-[20px]">{formatMoney(quote.net)} ر.س</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[12px]">
          <Note title="سعر الشقة القياسي" body={`3.30 ر.س يومياً (ما يعادل ${MONTHLY_GROSS}.00 ر.س / شهر للشقة)`} />
          <Note title="الأيام المتبقية للشحن" body={`${DAYS_LEFT} يوماً فقط من ${30} (حتى 30 نوفمبر 2026)`} />
          <Note title="تراس تلقائي للفواتير" body="لن تدفع قيمة الشهر كاملاً. تُحتسب فقط المدة المتبقية حتى تاريخ التجديد." />
        </div>
      </section>

      <div className="bg-white rounded-[16px] px-[16px] py-[12px] flex items-center justify-between drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
        <button type="button" onClick={() => setOpen(true)} className="bg-[#34422a] text-white rounded-[12px] px-[22px] py-[12px] font-cairo font-semibold text-[14px]">
          متابعة الدفع
        </button>
        <button type="button" onClick={() => router.push("/subscription/active")} className="bg-[#ebefe6] text-[#181d17] rounded-[12px] px-[18px] py-[12px] font-cairo font-semibold text-[14px]">
          إلغاء
        </button>
      </div>

      {open && (
        <ConfirmModal
          extra={extra}
          quote={quote}
          onClose={() => setOpen(false)}
          onPay={() => router.push(`/subscription/checkout?mode=extra&plan=monthly&units=${extra}`)}
        />
      )}
    </div>
  );
}

function ConfirmModal({
  extra,
  quote,
  onClose,
  onPay,
}: {
  extra: number;
  quote: { net: number; vat: number; gross: number };
  onClose: () => void;
  onPay: () => void;
}) {
  const nextTotal = BASE + extra;
  const vacant = BASE - USED;
  return (
    <div className="fixed inset-0 z-50 bg-black/45 flex items-center justify-center p-4" data-node-id="1:32779">
      <div className="bg-white w-full max-w-[672px] rounded-[16px] shadow-[0px_20px_40px_-8px_rgba(37,42,36,0.18)] overflow-hidden max-h-[92vh] overflow-y-auto">
        <div className="h-[6px] bg-gradient-to-l from-[#f2e1c0] via-[#4b5940] to-[#34422a]" />
        <div className="flex items-center justify-between px-[28px] pt-[20px] pb-[8px]">
          <button type="button" aria-label="إغلاق" onClick={onClose} className="size-[36px] rounded-[8px] text-[#454840] flex items-center justify-center">
            <X size={16} />
          </button>
          <h2 className="font-cairo font-bold text-[24px] leading-[34px] text-[#181d17]">تأكيد شراء شقق إضافية</h2>
        </div>
        <div className="px-[28px] py-[8px] flex flex-col gap-[16px]">
          <div className="bg-[#f1f5eb] rounded-[12px] p-[16px] flex flex-col gap-[10px]">
            <div className="flex items-center justify-between">
              <span className="bg-[rgba(242,225,192,0.4)] text-[#695d43] rounded-[6px] px-[8px] py-[2px] font-cairo text-[11px]">سريان فوري</span>
              <span className="font-cairo font-semibold text-[14px] text-[#181d17] inline-flex items-center gap-[6px]">
                مخطط السعة التراكمية للمحفظة
                <Check size={14} />
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-[8px]">
              <Metric label="السعة المعتمدة" value={String(BASE)} unit="شقق" hint="الحد الأساسي" />
              <Metric label="الشقق المستخدمة" value={String(USED)} unit="شقق" hint="نشطة بالعقارات" />
              <Metric label="الإضافة المطلوبة" value={`+${extra}`} unit="شقة" hint="توسيع جديد" />
              <Metric label="إجمالي السعة الجديد" value={String(nextTotal)} unit="شقة" hint="بعد التفعيل" highlight />
            </div>
            <p className="font-cairo text-[11px] text-[#454840] text-start">توزيع الحصص الكلي ({nextTotal} شقة)</p>
            <div className="h-[14px] rounded-full bg-[#dfe4db] overflow-hidden flex">
              <div className="h-full bg-[#4b5940]" style={{ width: `${(extra / nextTotal) * 100}%` }} />
              <div className="h-full bg-[#d5c5a5]" style={{ width: `${(vacant / nextTotal) * 100}%` }} />
              <div className="h-full bg-[#34422a]" style={{ width: `${(USED / nextTotal) * 100}%` }} />
            </div>
            <div className="flex flex-wrap justify-between gap-2 font-cairo text-[11px] text-[#75786f]">
              <span className="inline-flex items-center gap-[6px]">إضافة جديدة (+{extra})<i className="size-[10px] rounded-full bg-[#4b5940]" /></span>
              <span className="inline-flex items-center gap-[6px]">شاغرة حالياً ({vacant})<i className="size-[10px] rounded-full bg-[#d5c5a5]" /></span>
              <span className="inline-flex items-center gap-[6px]">مستخدمة ({USED})<i className="size-[10px] rounded-full bg-[#34422a]" /></span>
            </div>
          </div>

          <div className="bg-white rounded-[12px] p-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[8px]">
            <h3 className="font-cairo font-semibold text-[18px] text-[#181d17]">تفاصيل الاحتساب والفوترة المتناسبة</h3>
            <Pair label="سعر الشقة القياسي" value={`${formatMoney(MONTHLY_GROSS)} ر.س / شقة / شهر`} />
            <Pair label="عدد الشقق الإضافية المطلوبة" value={`${extra} شقة`} />
            <div className="bg-[#f1f5eb] rounded-[8px] p-[8px] flex items-center justify-between">
              <span className="font-cairo font-semibold text-[14px] text-[#34422a]">{formatMoney(quote.net)} ر.س</span>
              <span className="text-start">
                <span className="block font-cairo font-semibold text-[12px] text-[#181d17]">معاملة الفوترة: تناسب زمني</span>
                <span className="block font-cairo text-[11px] text-[#75786f]">للمدة المتبقية حتى تاريخ التجديد 30 نوفمبر 2026 ({DAYS_LEFT} يوماً)</span>
              </span>
            </div>
            <Pair label="ضريبة القيمة المضافة (15% ZATCA)" value={`${formatMoney(quote.vat)} ر.س`} />
            <div className="bg-[rgba(242,225,192,0.3)] rounded-[12px] p-[16px] flex items-center justify-between">
              <p className="font-cairo font-bold text-[32px] leading-[42px] text-[#231a06]">{formatMoney(quote.gross)} <span className="text-[14px]">ر.س</span></p>
              <div className="text-start">
                <p className="font-cairo font-bold text-[18px] text-[#231a06]">الإجمالي النهائي المستحق الآن</p>
                <p className="font-cairo text-[11px] text-[#6f6349]">شامل ضريبة القيمة المضافة بنسبة 15%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[28px] py-[16px] flex items-center justify-between gap-3">
          <button type="button" onClick={onPay} className="flex-1 bg-[#34422a] text-white rounded-[12px] py-[14px] font-cairo font-semibold text-[16px]">
            متابعة الدفع ({formatMoney(quote.gross)} ر.س) ←
          </button>
          <button type="button" onClick={onClose} className="bg-[#ebefe6] text-[#181d17] rounded-[12px] px-[16px] py-[12px] font-cairo font-semibold text-[14px]">
            تعديل العدد
          </button>
        </div>
      </div>
    </div>
  );
}

function CapacityStat({ icon, label, value, hint }: { icon: ReactNode; label: string; value: string; hint?: string }) {
  return (
    <div className="bg-[#f6f8f3] rounded-[12px] p-[12px] text-start">
      <span className="text-[#34422a]">{icon}</span>
      <p className="font-cairo text-[12px] text-[#75786f] mt-[6px]">{label}</p>
      <p className="font-cairo font-bold text-[16px] text-[#181d17]">{value}</p>
      {hint && <p className="font-cairo text-[11px] text-[#454840]">{hint}</p>}
    </div>
  );
}

function Note({ title, body }: { title: string; body: string }) {
  return (
    <div className="text-start">
      <p className="font-cairo font-semibold text-[14px] text-[#181d17] inline-flex items-center gap-[6px]"><Check size={14} className="text-[#34422a]" />{title}</p>
      <p className="font-cairo text-[13px] leading-[20px] text-[#454840] mt-[4px]">{body}</p>
    </div>
  );
}

function Metric({ label, value, unit, hint, highlight }: { label: string; value: string; unit: string; hint: string; highlight?: boolean }) {
  return (
    <div className={`rounded-[8px] p-[8px] text-center relative overflow-hidden ${highlight ? "bg-[rgba(216,232,199,0.4)]" : "bg-white"}`}>
      {highlight && <span className="absolute inset-x-0 top-0 h-[4px] bg-[#34422a]" />}
      <p className="font-cairo text-[11px] text-[#75786f]">{label}</p>
      <p className="font-cairo font-bold text-[24px] leading-[34px] text-[#34422a]">{value} <span className="text-[11px] font-medium">{unit}</span></p>
      <p className="font-cairo text-[11px] text-[#454840]">{hint}</p>
    </div>
  );
}

function Pair({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-[6px]">
      <span className="font-cairo font-semibold text-[14px] text-[#181d17]">{value}</span>
      <span className="font-cairo text-[14px] text-[#454840]">{label}</span>
    </div>
  );
}
