import type { MaintenanceTicketDetails } from "../maintenance-ticket.types";

export const DEFAULT_TICKET_ID = "MT-2048";

export function getMaintenanceTicket(
  ticketId: string = DEFAULT_TICKET_ID
): MaintenanceTicketDetails {
  return {
    ticketId,
    automatedLabel: "طلب آلي",
    automatedBadge: "طلب مؤتمت عبر واتساب",
    createdBadge: "تم إنشاء البلاغ تلقائياً",
    createdNote: "أُنشئت تلقائياً بنجاح",
    bookingId: "BK-10482",
    guestName: "خالد العتيبي",
    guestStatus: "نزيل حالي",
    guestPhone: "+966 50 ••• ••38",
    propertyName: "عمارة النخيل (الرياض)",
    unitName: "وحدة 204 (الدور الثاني)",
    requestedAt: "18 سبتمبر 2026 — 10:32 ص",
    source: "إجراء سريع بالواتساب",
    sourceNote: "المستأجر استعمل القائمة التفاعلية السريعة (Tenant Quick Action)",
    priorityLabel: "تصنيف: تكييف طارئ (عالي الأولوية)",
    verbatimMessage: "المكيف لا يعمل ويصدر صوتاً مزعجاً في غرفة النوم الرئيسية",
    voiceNoteDuration: "0:14",
    imageFileName: "AC_Unit_Master.jpg",
    imageFileSize: "2.4 MB",
    timeline: [
      {
        id: "received",
        time: "10:31:42 ص",
        title: "1. تم استلام الطلب بنجاح",
        description: "تم الاستقبال عبر محادثة واتساب الرسمية الموثقة",
        state: "done",
        connectorColor: "#3e8a5a",
      },
      {
        id: "created",
        time: "10:32:05 ص",
        title: "2. تم إنشاء بلاغ الصيانة",
        description: `مولد آلياً برقم تذكرة ${ticketId} مع ربطه بالوحدة 204`,
        state: "done",
        connectorColor: "#3e8a5a",
      },
      {
        id: "dispatched",
        time: "10:32:18 ص",
        title: "3. تم تحويله إلى العمليات",
        description: "إشعار الفني المسؤول: م. عادل الشريف (مقاول التكييف المعتمد)",
        state: "done",
        connectorColor: "#34422a",
      },
      {
        id: "in-progress",
        title: "4. قيد التنفيذ (الحالة الراهنة)",
        description: "في انتظار المعاينة الميدانية - الوقت المقدر للإنجاز: 2 ساعتان",
        state: "current",
      },
    ],
  };
}
