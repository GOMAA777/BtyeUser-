import Link from "next/link";
import Image from "next/image";
import { Home, Building2, ArrowRight, HelpCircle, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen w-full bg-[#f1f5eb] text-[#181d17] flex flex-col justify-between p-6 sm:p-10 font-cairo selection:bg-[#34422a] selection:text-white"
      dir="rtl"
    >
      {/* 1. Top Brand Header */}
      <header className="flex items-center justify-between w-full max-w-6xl mx-auto">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#34422a] rounded-xl p-1 transition-all"
        >
          <div className="relative shrink-0 size-11 rounded-full bg-[#252E22] border border-[rgba(201,185,154,0.35)] flex items-center justify-center overflow-hidden shadow-sm group-hover:scale-105 transition-transform">
            <Image
              src="/assets/dashboard/c2e0b353e7c8e6e66d761477794c851feec5dc7c.png"
              alt="أبراج"
              width={26}
              height={26}
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="font-bold text-xl text-[#181d17] leading-tight">
              أبراج
            </span>
            <span className="text-xs text-[#454840]">
              منظومة إدارة وتشغيل الأصول العقارية
            </span>
          </div>
        </Link>

        {/* Status Badge */}
        <div className="hidden sm:flex items-center gap-2 bg-[#d8e8cb] text-[#252e22] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs border border-[#34422a]/10">
          <span className="size-2 rounded-full bg-[#34422a] animate-pulse" />
          <span>خطأ 404 • الصفحة غير موجودة</span>
        </div>
      </header>

      {/* 2. Main Content Card */}
      <main className="my-auto w-full max-w-2xl mx-auto text-center flex flex-col items-center py-10">
        {/* Decorative Compass / Building Emblem */}
        <div className="relative mb-6">
          <div className="size-28 sm:size-32 rounded-3xl bg-white border border-[#dfe4db] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center relative">
            {/* Background 404 Watermark */}
            <span className="absolute text-7xl sm:text-8xl font-black text-[#f1f5eb] select-none pointer-events-none -z-0">
              404
            </span>
            <div className="size-16 sm:size-18 rounded-2xl bg-[#f1f5eb] text-[#34422a] flex items-center justify-center relative z-10 shadow-xs">
              <Compass className="size-8 sm:size-9 animate-spin-slow stroke-[1.75]" />
            </div>
          </div>

          {/* Floating Pill Badge */}
          <div className="absolute -bottom-2 -left-2 bg-[#34422a] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
            غير متاح
          </div>
        </div>

        {/* Headings */}
        <h1 className="font-bold text-2xl sm:text-3xl text-[#181d17] mb-3 leading-snug">
          الصفحة التي تبحث عنها غير موجودة
        </h1>
        <p className="text-sm sm:text-base text-[#454840] max-w-md mx-auto mb-8 leading-relaxed">
          عذراً، قد يكون الرابط الذي اتبعته غير صحيح أو تم نقل الصفحة إلى مسار آخر ضمن منظومة إدارة العقارات.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto justify-center mb-8">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto min-w-[180px] bg-[#34422a] hover:bg-[#273220] active:scale-[0.98] text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <Home className="size-4" />
            <span>لوحة التحكم الرئيسية</span>
          </Link>
          <Link
            href="/properties"
            className="w-full sm:w-auto min-w-[160px] bg-white hover:bg-[#fafbf9] active:scale-[0.98] text-[#181d17] border border-[#dfe4db] px-5 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-xs transition-all"
          >
            <Building2 className="size-4 text-[#454840]" />
            <span>استعراض العقارات</span>
          </Link>
        </div>

        {/* Helpful Shortcut Links */}
        <div className="bg-white/80 backdrop-blur-xs border border-[#dfe4db] rounded-2xl p-4 sm:p-5 w-full max-w-md shadow-xs">
          <span className="text-xs font-semibold text-[#75786f] block mb-3 text-right">
            روابط سريعة مقترحة:
          </span>
          <div className="grid grid-cols-2 gap-2 text-right">
            <Link
              href="/dashboard"
              className="flex items-center justify-between p-2 rounded-lg hover:bg-[#f1f5eb] text-xs font-semibold text-[#181d17] transition-colors"
            >
              <span>المؤشرات والتشغيل</span>
              <ArrowRight className="size-3.5 text-[#75786f] rotate-180" />
            </Link>
            <Link
              href="/properties"
              className="flex items-center justify-between p-2 rounded-lg hover:bg-[#f1f5eb] text-xs font-semibold text-[#181d17] transition-colors"
            >
              <span>إدارة العقارات والوحدات</span>
              <ArrowRight className="size-3.5 text-[#75786f] rotate-180" />
            </Link>
            <Link
              href="/properties/new"
              className="flex items-center justify-between p-2 rounded-lg hover:bg-[#f1f5eb] text-xs font-semibold text-[#181d17] transition-colors"
            >
              <span>إضافة عقار جديد</span>
              <ArrowRight className="size-3.5 text-[#75786f] rotate-180" />
            </Link>
            <Link
              href="/login"
              className="flex items-center justify-between p-2 rounded-lg hover:bg-[#f1f5eb] text-xs font-semibold text-[#181d17] transition-colors"
            >
              <span>تسجيل الدخول</span>
              <ArrowRight className="size-3.5 text-[#75786f] rotate-180" />
            </Link>
          </div>
        </div>
      </main>

      {/* 3. Bottom Footer */}
      <footer className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#75786f] pt-6 border-t border-[#dfe4db]/70">
        <p>© 2026 أبراج لإدارة وتشغيل الأصول العقارية. جميع الحقوق محفوظة.</p>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[#454840]">
            <HelpCircle className="size-3.5" />
            <span>الدعم الفني والمساندة متاحة على مدار الساعة</span>
          </span>
        </div>
      </footer>
    </div>
  );
}
