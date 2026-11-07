export type ConversationTag =
  | "maintenance"
  | "extension"
  | "cancellation"
  | "inquiry"
  | "checkin";

export type ConversationFilter = "all" | "unread" | "maintenance" | "extension";

export type ConversationListStatus = "delivered" | "replied";

export type UnitIconKind = "building" | "tower";

export type MessageSegmentVariant = "default" | "highlight" | "code";

export interface MessageSegment {
  text: string;
  variant?: MessageSegmentVariant;
}

export interface SeparatorMessage {
  kind: "separator";
  id: string;
  text: string;
}

/** Message sent by the system / support team to the guest. */
export interface OutgoingMessage {
  kind: "outgoing";
  id: string;
  sender: string;
  time: string;
  segments: MessageSegment[];
  statusLabel: string;
  /** Marks the automated (system) welcome message so the bot icon is shown. */
  automated?: boolean;
}

/** Message received from the guest / tenant. */
export interface IncomingMessage {
  kind: "incoming";
  id: string;
  sender: string;
  time: string;
  text: string;
  metaNote?: string;
}

export interface TicketMessage {
  kind: "ticket";
  id: string;
  ticketId: string;
  title: string;
  statusLabel: string;
  description: string;
  assignee: string;
  unit: string;
  issueType: string;
}

export type ChatMessage =
  | SeparatorMessage
  | OutgoingMessage
  | IncomingMessage
  | TicketMessage;

export interface Conversation {
  id: string;
  guestName: string;
  avatarInitial: string;
  unit: string;
  property: string;
  bookingRef: string;
  unitIcon: UnitIconKind;
  /** Last message preview shown in the list. */
  preview: string;
  /** Relative time shown in the list (e.g. "منذ 5 د"). */
  timeLabel: string;
  unread: boolean;
  tag: ConversationTag;
  tagLabel: string;
  listStatus?: ConversationListStatus;
  listStatusLabel?: string;
  messages: ChatMessage[];
}

export interface FilterChipDefinition {
  id: ConversationFilter;
  label: string;
  count: number;
}
