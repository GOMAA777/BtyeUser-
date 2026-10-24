"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { loginSchema, type LoginInput } from "../schemas/login-schema";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
      rememberMe: true,
    },
  });

  const onSubmit = async (data: LoginInput) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      toast.success("تم تسجيل الدخول بنجاح!");
    } catch {
      toast.error("حدث خطأ أثناء محاولة تسجيل الدخول");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[24px] items-start pt-[8px] w-full max-w-[576px]"
      data-node-id="1:35"
    >
      {/* Field 1: Phone / Email */}
      <div className="flex flex-col gap-[8px] items-start w-full" data-node-id="1:36">
        <label
          htmlFor="identifier"
          className="w-full text-right font-cairo font-semibold text-[14px] leading-[20px] text-[#252820]"
          data-node-id="1:38"
        >
          رقم الجوال أو البريد الإلكتروني
        </label>
        <div className="relative w-full" data-node-id="1:39">
          <input
            id="identifier"
            type="text"
            dir="rtl"
            placeholder="مثال: 0501234567 أو name@company.sa"
            {...register("identifier")}
            className="w-full h-[48px] bg-white rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-[#dfe4db]/60 pr-[48px] pl-[16px] py-[11px] text-right font-cairo text-[14px] text-[#252820] placeholder:text-[rgba(117,120,111,0.7)] focus:outline-none focus:ring-2 focus:ring-[#303b25] focus:border-transparent transition-all"
            data-node-id="1:40"
          />
          <div
            className="absolute top-0 bottom-0 right-[16px] flex items-center pointer-events-none"
            data-node-id="1:43"
          >
            <div className="relative size-[15.72px]" data-node-id="1:44">
              <Image
                src="/assets/auth/icon_at.svg"
                alt=""
                width={16}
                height={16}
                className="size-full object-contain"
              />
            </div>
          </div>
        </div>
        {errors.identifier && (
          <p className="text-[12px] text-[#b12515] font-cairo font-medium">
            {errors.identifier.message}
          </p>
        )}
      </div>

      {/* Field 2: Password */}
      <div className="flex flex-col gap-[8px] items-start w-full" data-node-id="1:46">
        <label
          htmlFor="password"
          className="w-full text-right font-cairo font-semibold text-[14px] leading-[20px] text-[#252820]"
          data-node-id="1:48"
        >
          كلمة المرور
        </label>
        <div className="relative w-full" data-node-id="1:49">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            dir="rtl"
            placeholder="••••••••••••"
            {...register("password")}
            className="w-full h-[48px] bg-white rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-[#dfe4db]/60 pr-[48px] pl-[48px] py-[11px] text-right font-cairo text-[14px] text-[#252820] placeholder:text-[rgba(117,120,111,0.7)] tracking-widest focus:outline-none focus:ring-2 focus:ring-[#303b25] focus:border-transparent transition-all"
            data-node-id="1:50"
          />
          {/* Lock icon on the right */}
          <div
            className="absolute top-0 bottom-0 right-[16px] flex items-center pointer-events-none"
            data-node-id="1:53"
          >
            <div className="relative w-[12.72px] h-[16.35px]" data-node-id="1:54">
              <Image
                src="/assets/auth/icon_lock.svg"
                alt=""
                width={13}
                height={16}
                className="size-full object-contain"
              />
            </div>
          </div>
          {/* Toggle Eye button on the left */}
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-0 bottom-0 left-[16px] flex items-center justify-center text-[#75786f] hover:text-[#252820] transition-colors focus:outline-none cursor-pointer"
            title={showPassword ? "إخفاء كلمة المرور" : "عرض كلمة المرور"}
            data-node-id="1:56"
          >
            <div className="relative w-[17.16px] h-[11.91px]" data-node-id="1:57">
              <Image
                src="/assets/auth/icon_eye.svg"
                alt=""
                width={17}
                height={12}
                className="size-full object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </button>
        </div>
        {errors.password && (
          <p className="text-[12px] text-[#b12515] font-cairo font-medium">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Auxiliary Options: Remember & Forgot (x=0 to 556.8) */}
      <div
        className="flex items-center justify-between w-full pt-[4px] pb-[8px]"
        data-node-id="1:59"
      >
        {/* Right side in RTL (x=396.73): Remember me checkbox */}
        <label
          className="flex items-center gap-[12px] cursor-pointer select-none"
          data-node-id="1:62"
        >
          <input
            type="checkbox"
            {...register("rememberMe")}
            className="size-[20px] rounded-[2.5px] border-[#dfe4db] text-[#4b5940] focus:ring-[#303b25] accent-[#4b5940] cursor-pointer"
            data-node-id="1:65"
          />
          <span className="font-cairo font-normal text-[14px] leading-[22px] text-[#181d17]">
            تذكرني على هذا الجهاز
          </span>
        </label>

        {/* Left side in RTL (x=0): Forgot password link */}
        <Link
          href="#forgot-password"
          className="font-cairo font-semibold text-[14px] leading-[20px] text-[#303b25] hover:underline transition-all"
          data-node-id="1:61"
        >
          نسيت كلمة المرور؟
        </Link>
      </div>

      {/* Primary CTA Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="relative w-full h-[48px] bg-[#34422a] hover:bg-[#2c3723] active:scale-[0.99] text-white font-cairo font-semibold text-[18px] leading-[28px] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] flex items-center justify-center gap-[12px] transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        data-node-id="1:66"
      >
        {isLoading ? (
          <span className="inline-block size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <span data-node-id="1:71">تسجيل الدخول</span>
            <div className="relative size-[12.72px]" data-node-id="1:68">
              <Image
                src="/assets/auth/icon_arrow_left.svg"
                alt=""
                width={13}
                height={13}
                className="size-full object-contain"
              />
            </div>
          </>
        )}
      </button>

      {/* Modern Divider */}
      <div className="flex items-center justify-center w-full my-[4px]" data-node-id="1:72">
        <div className="h-px bg-[#dfe4db] w-full" data-node-id="1:73" />
      </div>

      {/* New Registration CTA */}
      <div
        className="flex items-center justify-center gap-[8px] w-full text-center"
        data-node-id="1:74"
      >
        <span
          className="font-cairo font-normal text-[14px] leading-[22px] text-[#454840]"
          data-node-id="1:76"
        >
          ليس لديك حساب منشأة عقارية؟
        </span>
        <Link
          href="/register"
          className="font-cairo font-semibold text-[18px] leading-[28px] text-[#34422a] hover:underline"
          data-node-id="1:75"
        >
          إنشاء حساب جديد
        </Link>
      </div>
    </form>
  );
}
