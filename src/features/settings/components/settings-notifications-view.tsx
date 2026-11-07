"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { showToast } from "@/lib/toast";
import { Card, SaveBar, SettingsHero, ToggleRow } from "./settings-ui";

type Channels = { inside: boolean; email: boolean; wa: boolean; sms: boolean; push: boolean };

type Row = {
  id: string;
  title: string;
  detail: string;
  channels: Channels;
  locked?: boolean;
  badge?: string;
};

function bits(value: string): Channels {
  return {
    push: value[0] === "1",
    sms: value[1] === "1",
    wa: value[2] === "1",
    email: value[3] === "1",
    inside: value[4] === "1",
  };
}

const groups: { title: string; rows: Row[] }[] = [
  {
    title: "أ) أحداث الحجوزات والوحدات",
    rows: [
      { id: "new", title: "تأكيد حجز جديد", detail: "إرسال تفاصيل الحجز وبيانات الدخول للضيف", channels: bits("10111") },
      { id: "in", title: "تسجيل وصول الضيف", detail: "إشعار بدء الإقامة للمالك ومشرف الموقع", channels: bits("10111") },
      { id: "out", title: "تسجيل مغادرة الضيف", detail: "إغلاق الإقامة وبدء دورة التنظيف", channels: bits("11111") },
      { id: "cancel", title: "إلغاء الحجز أو تعديل التواريخ", detail: "إشعار الأطراف بالتغيير فوراً", channels: bits("10101") },
      { id: "remind", title: "تذكير قبل موعد الوصول", detail: "تنبيه الضيف قبل 24 ساعة من تسجيل الدخول", channels: bits("10101") },
      { id: "extend", title: "طلب تمديد الإقامة", detail: "إشعار المالك بطلب الضيف لتمديد المدة", channels: bits("10011") },
    ],
  },
  {
    title: "ب) أحداث العمليات والتشغيل الميداني",
    rows: [
      { id: "clean-start", title: "بدء مهمة التنظيف", detail: "إسناد المهمة لمشرف الموقع بعد المغادرة", channels: bits("10101") },
      { id: "ticket", title: "بلاغ صيانة جديد", detail: "إشعار فريق التشغيل ببلاغ عطل", channels: bits("11111") },
      { id: "clean-done", title: "اكتمال التنظيف واعتماد الجاهزية", detail: "تغيير حالة الوحدة إلى «جاهزة للنزول» ورفع التقرير المصور", channels: bits("10001") },
      { id: "maint-done", title: "اكتمال الصيانة والفحص الفني", detail: "إرفاق تقرير التكلفة، الفاتورة وإلغاء حظر الحجز إن وجد", channels: bits("10011") },
    ],
  },
  {
    title: "ج) الملاك والاشتراكات",
    rows: [
      { id: "sync", title: "فشل مزامنة الأسعار أو التوفر", detail: "انقطاع المزامنة مع قنوات الحجز الخارجية", channels: bits("11111") },
      { id: "renew", title: "تجديد الاشتراك أو قرب انتهاء الرصيد", detail: "إشعار المالك قبل نهاية الدورة", channels: bits("11111") },
      {
        id: "security",
        title: "محاولة دخول مشبوهة",
        detail: "تنبيه أمني إلزامي لا يمكن إيقافه",
        channels: bits("11111"),
        locked: true,
        badge: "إلزامي",
      },
    ],
  },
];

const channelKeys = ["inside", "email", "wa", "sms", "push"] as const;
const channelLabels = ["داخل النظام", "البريد", "واتساب", "SMS", "تنبيه صوتي"];

