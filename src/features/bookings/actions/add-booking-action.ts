import { addBookingSchema, type AddBookingInput } from "../schemas/booking-schema";

export async function addBookingAction(input: AddBookingInput): Promise<{
  success: boolean;
  data?: AddBookingInput & { reference: string };
  error?: string;
}> {
  try {
    const validated = addBookingSchema.parse(input);

    const generatedRef = "BK-2026-" + Math.floor(1000 + Math.random() * 9000);

    return {
      success: true,
      data: {
        ...validated,
        reference: generatedRef,
      },
    };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "حدث خطأ أثناء حفظ الحجز" };
  }
}
