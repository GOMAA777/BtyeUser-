"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BatteryCharging,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  CreditCard,
  Edit,
  Eye,
  EyeOff,
  Home,
  KeyRound,
  LockKeyhole,
  MessageSquare,
  Phone,
  RefreshCw,
  Send,
  ShieldCheck,
  Trash2,
  User,
  Users,
  Wifi,
} from "lucide-react";
import { BookingItem } from "../types/booking";
import { showToast } from "@/lib/toast";
import { ExtendStayModal } from "./extend-stay-modal";
import { ChangeUnitModal } from "./change-unit-modal";
import { CancelBookingModal } from "./cancel-booking-modal";

interface BookingDetailsViewProps {
  booking: BookingItem;
}

export function BookingDetailsView({ booking: initialBooking }: BookingDetailsViewProps) {
  const [booking, setBooking] = useState<BookingItem>(initialBooking);
  const [showAccessCode, setShowAccessCode] = useState(false);
  const [copiedRef, setCopiedRef] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Modals state
  const [isExtendOpen, setIsExtendOpen] = useState(false);
  const [isChangeUnitOpen, setIsChangeUnitOpen] = useState(false);
  const [isCancelOpen, setIsCancelOpen] = useState(false);

  const handleCopyRef = () => {
    navigator.clipboard.writeText(booking.reference);
    setCopiedRef(true);
    showToast.success("تم نسخ رقم الحجز المرجعي");
    setTimeout(() => setCopiedRef(false), 2000);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(booking.accessCode.code);
    setCopiedCode(true);
    showToast.success("تم نسخ كود الدخول الذكي");
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleSendWhatsapp = () => {
    showToast.success(`تم إرسال كود الدخول وتفاصيل الإقامة إلى ${booking.guest.phone} عبر الواتساب`);
  };

  const handleExtendStay = () => {
    setIsExtendOpen(true);
  };

  const handleCancelBooking = () => {
    setIsCancelOpen(true);
  };

  const handleConfirmExtend = (newCheckoutDate: string, addedNights: number, addedCost: number) => {
    setBooking((prev) => ({
      ...prev,
      checkOut: {
        ...prev.checkOut,
        date: "02 سبتمبر 2026",
        formatted: "02 سبتمبر 2026",
      },
      nights: prev.nights + addedNights,
      payment: {
        ...prev.payment,
        nights: prev.payment.nights + addedNights,
        total: prev.payment.total + addedCost,
        remaining: prev.payment.remaining + addedCost,
      },
    }));
  };

  const handleConfirmChangeUnit = (unitId: string, unitName: string, price: number) => {
    setBooking((prev) => ({
      ...prev,
      unit: {
        ...prev.unit,
        id: unitId,
        name: unitName,
        dailyPrice: price,
      },
      accessCode: {
        ...prev.accessCode,
        code: "691048",
      },
    }));
  };

  const handleConfirmCancel = () => {
    setBooking((prev) => ({
      ...prev,
      status: "cancelled",
      statusLabel: "ملغى",
      accessCode: {
        ...prev.accessCode,
        status: "expired",
        statusLabel: "تم إلغاء الكود",
      },
    }));
  };

  return (
    <div
      className="bg-[#f1f5eb] min-h-screen p-[24px] lg:p-[32px] flex flex-col gap-[20px] w-full pb-16"
      data-node-id="1:6993"
      data-name="تفاصيل الحجز"
      dir="rtl"
    >
      {/* 1. TOP HERO GREETING BAR */}
      <div
        className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 lg:px-[32px] lg:py-[24px] flex flex-col md:flex-row md:items-center justify-between gap-4 w-full"
        data-node-id="1:6995"
        data-name="Section - TOP HERO GREETING BAR"
      >
        <div className="flex flex-col items-start gap-1">
          <div className="flex items-center gap-3">
            <h1
              className="font-cairo font-bold text-[#181d17] text-[24px] leading-[34px]"
              data-node-id="1:7006"
            >
              تفاصيل الحجز
            </h1>
            {/* Quick Copy Reference Pill */}
            <button
              type="button"
              onClick={handleCopyRef}
              className="bg-[#ebefe6] hover:bg-[#dfe5d9] transition-colors flex items-center gap-2 px-[10px] py-[4px] rounded-[8px] cursor-pointer"
              data-node-id="1:6998"
              title="نسخ رقم الحجز"
            >
              <span className="font-cairo font-semibold text-[#181d17] text-[12px] tracking-[0.3px]">
                {booking.reference}
              </span>
              {copiedRef ? (
                <Check className="size-3.5 text-[#34422a]" />
              ) : (
                <Copy className="size-3.5 text-[#75786f]" />
              )}
            </button>
          </div>
          <p
            className="font-cairo text-[#75786f] text-[13px] leading-[20px]"
            data-node-id="1:7010"
          >
            تم الإنشاء: {booking.createdAt} {booking.createdMethod ? `عبر ${booking.createdMethod}` : ""}
          </p>
        </div>

        {/* Action Button Group */}
        <div
          className="flex flex-wrap items-center gap-2.5 shrink-0 self-start md:self-center"
          data-node-id="1:7011"
          data-name="Action Button Group"
        >
          <button
            type="button"
            onClick={handleCancelBooking}
            className="px-4 py-2 rounded-[10px] border border-[#f5c6c6] text-[#b12515] hover:bg-[#fdeded] font-cairo font-semibold text-[12px] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Trash2 className="size-3.5" />
            <span>إلغاء الحجز</span>
          </button>

          <button
            type="button"
            onClick={handleExtendStay}
            className="px-4 py-2 rounded-[10px] border border-[#e5e8e2] bg-white text-[#252a24] hover:bg-[#f6f7f4] font-cairo font-semibold text-[12px] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Calendar className="size-3.5" />
            <span>تمديد الإقامة</span>
          </button>

          <Link
            href={`/bookings/new`}
            className="px-4 py-2 rounded-[10px] bg-[#34422a] hover:bg-[#283420] text-white font-cairo font-bold text-[12px] shadow-[0px_1px_2px_rgba(0,0,0,0.1)] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Edit className="size-3.5" />
            <span>تعديل الحجز</span>
          </Link>
        </div>
      </div>

      {/* 2. PRIMARY MULTI-COLUMN CANVAS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
        {/* RIGHT / PRIMARY COLUMN (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* 1. Stay Information Card */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 flex flex-col gap-4 w-full"
            data-node-id="1:7028"
            data-name="1. Stay Information Card"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#e5e8e2]">
              <h2 className="font-cairo font-bold text-[#181d17] text-[16px]">بيانات الإقامة</h2>
              <span className="bg-[#d8e8cb] text-[#5a6952] px-3 py-0.5 rounded-full font-cairo font-semibold text-[11px]">
                {booking.source}
              </span>
            </div>

            {/* Property Visual Banner */}
            <div className="relative rounded-[12px] overflow-hidden h-[120px] w-full bg-[#34422a]/10 flex items-end p-4">
              <Image
                src="/assets/bookings/details/bc070.png"
                alt={booking.property}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="relative z-10 text-white">
                <span className="font-cairo text-[11px] opacity-80">العقار المشغل</span>
                <h3 className="font-cairo font-bold text-[18px] leading-[24px]">
                  {booking.property}
                </h3>
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-3 bg-[#fbfcf9] border border-[#e5e8e2] rounded-[10px] flex flex-col gap-0.5">
                <span className="font-cairo text-[11px] text-[#75786f]">الوحدة المحجوزة</span>
                <span className="font-cairo font-bold text-[14px] text-[#181d17]">
                  {booking.unit.name}
                </span>
                <span className="font-cairo text-[11px] text-[#454840]">{booking.unit.type}</span>
              </div>

              <div className="p-3 bg-[#fbfcf9] border border-[#e5e8e2] rounded-[10px] flex flex-col gap-0.5">
                <span className="font-cairo text-[11px] text-[#75786f]">
                  عدد النزلاء وسعة الإشغال
                </span>
                <span className="font-cairo font-bold text-[14px] text-[#181d17]">2 نزلاء</span>
                <span className="font-cairo text-[11px] text-[#454840]">
                  السعة القياسية (سرير كينج)
                </span>
              </div>
            </div>

            {/* Check-in & Check-out Timeline */}
            <div className="grid grid-cols-2 gap-3 p-4 bg-[#fbfcf9] border border-[#e5e8e2] rounded-[12px]">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-[#4b5940]">
                  <Clock className="size-3.5" />
                  <span className="font-cairo font-semibold text-[11px] text-[#75786f]">
                    تاريخ ووقت الدخول (Check-in)
                  </span>
                </div>
                <span className="font-cairo font-bold text-[13px] text-[#181d17]">
                  {booking.checkIn.date}
                </span>
                <span className="font-cairo text-[11px] text-[#454840]">{booking.checkIn.time}</span>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-[#4b5940]">
                  <Clock className="size-3.5" />
                  <span className="font-cairo font-semibold text-[11px] text-[#75786f]">
                    تاريخ ووقت المغادرة (Check-out)
                  </span>
                </div>
                <span className="font-cairo font-bold text-[13px] text-[#181d17]">
                  {booking.checkOut.date}
                </span>
                <span className="font-cairo text-[11px] text-[#454840]">
                  {booking.checkOut.time}
                </span>
              </div>

              <div className="col-span-2 pt-2 border-t border-[#e5e8e2] flex items-center justify-between text-[#454840] font-cairo text-[12px]">
                <span>إجمالي مدة الإقامة: {booking.nights} ليالٍ</span>
                <span className="text-[#4b5940] font-medium">سياسة تسجيل الدخول المرن مفعلة</span>
              </div>
            </div>
          </div>

          {/* 2. Guest Information Card */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 flex flex-col gap-4 w-full"
            data-node-id="1:7093"
            data-name="2. Guest Information Card"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#e5e8e2]">
              <h2 className="font-cairo font-bold text-[#181d17] text-[16px]">بيانات الضيف</h2>
              <span className="bg-[#ebefe6] text-[#4b5940] px-3 py-0.5 rounded-full font-cairo font-medium text-[11px]">
                {booking.guest.isFirstStay ? "نزيل معتمد · أول إقامة في هذا العقار" : "نزيل معتمد"}
              </span>
            </div>

            <div className="flex items-start gap-4">
              <div className="size-12 rounded-full bg-[#f1f5eb] flex items-center justify-center text-[#34422a] font-bold text-[18px] shrink-0">
                {booking.guest.name.charAt(0)}
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-cairo font-bold text-[#181d17] text-[16px]">
                  {booking.guest.name}
                </span>
                <span className="font-cairo text-[12px] text-[#75786f]">
                  {booking.guest.nationality || "المملكة العربية السعودية"}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-[#fbfcf9] border border-[#e5e8e2] rounded-[10px] flex items-center justify-between">
                <div className="flex flex-col gap-0.5">
                  <span className="font-cairo text-[11px] text-[#75786f]">رقم الجوال</span>
                  <span className="font-mono text-[13px] text-[#181d17]" dir="ltr">
                    {booking.guest.phone}
                  </span>
                </div>
                <Phone className="size-4 text-[#75786f]" />
              </div>

              <div className="p-3 bg-[#fbfcf9] border border-[#e5e8e2] rounded-[10px] flex items-center justify-between">
                <div className="flex flex-col gap-0.5">
                  <span className="font-cairo text-[11px] text-[#75786f]">البريد الإلكتروني</span>
                  <span className="font-cairo text-[13px] text-[#181d17]" dir="ltr">
                    {booking.guest.email}
                  </span>
                </div>
                <User className="size-4 text-[#75786f]" />
              </div>

              <div className="p-3 bg-[#fbfcf9] border border-[#e5e8e2] rounded-[10px] col-span-1 sm:col-span-2 flex items-center justify-between">
                <div className="flex flex-col gap-0.5">
                  <span className="font-cairo text-[11px] text-[#75786f]">الهوية الوطنية / الإقامة</span>
                  <span className="font-cairo text-[13px] text-[#181d17]">
                    {booking.guest.nationalId}
                  </span>
                </div>
                <ShieldCheck className="size-4 text-[#4b5940]" />
              </div>
            </div>
          </div>

          {/* 3. Payment & Billing Card */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 flex flex-col gap-4 w-full"
            data-node-id="1:7144"
            data-name="3. Payment & Billing Card"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#e5e8e2]">
              <h2 className="font-cairo font-bold text-[#181d17] text-[16px]">
                البيانات المالية والدفع
              </h2>
              <span
                className={`px-3 py-0.5 rounded-full font-cairo font-bold text-[11px] ${
                  booking.payment.status === "paid"
                    ? "bg-[#d8e8cb] text-[#34422a]"
                    : booking.payment.status === "partial"
                    ? "bg-[#e5eae0] text-[#121f0d]"
                    : "bg-[#fdeded] text-[#b12515]"
                }`}
              >
                {booking.payment.statusLabel}
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex justify-between font-cairo text-[13px] text-[#454840]">
                <span>
                  سعر الإقامة ({booking.payment.nights} ليالٍ × {booking.payment.nightlyRate} ر.س)
                </span>
                <span className="font-semibold text-[#181d17]">
                  {(booking.payment.nights * booking.payment.nightlyRate).toLocaleString()} ر.س
                </span>
              </div>

              <div className="flex justify-between font-cairo text-[13px] text-[#454840]">
                <span>رسوم التنظيف والخدمات</span>
                <span className="font-semibold text-[#181d17]">
                  {booking.payment.cleaningFee.toLocaleString()} ر.س
                </span>
              </div>

              <div className="flex justify-between font-cairo text-[13px] text-[#454840]">
                <span>ضريبة القيمة المضافة (15%)</span>
                <span className="font-semibold text-[#181d17]">
                  {booking.payment.vat.toFixed(2)} ر.س
                </span>
              </div>

              <div className="flex justify-between font-cairo text-[15px] font-bold text-[#181d17] pt-3 border-t border-[#e5e8e2]">
                <span>الإجمالي الكلي</span>
                <span className="text-[#181d17] text-[16px]">
                  {booking.payment.total.toLocaleString()} ر.س
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3">
                <div className="p-3 bg-[#f5f8f2] border border-[#d9e5cf] rounded-[10px] flex flex-col gap-0.5">
                  <span className="font-cairo text-[11px] text-[#454840]">المبلغ المدفوع</span>
                  <span className="font-cairo font-bold text-[16px] text-[#34422a]">
                    {booking.payment.paid.toLocaleString()} ر.س
                  </span>
                </div>

                <div className="p-3 bg-[#fafbfa] border border-[#e5e8e2] rounded-[10px] flex flex-col gap-0.5">
                  <span className="font-cairo text-[11px] text-[#75786f]">المبلغ المتبقي</span>
                  <span className="font-cairo font-bold text-[16px] text-[#b12515]">
                    {booking.payment.remaining.toLocaleString()} ر.س
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LEFT / SECONDARY COLUMN (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Smart Lock & Access Card */}
          <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 flex flex-col gap-4 w-full">
            <div className="flex items-center justify-between pb-2 border-b border-[#e5e8e2]">
              <div className="flex items-center gap-2">
                <KeyRound className="size-4 text-[#4b5940]" />
                <h2 className="font-cairo font-bold text-[#181d17] text-[16px]">
                  القفل الذكي والدخول
                </h2>
              </div>
              <span className="bg-[#eaf1e8] text-[#4b5940] px-2.5 py-0.5 rounded-full font-cairo font-semibold text-[11px]">
                {booking.accessCode.statusLabel}
              </span>
            </div>

            {/* Lock Device Info */}
            <div className="p-3 bg-[#fbfcf9] border border-[#e5e8e2] rounded-[10px] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="size-8 rounded-[8px] bg-white border border-[#e5e8e2] flex items-center justify-center text-[#4b5940]">
                  <LockKeyhole className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-cairo font-bold text-[13px] text-[#181d17]">
                    {booking.accessCode.lockModel || "القفل الذكي للوحدة"}
                  </span>
                  <span className="font-cairo text-[11px] text-[#75786f] flex items-center gap-1">
                    <Wifi className="size-3 text-[#3e8a5a]" /> متصل بالشبكة السحابية
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 font-cairo text-[11px] text-[#454840]">
                <BatteryCharging className="size-3.5 text-[#3e8a5a]" />
                <span>92%</span>
              </div>
            </div>

            {/* Passcode Display Box */}
            <div className="p-4 bg-[#f4f7f0] border border-[#d2dec9] rounded-[12px] flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-cairo text-[12px] text-[#454840]">رمز المرور المؤقت:</span>
                <span className="font-cairo text-[11px] text-[#4b5940]">صالح لفترة الإقامة فقط</span>
              </div>

              <div className="bg-white border border-[#d2dec9] p-3 rounded-[8px] flex items-center justify-between">
                <span className="font-mono font-bold text-[20px] text-[#181d17] tracking-widest">
                  {showAccessCode ? booking.accessCode.code : "••••••"}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAccessCode(!showAccessCode)}
                    className="p-1 text-[#75786f] hover:text-[#181d17] transition-colors cursor-pointer"
                    title={showAccessCode ? "إخفاء الرمز" : "إظهار الرمز"}
                  >
                    {showAccessCode ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="p-1 text-[#75786f] hover:text-[#181d17] transition-colors cursor-pointer"
                    title="نسخ الرمز"
                  >
                    {copiedCode ? <Check className="size-4 text-[#34422a]" /> : <Copy className="size-4" />}
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSendWhatsapp}
                className="w-full h-[40px] bg-[#25d366] hover:bg-[#20ba5a] text-white rounded-[10px] font-cairo font-bold text-[13px] flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
              >
                <MessageSquare className="size-4" />
                <span>إرسال الكود للضيف عبر الواتساب</span>
              </button>
            </div>
          </div>

          {/* Activity Log / Operations Timeline */}
          <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 flex flex-col gap-4 w-full">
            <h2 className="font-cairo font-bold text-[#181d17] text-[16px] pb-2 border-b border-[#e5e8e2]">
              سجل النشاطات
            </h2>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 relative">
                <div className="size-2 rounded-full bg-[#34422a] mt-2 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span className="font-cairo font-semibold text-[13px] text-[#181d17]">
                    تم إنشاء وتأكيد الحجز
                  </span>
                  <span className="font-cairo text-[11px] text-[#75786f]">
                    {booking.createdAt}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 relative">
                <div className="size-2 rounded-full bg-[#34422a] mt-2 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span className="font-cairo font-semibold text-[13px] text-[#181d17]">
                    تم توليد ومزامنة كود القفل الذكي ({booking.accessCode.code})
                  </span>
                  <span className="font-cairo text-[11px] text-[#75786f]">
                    {booking.createdAt}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 relative">
                <div className="size-2 rounded-full bg-[#3e8a5a] mt-2 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span className="font-cairo font-semibold text-[13px] text-[#181d17]">
                    تم استلام دفعة جزئية بقيمة {booking.payment.paid.toLocaleString()} ر.س
                  </span>
                  <span className="font-cairo text-[11px] text-[#75786f]">
                    {booking.createdAt}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MODALS */}
      <ExtendStayModal
        isOpen={isExtendOpen}
        onClose={() => setIsExtendOpen(false)}
        bookingReference={booking.reference}
        guestName={booking.guest.name}
        guestPhone={booking.guest.phone}
        unitName={booking.unit.name}
        unitType={booking.unit.type}
        currentCheckout={`${booking.checkOut.date} — ${booking.checkOut.time} (${booking.nights} ليالٍ)`}
        dailyPrice={booking.unit.dailyPrice}
        accessCode={booking.accessCode.code}
        onOpenChangeUnit={() => setIsChangeUnitOpen(true)}
        onConfirmSuccess={handleConfirmExtend}
      />

      <ChangeUnitModal
        isOpen={isChangeUnitOpen}
        onClose={() => setIsChangeUnitOpen(false)}
        currentUnitName={booking.unit.name}
        onSelectUnit={handleConfirmChangeUnit}
      />

      <CancelBookingModal
        isOpen={isCancelOpen}
        onClose={() => setIsCancelOpen(false)}
        bookingReference={booking.reference}
        guestName={booking.guest.name}
        stayPeriod={`${booking.checkIn.date} - ${booking.checkOut.date}`}
        unitName={`${booking.unit.name} (${booking.unit.type})`}
        onConfirmCancel={handleConfirmCancel}
      />
    </div>
  );
}
