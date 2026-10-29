import Link from "next/link";
import Image from "next/image";

interface UnitSnapshot {
  id: string;
  name: string;
  floor: string;
  area: string;
  statusBadge: {
    label: string;
    bg: string;
    text: string;
  };
  highlightText: string;
  highlightColor: string;
  iconSrc: string;
}

const UNITS_DATA: UnitSnapshot[] = [
  {
    id: "101",
    name: "استوديو فاخر مفروش",
    floor: "الدور الأول",
    area: "52 م²",
    statusBadge: {
      label: "مستأجرة",
      bg: "bg-[#d8e8cb]",
      text: "text-[#5a6952]",
    },
    highlightText: "كود دخول نشط",
    highlightColor: "text-[#34422a]",
    iconSrc: "/assets/properties/details/a3999370e579383ec383d5ab160e1a924c327b5b.svg",
  },
  {
    id: "102",
    name: "شقة غرفة نوم وصالة",
    floor: "الدور الأول",
    area: "84 م²",
    statusBadge: {
      label: "مستأجرة",
      bg: "bg-[#d8e8cb]",
      text: "text-[#5a6952]",
    },
    highlightText: "تسجيل وصول اليوم",
    highlightColor: "text-[#34422a]",
    iconSrc: "/assets/properties/details/a3999370e579383ec383d5ab160e1a924c327b5b.svg",
  },
  {
    id: "103",
    name: "شقة ديلوكس غرفتين",
    floor: "الدور الأول",
    area: "118 م²",
    statusBadge: {
      label: "متاحة",
      bg: "bg-[#d8e8c7]",
      text: "text-[#3d4b33]",
    },
    highlightText: "جاهزة للتسكين الفوري",
    highlightColor: "text-[#54624c]",
    iconSrc: "/assets/properties/details/3723195563f45cdb732a19ca696f134f975244c1.svg",
  },
];

export function PropertyDetailsUnitsPreview() {
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
              src="/assets/properties/details/a22f40547162e99f777424f7ee69990b2b9f1af1.svg"
              alt="الوحدات التابعة"
              width={15}
              height={15}
              className="size-[15px]"
            />
          </div>
          <h2 className="text-[#181d17] font-bold text-[18px] leading-[28px]">
            الوحدات التابعة
          </h2>
        </div>

        <span className="bg-[#d8e8cb] text-[#34422a] text-[11px] font-medium px-[10px] py-[4px] rounded-full">
          12 وحدة مسجلة
        </span>
      </div>

      {/* 3 Unit Snapshot Cards */}
      <div className="flex flex-col gap-[8px] w-full">
        {UNITS_DATA.map((unit) => (
          <div
            key={unit.id}
            className="bg-[#f1f5eb] rounded-[12px] p-[16px] flex items-center justify-between w-full transition-shadow hover:shadow-sm"
          >
            {/* Unit info (right in RTL) */}
            <div className="flex items-center gap-[16px]">
              {/* Unit number square badge */}
              <div className="bg-white rounded-[12px] h-[44px] min-w-[36px] px-[8px] flex items-center justify-center shadow-[0px_1px_1px_rgba(0,0,0,0.05)] shrink-0">
                <span className="text-[#34422a] font-bold text-[18px] leading-[28px]">
                  {unit.id}
                </span>
              </div>

              <div className="flex flex-col gap-[2px]">
                <div className="flex items-center gap-[8px]">
                  <Image
                    src={unit.iconSrc}
                    alt=""
                    width={11}
                    height={14}
                    className="w-[11px] h-[14px] shrink-0"
                  />
                  <h3 className="text-[#181d17] font-bold text-[14px] leading-[20px]">
                    {unit.name}
                  </h3>
                </div>

                <div className="flex items-center gap-[6px] text-[11px] leading-[16px] flex-wrap">
                  <span className={`font-medium ${unit.highlightColor}`}>
                    {unit.highlightText}
                  </span>
                  <span className="text-[#75786f]">•</span>
                  <span className="text-[#75786f] font-medium">
                    مساحة {unit.area}
                  </span>
                  <span className="text-[#75786f]">•</span>
                  <span className="text-[#75786f] font-medium">
                    {unit.floor}
                  </span>
                </div>
              </div>
            </div>

            {/* Status badge (left in RTL) */}
            <span
              className={`${unit.statusBadge.bg} ${unit.statusBadge.text} text-[11px] font-bold px-[12px] py-[4px] rounded-full shrink-0`}
            >
              {unit.statusBadge.label}
            </span>
          </div>
        ))}
      </div>

      {/* Navigation Footer Button */}
      <Link
        href="/units"
        className="bg-[#ebefe6] hover:bg-[#d8e8cb] transition-colors rounded-[12px] py-[12px] flex items-center justify-center gap-[8px] w-full text-[#34422a] font-bold text-[14px] leading-[20px] mt-[4px]"
      >
        <span>عرض جميع الوحدات (12 وحدة)</span>
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

