"use client";

import { useSearchParams } from "next/navigation";
import { ImportPropertiesView } from "./import-properties-view";
import { ImportedPropertiesView } from "./imported-properties-view";

export function PropertiesImportClient() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step");

  if (step === "review") {
    return <ImportedPropertiesView />;
  }

  return <ImportPropertiesView />;
}

