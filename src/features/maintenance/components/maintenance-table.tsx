"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MaintenanceTask } from "../types";
import { MaintenanceActionsMenu } from "./maintenance-actions-menu";

interface MaintenanceTableProps {
  tasks: MaintenanceTask[];
  onAssignStaff?: (task: MaintenanceTask) => void;
  onStartCleaning?: (task: MaintenanceTask) => void;
  onConfirmComplete?: (task: MaintenanceTask) => void;
}

export function MaintenanceTable({
  tasks,
  onAssignStaff,
}: MaintenanceTableProps) {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  const getStatusBadge = (status: string, label: string) => {
    switch (status) {
      case "needs_cleaning":
        return (
          <div className="bg-[#fdf5e8] flex items-center gap-[6px] px-[10px] py-[4px] rounded-full shrink-0">
            <span className="font-cairo font-semibold text-[#c07010] text-[11px] leading-[16px] whitespace-nowrap">
              {label || "يحتاج تنظيف"}
            </span>
            <div className="bg-[#e99a38] size-[6px] rounded-full shrink-0" />
          </div>
        );
      case "in_progress":
        return (
          <div className="bg-[#eaf1e8] flex items-center gap-[6px] px-[10px] py-[4px] rounded-full shrink-0">
            <span className="font-cairo font-semibold text-[#436734] text-[11px] leading-[16px] whitespace-nowrap">
              {label || "جاري التنظيف"}
            </span>
            <div className="bg-[#5a8647] size-[6px] rounded-full shrink-0" />
          </div>
        );
      case "completed":
        return (
          <div className="bg-[#f0f4ec] flex items-center gap-[6px] px-[10px] py-[4px] rounded-full shrink-0">
            <span className="font-cairo font-semibold text-[#586249] text-[11px] leading-[16px] whitespace-nowrap">
              {label || "مكتملة"}
            </span>
            <div className="bg-[#7a8a68] size-[6px] rounded-full shrink-0" />
          </div>
        );
      default:
        return (
          <div className="bg-[#f3f4f1] flex items-center gap-[6px] px-[10px] py-[4px] rounded-full shrink-0">
            <span className="font-cairo font-semibold text-[#586249] text-[11px] leading-[16px] whitespace-nowrap">
              {label}
            </span>
            <div className="bg-[#9aa095] size-[6px] rounded-full shrink-0" />
          </div>
        );
    }
  };

  return (
    <div
      className="bg-white rounded-[16px] border border-[#e5e8e2] overflow-visible shadow-[0px_1px_3px_rgba(0,0,0,0.05)] w-full"
      data-node-id="1:10375"
      data-name="Operational Management Table"
      dir="rtl"
    >
      {/* Table Container */}
      <div className="overflow-x-auto w-full">
        <table className="w-full text-right border-collapse">
          {/* Header Row */}
          <thead>
            <tr
              className="border-b border-[#e5e8e2] bg-[#f9faf8] text-[#586249] text-[12px] font-bold font-cairo"
              data-node-id="1:10377"
              data-name="Header → Row"
            >
              <th className="py-[16px] px-[20px] text-right font-semibold whitespace-nowrap w-[110px]">
                نوع العملية
              </th>
              <th className="py-[16px] px-[16px] text-right font-semibold whitespace-nowrap w-[120px]">
                رقم المهمة
              </th>
              <th className="py-[16px] px-[16px] text-right font-semibold whitespace-nowrap w-[130px]">
                الوحدة
              </th>
              <th className="py-[16px] px-[16px] text-right font-semibold whitespace-nowrap w-[150px]">
                العقار
              </th>
              <th className="py-[16px] px-[16px] text-right font-semibold whitespace-nowrap w-[140px]">
                المالك
              </th>
              <th className="py-[16px] px-[16px] text-right font-semibold whitespace-nowrap w-[130px]">
                تاريخ الإنشاء
              </th>
              <th className="py-[16px] px-[16px] text-right font-semibold whitespace-nowrap w-[130px]">
                الحالة
              </th>
              <th className="py-[16px] px-[16px] text-right font-semibold whitespace-nowrap w-[160px]">
                المسؤول
              </th>
              <th className="py-[16px] px-[16px] text-right font-semibold whitespace-nowrap w-[130px]">
                آخر تحديث
              </th>
              <th className="py-[16px] px-[20px] text-left font-semibold whitespace-nowrap w-[140px]">
                الإجراءات
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-[#edf1eb]">
            {tasks.map((task, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <tr
                  key={task.id}
                  className={`hover:bg-[#f8faf7] transition-colors ${
                    isEven ? "bg-[rgba(241,245,235,0.3)]" : "bg-white"
                  }`}
                  data-name={`Row ${idx + 1}`}
                >
                  {/* نوع العملية */}
                  <td className="py-[18px] px-[20px] whitespace-nowrap align-middle">
                    <div className="flex items-center gap-[8px]">
                      <div
                        className={`size-[28px] rounded-[8px] flex items-center justify-center shrink-0 ${
                          task.type === "cleaning"
                            ? "bg-[rgba(216,232,203,0.6)] text-[#34422a]"
                            : "bg-[#faeee5] text-[#b45309]"
                        }`}
                      >
                        {task.type === "cleaning" ? (
                          <svg
                            className="size-[15px]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                          </svg>
                        ) : (
                          <svg
                            className="size-[15px]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                          </svg>
                        )}
                      </div>
                      <span className="font-cairo font-semibold text-[#181d17] text-[12px] leading-[18px]">
                        {task.typeLabel}
                      </span>
                    </div>
                  </td>

                  {/* رقم المهمة */}
                  <td className="py-[18px] px-[16px] whitespace-nowrap align-middle">
                    <span className="font-cairo font-bold text-[#34422a] text-[12px] leading-[18px]">
                      {task.reference}
                    </span>
                  </td>

                  {/* الوحدة */}
                  <td className="py-[18px] px-[16px] whitespace-nowrap align-middle">
                    <div className="flex flex-col">
                      <span className="font-cairo font-semibold text-[#181d17] text-[12px] leading-[18px]">
                        {task.unit.name}
                      </span>
                      <span className="font-cairo font-medium text-[#75786f] text-[11px] leading-[16px]">
                        {task.unit.floor}
                      </span>
                    </div>
                  </td>

                  {/* العقار */}
                  <td className="py-[18px] px-[16px] whitespace-nowrap align-middle">
                    <div className="flex flex-col">
                      <span className="font-cairo font-medium text-[#181d17] text-[13px] leading-[20px]">
                        {task.property.name}
                      </span>
                      <span className="font-cairo font-medium text-[#75786f] text-[11px] leading-[16px]">
                        {task.property.city}
                      </span>
                    </div>
                  </td>

                  {/* المالك */}
                  <td className="py-[18px] px-[16px] whitespace-nowrap align-middle">
                    <div className="flex flex-col">
                      <span className="font-cairo font-medium text-[#181d17] text-[13px] leading-[20px]">
                        {task.owner.name}
                      </span>
                      <span className="font-cairo font-normal text-[#75786f] text-[10px] leading-[16px]">
                        {task.owner.code}
                      </span>
                    </div>
                  </td>

                  {/* تاريخ الإنشاء */}
                  <td className="py-[18px] px-[16px] whitespace-nowrap align-middle">
                    <span className="font-cairo font-normal text-[#454840] text-[13px] leading-[20px]">
                      {task.createdAtFormatted}
                    </span>
                  </td>

                  {/* الحالة */}
                  <td className="py-[18px] px-[16px] whitespace-nowrap align-middle">
                    {getStatusBadge(task.status, task.statusLabel)}
                  </td>

                  {/* المسؤول */}
                  <td className="py-[18px] px-[16px] whitespace-nowrap align-middle">
                    {task.assignedStaff ? (
                      <div className="flex flex-col">
                        <span className="font-cairo font-medium text-[#181d17] text-[13px] leading-[18px]">
                          {task.assignedStaff.name}
                        </span>
                        {task.assignedStaff.role && (
                          <span className="font-cairo font-normal text-[#75786f] text-[11px] leading-[16px]">
                            {task.assignedStaff.role}
                          </span>
                        )}
                      </div>
                    ) : (
                      <span className="font-cairo font-normal text-[#75786f] text-[13px] leading-[20px]">
                        — (غير مسند بعد)
                      </span>
                    )}
                  </td>

                  {/* آخر تحديث */}
                  <td className="py-[18px] px-[16px] whitespace-nowrap align-middle">
                    <span className="font-cairo font-normal text-[#75786f] text-[13px] leading-[20px]">
                      {task.lastUpdated}
                    </span>
                  </td>

                  {/* الإجراءات */}
                  <td className="py-[18px] px-[20px] whitespace-nowrap align-middle text-left">
                    <div className="flex items-center justify-start gap-[8px] relative">
                      <Link
                        href={`/maintenance/${task.id}`}
                        className="bg-[#ebefe6] hover:bg-[#dce3d5] transition-colors text-[#34422a] font-cairo font-semibold text-[11px] leading-[16px] h-[32px] px-[14px] rounded-[8px] flex items-center justify-center shrink-0 cursor-pointer"
                        data-name="Button"
                      >
                        عرض التفاصيل
                      </Link>

                      {/* Dropdown Button */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() =>
                            setActiveMenuId(
                              activeMenuId === task.id ? null : task.id
                            )
                          }
                          className="size-[32px] rounded-[8px] border border-[#e5e8e2] bg-white hover:bg-[#f6f7f4] transition-colors flex items-center justify-center text-[#586249] cursor-pointer"
                          aria-label="المزيد من الإجراءات"
                        >
                          <svg
                            className="size-[16px]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="19" cy="12" r="1" />
                            <circle cx="5" cy="12" r="1" />
                          </svg>
                        </button>

                        {/* Actions Menu */}
                        <MaintenanceActionsMenu
                          taskId={task.id}
                          isOpen={activeMenuId === task.id}
                          onClose={() => setActiveMenuId(null)}
                          onAssignStaff={() => onAssignStaff?.(task)}
                          position="bottom-left"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Bar */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between px-[24px] py-[16px] border-t border-[#e5e8e2] bg-white gap-[12px]"
        data-node-id="1:10530"
        data-name="Pagination Bar"
      >
        <div className="text-[12px] font-cairo text-[#75786f] flex items-center gap-[4px]">
          <span>عرض</span>
          <span className="font-semibold text-[#181d17]">1</span>
          <span>إلى</span>
          <span className="font-semibold text-[#181d17]">6</span>
          <span>من أصل</span>
          <span className="font-semibold text-[#181d17]">842</span>
          <span>مهمة مسجلة</span>
        </div>

        <div className="flex items-center gap-[8px]">
          <div className="text-[12px] font-cairo text-[#75786f] me-[12px]">
            <span>الصفوف لكل صفحة: </span>
            <span className="font-semibold text-[#181d17]">10 مهام</span>
          </div>

          <button
            type="button"
            className="px-[12px] py-[6px] border border-[#e5e8e2] rounded-[8px] text-[12px] font-cairo text-[#75786f] hover:bg-[#f6f7f4] transition-colors cursor-pointer"
          >
            السابق
          </button>
          <button
            type="button"
            className="size-[32px] rounded-[8px] bg-[#34422a] text-white text-[12px] font-cairo font-bold flex items-center justify-center"
          >
            1
          </button>
          <button
            type="button"
            className="px-[12px] py-[6px] border border-[#e5e8e2] rounded-[8px] text-[12px] font-cairo text-[#75786f] hover:bg-[#f6f7f4] transition-colors cursor-pointer"
          >
            التالي
          </button>
        </div>
      </div>

      {/* Bottom Governance Notice Bar */}
      <div
        className="px-[24px] py-[16px] bg-[#f8faf7] border-t border-[#e5e8e2] flex items-start sm:items-center gap-[12px]"
        data-node-id="1:10368"
        data-name="Bottom Governance & Platform Automation Compliance Notice"
      >
        <div className="size-[24px] rounded-full bg-[#dce3d5] text-[#34422a] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
          <svg
            className="size-[14px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-[4px] sm:gap-[8px] text-right font-cairo text-[12px] leading-[18px]">
          <span className="font-bold text-[#34422a] shrink-0">
            حوكمة العمليات المركزية:
          </span>
          <span className="text-[#586249]">
            لا تتطلب المنصة إنشاء مهام التنظيف يدوياً، حيث يتم رصد انتهاء الحجوزات وإصدار التذاكر آلياً، كما تُربط مهام الصيانة بأكواد الدخول المؤقتة وحالة الأقفال الذكية لضمان سلامة الأصول العقارية.
          </span>
        </div>
      </div>
    </div>
  );
}
