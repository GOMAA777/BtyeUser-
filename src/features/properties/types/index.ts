export interface PropertyUnit {
  id: string;
  unitNumber: string;
  name: string;
  unitCode: string;
  floor: string;
  area: number;
  pricePerNight: number;
  bookingsCount: number;
  bookingsStatusText: string;
  status: "synced" | "fully_available" | "pending";
  statusText: string;
  isSelected: boolean;
}

export interface ImportedProperty {
  id: string;
  code: string;
  name: string;
  type: string;
  occupancyRate: number;
  city: string;
  district: string;
  street: string;
  unitsCount: number;
  unitsType: string;
  importedBookingsCount: number;
  imageSrc: string;
  badgeUnits: string;
  expectedMonthlyIncome?: number;
  isExpanded: boolean;
  isSelected: boolean;
  statusText: string;
  units: PropertyUnit[];
}

export interface PropertyItem {
  id: string;
  name: string;
  type: string;
  status: "active" | "inactive";
  statusText: string;
  unitsCount: number;
  unitsCountText: string;
  rentedCount: number;
  rentedCountText: string;
  smartLocksStatus: string;
  smartLocksConnected: boolean;
  city: string;
  district: string;
  street: string;
  imageSrc: string;
  typeBadgeIcon: string;
  badgeIcon: string;
  lastUpdatedRelative: string;
}
