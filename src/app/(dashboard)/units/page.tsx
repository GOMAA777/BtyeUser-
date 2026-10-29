import { Metadata } from "next";
import { UnitsView } from "@/features/units/components/units-view";

export const metadata: Metadata = {
  title: "الوحدات | ابراج",
  description: "إدارة وحدات عقاراتك ومتابعة حالتها وجاهزيتها التشغيلية.",
};

export default function UnitsPage() {
  return <UnitsView />;
}
