"use client";

import { toast as sonnerToast, type ExternalToast } from "sonner";

export interface ShowToastOptions extends ExternalToast {
  description?: string;
}

export const showToast = {
  /**
   * Success toast matching Image 1:
   * Light mint pill, green filled checkmark circle, dark green text.
   * Example: "تم التبديل إلى عمارة النخيل"
   */
  success: (message: string, options?: ShowToastOptions) => {
    return sonnerToast.success(message, {
      ...options,
    });
  },

  /**
   * Under development / Announcement toast matching Image 2:
   * White floating card with soft shadow, circular sage clock icon,
   * bold title, muted description, and circular corner close button.
   * Example:
   * Title: صفحة "فريق العمل" قيد الإنشاء والتطوير
   * Description: يجري العمل على إتاحة هذا التبويب بجميع بياناته وتفاصيله قريباً ضمن التحديث القادم لمنظومة أبراج.
   */
  underDevelopment: (featureName: string, options?: ShowToastOptions) => {
    return sonnerToast.info(`صفحة "${featureName}" قيد الإنشاء والتطوير`, {
      description:
        "يجري العمل على إتاحة هذا التبويب بجميع بياناته وتفاصيله قريباً ضمن التحديث القادم لمنظومة أبراج.",
      duration: 6000,
      ...options,
    });
  },

  /**
   * Rich information toast with custom title and description
   */
  info: (title: string, description?: string, options?: ShowToastOptions) => {
    return sonnerToast.info(title, {
      description,
      ...options,
    });
  },

  /**
   * Error toast matching the design system
   */
  error: (message: string, description?: string, options?: ShowToastOptions) => {
    return sonnerToast.error(message, {
      description,
      ...options,
    });
  },

  /**
   * Warning toast
   */
  warning: (title: string, description?: string, options?: ShowToastOptions) => {
    return sonnerToast.warning(title, {
      description,
      ...options,
    });
  },
};

export { sonnerToast as toast };
