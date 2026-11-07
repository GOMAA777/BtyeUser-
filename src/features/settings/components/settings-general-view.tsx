"use client";

import { useState } from "react";
import { ImagePlus, Upload } from "lucide-react";
import { showToast } from "@/lib/toast";
import { Card, Field, Modal, SaveBar, SettingsHero, fieldClass } from "./settings-ui";

const initial = {
  name: "أبراج",
  site: "https://abraj-sa.com",
  description: "المنصة المؤسسية لإدارة وتشغيل الأصول العقارية",
  email: "contact@abraj-sa.com",
  phone: "+966 11 400 8899",
  support: "support@abraj-sa.com",
  whatsapp: "+966 50 123 4567",
  help: "https://help.abraj-sa.com",
  active: true,
  maintenanceTitle: "أعمال صيانة دورية مجدولة",
  maintenanceBody:
    "نعمل على تحسين المنصة. الخدمة متوقفة مؤقتاً من 10:00 حتى 18:00 يوم 5 أكتوبر 2026.",
  securityAlert: true,
};

export function SettingsGeneralView() {
  const [form, setForm] = useState(initial);
  const [logoOpen, setLogoOpen] = useState(false);
  const [logoName, setLogoName] = useState("abraj-brand-identity-2026.svg");

  function set<K extends keyof typeof initial>(key: K, value: (typeof initial)[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  return (
    <div className="flex flex-col gap-5 font-cairo">
      <SettingsHero
        title="الإعدادات العامة"
        subtitle="هوية المنصة، بيانات التواصل، وحالة التشغيل الظاهرة للزوار والملاك."
      />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-4">
          <Card title="بيانات المنصة">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="اسم المنصة">
                <input className={fieldClass} value={form.name} onChange={(e) => set("name", e.target.value)} />
              </Field>
              <Field label="الموقع الرسمي">
                <input className={fieldClass} value={form.site} onChange={(e) => set("site", e.target.value)} dir="ltr" />
              </Field>
              <div className="md:col-span-2">
                <Field label="وصف المنصة">
                  <textarea
                    className={`${fieldClass} h-[88px] py-3`}
                    value={form.description}
                    onChange={(e) => set("description", e.target.value)}
                  />
                </Field>
              </div>
              <Field label="البريد الرسمي">
                <input className={fieldClass} value={form.email} onChange={(e) => set("email", e.target.value)} dir="ltr" />
              </Field>
              <Field label="هاتف المنصة">
                <input className={fieldClass} value={form.phone} onChange={(e) => set("phone", e.target.value)} dir="ltr" />
              </Field>
            </div>
          </Card>

          <Card title="هوية المنصة">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setLogoOpen(true)}
                  className="inline-flex h-[40px] items-center gap-2 rounded-[12px] bg-[#34422a] px-4 font-cairo text-[13px] font-bold text-white"
                >
                  <Upload size={14} />
                  رفع شعار جديد
                </button>
                <button
                  type="button"
                  onClick={() => setLogoOpen(true)}
                  className="inline-flex h-[40px] items-center gap-2 rounded-[12px] bg-[#eef2ea] px-4 font-cairo text-[13px] font-semibold text-[#34422a]"
                >
                  <ImagePlus size={14} />
                  رفع أيقونة جديدة
                </button>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-end">
                  <p className="font-cairo text-[14px] font-bold text-[#181d17]">شعار أبراج</p>
                  <p className="font-cairo text-[12px] text-[#75786f]">SVG 512×512 • {logoName}</p>
                </div>
                <div className="flex size-[64px] items-center justify-center rounded-[16px] bg-[#34422a] font-cairo text-[18px] font-bold text-[#d8e8c7]">
                  أبراج
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex flex-col gap-4">
          <Card title="بيانات الدعم">
            <div className="flex flex-col gap-4">
              <Field label="بريد الدعم">
                <input className={fieldClass} value={form.support} onChange={(e) => set("support", e.target.value)} dir="ltr" />
              </Field>
              <Field label="واتساب الدعم">
                <div className="relative">
                  <input className={fieldClass} value={form.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} dir="ltr" />
                  <span className="absolute start-3 top-1/2 -translate-y-1/2 rounded-full bg-[#d8e8c7] px-2 py-0.5 font-cairo text-[11px] font-semibold text-[#34422a]">
                    موثّق
                  </span>
                </div>
              </Field>
              <Field label="مركز المساعدة">
                <input className={fieldClass} value={form.help} onChange={(e) => set("help", e.target.value)} dir="ltr" />
              </Field>
            </div>
          </Card>

          <Card title="حالة المنصة">
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => set("active", true)}
                className={`rounded-[12px] border p-3 text-end ${form.active ? "border-[#34422a] bg-[#f1f5eb]" : "border-[#e5eae0] bg-white"}`}
              >
                <p className="font-cairo text-[14px] font-bold text-[#181d17]">نشطة</p>
                <p className="font-cairo text-[12px] text-[#454840]">تشغيلي</p>
              </button>
              <button
                type="button"
                onClick={() => set("active", false)}
                className={`rounded-[12px] border p-3 text-end ${!form.active ? "border-[#34422a] bg-[#f1f5eb]" : "border-[#e5eae0] bg-white"}`}
              >
                <p className="font-cairo text-[14px] font-bold text-[#181d17]">وضع الصيانة</p>
                <p className="font-cairo text-[12px] text-[#454840]">رسالة للزوار</p>
              </button>
            </div>
          </Card>

          <Card title="إعدادات رسالة الصيانة">
            <div className="flex flex-col gap-3">
              <Field label="عنوان الرسالة">
                <input
                  className={fieldClass}
                  value={form.maintenanceTitle}
                  onChange={(e) => set("maintenanceTitle", e.target.value)}
                />
              </Field>
              <Field label="نص الرسالة">
                <textarea
                  className={`${fieldClass} h-[96px] py-3`}
                  value={form.maintenanceBody}
                  onChange={(e) => set("maintenanceBody", e.target.value)}
                />
              </Field>
              <label className="flex items-center justify-end gap-2 font-cairo text-[13px] text-[#181d17]">
                تنبيه أمني
                <input
                  type="checkbox"
                  checked={form.securityAlert}
                  onChange={(e) => set("securityAlert", e.target.checked)}
                  className="size-4 accent-[#34422a]"
                />
              </label>
            </div>
          </Card>
        </div>
      </div>

      <SaveBar
        onSave={() => showToast.success("تم حفظ الإعدادات العامة")}
        onCancel={() => setForm(initial)}
      />

      {logoOpen ? (
        <Modal title="تحديث شعار المنصة" onClose={() => setLogoOpen(false)}>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between rounded-[12px] bg-[#f1f5eb] p-4">
              <p className="font-cairo text-[12px] text-[#454840]">512×512 • 1:1</p>
              <div className="flex size-[72px] items-center justify-center rounded-[16px] bg-[#34422a] font-cairo text-[16px] font-bold text-[#d8e8c7]">
                أبراج
              </div>
            </div>
            <label className="flex cursor-pointer flex-col items-center gap-2 rounded-[12px] border border-dashed border-[#c5c8bd] bg-[#f7faf4] px-4 py-8 text-center">
              <Upload className="text-[#34422a]" size={20} />
              <span className="font-cairo text-[14px] font-semibold text-[#181d17]">اسحب الملف أو اختر SVG / PNG / JPG</span>
              <span className="font-cairo text-[12px] text-[#75786f]">الحد الأقصى 5MB • خلفية شفافة • 512×512</span>
              <input
                type="file"
                accept=".svg,.png,.jpg,.jpeg"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) setLogoName(file.name);
                }}
              />
            </label>
            <div className="rounded-[12px] bg-[#f7faf4] p-3 text-end">
              <p className="font-cairo text-[13px] font-bold text-[#181d17]">{logoName}</p>
              <p className="font-cairo text-[12px] text-[#75786f]">184KB • معاينة فاتحة وداكنة</p>
            </div>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setLogoOpen(false);
                  showToast.success("تم اعتماد الشعار");
                }}
                className="h-[42px] rounded-[12px] bg-[#34422a] px-4 font-cairo text-[14px] font-bold text-white"
              >
                حفظ واعتماد الشعار
              </button>
              <button
                type="button"
                onClick={() => setLogoOpen(false)}
                className="h-[42px] rounded-[12px] bg-[#eef2ea] px-4 font-cairo text-[14px] font-semibold text-[#34422a]"
              >
                إلغاء
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
