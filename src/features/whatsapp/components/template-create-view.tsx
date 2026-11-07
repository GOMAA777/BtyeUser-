"use client";

import { useState } from "react";
import Image from "next/image";
import { showToast } from "@/lib/toast";

/* -------------------------------------------------------------------------- */
/*  Constants                                                                 */
/* -------------------------------------------------------------------------- */

const ASSETS = "/assets/whatsapp/templates";
const DRAFT_STORAGE_KEY = "whatsapp-template-draft-step-1";
const NAME_MAX_LENGTH = 512;

type TemplateType = "standard" | "carousel" | "catalog";

interface TemplateTypeOption {
  id: TemplateType;
  title: React.ReactNode;
  description: string;
}

const TEMPLATE_TYPES: TemplateTypeOption[] = [
  {
    id: "standard",
    title: "قياسي / Standard",
    description:
      "نصوص، صور أو مستندات، مع أزرار تفاعلية وروابط إجراء سريعة. الخيار الأنسب للإشعارات.",
  },
  {
    id: "carousel",
    title: (
      <>
        شرائح متعددة /
        <br />
        Carousel
      </>
    ),
    description:
      "رسائل شرائح صور تفاعلية قابلة للتمرير الأفقي، لعرض عدة وحدات سكنية أو مرافق مجمعة.",
  },
  {
    id: "catalog",
    title: (
      <>
        كتالوج المنتجات /
        <br />
        Catalog
      </>
    ),
    description:
      "ربط مباشر بكتالوج فيسبوك وميتا للأعمال لعرض الباقات التأجيرية المتاحة للحجز الفوري.",
  },
];

const STEPS = [
  { id: 1, title: "البيانات الأساسية" },
  { id: 2, title: "الوسائط" },
  { id: 3, title: "نص الرسالة الأساسي" },
  { id: 4, title: "الأزرار التفاعلية" },
  { id: 5, title: "المتغيرات" },
  { id: 6, title: "المراجعة والاعتماد" },
];

const LANGUAGE_OPTIONS = [
  { value: "ar", label: "العربية (ar)" },
  { value: "en", label: "English (en)" },
  { value: "en_US", label: "English (en_US)" },
];

const CATEGORY_OPTIONS = [
  { value: "utility", label: "خدمية / Utility" },
  { value: "marketing", label: "تسويقية / Marketing" },
  { value: "authentication", label: "مصادقة / Authentication" },
];

const GUIDELINES = [
  "استخدام الأحرف الإنجليزية الصغيرة فقط",
  "استخدام الشرطة السفلية (_) بدلاً من المسافات والفواصل.",
  "الحد الأقصى لطول الاسم البرمجي 512 حرفاً.",
  "لا يمكن تعديل الاسم البرمجي للقالب بعد إرساله للاعتماد.",
];

/* -------------------------------------------------------------------------- */
/*  Small helpers                                                             */
/* -------------------------------------------------------------------------- */

function Icon({
  name,
  width,
  height,
  className = "",
}: {
  name: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <Image
      src={`${ASSETS}/${name}`}
      alt=""
      width={width}
      height={height}
      unoptimized
      aria-hidden
      className={`shrink-0 block max-w-none ${className}`}
      style={{ width, height }}
    />
  );
}

const SHADOW_SOFT = "drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]";

/* -------------------------------------------------------------------------- */
/*  Phone preview                                                             */
/* -------------------------------------------------------------------------- */

function VariableChip({ n }: { n: number }) {
  return (
    <span
      dir="ltr"
      className="inline-flex h-[16px] w-[45.02px] items-center justify-center rounded-[4px] bg-[#d8e8cb] align-middle text-[11px] font-bold leading-[17.88px] text-[#5a6952]"
    >
      {`{{${n}}}`}
    </span>
  );
}

