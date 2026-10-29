"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  RotateCcw,
  Home,
  AlertTriangle,
  HelpCircle,
  Copy,
  Check,
  RefreshCw,
} from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Log the error for internal diagnostics
    console.error("Unhandled Application Error:", error);
  }, [error]);

  const handleCopyDigest = () => {
    if (error.digest) {
      navigator.clipboard.writeText(error.digest);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-[#f1f5eb] text-[#181d17] flex flex-col justify-between p-6 sm:p-10 font-cairo selection:bg-[#ba1a1a] selection:text-white"
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

        {/* Error Status Badge */}
        <div className="hidden sm:flex items-center gap-2 bg-[#fde8e8] text-[#ba1a1a] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs border border-[#ba1a1a]/20">
          <span className="size-2 rounded-full bg-[#ba1a1a] animate-ping" />
          <span>تنبيه نظام • تم رصد خلل غير متوقع</span>
        </div>
      </header>

      {/* 2. Main Error Card */}
      <main className="my-auto w-full max-w-xl mx-auto text-center flex flex-col items-center py-10">
        {/* Warning Icon Badge */}
        <div className="relative mb-6">
          <div className="size-24 sm:size-28 rounded-3xl bg-white border border-[#f5c6c6] shadow-[0_8px_30px_rgba(186,26,26,0.08)] flex items-center justify-center">
            <div className="size-14 sm:size-16 rounded-2xl bg-[#fdf2f2] text-[#ba1a1a] flex items-center justify-center shadow-xs">
              <AlertTriangle className="size-7 sm:size-8 stroke-[2]" />
            </div>
          </div>
        </div>

        {/* Titles */}
        <h1 className="font-bold text-2xl sm:text-3xl text-[#181d17] mb-3 leading-snug">
          حدث خطأ غير متوقع أثناء معالجة الطلب
        </h1>
        <p className="text-sm sm:text-base text-[#454840] max-w-md mx-auto mb-6 leading-relaxed">
          نعتذر عن هذا التوقف المؤقت. واجهت المنظومة مشكلة أثناء معالجة البيانات، وتم تسجيل تفاصيل الحادثة تلقائياً للتحقق منها.
        </p>

        {/* Error Reference Code Box (if digest exists) */}
        {error.digest && (
          <div className="bg-white border border-[#dfe4db] rounded-xl px-4 py-2.5 mb-6 flex items-center gap-3 text-xs text-[#454840] shadow-2xs max-w-sm w-full justify-between">
            <span className="text-[#75786f]">رمز مرجع الخطأ:</span>
            <code className="font-mono font-semibold text-[#181d17] bg-[#f1f5eb] px-2 py-0.5 rounded text-[11px]">
              {error.digest}
            </code>
            <button
              type="button"
              onClick={handleCopyDigest}
              title="نسخ رمز الخطأ"
              className="text-[#34422a] hover:text-[#181d17] transition-colors p-1"
            >
              {copied ? (
                <Check className="size-3.5 text-green-600" />
              ) : (
                <Copy className="size-3.5" />
              )}
            </button>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto justify-center mb-6">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto min-w-[160px] bg-[#34422a] hover:bg-[#273220] active:scale-[0.98] text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <RotateCcw className="size-4" />
            <span>إعادة المحاولة</span>
          </button>
          <Link
            href="/dashboard"
            className="w-full sm:w-auto min-w-[160px] bg-white hover:bg-[#fafbf9] active:scale-[0.98] text-[#181d17] border border-[#dfe4db] px-5 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-xs transition-all"
          >
            <Home className="size-4 text-[#454840]" />
            <span>العودة للرئيسية</span>
          </Link>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto text-[#454840] hover:text-[#181d17] px-4 py-3 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <RefreshCw className="size-3.5" />
            <span>تحديث الصفحة</span>
          </button>
        </div>
      </main>

      {/* 3. Bottom Footer */}
      <footer className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#75786f] pt-6 border-t border-[#dfe4db]/70">
        <p>© 2026 أبراج لإدارة وتشغيل الأصول العقارية. جميع الحقوق محفوظة.</p>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[#454840]">
            <HelpCircle className="size-3.5" />
            <span>إذا تكررت المشكلة، يرجى تزويد فريق الدعم برمز الخطأ أعلاه</span>
          </span>
        </div>
      </footer>
    </div>
  );
}
