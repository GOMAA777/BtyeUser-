import { addUnitSchema, type AddUnitInput } from "../schemas/add-unit-schema";

export async function addUnitAction(input: AddUnitInput): Promise<{
  success: boolean;
  data?: AddUnitInput;
  error?: string;
}> {
  try {
    const validated = addUnitSchema.parse(input);

    // In a full client/server setup, this calls the backend service.
    // For static export / mock mode, we validate and simulate successful addition.
    return {
      success: true,
      data: validated,
    };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "حدث خطأ أثناء حفظ الوحدة" };
  }
}
