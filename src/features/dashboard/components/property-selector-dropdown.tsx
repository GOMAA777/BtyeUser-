"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Building2, Home, Check, Search, PlusCircle } from "lucide-react";
import { toast, showToast } from "@/lib/toast";

export interface PropertyOption {
  id: string;
  name: string;
  location: string;
  unitsText: string;
  status: string;
  type: "building" | "villa";
}

const propertiesList: PropertyOption[] = [
  {
    id: "1",
    name: "عمارة النخيل",
    location: "الرياض",
    unitsText: "12 وحدة سكنية",
    status: "نشط",
    type: "building",
  },
  {
    id: "2",
    name: "فيلا الياسمين",
    location: "الرياض",
    unitsText: "6 وحدات",
    status: "نشط",
    type: "villa",
  },
];

export function PropertySelectorDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedProperty =
    propertiesList.find((p) => p.id === selectedId) || propertiesList[0];

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredProperties = propertiesList.filter((p) =>
    p.name.includes(searchQuery) || p.location.includes(searchQuery)
  );

  return (
    <div className="relative inline-block text-right" ref={dropdownRef}>
      {/* Trigger Button in Navbar */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-[#F1F5EB] hover:bg-[#E8EDE1] border border-[#DFE4DB]/80 flex items-center justify-between gap-[8px] px-[14px] py-[6px] rounded-[12px] transition-all cursor-pointer shadow-sm select-none"
      >
        <span className="font-cairo font-semibold text-[12px] leading-[18px] text-[#181D17]">
          {selectedProperty.name} - {selectedProperty.location}
        </span>
        <ChevronDown
          size={14}
          className={`text-[#454840] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Floating Dropdown Menu Card */}
      {isOpen && (
        <div
          dir="rtl"
          className="absolute right-0 top-[calc(100%+8px)] w-[330px] sm:w-[350px] bg-white rounded-[16px] p-[16px] shadow-[0px_8px_30px_rgba(0,0,0,0.12)] border border-[#DFE4DB]/80 z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          {/* 1. Header: 'عقاراتي' + '2 عقار' + 'تبديل سريع' */}
          <div className="flex items-center justify-between pb-[12px] w-full">
            <div className="flex items-center gap-[8px]">
              <h3 className="font-cairo font-bold text-[16px] leading-[22px] text-[#181D17]">
                عقاراتي
              </h3>
              <span className="bg-[#EEF2E6] text-[#34422A] font-cairo font-semibold text-[11px] leading-[14px] px-[8px] py-[2px] rounded-full">
                {propertiesList.length} عقار
              </span>
            </div>
            <span className="font-cairo font-medium text-[11px] leading-[14px] text-[#75786F]">
              تبديل سريع
            </span>
          </div>

          {/* 2. Search Input Inside Dropdown */}
          <div className="pb-[12px] w-full">
            <div className="bg-[#F1F5EB] h-[36px] rounded-[10px] px-[12px] flex items-center w-full border border-transparent focus-within:border-[#34422A]/40 transition-all">
              <input
                type="text"
                dir="rtl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في العقارات..."
                className="bg-transparent outline-none w-full font-cairo text-[12px] text-[#181D17] placeholder:text-[#75786F]"
              />
              <Search size={14} className="text-[#75786F] shrink-0 mr-[6px]" />
            </div>
          </div>

          {/* 3. Properties Options List */}
          <div className="flex flex-col gap-[6px] w-full">
            {filteredProperties.length === 0 ? (
              <div className="py-[16px] text-center font-cairo text-[12px] text-[#75786F]">
                لا توجد نتائج مطابقة
              </div>
            ) : (
              filteredProperties.map((property) => {
                const isSelected = property.id === selectedId;
                return (
                  <div
                    key={property.id}
                    onClick={() => {
                      setSelectedId(property.id);
                      setIsOpen(false);
                      toast.success(`تم التبديل إلى ${property.name}`);
                    }}
                    className={`flex items-center justify-between p-[10px] rounded-[12px] cursor-pointer transition-all ${
                      isSelected
                        ? "bg-[#EEF2E6] border border-[#DFE4DB]/70"
                        : "hover:bg-neutral-50 border border-transparent"
                    }`}
                  >
                    {/* Right side: Icon Box + Details */}
                    <div className="flex items-center gap-[10px]">
                      {/* Icon box */}
                      <div
                        className={`size-[38px] rounded-[10px] flex items-center justify-center shrink-0 ${
                          isSelected
                            ? "bg-[#34422A] text-white"
                            : "bg-[#E5EAE0] text-[#34422A]"
                        }`}
                      >
                        {property.type === "building" ? (
                          <Building2 size={18} />
                        ) : (
                          <Home size={18} />
                        )}
                      </div>

                      {/* Text info */}
                      <div className="flex flex-col items-start">
                        <div className="flex items-center gap-[6px]">
                          <span className="font-cairo font-bold text-[13px] leading-[18px] text-[#181D17]">
                            {property.name}
                          </span>
                          <span className="text-[#75786F] text-[10px]">•</span>
                          <span
                            className={`font-cairo font-semibold text-[10.5px] leading-[14px] ${
                              isSelected ? "text-[#34422A]" : "text-[#75786F]"
                            }`}
                          >
                            {property.status}
                          </span>
                        </div>
                        <span className="font-cairo font-normal text-[11px] leading-[16px] text-[#75786F] pt-[1px]">
                          {property.location} · {property.unitsText}
                        </span>
                      </div>
                    </div>

                    {/* Left side: Selected Checkmark */}
                    {isSelected && (
                      <div className="size-[22px] rounded-full bg-[#34422A] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Check size={13} strokeWidth={2.6} />
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* 4. Divider */}
          <div className="border-t border-[#DFE4DB]/80 my-[12px] w-full" />

          {/* 5. Footer CTA: '+ إضافة عقار جديد' */}
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              showToast.underDevelopment("إضافة عقار جديد");
            }}
            className="w-full flex items-center justify-center gap-[6px] py-[4px] font-cairo font-bold text-[13px] leading-[18px] text-[#181D17] hover:text-[#34422A] transition-colors cursor-pointer"
          >
            <PlusCircle size={16} className="text-[#181D17]" />
            <span>إضافة عقار جديد</span>
          </button>
        </div>
      )}
    </div>
  );
}