function PhoneInputBar({ className }: { className: string }) {
  return (
    <div className={`absolute flex items-center gap-[6px] pt-[8px] ${className}`}>
      <div
        className={`flex h-[40px] min-w-0 flex-1 items-center justify-between rounded-full bg-white ps-[11.99px] pe-[12px] ${SHADOW_SOFT}`}
      >
        <div className="flex items-center gap-[7.99px]">
          <Icon name="phone_emoji.svg" width={15} height={15} />
          <span className="text-[12px] leading-[16px] text-[rgba(69,72,64,0.7)]">
            اكتب رسالة...
          </span>
        </div>
        <div className="flex items-center gap-[8px]">
          <Icon name="phone_attach.svg" width={9.375} height={15} />
          <Icon name="phone_camera.svg" width={15} height={13.5} />
        </div>
      </div>
      <div className="relative flex size-[40px] shrink-0 items-center justify-center rounded-full bg-[#1f3c2c] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
        <Icon name="phone_send_mic.svg" width={10.5} height={14.25} />
      </div>
    </div>
  );
}

function StandardPreviewContent() {
  return (
    <>
      <div className="absolute inset-x-[12px] top-[12px] flex flex-col items-center gap-[12px]">
        <div className="rounded-[8px] bg-[rgba(255,255,255,0.9)] px-[12px] py-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
          <span className="text-[11px] font-medium leading-[16.5px] text-[#454840]">اليوم</span>
        </div>

        <div className="flex w-full flex-col gap-[8px] rounded-[16px] rounded-ss-none bg-white p-[12px] drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.12)]">
          {/* Header media */}
          <div className="relative flex h-[128px] w-full items-center justify-center overflow-hidden rounded-[12px] bg-[#e5eae0]">
            <div className="flex h-full min-w-px flex-1 items-center justify-center bg-[rgba(52,66,42,0.2)]">
              <Icon name="phone_media_image.svg" width={30} height={27} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] via-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0)]" />
            <div className="absolute bottom-[8px] start-[8px] flex items-center gap-[4px]">
              <Icon name="phone_location_pin.svg" width={10.5} height={10.5} />
              <span className="whitespace-nowrap text-[11px] font-bold leading-[16.5px] text-white">
                برج الملقا الفاخر - الرياض
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="flex w-full flex-col gap-[6px]">
            <p className="text-[13px] leading-[21.13px] text-[#111b21]">
              مرحباً <VariableChip n={1} />،
            </p>
            <p className="text-[13px] leading-[21.13px] text-[#111b21]">
              تم تأكيد تسجيل وصولك بنجاح في عقار
              <br />
              <VariableChip n={2} /> (الوحدة <VariableChip n={3} />).
            </p>

            <div className="flex w-full flex-col gap-[4px] rounded-[12px] bg-[#f6f7f4] p-[8px]">
              <div className="flex w-full items-center justify-between">
                <span className="text-[12px] leading-[19.5px] text-[#454840]">تاريخ الدخول:</span>
                <span
                  dir="ltr"
                  className="block w-[36.02px] text-start text-[12px] font-bold leading-[19.5px] text-[#181d17]"
                >
                  {"{{4}}"}
                </span>
              </div>
              <div className="flex w-full items-center justify-between">
                <span className="text-[12px] leading-[19.5px] text-[#454840]">كود الدخول الذكي:</span>
                <span
                  dir="ltr"
                  className="block w-[36.02px] text-start text-[12px] font-bold leading-[19.5px] text-[#34422a]"
                >
                  {"{{5}}"}
                </span>
              </div>
            </div>

            <p className="text-[12px] leading-[19.5px] text-[#454840]">نتمنى لك إقامة مميزة وسعيدة!</p>
          </div>

          {/* Time & ticks */}
          <div className="flex h-[16px] w-full items-center justify-start gap-[4px] ps-[169.93px]">
            <span className="whitespace-nowrap text-[10px] leading-[15px] text-[#454840]">10:32 ص</span>
            <Icon name="phone_double_check.svg" width={12.775} height={7.015} />
          </div>
        </div>

        <div
          className={`flex items-center gap-[6px] rounded-[8px] bg-[#ffeecd] px-[12px] py-[6px] ${SHADOW_SOFT}`}
        >
          <Icon name="phone_lock.svg" width={8} height={10.5} />
          <p className="w-[208.66px] text-center text-[10px] leading-[12.5px] text-[#54656f]">
            الرسائل مشفرة تماماً بين الطرفين (End-to-end
            <br />
            encrypted)
          </p>
        </div>
      </div>

      <PhoneInputBar className="inset-x-[12px] top-[544.88px]" />
    </>
  );
}

