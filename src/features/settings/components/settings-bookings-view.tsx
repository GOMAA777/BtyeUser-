"use client";

import { useState } from "react";
import { showToast } from "@/lib/toast";
import { Card, Field, Modal, SaveBar, SettingsHero, ToggleRow, fieldClass } from "./settings-ui";

const initial = {
  checkIn: "15:00",
  checkOut: "12:00",
  sameDay: true,
  minNights: "1",
  maxNights: "30",
  booking: true,
  airbnb: true,
  direct: true,
  other: false,
  keepCancelled: true,
  autoCancel: false,
  preventOverbook: true,
  autoStatus: true,
  autoClean: true,
  editBooking: true,
  changeDates: true,
  extendStay: true,
  requireAvailability: true,
};

export function SettingsBookingsView() {
  const [form, setForm] = useState(initial);
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  function set<K extends keyof typeof initial>(key: K, value: (typeof initial)[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  return (
    <div className="flex flex-col gap-5 font-cairo">
      <SettingsHero
        title="إعدادات الحجوزات"
        subtitle="نوافذ الوصول والمغادرة، مصادر الحجز، وسياسات الإلغاء وصلاحيات المالك."
      />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <Card title="قواعد التاريخ">
          <div className="grid grid-cols-2 gap-3">
            <Field label="وقت تسجيل الوصول">
              <input className={fieldClass} value={form.checkIn} onChange={(e) => set("checkIn", e.target.value)} />
            </Field>
            <Field label="وقت المغادرة">
              <input className={fieldClass} value={form.checkOut} onChange={(e) => set("checkOut", e.target.value)} />
            </Field>
            <Field label="أقل عدد ليالٍ">
              <input className={fieldClass} value={form.minNights} onChange={(e) => set("minNights", e.target.value)} />
            </Field>
            <Field label="أقصى عدد ليالٍ">
              <input className={fieldClass} value={form.maxNights} onChange={(e) => set("maxNights", e.target.value)} />
            </Field>
          </div>
          <p className="mt-2 text-end font-cairo text-[12px] text-[#75786f]">الوصول 03:00–15:00 • المغادرة 12:00–12:00</p>
          <div className="mt-3">
            <ToggleRow title="السماح بالحجز في نفس اليوم" on={form.sameDay} onChange={(v) => set("sameDay", v)} />
          </div>
        </Card>

        <Card title="مصادر الحجز">
          <div className="flex flex-col gap-3">
            <ToggleRow title="Booking.com" on={form.booking} onChange={(v) => set("booking", v)} />
            <ToggleRow title="Airbnb" on={form.airbnb} onChange={(v) => set("airbnb", v)} />
            <ToggleRow title="المحرك المباشر" on={form.direct} onChange={(v) => set("direct", v)} />
            <ToggleRow title="مصادر أخرى" on={form.other} onChange={(v) => set("other", v)} />
          </div>
        </Card>

        <Card title="الإلغاء والمخزون">
          <div className="flex flex-col gap-3">
            <ToggleRow title="الاحتفاظ بسجلات الحجوزات الملغاة" description="لمدة 5 سنوات" on={form.keepCancelled} onChange={(v) => set("keepCancelled", v)} />
            <ToggleRow title="إلغاء الحجوزات غير المدفوعة تلقائياً" on={form.autoCancel} onChange={(v) => set("autoCancel", v)} />
            <ToggleRow title="منع الحجز الزائد" on={form.preventOverbook} onChange={(v) => set("preventOverbook", v)} />
            <ToggleRow title="تحديث حالة الوحدة تلقائياً" on={form.autoStatus} onChange={(v) => set("autoStatus", v)} />
            <ToggleRow title="إنشاء مهمة تنظيف تلقائياً" on={form.autoClean} onChange={(v) => set("autoClean", v)} />
          </div>
        </Card>

        <Card title="صلاحيات المالك">
          <div className="flex flex-col gap-3">
            <ToggleRow title="تعديل بيانات الحجز" on={form.editBooking} onChange={(v) => set("editBooking", v)} />
            <ToggleRow title="تغيير التواريخ" description="حتى 24 ساعة قبل الوصول" on={form.changeDates} onChange={(v) => set("changeDates", v)} />
            <ToggleRow title="تمديد الإقامة" on={form.extendStay} onChange={(v) => set("extendStay", v)} />
            <ToggleRow title="اشتراط التوافر قبل التأكيد" on={form.requireAvailability} onChange={(v) => set("requireAvailability", v)} />
          </div>
        </Card>
      </div>

      <SaveBar
        onCancel={() => setForm(initial)}
        onSave={() => {
          setChecked(false);
          setOpen(true);
        }}
      />

      {open ? (
        <Modal title="تأكيد تحديث قواعد الحجوزات" onClose={() => setOpen(false)}>
          <div className="flex flex-col gap-4 text-end">
            <p className="font-cairo text-[13px] leading-[20px] text-[#454840]">
              يسري التحديث على الحجوزات الجديدة فقط عبر المحرك المباشر وBooking.com وAirbnb.
            </p>
            <div className="flex flex-col gap-2">
              {[
                ["أقصى عدد الليالي", "30", "60"],
                ["إغلاق الحجز في نفس اليوم", "23:59", "18:00"],
                ["فحص التوافر", "120 ثانية", "60 ثانية"],
              ].map(([label, from, to]) => (
                <div key={label} className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-[12px] bg-[#f7faf4] p-3">
                  <p className="font-cairo text-[14px] font-bold text-[#34422a]">{to}</p>
                  <span className="font-cairo text-[12px] text-[#75786f]">←</span>
                  <div>
                    <p className="font-cairo text-[12px] text-[#75786f]">{label}</p>
                    <p className="font-cairo text-[14px] font-bold text-[#181d17]">{from}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-cairo text-[13px] text-[#454840]">الأثر: 1,482 مالك • 11,290 وحدة • تطبيق فوري.</p>
            <label className="flex items-center justify-end gap-2 font-cairo text-[13px] text-[#181d17]">
              أؤكد تحديث قواعد الحجوزات على الحجوزات الجديدة
              <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} className="size-4 accent-[#34422a]" />
            </label>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                disabled={!checked}
                onClick={() => {
                  setOpen(false);
                  showToast.success("تم تحديث قواعد الحجوزات");
                }}
                className="h-[42px] rounded-[12px] bg-[#34422a] px-4 font-cairo text-[14px] font-bold text-white disabled:cursor-not-allowed disabled:bg-[#e5eae0] disabled:text-[#75786f]"
              >
                تأكيد تحديث القواعد
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="h-[42px] rounded-[12px] bg-[#eef2ea] px-4 font-cairo text-[14px] font-semibold text-[#34422a]"
              >
                إلغاء التغييرات
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
