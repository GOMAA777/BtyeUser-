import type { Metadata } from "next";
import { TemplateCreateView } from "@/features/whatsapp/components/template-create-view";

export const metadata: Metadata = {
  title: "إنشاء قالب Meta WhatsApp | أبراج",
  description:
    "إنشاء واعتماد قوالب رسائل WhatsApp Business الرسمية للحملات التلقائية والإشعارات الفورية",
};

export default function NewWhatsappTemplatePage() {
  return <TemplateCreateView />;
}
