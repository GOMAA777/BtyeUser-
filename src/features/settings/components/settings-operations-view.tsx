"use client";

import { useState } from "react";
import { showToast } from "@/lib/toast";
import { Card, Field, SaveBar, SettingsHero, ToggleRow, fieldClass } from "./settings-ui";

const initial = {
  autoClean: true,
  assignee: "يحتاج تنظيف",
  confirmClean: true,
  lockUntilClean: true,
  confirmMaint: true,
  autoCleanAfterMaint: true,
  buffer: "3 ساعات (موصى به)",
};

const states = [
  { code: "S1", title: "متاحة", body: "عند خلو الوحدة وانتهاء التنظيف، جاهزة لاستقبال الحجوزات.", tag: "زمن المغادرة" },
  { code: "S2", title: "مشغولة", body: "تنشط تلقائياً عند تسجيل وصول الضيف أو حلول وقت الحجز المؤكد.", tag: "قفل الحجوزات" },
  { code: "S3", title: "التنظيف", body: "تنشط آلياً فور تسجيل المغادرة أو عقب اكتمال بلاغ صيانة معتمد.", tag: "مهمة ميدانية" },
  { code: "S4", title: "الصيانة", body: "تنشط فور رفع بلاغ صيانة حرج يحظر التوافر ويعلق الحجوزات.", tag: "حظر تقويمي" },
];

export function SettingsOperationsView() {
  const [form, setForm] = useState(initial);

  function set<K extends keyof typeof initial>(key: K, value: (typeof initial)[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  return (
    <div className="flex flex-col gap-5 font-cairo">
      <SettingsHero
        title="إعدادات التشغيل"
        subtitle="تهيئة محرك التدفقات التشغيلية المؤتمتة بين الحجوزات، التنظيف، بلاغات الصيانة، وتوافر الوحدات السكنية عبر المنصة."
      />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_280px]">
        <Card title="مؤشرات التشغيل اللحظية" className="xl:order-2">
          <p className="text-end font-cairo text-[28px] font-bold text-[#181d17]">11,290</p>
          <p className="mb-3 text-end font-cairo text-[12px] text-[#75786f]">وحدة</p>
          <div className="mb-4 flex h-[10px] overflow-hidden rounded-full">
            <span className="w-[14%] bg-[#e99a38]" />
            <span className="w-[16%] bg-[#c5c8bd]" />
            <span className="flex-1 bg-[#34422a]" />
          </div>
          <ul className="flex flex-col gap-2 text-end font-cairo text-[13px] text-[#454840]">
            <li>مشغولة 7,877</li>
            <li>متاحة 1,760</li>
            <li>صيانة 1,533</li>
            <li>متوسط الدورة 42 دقيقة</li>
          </ul>
          <div className="mt-4">
            <Field label="هامش التجهيز">
              <select className={fieldClass} value={form.buffer} onChange={(e) => set("buffer", e.target.value)}>
                <option>3 ساعات (موصى به)</option>
                <option>ساعتان</option>
                <option>4 ساعات</option>
              </select>
            </Field>
          </div>
        </Card>

        <div className="flex flex-col gap-4 xl:order-1">
          <Card title="أتمتة دورة التنظيف">
            <div className="flex flex-col gap-3">
              <ToggleRow
                title="إنشاء مهمة تنظيف تلقائيًا بعد المغادرة"
                description="جدولة إسناد مهمة التنظيف وإشعار مشرف الضيافة فور تسجيل مغادرة النزيل أو انتهاء موعد الحجز المعتمد (12:00 م)."
                on={form.autoClean}
                onChange={(v) => set("autoClean", v)}
              />
              <Field label="آلية تعيين مهام التنظيف الافتراضية">
                <select className={fieldClass} value={form.assignee} onChange={(e) => set("assignee", e.target.value)}>
                  <option>يحتاج تنظيف</option>
                  <option>تعيين تلقائي لمشرف الموقع</option>
                </select>
              </Field>
              <ToggleRow
                title="اشتراط تأكيد اكتمال التنظيف"
                description="إلزام المشرف الميداني باعتماد قائمة الفحص والتحقق الرقمية وإرفاق الصور التوثيقية قبل اعتماد جهوزية الغرفة."
                on={form.confirmClean}
                onChange={(v) => set("confirmClean", v)}
              />
              <ToggleRow
                title="قفل جهوزية الوحدة لحين اكتمال التنظيف"
                description="تمنع المنصة تحويل الوحدة إلى «متاحة» على Booking / Airbnb / المحرك المباشر حتى إغلاق مهمة التنظيف."
                on={form.lockUntilClean}
                onChange={(v) => set("lockUntilClean", v)}
              />
            </div>
          </Card>

          <Card title="حوكمة الصيانة والأعطال">
            <div className="flex flex-col gap-3">
              <ToggleRow
                title="اشتراط تأكيد اكتمال الصيانة الميدانية"
                description="اعتماد مهندس التشغيل لتقرير الإصلاح وقطع الغيار قبل إغلاق البلاغ."
                on={form.confirmMaint}
                onChange={(v) => set("confirmMaint", v)}
              />
              <div className="rounded-[12px] bg-[#f2e1c0] p-4 text-end">
                <p className="font-cairo text-[13px] font-bold text-[#231a06]">مسار النظافة الإلزامي بعد أعمال الصيانة</p>
                <p className="mt-1 font-cairo text-[12px] leading-[18px] text-[#695d43]">
                  لا تعود الوحدة متاحة مباشرة بعد الصيانة بل تخضع لدورة تعقيم وتجهيز إجبارية.
                </p>
                <span className="mt-2 inline-flex rounded-full bg-white px-2 py-0.5 font-cairo text-[11px] font-semibold text-[#695d43]">
                  قاعدة مفعلة إلزامياً
                </span>
              </div>
              <ToggleRow
                title="إنشاء مهمة تنظيف وتجهيز تلقائيًا فور إغلاق بلاغ الصيانة"
                description="نقل حالة الوحدة من «تحت الصيانة» إلى «تحت التنظيف»."
                on={form.autoCleanAfterMaint}
                onChange={(v) => set("autoCleanAfterMaint", v)}
              />
            </div>
          </Card>
        </div>
      </div>

      <Card title="دورة حالات الوحدة السكنية">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
          {states.map((state) => (
            <div key={state.code} className="rounded-[12px] bg-[#f7faf4] p-4 text-end">
              <p className="font-cairo text-[12px] text-[#75786f]">{state.code}</p>
              <p className="font-cairo text-[16px] font-bold text-[#181d17]">{state.title}</p>
              <p className="mt-1 font-cairo text-[12px] leading-[18px] text-[#454840]">{state.body}</p>
              <span className="mt-2 inline-flex rounded-full bg-[#d8e8c7] px-2 py-0.5 font-cairo text-[11px] font-semibold text-[#34422a]">
                {state.tag}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-end font-cairo text-[12px] leading-[18px] text-[#454840]">
          تمنع المنصة تعارض التوافر اليومي المباشر عبر قفل الوحدة أثناء التنظيف أو الصيانة حتى اكتمال الاعتماد.
        </p>
      </Card>

      <SaveBar onSave={() => showToast.success("تم حفظ إعدادات التشغيل")} onCancel={() => setForm(initial)} />
    </div>
  );
}
