import type {
  Conversation,
  FilterChipDefinition,
} from "../types";

export const ALL_PROPERTIES_OPTION = "جميع العقارات";

export const PROPERTY_OPTIONS: string[] = [
  ALL_PROPERTIES_OPTION,
  "عمارة النخيل",
  "برج الياسمين",
];

/** Counts come from the Figma design (server-side totals, not derived from the mock list). */
export const FILTER_CHIPS: FilterChipDefinition[] = [
  { id: "all", label: "الكل", count: 18 },
  { id: "unread", label: "غير مقروء", count: 3 },
  { id: "maintenance", label: "بلاغات صيانة", count: 6 },
  { id: "extension", label: "تمديد إقامة", count: 4 },
];

export const NEW_CONVERSATIONS_COUNT = 3;

export const QUICK_REPLIES: string[] = [
  "تم تحويل الطلب للفني المختص",
  "سيتم تمديد الحجز وإصدار الفاتورة فوراً",
  "شكراً لتواصلك، كود الدخول الجديد تم تفعيله",
  "نعتذر عن الإزعاج ونحن بالخدمة دائماً",
];

export const mockConversations: Conversation[] = [
  {
    id: "conv-1",
    guestName: "خالد العتيبي",
    avatarInitial: "خ",
    unit: "204",
    property: "عمارة النخيل",
    bookingRef: "#BK-2026-1048",
    unitIcon: "building",
    preview: "أحتاج إلى الإبلاغ عن مشكلة في المكيف لا يبرد بالشكل",
    timeLabel: "منذ 5 د",
    unread: true,
    tag: "maintenance",
    tagLabel: "بلاغ صيانة تلقائي",
    messages: [
      {
        kind: "separator",
        id: "m-1-0",
        text: "بدأ النزيل الإقامة اليوم 18 سبتمبر 2026 — تم إرسال كود الدخول الذكي آلياً",
      },
      {
        kind: "outgoing",
        id: "m-1-1",
        sender: "رسالة ترحيبية آلية (النظام)",
        time: "10:00 ص",
        automated: true,
        segments: [
          { text: "أهلاً بك أستاذ خالد في " },
          { text: "الوحدة 204 بعمارة النخيل", variant: "highlight" },
          { text: "! نتمنى لك إقامة ممتعة. كود الدخول الخاص بك هو: " },
          { text: "583921", variant: "code" },
          {
            text: ". في حال احتجت لأي مساعدة يمكنك الضغط على القوائم السريعة أدناه في أي وقت.",
          },
        ],
        statusLabel: "تم التوصيل",
      },
      {
        kind: "incoming",
        id: "m-1-2",
        sender: "خالد العتيبي (النزيل)",
        time: "10:31 ص",
        text: "السلام عليكم، المكيف في غرفة النوم الرئيسية لا يبرد ويصدر صوتاً مزعجاً، أرجو إرسال فني لمعاينته في أقرب وقت ممكن.",
        metaNote: 'تم الإرسال عبر زر "طلب صيانة فوري" في واتساب',
      },
      {
        kind: "ticket",
        id: "m-1-3",
        ticketId: "MT-2048",
        title: "بلاغ صيانة مؤتمت",
        statusLabel: "تم الإنشاء والتحويل للصيانة ✓",
        description: "تم تحويل الرسالة تلقائياً إلى تذكرة عمل بالنظام",
        assignee: "تم تعيين م. عبدالرحمن سالم",
        unit: "204 — الدور الثاني",
        issueType: "تكييف (طارئ)",
      },
    ],
  },
  {
    id: "conv-2",
    guestName: "سارة محمد",
    avatarInitial: "س",
    unit: "108",
    property: "عمارة النخيل",
    bookingRef: "#BK-2026-1051",
    unitIcon: "building",
    preview: "مرحباً، أرغب في تمديد الإقامة ليلتين إضافيتين لو سمحت",
    timeLabel: "منذ 20 د",
    unread: true,
    tag: "extension",
    tagLabel: "تمديد إقامة",
    messages: [
      {
        kind: "separator",
        id: "m-2-0",
        text: "بدأ النزيل الإقامة اليوم 16 سبتمبر 2026 — تم إرسال كود الدخول الذكي آلياً",
      },
      {
        kind: "incoming",
        id: "m-2-1",
        sender: "سارة محمد (النزيل)",
        time: "10:12 ص",
        text: "مرحباً، أرغب في تمديد الإقامة ليلتين إضافيتين لو سمحت",
      },
    ],
  },
  {
    id: "conv-3",
    guestName: "عبدالله الحربي",
    avatarInitial: "ع",
    unit: "305",
    property: "برج الياسمين",
    bookingRef: "#BK-2026-1037",
    unitIcon: "tower",
    preview: "طرأ ظرف عاجل وأرغب في إلغاء بقية أيام الإقامة",
    timeLabel: "منذ ساعة",
    unread: false,
    tag: "cancellation",
    tagLabel: "إلغاء إقامة (تمت المعالجة)",
    listStatus: "delivered",
    messages: [
      {
        kind: "separator",
        id: "m-3-0",
        text: "بدأ النزيل الإقامة يوم 14 سبتمبر 2026 — تم إرسال كود الدخول الذكي آلياً",
      },
      {
        kind: "incoming",
        id: "m-3-1",
        sender: "عبدالله الحربي (النزيل)",
        time: "09:40 ص",
        text: "طرأ ظرف عاجل وأرغب في إلغاء بقية أيام الإقامة",
      },
      {
        kind: "outgoing",
        id: "m-3-2",
        sender: "فريق الدعم",
        time: "09:52 ص",
        segments: [
          {
            text: "تم استلام طلبك وإلغاء بقية أيام الإقامة، وسيتم رد المبلغ المستحق وفق سياسة الإلغاء.",
          },
        ],
        statusLabel: "تم التوصيل",
      },
    ],
  },
  {
    id: "conv-4",
    guestName: "فهد الشمري",
    avatarInitial: "ف",
    unit: "102",
    property: "عمارة النخيل",
    bookingRef: "#BK-2026-1044",
    unitIcon: "building",
    preview: "أين أجد كود شبكة الواي فاي الخاص بالوحدة؟",
    timeLabel: "09:15 ص",
    unread: false,
    tag: "inquiry",
    tagLabel: "استفسار",
    listStatus: "replied",
    listStatusLabel: "تم الرد",
    messages: [
      {
        kind: "separator",
        id: "m-4-0",
        text: "بدأ النزيل الإقامة يوم 17 سبتمبر 2026 — تم إرسال كود الدخول الذكي آلياً",
      },
      {
        kind: "incoming",
        id: "m-4-1",
        sender: "فهد الشمري (النزيل)",
        time: "09:15 ص",
        text: "أين أجد كود شبكة الواي فاي الخاص بالوحدة؟",
      },
      {
        kind: "outgoing",
        id: "m-4-2",
        sender: "فريق الدعم",
        time: "09:20 ص",
        segments: [
          {
            text: "أهلاً أستاذ فهد، كود الشبكة موجود على بطاقة الاستقبال داخل الوحدة بجانب جهاز الراوتر.",
          },
        ],
        statusLabel: "تم التوصيل",
      },
    ],
  },
  {
    id: "conv-5",
    guestName: "نورة الدوسري",
    avatarInitial: "ن",
    unit: "201",
    property: "عمارة النخيل",
    bookingRef: "#BK-2026-1040",
    unitIcon: "building",
    preview: "تم استلام كود الدخول الذكي، شكراً لتعاونكم",
    timeLabel: "أمس",
    unread: false,
    tag: "checkin",
    tagLabel: "تسجيل دخول",
    listStatus: "delivered",
    messages: [
      {
        kind: "separator",
        id: "m-5-0",
        text: "بدأ النزيل الإقامة يوم 17 سبتمبر 2026 — تم إرسال كود الدخول الذكي آلياً",
      },
      {
        kind: "incoming",
        id: "m-5-1",
        sender: "نورة الدوسري (النزيل)",
        time: "06:45 م",
        text: "تم استلام كود الدخول الذكي، شكراً لتعاونكم",
      },
    ],
  },
];
