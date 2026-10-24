import Link from "next/link";

export function AuthFooter() {
  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-between w-full max-w-[576px] pt-2 xl:pt-4 2xl:pt-[24px] gap-4"
      data-node-id="1:97"
    >
      {/* Copyright */}
      <div
        className="font-cairo font-semibold text-[12px] leading-[18px] text-text-muted text-right"
        data-node-id="1:110"
      >
        © 2026 رِواق للتقنية العقارية. جميع الحقوق محفوظة.
      </div>

      {/* Policy Links */}
      <div className="flex items-center gap-[16px]" data-node-id="1:98">
        <Link
          href="#privacy"
          className="font-cairo font-semibold text-[12px] leading-[18px] text-text-muted hover:text-text-primary transition-colors"
          data-node-id="1:108"
        >
          سياسة الخصوصية
        </Link>
        <span className="font-cairo font-semibold text-[12px] text-text-muted" data-node-id="1:106">
          ·
        </span>
        <Link
          href="#terms"
          className="font-cairo font-semibold text-[12px] leading-[18px] text-text-muted hover:text-text-primary transition-colors"
          data-node-id="1:104"
        >
          شروط الخدمة
        </Link>
        <span className="font-cairo font-semibold text-[12px] text-text-muted" data-node-id="1:102">
          ·
        </span>
        <Link
          href="#licenses"
          className="font-cairo font-semibold text-[12px] leading-[18px] text-text-muted hover:text-text-primary transition-colors"
          data-node-id="1:100"
        >
          التراخيص
        </Link>
      </div>
    </div>
  );
}
