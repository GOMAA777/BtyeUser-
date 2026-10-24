"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  iconSrc: string;
  iconWidth?: number;
  iconHeight?: number;
  isCustomIcon?: boolean;
}

const mainNavItems: NavItem[] = [
  {
    label: "الرئيسية",
    href: "/dashboard",
    iconSrc: "/assets/dashboard/3c20dcf18d251f14f4ae64752fcf41f993f1abd1.svg",
    iconWidth: 15,
    iconHeight: 15,
  },
  {
    label: "العقارات",
    href: "#properties",
    iconSrc: "/assets/dashboard/e967c26398f24b2b8adfffe661d64313c162a3c1.svg",
    iconWidth: 17,
    iconHeight: 15,
  },
  {
    label: "الوحدات",
    href: "#units",
    iconSrc: "/assets/dashboard/9dd978de9fb22de659e76e97bdc888eec47d969c.svg",
    iconWidth: 15,
    iconHeight: 15,
  },
  {
    label: "الحجوزات",
    href: "#bookings",
    iconSrc: "/assets/dashboard/09a6aa18c27153342ab7108f210b497c3e607b8d.svg",
    iconWidth: 15,
    iconHeight: 17,
  },
  {
    label: "الصيانة والتنظيف",
    href: "#maintenance",
    iconSrc: "/assets/dashboard/8ff5325f3964be211c29a13e57766ff819b0dde4.svg",
    iconWidth: 17,
    iconHeight: 17,
  },
  {
    label: "أكواد الدخول",
    href: "#access-codes",
    iconSrc: "/assets/dashboard/1b1ea19de64b58e8602647e6139a5a89f47957af.svg",
    iconWidth: 17,
    iconHeight: 14,
  },
  {
    label: "الواتساب",
    href: "#whatsapp",
    iconSrc: "/assets/dashboard/48b44d6ad1c79afc528892713d90262f9e3f180a.svg",
    iconWidth: 20,
    iconHeight: 20,
  },
  {
    label: "ربط المنصات",
    href: "#integrations",
    iconSrc: "/assets/dashboard/a0bccd22ab7fd1ce636891d67c37c497566bcf2d.svg",
    iconWidth: 17,
    iconHeight: 15,
  },
  {
    label: "أخطاء المزامنة",
    href: "#sync-errors",
    iconSrc: "/assets/dashboard/89adc012bdab507f023cdb84f183648a25c94504.svg",
    iconWidth: 15,
    iconHeight: 15,
  },
  {
    label: "اشتراكي",
    href: "#subscription",
    iconSrc: "/assets/dashboard/89cfa5e9728190673da430c2f704c26ca8d8c6b6.svg",
    iconWidth: 15,
    iconHeight: 17,
  },
];

