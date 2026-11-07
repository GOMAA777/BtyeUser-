"use client";

import { useState } from "react";
import { showToast } from "@/lib/toast";
import { Card, Field, Modal, SaveBar, SettingsHero, ToggleRow, fieldClass } from "./settings-ui";

const initial = {
  propertyState: "active",
  buildingType: "عمارة سكنية",
  nationalAddress: true,
  unitState: "متاحة للحجز",
  pricing: "nightly",
  maxGuests: "4",
  minNights: "ساعتان",
  autoStatus: true,
  audit: false,
  ota: true,
  regulatory: true,
  ownersAdd: true,
  supervisor: true,
  ownersUnits: true,
  trialDays: "14",
};

export function SettingsPlatformView() {
  const [form, setForm] = useState(initial);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  function set<K extends keyof typeof initial>(key: K, value: (typeof initial)[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function requestOwnerChange(next: boolean) {
    if (form.ownersAdd && !next) {
      setChecked(false);
      setConfirmOpen(true);
      return;
    }
    set("ownersAdd", next);
  }

  return (
    <div className="flex flex-col gap-5 font-cairo">
      <SettingsHero
        title="إعدادات المنصة"
        subtitle="الحالة الافتراضية للعقارات، قواعد التسعير، وصلاحيات حسابات الملاك."
      />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <Card title="الحالة الافتراضية للعقار">
          <div className="grid grid-cols-3 gap-2">
            {[
              ["active", "نشط"],
              ["draft", "مسودة"],
              ["review", "تحت المراجعة"],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => set("propertyState", value)}
                className={`h-[44px] rounded-[12px] font-cairo text-[13px] font-bold ${
                  form.propertyState === value ? "bg-[#34422a] text-white" : "bg-[#f1f5eb] text-[#34422a]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="mt-4">
            <Field label="نوع المبنى">
              <select className={fieldClass} value={form.buildingType} onChange={(e) => set("buildingType", e.target.value)}>
                <option>عمارة سكنية</option>
                <option>برج</option>
                <option>فيلا</option>
              </select>
            </Field>
          </div>
          <div className="mt-4">
            <ToggleRow
              title="التحقق الإلزامي من العنوان الوطني السعودي"
              on={form.nationalAddress}
              onChange={(next) => set("nationalAddress", next)}
            />
          </div>
        </Card>

        <Card title="التسعير والوحدة">
          <div className="grid grid-cols-1 gap-3">
            <Field label="العملة">
              <input className={fieldClass} value="ريال سعودي" readOnly />
            </Field>
            <Field label="حالة الوحدة الافتراضية">
              <input className={fieldClass} value={form.unitState} onChange={(e) => set("unitState", e.target.value)} />
            </Field>
            <div className="grid grid-cols-3 gap-2">
              {[
                ["nightly", "لكل ليلة (يومي)"],
                ["monthly", "شهري"],
                ["yearly", "سنوي"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => set("pricing", value)}
                  className={`h-[44px] rounded-[12px] px-2 font-cairo text-[12px] font-bold ${
                    form.pricing === value ? "bg-[#34422a] text-white" : "bg-[#f1f5eb] text-[#34422a]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="الحد الأقصى للضيوف">
                <input className={fieldClass} value={form.maxGuests} onChange={(e) => set("maxGuests", e.target.value)} />
              </Field>
              <Field label="أقل مدة حجز">
                <input className={fieldClass} value={form.minNights} onChange={(e) => set("minNights", e.target.value)} />
              </Field>
            </div>
          </div>
        </Card>

        <Card title="القواعد المركزية">
          <div className="flex flex-col gap-3">
            <ToggleRow title="تحديث حالة الوحدة تلقائياً" on={form.autoStatus} onChange={(v) => set("autoStatus", v)} />
            <ToggleRow title="سجل التدقيق" badge="إلزامي" on={form.audit} onChange={(v) => set("audit", v)} />
            <ToggleRow title="مزامنة القنوات الخارجية" description="كل 120 ثانية" on={form.ota} onChange={(v) => set("ota", v)} />
            <ToggleRow title="الإشعارات التنظيمية" on={form.regulatory} onChange={(v) => set("regulatory", v)} />
          </div>
        </Card>

        <Card title="حسابات الملاك">
          <div className="flex flex-col gap-3">
            <ToggleRow
              title="السماح لأصحاب العقارات بإضافة عقارات"
              on={form.ownersAdd}
              onChange={requestOwnerChange}
            />
            <ToggleRow title="اعتماد المشرف قبل النشر" on={form.supervisor} onChange={(v) => set("supervisor", v)} />
            <ToggleRow title="السماح للملاك بإضافة وحدات" on={form.ownersUnits} onChange={(v) => set("ownersUnits", v)} />
            <Field label="مدة التجربة المجانية (يوم)">
              <input className={fieldClass} value={form.trialDays} onChange={(e) => set("trialDays", e.target.value)} />
            </Field>
            <p className="text-end font-cairo text-[12px] text-[#75786f]">نطاق التجربة: من 5 إلى 5 عقارات</p>
          </div>
        </Card>
      </div>

      <SaveBar onSave={() => showToast.success("تم حفظ إعدادات المنصة")} onCancel={() => setForm(initial)} />

      {confirmOpen ? (
        <Modal title="تأكيد تغيير إعداد المنصة" onClose={() => setConfirmOpen(false)}>
          <div className="flex flex-col gap-4 text-end">
            <p className="font-cairo text-[14px] leading-[22px] text-[#454840]">
              السماح لأصحاب العقارات بإضافة عقارات سينتقل من <b>مفعّل</b> إلى <b>غير مفعّل</b>. يؤثر على 1,482 مالك.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-[12px] bg-[#f1f5eb] p-3">
                <p className="font-cairo text-[12px] text-[#75786f]">بعد التغيير</p>
                <p className="font-cairo text-[16px] font-bold text-[#181d17]">غير مفعّل</p>
              </div>
              <div className="rounded-[12px] bg-[#f7faf4] p-3">
                <p className="font-cairo text-[12px] text-[#75786f]">الحالي</p>
                <p className="font-cairo text-[16px] font-bold text-[#181d17]">مفعّل</p>
              </div>
            </div>
            <label className="flex items-center justify-end gap-2 font-cairo text-[13px] text-[#181d17]">
              أؤكد أنني راجعت أثر التغيير على حسابات الملاك
              <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} className="size-4 accent-[#34422a]" />
            </label>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                disabled={!checked}
                onClick={() => {
                  set("ownersAdd", false);
                  setConfirmOpen(false);
                  showToast.success("تم تطبيق تغيير إعداد المنصة");
                }}
                className="h-[42px] rounded-[12px] bg-[#34422a] px-4 font-cairo text-[14px] font-bold text-white disabled:bg-[#ba1a1a]/30 disabled:text-[#93000a]"
              >
                تأكيد التغيير
              </button>
              <button
                type="button"
                onClick={() => setConfirmOpen(false)}
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
