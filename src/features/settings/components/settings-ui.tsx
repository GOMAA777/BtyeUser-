"use client";

import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import type { ReactNode } from "react";

export function Toggle({
  on,
  onChange,
  label,
  disabled,
}: {
  on: boolean;
  onChange?: (next: boolean) => void;
  label: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!on)}
      className={`relative h-[24px] w-[44px] shrink-0 rounded-full transition-colors ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      } ${on ? "bg-[#34422a]" : "bg-[#d5dbd0]"}`}
    >
      <span
        className={`absolute top-[3px] size-[18px] rounded-full bg-white shadow-sm transition-all ${
          on ? "start-[23px]" : "start-[3px]"
        }`}
      />
    </button>
  );
}

export function SettingsHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="flex flex-col gap-4 rounded-[16px] bg-white px-[24px] py-[18px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] lg:flex-row lg:items-center lg:justify-between">
      <div className="flex min-w-0 flex-col items-start gap-[4px] text-start">
        <h1 className="font-cairo text-[24px] font-bold leading-[34px] text-[#181d17]">{title}</h1>
        <p className="max-w-[640px] font-cairo text-[13px] leading-[20px] text-[#454840]">{subtitle}</p>
      </div>
      <Link
        href="/settings"
        className="inline-flex h-[40px] shrink-0 items-center gap-2 rounded-[12px] bg-[#f1f5eb] px-4 font-cairo text-[13px] font-semibold text-[#34422a]"
      >
        <ArrowRight size={14} />
        العودة إلى الإعدادات
      </Link>
    </section>
  );
}

export function SaveBar({ onSave, onCancel }: { onSave: () => void; onCancel: () => void }) {
  return (
    <div className="flex flex-col gap-3 rounded-[16px] bg-white px-[20px] py-[14px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onSave}
          className="inline-flex h-[44px] items-center gap-2 rounded-[12px] bg-[#34422a] px-5 font-cairo text-[14px] font-bold text-white"
        >
          <Check size={16} />
          حفظ التغييرات
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="h-[44px] rounded-[12px] bg-[#eef2ea] px-5 font-cairo text-[14px] font-semibold text-[#34422a]"
        >
          إلغاء التعديلات
        </button>
      </div>
      <p className="font-cairo text-[12px] text-[#75786f]">
        آخر تحديث: <span className="font-semibold text-[#181d17]">5 أكتوبر 2026</span>
        <span> — بواسطة مدير النظام (محمد أحمد)</span>
      </p>
    </div>
  );
}

export function Card({
  title,
  icon,
  children,
  className = "",
}: {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`rounded-[16px] bg-white p-6 shadow-[0px_1px_1px_rgba(0,0,0,0.04)] ${className}`}>
      {title ? (
        <div className="mb-4 flex items-center justify-end gap-2">
          <h2 className="font-cairo text-[18px] font-bold leading-[28px] text-[#181d17]">{title}</h2>
          {icon ? <span className="text-[#34422a]">{icon}</span> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}

export const fieldClass =
  "h-[44px] w-full rounded-[12px] border border-[#e5eae0] bg-[#f7faf4] px-3 text-start font-cairo text-[14px] text-[#181d17] outline-none focus:border-[#34422a]";

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col items-stretch gap-2">
      <span className="text-start font-cairo text-[13px] font-semibold text-[#181d17]">{label}</span>
      {children}
    </label>
  );
}

export function ToggleRow({
  title,
  description,
  on,
  onChange,
  badge,
  disabled,
}: {
  title: string;
  description?: string;
  on: boolean;
  onChange?: (next: boolean) => void;
  badge?: string;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-[12px] bg-[#f7faf4] p-4">
      <Toggle on={on} onChange={onChange} label={title} disabled={disabled} />
      <div className="flex min-w-0 flex-1 flex-col items-end gap-1 text-end">
        <div className="flex items-center gap-2">
          {badge ? (
            <span className="rounded-full bg-[#f2e1c0] px-2 py-0.5 font-cairo text-[11px] font-semibold text-[#695d43]">
              {badge}
            </span>
          ) : null}
          <p className="font-cairo text-[14px] font-bold text-[#181d17]">{title}</p>
        </div>
        {description ? <p className="font-cairo text-[12px] leading-[18px] text-[#454840]">{description}</p> : null}
      </div>
    </div>
  );
}

export function Modal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#181d17]/40 p-4" role="dialog" aria-modal="true">
      <div className="max-h-[90vh] w-full max-w-[640px] overflow-y-auto rounded-[16px] bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <button type="button" onClick={onClose} aria-label="إغلاق" className="rounded-full p-1 text-[#454840]">
            <X size={18} />
          </button>
          <h2 className="font-cairo text-[20px] font-bold text-[#181d17]">{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
}
