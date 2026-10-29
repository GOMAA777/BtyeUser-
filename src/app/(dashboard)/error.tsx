"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home, RefreshCw } from "lucide-react";

interface DashboardErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function DashboardError({ error, reset }: DashboardErrorProps) {
  useEffect(() => {
    console.error("Dashboard Segment Error:", error);
  }, [error]);

  return (
    <div
      className="flex flex-col items-center justify-center w-full py-12 font-cairo"
      dir="rtl"
    >
      <div className="bg-white rounded-[20px] border border-[#dfe4db] p-8 sm:p-12 max-w-lg w-full text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-center">
        {/* Warning Icon Container */}
        <div className="size-18 rounded-2xl bg-[#fdf2f2] text-[#ba1a1a] flex items-center justify-center mb-5 border border-[#f5c6c6] shadow-xs">
          <AlertTriangle className="size-9 stroke-[2]" />
        </div>

        {/* Titles */}
        <h2 className="font-bold text-xl sm:text-2xl text-[#181d17] mb-2">
          تعذر تحميل بيانات الصفحة
        </h2>
        <p className="text-sm text-[#454840] leading-relaxed mb-6">
          حدث خطأ أثناء جلب أو عرض بيانات هذا القسم. يمكنك المحاولة مرة أخرى أو التنقل عبر القائمة الجانبية.
        </p>

        {/* Digest Code if present */}
        {error.digest && (
          <div className="bg-[#f1f5eb] rounded-lg px-3 py-1.5 text-xs text-[#75786f] font-mono mb-6 max-w-xs truncate">
            رمز الخطأ: {error.digest}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto min-w-[140px] bg-[#34422a] hover:bg-[#273220] active:scale-[0.98] text-white px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
          >
            <RotateCcw className="size-4" />
            <span>إعادة المحاولة</span>
          </button>
          <Link
            href="/dashboard"
            className="w-full sm:w-auto min-w-[140px] bg-[#f1f5eb] hover:bg-[#e4ebd9] active:scale-[0.98] text-[#181d17] px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all"
          >
            <Home className="size-4 text-[#454840]" />
            <span>الرئيسية</span>
          </Link>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto text-[#75786f] hover:text-[#181d17] p-2 text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
            title="تحديث كامل للصفحة"
          >
            <RefreshCw className="size-3.5" />
            <span>تحديث</span>
          </button>
        </div>
      </div>
    </div>
  );
}
