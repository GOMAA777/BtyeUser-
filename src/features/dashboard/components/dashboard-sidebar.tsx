"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Building2,
  Home,
  Calendar,
  Wrench,
  KeyRound,
  MessageSquare,
  ArrowLeftRight,
  RotateCcw,
  Receipt,
  SlidersHorizontal,
  UserCircle,
  ShieldCheck,
  LogOut,
  type LucideIcon,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

// User's exact sidebar names with matched modern outline icons from reference image
const mainNavItems: NavItem[] = [
  {
    label: "الرئيسية",
    href: "/dashboard",
    icon: LayoutGrid,
  },
  {
    label: "العقارات",
    href: "#properties",
    icon: Building2,
  },
  {
    label: "الوحدات",
    href: "#units",
    icon: Home,
  },
  {
    label: "الحجوزات",
    href: "#bookings",
    icon: Calendar,
  },
  {
    label: "الصيانة والتنظيف",
    href: "#maintenance",
    icon: Wrench,
  },
  {
    label: "أكواد الدخول",
    href: "#access-codes",
    icon: KeyRound,
  },
  {
    label: "الواتساب",
    href: "#whatsapp",
    icon: MessageSquare,
  },
  {
    label: "ربط المنصات",
    href: "#integrations",
    icon: ArrowLeftRight,
  },
  {
    label: "أخطاء المزامنة",
    href: "#sync-errors",
    icon: RotateCcw,
  },
  {
    label: "اشتراكي",
    href: "#subscription",
    icon: Receipt,
  },
];

const settingsNavItems: NavItem[] = [
  {
    label: "الإعدادات",
    href: "#settings",
    icon: SlidersHorizontal,
  },
  {
    label: "الملف الشخصي",
    href: "#profile",
    icon: UserCircle,
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="bg-[#303A2C] flex flex-col justify-between w-[260px] shrink-0 h-screen sticky top-0 z-30 select-none overflow-hidden no-scrollbar px-[14px] py-[16px]"
      data-node-id="1:599"
      data-name="Aside"
    >
      {/* Top Group: Brand + Main Nav */}
      <div className="flex flex-col items-start w-full">
        {/* Brand Header */}
        <div className="flex gap-[12px] items-center px-[8px] pt-[2px] pb-[16px] w-full">
          {/* Circular Emblem Badge with Gold Accent */}
          <div className="relative shrink-0 size-[42px] rounded-full bg-[#252E22] border border-[rgba(201,185,154,0.35)] flex items-center justify-center overflow-hidden shadow-sm">
            <Image
              src="/assets/dashboard/c2e0b353e7c8e6e66d761477794c851feec5dc7c.png"
              alt="ابراج Logo"
              width={26}
              height={26}
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-cairo font-bold text-[20px] leading-[26px] text-white tracking-[-0.3px]">
              ابراج
            </h1>
            <p className="font-cairo font-medium text-[11px] leading-[14px] text-[#A3B39C]">
              منظومة إدارة وتشغيل العقارات
            </p>
          </div>
        </div>

        {/* Section Label: Main Navigation */}
        <div className="px-[12px] pt-[6px] pb-[4px] w-full">
          <span className="font-cairo font-medium text-[12px] leading-[16px] text-[#7D8B72]">
            القائمة الرئيسية
          </span>
        </div>

        {/* Main Nav Items List */}
        <nav className="flex flex-col gap-[3px] pt-[2px] w-full">
          {mainNavItems.map((item) => {
            const isActive = item.href === "/dashboard" || pathname === item.href;
            const IconComponent = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-[12px] px-[16px] py-[8px] transition-all w-full font-cairo ${
                  isActive
                    ? "bg-[#4B5940] text-white font-bold rounded-full shadow-sm"
                    : "text-[#E0E7DC] hover:text-white hover:bg-white/[0.05] rounded-[12px] font-semibold"
                }`}
              >
                <div className="relative shrink-0 size-[20px] flex items-center justify-center">
                  <IconComponent
                    size={19}
                    strokeWidth={isActive ? 2.2 : 1.8}
                    className={isActive ? "text-white" : "text-[#C5D0C0]"}
                  />
                </div>
                <span className="text-[13.5px] leading-[20px]">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Group: Settings + User Pill Card */}
      <div className="flex flex-col pt-[8px] w-full">
        {/* Section Label: System & Settings */}
        <div className="px-[12px] pb-[4px] w-full">
          <span className="font-cairo font-medium text-[12px] leading-[16px] text-[#7D8B72]">
            النظام والإعدادات
          </span>
        </div>

        <nav className="flex flex-col gap-[3px] w-full">
          {settingsNavItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-[12px] px-[16px] py-[8px] rounded-[12px] text-[#E0E7DC] hover:text-white hover:bg-white/[0.05] transition-all w-full font-cairo font-semibold"
              >
                <div className="relative shrink-0 size-[20px] flex items-center justify-center">
                  <IconComponent size={19} strokeWidth={1.8} className="text-[#C5D0C0]" />
                </div>
                <span className="text-[13.5px] leading-[20px]">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Pill Card */}
        <div className="pt-[10px] w-full">
          <div className="bg-[#3C4638] flex items-center justify-between px-[12px] py-[8px] rounded-[22px] w-full shadow-sm">
            {/* User Details with Avatar Circle */}
            <div className="flex items-center gap-[10px]">
              {/* Beige Avatar Circle with User Initial */}
              <div className="size-[34px] rounded-full bg-[#C9B99A] text-[#303A2C] font-cairo font-bold text-[14px] flex items-center justify-center shrink-0 shadow-inner">
                م
              </div>
              <div className="flex flex-col items-start">
                <span className="font-cairo font-bold text-[13px] leading-[18px] text-white">
                  محمد احمد
                </span>
                <div className="flex items-center gap-[4px]">
                  <span className="font-cairo font-medium text-[11px] leading-[14px] text-[#A3B39C]">
                    مدير النظام
                  </span>
                  <ShieldCheck size={12} className="text-[#A3B39C]" />
                </div>
              </div>
            </div>

            {/* Logout Action Button */}
            <Link
              href="/login"
              title="تسجيل الخروج"
              className="p-[6px] rounded-full text-[#A3B39C] hover:text-white hover:bg-white/[0.08] transition-colors shrink-0"
            >
              <LogOut size={17} className="transform rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
