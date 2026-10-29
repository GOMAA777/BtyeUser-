export type UnitStatus = "booked" | "available" | "cleaning" | "maintenance";

export interface UnitItem {
  id: string;
  unitNumber: string;
  subtitle: string;
  property: string;
  type: string;
  floor: string;
  pricePerNight: number;
  currentGuest: {
    name: string;
    initial: string;
  } | null;
  status: UnitStatus;
  maxGuests?: number;
}

export const initialUnits: UnitItem[] = [
  {
    id: "1",
    unitNumber: "الوحدة 101",
    subtitle: "غرفة نوم واحدة + صالة",
    property: "عمارة النخيل",
    type: "استوديو",
    floor: "الأول",
    pricePerNight: 450,
    currentGuest: {
      name: "أحمد محمد",
      initial: "أ",
    },
    status: "booked",
    maxGuests: 2,
  },
  {
    id: "2",
    unitNumber: "الوحدة 102",
    subtitle: "غرفتين نوم + صالة واسعة",
    property: "عمارة النخيل",
    type: "شقة",
    floor: "الأول",
    pricePerNight: 450,
    currentGuest: null,
    status: "available",
    maxGuests: 4,
  },
  {
    id: "3",
    unitNumber: "الوحدة 103",
    subtitle: "غرفة نوم واحدة + صالة",
    property: "عمارة النخيل",
    type: "استوديو",
    floor: "الأول",
    pricePerNight: 450,
    currentGuest: null,
    status: "cleaning",
    maxGuests: 2,
  },
  {
    id: "4",
    unitNumber: "الوحدة 104",
    subtitle: "غرفة نوم واحدة + صالة",
    property: "عمارة النخيل",
    type: "استوديو",
    floor: "الأول",
    pricePerNight: 450,
    currentGuest: null,
    status: "maintenance",
    maxGuests: 2,
  },
];
