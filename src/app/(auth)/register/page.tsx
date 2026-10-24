import { AuthTopNav } from "@/features/auth/components/auth-top-nav";
import { RegisterForm } from "@/features/auth/components/register-form";
import { TrialAssuranceBadge } from "@/features/auth/components/trial-assurance-badge";
import { RegisterBrandSide } from "@/features/auth/components/register-brand-side";

export default function RegisterPage() {
  return (
    <main
      className="flex min-h-screen w-full items-stretch"
      data-node-id="1:17462"
    >
      {/* 
        In dir="rtl":
        1st flex child renders on PHYSICAL RIGHT = RegisterBrandSide (46% width in Figma)
        2nd flex child renders on PHYSICAL LEFT  = Registration Form Area (54% width in Figma)
      */}

      {/* BRAND / VISUAL IDENTITY SIDE (Physical Right in RTL: 46% width, solid green background) */}
      <div className="hidden lg:flex lg:w-[46%] bg-[#4b5940] justify-center self-stretch relative z-[1]">
        <RegisterBrandSide />
      </div>

      {/* REGISTRATION FORM SIDE (Physical Left in RTL: 54% width, cream background) */}
      <div className="flex-1 lg:w-[54%] bg-[#f6fbf1] flex justify-center self-stretch z-[2]">
        <section
          className="flex flex-col items-center justify-between p-6 sm:p-8 lg:p-[64px] w-full max-w-[692px] self-stretch"
          data-node-id="1:17463"
        >
          {/* Top Micro Navigation */}
          <AuthTopNav />

          {/* Centered Registration Area */}
          <div
            className="flex flex-col items-center justify-center w-full max-w-[576px] my-auto py-4 gap-[24px]"
            data-node-id="1:17481"
          >
            {/* Header */}
            <div className="flex flex-col gap-[8px] items-start w-full text-right" data-node-id="1:17482">
              <h2
                className="w-full font-cairo font-bold text-[30px] leading-[42px] tracking-[-0.75px] text-[#181d17]"
                data-node-id="1:17484"
              >
                أنشئ حسابك
              </h2>
              <p
                className="w-full font-cairo font-bold text-[16px] leading-[26px] text-[#75786f]"
                data-node-id="1:17486"
              >
                ابدأ بإدارة عقاراتك ووحداتك وحجوزاتك من مكان واحد بكل سهولة واحترافية.
              </p>
            </div>

            {/* Registration Form */}
            <RegisterForm />
          </div>

          {/* Bottom Auxiliary Assurance Note */}
          <TrialAssuranceBadge />
        </section>
      </div>
    </main>
  );
}
