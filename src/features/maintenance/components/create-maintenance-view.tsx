"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/lib/toast";

export function CreateMaintenanceView() {
  const router = useRouter();

  // Form state
  const [selectedOwner, setSelectedOwner] = useState("OWN-8823");
  const [selectedProperty, setSelectedProperty] = useState("yasmin-tower");
  const [selectedUnit, setSelectedUnit] = useState("305");
  const [selectedCategory, setSelectedCategory] = useState("locks");
  const [selectedPriority, setSelectedPriority] = useState<"urgent" | "high" | "medium" | "low">("urgent");
  const [impactScope, setImpactScope] = useState("full_block");
  const [description, setDescription] = useState(
    "عطل مفاجئ في قفل الباب الإلكتروني الذكي للوحدة 305؛ يرفض استقبال الرمز السري أو الفتح عبر البلوتوث مع وميض أحمر مستمر يفيد بنفاد شحن البطارية."
  );
  const [selectedTechnician, setSelectedTechnician] = useState("tech-1");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast.success("تم تسجيل بلاغ الصيانة #MT-2048 بنجاح وتعيين الفني الميداني");
      router.push("/maintenance/MT-2048");
    }, 600);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#f1f5eb] min-h-screen p-[24px] lg:p-[32px] flex flex-col gap-[20px] w-full pb-32"
      dir="rtl"
      data-node-id="1:12008"
      data-name="إنشاء بلاغ صيانة"
    >
      {/* 1. PAGE HEADER BAR */}
      <div
        className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[16px] p-6 lg:px-[32px] lg:py-[24px] flex flex-col md:flex-row md:items-center justify-between gap-4 w-full"
        data-node-id="1:12011"
        data-name="PAGE HEADER BAR"
      >
        <div className="flex flex-col items-start gap-1">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[#73786f] text-[12px] font-cairo">
            <Link href="/maintenance" className="hover:text-[#181d17] transition-colors">
              الصيانة
            </Link>
            <span>/</span>
            <span className="text-[#181d17] font-semibold">بلاغ جديد</span>
          </div>

          <h1
            className="font-cairo font-bold text-[#181d17] text-[24px] leading-[34px] pt-1"
            data-node-id="1:12015"
          >
            إنشاء بلاغ صيانة جديد
          </h1>
          <p className="font-cairo font-normal text-[#454840] text-[13px] leading-[22px]">
            تسجيل عطل تشغيلي أو بلاغ صيانة ميداني لربطه بالأصل العقاري وجدولته فورياً وفق بروتوكولات الحوكمة.
          </p>
        </div>

        {/* Back Link */}
        <Link
          href="/maintenance"
          className="bg-[#f1f5eb] hover:bg-[#e4ecd9] active:scale-[0.98] transition-all h-[42px] px-[20px] rounded-[12px] flex items-center gap-[8px] font-cairo font-semibold text-[#34422a] text-[13px] self-start md:self-center border border-[#dfe4db]/70"
        >
          <span>العودة للبلاغات</span>
          <span className="text-[16px] leading-none">←</span>
        </Link>
      </div>

      {/* 2. MAIN GRID FORM STRUCTURE (8 Cols Form Stream + 4 Cols Context Sidebar) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[20px] w-full items-start">
        {/* Right Form Stream (8 of 12 cols in RTL) */}
        <div className="lg:col-span-8 flex flex-col gap-[20px] w-full">
          {/* SECTION A: Target Real Estate Asset Hierarchy */}
          <div
            className="bg-white rounded-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#e5e8e2] p-[24px] flex flex-col gap-[20px] w-full"
            data-node-id="1:12019"
            data-name="SECTION A: Target Real Estate Asset Hierarchy"
          >
            <div className="flex items-center justify-between border-b border-[#e5e8e2] pb-[14px]">
              <div className="flex items-center gap-[8px]">
                <div className="size-[28px] rounded-[8px] bg-[#eaf1e8] flex items-center justify-center text-[#34422a] font-bold text-[13px]">
                  1
                </div>
                <h2 className="font-cairo font-bold text-[#181d17] text-[16px] leading-[24px]">
                  الأصل العقاري المستهدف <span className="text-[#dc2626]">*</span>
                </h2>
              </div>
              <span className="font-cairo text-[12px] text-[#75786f]">
                تسلسل الربط: المالك ← العقار ← الوحدة
              </span>
            </div>

            {/* 3 Select dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px] w-full">
              {/* 1. Owner Select */}
              <div className="flex flex-col gap-2">
                <label className="font-cairo font-semibold text-[#181d17] text-[13px]">
                  المالك المسجل <span className="text-[#dc2626]">*</span>
                </label>
                <select
                  value={selectedOwner}
                  onChange={(e) => setSelectedOwner(e.target.value)}
                  className="w-full h-[44px] px-[12px] bg-[#f6f7f4] border border-[#e5e8e2] rounded-[10px] font-cairo text-[13px] text-[#181d17] outline-none focus:border-[#34422a] transition-colors"
                >
                  <option value="OWN-8823">سارة القحطاني (OWN-8823)</option>
                  <option value="OWN-4491">محمد العتيبي (OWN-4491)</option>
                  <option value="OWN-1044">عبدالله الشمري (OWN-1044)</option>
                </select>
              </div>

              {/* 2. Property Select */}
              <div className="flex flex-col gap-2">
                <label className="font-cairo font-semibold text-[#181d17] text-[13px]">
                  العقار المستضاف <span className="text-[#dc2626]">*</span>
                </label>
                <select
                  value={selectedProperty}
                  onChange={(e) => setSelectedProperty(e.target.value)}
                  className="w-full h-[44px] px-[12px] bg-[#f6f7f4] border border-[#e5e8e2] rounded-[10px] font-cairo text-[13px] text-[#181d17] outline-none focus:border-[#34422a] transition-colors"
                >
                  <option value="yasmin-tower">برج الياسمين — الرياض</option>
                  <option value="nakheel-bldg">عمارة النخيل — العليا</option>
                  <option value="rawdah-villas">فلل الروضة السكنية</option>
                </select>
              </div>

              {/* 3. Unit Select */}
              <div className="flex flex-col gap-2">
                <label className="font-cairo font-semibold text-[#181d17] text-[13px]">
                  الوحدة المحددة <span className="text-[#dc2626]">*</span>
                </label>
                <select
                  value={selectedUnit}
                  onChange={(e) => setSelectedUnit(e.target.value)}
                  className="w-full h-[44px] px-[12px] bg-[#f6f7f4] border border-[#e5e8e2] rounded-[10px] font-cairo text-[13px] text-[#181d17] outline-none focus:border-[#34422a] transition-colors"
                >
                  <option value="305">الوحدة 305 (الطابق 3)</option>
                  <option value="204">الوحدة 204 (الطابق 2)</option>
                  <option value="101">الوحدة 101 (الطابق 1)</option>
                </select>
              </div>
            </div>

            {/* Selected Asset Teardown Strip */}
            <div
              className="bg-[#f1f5eb] rounded-[12px] p-[16px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-[#dfe4db]"
              data-node-id="1:12073"
              data-name="Selected Asset Teardown Strip"
            >
              <div className="flex items-center gap-[12px]">
                <div className="size-[36px] rounded-[10px] bg-white flex items-center justify-center font-cairo font-bold text-[#34422a] text-[15px] shadow-xs shrink-0">
                  305
                </div>
                <div className="flex flex-col">
                  <span className="font-cairo font-bold text-[#181d17] text-[13px]">
                    الوحدة 305 (جناح عائلي تنفيذي - 3 غرف نوم)
                  </span>
                  <span className="font-cairo text-[11px] text-[#75786f]">
                    عقد الاستثمار النشط: #CON-9022 • نوع التشغيل: إيجار موسمي
                  </span>
                </div>
              </div>
              <span className="bg-[#d8e8cb] text-[#34422a] px-[10px] py-[3px] rounded-full text-[11px] font-cairo font-bold whitespace-nowrap">
                الوثيقة التأمينية سارية
              </span>
            </div>
          </div>

          {/* SECTION B: Classification & Priority */}
          <div
            className="bg-white rounded-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#e5e8e2] p-[24px] flex flex-col gap-[20px] w-full"
            data-node-id="1:12081"
            data-name="SECTION B: Classification & Priority"
          >
            <div className="flex items-center gap-[8px] border-b border-[#e5e8e2] pb-[14px]">
              <div className="size-[28px] rounded-[8px] bg-[#eaf1e8] flex items-center justify-center text-[#34422a] font-bold text-[13px]">
                2
              </div>
              <h2 className="font-cairo font-bold text-[#181d17] text-[16px] leading-[24px]">
                تصنيف وطبيعة البلاغ التشغيلي
              </h2>
            </div>

            {/* Category & Scope */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] w-full">
              {/* Category */}
              <div className="flex flex-col gap-2">
                <label className="font-cairo font-semibold text-[#181d17] text-[13px]">
                  فئة العطل الفني <span className="text-[#dc2626]">*</span>
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full h-[44px] px-[12px] bg-[#f6f7f4] border border-[#e5e8e2] rounded-[10px] font-cairo text-[13px] text-[#181d17] outline-none focus:border-[#34422a]"
                >
                  <option value="locks">أقفال ومداخل إلكترونية (Smart Lock)</option>
                  <option value="plumbing">سباكة وصرف صحي</option>
                  <option value="hvac">تكييف وتهوية وتبريد</option>
                  <option value="electrical">كهرباء وإنارة وشبكات</option>
                  <option value="appliances">أجهزة منزلية وإلكترونيات</option>
                  <option value="other">أخرى</option>
                </select>
              </div>

              {/* Impact Scope */}
              <div className="flex flex-col gap-2">
                <label className="font-cairo font-semibold text-[#181d17] text-[13px]">
                  نطاق التأثير الميداني <span className="text-[#dc2626]">*</span>
                </label>
                <select
                  value={impactScope}
                  onChange={(e) => setImpactScope(e.target.value)}
                  className="w-full h-[44px] px-[12px] bg-[#f6f7f4] border border-[#e5e8e2] rounded-[10px] font-cairo text-[13px] text-[#181d17] outline-none focus:border-[#34422a]"
                >
                  <option value="full_block">تعطيل وصول النزيل كلياً (SLA فوري)</option>
                  <option value="partial">عطل جزئي لا يمنع الإقامة الأساسية</option>
                  <option value="routine">صيانة وقائية دورية معتادة</option>
                </select>
              </div>
            </div>

            {/* Priority Selector (Segmented Radio) */}
            <div className="flex flex-col gap-2 pt-2">
              <label className="font-cairo font-semibold text-[#181d17] text-[13px]">
                درجة الأولوية وزمن الاستجابة (SLA) <span className="text-[#dc2626]">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-[10px] w-full">
                {/* Urgent */}
                <button
                  type="button"
                  onClick={() => setSelectedPriority("urgent")}
                  className={`p-[12px] rounded-[12px] border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                    selectedPriority === "urgent"
                      ? "bg-[#fee2e2] border-[#dc2626] text-[#dc2626] font-bold shadow-xs"
                      : "bg-[#f6f7f4] border-[#e5e8e2] text-[#454840] hover:bg-neutral-100 font-medium"
                  }`}
                >
                  <span className="font-cairo text-[13px]">عاجلة وفورية</span>
                  <span className="text-[10px] opacity-80">استجابة خلال ساعتين</span>
                </button>

                {/* High */}
                <button
                  type="button"
                  onClick={() => setSelectedPriority("high")}
                  className={`p-[12px] rounded-[12px] border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                    selectedPriority === "high"
                      ? "bg-[#fff4e5] border-[#b86b14] text-[#b86b14] font-bold shadow-xs"
                      : "bg-[#f6f7f4] border-[#e5e8e2] text-[#454840] hover:bg-neutral-100 font-medium"
                  }`}
                >
                  <span className="font-cairo text-[13px]">عالية</span>
                  <span className="text-[10px] opacity-80">خلال 6 ساعات</span>
                </button>

                {/* Medium */}
                <button
                  type="button"
                  onClick={() => setSelectedPriority("medium")}
                  className={`p-[12px] rounded-[12px] border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                    selectedPriority === "medium"
                      ? "bg-[#e3f2fd] border-[#1976d2] text-[#1976d2] font-bold shadow-xs"
                      : "bg-[#f6f7f4] border-[#e5e8e2] text-[#454840] hover:bg-neutral-100 font-medium"
                  }`}
                >
                  <span className="font-cairo text-[13px]">متوسطة</span>
                  <span className="text-[10px] opacity-80">خلال 24 ساعة</span>
                </button>

                {/* Low */}
                <button
                  type="button"
                  onClick={() => setSelectedPriority("low")}
                  className={`p-[12px] rounded-[12px] border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
                    selectedPriority === "low"
                      ? "bg-[#f1f2ed] border-[#73786f] text-[#252820] font-bold shadow-xs"
                      : "bg-[#f6f7f4] border-[#e5e8e2] text-[#454840] hover:bg-neutral-100 font-medium"
                  }`}
                >
                  <span className="font-cairo text-[13px]">منخفضة</span>
                  <span className="text-[10px] opacity-80">خلال 48 ساعة</span>
                </button>
              </div>
            </div>
          </div>

          {/* SECTION C: Operational Details & Assignment */}
          <div
            className="bg-white rounded-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#e5e8e2] p-[24px] flex flex-col gap-[20px] w-full"
            data-node-id="1:12154"
            data-name="SECTION C: Operational Details & Assignment"
          >
            <div className="flex items-center gap-[8px] border-b border-[#e5e8e2] pb-[14px]">
              <div className="size-[28px] rounded-[8px] bg-[#eaf1e8] flex items-center justify-center text-[#34422a] font-bold text-[13px]">
                3
              </div>
              <h2 className="font-cairo font-bold text-[#181d17] text-[16px] leading-[24px]">
                تفاصيل البلاغ والإسناد الميداني
              </h2>
            </div>

            {/* Description Textarea */}
            <div className="flex flex-col gap-2">
              <label className="font-cairo font-semibold text-[#181d17] text-[13px]">
                وصف المشكلة بالتفصيل <span className="text-[#dc2626]">*</span>
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                placeholder="اكتب وصفاً دقيقاً للأعراض والعطل الميداني..."
                className="w-full p-[14px] bg-[#f6f7f4] border border-[#e5e8e2] rounded-[10px] font-cairo text-[13px] text-[#181d17] outline-none focus:border-[#34422a] transition-colors resize-none leading-[22px]"
                required
              />
            </div>

            {/* Assigned Technician Select */}
            <div className="flex flex-col gap-2">
              <label className="font-cairo font-semibold text-[#181d17] text-[13px]">
                إسناد المهمة لفني الصيانة الميدانية
              </label>
              <select
                value={selectedTechnician}
                onChange={(e) => setSelectedTechnician(e.target.value)}
                className="w-full h-[44px] px-[12px] bg-[#f6f7f4] border border-[#e5e8e2] rounded-[10px] font-cairo text-[13px] text-[#181d17] outline-none focus:border-[#34422a]"
              >
                <option value="tech-1">م. طارق العسيري (فني أنظمة وأقفال ذكية)</option>
                <option value="tech-2">أحمد عبدالحليم (فني سباكة عامة وتمديدات)</option>
                <option value="tech-3">سعد الشهري (فني تكييف وتبريد مركزي)</option>
              </select>
            </div>
          </div>

          {/* SECTION D: Attachments & Media Documentation */}
          <div
            className="bg-white rounded-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#e5e8e2] p-[24px] flex flex-col gap-[16px] w-full"
            data-node-id="1:12180"
            data-name="SECTION D: Attachments & Media Documentation"
          >
            <div className="flex items-center gap-[8px] border-b border-[#e5e8e2] pb-[14px]">
              <div className="size-[28px] rounded-[8px] bg-[#eaf1e8] flex items-center justify-center text-[#34422a] font-bold text-[13px]">
                4
              </div>
              <h2 className="font-cairo font-bold text-[#181d17] text-[16px] leading-[24px]">
                إرفاق صور الشواهد الميدانية
              </h2>
            </div>

            {/* Upload Zone */}
            <div className="border-2 border-dashed border-[#dfe4db] hover:border-[#34422a] bg-[#f9faf8] rounded-[12px] p-[28px] flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors text-center">
              <div className="size-[42px] rounded-full bg-[#eaf1e8] flex items-center justify-center text-[#34422a] mb-1">
                <span className="text-[20px]">📷</span>
              </div>
              <span className="font-cairo font-bold text-[#181d17] text-[13px]">
                اضغط لاختيار الصور أو اسحبها هنا
              </span>
              <span className="font-cairo text-[#75786f] text-[11px]">
                PNG, JPG حتى 15 ميجابايت (الحد الأقصى 5 صور شواهد)
              </span>
            </div>

            {/* Attached Thumbnails Preview */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-[12px] pt-2">
              <div className="relative rounded-[8px] overflow-hidden border border-[#e5e8e2] aspect-video bg-[#f1f5eb]">
                <Image
                  src="/assets/maintenance/new/9054f.png"
                  alt="شاهد 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-[8px] overflow-hidden border border-[#e5e8e2] aspect-video bg-[#f1f5eb]">
                <Image
                  src="/assets/maintenance/new/ffaf9.png"
                  alt="شاهد 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Left Context Sidebar (4 of 12 cols in RTL) */}
        <div className="lg:col-span-4 flex flex-col gap-[20px] w-full">
          {/* Unit Visual Context Card */}
          <div
            className="bg-white rounded-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#e5e8e2] overflow-hidden w-full"
            data-node-id="1:12220"
            data-name="Unit Visual Context Card"
          >
            {/* Unit Photo */}
            <div className="relative h-[160px] w-full bg-[#f6f7f4]">
              <Image
                src="/assets/maintenance/new/55f1a.png"
                alt="الوحدة 305"
                fill
                className="object-cover"
              />
              <div className="absolute top-[12px] right-[12px] bg-[rgba(0,0,0,0.6)] backdrop-blur-xs text-white px-[10px] py-[3px] rounded-full text-[11px] font-cairo font-bold">
                الوحدة 305
              </div>
            </div>

            <div className="p-[20px] flex flex-col gap-[14px]">
              <div>
                <h3 className="font-cairo font-bold text-[#181d17] text-[15px]">
                  برج الياسمين الفاخر
                </h3>
                <p className="font-cairo text-[#75786f] text-[12px]">
                  حي الملقا، الرياض • الطابق 3 (جناح 305)
                </p>
              </div>

              <div className="flex flex-col gap-1 text-[12px] font-cairo border-t border-[#f0f2ed] pt-[12px]">
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#75786f]">كود القفل الذكي:</span>
                  <span className="font-bold text-[#181d17]">TTLock - 583921</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#75786f]">النزيل القادم:</span>
                  <span className="font-bold text-[#1976d2]">سعود العتيبي (غداً)</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION E: System Impact & Automated Workflow Notice */}
          <div
            className="bg-white rounded-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] border border-[#e5e8e2] p-[20px] flex flex-col gap-[12px] w-full"
            data-node-id="1:12250"
            data-name="SECTION E: System Impact & Automated Workflow Notice"
          >
            <div className="flex items-center gap-[8px] text-[#b86b14]">
              <span className="text-[18px]">⚡</span>
              <h4 className="font-cairo font-bold text-[14px]">
                أثر الحوكمة الفوري بعد الحفظ:
              </h4>
            </div>
            <p className="font-cairo text-[12px] text-[#454840] leading-[20px]">
              عند اعتماد هذا البلاغ، ستقوم المنظومة تلقائياً بما يلي:
            </p>
            <ul className="flex flex-col gap-[8px] font-cairo text-[11px] text-[#75786f] list-disc list-inside">
              <li>تحويل حالة الوحدة فورياً إلى «تحت الصيانة».</li>
              <li>حظر أي حجوزات جديدة على قنوات OTA (Booking, Airbnb).</li>
              <li>إرسال تنبيه عاجل للفني المختص مع تفاصيل الكود والموقع.</li>
              <li>إدراج البلاغ في مقاييس مؤشر الاستجابة التشغيلي.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM STICKY ACTION CONFIRMATION BAR */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#e5e8e2] px-6 lg:px-[32px] py-4 shadow-[0px_-4px_16px_rgba(0,0,0,0.06)]"
        data-node-id="1:12290"
        data-name="Action Confirmation Bar (Sticky on Desktop)"
        dir="rtl"
      >
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-cairo text-[12px] text-[#75786f] text-center sm:text-right">
            تأكد من صحة بيانات الوحدة؛ سيتم إيقاف تسكين الوحدة فور الضغط على تأكيد وإنشاء البلاغ.
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <Link
              href="/maintenance"
              className="px-6 py-2.5 rounded-[12px] border border-[#e5e8e2] font-cairo font-semibold text-[13px] text-[#454840] hover:bg-[#f6f7f4] transition-colors"
            >
              إلغاء التراجع
            </Link>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#34422a] hover:bg-[#283420] active:scale-[0.98] transition-all drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] text-white font-cairo font-bold text-[14px] px-8 py-2.5 rounded-[12px] cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 shadow-sm"
            >
              <span>{isSubmitting ? "جاري الحفظ..." : "تأكيد وإنشاء بلاغ الصيانة"}</span>
              <span className="text-[16px] leading-none">←</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
