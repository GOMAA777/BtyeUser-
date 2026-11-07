"use client";

import { useState } from "react";
import { showToast } from "@/lib/toast";
import { Card, Modal, SaveBar, SettingsHero, ToggleRow } from "./settings-ui";

const initial = {
  method: "booking" as "booking" | "static",
  auto: true,
  length: "6",
  manual: false,
  hide: true,
  link: true,
  audit: true,
  sync: true,
};

export function SettingsAccessView() {
  const [form, setForm] = useState(initial);
  const [pending, setPending] = useState<"booking" | "static" | null>(null);
  const [checked, setChecked] = useState(false);

  function choose(next: "booking" | "static") {
    if (next === form.method) return;
    if (next === "static") {
      setChecked(false);
      setPending("static");
      return;
    }
    setForm((current) => ({ ...current, method: next }));
  }

  return (
    <div className="flex flex-col gap-5 font-cairo">
      <SettingsHero
        title="إعدادات أكواد الدخول"
        subtitle="تهيئة إصدار أكواد الأقفال الذكية وتوقيت صلاحيتها وقواعد الخصوصية والمزامنة."
      />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_280px]">
        <div className="flex flex-col gap-4 xl:order-2">
          <Card title="مؤشرات الأقفال النشطة">
            <div className="grid grid-cols-2 gap-3 text-end">
              {[
                ["11,290", "قفل نشط"],
                ["2,484", "كود اليوم"],
                ["618", "تنتهي اليوم"],
                ["99.94%", "نجاح المزامنة"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[12px] bg-[#f1f5eb] p-3">
                  <p className="font-cairo text-[11px] text-[#454840]">{label}</p>
                  <p className="font-cairo text-[22px] font-bold text-[#181d17]">{value}</p>
                </div>
              ))}
            </div>
          </Card>
          <div className="rounded-[16px] bg-[#34422a] p-5 text-end text-white">
            <h2 className="font-cairo text-[18px] font-bold leading-[28px]">حوكمة السجلات والامتثال WORM</h2>
            <p className="mt-1 font-cairo text-[11px] text-[#bcccac]">متوافق مع ضوابط الأمن السيبراني</p>
            <p className="mt-3 font-cairo text-[13px] leading-[20px] text-[#d8e8c7]">
              لا يتم تخزين الأكواد الصريحة نهائياً في قواعد البيانات، بل تحفظ بصيغ مشفرة خوارزمياً بمفاتيح غير مكررة.
            </p>
            <p className="mt-2 font-cairo text-[13px] leading-[20px] text-[#d8e8c7]">
              تشفير شامل End-to-End من خوادم السحاب حتى الشريحة المدمجة بالقفل الذكي مع سجل تدقيق غير قابل للتعديل.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 xl:order-1">
          <Card title="نوع الكود الافتراضي">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <button
                type="button"
                onClick={() => choose("booking")}
                className={`rounded-[12px] p-4 text-end ${form.method === "booking" ? "bg-[rgba(216,232,203,0.45)] ring-1 ring-[#34422a]" : "bg-[#f1f5eb]"}`}
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#d8e8cb] px-2 py-0.5 font-cairo text-[11px] font-semibold text-[#3d4b36]">
                    موصى به للأمان
                  </span>
                  <span className="font-cairo text-[14px] font-bold text-[#181d17]">كود لكل حجز</span>
                </div>
                <p className="mt-2 font-cairo text-[13px] leading-[21px] text-[#454840]">
                  يتم إنشاء كود دخول فريد ومؤقت مخصص لكل حجز جديد تلقائياً، وتنتهي صلاحيته تلقائياً بانتهاء الحجز لضمان عزل النزلاء.
                </p>
              </button>
              <button
                type="button"
                onClick={() => choose("static")}
                className={`rounded-[12px] p-4 text-end ${form.method === "static" ? "bg-[rgba(216,232,203,0.45)] ring-1 ring-[#34422a]" : "bg-[#f1f5eb]"}`}
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#dfe4db] px-2 py-0.5 font-cairo text-[11px] font-medium text-[#454840]">
                    عقود طويلة الأمد
                  </span>
                  <span className="font-cairo text-[14px] font-bold text-[#181d17]">كود ثابت للوحدة</span>
                </div>
                <p className="mt-2 font-cairo text-[13px] leading-[21px] text-[#454840]">
                  كود رئيسي ثابت للوحدة يُستخدم في حالات التأجير السنوي أو الصيانة والتشغيل المستمر مع إمكانية التدوير اليدوي المجدول.
                </p>
                <p className="mt-2 font-cairo text-[11px] text-[#75786f]">يتطلب تدوير ربع سنوي</p>
              </button>
            </div>
          </Card>

          <Card title="قواعد إنشاء وتوليد الكود">
            <div className="flex flex-col gap-3">
              <ToggleRow
                title="إنشاء كود الدخول تلقائيًا عند تأكيد الحجز"
                description="توليد كود دخول فوري ومشفّر لحظة تأكيد الحجز وإرساله مباشرة إلى القفل الذكي للوحدة."
                on={form.auto}
                onChange={(v) => setForm((c) => ({ ...c, auto: v }))}
              />
              <div>
                <p className="mb-2 text-end font-cairo text-[14px] font-bold text-[#181d17]">طول كود الدخول</p>
                <div className="grid grid-cols-3 gap-2">
                  {["4", "6", "8"].map((length) => (
                    <button
                      key={length}
                      type="button"
                      onClick={() => setForm((c) => ({ ...c, length }))}
                      className={`h-[44px] rounded-[12px] font-cairo text-[14px] font-bold ${
                        form.length === length ? "bg-[#34422a] text-white" : "bg-[#f1f5eb] text-[#34422a]"
                      }`}
                    >
                      {length} خانات
                    </button>
                  ))}
                </div>
              </div>
              <ToggleRow
                title="السماح بتكرار الأرقام أو المتتاليات البسيطة"
                on={form.manual}
                onChange={(v) => setForm((c) => ({ ...c, manual: v }))}
              />
              <p className="text-end font-cairo text-[13px] tracking-[0.2em] text-[#34422a]" dir="ltr">
                5 • 8 • 3 • 9 • 2 • 1
              </p>
            </div>
          </Card>

          <Card title="صلاحية وتوقيت الكود">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="rounded-[12px] bg-[#f7faf4] p-4 text-end">
                <p className="font-cairo text-[14px] font-bold text-[#181d17]">قبل موعد الدخول</p>
                <p className="font-cairo text-[13px] text-[#454840]">30 دقيقة قبل موعد تسجيل الدخول</p>
              </div>
              <div className="rounded-[12px] bg-[#f7faf4] p-4 text-end">
                <p className="font-cairo text-[14px] font-bold text-[#181d17]">بعد موعد المغادرة</p>
                <p className="font-cairo text-[13px] text-[#454840]">30 دقيقة بعد موعد المغادرة</p>
              </div>
            </div>
          </Card>

          <Card title="الأمان وحماية الخصوصية">
            <div className="flex flex-col gap-3">
              <ToggleRow title="إخفاء كود الدخول داخل الإشعارات" description="يظهر الرمز مقنّعاً ****" on={form.hide} onChange={(v) => setForm((c) => ({ ...c, hide: v }))} />
              <ToggleRow title="رابط لمرة واحدة قبل كشف الكود" on={form.link} onChange={(v) => setForm((c) => ({ ...c, link: v }))} />
              <ToggleRow title="تسجيل كافة عمليات استعراض كود الدخول" on={form.audit} onChange={(v) => setForm((c) => ({ ...c, audit: v }))} />
            </div>
          </Card>

          <Card title="المزامنة والتحديث اللحظي">
            <ToggleRow
              title="مزامنة أكواد الدخول تلقائياً بعد إرسال الحجز"
              description="إعادة المحاولة خلال 12 ساعة"
              on={form.sync}
              onChange={(v) => setForm((c) => ({ ...c, sync: v }))}
            />
            <button
              type="button"
              onClick={() => showToast.success("بدأت المزامنة اليدوية")}
              className="mt-3 h-[40px] rounded-[12px] bg-[#eef2ea] px-4 font-cairo text-[13px] font-semibold text-[#34422a]"
            >
              مزامنة يدوية
            </button>
          </Card>
        </div>
      </div>

      <SaveBar onSave={() => showToast.success("تم حفظ إعدادات أكواد الدخول")} onCancel={() => setForm(initial)} />

      {pending ? (
        <Modal title="تغيير طريقة أكواد الدخول" onClose={() => setPending(null)}>
          <div className="flex flex-col gap-4 text-end">
            <p className="font-cairo text-[14px] leading-[22px] text-[#454840]">
              الطريقة الحالية <b>كود لكل حجز</b> ستصبح <b>كود ثابت للوحدة</b>. الحجوزات النشطة لا تتأثر. يشمل 11,290 وحدة و1,482 عقار.
            </p>
            <label className="flex items-center justify-end gap-2 font-cairo text-[13px] text-[#181d17]">
              أؤكد تغيير البروتوكول على الوحدات الجديدة
              <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} className="size-4 accent-[#34422a]" />
            </label>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                disabled={!checked}
                onClick={() => {
                  setForm((current) => ({ ...current, method: "static" }));
                  setPending(null);
                  showToast.success("تم تطبيق بروتوكول الأكواد");
                }}
                className="h-[42px] rounded-[12px] bg-[#34422a] px-4 font-cairo text-[14px] font-bold text-white disabled:cursor-not-allowed disabled:bg-[#e5eae0] disabled:text-[#75786f]"
              >
                تأكيد التغيير وتطبيق البروتوكول
              </button>
              <button type="button" onClick={() => setPending(null)} className="h-[42px] rounded-[12px] bg-[#eef2ea] px-4 font-cairo text-[14px] font-semibold text-[#34422a]">
                إلغاء
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
