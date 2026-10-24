import { AuthTopNav } from "@/features/auth/components/auth-top-nav";
import { LoginForm } from "@/features/auth/components/login-form";
import { QuickTicker } from "@/features/auth/components/quick-ticker";
import { AuthFooter } from "@/features/auth/components/auth-footer";
import { BrandSide } from "@/features/auth/components/brand-side";

export default function LoginPage() {
  return (
    <main
      className="flex min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden w-full items-stretch"
      data-node-id="1:10"
    >
      {/* 
        In dir="rtl":
        1st flex child renders on PHYSICAL RIGHT = BrandSide
        2nd flex child renders on PHYSICAL LEFT  = Authentication Form
      */}

      {/* BRAND / VISUAL IDENTITY SIDE (Physical Right in RTL: 44% width, solid green panel background) */}
      <div className="hidden lg:flex lg:w-[44%] bg-brand-panel justify-center self-stretch relative z-[1]">
        <BrandSide />
      </div>

      {/* AUTHENTICATION FORM SIDE (Physical Left in RTL: 56% width, cream background) */}
      <div className="flex-1 lg:w-[56%] bg-[#f6fbf1] flex justify-center self-stretch z-[2]">
        <section
          className="flex flex-col items-center justify-between p-6 sm:p-10 lg:px-12 lg:py-6 xl:px-16 xl:py-8 2xl:p-[80px] w-full max-w-[720px] self-stretch"
          data-node-id="1:11"
        >
          {/* Top Micro Navigation */}
          <AuthTopNav />

          {/* Centered Form Area */}
          <div
            className="flex flex-col items-center justify-center w-full max-w-[576px] my-auto py-2 xl:py-4 2xl:py-8 gap-4 xl:gap-6 2xl:gap-[32px]"
            data-node-id="1:29"
          >
            {/* Welcome Headings */}
            <div className="flex flex-col gap-[12px] items-start w-full text-right" data-node-id="1:30">
              <h2
                className="w-full font-cairo font-bold text-[30px] leading-[42px] tracking-[-0.75px] text-[#181d17]"
                data-node-id="1:32"
              >
                مرحبًا بعودتك
              </h2>
              <p
                className="w-full font-cairo font-normal text-[16px] leading-[26px] text-[#454840]"
                data-node-id="1:34"
              >
                سجّل الدخول لإدارة عقاراتك ووحداتك ومتابعة مؤشرات الأداء الحية بسهولة.
              </p>
            </div>

            {/* Login Form */}
            <LoginForm />

            {/* Quick Portfolio Metrics Ticker */}
            <QuickTicker />
          </div>

          {/* Left Panel Footer */}
          <AuthFooter />
        </section>
      </div>
    </main>
  );
}
