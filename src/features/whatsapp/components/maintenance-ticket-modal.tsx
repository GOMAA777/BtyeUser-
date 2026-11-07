"use client";

import { useEffect, useId, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  DEFAULT_TICKET_ID,
  getMaintenanceTicket,
} from "../data/mock-maintenance-ticket";
import type {
  MaintenanceTicketDetails,
  MaintenanceTicketTimelineStep,
} from "../maintenance-ticket.types";

const ASSETS = "/assets/whatsapp/modal";

/** Route of the maintenance ticket details page. */
export const MAINTENANCE_TICKET_HREF = "/maintenance/details";

export interface MaintenanceTicketModalProps {
  open: boolean;
  onClose: () => void;
  ticketId?: string;
  /** Optional: override the ticket data (defaults to the mock ticket). */
  ticket?: MaintenanceTicketDetails;
  /** Called by the secondary button "فتح المحادثة" (defaults to onClose). */
  onOpenChat?: () => void;
}

/* -------------------------------------------------------------------------- */
/*  Small building blocks                                                      */
/* -------------------------------------------------------------------------- */

function Asset({
  src,
  width,
  height,
  className = "",
}: {
  src: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <span
      className={`relative block shrink-0 ${className}`}
      style={{ width, height }}
      aria-hidden="true"
    >
      <Image
        src={`${ASSETS}/${src}`}
        alt=""
        width={width}
        height={height}
        className="absolute inset-0 block size-full max-w-none"
      />
    </span>
  );
}

function InfoCell({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: { src: string; width: number; height: number };
}) {
  return (
    <div className="flex flex-col items-start rounded-[12px] border border-[rgba(229,232,226,0.6)] bg-white p-[9px] text-start">
      <p className="pb-[2px] text-[11px] font-medium leading-[16px] text-[#75786f]">
        {label}
      </p>
      <div className="flex items-center gap-[6px]">
        <Asset {...icon} />
        <p className="text-[13px] font-semibold leading-[20px] text-[#181d17]">
          {value}
        </p>
      </div>
    </div>
  );
}

/** Mini audio waveform, bar order mirrors the Figma frame (left → right). */
const WAVEFORM_BARS: { height: number; active: boolean }[] = [
  { height: 4, active: false },
  { height: 16, active: true },
  { height: 12, active: false },
  { height: 20, active: true },
  { height: 8, active: false },
  { height: 16, active: true },
  { height: 24, active: true },
  { height: 8, active: false },
  { height: 20, active: true },
  { height: 12, active: true },
];

function TimelineStep({
  step,
  isLast,
}: {
  step: MaintenanceTicketTimelineStep;
  isLast: boolean;
}) {
  const isCurrent = step.state === "current";

  return (
    <li className="relative flex items-start gap-[8px]">
      {/* vertical connector */}
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute start-[14px] top-[28px] h-[28px] w-[2px]"
          style={{ backgroundColor: step.connectorColor ?? "#3e8a5a" }}
        />
      )}

      {/* step icon */}
      {isCurrent ? (
        <span className="flex size-[28px] shrink-0 items-center justify-center rounded-full bg-[#4b5940] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
          <Asset src="icon_timeline_current.svg" width={10.667} height={13.333} />
        </span>
      ) : (
        <span className="flex size-[28px] shrink-0 items-center justify-center rounded-full bg-[#eaf1e8]">
          <Asset src="icon_timeline_check.svg" width={10.867} height={8.017} />
        </span>
      )}

      {/* content */}
      <div className="flex min-w-px flex-1 items-center justify-between pt-[2px]">
        <div className="flex flex-col items-start text-start">
          <p
            className={`text-[12px] font-bold leading-[18px] ${
              isCurrent ? "text-[#34422a]" : "text-[#181d17]"
            }`}
          >
            {step.title}
          </p>
          <p
            className={`text-[13px] leading-[20px] ${
              isCurrent
                ? "font-medium text-[#454840]"
                : "font-normal text-[#75786f]"
            }`}
          >
            {step.description}
          </p>
        </div>

        {isCurrent ? (
          <span className="shrink-0 rounded-full bg-[#d8e8c7] px-[8px] py-[2px] text-[11px] font-bold leading-[16px] text-[#131f0b]">
            الآن
          </span>
        ) : (
          <span className="shrink-0 text-[11px] font-medium leading-[16px] text-[#75786f]">
            {step.time}
          </span>
        )}
      </div>
    </li>
  );
}

/* -------------------------------------------------------------------------- */
/*  Modal                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * "تفاصيل الطلب: بلاغ صيانة" slide-over drawer (Figma node 1:9863).
 * Renders `absolute inset-0`, so it must live inside a `relative` container
 * (the WhatsApp inbox area) – the dashboard header stays un-dimmed, as in Figma.
 */
