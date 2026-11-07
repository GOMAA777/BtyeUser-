export type TimelineStepState = "done" | "current";

export interface MaintenanceTicketTimelineStep {
  id: string;
  time?: string;
  title: string;
  description: string;
  state: TimelineStepState;
  /** Color of the connector line leading to the next step (Figma). */
  connectorColor?: string;
}

export interface MaintenanceTicketDetails {
  ticketId: string;
  automatedLabel: string;
  automatedBadge: string;
  createdBadge: string;
  createdNote: string;
  bookingId: string;
  guestName: string;
  guestStatus: string;
  guestPhone: string;
  propertyName: string;
  unitName: string;
  requestedAt: string;
  source: string;
  sourceNote: string;
  priorityLabel: string;
  verbatimMessage: string;
  voiceNoteDuration: string;
  imageFileName: string;
  imageFileSize: string;
  timeline: MaintenanceTicketTimelineStep[];
}
