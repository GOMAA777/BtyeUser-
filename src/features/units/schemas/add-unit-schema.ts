import { z } from "zod";

export const unitTypeEnum = z.enum([
  "studio",
  "private_apartment",
  "single_room",
  "duplex_other",
]);

export type UnitType = z.infer<typeof unitTypeEnum>;

export const unitImageSchema = z.object({
  id: z.string(),
  url: z.string(),
  caption: z.string(),
  isPrimary: z.boolean(),
});

export type UnitImage = z.infer<typeof unitImageSchema>;

export const addUnitSchema = z.object({
  floor: z.string().min(1, "يرجى اختيار الدور / الطابق"),
  unitNumber: z.string().min(1, "يرجى إدخال رقم الوحدة"),
  unitType: unitTypeEnum,
  description: z.string().optional(),
  amenities: z.array(z.string()),
  images: z.array(unitImageSchema),
  nightlyPrice: z.number().min(1, "يرجى تحديد السعر الأساسي لكل ليلة"),
  maxGuests: z.number().min(1, "الحد الأدنى لعدد الضيوف هو ضيف واحد").max(20, "الحد الأقصى هو 20 ضيف"),
  accessCodeMode: z.enum(["auto", "manual"]),
  accessCode: z.string().optional(),
});

export type AddUnitInput = z.infer<typeof addUnitSchema>;
