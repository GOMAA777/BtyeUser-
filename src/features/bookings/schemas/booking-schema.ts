import { z } from "zod";

export const addBookingSchema = z.object({
  property: z.string().min(1, "يرجى اختيار العقار"),
  unitId: z.string().min(1, "يرجى اختيار الوحدة السكنية"),
  unitName: z.string().optional(),
  unitType: z.string().optional(),
  dailyPrice: z.number().default(450),
  guestName: z.string().min(2, "اسم الضيف مطلوب"),
  guestPhone: z.string().min(9, "رقم الجوال مطلوب"),
  guestEmail: z.string().email("البريد الإلكتروني غير صالح").optional().or(z.literal("")),
  nationalId: z.string().min(10, "رقم الهوية / الإقامة مطلوب"),
  checkInDate: z.string().min(1, "تاريخ الوصول مطلوب"),
  checkInTime: z.string().default("02:00 م"),
  checkOutDate: z.string().min(1, "تاريخ المغادرة مطلوب"),
  checkOutTime: z.string().default("12:00 م"),
  adults: z.number().min(1).default(2),
  children: z.number().default(0),
  autoLockCode: z.boolean().default(true),
  flexibleCheckIn: z.boolean().default(true),
  notes: z.string().optional(),
  paymentMethod: z.string().default("direct"),
});

export type AddBookingInput = z.infer<typeof addBookingSchema>;
