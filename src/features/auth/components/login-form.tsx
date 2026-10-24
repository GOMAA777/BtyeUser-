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
      // Demonstration authentication delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      toast.success("تم تسجيل الدخول بنجاح!");
      // Redirect or navigate in future flow
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
          className="w-full text-right font-cairo font-semibold text-[14px] leading-[20px] text-text-primary"
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
            className="w-full h-[48px] bg-white rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-border/40 pr-[48px] pl-[16px] py-[11px] text-right font-cairo text-[14px] text-text-primary placeholder:text-text-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            data-node-id="1:40"
          />
          <div
            className="absolute top-0 bottom-0 right-[16px] flex items-center pointer-events-none"
            data-node-id="1:43"
          >
            <div className="relative size-[16px]" data-node-id="1:44">
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
          <p className="text-[12px] text-error font-cairo font-medium">
            {errors.identifier.message}
          </p>
        )}
      </div>

      {/* Field 2: Password */}
      <div className="flex flex-col gap-[8px] items-start w-full" data-node-id="1:46">
        <label
          htmlFor="password"
          className="w-full text-right font-cairo font-semibold text-[14px] leading-[20px] text-text-primary"
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
            className="w-full h-[48px] bg-white rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-border/40 pr-[48px] pl-[48px] py-[11px] text-right font-cairo text-[14px] text-text-primary placeholder:text-text-placeholder tracking-widest focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            data-node-id="1:50"
          />
          {/* Lock icon on the right */}
          <div
            className="absolute top-0 bottom-0 right-[16px] flex items-center pointer-events-none"
            data-node-id="1:53"
          >
            <div className="relative w-[13px] h-[16px]" data-node-id="1:54">
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
            className="absolute top-0 bottom-0 left-[16px] flex items-center justify-center text-text-muted hover:text-text-primary transition-colors focus:outline-none"
            title={showPassword ? "إخفاء كلمة المرور" : "عرض كلمة المرور"}
            data-node-id="1:56"
          >
            <div className="relative w-[17px] h-[12px]" data-node-id="1:57">
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
          <p className="text-[12px] text-error font-cairo font-medium">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Auxiliary Options: Remember & Forgot */}
      <div
        className="flex items-center justify-between w-full pt-[4px] pb-[8px]"
        data-node-id="1:59"
      >
        <Link
          href="#forgot-password"
          className="font-cairo font-semibold text-[14px] leading-[20px] text-primary hover:underline transition-all"
          data-node-id="1:61"
        >
          نسيت كلمة المرور؟
        </Link>
        <label
          className="flex items-center gap-[12px] cursor-pointer select-none"
          data-node-id="1:62"
        >
          <span className="font-cairo font-normal text-[14px] leading-[22px] text-text-primary">
            تذكرني على هذا الجهاز
          </span>
          <input
            type="checkbox"
            {...register("rememberMe")}
            className="size-[20px] rounded-[4px] border-border text-primary focus:ring-primary accent-primary cursor-pointer"
            data-node-id="1:65"
          />
        </label>
      </div>

      {/* Primary CTA Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="relative w-full h-[48px] bg-dashboard hover:bg-primary-hover active:scale-[0.99] text-white font-cairo font-semibold text-[18px] leading-[28px] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] flex items-center justify-center gap-[12px] transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        data-node-id="1:66"
      >
        {isLoading ? (
          <span className="inline-block size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <div className="relative size-[13px]" data-node-id="1:68">
              <Image
                src="/assets/auth/icon_arrow_left.svg"
                alt=""
                width={13}
                height={13}
                className="size-full object-contain"
              />
            </div>
            <span data-node-id="1:71">تسجيل الدخول</span>
          </>
        )}
      </button>

      {/* Modern Divider */}
      <div className="flex items-center justify-center w-full my-[4px]" data-node-id="1:72">
        <div className="h-px bg-divider w-full" data-node-id="1:73" />
      </div>

      {/* New Registration CTA */}
      <div
        className="flex items-center justify-center gap-[6px] w-full text-center"
        data-node-id="1:74"
      >
        <span
          className="font-cairo font-normal text-[14px] leading-[22px] text-text-body"
          data-node-id="1:76"
        >
          ليس لديك حساب منشأة عقارية؟
        </span>
        <Link
          href="#register"
          className="font-cairo font-semibold text-[18px] leading-[28px] text-dashboard hover:underline"
          data-node-id="1:75"
        >
          إنشاء حساب جديد
        </Link>
      </div>
    </form>
  );
}
