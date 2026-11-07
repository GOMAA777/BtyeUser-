"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Building2, Calendar, Download, FileText, Info, Plus, RefreshCw } from "lucide-react";
import { SubscriptionHero } from "./subscription-hero";

const properties = [
  { name: "عمارة النخيل - العليا، الرياض", units: ["101", "102", "204", "305"], count: 4 },
  { name: "برج الياسمين - الملقا، الرياض", units: ["501", "502"], count: 2 },
];

export function SubscriptionActiveView({ full = false }: { full?: boolean }) {
  const purchased = 9;
  const used = full ? 9 : 6;
  const available = purchased - used;
  const percent = Math.round((used / purchased) * 1000) / 10;

  return (
    <div className="flex flex-col gap-[20px] w-full" data-node-id={full ? "1:32920" : "1:32018"}>
      <SubscriptionHero
        title="اشتراكي"
        subtitle="اشترك بالعدد اللي يناسبك من الشقق، وزوّد رصيدك وقت ما تحتاج بكل مرونة وشفافية وبدون باقات مقيدة"
        action={
          <Link href="/subscription/capacity" className="bg-[#34422a] text-white rounded-[12px] h-[40px] px-[16px] inline-flex items-center gap-[8px] font-cairo font-semibold text-[13px] shrink-0">
            <Plus size={15} />
            شراء شقق إضافية
          </Link>
        }
      />

      {full && (
        <section className="bg-[#f8f1e3] rounded-[16px] p-[18px] flex flex-col gap-[12px] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-[12px]">
            <span className="size-[36px] rounded-full bg-white text-[#695d43] flex items-center justify-center shrink-0">
              <Info size={16} />
            </span>
            <div className="text-start">
              <p className="font-cairo font-bold text-[16px] text-[#231a06]">
                تنبيه تشغيلي: الحد الأقصى لسعة الحالية — استخدمت كامل رصيد الشقق المتاح في اشتراكك (9 من أصل 9 شقق)
              </p>
              <p className="font-cairo text-[13px] leading-[22px] text-[#695d43] mt-[4px]">
                لقد وصلت ربط كافة الشقق الـ 9 المعتمدة ضمن محفظتك العقارية. لمنع أي تعارض في جدولة الوحدات، تم تعليق إضافة وحدات جديدة مؤقتاً حتى توسيع رصيد الباقة.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[8px] shrink-0">
            <Link href="/units" className="bg-white text-[#181d17] rounded-[12px] px-[14px] py-[10px] font-cairo font-semibold text-[13px]">
              عرض الوحدات النشطة
            </Link>
            <Link href="/subscription/capacity" className="bg-[#34422a] text-white rounded-[12px] px-[14px] py-[10px] font-cairo font-semibold text-[13px] inline-flex items-center gap-[6px]">
              <Plus size={14} />
              شراء شقق إضافية
            </Link>
          </div>
        </section>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[16px]">
        <section className="lg:col-span-7 bg-white rounded-[16px] p-[20px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[14px]">
          <div className="flex items-start justify-between">
            <span className="bg-[#f8f1e3] text-[#695d43] rounded-full px-[10px] py-[4px] font-cairo text-[12px]">فوترة مرنة حسب الشقة</span>
            <h2 className="font-cairo font-bold text-[18px] text-[#181d17]">إدارة المحافظ العقارية الشاملة</h2>
          </div>
          <div className="flex items-end justify-between gap-4">
            <div className="bg-[#f6f8f3] rounded-[12px] px-[12px] py-[8px]">
              <p className="font-cairo text-[11px] text-[#75786f]">تسعيرة الوحدة الأساسية</p>
              <p className="font-cairo font-bold text-[16px] text-[#181d17]">99.00 ر.س / شهر</p>
            </div>
            <div className="text-start">
              <p className="font-cairo text-[12px] text-[#75786f]">إجمالي القيمة للدورة الحالية</p>
              <p className="font-cairo font-bold text-[40px] leading-[46px] text-[#181d17]">891.00 <span className="text-[16px]">ر.س / شهر</span></p>
              <p className="font-cairo text-[12px] text-[#75786f]">شامل 15% ضريبة القيمة المضافة لعدد 9 شقق</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
            <DateTile icon={<Calendar size={16} />} label="تاريخ بداية الفترة" value="1 نوفمبر 2026" />
            <DateTile icon={<RefreshCw size={16} />} label="التجديد القادم" value="30 نوفمبر 2026" />
          </div>
          <p className="bg-[#f6f8f3] rounded-[10px] px-[12px] py-[8px] font-cairo text-[12px] text-[#454840] inline-flex items-center justify-end gap-[6px]">
            <Info size={14} />
            متبقي 24 يوماً على موعد التجديد التالي عبر بطاقة مدى المسجلة.
          </p>
        </section>

        <section className="lg:col-span-5 bg-white rounded-[16px] p-[20px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px]">
          <h2 className="font-cairo font-bold text-[18px] text-[#181d17] text-start">رصيد الشقق</h2>
          <p className="font-cairo text-[12px] text-[#75786f]">مؤشر استهلاك السعة المحجوزة في محفظتك</p>
          <div className="grid grid-cols-3 gap-[8px]">
            <Mini label="المشتراة" value={purchased} hint="إجمالي السعة" />
            <Mini label="المستخدمة" value={used} hint="وحدات نشطة" />
            <Mini label="المتاحة" value={available} hint="جاهزة للربط" muted={available === 0} />
          </div>
          <div>
            <div className="flex justify-between font-cairo text-[12px] text-[#454840] mb-[6px]">
              <span>{percent}% من {purchased} شقق</span>
              <span>معدل الاستغلال الحالي</span>
            </div>
            <div className="h-[8px] rounded-full bg-[#e7efe2] overflow-hidden">
              <div className="h-full bg-[#34422a]" style={{ width: `${percent}%` }} />
            </div>
          </div>
          <p className="font-cairo text-[12px] text-[#454840] inline-flex items-center gap-[6px]">
            <Info size={14} />
            {full ? "تم استهلاك الرصيد بالكامل. أضف سعة جديدة لمتابعة الربط." : "تقدر تضيف 3 شقق إضافية ضمن رصيدك الحالي دون أي تكلفة إضافية لهذا الشهر."}
          </p>
          <Link href="/subscription/capacity" className="bg-[#f2e1c0] text-[#231a06] rounded-[12px] py-[12px] text-center font-cairo font-semibold text-[14px]">
            شراء سعة شقق جديدة
          </Link>
        </section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[16px]">
        <section className="lg:col-span-5 bg-white rounded-[16px] p-[20px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px]">
          <h2 className="font-cairo font-bold text-[16px] text-[#181d17]">توزيع الشقق على العقارات</h2>
          <p className="font-cairo text-[12px] text-[#75786f]">{used} مستخدمة / {available} شاغرة</p>
          {properties.map((property) => (
            <div key={property.name} className="bg-[#f6f8f3] rounded-[12px] p-[12px]">
              <div className="flex items-center justify-between">
                <span className="font-cairo font-bold text-[13px] text-[#34422a]">{property.count} شقق</span>
                <span className="font-cairo font-semibold text-[13px] text-[#181d17] inline-flex items-center gap-[6px]">
                  {property.name}
                  <Building2 size={14} />
                </span>
              </div>
              <div className="flex flex-wrap justify-end gap-[6px] mt-[8px]">
                {property.units.map((unit) => (
                  <span key={unit} className="bg-white rounded-full px-[8px] py-[2px] font-cairo text-[11px] text-[#454840]">جناح {unit}</span>
                ))}
              </div>
            </div>
          ))}
          <div className="bg-[#f8f1e3] rounded-[12px] p-[12px] flex items-center justify-between">
            <span className="font-cairo font-bold text-[18px] text-[#231a06]">{available} شقق</span>
            <span className="font-cairo text-[13px] text-[#695d43]">سعة شاغرة غير مخصصة · جاهزة للربط فور إدراج عقار جديد</span>
          </div>
          <Link href="/units" className="font-cairo font-semibold text-[13px] text-[#34422a] text-start">إدارة ربط الوحدات والعقارات ←</Link>
        </section>

        <section className="lg:col-span-7 bg-white rounded-[16px] p-[20px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px]">
          <div className="flex items-center justify-between">
            <span className="font-cairo text-[12px] text-[#75786f] inline-flex items-center gap-[4px]"><Info size={12} /> هيئة الزكاة ZATCA المرحلة 2</span>
            <h2 className="font-cairo font-bold text-[16px] text-[#181d17] inline-flex items-center gap-[6px]"><FileText size={16} /> تفاصيل الفوترة والمدفوعات</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
            <Bill label="قيمة الاشتراك الحالي" value="891.00 ر.س / شهر" hint="9 شقق × 99 ر.س (شامل الضريبة)" />
            <Bill label="دورة الفوترة والتجديد" value="شهرية (متجددة تلقائياً)" hint="تجدد في اليوم الأخير من كل شهر" />
            <Bill label="وسيلة الدفع المعتمدة" value="mada ···· 4847" hint="تنتهي في 09/2028 · بطاقة أساسية" />
            <Bill label="آخر دفعة ناجحة" value="891.00 ر.س (مخصّصة)" hint="TXN-2026-984128 | 1 نوفمبر 2026" />
          </div>
        </section>
      </div>

      <section className="bg-white rounded-[16px] overflow-hidden drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
        <h2 className="font-cairo font-bold text-[18px] text-[#181d17] px-[20px] pt-[16px]">سجل الاشتراكات والعمليات الأخيرة</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-start">
            <thead className="bg-[#f3f6ef] font-cairo text-[12px] text-[#454840]">
              <tr>
                {["التاريخ", "وصف العملية والبيان", "السعة المحجوزة", "المبلغ الإجمالي", "الحالة", "رقم المرجع الضريبي", "المستند"].map((head) => (
                  <th key={head} className="px-[12px] py-[10px] font-semibold">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody className="font-cairo text-[13px] text-[#181d17]">
              <tr className="border-t border-[#f1f5eb]">
                <td className="px-[12px] py-[14px]">1 نوفمبر 2026</td>
                <td className="px-[12px] py-[14px]">تجديد اشتراك شهري جديد<br /><span className="text-[#75786f] text-[12px]">تم التفعيل التلقائي للرصيد حتى 9 شقق</span></td>
                <td className="px-[12px] py-[14px]">9 شقق مفعّلة</td>
                <td className="px-[12px] py-[14px]">891.00 ر.س</td>
                <td className="px-[12px] py-[14px]"><Badge>ناجح ومسدد</Badge></td>
                <td className="px-[12px] py-[14px]">INV-2026-08124</td>
                <td className="px-[12px] py-[14px]"><span className="inline-flex items-center gap-[4px] bg-[#f1f5eb] rounded-full px-[8px] py-[4px]"><Download size={12} /> PDF فاتورة</span></td>
              </tr>
              <tr className="border-t border-[#f1f5eb]">
                <td className="px-[12px] py-[14px]">15 أكتوبر 2026</td>
                <td className="px-[12px] py-[14px]">انتهاء الفترة التجريبية وتوثيق الحساب<br /><span className="text-[#75786f] text-[12px]">ترقية المحفظة لاعتماد المالك والربط الرسمي</span></td>
                <td className="px-[12px] py-[14px]">فترة اختبار (3 شقق)</td>
                <td className="px-[12px] py-[14px]">مجاني (0.00 ر.س)</td>
                <td className="px-[12px] py-[14px]"><Badge>مكتمل</Badge></td>
                <td className="px-[12px] py-[14px]">TRIAL-ACT-992</td>
                <td className="px-[12px] py-[14px]"><span className="inline-flex items-center gap-[4px] bg-[#f1f5eb] rounded-full px-[8px] py-[4px]"><FileText size={12} /> عرض السند</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function DateTile({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="bg-[#f6f8f3] rounded-[12px] p-[12px] flex items-center justify-between">
      <span className="text-[#34422a]">{icon}</span>
      <div className="text-start">
        <p className="font-cairo text-[12px] text-[#75786f]">{label}</p>
        <p className="font-cairo font-bold text-[14px] text-[#181d17]">{value}</p>
      </div>
    </div>
  );
}

function Mini({ label, value, hint, muted }: { label: string; value: number; hint: string; muted?: boolean }) {
  return (
    <div className={`rounded-[12px] p-[10px] text-center ${muted ? "bg-[#f8f1e3]" : "bg-[#f6f8f3]"}`}>
      <p className="font-cairo text-[11px] text-[#75786f]">{label}</p>
      <p className="font-cairo font-bold text-[22px] text-[#181d17]">{value}</p>
      <p className="font-cairo text-[11px] text-[#454840]">{hint}</p>
    </div>
  );
}

function Bill({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="bg-[#f6f8f3] rounded-[12px] p-[12px] text-start">
      <p className="font-cairo text-[12px] text-[#75786f]">{label}</p>
      <p className="font-cairo font-bold text-[15px] text-[#181d17] mt-[4px]">{value}</p>
      <p className="font-cairo text-[11px] text-[#454840]">{hint}</p>
    </div>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return <span className="bg-[#e7f0df] text-[#34422a] rounded-full px-[8px] py-[3px] font-cairo text-[12px]">{children}</span>;
}
