"use client";

import { HeroGreetingBar } from "./hero-greeting-bar";
import { KpiCards } from "./kpi-cards";
import { UnitOccupancyCard } from "./unit-occupancy-card";
import { GuestTrafficCard } from "./guest-traffic-card";
import { AttentionAlertsSection } from "./attention-alerts-section";
import { UpcomingArrivalsTable } from "./upcoming-arrivals-table";
import { DepartureSpotlightCard } from "./departure-spotlight-card";

export function DashboardContent() {
  return (
    <div
      className="flex flex-col gap-[20px] w-full"
      data-node-id="1:182"
      data-name="Main"
    >
      {/* 1. Hero Greeting Bar */}
      <HeroGreetingBar />

      {/* 2. ROW 1: 4 KPI Cards */}
      <KpiCards />

      {/* 3. ROW 2: Unit Occupancy (7 cols) & Guest Traffic (5 cols) */}
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-[16px] w-full"
        data-node-id="1:287"
        data-name="Section - ROW 2: UNIT OCCUPANCY STATUS & TODAY'S TRAFFIC"
      >
        <div className="lg:col-span-7">
          <UnitOccupancyCard />
        </div>
        <div className="lg:col-span-5">
          <GuestTrafficCard />
        </div>
      </div>

      {/* 4. ROW 3: Needs Attention Action Alerts */}
      <AttentionAlertsSection />

      {/* 5. ROW 4: Detailed Ledger (8 cols) & Departure Spotlight (4 cols) */}
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-[16px] w-full"
        data-node-id="1:450"
        data-name="Section - ROW 4: DETAILED DESKTOP LEDGER & DEPARTURE INSPECTION"
      >
        <div className="lg:col-span-8">
          <UpcomingArrivalsTable />
        </div>
        <div className="lg:col-span-4">
          <DepartureSpotlightCard />
        </div>
      </div>
    </div>
  );
}