interface CarouselCardData {
  badge: string;
  badgeClass: string;
  image: string;
  title: string;
  descriptionLines: [string, string];
  price: string;
  primaryAction: string;
  secondaryAction: string;
}

const CAROUSEL_CARDS: CarouselCardData[] = [
  {
    badge: "فيلا 01",
    badgeClass: "bg-[rgba(52,66,42,0.9)]",
    image: "carousel_card_villa.png",
    title: "فيلا نجد الفاخرة - حطين",
    descriptionLines: ["مساحة 450م² • 5 أجنحة نوم • مسبح خاص", "وحديقة داخلية"],
    price: "4,500,000 ر.س",
    primaryAction: "حجز موعد للمعاينة",
    secondaryAction: "عرض الكتيّب التفصيلي",
  },
  {
    badge: "بنتهاوس 04",
    badgeClass: "bg-[rgba(84,98,76,0.9)]",
    image: "carousel_card_penthouse.png",
    title: "بنتهاوس برج السحاب",
    descriptionLines: ["إطلالة بانورامية كاملة • مصعد خاص •", "خدمات فندقية 24/7"],
    price: "2,800,000 ر.س",
    primaryAction: "طلب اتصال فوري",
    secondaryAction: "موقع العقار بالخريطة",
  },
];

function CarouselCard({ card }: { card: CarouselCardData }) {
  return (
    <div className="flex h-full w-[210px] shrink-0 flex-col justify-between overflow-hidden rounded-[16px] bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
      <div className="flex w-full flex-col">
        <div className="relative h-[112px] w-full overflow-hidden bg-[#ebefe6]">
          <div className="absolute inset-x-0 top-[-1.09%] h-[102.17%]">
            <Image
              src={`${ASSETS}/${card.image}`}
              alt=""
              fill
              sizes="210px"
              unoptimized
              className="object-cover"
            />
          </div>
          <span
            className={`absolute start-[8px] top-[8px] rounded-full px-[8px] py-[2px] text-[10px] leading-[15px] text-white backdrop-blur-[2px] ${card.badgeClass}`}
          >
            {card.badge}
          </span>
        </div>
        <div className="flex w-full flex-col gap-[4px] p-[10px]">
          <p className="w-full overflow-hidden whitespace-nowrap text-[12px] font-bold leading-[18px] text-[#181d17]">
            {card.title}
          </p>
          <p className="h-[35.75px] w-full overflow-hidden whitespace-nowrap text-[11px] leading-[17.88px] text-[#454840]">
            {card.descriptionLines[0]}
            <br />
            {card.descriptionLines[1]}
          </p>
          <p className="w-full pt-[2px] text-[11px] font-bold leading-[16.5px] text-[#34422a]">
            {card.price}
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-[4px] px-[8px] pb-[8px]">
        <div className="flex w-full items-center justify-center gap-[4px] rounded-[8px] bg-[#f1f5eb] px-[8px] py-[6px]">
          <Icon name="phone_cta_call.svg" width={10.106} height={12.25} />
          <span className="whitespace-nowrap text-[11px] font-bold leading-[16.5px] text-[#34422a]">
            {card.primaryAction}
          </span>
        </div>
        <div className="flex w-full items-center justify-center gap-[4px] rounded-[8px] px-[8px] py-[4px]">
          <Icon name="phone_cta_link.svg" width={9.75} height={9.75} />
          <span className="whitespace-nowrap text-[10px] leading-[15px] text-[#454840]">
            {card.secondaryAction}
          </span>
        </div>
      </div>
    </div>
  );
}

