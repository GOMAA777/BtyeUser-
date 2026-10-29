"use client";

import { Search, Wrench, Sparkles, Layers } from "lucide-react";
import { TaskType } from "../types";

interface MaintenanceFilterBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedType: string;
  onTypeChange: (type: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  counts: {
    allOperations: number;
    cleaning: number;
    maintenance: number;
    allStatus: number;
    pending: number;
    inProgress: number;
    needsCleaning: number;
  };
}

export function MaintenanceFilterBar({
  searchQuery,
  onSearchChange,
  selectedType,
  onTypeChange,
  selectedStatus,
  onStatusChange,
  counts,
}: MaintenanceFilterBarProps) {
  const typeTabs = [
    { id: "all", label: "كل العمليات", count: counts.allOperations, icon: Layers },
    { id: "cleaning", label: "التنظيف", count: counts.cleaning, icon: Sparkles },
    { id: "maintenance", label: "الصيانة", count: counts.maintenance, icon: Wrench },
  ];

  const statusTabs = [
    { id: "all", label: `الكل (${counts.allStatus})` },
    { id: "pending", label: `قيد الانتظار (${counts.pending})` },
    { id: "in_progress", label: `جاري التنفيذ (${counts.inProgress})` },
    { id: "needs_cleaning", label: `الحالية (${counts.needsCleaning})` },
  ];

  return (
    <div className="flex flex-col gap-4 w-full" dir="rtl">
      {/* 1. Operational Category Tabs */}
      <div
        className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1"
        data-node-id="1:10360"
        data-name="Operational Tabs Navigation"
      >
        {typeTabs.map((tab) => {
          const isActive = selectedType === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTypeChange(tab.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-[12px] border transition-all cursor-pointer font-cairo ${
                isActive
                  ? "bg-[#34422a] border-[#34422a] text-white shadow-[0px_2px_4px_rgba(52,66,42,0.15)]"
                  : "bg-white border-[#e5e8e2] text-[#454840] hover:bg-[#f6f7f4]"
              }`}
            >
              <Icon className={`size-4 ${isActive ? "text-white" : "text-[#75786f]"}`} />
              <span className="font-bold text-[13px]">{tab.label}</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  isActive ? "bg-white/20 text-white" : "bg-[#f1f2ed] text-[#454840]"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 2. Search Field & Status Filter Toolbar */}
      <div
        className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-4 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 w-full"
        data-node-id="1:10370"
      >
        {/* Search */}
        <div className="relative flex-1 max-w-full lg:max-w-[480px]">
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#73786f]">
            <Search className="size-[18px]" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="ابحث برقم الوحدة، العقار، المالك أو رقم المهمة..."
            className="w-full h-[40px] pr-[40px] pl-[16px] bg-[#f6f7f4] hover:bg-[#eef1eb] focus:bg-white border border-transparent focus:border-[#4b5940] rounded-[12px] font-cairo font-medium text-[12px] text-[#181d17] placeholder:text-[rgba(115,120,111,0.7)] outline-none transition-all"
          />
        </div>

        {/* Status Tabs */}
        <div className="bg-[#f6f7f4] p-[3px] rounded-[12px] flex items-center overflow-x-auto no-scrollbar gap-1 self-start lg:self-auto">
          {statusTabs.map((tab) => {
            const isActive = selectedStatus === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onStatusChange(tab.id)}
                className={`font-cairo text-[12px] leading-[16px] px-[14px] py-[6px] rounded-[8px] whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-white text-[#181d17] font-bold shadow-[0px_1px_2px_rgba(0,0,0,0.06)]"
                    : "text-[#73786f] font-semibold hover:text-[#181d17]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
