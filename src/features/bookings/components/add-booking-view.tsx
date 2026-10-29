"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Home,
  Info,
  KeyRound,
  Lock,
  Phone,
  ShieldCheck,
  User,
  Users,
} from "lucide-react";
import { addBookingAction } from "../actions/add-booking-action";
import { showToast } from "@/lib/toast";

interface UnitOption {
  id: string;
  number: string;
  type: string;
  floor: string;
  pricePerNight: number;
  available: boolean;
  statusLabel: string;
}

const unitOptions: UnitOption[] = [
  {
    id: "101",
    number: "وحدة 101",
    type: "استوديو ديلوكس · الدور 1",
    floor: "الدور 1",
    pricePerNight: 450,
    available: true,
    statusLabel: "متاح للتسكين",
  },
  {
    id: "105",
    number: "وحدة 105",
    type: "شقة عائلية · الدور 1",
    floor: "الدور 1",
    pricePerNight: 680,
    available: true,
    statusLabel: "متاح للتسكين",
  },
  {
    id: "204",
    number: "وحدة 204",
    type: "جناح تنفيذي · الدور 2",
    floor: "الدور 2",
    pricePerNight: 850,
    available: false,
    statusLabel: "محجوز حالياً",
  },
];

export function AddBookingView() {
  const router = useRouter();
  const [selectedUnitId, setSelectedUnitId] = useState("101");
  const [property, setProperty] = useState("عمارة النخيل - الرياض (حي الصحافة، شارع العليا)");
  const [guestName, setGuestName] = useState("أحمد محمد");
  const [guestPhone, setGuestPhone] = useState("+966 55 123 4567");
  const [guestEmail, setGuestEmail] = useState("ahmed@example.com");
  const [nationalId, setNationalId] = useState("1088291048");
  const [checkInDate, setCheckInDate] = useState("2026-08-26");
  const [checkInTime, setCheckInTime] = useState("02:00 م");
  const [checkOutDate, setCheckOutDate] = useState("2026-08-30");
  const [checkOutTime, setCheckOutTime] = useState("12:00 م");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [source, setSource] = useState("حجز مباشر");
  const [autoLockCode, setAutoLockCode] = useState(true);
  const [sendWhatsapp, setSendWhatsapp] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedUnit = unitOptions.find((u) => u.id === selectedUnitId) || unitOptions[0];
  const nights = 4;
  const stayCost = selectedUnit.pricePerNight * nights;
  const cleaningFee = 150;
  const vat = (stayCost + cleaningFee) * 0.15;
  const totalAmount = stayCost + cleaningFee + vat;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await addBookingAction({
        property,
        unitId: selectedUnit.id,
        unitName: selectedUnit.number,
        unitType: selectedUnit.type,
        dailyPrice: selectedUnit.pricePerNight,
        guestName,
        guestPhone,
        guestEmail,
        nationalId,
        checkInDate,
        checkInTime,
        checkOutDate,
        checkOutTime,
        adults,
        children,
        autoLockCode,
        flexibleCheckIn: true,
        paymentMethod: source,
      });

      if (res.success) {
        showToast.success("تم إنشاء الحجز بنجاح وتوليد كود الدخول");
        router.push("/bookings/success");
      } else {
        showToast.error(res.error || "تعذر إنشاء الحجز");
      }
    } catch (err) {
      showToast.error("حدث خطأ غير متوقع");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#f1f5eb] min-h-screen p-[24px] lg:p-[32px] flex flex-col gap-[20px] w-full pb-32"
      dir="rtl"
    >
      {/* 1. TOP HERO GREETING BAR */}
      <div
        className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 lg:px-[32px] lg:py-[24px] flex flex-col md:flex-row md:items-center justify-between gap-4 w-full"
        data-node-id="1:6310"
        data-name="Section - TOP HERO GREETING BAR"
      >
        <div className="flex flex-col items-start gap-1">
          <h1
            className="font-cairo font-bold text-[#181d17] text-[24px] leading-[34px]"
            data-node-id="1:6315"
          >
            إضافة حجز جديد
          </h1>
          <p
            className="font-cairo font-normal text-[#75786f] text-[14px] leading-[22px]"
            data-node-id="1:6318"
          >
            أدخل بيانات الحجز والإقامة لتسجيل التسكين وإصدار الرمز الذكي.
          </p>
        </div>

        <Link
          href="/bookings"
          className="bg-[#f1f5eb] hover:bg-[#e4ebd9] transition-colors drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[38px] px-[16px] rounded-[12px] flex items-center gap-[6px] shrink-0 self-start md:self-center"
          data-node-id="1:6319"
          data-name="Link"
        >
          <ArrowRight className="size-4 text-[#181d17]" />
          <span
            className="font-cairo font-semibold text-[#181d17] text-[12px] leading-[18px]"
            data-node-id="1:6323"
          >
            العودة إلى الحجوزات
          </span>
        </Link>
      </div>

      {/* 2. Property Context Banner */}
      <div
        className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[12px] p-4 lg:px-[24px] lg:py-[18px] flex items-center justify-between w-full"
        data-node-id="1:6324"
        data-name="Property Context Banner"
      >
        <div className="flex flex-col items-start gap-1">
          <div className="flex items-center gap-2">
            <span
              className="bg-[#ebefe6] px-[10px] py-[2px] rounded-full font-cairo font-medium text-[#75786f] text-[11px] leading-[16px]"
              data-node-id="1:6329"
            >
              عمارة سكنية
            </span>
            <h2
              className="font-cairo font-semibold text-[#181d17] text-[18px] leading-[28px]"
              data-node-id="1:6331"
            >
              عمارة النخيل - الرياض
            </h2>
          </div>
          <p
            className="font-cairo font-normal text-[#75786f] text-[13px] leading-[20px]"
            data-node-id="1:6335"
          >
            حي الياسمين · طريق أنس بن مالك · كود المنشأة #NK-104
          </p>
        </div>
      </div>

      {/* 3. MAIN OPERATIONAL FORM CONTAINER (Two-Column Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
        {/* RIGHT / PRIMARY 8 COLUMNS */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* SECTION 1: الوحدة والعقار */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 flex flex-col gap-5 w-full"
            data-node-id="1:6358"
            data-name="Section - SECTION 1"
          >
            <div className="flex items-center justify-between border-b border-[#e5e8e2] pb-3">
              <div className="flex items-center gap-2">
                <div className="size-[28px] rounded-[4px] bg-[rgba(48,59,37,0.1)] flex items-center justify-center text-[#303b25]">
                  <Home className="size-4" />
                </div>
                <h2 className="font-cairo font-bold text-[#1a1c16] text-[18px] leading-[26px]">
                  الوحدة والعقار
                </h2>
              </div>
              <span className="bg-[#ebefe6] px-[10px] py-[3px] rounded-full font-cairo font-medium text-[#75786f] text-[11px]">
                مطلوب
              </span>
            </div>

            {/* Property Selector */}
            <div className="flex flex-col gap-2">
              <label className="font-cairo font-semibold text-[#181d17] text-[13px]">
                العقار المخصص
              </label>
              <select
                value={property}
                onChange={(e) => setProperty(e.target.value)}
                className="w-full h-[42px] px-3 bg-[#f6f7f4] border border-[#e5e8e2] rounded-[10px] font-cairo text-[13px] text-[#181d17] outline-none focus:border-[#4b5940]"
              >
                <option value="عمارة النخيل - الرياض (حي الصحافة، شارع العليا)">
                  عمارة النخيل - الرياض (حي الصحافة، شارع العليا)
                </option>
              </select>
              <p className="font-cairo text-[12px] text-[#75786f]">
                يتم إظهار الوحدات المتاحة بناءً على فترة الإقامة
              </p>
            </div>

            {/* Unit Cards Selector */}
            <div className="flex flex-col gap-3">
              <label className="font-cairo font-semibold text-[#181d17] text-[13px]">
                اختيار الوحدة السكنية
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {unitOptions.map((unit) => {
                  const isSelected = selectedUnitId === unit.id;
                  const isLocked = !unit.available;

                  return (
                    <div
                      key={unit.id}
                      onClick={() => !isLocked && setSelectedUnitId(unit.id)}
                      className={`p-4 rounded-[12px] border transition-all flex flex-col justify-between gap-3 text-right ${
                        isLocked
                          ? "bg-[#fafbfa] border-[#e5e8e2] opacity-60 cursor-not-allowed"
                          : isSelected
                          ? "bg-[#f1f6ec] border-[#4b5940] shadow-[0px_2px_4px_rgba(75,89,64,0.12)] cursor-pointer ring-1 ring-[#4b5940]"
                          : "bg-white border-[#e5e8e2] hover:border-[#b8c2b3] cursor-pointer"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span
                          className={`font-cairo font-bold text-[14px] ${
                            isSelected ? "text-[#34422a]" : "text-[#181d17]"
                          }`}
                        >
                          {unit.number}
                        </span>
                        {isLocked ? (
                          <Lock className="size-4 text-[#75786f]" />
                        ) : isSelected ? (
                          <CheckCircle2 className="size-4 text-[#4b5940]" />
                        ) : (
                          <div className="size-4 rounded-full border border-[#cbd2c7]" />
                        )}
                      </div>

                      <div className="flex flex-col gap-0.5">
                        <span className="font-cairo text-[12px] text-[#75786f]">
                          {unit.type}
                        </span>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="font-cairo font-bold text-[#181d17] text-[16px]">
                            {unit.pricePerNight}
                          </span>
                          <span className="font-cairo text-[11px] text-[#75786f]">
                            ر.س/ليلة
                          </span>
                        </div>
                      </div>

                      <span
                        className={`font-cairo text-[11px] px-2 py-0.5 rounded-full self-start ${
                          isLocked
                            ? "bg-[#f1f2ed] text-[#75786f]"
                            : "bg-[#e2edd8] text-[#34422a] font-semibold"
                        }`}
                      >
                        {unit.statusLabel}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* SECTION 2: بيانات الضيف الأساسية */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 flex flex-col gap-5 w-full"
            data-node-id="1:6443"
            data-name="Section - SECTION 2"
          >
            <div className="flex items-center justify-between border-b border-[#e5e8e2] pb-3">
              <div className="flex items-center gap-2">
                <div className="size-[28px] rounded-[4px] bg-[rgba(48,59,37,0.1)] flex items-center justify-center text-[#303b25]">
                  <User className="size-4" />
                </div>
                <h2 className="font-cairo font-bold text-[#1a1c16] text-[18px] leading-[26px]">
                  بيانات الضيف الأساسية
                </h2>
              </div>
              <span className="bg-[#dbe7c3] px-[10px] py-[3px] rounded-full font-cairo font-semibold text-[#151e08] text-[11px]">
                نزيل متكرر (سجل سابق 4 حجوزات)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-cairo font-semibold text-[#181d17] text-[13px]">
                  اسم الضيف الكامل
                </label>
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="أدخل اسم الضيف"
                  className="w-full h-[42px] px-3 bg-[#f6f7f4] border border-[#e5e8e2] rounded-[10px] font-cairo text-[13px] text-[#181d17] outline-none focus:border-[#4b5940]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-cairo font-semibold text-[#181d17] text-[13px]">
                  رقم الجوال للتواصل الآلي
                </label>
                <input
                  type="tel"
                  required
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  placeholder="+966 5X XXX XXXX"
                  className="w-full h-[42px] px-3 bg-[#f6f7f4] border border-[#e5e8e2] rounded-[10px] font-cairo text-[13px] text-[#181d17] outline-none focus:border-[#4b5940] text-left"
                  dir="ltr"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-cairo font-semibold text-[#181d17] text-[13px]">
                  البريد الإلكتروني (اختياري)
                </label>
                <input
                  type="email"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full h-[42px] px-3 bg-[#f6f7f4] border border-[#e5e8e2] rounded-[10px] font-cairo text-[13px] text-[#181d17] outline-none focus:border-[#4b5940] text-left"
                  dir="ltr"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-cairo font-semibold text-[#181d17] text-[13px]">
                  رقم الهوية الوطنية / الإقامة
                </label>
                <input
                  type="text"
                  required
                  value={nationalId}
                  onChange={(e) => setNationalId(e.target.value)}
                  placeholder="10XXXXXXXX"
                  className="w-full h-[42px] px-3 bg-[#f6f7f4] border border-[#e5e8e2] rounded-[10px] font-cairo text-[13px] text-[#181d17] outline-none focus:border-[#4b5940]"
                />
              </div>
            </div>
          </div>

          {/* SECTION 3: تفاصيل فترة الإقامة */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 flex flex-col gap-5 w-full"
            data-node-id="1:6509"
            data-name="Section - SECTION 3"
          >
            <div className="flex items-center justify-between border-b border-[#e5e8e2] pb-3">
              <div className="flex items-center gap-2">
                <div className="size-[28px] rounded-[4px] bg-[rgba(48,59,37,0.1)] flex items-center justify-center text-[#303b25]">
                  <Calendar className="size-4" />
                </div>
                <h2 className="font-cairo font-bold text-[#1a1c16] text-[18px] leading-[26px]">
                  تفاصيل فترة الإقامة
                </h2>
              </div>
              <span className="bg-[#dae7c7] px-[12px] py-[3px] rounded-full font-cairo font-bold text-[#131f0b] text-[12px]">
                مدة الإقامة: {nights} ليالٍ
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Check-in */}
              <div className="p-4 bg-[#fbfcf9] border border-[#e5e8e2] rounded-[12px] flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[#4b5940]">
                  <Clock className="size-4" />
                  <span className="font-cairo font-bold text-[13px]">
                    تاريخ ووقت الوصول (Check-in)
                  </span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="flex-1 h-[40px] px-3 bg-white border border-[#e5e8e2] rounded-[8px] font-cairo text-[13px]"
                  />
                  <select
                    value={checkInTime}
                    onChange={(e) => setCheckInTime(e.target.value)}
                    className="w-[100px] h-[40px] px-2 bg-white border border-[#e5e8e2] rounded-[8px] font-cairo text-[13px]"
                  >
                    <option value="02:00 م">02:00 م</option>
                    <option value="03:00 م">03:00 م</option>
                    <option value="04:00 م">04:00 م</option>
                  </select>
                </div>
              </div>

              {/* Check-out */}
              <div className="p-4 bg-[#fbfcf9] border border-[#e5e8e2] rounded-[12px] flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[#4b5940]">
                  <Clock className="size-4" />
                  <span className="font-cairo font-bold text-[13px]">
                    تاريخ ووقت المغادرة (Check-out)
                  </span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="flex-1 h-[40px] px-3 bg-white border border-[#e5e8e2] rounded-[8px] font-cairo text-[13px]"
                  />
                  <select
                    value={checkOutTime}
                    onChange={(e) => setCheckOutTime(e.target.value)}
                    className="w-[100px] h-[40px] px-2 bg-white border border-[#e5e8e2] rounded-[8px] font-cairo text-[13px]"
                  >
                    <option value="12:00 م">12:00 م</option>
                    <option value="01:00 م">01:00 م</option>
                    <option value="02:00 م">02:00 م</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Guests Count */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-cairo font-semibold text-[#181d17] text-[13px]">
                  عدد البالغين
                </label>
                <input
                  type="number"
                  min={1}
                  max={6}
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  className="w-full h-[40px] px-3 bg-[#f6f7f4] border border-[#e5e8e2] rounded-[8px] font-cairo text-[13px]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-cairo font-semibold text-[#181d17] text-[13px]">
                  عدد الأطفال
                </label>
                <input
                  type="number"
                  min={0}
                  max={4}
                  value={children}
                  onChange={(e) => setChildren(Number(e.target.value))}
                  className="w-full h-[40px] px-3 bg-[#f6f7f4] border border-[#e5e8e2] rounded-[8px] font-cairo text-[13px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* LEFT / SECONDARY 4 COLUMNS: Summary Ledger & Actions */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* SECTION 5: مصدر الحجز والملخص المالي */}
          <div
            className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 flex flex-col gap-5 w-full"
            data-node-id="1:6573"
            data-name="Section - SECTION 5"
          >
            <div className="border-b border-[#e5e8e2] pb-3">
              <h2 className="font-cairo font-bold text-[#1a1c16] text-[18px] leading-[26px]">
                الملخص المالي ومصدر الحجز
              </h2>
            </div>

            {/* Source select */}
            <div className="flex flex-col gap-2">
              <label className="font-cairo font-semibold text-[#181d17] text-[13px]">
                قناة الحجز (المصدر)
              </label>
              <select
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="w-full h-[40px] px-3 bg-[#f6f7f4] border border-[#e5e8e2] rounded-[10px] font-cairo text-[13px]"
              >
                <option value="حجز مباشر">حجز مباشر</option>
                <option value="Whatsapp API">Whatsapp API</option>
                <option value="Airbnb">Airbnb</option>
                <option value="Booking.com">Booking.com</option>
              </select>
            </div>

            {/* Smart lock toggle card */}
            <div className="p-3.5 bg-[#f5f8f2] border border-[#d9e5cf] rounded-[12px] flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <KeyRound className="size-4 text-[#4b5940]" />
                  <span className="font-cairo font-bold text-[12px] text-[#2d3a24]">
                    كود القفل الذكي التلقائي
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={autoLockCode}
                  onChange={(e) => setAutoLockCode(e.target.checked)}
                  className="size-4 accent-[#4b5940] cursor-pointer"
                />
              </div>
              <p className="font-cairo text-[11px] text-[#55634d] leading-[16px]">
                سيتم إصدار كود دخول مؤقت ومزامنته مع قفل الوحدة فور تأكيد الحجز.
              </p>
            </div>

            {/* Price Ledger */}
            <div className="flex flex-col gap-2.5 pt-2 border-t border-[#e5e8e2]">
              <div className="flex justify-between font-cairo text-[13px] text-[#454840]">
                <span>
                  سعر الإقامة ({nights} ليالٍ × {selectedUnit.pricePerNight} ر.س)
                </span>
                <span className="font-semibold text-[#181d17]">{stayCost.toLocaleString()} ر.س</span>
              </div>
              <div className="flex justify-between font-cairo text-[13px] text-[#454840]">
                <span>رسوم النظافة والخدمات</span>
                <span className="font-semibold text-[#181d17]">{cleaningFee} ر.س</span>
              </div>
              <div className="flex justify-between font-cairo text-[13px] text-[#454840]">
                <span>ضريبة القيمة المضافة (15%)</span>
                <span className="font-semibold text-[#181d17]">{vat.toFixed(2)} ر.س</span>
              </div>
              <div className="flex justify-between font-cairo text-[15px] font-bold text-[#181d17] pt-3 border-t border-[#e5e8e2]">
                <span>الإجمالي الكلي</span>
                <span className="text-[#34422a] text-[18px]">{totalAmount.toLocaleString()} ر.س</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Sticky Action Area */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#e5e8e2] px-6 lg:px-[32px] py-4 shadow-[0px_-4px_16px_rgba(0,0,0,0.06)]"
        data-node-id="1:6343"
        data-name="Bottom Sticky Action Area"
        dir="rtl"
      >
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="font-cairo text-[12px] text-[#75786f] text-center sm:text-right"
            data-node-id="1:6356"
          >
            عند الضغط علي تاكيد الحجز سيتم حجز الوحدة وتحويلها تلقائيا الي محجوزة
          </p>

          <div
            className="flex items-center gap-3 w-full sm:w-auto justify-end"
            data-node-id="1:6345"
            data-name="Buttons Hierarchy"
          >
            <Link
              href="/bookings"
              className="px-6 py-2.5 rounded-[12px] border border-[#e5e8e2] font-cairo font-semibold text-[13px] text-[#454840] hover:bg-[#f6f7f4] transition-colors"
              data-node-id="1:6353"
            >
              إلغاء
            </Link>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#34422a] hover:bg-[#283420] active:scale-[0.98] disabled:opacity-60 text-white px-8 py-2.5 rounded-[12px] font-cairo font-bold text-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] transition-all cursor-pointer"
              data-node-id="1:6346"
            >
              {isSubmitting ? "جاري إنشاء الحجز..." : "تأكيد الحجز"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
