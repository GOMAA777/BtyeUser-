"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-left"
      dir="rtl"
      closeButton={false}
      richColors={false}
      offset="24px"
      gap={12}
      duration={5000}
    />
  );
}
