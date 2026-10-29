export type BookingStatus = "current" | "upcoming" | "completed" | "cancelled";
export type BookingSource = "Whatsapp API" | "حجز مباشر" | "Airbnb" | "Booking.com";
export type PaymentStatus = "paid" | "partial" | "unpaid";

export interface BookingGuest {
  name: string;
  phone: string;
  email: string;
  nationalId: string;
  verified: boolean;
  nationality?: string;
  avatar?: string;
  isFirstStay?: boolean;
}

export interface BookingUnit {
  id: string;
  name: string;
  type: string;
  floor: string;
  property: string;
  dailyPrice: number;
}

export interface BookingDateTime {
  date: string;
  time: string;
  formatted: string;
  iso?: string;
}

export interface BookingAccessCode {
  code: string;
  status: "ready" | "active" | "expired";
  statusLabel: string;
  lockConnected: boolean;
  lockModel?: string;
  syncNote?: string;
}

export interface BookingPayment {
  nightlyRate: number;
  nights: number;
  cleaningFee: number;
  vat: number;
  total: number;
  paid: number;
  remaining: number;
  status: PaymentStatus;
  statusLabel: string;
}

export interface BookingItem {
  id: string;
  reference: string;
  guest: BookingGuest;
  unit: BookingUnit;
  property: string;
  checkIn: BookingDateTime;
  checkOut: BookingDateTime;
  nights: number;
  source: BookingSource;
  status: BookingStatus;
  statusLabel: string;
  accessCode: BookingAccessCode;
  payment: BookingPayment;
  flexibleCheckIn: boolean;
  createdAt: string;
  createdMethod?: string;
}
