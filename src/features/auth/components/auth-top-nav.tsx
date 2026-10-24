import Image from "next/image";
import Link from "next/link";

export function AuthTopNav() {
  return (
    <div
      className="flex items-center justify-between w-full max-w-[576px]"
      data-node-id="1:12"
    >
      {/* Right side in RTL (x=443.79): Portal identifier */}
      <div className="flex gap-[8px] items-center" data-node-id="1:24">
        <span
          className="font-cairo font-semibold text-[12px] leading-[18px] text-[#454840]"
          data-node-id="1:26"
        >
          بوابة إدارة العقارات
        </span>
        <div
          className="bg-[#54624c] rounded-full size-[10px] shrink-0"
          data-node-id="1:27"
        />
      </div>

      {/* Left side in RTL (x=0 to 170): Language toggle & Support */}
      <div className="flex gap-[12px] items-center" data-node-id="1:13">
        {/* Support Link */}
        <Link
          href="#support"
          className="flex gap-[4px] items-center hover:opacity-80 transition-opacity"
          data-node-id="1:14"
        >
          <span
            className="font-cairo font-semibold text-[12px] leading-[18px] text-[#454840]"
            data-node-id="1:16"
          >
            الدعم الفني
          </span>
          <div className="relative size-[13.33px] shrink-0" data-node-id="1:17">
            <Image
              src="/assets/auth/icon_support.svg"
              alt=""
              width={13}
              height={13}
              className="size-full object-contain"
            />
          </div>
        </Link>

        {/* English Toggle Button */}
        <button
          type="button"
          className="bg-[#e5eae0] hover:bg-[#dbe1d5] transition-colors flex gap-[6px] items-center px-[12px] py-[6px] rounded-[8px] shrink-0 cursor-pointer"
          data-node-id="1:19"
        >
          <span
            className="font-cairo font-semibold text-[12px] leading-[18px] text-[#181d17]"
            data-node-id="1:21"
          >
            English
          </span>
          <div className="relative size-[13.33px] shrink-0" data-node-id="1:22">
            <Image
              src="/assets/auth/icon_globe.svg"
              alt=""
              width={13}
              height={13}
              className="size-full object-contain"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
