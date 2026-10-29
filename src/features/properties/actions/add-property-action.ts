import { addPropertySchema, type AddPropertyInput } from "../schemas/add-property-schema";

export interface ActionResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export async function addPropertyAction(
  input: AddPropertyInput
): Promise<ActionResult<{ id: string; name: string }>> {
  // 1. Validation with Zod
  const validation = addPropertySchema.safeParse(input);
  if (!validation.success) {
    const errorMsg = validation.error.issues[0]?.message || "بيانات العقار غير صالحة";
    return { success: false, error: errorMsg };
  }

  const { name } = validation.data;

  // Simulate network latency / external service call
  await new Promise((resolve) => setTimeout(resolve, 300));

  const newPropertyId = `prop-${Date.now()}`;

  return {
    success: true,
    data: {
      id: newPropertyId,
      name,
    },
  };
}
