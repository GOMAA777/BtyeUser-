export type SyncStatusFilter = "connected" | "pending" | "disconnected";

export type ActivityStatus = "success" | "stable";

export interface ActivityLogRow {
  id: string;
  time: string;
  event: string;
  eventIcon: string;
  eventIconWidth: number;
  eventIconHeight: number;
  scope: string;
  channel: string;
  status: ActivityStatus;
  statusLabel: string;
}

export const CONNECTION = {
  propertyId: "BK-SA-982140",
  propertyName: "عمارة النخيل الفندقية",
  activeUnitsLabel: "24 وحدة سكنية نشطة",
  webhookUrl: "https://api.sarh.sa/v1/ota/webhook/bk_982140_live",
  protocol: "اتصال مباشر ثنائي الاتجاه (2-Way Full API Sync)",
  syncFrequency: "كل 60 ثانية (أسرع مزامنة ممكنة)",
  syncFrequencyHint: "معدل قياسي",
  lastSyncLabel: "آخر وقت مزامنة: 18 سبتمبر 2026 — 10:42 ص (منذ دقيقتين)",
  bannerTitle:
    "تم ربط العقار «عمارة النخيل الفندقية» بنجاح مع حساب Booking.com الشريك.",
  bannerSubtitle:
    "يتم تحديث التوافر كل 60 ثانية لتفادي الحجز المزدوج. جميع التعديلات السعرية في صَرْح تُرسل آنيًا للتقويم العالمي.",
} as const;

export const ACTIVITY_LOG: ActivityLogRow[] = [
  {
    id: "1",
    time: "10:42 ص",
    event: "استيراد حجز جديد (BK-10482)",
    eventIcon: "icon_event_booking",
    eventIconWidth: 16.5,
    eventIconHeight: 15,
    scope: "الوحدة 204 (جناح عائلي فاخر)",
    channel: "Booking.com API",
    status: "success",
    statusLabel: "نجحت العملية",
  },
  {
    id: "2",
    time: "10:40 ص",
    event: "تحديث تقويم التوافر (إغلاق الوحدة 204)",
    eventIcon: "icon_event_calendar",
    eventIconWidth: 13.5,
    eventIconHeight: 15,
    scope: "تقويم التوافر الشامل",
    channel: "Booking.com Live Sync",
    status: "success",
    statusLabel: "نجحت العملية",
  },
  {
    id: "3",
    time: "09:15 ص",
    event: "مزامنة قائمة أسعار نهاية الأسبوع",
    eventIcon: "icon_event_rates",
    eventIconWidth: 15,
    eventIconHeight: 12,
    scope: "جميع الوحدات (24 وحدة)",
    channel: "Rate Push Manager",
    status: "success",
    statusLabel: "نجحت العملية",
  },
  {
    id: "4",
    time: "08:00 ص",
    event: "فحص دوري لسلامة اتصال Webhook",
    eventIcon: "icon_event_webhook",
    eventIconWidth: 15,
    eventIconHeight: 9,
    scope: "الخادم المركزي للاتصال",
    channel: "System Health Check",
    status: "stable",
    statusLabel: "اتصال مستقر (18ms)",
  },
];
