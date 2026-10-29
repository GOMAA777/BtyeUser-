"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { mockOperationLogsUnit204 } from "../data/maintenance-mock-data";
import { OperationLogEvent } from "../types/maintenance";
import { showToast } from "@/lib/toast";

export function OperationsLogView() {
  const [logs] = useState<OperationLogEvent[]>(mockOperationLogsUnit204);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("all");

  const tabs = [
    { id: "all", label: "الكل" },
    { id: "cleaning", label: "النظافة والتعقيم" },
    { id: "maintenance", label: "بلاغات الصيانة" },
    { id: "inspection", label: "فحص الجاهزية" },
    { id: "turnover", label: "تبديل المستأجرين" },
  ];

  const filteredLogs = useMemo(() => {
    return logs.filter((log) => {
      if (selectedCategory !== "all" && log.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.trim().toLowerCase();
        const matchesTitle = log.title.toLowerCase().includes(q);
        const matchesSummary = log.summary.toLowerCase().includes(q);
        const matchesOperator = log.operatorName.toLowerCase().includes(q);
        if (!matchesTitle && !matchesSummary && !matchesOperator) {
          return false;
        }
      }
      return true;
    });
  }, [logs, selectedCategory, searchQuery]);

  const handleExport = () => {
    showToast.success("جاري تصدير التقرير التشغيلي الموثق بصيغة PDF...");
  };

  return (
    <div
      className="bg-[#f1f5eb] min-h-screen p-[24px] lg:p-[32px] flex flex-col gap-[20px] w-full"
      dir="rtl"
      data-node-id="1:12570"
      data-name="سجل التشغيل"
    >
      {/* 1. PAGE HEADER BAR */}
      <div
        className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 lg:px-[32px] lg:py-[24px] flex flex-col md:flex-row md:items-center justify-between gap-4 w-full"
        data-node-id="1:12573"
        data-name="PAGE HEADER BAR"
      >
        <div className="flex flex-col items-start gap-1">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[#73786f] text-[12px] font-cairo">
            <Link href="/units" className="hover:text-[#181d17] transition-colors">
              الوحدات
            </Link>
            <span>/</span>
            <Link href="/units/204" className="hover:text-[#181d17] transition-colors">
              الوحدة 204
            </Link>
            <span>/</span>
            <span className="text-[#181d17] font-semibold">سجل التشغيل</span>
          </div>

          <div className="flex items-center gap-3 pt-1">
            <h1 className="font-cairo font-bold text-[#181d17] text-[24px] leading-[34px]">
              سجل التشغيل — الوحدة 204
            </h1>

            {/* Status badge ("قد الكلمة فقط") */}
            <span className="inline-flex items-center gap-[6px] w-fit whitespace-nowrap px-[11px] py-[4px] rounded-full bg-[#e8f5e9] border border-[#c8e6c9] text-[#2e7d32] font-cairo font-bold text-[12px]">
              <span className="size-[6px] rounded-full bg-[#2e7d32] shrink-0" />
              متاحة للحجز
            </span>
          </div>

          <p className="font-cairo font-normal text-[#454840] text-[13px] leading-[22px]">
            التوثيق الزمني التشغيلي المباشر لمهام النظافة والتعقيم وبلاغات الصيانة والأعطال الفنية للوحدة العقارية.
          </p>
        </div>

        {/* Action Button Group */}
        <div className="flex flex-wrap items-center gap-[10px]">
          {/* Export button */}
          <button
            type="button"
            onClick={handleExport}
            className="bg-[#f1f5eb] hover:bg-[#e4ecd9] active:scale-[0.98] transition-all h-[44px] px-[20px] rounded-[12px] flex items-center gap-[8px] font-cairo font-semibold text-[#34422a] text-[13px] border border-[#dfe4db]/70 cursor-pointer"
          >
            <span>تصدير السجل (PDF/Excel)</span>
          </button>

          {/* Create report button */}
          <Link
            href="/maintenance/new"
            className="bg-[#34422a] hover:bg-[#283420] active:scale-[0.98] transition-all drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] h-[44px] px-[22px] rounded-[12px] flex items-center gap-[8px] font-cairo font-semibold text-white text-[14px] shadow-sm"
          >
            <span className="text-[18px] leading-none">+</span>
            <span>إنشاء بلاغ صيانة</span>
          </Link>
        </div>
      </div>

      {/* 2. METADATA PILL STRIP */}
      <div
        className="bg-white rounded-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#e5e8e2] px-[24px] py-[16px] flex flex-wrap items-center justify-between gap-4 w-full"
        data-name="Metadata Pill Strip"
      >
        <div className="flex flex-wrap items-center gap-x-[32px] gap-y-[10px] text-[12px] font-cairo">
          <div className="flex items-center gap-2">
            <span className="text-[#75786f]">مؤشر الجاهزية:</span>
            <span className="font-bold text-[#2e7d32]">100% معتمدة بالكامل</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#75786f]">مالك العقار:</span>
            <span className="font-bold text-[#181d17]">محمد العتيبي (OWN-4491)</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#75786f]">العقار والموقع:</span>
            <span className="font-bold text-[#181d17]">عمارة النخيل (حي العليا - الرياض)</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#75786f]">الوحدة والتفاصيل:</span>
            <span className="font-bold text-[#181d17]">204 (الطابق الثاني - 3 غرف وصالة)</span>
          </div>
        </div>

        <span className="bg-[#eaf1e8] text-[#34422a] px-[10px] py-[3px] rounded-full text-[11px] font-cairo font-bold">
          آخر تحديث: قبل 15 دقيقة
        </span>
      </div>

      {/* 3. HIGH-DENSITY KPI METRICS STRIP (4 CARDS) */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] w-full"
        data-name="Section - High-Density KPI Metrics Strip"
      >
        {/* KPI 1 */}
        <div className="bg-white rounded-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#e5e8e2] p-[20px] flex flex-col gap-1">
          <span className="font-cairo text-[#75786f] text-[12px]">الالتزام بقوائم الفحص</span>
          <div className="flex items-baseline gap-2 pt-1">
            <span className="font-cairo font-bold text-[#181d17] text-[26px]">100%</span>
            <span className="text-[#2e7d32] font-cairo font-bold text-[12px]">ممتاز</span>
          </div>
          <span className="font-cairo text-[#75786f] text-[11px]">اعتماد رقمي بالصور والشواهد</span>
        </div>

        {/* KPI 2 */}
        <div className="bg-white rounded-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#e5e8e2] p-[20px] flex flex-col gap-1">
          <span className="font-cairo text-[#75786f] text-[12px]">معدل استجابة الصيانة</span>
          <div className="flex items-baseline gap-2 pt-1">
            <span className="font-cairo font-bold text-[#181d17] text-[26px]">35</span>
            <span className="font-cairo text-[#75786f] text-[12px]">دقيقة للاستجابة</span>
          </div>
          <span className="font-cairo text-[#2e7d32] text-[11px] font-medium">أسرع من المعيار بـ 25 دقيقة</span>
        </div>

        {/* KPI 3 */}
        <div className="bg-white rounded-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#e5e8e2] p-[20px] flex flex-col gap-1">
          <span className="font-cairo text-[#75786f] text-[12px]">إجمالي البلاغات المنفذة</span>
          <div className="flex items-baseline gap-2 pt-1">
            <span className="font-cairo font-bold text-[#181d17] text-[26px]">12</span>
            <span className="font-cairo text-[#75786f] text-[12px]">بلاغ منجز</span>
          </div>
          <span className="font-cairo text-[#75786f] text-[11px]">خلال الـ 6 أشهر الماضية</span>
        </div>

        {/* KPI 4 */}
        <div className="bg-white rounded-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#e5e8e2] p-[20px] flex flex-col gap-1">
          <span className="font-cairo text-[#75786f] text-[12px]">متوسط تقييم النظافة</span>
          <div className="flex items-baseline gap-2 pt-1">
            <span className="font-cairo font-bold text-[#181d17] text-[26px]">4.95</span>
            <span className="text-[#b86b14] font-cairo font-bold text-[12px]">★★★★★</span>
          </div>
          <span className="font-cairo text-[#75786f] text-[11px]">بناءً على 28 تقييم نزيل</span>
        </div>
      </div>

      {/* 4. OPERATIONS LOG CORE CONTAINER */}
      <div
        className="bg-white rounded-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#e5e8e2] overflow-hidden w-full flex flex-col"
        data-name="Operations Log Core Container"
      >
        {/* Category Tabs Header */}
        <div className="border-b border-[#e5e8e2] px-[24px] pt-[16px] flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-[16px] py-[12px] font-cairo text-[13px] border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === tab.id
                    ? "border-[#34422a] text-[#34422a] font-bold"
                    : "border-transparent text-[#75786f] hover:text-[#181d17] font-medium"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="font-cairo text-[12px] text-[#75786f] pb-[8px]">
            عرض {filteredLogs.length} سجل تشغيلي موثق
          </span>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="p-[20px] border-b border-[#e5e8e2] bg-[#f9faf8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-[16px]">
          {/* Search Box */}
          <div className="relative flex-1 max-w-full sm:max-w-[380px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في السجل، البلاغات، أو اسم المسؤول..."
              className="w-full h-[40px] pr-[14px] pl-[36px] bg-white border border-[#e5e8e2] rounded-[10px] font-cairo text-[12px] text-[#181d17] outline-none focus:border-[#34422a]"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#75786f] text-[14px] pointer-events-none">
              🔍
            </span>
          </div>

          {/* Period Filter */}
          <div className="flex items-center gap-[10px]">
            <span className="font-cairo font-medium text-[#75786f] text-[12px] whitespace-nowrap">
              الفترة:
            </span>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="h-[40px] px-[12px] bg-white border border-[#e5e8e2] rounded-[10px] font-cairo text-[12px] text-[#181d17] outline-none focus:border-[#34422a]"
            >
              <option value="all">كافة الفترات</option>
              <option value="week">آخر 7 أيام</option>
              <option value="month">هذا الشهر</option>
              <option value="quarter">آخر 3 أشهر</option>
            </select>
          </div>
        </div>

        {/* Vertical Operational Timeline Section */}
        <div className="p-[24px] lg:p-[32px] flex flex-col gap-[28px] w-full">
          {filteredLogs.length === 0 ? (
            <div className="py-12 text-center text-[#75786f] font-cairo text-[13px]">
              لا توجد سجلات مطابقة للبحث أو التصنيف المحدد.
            </div>
          ) : (
            filteredLogs.map((item, idx) => {
              const isLast = idx === filteredLogs.length - 1;
              return (
                <div key={item.id} className="flex items-start gap-[18px] relative group">
                  {/* Timeline Continuous Spine */}
                  {!isLast && (
                    <div className="absolute top-[28px] right-[15px] w-[2px] bottom-[-28px] bg-[#e5e8e2]" />
                  )}

                  {/* Event Marker */}
                  <div className="size-[32px] rounded-full bg-[#f1f5eb] border-2 border-[#34422a] flex items-center justify-center shrink-0 z-10 bg-white">
                    <span className="size-[10px] rounded-full bg-[#34422a]" />
                  </div>

                  {/* Event Card Content */}
                  <div className="bg-[#f9faf8] group-hover:bg-[#f6f8f4] border border-[#e5e8e2] rounded-[14px] p-[20px] flex flex-col gap-[14px] flex-1 transition-colors">
                    {/* Header: Title, Category & Timestamp */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#ecefe8] pb-[12px]">
                      <div className="flex items-center gap-[10px] flex-wrap">
                        <span className="font-cairo font-bold text-[#181d17] text-[15px]">
                          {item.title}
                        </span>
                        <span className="bg-[#eaf1e8] text-[#34422a] px-[10px] py-[2px] rounded-full text-[11px] font-cairo font-bold">
                          {item.categoryLabel}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-[12px] font-cairo text-[#75786f]">
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.time}</span>
                      </div>
                    </div>

                    {/* Summary text */}
                    <p className="font-cairo text-[#454840] text-[13px] leading-[22px]">
                      {item.summary}
                    </p>

                    {/* Specs / Key Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white p-[12px] rounded-[10px] border border-[#e5e8e2]/80">
                      {item.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex flex-col">
                          <span className="font-cairo text-[#75786f] text-[11px]">
                            {spec.label}:
                          </span>
                          <span className="font-cairo font-bold text-[#181d17] text-[12px]">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Operator Footer & Photo gallery if present */}
                    <div className="flex flex-col gap-3 pt-1">
                      {item.images && item.images.length > 0 && (
                        <div className="flex items-center gap-3 overflow-x-auto pb-1">
                          {item.images.map((imgSrc, imgIdx) => (
                            <div
                              key={imgIdx}
                              className="relative size-[76px] rounded-[8px] overflow-hidden border border-[#e5e8e2] shrink-0 bg-[#f1f5eb]"
                            >
                              <Image
                                src={imgSrc}
                                alt={`توثيق ${imgIdx + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-1 border-t border-[#ecefe8] text-[11px] font-cairo text-[#75786f]">
                        <span>
                          المسؤول المنفذ: <strong className="text-[#181d17]">{item.operatorName}</strong> ({item.operatorRole})
                        </span>
                        <span className="text-[#2e7d32] font-bold">
                          ✓ {item.statusLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
