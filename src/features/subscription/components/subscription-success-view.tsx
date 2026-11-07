"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Check, FileText, Lock, ShieldCheck } from "lucide-react";
import { formatMoney } from "../pricing";

export function SubscriptionSuccessView() {
  const params = useSearchParams();
  const units = Number(params.get("units")) || 9;
  const amount = Number(params.get("amount")) || 891;
  const mode = params.get("mode") === "extra" ? "extra" : "new";
  const used = mode === "extra" ? 6 : 0;
  const available = Math.max(units - used, 0);

  return (
    <div className="flex flex-col gap-[20px] w-full" data-node-id="1:31700">
      <section className="bg-white rounded-[16px] px-[24px] py-[36px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center text-center">
        <span className="relative size-[72px] rounded-full bg-[#eef4e8] text-[#34422a] flex items-center justify-center">
          <Check size={32} strokeWidth={2.4} />
          <span className="absolute -bottom-1 -end-1 size-[22px] rounded-full bg-[#f2e1c0] text-[#695d43] flex items-center justify-center">
            <ShieldCheck size={12} />
          </span>
        </span>
        <span className="mt-[14px] bg-[#ebefe6] rounded-full px-[12px] py-[4px] font-cairo font-medium text-[12px] text-[#454840]">
          عملية مكتملة · نظام أبراج السحابي
        </span>
        <h1 className="mt-[10px] font-cairo font-bold text-[36px] leading-[44px] text-[#181d17]">تم الدفع بنجاح</h1>
        <p className="mt-[6px] font-cairo text-[15px] leading-[24px] text-[#454840]">
          تم تفعيل الاشتراك وإضافة رصيد الشقق إلى حسابك الاستثماري فورياً.
        </p>
        <div className="mt-[12px] flex flex-wrap items-center justify-center gap-[8px]">
          <span className="bg-[#f6f8f3] rounded-full px-[10px] py-[4px] font-cairo text-[12px] text-[#34422a]">عملية دفع موثّقة ومعتمدة بنكياً</span>
          <span className="bg-[#f8f1e3] rounded-full px-[10px] py-[4px] font-cairo text-[12px] text-[#695d43]">متوافق مع ZATCA المرحلة 2</span>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[16px]">
        <section className="lg:col-span-7 bg-white rounded-[16px] p-[20px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[14px]">
          <div className="flex items-center justify-between">
            <span className="bg-[#e7f0df] text-[#34422a] rounded-full px-[10px] py-[4px] font-cairo text-[12px]">رصيد جاهز للاستخدام</span>
            <h2 className="font-cairo font-bold text-[18px] text-[#181d17] inline-flex items-center gap-[8px]">
              محفظة الشقق
              <span className="size-[28px] rounded-[8px] bg-[#34422a] text-white inline-flex items-center justify-center"><Check size={14} /></span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-[10px]">
            <Stat label="إجمالي الشقق المشتراة" value={`${units} شقق`} hint="الباقة المختارة" />
            <Stat label="الشقق المستخدمة" value={`${used} شقة`} hint="لا توجد وحدات نشطة" />
            <Stat label="الشقق المتبقية والمتاحة" value={`${available} شقق`} hint="جاهزة للتخصيص الحالي" />
          </div>
          <div>
            <div className="flex items-center justify-between font-cairo text-[12px] text-[#454840] mb-[6px]">
              <span>0 مستخدمة</span>
              <span>مؤشر استهلاك السعة · {used === 0 ? "0" : Math.round((used / units) * 100)}% مستخدم ({used} من أصل {units} متاحة)</span>
            </div>
            <div className="h-[10px] rounded-full bg-[#e5eae0] overflow-hidden flex">
              <div className="h-full bg-[#34422a]" style={{ width: `${Math.min(100, (used / units) * 100)}%` }} />
            </div>
          </div>
          <div className="bg-[#f8f1e3] rounded-[12px] p-[14px] text-start">
            <p className="font-cairo font-bold text-[14px] text-[#231a06]">إرشادات تفعيل الشقق</p>
            <p className="font-cairo text-[13px] leading-[22px] text-[#695d43] mt-[4px]">
              ابدأ الآن إضافة وحداتك حتى تستخدم كامل الرصيد المتاح. عند إضافة شقة جديدة إلى محفظتك، سيتم خصمها من رصيدك المتاح تلقائياً دون أي تكلفة إضافية.
            </p>
          </div>
        </section>

        <section className="lg:col-span-5 bg-white rounded-[16px] p-[20px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[10px]">
          <h2 className="font-cairo font-bold text-[18px] text-[#181d17] inline-flex items-center gap-[8px]">
            <FileText size={16} />
            تفاصيل العملية والاشتراك
          </h2>
          <p className="font-cairo text-[12px] text-[#75786f]">البيانات المالية والنظامية المعتمدة</p>
          <Line label="السعة المشتراة" value={`${units} شقق سكنية`} />
          <Line label="دورة الفوترة" value="شهري (تجديد تلقائي)" />
          <Line label="طريقة الدفع" value="mada ···· 4847" />
          <Line label="رقم مرجع الدفع" value="PAY-SA-98214887" />
          <Line label="رقم الفاتورة الضريبية" value="INV-2026-08124" />
          <Line label="تاريخ بدء السريان" value="1 نوفمبر 2026" />
          <Line label="تاريخ التجديد القادم" value="30 نوفمبر 2026" />
          <div className="bg-[#f1f5eb] rounded-[12px] p-[12px] flex items-center justify-between">
            <div>
              <p className="font-cairo font-bold text-[24px] text-[#181d17]">{formatMoney(amount)} ر.س</p>
              <p className="font-cairo text-[11px] text-[#75786f]">شامل ضريبة القيمة المضافة 15%</p>
            </div>
            <p className="font-cairo font-semibold text-[13px] text-[#181d17]">إجمالي المبلغ المدفوع</p>
          </div>
          <div className="flex items-center justify-between font-cairo text-[12px] text-[#454840]">
            <span className="inline-flex items-center gap-[4px]"><Lock size={12} /> فاتورة ضريبية مشفّرة بصيغة URL 2.1</span>
            <span className="inline-flex items-center gap-[4px]"><ShieldCheck size={12} /> هيئة الزكاة والضريبة والجمارك</span>
          </div>
          <Link href="/subscription/active" className="mt-[4px] text-center bg-[#34422a] text-white rounded-[12px] py-[12px] font-cairo font-semibold text-[14px]">
            الانتقال إلى اشتراكي
          </Link>
        </section>
      </div>
    </div>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="bg-[#f3f6ef] rounded-[12px] p-[12px] text-center">
      <p className="font-cairo text-[12px] text-[#454840]">{label}</p>
      <p className="font-cairo font-bold text-[22px] text-[#181d17] mt-[4px]">{value}</p>
      <p className="font-cairo text-[11px] text-[#75786f]">{hint}</p>
    </div>
  );
}

function Line({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-[#f1f5eb] py-[6px]">
      <span className="font-cairo font-semibold text-[13px] text-[#181d17]">{value}</span>
      <span className="font-cairo text-[13px] text-[#454840]">{label}</span>
    </div>
  );
}