function CarouselPreviewContent() {
  return (
    <>
      <div className="absolute inset-x-0 top-[21px] flex justify-center">
        <span className="rounded-full bg-[rgba(229,234,224,0.9)] px-[12px] py-[2px] text-[11px] leading-[16.5px] text-[#454840]">
          اليوم • 11:20 ص
        </span>
      </div>

      {/* Intro bubble */}
      <div className="absolute start-[5px] top-[58px] flex w-[303.3px] flex-col gap-[4px] rounded-[16px] rounded-ss-none bg-white px-[12px] pb-[12px] pt-[11.125px]">
        <p className="w-full whitespace-nowrap text-start text-[13px] leading-[21.13px] text-[#181d17]">
          أهلاً بك عزيزي المستثمر، يسرنا مشاركتك أحدث
          <br />
          الوحدات العقارية المتاحة للحجز المباشر عبر منصة
          <br />
          صَرْح:
        </p>
        <div className="flex w-full items-center justify-start gap-[4px] ps-[203.43px]">
          <span className="whitespace-nowrap text-[10px] leading-[15px] text-[#454840]">11:20 ص</span>
          <Icon name="phone_double_check_carousel.svg" width={11.738} height={7.213} />
        </div>
      </div>

      {/* Carousel */}
      <div className="absolute inset-x-0 top-[176.13px] flex flex-col gap-[8px] py-[4px]">
        <div
          className="no-scrollbar flex h-[283.75px] gap-[10px] overflow-x-auto overflow-y-hidden pb-[8px] ps-[5px]"
          role="list"
          aria-label="شرائح المعاينة"
        >
          {CAROUSEL_CARDS.map((card) => (
            <CarouselCard key={card.badge} card={card} />
          ))}
          <div className="flex h-full w-[45px] shrink-0 items-center justify-center overflow-hidden rounded-[16px] bg-[rgba(255,255,255,0.8)] opacity-60">
            <Icon name="phone_carousel_peek.svg" width={16.667} height={16.667} />
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-[6px]">
          <span className="h-[6px] w-[16px] rounded-full bg-[#34422a]" />
          <span className="size-[6px] rounded-full bg-[rgba(69,72,64,0.3)]" />
          <span className="size-[6px] rounded-full bg-[rgba(69,72,64,0.3)]" />
        </div>
      </div>

      <PhoneInputBar className="start-[14px] end-[10px] top-[514px]" />
    </>
  );
}

