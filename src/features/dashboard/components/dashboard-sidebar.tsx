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
  Users,
  type LucideIcon,
} from "lucide-react";
import { useSidebar } from "../context/sidebar-context";
import { showToast } from "@/lib/toast";

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
    href: "/properties",
    icon: Building2,
  },
  {
    label: "الوحدات",
    href: "/units",
    icon: Home,
  },
  {
    label: "الحجوزات",
    href: "/bookings",
    icon: Calendar,
  },
  {
    label: "الصيانة والتنظيف",
    href: "/maintenance",
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
    label: "فريق العمل",
    href: "#team",
    icon: Users,
  },
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
  const { isCollapsed } = useSidebar();

  return (
    <aside
      className={`bg-[#34422A] flex flex-col justify-between shrink-0 h-screen sticky top-0 z-30 select-none overflow-hidden no-scrollbar py-[16px] transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-[76px] px-[8px]" : "w-[260px] px-[14px]"
      }`}
      data-node-id="1:21910"
      data-name="Aside"
    >
      {/* Top Group: Brand + Main Nav */}
      <div className="flex flex-col items-start w-full">
        {/* Brand Header */}
        <div
          className={`flex items-center px-[8px] pt-[2px] pb-[16px] w-full ${
            isCollapsed ? "justify-center gap-0" : "gap-[12px]"
          }`}
        >
          {/* Circular Emblem Badge with Gold Accent */}
          <div className="relative shrink-0 size-[42px] rounded-full bg-[#252E22] border border-[rgba(201,185,154,0.35)] flex items-center justify-center overflow-hidden shadow-sm">
            <Image
              src="/assets/brand/logo.png"
              alt="ابراج Logo"
              width={28}
              height={28}
              priority
              className="object-contain"
            />
          </div>

          {!isCollapsed && (
            <div className="flex flex-col items-start overflow-hidden">
              <h1 className="font-cairo font-bold text-[20px] leading-[26px] text-white tracking-[-0.3px] whitespace-nowrap">
                ابراج
              </h1>
              <p className="font-cairo font-medium text-[11px] leading-[14px] text-[#A3B39C] whitespace-nowrap">
                منظومة إدارة وتشغيل العقارات
              </p>
            </div>
          )}
        </div>

        {/* Section Label: Main Navigation */}
        {!isCollapsed && (
          <div className="px-[12px] pt-[6px] pb-[4px] w-full">
            <span className="font-cairo font-medium text-[12px] leading-[16px] text-[#7D8B72]">
              القائمة الرئيسية
            </span>
          </div>
        )}

        {/* Main Nav Items List */}
        <nav className="flex flex-col gap-[3px] pt-[2px] w-full">
          {mainNavItems.map((item) => {
            const isActive =
              (item.href === "/dashboard" && pathname === "/dashboard") ||
              (item.href.includes("properties") && pathname.includes("properties")) ||
              (item.href === "/units" && pathname.startsWith("/units")) ||
              (item.href === "/bookings" && pathname.startsWith("/bookings")) ||
              (item.href === "/maintenance" && (pathname.startsWith("/maintenance") || pathname.startsWith("/operations")));
            const IconComponent = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                title={isCollapsed ? item.label : undefined}
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault();
                    showToast.underDevelopment(item.label);
                  }
                }}
                className={`flex items-center transition-all w-full font-cairo ${
                  isCollapsed ? "justify-center p-[10px] rounded-[12px]" : "gap-[12px] px-[16px] py-[8px] rounded-[12px]"
                } ${
                  isActive
                    ? "bg-[#D8E8CB] text-[#121F0D] font-bold drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
                    : "text-[#E5EAE0] hover:text-white hover:bg-white/[0.05] font-semibold"
                }`}
              >
                <div className="relative shrink-0 size-[20px] flex items-center justify-center">
                  <IconComponent
                    size={19}
                    strokeWidth={isActive ? 2.2 : 1.8}
                    className={isActive ? "text-[#121F0D]" : "text-[#C5D0C0]"}
                  />
                </div>
                {!isCollapsed && (
                  <span className="text-[14px] leading-[20px] whitespace-nowrap">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Group: Settings + User Pill Card */}
      <div className="flex flex-col pt-[8px] w-full">
        {/* Section Label: System & Settings */}
        {!isCollapsed && (
          <div className="px-[12px] pb-[4px] w-full">
            <span className="font-cairo font-medium text-[12px] leading-[16px] text-[#7D8B72]">
              النظام والإعدادات
            </span>
          </div>
        )}

        <nav className="flex flex-col gap-[3px] w-full">
          {settingsNavItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                title={isCollapsed ? item.label : undefined}
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault();
                    showToast.underDevelopment(item.label);
                  }
                }}
                className={`flex items-center text-[#E0E7DC] hover:text-white hover:bg-white/[0.05] transition-all w-full font-cairo font-semibold ${
                  isCollapsed ? "justify-center p-[10px] rounded-[12px]" : "gap-[12px] px-[16px] py-[8px] rounded-[12px]"
                }`}
              >
                <div className="relative shrink-0 size-[20px] flex items-center justify-center">
                  <IconComponent size={19} strokeWidth={1.8} className="text-[#C5D0C0]" />
                </div>
                {!isCollapsed && (
                  <span className="text-[13.5px] leading-[20px] whitespace-nowrap">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Pill Card */}
        <div className="pt-[10px] w-full">
          <div
            className={`bg-[#3C4638] flex items-center rounded-[22px] shadow-sm transition-all ${
              isCollapsed ? "justify-center p-[8px]" : "justify-between px-[12px] py-[8px] w-full"
            }`}
          >
            {/* User Details with Avatar Circle */}
            <div className="flex items-center gap-[10px]">
              {/* Beige Avatar Circle with User Initial */}
              <div className="size-[34px] rounded-full bg-[#C9B99A] text-[#303A2C] font-cairo font-bold text-[14px] flex items-center justify-center shrink-0 shadow-inner">
                م
              </div>

              {!isCollapsed && (
                <div className="flex flex-col items-start overflow-hidden">
                  <span className="font-cairo font-bold text-[13px] leading-[18px] text-white whitespace-nowrap">
                    محمد احمد
                  </span>
                  <div className="flex items-center gap-[4px] whitespace-nowrap">
                    <span className="font-cairo font-medium text-[11px] leading-[14px] text-[#A3B39C]">
                      مدير النظام
                    </span>
                    <ShieldCheck size={12} className="text-[#A3B39C]" />
                  </div>
                </div>
              )}
            </div>

            {/* Logout Action Button */}
            {!isCollapsed && (
              <Link
                href="/login"
                title="تسجيل الخروج"
                className="p-[6px] rounded-full text-[#A3B39C] hover:text-white hover:bg-white/[0.08] transition-colors shrink-0"
              >
                <LogOut size={17} className="transform rotate-180" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
