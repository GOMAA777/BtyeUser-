"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ALL_PROPERTIES_OPTION,
  FILTER_CHIPS,
  NEW_CONVERSATIONS_COUNT,
  PROPERTY_OPTIONS,
  QUICK_REPLIES,
  mockConversations,
} from "../data/mock-conversations";
import type {
  ChatMessage,
  Conversation,
  ConversationFilter,
  ConversationTag,
  IncomingMessage,
  OutgoingMessage,
  SeparatorMessage,
  TicketMessage,
  UnitIconKind,
} from "../types";

/* -------------------------------------------------------------------------- */
/*  Constants & helpers                                                       */
/* -------------------------------------------------------------------------- */

const ASSET_BASE = "/assets/whatsapp";

/** Fallback when `onOpenTicket` is not provided (maintenance modal hook). */
const MAINTENANCE_DETAILS_HREF = "/maintenance/details";
const BOOKING_DETAILS_HREF = "/bookings/details";
const OPERATIONS_LOG_HREF = "/operations/log";

const SHADOW_SM = "drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]";

const TAG_STYLES: Record<
  ConversationTag,
  { bg: string; text: string; icon: string; width: number; height: number }
> = {
  maintenance: {
    bg: "bg-[#ffdad6]",
    text: "text-[#93000a]",
    icon: "icon_tag_maintenance",
    width: 9.75,
    height: 9.75,
  },
  extension: {
    bg: "bg-[#d8e8cb]",
    text: "text-[#121f0d]",
    icon: "icon_tag_extension",
    width: 9.75,
    height: 9.75,
  },
  cancellation: {
    bg: "bg-[#e5eae0]",
    text: "text-[#454840]",
    icon: "icon_tag_cancel",
    width: 9.75,
    height: 10.833,
  },
  inquiry: {
    bg: "bg-[#ebefe6]",
    text: "text-[#454840]",
    icon: "icon_tag_inquiry",
    width: 10.833,
    height: 10.833,
  },
  checkin: {
    bg: "bg-[#d8e8cb]",
    text: "text-[#121f0d]",
    icon: "icon_tag_checkin",
    width: 12.458,
    height: 6.5,
  },
};

const UNIT_ICONS: Record<
  UnitIconKind,
  { icon: string; width: number; height: number }
> = {
  building: { icon: "icon_unit", width: 10.5, height: 10.5 },
  tower: { icon: "icon_unit_alt", width: 11.667, height: 10.5 },
};

function formatTime(date: Date) {
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const suffix = hours >= 12 ? "م" : "ص";
  const hours12 = String(hours % 12 || 12).padStart(2, "0");
  return `${hours12}:${minutes} ${suffix}`;
}

interface IconProps {
  name: string;
  width: number;
  height: number;
  className?: string;
}

/** Decorative Figma SVG icon exported to /public/assets/whatsapp. */
function Icon({ name, width, height, className }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("relative block shrink-0", className)}
      style={{ width, height }}
    >
      <Image
        src={`${ASSET_BASE}/${name}.svg`}
        alt=""
        fill
        sizes={`${Math.ceil(width)}px`}
        className="max-w-none"
      />
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero bar                                                                  */
/* -------------------------------------------------------------------------- */

