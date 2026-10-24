import Link from "next/link";

export function OnboardingFooter() {
  return (
    <footer
      className="w-full flex flex-wrap gap-[16px] items-center justify-center px-[16px] py-[24px] text-center"
      data-node-id="1:21067"
    >
      {/* Copyright text (Physical Right in RTL) */}
      <div
        className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840] whitespace-nowrap"
        data-node-id="1:21080"
      >
        © 2025 صرح لإدارة الأصول والاستثمار العقاري. جميع الحقوق محفوظة.
      </div>

      {/* Decorative Separator Dot */}
      <span className="font-cairo text-[10px] text-[#c5c8bd] select-none">•</span>

      {/* Auxiliary Policy Links (Physical Left in RTL) */}
      <div
        className="flex items-center gap-[12px] whitespace-nowrap"
        data-node-id="1:21068"
      >
        <Link
          href="#privacy"
          className="font-cairo font-medium text-[11px] leading-[16px] text-[#75786f] hover:text-[#181d17] transition-colors"
          data-node-id="1:21078"
        >
          سياسة الخصوصية
        </Link>
        <span className="font-cairo text-[10px] text-[#c5c8bd] select-none" data-node-id="1:21076">
          •
        </span>
        <Link
          href="#terms"
          className="font-cairo font-medium text-[11px] leading-[16px] text-[#75786f] hover:text-[#181d17] transition-colors"
          data-node-id="1:21074"
        >
          شروط الخدمة
        </Link>
        <span className="font-cairo text-[10px] text-[#c5c8bd] select-none" data-node-id="1:21072">
          •
        </span>
        <Link
          href="#support"
          className="font-cairo font-medium text-[11px] leading-[16px] text-[#75786f] hover:text-[#181d17] transition-colors"
          data-node-id="1:21070"
        >
          مركز الدعم والمساعدة
        </Link>
      </div>
    </footer>
  );
}
