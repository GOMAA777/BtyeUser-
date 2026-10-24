"use client";

import { useState, useMemo } from "react";
import { toast } from "sonner";
import { BentoTelemetryHeader } from "./bento-telemetry-header";
import { SummaryMetricStrip } from "./summary-metric-strip";
import { FilterSelectionBar } from "./filter-selection-bar";
import { PropertyCardExpanded } from "./property-card-expanded";
import { PropertyCardCollapsed } from "./property-card-collapsed";
import { ConflictSafeguardBanner } from "./conflict-safeguard-banner";
import { StickyActionBar } from "./sticky-action-bar";
import { initialImportedProperties } from "../data/mock-properties";
import { ImportedProperty } from "../types";

export function ImportedPropertiesView() {
  const [properties, setProperties] = useState<ImportedProperty[]>(initialImportedProperties);
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter properties based on city and search query
  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      // City filter
      if (selectedCity === "riyadh" && !p.city.includes("الرياض")) return false;
      if (selectedCity === "jeddah" && !p.city.includes("جدة")) return false;

      // Search filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesCode = p.code.toLowerCase().includes(query);
        const matchesCity = p.city.toLowerCase().includes(query);
        const matchesDistrict = p.district.toLowerCase().includes(query);
        const matchesUnits = p.units.some(
          (u) =>
            u.name.toLowerCase().includes(query) ||
            u.unitCode.toLowerCase().includes(query) ||
            u.unitNumber.includes(query)
        );
        return matchesName || matchesCode || matchesCity || matchesDistrict || matchesUnits;
      }

      return true;
    });
  }, [properties, selectedCity, searchQuery]);

  // Derived selection state
  const allPropertiesSelected = properties.every((p) => p.isSelected);
  const selectedPropertiesCount = properties.filter((p) => p.isSelected).length;
  
  // Total units selected across all properties
  const totalUnitsSelected = useMemo(() => {
    let count = 0;
    properties.forEach((p) => {
      if (p.units.length > 0) {
        count += p.units.filter((u) => u.isSelected).length;
      } else if (p.isSelected) {
        count += p.unitsCount;
      }
    });
    return count;
  }, [properties]);

  // Handlers
  const handleToggleSelectAll = () => {
    const nextState = !allPropertiesSelected;
    setProperties((prev) =>
      prev.map((p) => ({
        ...p,
        isSelected: nextState,
        units: p.units.map((u) => ({ ...u, isSelected: nextState })),
      }))
    );
  };

  const handleTogglePropertySelect = (propertyId: string) => {
    setProperties((prev) =>
      prev.map((p) => {
        if (p.id !== propertyId) return p;
        const nextSelected = !p.isSelected;
        return {
          ...p,
          isSelected: nextSelected,
          units: p.units.map((u) => ({ ...u, isSelected: nextSelected })),
        };
      })
    );
  };

  const handleToggleUnitSelect = (propertyId: string, unitId: string) => {
    setProperties((prev) =>
      prev.map((p) => {
        if (p.id !== propertyId) return p;
        const updatedUnits = p.units.map((u) =>
          u.id === unitId ? { ...u, isSelected: !u.isSelected } : u
        );
        const anyUnitSelected = updatedUnits.some((u) => u.isSelected);
        return {
          ...p,
          isSelected: anyUnitSelected,
          units: updatedUnits,
        };
      })
    );
  };

  const handleSelectAllUnits = (propertyId: string) => {
    setProperties((prev) =>
      prev.map((p) => {
        if (p.id !== propertyId) return p;
        return {
          ...p,
          isSelected: true,
          units: p.units.map((u) => ({ ...u, isSelected: true })),
        };
      })
    );
  };

  const handleDeselectAllUnits = (propertyId: string) => {
    setProperties((prev) =>
      prev.map((p) => {
        if (p.id !== propertyId) return p;
        return {
          ...p,
          isSelected: false,
          units: p.units.map((u) => ({ ...u, isSelected: false })),
        };
      })
    );
  };

  const handleToggleExpand = (propertyId: string) => {
    setProperties((prev) =>
      prev.map((p) =>
        p.id === propertyId ? { ...p, isExpanded: !p.isExpanded } : p
      )
    );
  };

  const handleImport = () => {
    toast.success("تم بدء استيراد العقارات والوحدات المحددة بنجاح", {
      description: `تم جدولة ترحيل ${selectedPropertiesCount} عقار و ${totalUnitsSelected} وحدة للمزامنة المزدوجة.`,
    });
  };

  const handleCancel = () => {
    toast.info("تم إلغاء عملية الاستيراد");
  };

  const handleRescan = () => {
    toast.info("جاري إعادة فحص اتصال Booking.com...", {
      description: "سيتم تحديث حالة الحجوزات والوحدات خلال لحظات.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F1F5EB] w-full" dir="rtl">
      {/* Scrollable Content Container */}
      <div className="flex-1 flex flex-col gap-[24px] p-[20px] lg:p-[32px] max-w-[1560px] mx-auto w-full pb-[32px]">
        {/* 1. Bento Header & Target Owner Banner */}
        <BentoTelemetryHeader />

        {/* 2. Summary Metric Strip */}
        <SummaryMetricStrip
          discoveredPropertiesCount={2}
          totalUnitsCount={36}
          upcomingBookingsCount={28}
        />

        {/* 3. Filter & Global Selection Bar */}
        <FilterSelectionBar
          isAllSelected={allPropertiesSelected}
          onToggleSelectAll={handleToggleSelectAll}
          selectedCity={selectedCity}
          onSelectCity={setSelectedCity}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCountText={`تحديد الكل (${selectedPropertiesCount} عقار، ${totalUnitsSelected} وحدة)`}
        />

        {/* 4. Imported Properties List */}
        <div className="flex flex-col gap-[24px] w-full" data-name="IMPORTED PROPERTIES LIST">
          {filteredProperties.map((prop) => {
            if (prop.isExpanded && prop.units.length > 0) {
              return (
                <PropertyCardExpanded
                  key={prop.id}
                  property={prop}
                  onTogglePropertySelect={handleTogglePropertySelect}
                  onToggleUnitSelect={handleToggleUnitSelect}
                  onSelectAllUnits={handleSelectAllUnits}
                  onDeselectAllUnits={handleDeselectAllUnits}
                />
              );
            }
            return (
              <PropertyCardCollapsed
                key={prop.id}
                property={prop}
                onTogglePropertySelect={handleTogglePropertySelect}
                onToggleExpand={handleToggleExpand}
              />
            );
          })}
        </div>

        {/* 5. Conflict Prevention & Safe Guarding Banner */}
        <ConflictSafeguardBanner />
      </div>

      {/* 6. Sticky Bottom Summary & Final Action Bar */}
      <StickyActionBar
        selectedPropertiesCount={selectedPropertiesCount}
        selectedUnitsCount={totalUnitsSelected}
        onImport={handleImport}
        onCancel={handleCancel}
        onRescan={handleRescan}
      />
    </div>
  );
}
