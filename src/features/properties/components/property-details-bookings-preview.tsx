import Link from "next/link";
import Image from "next/image";

export function PropertyDetailsBookingsPreview() {
  return (
    <div
      className="bg-white rounded-[16px] p-[24px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[16px] w-full"
      dir="rtl"
    >
      {/* Header */}
      <div className="flex items-center justify-between w-full pb-[4px]">
        <div className="flex items-center gap-[8px]">
          <div className="size-[36px] rounded-[12px] bg-[#4b5940] flex items-center justify-center shadow-[0px_1px_1px_rgba(0,0,0,0.05)] shrink-0">
            <Image
              src="/assets/properties/details/7937dddc875bd7235c4fe6a1d612ebfe278b3039.svg"
              alt="الحجوزات القادمة"
              width={15}
              height={17}
              className="w-[15px] h-[17px]"
            />
          </div>
          <h2 className="text-[#181d17] font-bold text-[18px] leading-[28px]">
            الحجوزات القادمة
          </h2>
        </div>

        <span className="bg-[#ebefe6] text-[#454840] text-[11px] font-medium px-[12px] py-[4px] rounded-full">
          3 حجوزات مؤكدة هذا الأسبوع
        </span>
      </div>

      {/* Immediate Next Booking Highlight Card */}
      <div className="bg-[#f1f5eb] rounded-[12px] p-[16px] flex flex-col gap-[12px] w-full">
        {/* Next tag & confirmed badge */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-[6px]">
            <span className="size-[6px] rounded-full bg-[#34422a]" />
            <span className="text-[#54624c] font-bold text-[11px] leading-[16px]">
              الحجز القادم التالي
            </span>
          </div>

          <span className="bg-[#d8e8c7] text-[#34422a] text-[11px] font-bold px-[10px] py-[2px] rounded-full">
            مؤكد
          </span>
        </div>

        {/* Guest name & booking ref */}
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col gap-[2px]">
            <h3 className="text-[#181d17] font-bold text-[18px] leading-[28px]">
              سعود بن عبد الله العتيبي
            </h3>
            <div className="flex items-center gap-[6px]">
              <Image
                src="/assets/properties/details/fe01143a42955db095694c1084c4f28a5890bf9c.svg"
                alt=""
                width={14}
                height={13}
                className="w-[14px] h-[13px]"
              />
              <span className="text-[#75786f] text-[13px] leading-[20px]">
                حجز عبر واتساب API · نزيل معتمد
              </span>
            </div>
          </div>

          <span className="bg-white rounded-[6px] px-[8px] py-[4px] text-[#75786f] text-[11px] font-mono leading-[16px] shadow-[0px_1px_1px_rgba(0,0,0,0.02)]">
            #BK-9482
          </span>
        </div>

        {/* Stay details grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[8px] pt-[4px] border-t border-[rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-[6px]">
            <Image
              src="/assets/properties/details/f757c3c47c601864f72d1301221a6c4d6e211041.svg"
              alt=""
              width={12}
              height={12}
              className="size-[12px] shrink-0"
            />
            <span className="text-[#181d17] text-[13px] leading-[20px]">
              الوحدة 102 (الدور الأول)
            </span>
          </div>

          <div className="flex items-center gap-[6px]">
            <Image
              src="/assets/properties/details/ac351da6bd3ce4e19fa7df00a92c633860e911d0.svg"
              alt=""
              width={13}
              height={13}
              className="size-[13px] shrink-0"
            />
            <span className="text-[#34422a] font-medium text-[13px] leading-[20px]">
              اليوم · 4:30 مساءً
            </span>
          </div>

          <div className="sm:col-span-2 flex items-center gap-[6px] pt-[2px]">
            <Image
              src="/assets/properties/details/cb561664f8c2400dcfa086a4bb17fbc94c5cc239.svg"
              alt=""
              width={15}
              height={8}
              className="w-[15px] h-[8px] shrink-0"
            />
            <span className="text-[#454840] font-medium text-[11px] leading-[16px]">
              وصول ذاتي بالأقفال الذكية · تم إرسال الرمز للنزيل
            </span>
          </div>
        </div>
      </div>

      {/* Secondary Upcoming Booking */}
      <div className="bg-[#f1f5eb]/60 rounded-[12px] p-[10px] px-[12px] flex items-center justify-between w-full">
        <div className="flex items-center gap-[10px]">
          <div className="size-[32px] rounded-[8px] bg-white flex items-center justify-center shadow-[0px_1px_1px_rgba(0,0,0,0.05)] shrink-0">
            <Image
              src="/assets/properties/details/ecf86b974a43e0c4504d2d8fdc2ceb69f78e0c53.svg"
              alt=""
              width={12}
              height={12}
              className="size-[12px]"
            />
          </div>

          <div className="flex flex-col">
            <h4 className="text-[#181d17] font-bold text-[12px] leading-[18px]">
              م. فهد الخالدي
            </h4>
            <span className="text-[#75786f] font-medium text-[11px] leading-[16px]">
              الوحدة 204 · وصول غداً 2:00 م
            </span>
          </div>
        </div>

        <span className="text-[#54624c] font-semibold text-[11px] leading-[16px]">
          مسبق الدفع
        </span>
      </div>

      {/* Navigation Footer Button */}
      <Link
        href="/bookings"
        className="bg-[#ebefe6] hover:bg-[#d8e8cb] transition-colors rounded-[12px] py-[12px] flex items-center justify-center gap-[8px] w-full text-[#34422a] font-bold text-[14px] leading-[20px] mt-[4px]"
      >
        <span>عرض جميع الحجوزات والجدول الزمني</span>
        <Image
          src="/assets/properties/details/f790790b0de4e8b1b70bd8e6b87f81ef013d0677.svg"
          alt=""
          width={12}
          height={12}
          className="size-[12px] rotate-180"
        />
      </Link>
    </div>
  );
}
