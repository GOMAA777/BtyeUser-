"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { UnitItem } from "../data/units-data";
import { UnitActionsMenu } from "./unit-actions-menu";
import { showToast } from "@/lib/toast";

interface UnitsTableProps {
  units: UnitItem[];
  totalCount: number;
  onDeleteUnit: (id: string) => void;
  onArchiveUnit: (id: string) => void;
}

export function UnitsTable({
  units,
  totalCount,
  onDeleteUnit,
  onArchiveUnit,
}: UnitsTableProps) {
  const router = useRouter();
  const [activeMenuUnitId, setActiveMenuUnitId] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenuUnitId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleMenu = (unitId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMenuUnitId((prev) => (prev === unitId ? null : unitId));
  };

  const handleView = (unit: UnitItem) => {
    setActiveMenuUnitId(null);
    showToast.success(`عرض تفاصيل: ${unit.unitNumber}`);
    router.push(`/units/${unit.id}`);
  };

  const handleEdit = (unit: UnitItem) => {
    setActiveMenuUnitId(null);
    showToast.info(`تعديل: ${unit.unitNumber}`);
    router.push("/units/new");
  };

  const handleDelete = (unit: UnitItem) => {
    setActiveMenuUnitId(null);
    onDeleteUnit(unit.id);
    showToast.success(`تم حذف ${unit.unitNumber} بنجاح`);
  };

  const handleArchive = (unit: UnitItem) => {
    setActiveMenuUnitId(null);
    onArchiveUnit(unit.id);
    showToast.info(`تم أرشفة ${unit.unitNumber}`);
  };

  const renderStatusBadge = (status: UnitItem["status"]) => {
    switch (status) {
      case "booked":
        return (
          <span className="inline-flex items-center gap-[6px] w-fit bg-[#e3f2fd] border border-[rgba(187,222,251,0.6)] px-[11px] py-[4px] rounded-full whitespace-nowrap">
            <span className="bg-[#1976d2] size-[6px] rounded-full shrink-0" />
            <span className="font-cairo font-semibold text-[#1976d2] text-[12px] leading-[16px]">
              محجوزة
            </span>
          </span>
        );
      case "available":
        return (
          <span className="inline-flex items-center gap-[6px] w-fit bg-[#e8f5e9] border border-[#c8e6c9] px-[11px] py-[4px] rounded-full whitespace-nowrap">
            <span className="bg-[#2e7d32] size-[6px] rounded-full shrink-0" />
            <span className="font-cairo font-bold text-[#2e7d32] text-[12px] leading-[16px]">
              متاحة
            </span>
          </span>
        );
      case "cleaning":
        return (
          <span className="inline-flex items-center gap-[6px] w-fit bg-[#fef3c7] border border-[#fde68a] px-[11px] py-[4px] rounded-full whitespace-nowrap">
            <span className="bg-[#d97706] size-[6px] rounded-full shrink-0" />
            <span className="font-cairo font-bold text-[#d97706] text-[12px] leading-[16px]">
              تحت التنظيف
            </span>
          </span>
        );
      case "maintenance":
        return (
          <span className="inline-flex items-center gap-[6px] w-fit bg-[#fee2e2] border border-[#fecaca] px-[11px] py-[4px] rounded-full whitespace-nowrap">
            <span className="bg-[#dc2626] size-[6px] rounded-full shrink-0" />
            <span className="font-cairo font-bold text-[#dc2626] text-[12px] leading-[16px]">
              تحت الصيانة
            </span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="bg-white border border-[#e5e8e2] rounded-[16px] overflow-hidden w-full flex flex-col"
      data-node-id="1:4401"
      data-name="Section - Main High-Fidelity Table Container"
      dir="rtl"
    >
      {/* Table Scroll Wrapper */}
      <div className="overflow-x-auto w-full custom-scrollbar">
        <table className="w-full min-w-[920px] border-collapse text-right">
          {/* Table Header */}
          <thead>
            <tr
              className="bg-[#f9faf8] border-b border-[#e5e8e2] h-[62px]"
              data-node-id="1:4405"
              data-name="Header → Row"
            >
              <th className="font-cairo font-bold text-[#73786f] text-[11px] uppercase tracking-[0.55px] px-[24px] py-[16px] text-right">
                الوحدة
              </th>
              <th className="font-cairo font-bold text-[#73786f] text-[11px] uppercase tracking-[0.55px] px-[24px] py-[16px] text-right">
                العقار
              </th>
              <th className="font-cairo font-bold text-[#73786f] text-[11px] uppercase tracking-[0.55px] px-[24px] py-[16px] text-right">
                النوع
              </th>
              <th className="font-cairo font-bold text-[#73786f] text-[11px] uppercase tracking-[0.55px] px-[24px] py-[16px] text-right">
                الدور
              </th>
              <th className="font-cairo font-bold text-[#73786f] text-[11px] uppercase tracking-[0.55px] px-[24px] py-[16px] text-right">
                السعر / ليلة
              </th>
              <th className="font-cairo font-bold text-[#73786f] text-[11px] uppercase tracking-[0.55px] px-[24px] py-[16px] text-right">
                الضيف الحالي
              </th>
              <th className="font-cairo font-bold text-[#73786f] text-[11px] uppercase tracking-[0.55px] px-[24px] py-[16px] text-right">
                الحالة
              </th>
              <th className="font-cairo font-bold text-[#73786f] text-[11px] uppercase tracking-[0.55px] px-[24px] py-[16px] text-center w-[90px]">
                الإجراءات
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-[#f0f2ed]">
            {units.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-12 text-center text-[#73786f] font-cairo">
                  لا توجد وحدات مطابقة للبحث الحالي.
                </td>
              </tr>
            ) : (
              units.map((unit) => (
                <tr
                  key={unit.id}
                  className="hover:bg-[#fafbf9] transition-colors h-[64px]"
                  data-name="Row"
                >
                  {/* 1. الوحدة */}
                  <td className="px-[24px] py-[12px]">
                    <div className="flex items-center gap-[12px]">
                      <div
                        className="bg-[#eaf1e8] border border-[#d3ded0] rounded-[8px] size-[32px] flex items-center justify-center shrink-0"
                        data-name="Background+Border"
                      >
                        <div className="relative size-[16px]">
                          <Image
                            src="/assets/units/list/fcfc8.svg"
                            alt="unit"
                            width={16}
                            height={16}
                            className="size-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="font-cairo font-bold text-[#252a24] text-[14px] leading-[20px] whitespace-nowrap">
                          {unit.unitNumber}
                        </span>
                        <span className="font-cairo font-medium text-[#73786f] text-[11px] leading-[16px] whitespace-nowrap">
                          {unit.subtitle}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* 2. العقار */}
                  <td className="px-[24px] py-[12px]">
                    <div className="flex items-center gap-[6px]">
                      <div className="relative size-[14px] shrink-0">
                        <Image
                          src="/assets/units/list/38688.svg"
                          alt="building"
                          width={14}
                          height={14}
                          className="size-full object-contain"
                        />
                      </div>
                      <span className="font-cairo font-medium text-[#252a24] text-[12px] leading-[16px] whitespace-nowrap">
                        {unit.property}
                      </span>
                    </div>
                  </td>

                  {/* 3. النوع */}
                  <td className="px-[24px] py-[12px]">
                    <span className="font-cairo font-medium text-[#555c50] text-[12px] leading-[16px] whitespace-nowrap">
                      {unit.type}
                    </span>
                  </td>

                  {/* 4. الدور */}
                  <td className="px-[24px] py-[12px]">
                    <span className="font-cairo font-medium text-[#555c50] text-[12px] leading-[16px] whitespace-nowrap">
                      {unit.floor}
                    </span>
                  </td>

                  {/* 5. السعر / ليلة */}
                  <td className="px-[24px] py-[12px]">
                    <div className="flex items-baseline gap-[4px] whitespace-nowrap">
                      <span className="font-cairo font-bold text-[#252a24] text-[12px] leading-[16px]">
                        {unit.pricePerNight}
                      </span>
                      <span className="font-cairo font-normal text-[#73786f] text-[11px] leading-[16px]">
                        ر.س
                      </span>
                    </div>
                  </td>

                  {/* 6. الضيف الحالي */}
                  <td className="px-[24px] py-[12px]">
                    {unit.currentGuest ? (
                      <div className="flex items-center gap-[8px] whitespace-nowrap">
                        <div className="bg-[#e3f2fd] size-[24px] rounded-full flex items-center justify-center shrink-0">
                          <span className="font-cairo font-bold text-[#1976d2] text-[10px] leading-[16px]">
                            {unit.currentGuest.initial}
                          </span>
                        </div>
                        <span className="font-cairo font-medium text-[#252a24] text-[12px] leading-[16px]">
                          {unit.currentGuest.name}
                        </span>
                      </div>
                    ) : (
                      <span className="font-cairo font-normal text-[#a0a59c] text-[12px] leading-[16px]">
                        —
                      </span>
                    )}
                  </td>

                  {/* 7. الحالة */}
                  <td className="px-[24px] py-[12px] whitespace-nowrap">
                    {renderStatusBadge(unit.status)}
                  </td>

                  {/* 8. الإجراءات (Popover button with Node 1:5804) */}
                  <td className="px-[24px] py-[12px] text-center relative">
                    <button
                      type="button"
                      onClick={(e) => handleToggleMenu(unit.id, e)}
                      className="p-[6px] rounded-[8px] hover:bg-[#f1f5eb] active:scale-95 transition-all cursor-pointer inline-flex items-center justify-center"
                      title="الإجراءات"
                      data-node-id="1:4473"
                      data-name="Button"
                    >
                      <div className="relative size-[16px]">
                        <Image
                          src="/assets/units/list/68ef8.svg"
                          alt="actions"
                          width={16}
                          height={16}
                          className="size-full object-contain"
                        />
                      </div>
                    </button>

                    {/* Popover Action Menu */}
                    {activeMenuUnitId === unit.id && (
                      <div
                        ref={menuRef}
                        className="absolute left-[36px] top-[42px] z-50 shadow-xl"
                      >
                        <UnitActionsMenu
                          onView={() => handleView(unit)}
                          onEdit={() => handleEdit(unit)}
                          onDelete={() => handleDelete(unit)}
                          onArchive={() => handleArchive(unit)}
                        />
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Table Footer / Pagination */}
      <div
        className="bg-[#f9faf8] border-t border-[#e5e8e2] px-[24px] py-[14px] flex flex-col sm:flex-row items-center justify-between gap-4 w-full"
        data-node-id="1:4422"
        data-name="Table Footer / Pagination Controls"
      >
        {/* Right side in RTL: Count info */}
        <div className="flex items-center gap-[4px] font-cairo text-[12px] text-[#73786f]">
          <span>عرض</span>
          <span className="font-bold text-[#252a24]">{units.length}</span>
          <span>من إجمالي</span>
          <span className="font-bold text-[#252a24]">{totalCount}</span>
          <span>وحدات</span>
        </div>

        {/* Left side in RTL: Pagination Buttons */}
        <div className="flex items-center gap-[4px]">
          {/* Prev */}
          <button
            type="button"
            disabled
            className="bg-white border border-[#e5e8e2] rounded-[8px] px-[13px] py-[7px] flex items-center gap-[4px] opacity-60 cursor-not-allowed text-[#a0a59c] font-cairo text-[12px] leading-[16px]"
          >
            <span>السابق</span>
            <div className="relative size-[14px] shrink-0">
              <Image
                src="/assets/units/list/42bd8.svg"
                alt="prev"
                width={14}
                height={14}
                className="size-full object-contain"
              />
            </div>
          </button>

          {/* Current Page 1 */}
          <div className="bg-[#eaf1e8] border border-[#d6ded4] rounded-[8px] px-[13px] py-[5px] font-cairo font-bold text-[#4b5940] text-[12px] leading-[16px]">
            1
          </div>

          {/* Next */}
          <button
            type="button"
            disabled
            className="bg-white border border-[#e5e8e2] rounded-[8px] px-[13px] py-[7px] flex items-center gap-[4px] opacity-60 cursor-not-allowed text-[#a0a59c] font-cairo text-[12px] leading-[16px]"
          >
            <div className="relative size-[14px] shrink-0">
              <Image
                src="/assets/units/list/055e5.svg"
                alt="next"
                width={14}
                height={14}
                className="size-full object-contain"
              />
            </div>
            <span>التالي</span>
          </button>
        </div>
      </div>
    </div>
  );
}
