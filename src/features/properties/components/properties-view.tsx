"use client";

import { useState, useMemo } from "react";
import { PropertiesHeroBar } from "./properties-hero-bar";
import { PropertiesFilterBar, PropertyStatusFilter } from "./properties-filter-bar";
import { PropertyGridCard } from "./property-grid-card";
import { PropertyHelperBanner } from "./property-helper-banner";
import { PropertiesEmptyState } from "./properties-empty-state";
import { initialProperties } from "../data/properties-data";
import { PropertyItem } from "../types";
import { Building2 } from "lucide-react";
import { showToast } from "@/lib/toast";

export function PropertiesView() {
  const [properties, setProperties] = useState<PropertyItem[]>(initialProperties);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<PropertyStatusFilter>("all");

  // Computed counts
  const totalCount = properties.length;
  const activeCount = properties.filter((p) => p.status === "active").length;
  const inactiveCount = properties.filter((p) => p.status === "inactive").length;

  // Filtered properties
  const filteredProperties = useMemo(() => {
    return properties.filter((prop) => {
      // 1. Status Filter
      if (statusFilter === "active" && prop.status !== "active") return false;
      if (statusFilter === "inactive" && prop.status !== "inactive") return false;

      // 2. Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        const matchesName = prop.name.toLowerCase().includes(query);
        const matchesCity = prop.city.toLowerCase().includes(query);
        const matchesDistrict = prop.district.toLowerCase().includes(query);
        const matchesStreet = prop.street.toLowerCase().includes(query);
        const matchesType = prop.type.toLowerCase().includes(query);

        return matchesName || matchesCity || matchesDistrict || matchesStreet || matchesType;
      }

      return true;
    });
  }, [properties, statusFilter, searchQuery]);

  // Handle Archive Action
  const handleArchive = (propertyToArchive: PropertyItem) => {
    setProperties((prev) =>
      prev.map((p) =>
        p.id === propertyToArchive.id ? { ...p, status: "inactive", statusText: "غير نشط" } : p
      )
    );
    showToast.success(`تم نقل ${propertyToArchive.name} إلى قائمة غير النشط.`);
  };

  // Handle Add Property
  const handleAddProperty = () => {
    if (properties.length === 0) {
      setProperties(initialProperties);
      showToast.success("تمت استعادة العقارات التجريبية بنجاح.");
    } else {
      showToast.info("إضافة عقار جديد", "جاري فتح نموذج إضافة عقار جديد إلى المنظومة.");
    }
  };

  // 1. If total properties is 0, render pure Empty State layout (Figma Node 1:1887)
  if (properties.length === 0) {
    return (
      <div
        className="w-full min-h-full bg-[#f1f5eb] p-[20px] lg:p-[32px] flex flex-col gap-[16px] lg:gap-[20px] max-w-[1400px] mx-auto"
        data-name="Properties Empty State Page Container"
      >
        <PropertiesHeroBar onAddProperty={handleAddProperty} />
        <PropertiesEmptyState onAddProperty={handleAddProperty} />
      </div>
    );
  }

  // 2. Default Properties List Layout (Figma Node 1:1578)
  return (
    <div
      className="w-full min-h-full bg-[#f1f5eb] p-[20px] lg:p-[32px] flex flex-col gap-[16px] lg:gap-[20px] max-w-[1400px] mx-auto"
      data-name="Properties Page Container"
    >
      {/* 1. Hero Greeting Bar */}
      <PropertiesHeroBar onAddProperty={handleAddProperty} />

      {/* 2. Filter & Search Bar */}
      <PropertiesFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        totalCount={totalCount}
        activeCount={activeCount}
        inactiveCount={inactiveCount}
      />

      {/* 3. Properties Cards Grid or Filter Empty State */}
      {filteredProperties.length > 0 ? (
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]"
          data-node-id="1:1622"
          data-name="Container"
        >
          {filteredProperties.map((property) => (
            <PropertyGridCard
              key={property.id}
              property={property}
              onArchive={handleArchive}
            />
          ))}
        </div>
      ) : statusFilter === "inactive" && inactiveCount === 0 && !searchQuery ? (
        /* Empty State for Inactive / Empty properties (Figma Node 1:1887) */
        <PropertiesEmptyState onAddProperty={handleAddProperty} />
      ) : (
        /* Search Query No Results State */
        <div className="bg-white border border-[#e5e8e2] rounded-[16px] p-[48px] flex flex-col items-center justify-center text-center shadow-xs">
          <div className="size-[56px] rounded-full bg-[#f6f7f4] flex items-center justify-center mb-[16px] text-[#73786f]">
            <Building2 size={28} />
          </div>
          <h3 className="font-cairo font-bold text-[16px] text-[#181d17] mb-[6px]">
            لا توجد عقارات تطابق معايير البحث
          </h3>
          <p className="font-cairo text-[13px] text-[#73786f] max-w-[360px] mb-[16px]">
            جرّب تغيير كلمات البحث أو إعادة ضبط خيارات التصفية لعرض العقارات المتاحة.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setStatusFilter("all");
            }}
            className="px-[16px] py-[8px] rounded-[10px] bg-[#34422a] text-white font-cairo text-[12px] font-semibold hover:bg-[#273220] transition-colors cursor-pointer"
          >
            إعادة ضبط البحث
          </button>
        </div>
      )}

      {/* 4. Quick Helper / Integration Banner */}
      <PropertyHelperBanner />
    </div>
  );
}