export function MaintenanceTicketModal({
  open,
  onClose,
  ticketId = DEFAULT_TICKET_ID,
  ticket,
  onOpenChat,
}: MaintenanceTicketModalProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);

  const data = useMemo(
    () => ticket ?? getMaintenanceTicket(ticketId),
    [ticket, ticketId]
  );

  useEffect(() => {
    if (!open) return;
    dialogRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="absolute inset-0 z-40 overflow-hidden" dir="rtl" lang="ar">
      {/* DIMMED BACKDROP OVERLAY */}
      <div
        className="absolute inset-0 bg-[rgba(24,29,23,0.4)] backdrop-blur-[1.5px]"
        onClick={onClose}
        aria-hidden="true"
        data-name="DIMMED BACKDROP OVERLAY"
      />

      {/* Dialog – STRUCTURED REQUEST SLIDE-OVER DRAWER */}
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="absolute inset-y-0 end-0 flex w-full max-w-[530px] flex-col outline-none border-s border-[#e5e8e2] bg-white drop-shadow-[-16px_0px_24px_rgba(24,29,23,0.18)]"
        data-node-id="1:9991"
        data-name="Dialog - STRUCTURED REQUEST SLIDE-OVER DRAWER"
      >
        {/* DRAWER HEADER */}
        <header
          className="flex shrink-0 flex-col gap-[4px] border-b border-[#e5e8e2] bg-[#f1f5eb] px-[24px] pb-[17px] pt-[16px]"
          data-node-id="1:9992"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[4px]">
              <span className="inline-flex items-center gap-[4px] rounded-full bg-[#4b5940] px-[10px] py-[4px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
                <Asset src="icon_badge_auto.svg" width={10} height={12.5} />
                <span className="text-[11px] font-semibold leading-[16px] tracking-[0.275px] text-white">
                  {data.automatedBadge}
                </span>
              </span>
              <span className="text-[11px] font-medium leading-[16px] text-[#75786f]">
                {data.automatedLabel}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="إغلاق اللوحة الجانبية"
              className="flex size-[36px] shrink-0 cursor-pointer items-center justify-center rounded-[12px] bg-[#ebefe6] transition-colors hover:bg-[#dfe4db] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34422a]"
            >
              <Asset src="icon_close.svg" width={11.667} height={11.667} />
            </button>
          </div>

          <div className="flex h-[54px] items-start justify-between">
            <div className="flex flex-col gap-[2px] text-start">
              <h2
                id={titleId}
                className="text-[24px] font-bold leading-[34px] tracking-[-0.6px] text-[#181d17]"
              >
                تفاصيل الطلب: بلاغ صيانة
              </h2>
              <div className="flex items-center gap-[8px]">
                <span className="text-[12px] font-bold leading-[18px] text-[#34422a]">
                  رقم التذكرة: {data.ticketId}
                </span>
                <span className="text-[11px] font-medium leading-[16px] text-[#75786f]">
                  •
                </span>
                <span className="text-[11px] font-medium leading-[16px] text-[#75786f]">
                  {data.createdNote}
                </span>
              </div>
            </div>

            <span className="mt-[4px] inline-flex items-center gap-[6px] rounded-full border border-[rgba(62,138,90,0.2)] bg-[#eaf1e8] px-[13px] py-[5px]">
              <Asset src="icon_badge_check.svg" width={13.333} height={13.333} />
              <span className="text-[11px] font-bold leading-[16px] text-[#3e8a5a]">
                {data.createdBadge}
              </span>
            </span>
          </div>
        </header>

        {/* DRAWER SCROLLABLE BODY */}
        <div
          className="custom-scrollbar min-h-0 flex-1 overflow-y-auto pt-[15px]"
          data-node-id="1:10021"
        >
          {/* SECTION 1: TENANT & PROPERTY SUMMARY CARD */}
          <section
            className="mx-[24px] flex flex-col gap-[16px] rounded-[16px] border border-[#e5e8e2] bg-[#f6f7f4] p-[17px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
            data-node-id="1:10022"
          >
            <div className="flex items-center justify-between border-b border-[#e5e8e2] pb-[9px]">
              <div className="flex items-center gap-[8px]">
                <div className="relative">
                  <div className="relative size-[48px] overflow-hidden rounded-[12px] border border-[#e5e8e2]">
                    <Image
                      src={`${ASSETS}/avatar_khaled.jpg`}
                      alt={data.guestName}
                      width={176}
                      height={96}
                      className="absolute inset-0 size-full max-w-none object-cover"
                    />
                  </div>
                  <span className="absolute -bottom-[4px] -end-[4px] size-[14px] rounded-full bg-[#3e8a5a] shadow-[0px_0px_0px_2px_white]" />
                </div>

                <div className="flex flex-col items-start text-start">
                  <div className="flex items-center gap-[7.99px]">
                    <p className="text-[18px] font-bold leading-[28px] text-[#181d17]">
                      {data.guestName}
                    </p>
                    <span className="rounded-full bg-[#eaf1e8] px-[8px] py-[2px] text-[11px] font-semibold leading-[16px] text-[#3e8a5a]">
                      {data.guestStatus}
                    </span>
                  </div>
                  <p className="text-[13px] font-normal leading-[20px] text-[#75786f]">
                    <span dir="ltr" className="inline-block">
                      {data.guestPhone}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-[4.5px] pb-[1.5px] text-start">
                <p className="text-[11px] font-medium leading-[16px] text-[#75786f]">
                  رقم الحجز
                </p>
                <p className="text-[12px] font-bold leading-[18px] text-[#181d17]">
                  {data.bookingId}
                </p>
              </div>
            </div>

            {/* Property Unit Details Grid */}
            <div className="grid grid-cols-2 gap-[8px]">
              <InfoCell
                label="العقار والأصل"
                value={data.propertyName}
                icon={{ src: "icon_property.svg", width: 13.5, height: 13.5 }}
              />
              <InfoCell
                label="الوحدة المحددة"
                value={data.unitName}
                icon={{ src: "icon_unit.svg", width: 13.5, height: 13.5 }}
              />
              <InfoCell
                label="تاريخ وتوقيت الطلب"
                value={data.requestedAt}
                icon={{ src: "icon_calendar.svg", width: 15, height: 15 }}
              />
              <InfoCell
                label="مصدر الطلب"
                value={data.source}
                icon={{
                  src: "icon_whatsapp_source.svg",
                  width: 12.994,
                  height: 15.75,
                }}
              />
            </div>

            <div className="flex items-center gap-[8px] pt-[4px]">
              <Asset src="icon_quick_action.svg" width={13.333} height={13.333} />
              <p className="text-[11px] font-medium leading-[16px] text-[#75786f]">
                {data.sourceNote}
              </p>
            </div>
          </section>

          {/* SECTION 2: REQUEST DETAILS & REPORTED FAULT */}
          <section
            className="mx-[24px] mt-[40px] flex flex-col gap-[8px]"
            data-node-id="1:10083"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[8px]">
                <Asset src="icon_fault_details.svg" width={15} height={16.667} />
                <h3 className="text-[14px] font-bold leading-[20px] text-[#181d17]">
                  تفاصيل العطل والطلب المبلغ عنه
                </h3>
              </div>
              <span className="inline-flex items-center gap-[4px] rounded-full bg-[#fff4e5] px-[10px] py-[2px]">
                <Asset
                  src="icon_priority_warning.svg"
                  width={12.833}
                  height={11.083}
                />
                <span className="text-[11px] font-bold leading-[16px] text-[#e99a38]">
                  {data.priorityLabel}
                </span>
              </span>
            </div>

            {/* Tenant verbatim text quote */}
            <div className="flex flex-col gap-[8px] rounded-[16px] border border-[#e5e8e2] bg-white p-[17px]">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium leading-[16px] text-[#75786f]">
                  نص البلاغ كما أرسله المستأجر:
                </span>
                <span className="flex items-center gap-[4px]">
                  <Asset
                    src="icon_verified_message.svg"
                    width={12.5}
                    height={12.5}
                  />
                  <span className="text-[11px] font-medium leading-[16px] text-[#34422a]">
                    رسالة واتساب مدققة
                  </span>
                </span>
              </div>
              <blockquote className="rounded-[8px] border-s-2 border-[#34422a] bg-[rgba(241,245,235,0.4)] py-[10px] pe-[10px] ps-[14px] text-start">
                <p className="text-[16px] font-medium leading-[26px] text-[#181d17]">
                  {`"${data.verbatimMessage}"`}
                </p>
              </blockquote>
            </div>

            {/* Attachments & Media Grid */}
            <div className="flex flex-col gap-[4px]">
              <p className="text-[12px] font-semibold leading-[18px] text-[#454840]">
                المرفقات والتوثيق الوارد:
              </p>
              <div className="flex items-start justify-center gap-[8px]">
                {/* Photo Attachment */}
                <div className="flex min-w-px flex-1 flex-col gap-[6px] overflow-hidden rounded-[12px] border border-[#e5e8e2] bg-[#f1f5eb] p-[9px]">
                  <div className="relative h-[112px] w-full overflow-hidden rounded-[8px]">
                    <Image
                      src={`${ASSETS}/img_ac_unit_master.jpg`}
                      alt="صورة العطل"
                      width={437}
                      height={244}
                      className="absolute inset-0 size-full max-w-none object-cover"
                    />
                    <span className="absolute end-[6px] top-[6px] rounded-[6px] bg-[rgba(0,0,0,0.6)] px-[8px] py-[2px] text-[11px] font-medium leading-[16px] text-white backdrop-blur-[2px]">
                      صورة العطل
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-[4px]">
                    <span
                      dir="ltr"
                      className="truncate text-[11px] font-medium leading-[16px] text-[#75786f]"
                    >
                      {data.imageFileName}
                    </span>
                    <span
                      dir="ltr"
                      className="shrink-0 text-[11px] font-medium leading-[16px] text-[#75786f]"
                    >
                      {data.imageFileSize}
                    </span>
                  </div>
                </div>

                {/* Voice Note Attachment Player Card */}
                <div className="flex min-w-px flex-1 flex-col justify-between rounded-[12px] border border-[#e5e8e2] bg-white p-[9px]">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-[4px]">
                      <Asset src="icon_voice_note.svg" width={10.5} height={14.25} />
                      <span className="text-[11px] font-semibold leading-[16px] text-[#181d17]">
                        تسجيل صوتي
                      </span>
                    </span>
                    <span
                      dir="ltr"
                      className="text-[11px] font-medium leading-[16px] text-[#75786f]"
                    >
                      {data.voiceNoteDuration}
                    </span>
                  </div>

                  {/* Mini visual audio waveform */}
                  <div className="flex items-center gap-[4px] py-[8px]">
                    <button
                      type="button"
                      aria-label="تشغيل التسجيل الصوتي"
                      className="flex size-[32px] shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#34422a] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34422a]"
                    >
                      <Asset src="icon_play.svg" width={8.25} height={10.5} />
                    </button>
                    <div
                      className="flex h-[24px] min-w-px flex-1 items-center justify-end gap-[2px] pe-[4px]"
                      dir="ltr"
                      aria-hidden="true"
                    >
                      {WAVEFORM_BARS.map((bar, index) => (
                        <span
                          key={index}
                          className="w-[4px] shrink-0 rounded-full"
                          style={{
                            height: bar.height,
                            backgroundColor: bar.active ? "#34422a" : "#c5c8bd",
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-[11px] font-medium leading-[16px] text-[#75786f]">
                    مرفق تلقائي من رسالة الواتساب
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: AUTOMATED WORKFLOW AUDIT TIMELINE */}
          <section
            className="mb-[24px] ms-[20px] me-[28px] mt-[42px] flex flex-col gap-[8px] pt-[4px]"
            data-node-id="1:10146"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[8px]">
                <Asset src="icon_timeline_header.svg" width={16.667} height={15} />
                <h3 className="text-[14px] font-bold leading-[20px] text-[#181d17]">
                  مسار التنفيذ والأتمتة التشغيلية
                </h3>
              </div>
              <span className="text-[11px] font-semibold leading-[16px] text-[#3e8a5a]">
                تحديث لحظي
              </span>
            </div>

            <ol className="flex flex-col gap-[16px] rounded-[16px] border border-[#e5e8e2] bg-[rgba(241,245,235,0.7)] p-[17px]">
              {data.timeline.map((step, index) => (
                <TimelineStep
                  key={step.id}
                  step={step}
                  isLast={index === data.timeline.length - 1}
                />
              ))}
            </ol>
          </section>
        </div>

        {/* DRAWER ACTIONS FOOTER */}
        <footer
          className="flex shrink-0 items-center gap-[16px] border-t border-[#e5e8e2] bg-white px-[24px] pb-[24px] pt-[25px] drop-shadow-[0px_-8px_10px_rgba(0,0,0,0.03)]"
          data-node-id="1:10207"
        >
          <Link
            href={MAINTENANCE_TICKET_HREF}
            className="flex h-[48px] min-w-px flex-1 items-center justify-center gap-[8.01px] rounded-[12px] bg-[#4b5940] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-colors hover:bg-[#34422a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34422a]"
          >
            <Asset src="icon_view_ticket.svg" width={16.667} height={16.667} />
            <span className="text-center text-[14px] font-bold leading-[20px] text-white">
              عرض بلاغ الصيانة ({data.ticketId})
            </span>
          </Link>

          <button
            type="button"
            onClick={onOpenChat ?? onClose}
            className="flex h-[48px] shrink-0 cursor-pointer items-center justify-center gap-[8px] rounded-[12px] border border-[#e5e8e2] bg-[#f6fbf1] px-[25px] py-px transition-colors hover:bg-[#ebefe6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34422a]"
          >
            <Asset src="icon_open_chat.svg" width={16.667} height={16.667} />
            <span className="text-center text-[14px] font-semibold leading-[20px] text-[#181d17]">
              فتح المحادثة
            </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
