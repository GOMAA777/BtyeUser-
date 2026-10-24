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
      style={
        {
          "--width": "420px",
          "--offset-left": "24px",
          "--offset-bottom": "24px",
        } as React.CSSProperties
      }
    />
  );
}