const settingsNavItems: NavItem[] = [
  {
    label: "الإعدادات",
    href: "#settings",
    iconSrc: "/assets/dashboard/4b45323588dea9d8b92e19174c8b8c37d674b232.svg",
    iconWidth: 15,
    iconHeight: 15,
  },
  {
    label: "الملف الشخصي",
    href: "#profile",
    iconSrc: "/assets/dashboard/ffe8324b035f979e5d829752045168146ff5e9bb.svg",
    iconWidth: 14,
    iconHeight: 14,
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="bg-[#34422a] flex flex-col justify-between w-[260px] shrink-0 h-screen sticky top-0 z-30 select-none overflow-hidden no-scrollbar"
      data-node-id="1:599"
      data-name="Aside"
    >
      <div className="flex flex-col items-start w-full" data-node-id="1:600">
        {/* Brand Header */}
        <div
          className="flex gap-[12px] items-center px-[20px] py-[16px] w-full"
          data-node-id="1:601"
        >
          <div className="relative shrink-0 size-[32px] overflow-hidden" data-node-id="1:607">
            <Image
              src="/assets/dashboard/c2e0b353e7c8e6e66d761477794c851feec5dc7c.png"
              alt="ابراج Logo"
              width={32}
              height={32}
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-start" data-node-id="1:602">
            <h1 className="font-cairo font-bold text-[20px] leading-[28px] text-white tracking-[-0.5px]">
              ابراج
            </h1>
            <p className="font-cairo font-medium text-[11px] leading-[14px] text-[#bfcfaf]">
              منظومة إدارة وتشغيل العقارات
            </p>
          </div>
        </div>

        {/* Section Label: Main Navigation */}
        <div className="px-[20px] pt-[6px] pb-[4px] w-full" data-node-id="1:608">
          <span className="font-cairo font-medium text-[11px] leading-[16px] text-[rgba(191,207,175,0.8)]">
            القائمة الرئيسية
          </span>
        </div>

        {/* Main Nav Items */}
        <nav className="flex flex-col gap-[2px] px-[8px] pt-[2px] w-full" data-node-id="1:611">
          {mainNavItems.map((item) => {
            const isActive = item.href === "/dashboard" || pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-[10px] px-[14px] py-[6px] rounded-[10px] transition-colors w-full ${
                  isActive
                    ? "bg-[#d8e8cb] text-[#121f0d] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] font-cairo font-semibold"
                    : "text-[#e5eae0] hover:bg-white/[0.06] font-cairo font-semibold"
                }`}
              >
                <div className="relative shrink-0 size-[16px] flex items-center justify-center">
                  <Image
                    src={item.iconSrc}
                    alt={item.label}
                    width={item.iconWidth || 16}
                    height={item.iconHeight || 16}
                    className="object-contain"
                  />
                </div>
                <span className="text-[13px] leading-[18px]">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section: System & Settings */}
      <div className="flex flex-col p-[8px] pb-[12px] w-full" data-node-id="1:666">
        <div className="px-[14px] pt-[6px] pb-[3px] w-full" data-node-id="1:667">
          <span className="font-cairo font-medium text-[11px] leading-[16px] text-[rgba(191,207,175,0.8)]">
            النظام والإعدادات
          </span>
        </div>

        <nav className="flex flex-col gap-[2px] w-full" data-node-id="1:669">
          {settingsNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-[10px] px-[14px] py-[6px] rounded-[10px] text-[#e5eae0] hover:bg-white/[0.06] transition-colors w-full font-cairo font-semibold"
            >
              <div className="relative shrink-0 size-[15px] flex items-center justify-center">
                <Image
                  src={item.iconSrc}
                  alt={item.label}
                  width={item.iconWidth || 15}
                  height={item.iconHeight || 15}
                  className="object-contain"
                />
              </div>
              <span className="text-[13px] leading-[18px]">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* User Card */}
        <div className="pt-[6px] w-full" data-node-id="1:680">
          <div
            className="bg-[rgba(75,89,64,0.6)] flex items-center justify-between p-[8px] rounded-[12px] w-full"
            data-node-id="1:681"
          >
            <div className="flex items-center gap-[8px]" data-node-id="1:685">
              <div className="relative shrink-0 size-[18px] flex items-center justify-center">
                <Image
                  src="/assets/dashboard/9d5be60427165365a44d4f1481f3145618c7b00d.svg"
                  alt="Verified"
                  width={14}
                  height={17}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-start" data-node-id="1:686">
                <span className="font-cairo font-semibold text-[12px] leading-[18px] text-white">
                  محمد احمد
                </span>
                <span className="font-cairo font-medium text-[11px] leading-[14px] text-[#bfcfaf]">
                  مدير النظام
                </span>
              </div>
            </div>

            <Link
              href="/login"
              title="تسجيل الخروج"
              className="p-[6px] rounded-[8px] hover:bg-white/10 transition-colors shrink-0"
              data-node-id="1:682"
            >
              <Image
                src="/assets/dashboard/4353fd9bbd5bdf837d065206676884a80bfdde69.svg"
                alt="خروج"
                width={15}
                height={15}
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
