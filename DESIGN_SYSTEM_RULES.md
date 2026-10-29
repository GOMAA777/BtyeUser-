# 📐 Design System Rules & Codebase Architecture Guide

This document defines the comprehensive rules and patterns for integrating Figma designs into this codebase via the Model Context Protocol (MCP).

---

## 1. Token Definitions

### Token Locations
- **Global Theme & CSS Variables:** [`src/app/globals.css`](file:///c:/Users/abdallah/Desktop/home-btyi-user/src/app/globals.css)
- **Tailwind Configuration:** [`tailwind.config.ts`](file:///c:/Users/abdallah/Desktop/home-btyi-user/tailwind.config.ts)

### Core Color Tokens & Palette
| Role / Design Token | Hex Value | Usage in Project |
| :--- | :--- | :--- |
| **Brand Primary (`dashboard`)** | `#34422A` | Primary action buttons, active states, brand emblem accents |
| **Brand Surface / Canvas** | `#F1F5EB` | Main dashboard content background |
| **Active Accent (Light Green)** | `#D8E8CB` / `#EAF1E8` | Selected cards, active nav items, table status badges |
| **Neutral Card Background** | `#FFFFFF` | Form cards, tables, header bar, action popovers |
| **Neutral Subtle Fill** | `#F6F7F4` / `#F9FAF8` | Inputs, search bars, table header row |
| **Border / Dividers** | `#E5E8E2` / `#F0F2ED` | Card borders, dividers, table cell lines |
| **Text Primary** | `#181D17` / `#252820` | Headings, labels, key metrics |
| **Text Secondary / Muted** | `#454840` / `#73786F` / `#75786F` | Subtitles, input placeholders, table headers |
| **Status - Available (Green)** | `#2E7D32` (bg: `#E8F5E9`) | Available units, success indicators |
| **Status - Booked (Blue)** | `#1976D2` (bg: `#E3F2FD`) | Booked units, current guest avatars |
| **Status - Cleaning (Amber)** | `#D97706` (bg: `#FEF3C7`) | Cleaning in progress |
| **Status - Maintenance (Red)** | `#DC2626` (bg: `#FEE2E2`) | Maintenance in progress, destructive buttons |
| **Error / Destructive** | `#B12515` / `#BA1A1A` | Required asterisk `*`, delete action |

### Typography
- **Primary Font Family:** `Cairo` (`font-cairo`), with Arabic RTL native weights:
  - Regular (400)
  - Medium (500)
  - SemiBold (600)
  - Bold (700)
- **Scale:**
  - Hero Page Title: `text-[24px]` font-bold leading-[34px]
  - Section Headings: `text-[18px]` font-semibold leading-[28px]
  - Subheadings / Card Titles: `text-[14px]` font-bold leading-[20px]
  - Body & Input Text: `text-[14px]` font-normal leading-[22px]
  - Form Labels & Action Items: `text-[12px]` font-semibold leading-[18px]
  - Helper & Secondary Badges: `text-[11px]` font-medium leading-[16px]
  - Micro Badges & Indicators: `text-[10px]` font-bold leading-[16px]

### Radii & Shadows
- **Card Radius:** `rounded-[16px]` (cards, table containers, hero bars)
- **Control / Input Radius:** `rounded-[12px]` (inputs, selects, buttons, action popover)
- **Badge Radius:** `rounded-full` (`rounded-[9999px]`) or `rounded-[8px]`
- **Elevation / Drop Shadows:**
  - Standard card shadow: `drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]`
  - Popover / Dropdown shadow: `shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]`
  - Sticky Bar elevation: `shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]`

---

## 2. Component Library & Architecture

### Architecture Pattern
- **Strict Server Components by default:** `page.tsx`, `layout.tsx` are Server Components.
- **Leaf Client Components:** Interactive widgets, forms, search bars, action popovers carry `"use client"` at the top.
- Primitives live in [`src/components/ui/`](file:///c:/Users/abdallah/Desktop/home-btyi-user/src/components/ui/).
- Cross-cutting composite components live in [`src/components/shared/`](file:///c:/Users/abdallah/Desktop/home-btyi-user/src/components/shared/).
- Domain-isolated modules live in [`src/features/[feature-name]/`](file:///c:/Users/abdallah/Desktop/home-btyi-user/src/features/).

---

## 3. Frameworks & Libraries

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript 5+ (Strict Mode)
- **Styling:** Tailwind CSS + PostCSS + CSS Variables
- **Icons:** Exact SVGs extracted from Figma + Lucide React (`lucide-react`)
- **Forms & Validation:** `react-hook-form` + `zod` + `@hookform/resolvers`
- **Mutations:** Server Actions wrapped with `next-safe-action`
- **Notifications:** `sonner` / custom toast wrapper [`src/lib/toast.tsx`](file:///c:/Users/abdallah/Desktop/home-btyi-user/src/lib/toast.tsx)

---

## 4. Asset Management

### Storage & Referencing
- All local static assets are saved under [`public/assets/`](file:///c:/Users/abdallah/Desktop/home-btyi-user/public/assets/).
- Grouped by feature domain:
  - `public/assets/dashboard/`
  - `public/assets/properties/`
  - `public/assets/units/list/` (for units overview table and filters)
  - `public/assets/units/actions/` (for actions popover menu)
  - `public/assets/units/add/` (for add unit form and image gallery)
- Temporary Figma CDN URLs are downloaded locally and referenced directly using `next/image` with width and height matching design dimensions.

---

## 5. Icon System

- Exact vector geometry from Figma exported to SVG in `public/assets/...`.
- Fallback/standard icons rendered using `lucide-react`.
- Root dimensions are maintained without arbitrary stretching.

---

## 6. Styling Approach & RTL Layout

- Entire app runs under `dir="rtl"` with `lang="ar"`.
- Logical properties and explicit RTL alignments:
  - Text alignments: `text-right` for labels, values, and table cells.
  - Spacing: explicit padding, gaps, and margins.
  - Flexible layout: CSS Grid (`grid-cols-12`) and Flexbox (`flex items-center justify-between`).

---

## 7. Project Structure

```
src/
├── app/
│   ├── (auth)/
│   └── (dashboard)/
│       ├── dashboard/
│       ├── properties/
│       │   ├── [id]/
│       │   ├── details/
│       │   └── new/
│       └── units/
│           ├── page.tsx          # Units Overview (Node 1:4313)
│           └── new/
│               └── page.tsx      # Add Unit Screen (Node 1:4685)
├── components/
│   ├── layout/
│   └── ui/
├── features/
│   ├── dashboard/
│   ├── properties/
│   └── units/
│       ├── actions/
│       │   └── add-unit-action.ts
│       ├── components/
│       │   ├── units-view.tsx
│       │   ├── units-hero-bar.tsx
│       │   ├── units-filter-bar.tsx
│       │   ├── units-table.tsx
│       │   ├── unit-actions-menu.tsx   # Action Popover (Node 1:5804)
│       │   ├── add-unit-view.tsx
│       │   ├── add-unit-hero-bar.tsx
│       │   ├── property-context-banner.tsx
│       │   ├── add-unit-form.tsx
│       │   ├── unit-primary-specs.tsx
│       │   ├── unit-description-amenities.tsx
│       │   ├── unit-gallery-upload.tsx
│       │   ├── unit-pricing-capacity.tsx
│       │   ├── unit-access-code.tsx
│       │   └── add-unit-sticky-bar.tsx
│       ├── data/
│       │   └── units-data.ts
│       ├── schemas/
│       │   └── add-unit-schema.ts
│       └── types/
│           └── unit.ts
└── lib/
```
