"use client";

import { useState, useMemo } from "react";
import { initialUnits, UnitItem } from "../data/units-data";
import { UnitsHeroBar } from "./units-hero-bar";
import { UnitsFilterBar } from "./units-filter-bar";
import { UnitsTable } from "./units-table";

export function UnitsView() {
  const [units, setUnits] = useState<UnitItem[]>(initialUnits);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedProperty, setSelectedProperty] = useState("all");
  const [selectedFloor, setSelectedFloor] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedGuestCapacity, setSelectedGuestCapacity] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Dynamic status counts
  const statusCounts = useMemo(() => {
    return {
      all: units.length,
      available: units.filter((u) => u.status === "available").length,
      booked: units.filter((u) => u.status === "booked").length,
      cleaning: units.filter((u) => u.status === "cleaning").length,
      maintenance: units.filter((u) => u.status === "maintenance").length,
    };
  }, [units]);

  // Filtered & Sorted units
  const filteredUnits = useMemo(() => {
    return units
      .filter((unit) => {
        // Status filter
        if (selectedStatus !== "all" && unit.status !== selectedStatus) {
          return false;
        }

        // Search filter (Unit number or guest name)
        if (searchQuery.trim()) {
          const q = searchQuery.trim().toLowerCase();
          const matchesNumber = unit.unitNumber.toLowerCase().includes(q);
          const matchesSubtitle = unit.subtitle.toLowerCase().includes(q);
          const matchesGuest =
            unit.currentGuest?.name.toLowerCase().includes(q) ?? false;
          if (!matchesNumber && !matchesSubtitle && !matchesGuest) {
            return false;
          }
        }

        // Property filter
        if (selectedProperty !== "all" && unit.property !== selectedProperty) {
          return false;
        }

        // Floor filter
        if (selectedFloor !== "all" && unit.floor !== selectedFloor) {
          return false;
        }

        // Type filter
        if (selectedType !== "all" && unit.type !== selectedType) {
          return false;
        }

        // Price range
        if (selectedPriceRange === "under_300" && unit.pricePerNight >= 300) {
          return false;
        }
        if (
          selectedPriceRange === "300_500" &&
          (unit.pricePerNight < 300 || unit.pricePerNight > 500)
        ) {
          return false;
        }
        if (selectedPriceRange === "above_500" && unit.pricePerNight <= 500) {
          return false;
        }

        // Guest capacity
        if (selectedGuestCapacity === "1_2" && (unit.maxGuests ?? 2) > 2) {
          return false;
        }
        if (
          selectedGuestCapacity === "3_4" &&
          ((unit.maxGuests ?? 2) < 3 || (unit.maxGuests ?? 2) > 4)
        ) {
          return false;
        }
        if (selectedGuestCapacity === "5_plus" && (unit.maxGuests ?? 2) < 5) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price_asc") return a.pricePerNight - b.pricePerNight;
        if (sortBy === "price_desc") return b.pricePerNight - a.pricePerNight;
        if (sortBy === "oldest") return a.id.localeCompare(b.id);
        return b.id.localeCompare(a.id); // newest by default
      });
  }, [
    units,
    selectedStatus,
    searchQuery,
    selectedProperty,
    selectedFloor,
    selectedType,
    selectedPriceRange,
    selectedGuestCapacity,
    sortBy,
  ]);

  const handleDeleteUnit = (id: string) => {
    setUnits((prev) => prev.filter((u) => u.id !== id));
  };

  const handleArchiveUnit = (id: string) => {
    // Toggling or archiving unit
    setUnits((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div
      className="bg-[#f1f5eb] min-h-screen p-[24px] lg:p-[32px] flex flex-col gap-[20px] w-full"
      data-node-id="1:4313"
      data-name="الوحدات"
      dir="rtl"
    >
      {/* 1. Top Hero Greeting Bar */}
      <UnitsHeroBar totalUnitsCount={units.length} />

      {/* 2. Search & Refined Filter Dropdowns */}
      <UnitsFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        statusCounts={statusCounts}
        selectedProperty={selectedProperty}
        onPropertyChange={setSelectedProperty}
        selectedFloor={selectedFloor}
        onFloorChange={setSelectedFloor}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        selectedPriceRange={selectedPriceRange}
        onPriceRangeChange={setSelectedPriceRange}
        selectedGuestCapacity={selectedGuestCapacity}
        onGuestCapacityChange={setSelectedGuestCapacity}
        sortBy={sortBy}
        onSortByChange={setSortBy}
      />

      {/* 3. High-Fidelity Table Container */}
      <UnitsTable
        units={filteredUnits}
        totalCount={units.length}
        onDeleteUnit={handleDeleteUnit}
        onArchiveUnit={handleArchiveUnit}
      />
    </div>
  );
}