function WhatsAppHeroBar() {
  return (
    <section
      dir="rtl"
      data-node-id="1:9395"
      data-name="Section - TOP HERO GREETING BAR"
      className={cn(
        "flex w-full flex-col gap-4 rounded-[16px] bg-white px-6 py-[21px] sm:flex-row sm:items-center sm:justify-between lg:px-9",
        SHADOW_SM
      )}
    >
      <div className="flex flex-col items-start">
        <div className="flex flex-wrap items-center gap-x-10 gap-y-2">
          <h1 className="font-cairo text-[24px] font-bold leading-[34px] text-[#181d17]">
            واتساب
          </h1>
          <span className="rounded-full bg-[#eaf1e8] px-[10px] py-[2px] font-cairo text-[12px] font-semibold leading-[16px] text-[#4b5940]">
            Cloud API متصل
          </span>
        </div>
        <p className="pt-1 font-cairo text-[14px] font-normal leading-[22px] text-[#454840]">
          محادثات وطلبات المستأجرين والنزلاء المرتبطة بالحجوزات والعمليات
          التشغيلية التلقائية.
        </p>
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-2 self-start sm:self-center">
        <Link
          href="/whatsapp/templates/new"
          className="flex items-center gap-2 rounded-[12px] bg-[#34422a] px-3 py-[8px] font-cairo text-[12px] font-semibold leading-[18px] text-white transition-colors hover:bg-[#2c3823]"
        >
          <FileText size={14} />
          <span>إنشاء قالب Meta</span>
        </Link>
        <div className="flex items-center gap-2 rounded-[12px] bg-[#ebefe6] px-3 py-[6px]">
          <Icon name="icon_sync_bolt" width={12} height={12} />
          <span className="font-cairo text-[12px] font-semibold leading-[18px] text-[#454840]">
            مزامنة فورية للطلبات
          </span>
          <span
            dir="ltr"
            className="pe-1 font-cairo text-[11px] font-bold leading-[18px] text-[#75786f]"
          >
            0.8s
          </span>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Filter bar                                                                */
/* -------------------------------------------------------------------------- */

interface FilterBarProps {
  filter: ConversationFilter;
  onFilterChange: (filter: ConversationFilter) => void;
  query: string;
  onQueryChange: (query: string) => void;
  property: string;
  onPropertyChange: (property: string) => void;
}

function WhatsAppFilterBar({
  filter,
  onFilterChange,
  query,
  onQueryChange,
  property,
  onPropertyChange,
}: FilterBarProps) {
  return (
    <section
      dir="rtl"
      data-node-id="1:9415"
      data-name="Filters & Property Bar"
      className={cn(
        "flex w-full flex-wrap items-center justify-between gap-2 rounded-[16px] bg-white p-2",
        SHADOW_SM
      )}
    >
      {/* Chips (right side in RTL) */}
      <div
        role="tablist"
        aria-label="تصفية المحادثات"
        className="flex max-w-full shrink-0 items-center gap-[6px] overflow-x-auto"
      >
        {FILTER_CHIPS.map((chip) => {
          const active = chip.id === filter;
          if (active) {
            return (
              <button
                key={chip.id}
                type="button"
                role="tab"
                aria-selected="true"
                onClick={() => onFilterChange(chip.id)}
                className={cn(
                  "flex shrink-0 cursor-pointer items-center justify-center rounded-[12px] bg-[#34422a] px-[14px] py-[6px] font-cairo text-[12px] font-semibold leading-[18px] text-white",
                  SHADOW_SM
                )}
              >
                {chip.label} ({chip.count})
              </button>
            );
          }
          const isUnread = chip.id === "unread";
          return (
            <button
              key={chip.id}
              type="button"
              role="tab"
              aria-selected="false"
              onClick={() => onFilterChange(chip.id)}
              className="flex shrink-0 cursor-pointer items-center gap-[6px] rounded-[12px] bg-[#ebefe6] px-[14px] py-[6px] transition-colors hover:bg-[#e5eae0]"
            >
              <span className="font-cairo text-[12px] font-semibold leading-[18px] text-[#454840]">
                {chip.label}
              </span>
              <span
                className={cn(
                  "flex items-center justify-center rounded-full px-[6px] font-cairo text-[10px] leading-[18px]",
                  isUnread
                    ? "bg-[#d8e8cb] font-bold text-[#121f0d]"
                    : "bg-[#dfe4db] font-semibold text-[#454840]"
                )}
              >
                {chip.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Property selector & search (left side in RTL) */}
      <div className="flex min-w-0 flex-wrap items-center gap-1">
        <div className="relative w-[180px] min-w-[180px]">
          <select
            aria-label="العقار"
            value={property}
            onChange={(event) => onPropertyChange(event.target.value)}
            className="h-[34px] w-full cursor-pointer appearance-none rounded-[12px] bg-[#ebefe6] ps-3 pe-7 font-cairo text-[12px] font-semibold text-[#75786f] outline-none focus-visible:ring-2 focus-visible:ring-[#4b5940]/40"
          >
            {PROPERTY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute end-[10px] top-1/2 -translate-y-1/2">
            <Icon name="icon_chevron_down" width={9} height={5.55} />
          </span>
        </div>

        <div className="relative w-[256px] max-w-full">
          <input
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="بحث باسم المستأجر، رقم الوحدة..."
            aria-label="بحث في المحادثات"
            className="h-[34px] w-full rounded-[12px] bg-[#ebefe6] ps-9 pe-3 font-cairo text-[13px] font-normal text-[#181d17] outline-none placeholder:text-[#75786f] focus-visible:ring-2 focus-visible:ring-[#4b5940]/40"
          />
          <span className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2">
            <Icon name="icon_search" width={13.5} height={13.5} />
          </span>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Conversation list (column 1 – right side in RTL)                          */
/* -------------------------------------------------------------------------- */

interface ConversationItemProps {
  conversation: Conversation;
  selected: boolean;
  onSelect: (id: string) => void;
}

function ConversationItem({
  conversation,
  selected,
  onSelect,
}: ConversationItemProps) {
  const tag = TAG_STYLES[conversation.tag];
  const unitIcon = UNIT_ICONS[conversation.unitIcon];
  const hasListStatus = Boolean(conversation.listStatus);
  const showStatusRow = hasListStatus && !selected;

  return (
    <button
      type="button"
      onClick={() => onSelect(conversation.id)}
      aria-current={selected ? "true" : undefined}
      className={cn(
        "relative flex w-full cursor-pointer flex-col items-stretch rounded-[12px] p-3 text-start transition-colors",
        selected ? "bg-[#f1f5eb]" : "bg-white hover:bg-[#f6fbf1]"
      )}
    >
      {selected && (
        <span
          aria-hidden="true"
          className="absolute bottom-[8.5px] start-0 top-2 w-[6px] rounded-e-full bg-[#34422a]"
        />
      )}

      <span className={cn("flex w-full items-start gap-3", selected && "ps-2")}>
        {/* Avatar (right in RTL) */}
        <span
          className={cn(
            "relative flex size-[44px] shrink-0 items-center justify-center rounded-[12px] font-cairo text-[18px] font-semibold leading-[28px]",
            selected ? "bg-[#4b5940] text-white" : "bg-[#e5eae0] text-[#181d17]"
          )}
        >
          {conversation.avatarInitial}
          {conversation.unread && (
            <span
              className={cn(
                "absolute -bottom-1 -end-1 flex size-4 items-center justify-center rounded-full bg-[#d8e8cb]",
                SHADOW_SM
              )}
            >
              <Icon name="icon_avatar_badge" width={9.167} height={9.167} />
            </span>
          )}
        </span>

        {/* Content */}
        <span className="flex min-w-0 flex-1 flex-col items-stretch gap-[2px]">
          <span className="flex w-full items-center justify-between gap-2">
            <span
              className={cn(
                "truncate font-cairo text-[14px] leading-[20px] text-[#181d17]",
                selected ? "font-bold" : "font-semibold"
              )}
            >
              {conversation.guestName}
            </span>
            <span
              className={cn(
                "shrink-0 font-cairo text-[11px] font-medium leading-[16px]",
                selected ? "text-[#54624c]" : "text-[#75786f]"
              )}
            >
              {conversation.timeLabel}
            </span>
          </span>

          <span className="flex w-full items-center gap-[6px]">
            <Icon
              name={unitIcon.icon}
              width={unitIcon.width}
              height={unitIcon.height}
            />
            <span className="truncate font-cairo text-[11px] font-medium leading-[16px] text-[#454840]">
              الوحدة {conversation.unit} — {conversation.property}
            </span>
          </span>

          <span
            className={cn(
              "block w-full truncate font-cairo text-[13px] leading-[20px]",
              selected
                ? "h-[22px] font-medium text-[#181d17]"
                : "pt-[2px] font-normal text-[#454840]"
            )}
          >
            {conversation.preview}
          </span>

          <span
            className={cn(
              "flex w-full items-center pt-[6px]",
              showStatusRow ? "justify-between" : "justify-start"
            )}
          >
            <span
              className={cn(
                "flex items-center gap-1 rounded-[6px] px-2 py-[2px] font-cairo text-[11px] font-normal leading-[16.5px]",
                tag.bg,
                tag.text
              )}
            >
              <Icon
                name={tag.icon}
                width={tag.width}
                height={tag.height}
              />
              {conversation.tagLabel}
            </span>

            {showStatusRow &&
              (conversation.listStatus === "delivered" ? (
                <Icon name="icon_double_check" width={14.6} height={8.017} />
              ) : (
                <span className="font-cairo text-[11px] font-medium leading-[16px] text-[#75786f]">
                  {conversation.listStatusLabel}
                </span>
              ))}
          </span>
        </span>
      </span>
    </button>
  );
}

interface ConversationListProps {
  conversations: Conversation[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onRefresh: () => void;
}

function ConversationList({
  conversations,
  selectedId,
  onSelect,
  onRefresh,
}: ConversationListProps) {
  return (
    <aside
      data-node-id="1:9579"
      data-name="COLUMN 1: Conversations List (Right side in RTL)"
      className="z-[1] flex max-h-[420px] w-full shrink-0 flex-col items-stretch border-b border-[rgba(223,228,219,0.4)] bg-white lg:h-full lg:max-h-none lg:w-[390px] lg:border-b-0 lg:border-e"
    >
      <div className="flex shrink-0 flex-col gap-1 px-4 pb-2 pt-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-cairo text-[18px] font-semibold leading-[28px] text-[#181d17]">
              المحادثات الواردة
            </h2>
            <span className="rounded-full bg-[#4b5940] px-2 py-[2px] font-cairo text-[11px] font-medium leading-[16px] text-white">
              {NEW_CONVERSATIONS_COUNT} جديدة
            </span>
          </div>
          <button
            type="button"
            onClick={onRefresh}
            aria-label="تحديث المحادثات"
            title="تحديث المحادثات"
            className="flex size-8 cursor-pointer items-center justify-center rounded-[8px] transition-colors hover:bg-[#ebefe6]"
          >
            <Icon name="icon_refresh" width={13.333} height={13.333} />
          </button>
        </div>
        <div className="flex h-4 items-center gap-[4px]">
          <span className="size-2 rounded-full bg-[#bccbb0]" />
          <span
            dir="ltr"
            className="font-cairo text-[11px] font-medium leading-[16px] text-[#54624c]"
          >
            WhatsApp Business API
          </span>
        </div>
      </div>

      <div className="custom-scrollbar flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto px-2 pb-2">
        {conversations.length === 0 ? (
          <p className="px-4 py-10 text-center font-cairo text-[13px] font-medium text-[#75786f]">
            لا توجد محادثات مطابقة للبحث
          </p>
        ) : (
          conversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              selected={conversation.id === selectedId}
              onSelect={onSelect}
            />
          ))
        )}
      </div>
    </aside>
  );
}

/* -------------------------------------------------------------------------- */
/*  Chat messages                                                             */
/* -------------------------------------------------------------------------- */

function SeparatorBubble({ message }: { message: SeparatorMessage }) {
  return (
    <div className="flex w-full shrink-0 items-center justify-center">
      <div
        className={cn(
          "flex items-center gap-[6px] rounded-full bg-[#ebefe6] px-[14px] py-1",
          SHADOW_SM
        )}
      >
        <Icon name="icon_system_info" width={13.75} height={7.5} />
        <span className="font-cairo text-[11px] font-medium leading-[16px] text-[#454840]">
          {message.text}
        </span>
      </div>
    </div>
  );
}

function OutgoingBubble({ message }: { message: OutgoingMessage }) {
  return (
    <div className="flex w-full max-w-[576px] shrink-0 flex-col items-stretch self-end">
      <div
        className={cn(
          "flex w-fit max-w-full flex-col gap-1 rounded-[16px] bg-white p-[14px]",
          SHADOW_SM
        )}
      >
        <div className="flex w-full items-center justify-between gap-6">
          <div className="flex items-center gap-1">
            {message.automated && (
              <Icon name="icon_auto_message" width={12.833} height={11.083} />
            )}
            <span className="font-cairo text-[11px] font-semibold leading-[16.5px] text-[#54624c]">
              {message.sender}
            </span>
          </div>
          <span className="font-cairo text-[11px] font-medium leading-[16px] text-[#75786f]">
            {message.time}
          </span>
        </div>

        <p className="font-cairo text-[14px] font-normal leading-[22.75px] text-[#181d17]">
          {message.segments.map((segment, index) => {
            if (segment.variant === "highlight") {
              return (
                <span
                  key={index}
                  className="font-semibold text-[#34422a]"
                >
                  {segment.text}
                </span>
              );
            }
            if (segment.variant === "code") {
              return (
                <span
                  key={index}
                  dir="ltr"
                  className="mx-[2px] inline-block rounded-[4px] bg-[#ebefe6] px-2 font-bold text-[#34422a]"
                >
                  {segment.text}
                </span>
              );
            }
            return <span key={index}>{segment.text}</span>;
          })}
        </p>

        <div className="flex w-full items-center justify-end gap-1 pt-1">
          <span className="font-cairo text-[11px] font-normal leading-[16.5px] text-[#54624c]">
            {message.statusLabel}
          </span>
          <Icon name="icon_double_check" width={14.6} height={8.017} />
        </div>
      </div>
    </div>
  );
}

function IncomingBubble({ message }: { message: IncomingMessage }) {
  return (
    <div className="flex w-full max-w-[576px] shrink-0 flex-col items-stretch self-start">
      <div className="flex w-fit max-w-full flex-col gap-[3.375px] rounded-[16px] bg-[rgba(229,234,224,0.6)] p-[14px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        <div className="flex w-full items-center justify-between gap-6">
          <span className="font-cairo text-[11px] font-semibold leading-[16.5px] text-[#454840]">
            {message.sender}
          </span>
          <span className="font-cairo text-[11px] font-medium leading-[16px] text-[#75786f]">
            {message.time}
          </span>
        </div>
        <p className="font-cairo text-[14px] font-normal leading-[22.75px] text-[#181d17]">
          {message.text}
        </p>
      </div>
      {message.metaNote && (
        <div className="px-1 pt-1">
          <span className="font-cairo text-[11px] font-normal leading-[16.5px] text-[#75786f]">
            {message.metaNote}
          </span>
        </div>
      )}
    </div>
  );
}

interface TicketCardProps {
  message: TicketMessage;
  onOpen: (ticketId: string) => void;
}

function TicketCard({ message, onOpen }: TicketCardProps) {
  const open = () => onOpen(message.ticketId);
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={onKeyDown}
      aria-label={`فتح بلاغ الصيانة ${message.ticketId}`}
      data-node-id="1:9491"
      data-name="CORE HIGHLIGHT: Automated System Request & Operational Bridge Card"
      className={cn(
        "flex w-full shrink-0 cursor-pointer flex-col items-stretch gap-3 rounded-[16px] border border-solid border-[rgba(223,228,219,0.4)] bg-white p-[17px] transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-[#4b5940]",
        SHADOW_SM
      )}
    >
      <div className="flex w-full flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-[10px]">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-[12px] bg-[#4b5940]">
            <Icon name="icon_wrench" width={15} height={15} />
          </span>
          <div className="flex flex-col items-start gap-[4.5px] pb-[1.5px]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-cairo text-[16px] font-bold leading-[24px] text-[#181d17]">
                {message.title}
              </span>
              <span className="rounded-full bg-[#d8e8cb] px-2 py-[2px] font-cairo text-[11px] font-semibold leading-[16.5px] text-[#121f0d]">
                {message.statusLabel}
              </span>
            </div>
            <span className="font-cairo text-[12px] font-normal leading-[18px] text-[#454840]">
              {message.description}
            </span>
          </div>
        </div>
        <span
          dir="ltr"
          className="rounded-[8px] bg-[#d8e8c7] px-[10px] py-1 font-cairo text-[11px] font-bold leading-[16px] text-[#34422a]"
        >
          #{message.ticketId}
        </span>
      </div>

      <div className="flex w-full gap-2 rounded-[12px] bg-[#f1f5eb] p-[10px]">
        <TicketDetail
          label="نوع البلاغ"
          value={message.issueType}
          valueClassName="text-[#181d17]"
        />
        <TicketDetail
          label="الوحدة"
          value={message.unit}
          valueClassName="text-[#181d17]"
        />
        <TicketDetail
          label="الحالة والمكلف"
          value={message.assignee}
          valueClassName="text-[#54624c]"
        />
      </div>
    </div>
  );
}

function TicketDetail({
  label,
  value,
  valueClassName,
}: {
  label: string;
  value: string;
  valueClassName: string;
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-start">
      <span className="font-cairo text-[11px] font-normal leading-[16.5px] text-[#75786f]">
        {label}
      </span>
      <span
        className={cn(
          "font-cairo text-[12px] font-semibold leading-[18px]",
          valueClassName
        )}
      >
        {value}
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Active chat (column 2 – left side in RTL)                                 */
/* -------------------------------------------------------------------------- */

interface ChatPanelProps {
  conversation: Conversation | null;
  draft: string;
  onDraftChange: (value: string) => void;
  onSend: () => void;
  onOpenTicket: (ticketId: string) => void;
  composerRef: React.RefObject<HTMLInputElement | null>;
}

function ChatPanel({
  conversation,
  draft,
  onDraftChange,
  onSend,
  onOpenTicket,
  composerRef,
}: ChatPanelProps) {
  const feedRef = useRef<HTMLDivElement>(null);
  const messageCount = conversation?.messages.length ?? 0;
  const conversationId = conversation?.id;

  useEffect(() => {
    const feed = feedRef.current;
    if (feed) {
      feed.scrollTop = feed.scrollHeight;
    }
  }, [messageCount, conversationId]);

  const renderMessage = (message: ChatMessage) => {
    switch (message.kind) {
      case "separator":
        return <SeparatorBubble key={message.id} message={message} />;
      case "outgoing":
        return <OutgoingBubble key={message.id} message={message} />;
      case "incoming":
        return <IncomingBubble key={message.id} message={message} />;
      case "ticket":
        return (
          <TicketCard key={message.id} message={message} onOpen={onOpenTicket} />
        );
    }
  };

  return (
    <section
      data-node-id="1:9448"
      data-name="COLUMN 2: Active Conversation & Automated Workflow Desk"
      className="z-[2] flex h-[640px] min-w-0 flex-1 flex-col bg-[#f6fbf1] lg:h-full"
    >
      {/* Active chat header */}
      <header
        data-node-id="1:9548"
        data-name="Active Chat Header"
        className={cn(
          "flex min-h-[87px] shrink-0 flex-wrap items-center justify-between gap-3 bg-white py-3 ps-4 pe-[21px]",
          SHADOW_SM
        )}
      >
        {conversation ? (
          <>
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex size-[44px] shrink-0 items-center justify-center rounded-[12px] bg-[#4b5940] font-cairo text-[18px] font-bold leading-[28px] text-white">
                {conversation.avatarInitial}
              </span>
              <div className="flex min-w-0 flex-col items-start">
                <div className="flex h-[37px] items-center gap-[6px]">
                  <h2 className="max-w-[160px] truncate font-cairo text-[18px] font-bold leading-[28px] text-[#181d17]">
                    {conversation.guestName}
                  </h2>
                  <span className="flex h-[37px] w-[63.25px] shrink-0 flex-col items-center justify-center rounded-[6px] bg-[#d8e8c7] text-center font-cairo text-[11px] font-semibold leading-[16.5px] text-[#131f0b]">
                    <span>الوحدة</span>
                    <span>{conversation.unit}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-[2px]">
                  <span className="font-cairo text-[11px] font-medium leading-[16px] text-[#54624c]">
                    {conversation.property}
                  </span>
                  <span className="font-cairo text-[11px] font-medium leading-[16px] text-[#75786f]">
                    •
                  </span>
                  <span
                    dir="ltr"
                    className="font-cairo text-[12px] font-normal leading-[16px] text-[#75786f]"
                  >
                    {conversation.bookingRef}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href={BOOKING_DETAILS_HREF}
                className="flex items-center gap-[6px] rounded-[12px] bg-[#ebefe6] px-[14px] py-[6px] transition-colors hover:bg-[#e5eae0]"
              >
                <Icon name="icon_view_booking" width={13.5} height={15} />
                <span className="px-[9.69px] text-center font-cairo text-[12px] font-semibold leading-[18px] text-[#181d17]">
                  عرض
                  <br />
                  الحجز
                </span>
              </Link>
              <Link
                href={OPERATIONS_LOG_HREF}
                className={cn(
                  "flex items-center gap-[6px] rounded-[12px] bg-[#34422a] px-[14px] py-[6px] transition-colors hover:bg-[#2b3722]",
                  SHADOW_SM
                )}
              >
                <Icon name="icon_operations_log" width={15} height={15} />
                <span className="px-[9px] text-center font-cairo text-[12px] font-semibold leading-[18px] text-white">
                  سجل
                  <br />
                  العمليات
                </span>
              </Link>
            </div>
          </>
        ) : (
          <p className="font-cairo text-[14px] font-medium text-[#75786f]">
            اختر محادثة لعرضها
          </p>
        )}
      </header>

      {/* Chat feed */}
      <div
        ref={feedRef}
        data-node-id="1:9449"
        data-name="Chat Feed & Live Timeline Canvas"
        className="custom-scrollbar flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto bg-[rgba(241,245,235,0.4)] px-4 pb-6 pt-6"
      >
        {conversation ? (
          conversation.messages.map(renderMessage)
        ) : (
          <p className="m-auto font-cairo text-[14px] font-medium text-[#75786f]">
            لا توجد محادثة محددة
          </p>
        )}
      </div>

      {/* Canned quick responses */}
      <div
        data-node-id="1:9522"
        data-name="Canned Quick Responses Bar"
        className="custom-scrollbar flex h-10 shrink-0 items-center gap-2 overflow-x-auto bg-white px-4"
      >
        <div className="flex shrink-0 items-center gap-[3.99px]">
          <Icon name="icon_quick_replies" width={9.333} height={11.667} />
          <span className="font-cairo text-[11px] font-normal leading-[16.5px] text-[#75786f]">
            ردود جاهزة:
          </span>
        </div>
        {QUICK_REPLIES.map((reply) => (
          <button
            key={reply}
            type="button"
            disabled={!conversation}
            onClick={() => {
              onDraftChange(reply);
              composerRef.current?.focus();
            }}
            className="shrink-0 cursor-pointer whitespace-nowrap rounded-[8px] bg-[#ebefe6] px-3 py-1 text-center font-cairo text-[11px] font-medium leading-[16px] text-[#454840] transition-colors hover:bg-[#e5eae0] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {reply}
          </button>
        ))}
      </div>

      {/* Composer */}
      <form
        data-node-id="1:9535"
        data-name="Bottom Input & Messaging Composer Area"
        onSubmit={(event) => {
          event.preventDefault();
          onSend();
        }}
        className="flex shrink-0 flex-col items-stretch bg-white px-4 pb-4 pt-2"
      >
        <div className="flex w-full items-center gap-2 rounded-[16px] bg-[#ebefe6] p-[6px]">
          <button
            type="button"
            aria-label="إرفاق ملف"
            className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-[12px] transition-colors hover:bg-[#e5eae0]"
          >
            <Icon name="icon_attach" width={10.417} height={16.667} />
          </button>
          <input
            ref={composerRef}
            type="text"
            value={draft}
            disabled={!conversation}
            onChange={(event) => onDraftChange(event.target.value)}
            placeholder="اكتب رداً للمستأجر عبر واتساب..."
            aria-label="رسالة جديدة"
            className="min-w-0 flex-1 bg-transparent px-2 py-[6px] font-cairo text-[14px] font-normal text-[#181d17] outline-none placeholder:text-[#75786f]"
          />
          <button
            type="submit"
            disabled={!conversation || draft.trim().length === 0}
            className={cn(
              "flex h-10 shrink-0 cursor-pointer items-center gap-[6px] rounded-[12px] bg-[#34422a] px-4 transition-opacity hover:bg-[#2b3722] disabled:cursor-not-allowed disabled:opacity-60",
              SHADOW_SM
            )}
          >
            <span className="font-cairo text-[12px] font-semibold leading-[18px] text-white">
              إرسال
            </span>
            <Icon
              name="icon_send"
              width={12.667}
              height={10.667}
              className="-scale-x-100"
            />
          </button>
        </div>
      </form>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main view                                                                 */
/* -------------------------------------------------------------------------- */

export interface WhatsAppInboxViewProps {
  /** Hook for opening the maintenance modal when the ticket card is clicked. */
  onOpenTicket?: (id: string) => void;
}

export function WhatsAppInboxView({ onOpenTicket }: WhatsAppInboxViewProps) {
  const router = useRouter();
  const composerRef = useRef<HTMLInputElement>(null);

  const [conversations, setConversations] =
    useState<Conversation[]>(mockConversations);
  const [selectedId, setSelectedId] = useState<string | null>(
    mockConversations[0]?.id ?? null
  );
  const [filter, setFilter] = useState<ConversationFilter>("all");
  const [query, setQuery] = useState("");
  const [property, setProperty] = useState(ALL_PROPERTIES_OPTION);
  const [draft, setDraft] = useState("");

  const selectedConversation = useMemo(
    () => conversations.find((c) => c.id === selectedId) ?? null,
    [conversations, selectedId]
  );

  const visibleConversations = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return conversations.filter((conversation) => {
      if (filter === "unread" && !conversation.unread) return false;
      if (filter === "maintenance" && conversation.tag !== "maintenance")
        return false;
      if (filter === "extension" && conversation.tag !== "extension")
        return false;
      if (
        property !== ALL_PROPERTIES_OPTION &&
        conversation.property !== property
      )
        return false;
      if (needle) {
        const haystack = [
          conversation.guestName,
          conversation.unit,
          conversation.property,
          conversation.preview,
          conversation.bookingRef,
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(needle)) return false;
      }
      return true;
    });
  }, [conversations, filter, property, query]);

  const handleSelect = useCallback((id: string) => {
    setSelectedId(id);
    setDraft("");
    setConversations((prev) =>
      prev.map((c) => (c.id === id && c.unread ? { ...c, unread: false } : c))
    );
  }, []);

  const handleRefresh = useCallback(() => {
    setFilter("all");
    setQuery("");
    setProperty(ALL_PROPERTIES_OPTION);
  }, []);

  const handleSend = useCallback(() => {
    const text = draft.trim();
    if (!text || !selectedId) return;

    const now = new Date();
    setConversations((prev) =>
      prev.map((c) =>
        c.id === selectedId
          ? {
              ...c,
              preview: text,
              timeLabel: "الآن",
              unread: false,
              listStatus: "delivered",
              listStatusLabel: undefined,
              messages: [
                ...c.messages,
                {
                  kind: "outgoing",
                  id: `m-${c.id}-${now.getTime()}`,
                  sender: "فريق الدعم",
                  time: formatTime(now),
                  segments: [{ text }],
                  statusLabel: "تم الإرسال",
                },
              ],
            }
          : c
      )
    );
    setDraft("");
  }, [draft, selectedId]);

  const handleOpenTicket = useCallback(
    (ticketId: string) => {
      if (onOpenTicket) {
        onOpenTicket(ticketId);
        return;
      }
      router.push(MAINTENANCE_DETAILS_HREF);
    },
    [onOpenTicket, router]
  );

  return (
    <div dir="rtl" lang="ar" className="flex w-full flex-col gap-5">
      <WhatsAppHeroBar />

      <WhatsAppFilterBar
        filter={filter}
        onFilterChange={setFilter}
        query={query}
        onQueryChange={setQuery}
        property={property}
        onPropertyChange={setProperty}
      />

      <div
        data-node-id="1:9447"
        data-name="MAIN TWO-COLUMN INBOX CONTAINER"
        className="relative isolate flex w-full flex-col overflow-clip rounded-[16px] bg-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] lg:h-[790px] lg:flex-row"
      >
        <ConversationList
          conversations={visibleConversations}
          selectedId={selectedId}
          onSelect={handleSelect}
          onRefresh={handleRefresh}
        />
        <ChatPanel
          conversation={selectedConversation}
          draft={draft}
          onDraftChange={setDraft}
          onSend={handleSend}
          onOpenTicket={handleOpenTicket}
          composerRef={composerRef}
        />
      </div>
    </div>
  );
}
