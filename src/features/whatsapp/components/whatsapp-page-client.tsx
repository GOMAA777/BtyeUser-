"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MaintenanceTicketModal } from "./maintenance-ticket-modal";
import { WhatsAppInboxView } from "./whatsapp-inbox-view";
import { DEFAULT_TICKET_ID } from "../data/mock-maintenance-ticket";

/**
 * WhatsApp inbox (Figma 1:9393) + maintenance ticket modal (Figma 1:9863).
 * Open modal via ticket card or `?ticket=MT-2048`.
 *
 * The URL is the single source of truth, so the drawer survives refresh and
 * the browser back button closes it.
 */
export function WhatsAppPageClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const ticketId = searchParams.get("ticket");
  const isTicketOpen = Boolean(ticketId);

  const inboxPath = pathname.endsWith("/") ? pathname : `${pathname}/`;

  const openTicket = useCallback(
    (id: string) => {
      router.push(`${inboxPath}?ticket=${encodeURIComponent(id)}`, {
        scroll: false,
      });
    },
    [router, inboxPath]
  );

  const closeTicket = useCallback(() => {
    router.replace(inboxPath, { scroll: false });
  }, [router, inboxPath]);

  return (
    <>
      {/*
        Overlay layer pinned to the visible area of the dashboard <main>
        (below the header, beside the sidebar) so the header / sidebar stay
        un-dimmed exactly like the Figma frame. Zero-height sticky anchor →
        absolutely positioned, viewport-sized child.
      */}
      <div className="pointer-events-none sticky top-0 z-40 -mx-[5.5556%] -mt-[20px] h-0">
        {isTicketOpen && (
          <div className="pointer-events-auto absolute inset-x-0 top-0 h-[calc(100vh-72px)]">
            <MaintenanceTicketModal
              open
              onClose={closeTicket}
              onOpenChat={closeTicket}
              ticketId={ticketId ?? DEFAULT_TICKET_ID}
            />
          </div>
        )}
      </div>

      <WhatsAppInboxView onOpenTicket={openTicket} />
    </>
  );
}
