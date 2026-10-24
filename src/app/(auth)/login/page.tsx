import { AuthTopNav } from "@/features/auth/components/auth-top-nav";
import { LoginForm } from "@/features/auth/components/login-form";
import { QuickTicker } from "@/features/auth/components/quick-ticker";
import { AuthFooter } from "@/features/auth/components/auth-footer";
import { BrandSide } from "@/features/auth/components/brand-side";

export default function LoginPage() {
  return (
    <main
      className="flex min-h-screen w-full bg-background items-stretch justify-center"
      data-node-id="1:10"
    >
      {/* AUTHENTICATION FORM SIDE (Left in RTL: 50-55% width) */}
      <section
        className="flex-1 flex flex-col items-center justify-between p-6 sm:p-10 lg:p-[80px] w-full max-w-[720px] self-stretch z-[2]"
        data-node-id="1:11"
      >
        {/* Top Micro Navigation */}
        <AuthTopNav />

        {/* Centered Form Area */}
        <div
          className="flex flex-col items-center justify-center w-full max-w-[576px] my-auto py-8 gap-[32px]"
          data-node-id="1:29"
        >
          {/* Welcome Headings */}
          <div className="flex flex-col gap-[12px] items-start w-full text-right" data-node-id="1:30">
            <h2
              className="w-full font-cairo font-bold text-[28px] sm:text-[30px] leading-[42px] tracking-[-0.75px] text-text-primary"
              data-node-id="1:32"
            >
              مرحبًا بعودتك
            </h2>
            <p
              className="w-full font-cairo font-normal text-[15px] sm:text-[16px] leading-[26px] text-text-body"
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

      {/* BRAND / VISUAL IDENTITY SIDE (Physical Right in RTL: 45-50% width) */}
      <BrandSide />
    </main>
  );
}
