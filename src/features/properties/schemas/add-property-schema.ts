import { z } from "zod";

export const propertyTypeEnum = z.enum([
  "building",
  "commercial",
  "complex",
  "resort",
  "villa",
]);

export type PropertyType = z.infer<typeof propertyTypeEnum>;

export const addPropertySchema = z.object({
  name: z
    .string()
    .min(2, "يرجى إدخال اسم العقار")
    .max(100, "اسم العقار يجب ألا يتجاوز 100 حرف"),
  type: propertyTypeEnum,
  city: z.string().min(1, "يرجى اختيار المدينة"),
  district: z.string().min(2, "يرجى إدخال الحي"),
  streetAddress: z.string().min(3, "يرجى إدخال العنوان التفصيلي"),
  description: z
    .string()
    .max(500, "الوصف يجب ألا يتجاوز 500 حرف")
    .optional(),
  imageUrl: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
});

export type AddPropertyInput = z.infer<typeof addPropertySchema>;

