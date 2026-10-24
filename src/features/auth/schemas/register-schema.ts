import { z } from "zod";

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(2, "يرجى إدخال الاسم الكامل"),
    phone: z
      .string()
      .regex(/^05\d{8}$|^5\d{8}$/, "يرجى إدخال رقم جوال سعودي صحيح (مثال: 0501234567)"),
    email: z
      .string()
      .email("يرجى إدخال بريد إلكتروني صحيح"),
    password: z
      .string()
      .min(8, "كلمة المرور يجب أن لا تقل عن 8 أحرف"),
    confirmPassword: z
      .string()
      .min(8, "يرجى تأكيد كلمة المرور"),
    acceptTerms: z.literal(true, {
      message: "يجب الموافقة على الشروط والأحكام وسياسة الخصوصية",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "كلمات المرور غير متطابقة",
    path: ["confirmPassword"],
  });

export type RegisterInput = z.infer<typeof registerSchema>;