function PhonePreview({ variant }: { variant: "standard" | "carousel" }) {
  return (
    <div
      className="relative mx-auto h-[786px] w-full max-w-[390px] lg:sticky lg:top-[20px]"
      data-name="WhatsApp Phone Preview Mockup"
    >
      <div className="absolute inset-x-0 top-[48px] flex flex-col items-start rounded-[44px] bg-[#1e231d] p-[12px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
        <div className="relative isolate flex h-[670px] w-full flex-col items-start overflow-hidden rounded-[36px] bg-[#efeae2]">
          {/* Chat header */}
          <div
            className={`relative z-[3] flex w-full items-center justify-between bg-[#1f3c2c] pb-[12px] pt-[32px] ps-[12px] pe-[2.44px] ${SHADOW_SOFT}`}
          >
            <div className="flex items-center gap-[8px]">
              <Icon name="phone_header_back.svg" width={13.333} height={13.333} />
              <div className="relative flex size-[36px] shrink-0 items-center justify-center rounded-full bg-[#d8e8cb] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]">
                <span className="text-[12px] font-bold leading-[16px] text-[#2d3a24]">ابراج</span>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-[3.99px]">
                  <span className="whitespace-nowrap text-[12px] font-bold leading-[16px] text-white">
                    ابراج لإدارة الأصول
                  </span>
                  <Icon name="phone_verified.svg" width={11} height={10.5} />
                </div>
                <p className="text-[10px] leading-[10px] text-[rgba(255,255,255,0.8)]">
                  حساب أعمال موثق •
                  <br />
                  متصل الآن
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[12px]">
              <Icon name="phone_header_video.svg" width={15} height={12} />
              <Icon name="phone_header_call.svg" width={13.5} height={13.5} />
              <Icon name="phone_header_menu.svg" width={3} height={12} />
            </div>
          </div>

          {/* Chat canvas */}
          <div className="relative z-[2] min-h-px w-full flex-1 overflow-hidden bg-[rgba(239,234,226,0.9)]">
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 19.4px 40.6px at 50% 50%, rgb(45,58,36) 8.8%, rgba(45,58,36,0) 8.8%)",
              }}
            />
            {variant === "standard" ? <StandardPreviewContent /> : <CarouselPreviewContent />}
          </div>

          {/* iOS home indicator */}
          <div className="relative z-[1] flex h-[16px] w-full items-center justify-center bg-[rgba(255,255,255,0.8)] pb-[4px]">
            <span className="h-[4px] w-[128px] rounded-full bg-[rgba(0,0,0,0.4)]" />
          </div>
        </div>

        {/* Dynamic island */}
        <div className="absolute inset-x-0 top-[20px] mx-auto flex h-[16px] w-[112px] items-center rounded-full bg-black">
          <span className="absolute end-[12px] size-[8px] rounded-full bg-[#182017]" />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Form pieces                                                               */
/* -------------------------------------------------------------------------- */

function RequiredLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex h-[20px] items-center gap-[6px] text-[14px] font-bold leading-[20px] text-[#181d17]"
    >
      <span>{children}</span>
      <span aria-hidden className="text-[#ba1a1a]">
        *
      </span>
    </label>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  iconName,
  iconWidth,
  iconHeight,
  iconInset,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  iconName: string;
  iconWidth: number;
  iconHeight: number;
  iconInset: number;
}) {
  return (
    <div className="flex w-full flex-col gap-[8px]">
      <RequiredLabel htmlFor={id}>{label}</RequiredLabel>
      <div className="relative w-full">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-[48px] w-full cursor-pointer appearance-none rounded-[12px] border border-transparent bg-[#f1f5eb] ps-[44px] pe-[16px] text-[14px] leading-[22px] text-[#181d17] outline-none transition-shadow focus-visible:border-[#34422a] focus-visible:ring-2 focus-visible:ring-[rgba(52,66,42,0.25)]"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span
          className="pointer-events-none absolute top-[12px] flex items-center justify-center"
          style={{ insetInlineStart: iconInset, width: iconWidth, height: iconHeight }}
        >
          <Icon name={iconName} width={iconWidth} height={iconHeight} />
        </span>
        <span className="pointer-events-none absolute end-[18px] top-[19.97px]">
          <Icon name="icon_select_chevron.svg" width={12} height={7.4} />
        </span>
      </div>
    </div>
  );
}

function StepperItem({
  step,
  active,
}: {
  step: { id: number; title: string };
  active: boolean;
}) {
  return (
    <li
      aria-current={active ? "step" : undefined}
      className={`flex h-[52px] min-w-[150px] flex-1 items-center gap-[12px] rounded-[12px] p-[8px] ${
        active ? "bg-[rgba(216,232,203,0.5)]" : ""
      }`}
    >
      <span
        className={`flex size-[32px] shrink-0 items-center justify-center rounded-[8px] font-semibold ${
          active
            ? `bg-[#34422a] text-[18px] leading-[28px] text-white ${SHADOW_SOFT}`
            : "bg-[#e5eae0] text-[14px] leading-[20px] text-[#454840]"
        }`}
      >
        {step.id}
      </span>
      <span className="flex min-w-0 flex-col items-start">
        <span
          className={
            active
              ? "text-[11px] font-semibold uppercase leading-[16px] tracking-[0.55px] text-[#34422a]"
              : "text-[11px] font-medium leading-[16px] text-[#454840]"
          }
        >
          الخطوة {step.id}
        </span>
        <span
          className={`w-full truncate text-[14px] font-semibold leading-[20px] ${
            active ? "text-[#181d17]" : "text-[#454840]"
          }`}
        >
          {step.title}
        </span>
      </span>
    </li>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main view                                                                 */
/* -------------------------------------------------------------------------- */

function sanitizeTemplateName(value: string) {
  return value
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "")
    .slice(0, NAME_MAX_LENGTH);
}

export function TemplateCreateView() {
  const [templateType, setTemplateType] = useState<TemplateType>("standard");
  const [name, setName] = useState("booking_arrival_reminder");
  const [language, setLanguage] = useState("ar");
  const [category, setCategory] = useState("utility");
  const [nameError, setNameError] = useState<string | null>(null);
  const [previewVersion, setPreviewVersion] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const previewVariant = templateType === "standard" ? "standard" : "carousel";

  const persistDraft = () => {
    try {
      window.localStorage.setItem(
        DRAFT_STORAGE_KEY,
        JSON.stringify({ templateType, name, language, category, savedAt: new Date().toISOString() }),
      );
    } catch {
      /* storage unavailable: ignore */
    }
  };

  const validate = () => {
    if (!name.trim()) {
      setNameError("اسم القالب البرمجي مطلوب");
      return false;
    }
    setNameError(null);
    return true;
  };

  const handleSaveDraft = () => {
    if (!validate()) return;
    persistDraft();
    showToast.success("تم حفظ القالب كمسودة");
  };

  const handleContinue = () => {
    if (!validate()) return;
    persistDraft();
    showToast.underDevelopment("الخطوة 2: الوسائط");
  };

  const handleRefreshPreview = () => {
    if (refreshing) return;
    setRefreshing(true);
    window.setTimeout(() => {
      setPreviewVersion((v) => v + 1);
      setRefreshing(false);
      showToast.success("تم تحديث المعاينة");
    }, 500);
  };

  return (
    <div className="flex w-full flex-col gap-[24px]" dir="rtl" lang="ar">
      {/* Hero */}
      <section
        className={`flex min-h-[102px] flex-col justify-center rounded-[16px] bg-white px-[27px] pb-[25px] pt-[17px] ${SHADOW_SOFT}`}
        data-name="Section - TOP HERO GREETING BAR"
      >
        <div className="flex flex-wrap items-center gap-x-[19px] gap-y-[4px]">
          <h1 className="text-[24px] font-bold leading-[34px] text-[#181d17]">إنشاء قالب Meta WhatsApp</h1>
          <span
            dir="ltr"
            className="rounded-full bg-[#eaf1e8] px-[10px] py-[2px] text-[12px] font-semibold leading-[16px] text-[#4b5940]"
          >
            Meta Cloud API v20.0
          </span>
        </div>
        <p className="pt-[4px] text-[14px] leading-[22px] text-[#454840]">
          إنشاء واعتماد قوالب رسائل WhatsApp Business الرسمية للحملات التلقائية والإشعارات الفورية
        </p>
      </section>

      {/* Stepper */}
      <nav aria-label="خطوات إنشاء القالب" className={`rounded-[16px] bg-white p-[16px] ${SHADOW_SOFT}`}>
        <ol className="no-scrollbar flex w-full items-center overflow-x-auto">
          {STEPS.map((step) => (
            <StepperItem key={step.id} step={step} active={step.id === 1} />
          ))}
        </ol>
      </nav>

      {/* Two column layout: form (8 cols) + phone preview (4 cols) */}
      <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-12">
        <div className="flex flex-col gap-[24px] lg:col-span-8">
          <form
            onSubmit={(e) => e.preventDefault()}
            noValidate
            className={`flex flex-col gap-[24px] rounded-[16px] bg-white p-[24px] ${SHADOW_SOFT}`}
          >
            {/* Section 1: template type */}
            <fieldset className="flex w-full flex-col gap-[12px]">
              <legend className="sr-only">نوع القالب</legend>
              <div className="flex items-center gap-[8px]" aria-hidden>
                <span className="size-[10px] rounded-full bg-[#34422a]" />
                <span className="text-[18px] font-semibold leading-[28px] text-[#181d17]">نوع القالب</span>
              </div>
              <div role="radiogroup" aria-label="نوع القالب" className="flex flex-col gap-[12px] pt-[4px] sm:flex-row">
                {TEMPLATE_TYPES.map((option) => {
                  const selected = option.id === templateType;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setTemplateType(option.id)}
                      className={`flex min-h-[202px] min-w-px flex-1 cursor-pointer flex-col items-start rounded-[12px] p-[16px] text-start transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34422a] ${
                        selected
                          ? "bg-[rgba(216,232,203,0.4)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                          : "bg-[#f1f5eb] hover:bg-[rgba(216,232,203,0.25)]"
                      }`}
                    >
                      <span className="flex w-full items-center pb-[12px]">
                        <span
                          className={`flex size-[20px] items-center justify-center rounded-full ${
                            selected ? "bg-[#34422a]" : "bg-[#dfe4db]"
                          }`}
                        >
                          {selected && <Icon name="icon_card_check.svg" width={10.442} height={7.963} />}
                        </span>
                      </span>
                      <span className="block w-full text-[18px] font-semibold leading-[28px] text-[#181d17]">
                        {option.title}
                      </span>
                      <span className="block w-full pt-[5.19px] text-[13px] leading-[21.13px] text-[#454840]">
                        {option.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* Section 2: template name */}
            <div className="flex w-full flex-col gap-[8px]">
              <RequiredLabel htmlFor="template-name">اسم القالب البرمجي</RequiredLabel>
              <div className="relative w-full">
                <input
                  id="template-name"
                  type="text"
                  inputMode="text"
                  autoComplete="off"
                  spellCheck={false}
                  value={name}
                  maxLength={NAME_MAX_LENGTH}
                  aria-invalid={nameError ? true : undefined}
                  aria-describedby="template-name-hint"
                  onChange={(e) => {
                    setName(sanitizeTemplateName(e.target.value));
                    if (nameError) setNameError(null);
                  }}
                  className="h-[48px] w-full rounded-[12px] border border-transparent bg-[#f1f5eb] ps-[44px] pe-[16px] text-[14px] tracking-[0.35px] text-[#181d17] outline-none transition-shadow focus-visible:border-[#34422a] focus-visible:ring-2 focus-visible:ring-[rgba(52,66,42,0.25)] aria-[invalid=true]:border-[#ba1a1a]"
                />
                <span className="pointer-events-none absolute start-[16px] top-1/2 -translate-y-1/2">
                  <Icon name="icon_name_hash.svg" width={18} height={16} />
                </span>
              </div>
              <div className="flex w-full items-center justify-between gap-[8px]">
                <div id="template-name-hint" className="flex items-center gap-[3.99px]">
                  <Icon name="icon_name_hint.svg" width={11.667} height={11.667} />
                  <span className="text-[10px] leading-[16px] text-[#454840]">
                    يُسمح بالأحرف الإنجليزية الصغيرة (lowercase)، والأرقام، والشرطة السفلية (_) فقط دون مسافات.
                  </span>
                </div>
                <span className="whitespace-nowrap text-[10px] leading-[16px] text-[#454840]">
                  {name.length} / {NAME_MAX_LENGTH} حرف
                </span>
              </div>
              {nameError && (
                <p role="alert" className="text-[11px] font-medium leading-[16px] text-[#ba1a1a]">
                  {nameError}
                </p>
              )}
            </div>

            {/* Section 3: language & category */}
            <div className="grid w-full grid-cols-1 items-start gap-[16px] sm:min-h-[116px] sm:grid-cols-2">
              <SelectField
                id="template-language"
                label="لغة القالب"
                value={language}
                onChange={setLanguage}
                options={LANGUAGE_OPTIONS}
                iconName="icon_language.svg"
                iconWidth={20}
                iconHeight={20}
                iconInset={14}
              />
              <SelectField
                id="template-category"
                label="فئة القالب المعتمدة"
                value={category}
                onChange={setCategory}
                options={CATEGORY_OPTIONS}
                iconName="icon_category.svg"
                iconWidth={19}
                iconHeight={20}
                iconInset={13.99}
              />
            </div>

            {/* Section 4: guidelines */}
            <aside className="flex w-full items-start gap-[16px] rounded-[16px] bg-[rgba(216,232,203,0.3)] p-[16px]">
              <span className="flex size-[40px] shrink-0 items-center justify-center rounded-[12px] bg-[#d8e8cb]">
                <Icon name="icon_guidelines.svg" width={16} height={20} />
              </span>
              <div className="flex min-w-0 flex-1 flex-col gap-[8px]">
                <h2 className="text-[14px] font-bold leading-[20px] text-[#181d17]">
                  إرشادات وقواعد تسمية واعتماد قوالب
                </h2>
                <ul className="grid grid-cols-1 gap-[8px] sm:grid-cols-2">
                  {GUIDELINES.map((text) => (
                    <li key={text} className="flex min-h-[40px] items-center gap-[8px]">
                      <Icon name="icon_guideline_check.svg" width={11.667} height={11.667} />
                      <span className="text-[13px] leading-[20px] text-[#454840]">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </form>

          {/* Action footer */}
          <div
            className={`flex flex-wrap items-center justify-between gap-[12px] rounded-[16px] bg-white p-[16px] ${SHADOW_SOFT}`}
          >
            <div className="flex items-center gap-[8px]">
              <button
                type="button"
                disabled
                className="flex cursor-not-allowed items-center gap-[8px] rounded-[12px] bg-[#e5eae0] px-[20px] py-[10px]"
              >
                <span className="px-[9.12px] text-center text-[14px] font-semibold leading-[20px] text-[#75786f]">
                  الخطوة
                  <br />
                  السابقة
                </span>
                <Icon name="icon_previous.svg" width={12} height={12} />
              </button>
              <button
                type="button"
                onClick={handleRefreshPreview}
                disabled={refreshing}
                className="flex cursor-pointer items-center gap-[8px] rounded-[12px] bg-[#ebefe6] px-[16px] py-[10px] transition-colors hover:bg-[#e0e7d9] active:scale-[0.98] disabled:opacity-70"
              >
                <Icon
                  name="icon_refresh_preview.svg"
                  width={16.5}
                  height={11.25}
                  className={refreshing ? "animate-pulse" : ""}
                />
                <span className="px-[5.97px] text-center text-[14px] font-semibold leading-[20px] text-[#181d17]">
                  تحديث
                  <br />
                  المعاينة
                </span>
              </button>
            </div>
            <div className="flex items-center gap-[12px]">
              <button
                type="button"
                onClick={handleSaveDraft}
                className="h-[40px] cursor-pointer rounded-[12px] bg-[#f1f5eb] px-[25.5px] py-[10px] text-center text-[14px] font-semibold leading-[20px] text-black transition-colors hover:bg-[#e5ebdc] active:scale-[0.98]"
              >
                حفظ كمسودة
              </button>
              <button
                type="button"
                onClick={handleContinue}
                className="flex cursor-pointer items-center gap-[8px] rounded-[12px] bg-[#34422a] px-[24px] py-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] transition-colors hover:bg-[#283420] active:scale-[0.98]"
              >
                <span className="px-[3px] text-center text-[14px] font-semibold leading-[20px] text-white">
                  المتابعة
                </span>
                <Icon name="icon_continue.svg" width={12} height={12} />
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div key={`${previewVariant}-${previewVersion}`} className="h-full">
            <PhonePreview variant={previewVariant} />
          </div>
        </div>
      </div>
    </div>
  );
}
