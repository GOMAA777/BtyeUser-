"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { registerSchema, type RegisterInput } from "../schemas/register-schema";

export function RegisterForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: true,
    },
  });

  const passwordValue = watch("password") || "";
  const passwordStrengthPercentage = Math.min(100, Math.max(15, (passwordValue.length / 10) * 100));

  const onSubmit = async (data: RegisterInput) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      toast.success("تم إنشاء حسابك بنجاح! جاري تحويلك...");
      router.push("/onboarding");
    } catch {
      toast.error("حدث خطأ أثناء إنشاء الحساب");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[16px] items-start w-full max-w-[576px]"
      data-node-id="1:17487"
    >
      {/* 1. Full Name */}
      <div className="flex flex-col gap-[6px] items-start w-full" data-node-id="1:17488">
        <label
          htmlFor="fullName"
          className="w-full text-right font-cairo font-semibold text-[14px] leading-[20px] text-[#181d17]"
          data-node-id="1:17489"
        >
          الاسم الكامل <span className="text-[#ba1a1a]">*</span>
        </label>
        <div className="relative w-full" data-node-id="1:17492">
          <input
            id="fullName"
            type="text"
            dir="rtl"
            placeholder="مثال: محمد بن ناصر العتيبي"
            {...register("fullName")}
            className="w-full h-[48px] bg-white rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-[#dfe4db]/60 pr-[44px] pl-[16px] py-[11px] text-right font-cairo text-[14px] text-[#181d17] placeholder:text-[#c5c8bd] focus:outline-none focus:ring-2 focus:ring-[#303b25] focus:border-transparent transition-all"
            data-node-id="1:17493"
          />
          <div
            className="absolute top-0 bottom-0 right-[14px] flex items-center pointer-events-none"
            data-node-id="1:17496"
          >
            <div className="relative size-[14px]" data-node-id="1:17497">
              <Image
                src="/assets/register/icon_user.svg"
                alt=""
                width={14}
                height={14}
                className="size-full object-contain"
              />
            </div>
          </div>
        </div>
        {errors.fullName && (
          <p className="text-[12px] text-[#ba1a1a] font-cairo font-medium">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* 2. Mobile Number & Fixed Saudi Country Code */}
      <div className="flex flex-col gap-[6px] items-start w-full" data-node-id="1:17498">
        <label
          htmlFor="phone"
          className="w-full text-right font-cairo font-semibold text-[14px] leading-[20px] text-[#181d17]"
          data-node-id="1:17499"
        >
          رقم الجوال <span className="text-[#ba1a1a]">*</span>
        </label>
        <div className="flex gap-[8px] items-center w-full" data-node-id="1:17502">
          {/* Main phone input (on right in RTL) */}
          <div className="relative flex-1" data-node-id="1:17511">
            <input
              id="phone"
              type="tel"
              dir="rtl"
              placeholder="05XXXXXXXX"
              {...register("phone")}
              className="w-full h-[48px] bg-white rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-[#dfe4db]/60 pr-[44px] pl-[16px] py-[11px] text-right font-cairo text-[14px] text-[#181d17] placeholder:text-[#c5c8bd] focus:outline-none focus:ring-2 focus:ring-[#303b25] focus:border-transparent transition-all"
              data-node-id="1:17512"
            />
            <div
              className="absolute top-0 bottom-0 right-[14px] flex items-center pointer-events-none"
              data-node-id="1:17515"
            >
              <div className="relative w-[13px] h-[18px]" data-node-id="1:17516">
                <Image
                  src="/assets/register/icon_mobile.svg"
                  alt=""
                  width={13}
                  height={18}
                  className="size-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Fixed Saudi Flag Indicator (on left in RTL) */}
          <div
            className="bg-[#e5eae0] flex gap-[8px] h-[48px] items-center px-[16px] rounded-[12px] shrink-0 select-none"
            data-node-id="1:17503"
          >
            <div className="flex items-center gap-[6px]" data-node-id="1:17504">
              <span className="text-[16px] leading-none">🇸🇦</span>
              <span
                className="font-cairo font-semibold text-[14px] leading-[20px] text-[#181d17]"
                data-node-id="1:17510"
              >
                +966
              </span>
            </div>
          </div>
        </div>
        {errors.phone && (
          <p className="text-[12px] text-[#ba1a1a] font-cairo font-medium">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* 3. Business or Personal Email */}
      <div className="flex flex-col gap-[6px] items-start w-full" data-node-id="1:17517">
        <label
          htmlFor="email"
          className="w-full text-right font-cairo font-semibold text-[14px] leading-[20px] text-[#181d17]"
          data-node-id="1:17518"
        >
          البريد الإلكتروني المؤسسي أو الشخصي <span className="text-[#ba1a1a]">*</span>
        </label>
        <div className="relative w-full" data-node-id="1:17521">
          <input
            id="email"
            type="email"
            dir="rtl"
            placeholder="name@company.sa"
            {...register("email")}
            className="w-full h-[48px] bg-white rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-[#dfe4db]/60 pr-[44px] pl-[16px] py-[11px] text-right font-cairo text-[14px] text-[#181d17] placeholder:text-[#c5c8bd] focus:outline-none focus:ring-2 focus:ring-[#303b25] focus:border-transparent transition-all"
            data-node-id="1:17522"
          />
          <div
            className="absolute top-0 bottom-0 right-[14px] flex items-center pointer-events-none"
            data-node-id="1:17525"
          >
            <div className="relative w-[17px] h-[13px]" data-node-id="1:17526">
              <Image
                src="/assets/register/icon_email.svg"
                alt=""
                width={17}
                height={13}
                className="size-full object-contain"
              />
            </div>
          </div>
        </div>
        {errors.email && (
          <p className="text-[12px] text-[#ba1a1a] font-cairo font-medium">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* 4. Dual Password Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] w-full" data-node-id="1:17527">
        {/* Password (Right Column in RTL) */}
        <div className="flex flex-col gap-[6px] items-start w-full" data-node-id="1:17541">
          <label
            htmlFor="password"
            className="w-full text-right font-cairo font-semibold text-[14px] leading-[20px] text-[#181d17]"
            data-node-id="1:17542"
          >
            كلمة المرور <span className="text-[#ba1a1a]">*</span>
          </label>
          <div className="relative w-full" data-node-id="1:17545">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              dir="rtl"
              placeholder="••••••••••••"
              {...register("password")}
              className="w-full h-[48px] bg-white rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-[#dfe4db]/60 pr-[44px] pl-[44px] py-[11px] text-right font-cairo text-[14px] text-[#181d17] placeholder:text-[#c5c8bd] tracking-widest focus:outline-none focus:ring-2 focus:ring-[#303b25] focus:border-transparent transition-all"
              data-node-id="1:17546"
            />
            <div
              className="absolute top-0 bottom-0 right-[14px] flex items-center pointer-events-none"
              data-node-id="1:17549"
            >
              <div className="relative w-[19px] h-[10px]" data-node-id="1:17550">
                <Image
                  src="/assets/register/icon_key.svg"
                  alt=""
                  width={19}
                  height={10}
                  className="size-full object-contain"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-0 bottom-0 left-[12px] flex items-center justify-center text-[#75786f] hover:text-[#181d17] transition-colors focus:outline-none cursor-pointer"
              title={showPassword ? "إخفاء كلمة المرور" : "عرض كلمة المرور"}
              data-node-id="1:17551"
            >
              <div className="relative w-[17px] h-[12px]" data-node-id="1:17552">
                <Image
                  src="/assets/register/icon_eye.svg"
                  alt=""
                  width={17}
                  height={12}
                  className="size-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </button>
          </div>
          {errors.password && (
            <p className="text-[12px] text-[#ba1a1a] font-cairo font-medium">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password (Left Column in RTL) */}
        <div className="flex flex-col gap-[6px] items-start w-full" data-node-id="1:17528">
          <label
            htmlFor="confirmPassword"
            className="w-full text-right font-cairo font-semibold text-[14px] leading-[20px] text-[#181d17]"
            data-node-id="1:17529"
          >
            تأكيد كلمة المرور <span className="text-[#ba1a1a]">*</span>
          </label>
          <div className="relative w-full" data-node-id="1:17532">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              dir="rtl"
              placeholder="••••••••••••"
              {...register("confirmPassword")}
              className="w-full h-[48px] bg-white rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-[#dfe4db]/60 pr-[44px] pl-[44px] py-[11px] text-right font-cairo text-[14px] text-[#181d17] placeholder:text-[#c5c8bd] tracking-widest focus:outline-none focus:ring-2 focus:ring-[#303b25] focus:border-transparent transition-all"
              data-node-id="1:17533"
            />
            <div
              className="absolute top-0 bottom-0 right-[14px] flex items-center pointer-events-none"
              data-node-id="1:17536"
            >
              <div className="relative size-[17px]" data-node-id="1:17537">
                <Image
                  src="/assets/register/icon_lock_confirm.svg"
                  alt=""
                  width={17}
                  height={17}
                  className="size-full object-contain"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute top-0 bottom-0 left-[12px] flex items-center justify-center text-[#75786f] hover:text-[#181d17] transition-colors focus:outline-none cursor-pointer"
              title={showConfirmPassword ? "إخفاء تأكيد كلمة المرور" : "عرض تأكيد كلمة المرور"}
              data-node-id="1:17538"
            >
              <div className="relative w-[17px] h-[12px]" data-node-id="1:17539">
                <Image
                  src="/assets/register/icon_eye.svg"
                  alt=""
                  width={17}
                  height={12}
                  className="size-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-[12px] text-[#ba1a1a] font-cairo font-medium">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      </div>

      {/* 5. Password Requirement Indicator */}
      <div
        className="bg-[#f1f5eb] flex flex-col gap-[6px] items-start p-[12px] rounded-[12px] w-full"
        data-node-id="1:17554"
      >
        <div className="flex items-center justify-between w-full" data-node-id="1:17555">
          <span
            className="font-cairo font-medium text-[11px] leading-[16px] text-[#75786f]"
            data-node-id="1:17559"
          >
            مستوى قوة كلمة المرور
          </span>
          <span
            className="font-cairo font-medium text-[11px] leading-[16px] text-[#54624c]"
            data-node-id="1:17557"
          >
            8 أحرف كحد أدنى تشمل أرقاماً ورموزاً
          </span>
        </div>
        <div
          className="bg-[#e5eae0] h-[6px] overflow-hidden rounded-full w-full relative"
          data-node-id="1:17560"
        >
          <div
            className="bg-[#4b5940] h-full rounded-full transition-all duration-300"
            style={{ width: `${passwordStrengthPercentage}%` }}
            data-node-id="1:17561"
          />
        </div>
      </div>

      {/* 6. Terms & Condition Checkbox */}
      <div className="flex gap-[12px] items-start py-[4px] w-full" data-node-id="1:17562">
        <div className="relative size-[20px] shrink-0 mt-[2px]" data-node-id="1:17570">
          <input
            id="acceptTerms"
            type="checkbox"
            {...register("acceptTerms")}
            className="peer sr-only"
          />
          <label
            htmlFor="acceptTerms"
            className="size-[20px] rounded-[3px] border border-[#767676] bg-white peer-checked:bg-[#4b5940] peer-checked:border-[#4b5940] flex items-center justify-center transition-all cursor-pointer shadow-sm [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100"
          >
            <svg
              className="size-[12px] text-white transition-opacity"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </label>
        </div>
        <label
          htmlFor="acceptTerms"
          className="font-cairo font-normal text-[13px] leading-[21px] text-[#454840] text-right cursor-pointer select-none"
          data-node-id="1:17563"
        >
          أوافق على{" "}
          <Link href="#terms" className="font-cairo font-semibold text-[#34422a] hover:underline">
            الشروط والأحكام
          </Link>{" "}
          و{" "}
          <Link href="#privacy" className="font-cairo font-semibold text-[#34422a] hover:underline">
            سياسة الخصوصية
          </Link>{" "}
          لمنظومة الراجح لإدارة الأصول العقارية والربط التقني.
        </label>
      </div>
      {errors.acceptTerms && (
        <p className="text-[12px] text-[#ba1a1a] font-cairo font-medium">
          {errors.acceptTerms.message}
        </p>
      )}

      {/* 7. Primary Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="relative w-full h-[48px] bg-[#34422a] hover:bg-[#2c3723] active:scale-[0.99] text-white font-cairo font-semibold text-[14px] leading-[20px] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] flex items-center justify-center gap-[8px] transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        data-node-id="1:17572"
      >
        {isLoading ? (
          <span className="inline-block size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <span data-node-id="1:17577">إنشاء الحساب</span>
            <div className="relative size-[13px]" data-node-id="1:17574">
              <Image
                src="/assets/register/icon_arrow_left.svg"
                alt=""
                width={13}
                height={13}
                className="size-full object-contain"
              />
            </div>
          </>
        )}
      </button>

      {/* 8. Bottom Prompt to Log In */}
      <div
        className="flex items-center justify-center gap-[6px] w-full text-center pt-[8px]"
        data-node-id="1:17578"
      >
        <span
          className="font-cairo font-normal text-[14px] leading-[22px] text-[#75786f]"
          data-node-id="1:17580"
        >
          لديك حساب بالفعل؟
        </span>
        <Link
          href="/login"
          className="font-cairo font-bold text-[14px] leading-[22px] text-[#34422a] hover:underline"
          data-node-id="1:17579"
        >
          تسجيل الدخول
        </Link>
      </div>
    </form>
  );
}
