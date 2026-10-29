export type MaintenanceStatus = "open" | "in_progress" | "completed" | "cancelled";
export type MaintenancePriority = "urgent" | "high" | "medium" | "low";
export type ProblemCategory = "locks" | "plumbing" | "electrical" | "hvac" | "cleaning" | "other";

export interface MaintenanceReport {
  id: string; // e.g. "MT-2048"
  unitId: string;
  unitNumber: string; // "الوحدة 305"
  unitSubtitle: string; // "(الطابق الثالث - جناح A)"
  property: string; // "برج الياسمين"
  propertyLocation: string; // "حي الملقا، الرياض"
  ownerName: string; // "سارة القحطاني"
  ownerId: string; // "OWN-8823"
  problemType: string; // "قفل الباب الذكي (Smart Lock Failure)"
  problemCategory: ProblemCategory;
  categoryLabel: string; // "أقفال ومداخل إلكترونية"
  impactScope: string; // "تعطيل وصول النزيل كلياً"
  priority: MaintenancePriority;
  priorityLabel: string; // "عاجلة وفورية"
  status: MaintenanceStatus;
  statusLabel: string; // "قيد التنفيذ"
  reportDate: string; // "17 سبتمبر 2026 - 04:15 م"
  technicianName: string; // "م. طارق العسيري"
  technicianRole: string; // "فني أقفال وبوابات ذكية معتمد"
  technicianAvatar?: string;
  problemDescription: string;
  technicianNotes: string;
  documentationPhotos: string[];
  impactedBooking?: {
    id: string; // "BK-8821"
    guestName: string; // "سعود العتيبي"
    checkInDate: string; // "غداً، 18 سبتمبر 2026 - 02:00 م"
    hoursRemaining: number; // 22
  };
  timeline: {
    id: string;
    title: string;
    time: string;
    description: string;
    status: "completed" | "current" | "pending";
    actor?: string;
  }[];
}

export interface OperationLogEvent {
  id: string;
  date: string; // "18 سبتمبر 2026"
  time: string; // "04:30 م"
  title: string; // "اكتمال استبدال بطارية القفل الذكي وإعادة المعايرة"
  category: "cleaning" | "maintenance" | "inspection" | "turnover";
  categoryLabel: string; // "صيانة فورية"
  status: "verified" | "completed" | "in_progress";
  statusLabel: string; // "معتمد بالكامل"
  operatorName: string; // "م. طارق العسيري"
  operatorRole: string; // "فريق الصيانة والأنظمة"
  summary: string;
  specs: {
    label: string;
    value: string;
  }[];
  images?: string[];
}

