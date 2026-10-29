"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Eye,
  EyeOff,
  Home,
  KeyRound,
  Lock,
  MessageSquare,
  Plus,
  ShieldCheck,
  User,
  Calendar,
} from "lucide-react";
import { showToast } from "@/lib/toast";

interface BookingSuccessViewProps {
  reference?: string;
  guestName?: string;
  unitName?: string;
  unitType?: string;
  propertyName?: string;
  checkIn?: string;
  checkOut?: string;
  nights?: number;
  accessCode?: string;
}

export function BookingSuccessView({
  reference = "BK-2026-1048",
  guestName = "أحمد محمد",
  unitName = "الوحدة 101",
  unitType = "(استوديو ديلوكس · الدور الأول)",
  propertyName = "عمارة النخيل - الرياض",
  checkIn = "26 أغسطس 2026 — 02:00 م",
  checkOut = "30 أغسطس 2026 — 12:00 م",
  nights = 4,
  accessCode = "482019",
}: BookingSuccessViewProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyRef = () => {
    navigator.clipboard.writeText(reference);
    setCopied(true);
    showToast.success("تم نسخ رقم الحجز المرجعي");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(accessCode);
    showToast.success("تم نسخ كود الدخول الذكي");
  };

  return (
    <div
      className="flex flex-col items-center gap-8 w-full max-w-[760px] mx-auto py-8 px-4"
      data-node-id="1:6752"
      data-name="تم إنشاء الحجز"
      dir="rtl"
    >
      {/* 1. Success Icon Badge */}
      <div
        className="size-[80px] rounded-full bg-[#d8e8cb] border-4 border-white shadow-[0px_4px_12px_rgba(75,89,64,0.15)] flex items-center justify-center shrink-0"
        data-node-id="1:6778"
        data-name="Success Icon Badge"
      >
        <Check className="size-10 text-[#34422a]" strokeWidth={3} />
      </div>

      {/* 2. Title & Subtitle */}
      <div
        className="flex flex-col items-center text-center gap-2"
        data-node-id="1:6755"
        data-name="Title & Subtitle"
      >
        <span
          className="bg-[#eaf1e8] text-[#4b5940] px-3 py-1 rounded-full font-cairo font-semibold text-[12px] leading-[16px]"
          data-node-id="1:6758"
        >
          حجز مؤكد في المنظومة
        </span>
        <h1
          className="font-cairo font-bold text-[#181d17] text-[26px] leading-[36px]"
          data-node-id="1:6761"
        >
          تم إنشاء الحجز بنجاح
        </h1>
        <p
          className="font-cairo text-[#454840] text-[14px] leading-[22px] max-w-[540px]"
          data-node-id="1:6763"
        >
          تم توثيق الحجز في النظام وجدولة مواعيد الدخول والمغادرة، وتوليد كود القفل الذكي تلقائياً.
        </p>
      </div>

      {/* 3. ACTION BUTTONS ROW */}
      <div
        className="flex flex-wrap items-center justify-center gap-3 w-full"
        data-node-id="1:6764"
        data-name="ACTION BUTTONS ROW"
      >
        <Link
          href={`/bookings/${reference}`}
          className="bg-[#34422a] hover:bg-[#283420] text-white px-6 py-2.5 rounded-[12px] font-cairo font-bold text-[13px] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] transition-all flex items-center gap-2 cursor-pointer"
          data-node-id="1:6775"
        >
          <span>عرض الحجز</span>
          <ExternalLink className="size-4" />
        </Link>

        <Link
          href="/bookings/new"
          className="bg-white border border-[#e5e8e2] hover:bg-[#f6f7f4] text-[#252a24] px-6 py-2.5 rounded-[12px] font-cairo font-semibold text-[13px] transition-all flex items-center gap-2 cursor-pointer"
          data-node-id="1:6769"
        >
          <Plus className="size-4" />
          <span>إضافة حجز آخر</span>
        </Link>

        <Link
          href="/bookings"
          className="text-[#75786f] hover:text-[#181d17] px-4 py-2.5 font-cairo font-semibold text-[13px] transition-colors"
          data-node-id="1:6765"
        >
          العودة إلى الحجوزات
        </Link>
      </div>

      {/* 4. MAIN BOOKING SUMMARY CARD */}
      <div
        className="bg-white border border-[#e5e8e2] rounded-[16px] drop-shadow-[0px_1px_2px_rgba(0,0,0,0.05)] w-full overflow-hidden"
        data-node-id="1:6787"
        data-name="MAIN BOOKING SUMMARY CARD"
      >
        {/* Card Top Bar: Reference ID & Status */}
        <div
          className="bg-[#fcfdfa] border-b border-[#e5e8e2] px-6 py-4 flex items-center justify-between"
          data-node-id="1:6788"
        >
          <div className="flex items-center gap-2">
            <span className="font-cairo text-[12px] text-[#75786f]">حالة الحجز:</span>
            <div className="bg-[rgba(59,130,246,0.1)] flex items-center gap-1.5 px-3 py-1 rounded-full">
              <div className="size-1.5 rounded-full bg-[#2563eb]" />
              <span className="font-cairo font-semibold text-[#2563eb] text-[12px]">قادم</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-cairo text-[12px] text-[#75786f]">رقم الحجز المرجعي:</span>
            <button
              type="button"
              onClick={handleCopyRef}
              className="flex items-center gap-1.5 font-cairo font-bold text-[#181d17] text-[13px] bg-[#f1f5eb] hover:bg-[#e4ebd9] px-2.5 py-1 rounded-[8px] transition-colors cursor-pointer"
              title="نسخ رقم الحجز"
            >
              <span>{reference}</span>
              {copied ? <Check className="size-3 text-[#34422a]" /> : <Copy className="size-3 text-[#75786f]" />}
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 flex flex-col gap-6">
          {/* Row 1: Guest & Unit Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Unit Box */}
            <div className="p-4 bg-[#fbfcf9] border border-[#e5e8e2] rounded-[12px] flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-[#4b5940]">
                <Home className="size-4" />
                <span className="font-cairo font-semibold text-[12px] text-[#75786f]">
                  الوحدة المخصصة
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-cairo font-bold text-[#181d17] text-[15px]">{unitName}</span>
                <span className="font-cairo text-[12px] text-[#75786f]">{unitType}</span>
              </div>
              <span className="font-cairo text-[12px] text-[#454840]">{propertyName}</span>
            </div>

            {/* Guest Box */}
            <div className="p-4 bg-[#fbfcf9] border border-[#e5e8e2] rounded-[12px] flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-[#4b5940]">
                <User className="size-4" />
                <span className="font-cairo font-semibold text-[12px] text-[#75786f]">
                  اسم الضيف
                </span>
              </div>
              <span className="font-cairo font-bold text-[#181d17] text-[15px]">{guestName}</span>
              <span className="font-cairo text-[12px] text-[#454840]">
                ضيف معتمد · تم ربط رقم الجوال للتواصل الآلي
              </span>
            </div>
          </div>

          {/* Row 2: Stay Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Check-in */}
            <div className="p-4 bg-[#fbfcf9] border border-[#e5e8e2] rounded-[12px] flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-[#4b5940]">
                <Calendar className="size-4" />
                <span className="font-cairo font-semibold text-[12px] text-[#75786f]">
                  تاريخ ووقت الوصول (Check-in)
                </span>
              </div>
              <span className="font-cairo font-bold text-[#181d17] text-[14px]">{checkIn}</span>
              <span className="font-cairo text-[11px] text-[#4b5940]">
                الدخول الذاتي عبر كود الباب
              </span>
            </div>

            {/* Check-out */}
            <div className="p-4 bg-[#fbfcf9] border border-[#e5e8e2] rounded-[12px] flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-[#4b5940]">
                <Calendar className="size-4" />
                <span className="font-cairo font-semibold text-[12px] text-[#75786f]">
                  تاريخ ووقت المغادرة (Check-out)
                </span>
              </div>
              <span className="font-cairo font-bold text-[#181d17] text-[14px]">{checkOut}</span>
              <span className="font-cairo text-[11px] text-[#75786f]">
                المدة: {nights} ليالٍ
              </span>
            </div>
          </div>

          {/* Row 3: Access Code Generated Highlight */}
          <div
            className="p-4 bg-[#f4f7f0] border border-[#d2dec9] rounded-[12px] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            data-node-id="1:6846"
            data-name="Row 3: Access Code Generated Highlight"
          >
            <div className="flex items-start gap-3">
              <div className="size-9 rounded-[8px] bg-white border border-[#d2dec9] flex items-center justify-center shrink-0 text-[#34422a] mt-0.5">
                <KeyRound className="size-5" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-cairo font-bold text-[#181d17] text-[13px]">
                    كود الدخول الذكي
                  </span>
                  <span className="bg-[#e4ebd9] text-[#34422a] px-2 py-0.5 rounded-full font-cairo font-semibold text-[10px]">
                    تم إنشاء كود الدخول
                  </span>
                </div>
                <p className="font-cairo text-[12px] text-[#454840] leading-[18px]">
                  تمت مزامنة الكود مع القفل الذكي للوحدة 101 وسيكون نشطاً خلال فترة الإقامة فقط.
                </p>
              </div>
            </div>

            {/* Code Display */}
            <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
              <div className="bg-white border border-[#d2dec9] px-3 py-1.5 rounded-[8px] flex items-center gap-2">
                <span className="font-mono font-bold text-[16px] text-[#181d17] tracking-wider">
                  {showCode ? accessCode : "••••••"}
                </span>
                <button
                  type="button"
                  onClick={() => setShowCode(!showCode)}
                  className="text-[#75786f] hover:text-[#181d17] cursor-pointer"
                  title={showCode ? "إخفاء الكود" : "إظهار الكود"}
                >
                  {showCode ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="text-[#75786f] hover:text-[#181d17] cursor-pointer"
                  title="نسخ الكود"
                >
                  <Copy className="size-4" />
                </button>
              </div>
              <span className="bg-[#ebefe6] text-[#4b5940] px-2.5 py-1 rounded-[6px] font-cairo font-semibold text-[11px]">
                جاهز للإرسال
              </span>
            </div>
          </div>

          {/* Subtle Note: WhatsApp Automation */}
          <div
            className="flex items-center gap-2 text-[#454840] font-cairo text-[12px] bg-[#fbfcf9] p-3 rounded-[8px] border border-[#e5e8e2]"
            data-node-id="1:6866"
          >
            <MessageSquare className="size-4 text-[#25d366]" />
            <span>سيتم إرسال رسائل WhatsApp تلقائيًا حسب إعدادات الأتمتة.</span>
          </div>
        </div>
      </div>

      {/* 5. Security / Certified Footer Note */}
      <div
        className="flex items-center gap-2 text-[#75786f] font-cairo text-[11px] text-center"
        data-node-id="1:6871"
      >
        <ShieldCheck className="size-4 text-[#4b5940]" />
        <span>
          تم توثيق وتشفير الحجز وتأمين كود الدخول المؤقت وفق بروتوكول الأقفال الذكية لمنظومة ابراج
        </span>
      </div>
    </div>
  );
}