export function SettingsNotificationsView() {
  const [rows, setRows] = useState(groups);
  const [owners, setOwners] = useState(true);
  const [emergency, setEmergency] = useState(true);

  function toggle(groupIndex: number, rowId: string, key: (typeof channelKeys)[number]) {
    setRows((current) =>
      current.map((group, index) =>
        index !== groupIndex
          ? group
          : {
              ...group,
              rows: group.rows.map((row) =>
                row.id !== rowId || row.locked
                  ? row
                  : { ...row, channels: { ...row.channels, [key]: !row.channels[key] } },
              ),
            },
      ),
    );
  }

  return (
    <div className="flex flex-col gap-5 font-cairo">
      <SettingsHero
        title="إعدادات الإشعارات"
        subtitle="تحديد وضبط الأحداث التشغيلية التي تولد إشعارات فورية وتوزيعها عبر قنوات الإرسال المعتمدة على مستوى المنصة."
      />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_280px]">
        <div className="flex flex-col gap-4 xl:order-2">
          <Card title="حالة بوابات الإرسال">
            <ul className="flex flex-col gap-3 text-end">
              {[
                ["داخل النظام", "متصل"],
                ["WhatsApp Business API", "متصل"],
                ["خوادم البريد (SMTP)", "متصل"],
                ["الرسائل النصية المحلية", "متصل"],
                ["مزود Push (APNs / FCM)", "متصل"],
              ].map(([name, state]) => (
                <li key={name} className="flex items-center justify-between rounded-[12px] bg-[#f7faf4] px-3 py-2">
                  <span className="font-cairo text-[12px] font-semibold text-[#3e8a5a]">{state}</span>
                  <span className="font-cairo text-[13px] text-[#181d17]">{name}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-end font-cairo text-[12px] leading-[18px] text-[#75786f]">
              تكامل مباشر وموثوق مع مزودي البث المحليين والدوليين مع تكرار تشغيلي (Failover) لحظي.
            </p>
          </Card>
          <Card title="الاستهلاك اليومي للقنوات">
            <p className="text-end font-cairo text-[28px] font-bold text-[#181d17]">20,812</p>
            <p className="text-end font-cairo text-[12px] text-[#75786f]">رسالة اليوم • 57% من السعة</p>
            <div className="mt-3 h-[10px] overflow-hidden rounded-full bg-[#e5eae0]">
              <div className="h-full w-[57%] bg-[#34422a]" />
            </div>
          </Card>
        </div>

        <div className="flex flex-col gap-4 xl:order-1">
          <Card title="التفضيلات الافتراضية وحوكمة الملاك">
            <div className="flex flex-col gap-3">
              <ToggleRow
                title="سماح لأصحاب العقارات بتخصيص إعدادات الإشعارات الخاصة بهم"
                description="عند تفعيل هذا الخيار، يُتاح لملاك العقارات تخصيص قنوات التنبيه في لوحاتهم الخاصة ضمن الحدود المعيارية المعتمدة للمنصة دون المساس بإشعارات الأمان والامتثال."
                on={owners}
                onChange={setOwners}
              />
              <ToggleRow
                title="إلزامية إشعار الأمان والطوارئ عبر كافة القنوات (SMS / Push)"
                description="يضمن هذا الإجراء إرسال تنبيهات الإخلاء، خروقات الحماية، وحالات التعدي عبر الرسائل النصية القصيرة والإشعارات الفورية بغض النظر عن تفضيلات المستأجر أو المالك."
                on={emergency}
                onChange={setEmergency}
              />
            </div>
          </Card>

          <Card title="مصفوفة أحداث النظام والقنوات">
            <p className="mb-4 text-end font-cairo text-[13px] text-[#454840]">
              تكوين استجابة الأحداث عبر 5 قنوات رئيسية لـ 13 حدثاً نظامياً
            </p>
            <div className="overflow-x-auto">
              <div className="min-w-[720px]">
                <div className="grid grid-cols-[1fr_repeat(5,72px)] items-center gap-2 border-b border-[#e5eae0] pb-2 text-center">
                  <span className="text-end font-cairo text-[11px] font-semibold text-[#454840]">الحدث</span>
                  {channelLabels.map((label) => (
                    <span key={label} className="font-cairo text-[11px] font-semibold text-[#454840]">
                      {label}
                    </span>
                  ))}
                </div>
                {rows.map((group, groupIndex) => (
                  <div key={group.title}>
                    <p className="py-3 text-end font-cairo text-[13px] font-bold text-[#34422a]">{group.title}</p>
                    {group.rows.map((row) => (
                      <div key={row.id} className="grid grid-cols-[1fr_repeat(5,72px)] items-center gap-2 border-t border-[#f1f5eb] py-3">
                        <div className="text-end">
                          <p className="font-cairo text-[14px] font-bold text-[#181d17]">
                            {row.title}
                            {row.badge ? (
                              <span className="ms-2 rounded-full bg-[#ffdad6] px-2 py-0.5 font-cairo text-[11px] font-semibold text-[#93000a]">
                                {row.badge}
                              </span>
                            ) : null}
                          </p>
                          <p className="font-cairo text-[12px] leading-[18px] text-[#454840]">{row.detail}</p>
                        </div>
                        {channelKeys.map((key) => {
                          const on = row.channels[key];
                          return (
                            <button
                              key={key}
                              type="button"
                              disabled={row.locked}
                              aria-label={`${row.title} ${key}`}
                              onClick={() => toggle(groupIndex, row.id, key)}
                              className={`mx-auto flex size-[36px] items-center justify-center rounded-[10px] ${
                                on ? "bg-[#d8e8c7] text-[#34422a]" : "bg-[#f3f0ee] text-[#ba1a1a]"
                              } ${row.locked ? "cursor-default" : ""}`}
                            >
                              {on ? <Check size={16} /> : <X size={14} />}
                            </button>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>

      <SaveBar
        onSave={() => showToast.success("تم حفظ إعدادات الإشعارات")}
        onCancel={() => {
          setRows(groups);
          setOwners(true);
          setEmergency(true);
        }}
      />
    </div>
  );
}
