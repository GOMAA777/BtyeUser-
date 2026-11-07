"use client";

import Link from "next/link";
import {
  Bell,
  CalendarDays,
  CreditCard,
  Globe,
  KeyRound,
  Languages,
  LayoutGrid,
  ScrollText,
  Shield,
  SlidersHorizontal,
  Sparkles,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { showToast } from "@/lib/toast";

type Card = {
  title: string;
  description: string;
  badge: string;
  badgeClass: string;
  dot: string;
  icon: LucideIcon;
  href?: string;
};

const sections: { title: string; count: string; cards: Card[] }[] = [
  {
    title: "إعدادات المنصة",
    count: "3 أقسام",
    cards: [
      {
        title: "الإعدادات العامة",
        description: "إعدادات هوية المنصة، الشعار، النطاقات الرسمية، وسياسات الخدمة والخصوصية.",
        badge: "مكتملة التهيئة",
        badgeClass: "bg-[#eaf1e8] text-[#3e8a5a]",
        dot: "bg-[#3e8a5a]",
        icon: Sparkles,
        href: "/settings/general",
      },
      {
        title: "إعدادات المنصة",
        description: "خيارات النشر السحابي، سعة المحافظ، فترات التجربة المجانية، والحدود التشغيلية العامة.",
        badge: "محدث • الإصدار 2.4.0",
        badgeClass: "bg-[#eef4ff] text-[#4e7cc7]",
        dot: "bg-[#4e7cc7]",
        icon: SlidersHorizontal,
        href: "/settings/platform",
      },
      {
        title: "اللغة والمنطقة",
        description: "اللغة الافتراضية (العربية)، تنسيق التواريخ الهجرية والميلادية، وتوقيت الرياض (GMT+3).",
        badge: "العربية (RTL) • الرياض",
        badgeClass: "bg-[#ebefe6] text-[#454840]",
        dot: "bg-[#75786f]",
        icon: Languages,
      },
    ],
  },
  {
    title: "إدارة التشغيل",
    count: "4 أقسام إدارية",
    cards: [
      {
        title: "إعدادات الحجوزات",
        description: "سياسات تأكيد الحجز الآلي، نوافذ الإلغاء، معايير التحقق من توافر الوحدات ومنع التعارض.",
        badge: "قواعد الحجز",
        badgeClass: "bg-[#eaf1e8] text-[#34422a]",
        dot: "bg-[#34422a]",
        icon: CalendarDays,
        href: "/settings/bookings",
      },
      {
        title: "إعدادات التشغيل",
        description: "قواعد إسناد مهام النظافة التلقائية بعد المغادرة، معايير بلاغات الصيانة الطارئة.",
        badge: "دورة التشغيل",
        badgeClass: "bg-[#eaf1e8] text-[#34422a]",
        dot: "bg-[#34422a]",
        icon: Wrench,
        href: "/settings/operations",
      },
      {
        title: "إعدادات أكواد الدخول",
        description: "قواعد توليد أكواد الأقفال الذكية، مدة صلاحية كود النزيل، وآليات التشفير السحابي.",
        badge: "أقفال ذكية",
        badgeClass: "bg-[#eaf1e8] text-[#34422a]",
        dot: "bg-[#34422a]",
        icon: KeyRound,
        href: "/settings/access-codes",
      },
      {
        title: "الإشعارات",
        description: "تنبيهات المنصة الإدارية، إشعارات البريد والرسائل النصية SMS للفواتير والعمليات الهامة.",
        badge: "5 قنوات",
        badgeClass: "bg-[#eaf1e8] text-[#34422a]",
        dot: "bg-[#34422a]",
        icon: Bell,
        href: "/settings/notifications",
      },
    ],
  },
  {
    title: "التكاملات والخدمات",
    count: "3 أقسام تكاملية",
    cards: [
      {
        title: "WhatsApp",
        description: "إدارة اتصال WhatsApp Business Cloud API وإعدادات إرسال الرسائل والقوالب المعتمدة.",
        badge: "متصل • Meta Cloud API",
        badgeClass: "bg-[#eaf1e8] text-[#3e8a5a]",
        dot: "bg-[#3e8a5a]",
        icon: Globe,
      },
      {
        title: "التكاملات",
        description: "ربط قنوات الحجز (Booking.com, Airbnb)، مزامنة iCal، والربط الحكومي الموحد (بلدي، شموس).",
        badge: "3 قنوات متصلة",
        badgeClass: "bg-[#eef4ff] text-[#4e7cc7]",
        dot: "bg-[#4e7cc7]",
        icon: LayoutGrid,
      },
      {
        title: "الدفع والفوترة",
        description: "بوابات الدفع الإلكتروني (مدى، Apple Pay)، والربط مع منظومة الفوترة (ZATCA المرحلة 2).",
        badge: "معتمد ZATCA • نشط",
        badgeClass: "bg-[#eaf1e8] text-[#3e8a5a]",
        dot: "bg-[#3e8a5a]",
        icon: CreditCard,
      },
    ],
  },
  {
    title: "الأمان والإدارة",
    count: "3 أقسام حوكمة",
    cards: [
      {
        title: "الأمان",
        description: "إعدادات المصادقة الثنائية (2FA)، سياسات كلمات المرور، وإدارة الجلسات وسجلات الدخول المشبوهة.",
        badge: "حوكمة",
        badgeClass: "bg-[#f2e1c0] text-[#695d43]",
        dot: "bg-[#695d43]",
        icon: Shield,
      },
      {
        title: "المستخدمون والصلاحيات",
        description: "إدارة حسابات مديري المنصة، الأدوار الوظيفية (Role-based RBAC)، ومصفوفة الصلاحيات.",
        badge: "RBAC",
        badgeClass: "bg-[#ebefe6] text-[#454840]",
        dot: "bg-[#75786f]",
        icon: Users,
      },
      {
        title: "السجل والنشاط",
        description: "سجل التدقيق الشامل (Audit Trail) لكافة التعديلات الإدارية على إعدادات المنصة وحسابات الملاك.",
        badge: "Audit Trail",
        badgeClass: "bg-[#ebefe6] text-[#454840]",
        dot: "bg-[#75786f]",
        icon: ScrollText,
      },
    ],
  },
];

function SettingCard({ card }: { card: Card }) {
  const Icon = card.icon;
  const body = (
    <>
      <div className="flex items-center justify-between">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-cairo text-[11px] font-semibold ${card.badgeClass}`}>
          <span className={`size-[6px] rounded-full ${card.dot}`} />
          {card.badge}
        </span>
        <span className="flex size-[44px] items-center justify-center rounded-[12px] bg-[rgba(216,232,203,0.6)] text-[#34422a]">
          <Icon size={20} />
        </span>
      </div>
      <div className="mt-4 text-end">
        <h3 className="font-cairo text-[18px] font-bold leading-[28px] text-[#181d17]">{card.title}</h3>
        <p className="mt-1 font-cairo text-[14px] leading-[22px] text-[#454840]">{card.description}</p>
      </div>
      <div className="mt-6 border-t border-[#e5eae0]/60 pt-2 text-start text-[#75786f]">‹</div>
    </>
  );
  const className =
    "flex min-h-[220px] flex-col rounded-[16px] border border-[rgba(197,200,189,0.6)] bg-white p-[25px] text-start transition-shadow hover:shadow-[0px_4px_16px_rgba(52,66,42,0.08)]";

  if (card.href) {
    return (
      <Link href={card.href} className={className}>
        {body}
      </Link>
    );
  }

  return (
    <button type="button" onClick={() => showToast.underDevelopment(card.title)} className={`${className} cursor-pointer`}>
      {body}
    </button>
  );
}

export function SettingsHubView() {
  return (
    <div className="flex flex-col gap-6 font-cairo">
      <section className="rounded-[16px] bg-white px-[28px] py-[22px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
        <h1 className="font-cairo text-[24px] font-bold leading-[34px] text-[#181d17]">الإعدادات</h1>
        <p className="mt-1 font-cairo text-[14px] leading-[22px] text-[#454840]">
          إدارة إعدادات المنصة وقواعد التشغيل والتكاملات والأمان لضمان تشغيل مؤسسي متسق.
        </p>
      </section>

      {sections.map((section) => (
        <section key={section.title} className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-[#ebefe6] px-3 py-1 font-cairo text-[12px] font-semibold text-[#454840]">
              {section.count}
            </span>
            <h2 className="font-cairo text-[20px] font-bold leading-[30px] text-[#181d17]">{section.title}</h2>
          </div>
          <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 ${section.cards.length === 4 ? "xl:grid-cols-4" : "xl:grid-cols-3"}`}>
            {section.cards.map((card) => (
              <SettingCard key={card.title} card={card} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
