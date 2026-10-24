import type { Metadata } from "next";
import { OnboardingHeader } from "@/features/onboarding/components/onboarding-header";
import { OnboardingProgress } from "@/features/onboarding/components/onboarding-progress";
import { OnboardingCards } from "@/features/onboarding/components/onboarding-cards";
import { OnboardingReassurance } from "@/features/onboarding/components/onboarding-reassurance";
import { OnboardingFooter } from "@/features/onboarding/components/onboarding-footer";

export const metadata: Metadata = {
  title: "أضف عقاراتك | أبراج لإدارة الأصول العقارية",
  description: "الخطوة 1 من 3 · تهيئة المحفظة العقارية - استورد عقاراتك تلقائياً من منصات الحجز أو قم بإضافتها يدوياً.",
};

export default function OnboardingPage() {
  return (
    <main
      className="min-h-screen w-full bg-[#f6fbf1] flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 relative selection:bg-[#34422a] selection:text-white"
      data-node-id="1:21054"
      data-name="أضف عقاراتك"
    >
      {/* 1. Header (Logo & Brand title) */}
      <OnboardingHeader />

      {/* 2. Main Content Body (Progress Indicator, Two Decision Cards, Clarification Notice) */}
      <div className="flex flex-col items-center w-full max-w-[1024px] my-auto py-4 sm:py-6 lg:py-8">
        <OnboardingProgress />
        <OnboardingCards />
        <OnboardingReassurance />
      </div>

      {/* 3. Footer (Copyright & Policy links) */}
      <OnboardingFooter />
    </main>
  );
}
