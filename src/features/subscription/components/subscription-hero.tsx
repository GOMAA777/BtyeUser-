import type { ReactNode } from "react";

export function SubscriptionHero({
  title,
  subtitle,
  action,
  nodeId,
}: {
  title: string;
  subtitle: string;
  action?: ReactNode;
  nodeId?: string;
}) {
  return (
    <section
      className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] px-[28px] py-[22px] flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between w-full"
      data-node-id={nodeId}
      data-name="Section - TOP HERO GREETING BAR"
    >
      <div className="flex flex-col items-start gap-[4px] min-w-0">
        <h1 className="font-cairo font-bold text-[#181d17] text-[24px] leading-[34px]">
          {title}
        </h1>
        <p className="font-cairo font-normal text-[#454840] text-[14px] leading-[22px]">
          {subtitle}
        </p>
      </div>
      {action}
    </section>
  );
}
