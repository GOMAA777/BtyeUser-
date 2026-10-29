export default function DashboardLoading() {
  return (
    <div
      className="flex flex-col gap-[20px] w-full animate-pulse select-none"
      dir="rtl"
    >
      {/* 1. Hero Greeting Bar Skeleton */}
      <div className="bg-white rounded-[16px] p-[24px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[20px] w-full min-h-[102px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
        <div className="flex flex-col gap-2.5 w-full max-w-sm">
          <div className="h-7 bg-[#e5eae0] rounded-lg w-48" />
          <div className="h-4 bg-[#f1f5eb] rounded-md w-72" />
        </div>
        <div className="flex items-center gap-3 w-full lg:w-auto">
          <div className="h-10 bg-[#f1f5eb] rounded-xl w-36" />
          <div className="h-10 bg-[#e5eae0] rounded-xl w-28" />
        </div>
      </div>

      {/* 2. KPI Cards Row Skeleton (4 cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] w-full">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-white rounded-[16px] p-[20px] flex flex-col justify-between h-[134px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"
          >
            <div className="flex items-center justify-between">
              <div className="h-4 bg-[#f1f5eb] rounded w-24" />
              <div className="size-8 rounded-full bg-[#f1f5eb]" />
            </div>
            <div className="flex items-baseline justify-between pt-2">
              <div className="h-8 bg-[#e5eae0] rounded w-28" />
              <div className="h-5 bg-[#d8e8cb] rounded-full w-14" />
            </div>
          </div>
        ))}
      </div>

      {/* 3. Main Two-column Content Section Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[16px] w-full">
        {/* Right Section Skeleton (7 cols in RTL) */}
        <div className="lg:col-span-7 bg-white rounded-[16px] p-[24px] min-h-[380px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#dfe4db]">
            <div className="h-6 bg-[#e5eae0] rounded w-40" />
            <div className="h-4 bg-[#f1f5eb] rounded w-24" />
          </div>
          <div className="grid grid-cols-3 gap-3 my-auto">
            <div className="h-28 bg-[#f1f5eb] rounded-xl" />
            <div className="h-28 bg-[#f1f5eb] rounded-xl" />
            <div className="h-28 bg-[#f1f5eb] rounded-xl" />
          </div>
          <div className="h-32 bg-[#f6fbf1] rounded-xl border border-[#dfe4db]/70" />
        </div>

        {/* Left Section Skeleton (5 cols in RTL) */}
        <div className="lg:col-span-5 bg-white rounded-[16px] p-[24px] min-h-[380px] shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#dfe4db]">
            <div className="h-6 bg-[#e5eae0] rounded w-36" />
            <div className="size-6 bg-[#f1f5eb] rounded" />
          </div>
          <div className="flex flex-col gap-3 my-auto">
            <div className="h-16 bg-[#f1f5eb] rounded-xl" />
            <div className="h-16 bg-[#f1f5eb] rounded-xl" />
            <div className="h-16 bg-[#f1f5eb] rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
