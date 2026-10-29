"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { showToast } from "@/lib/toast";
import type { Map as LeafletMap } from "leaflet";

interface AddPropertyLocationMapProps {
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  onCoordinatesChange?: (coords: { lat: number; lng: number }) => void;
  onLocateCurrent?: () => void;
}

const CITY_COORDINATES: Record<string, [number, number]> = {
  "الرياض": [24.8197, 46.6342],
  "جدة": [21.5433, 39.1728],
  "الدمام": [26.4207, 50.0888],
  "مكة المكرمة": [21.4225, 39.8262],
  "المدينة المنورة": [24.4672, 39.6111],
  "الخبر": [26.2828, 50.2084],
};

export function AddPropertyLocationMap({
  addressLine1 = "طريق أنس بن مالك، حي الياسمين",
  addressLine2 = "الرياض 13326، المملكة العربية السعودية",
  city = "الرياض",
  onCoordinatesChange,
  onLocateCurrent,
}: AddPropertyLocationMapProps) {
  const [isLocating, setIsLocating] = useState(false);
  const [currentCoords, setCurrentCoords] = useState<{ lat: number; lng: number }>({
    lat: 24.8197,
    lng: 46.6342,
  });
  const [isMapReady, setIsMapReady] = useState(false);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<LeafletMap | null>(null);

  // 1. Initialize Live Leaflet Map dynamically on client side
  useEffect(() => {
    let isMounted = true;

    async function initLeafletMap() {
      if (!mapContainerRef.current || mapInstanceRef.current) return;

      try {
        const L = (await import("leaflet")).default;
        if (!isMounted || !mapContainerRef.current) return;

        const defaultCoords: [number, number] = CITY_COORDINATES[city] || [24.8197, 46.6342];

        // Create Leaflet map without default controls to use Figma custom controls
        const map = L.map(mapContainerRef.current, {
          center: defaultCoords,
          zoom: 15,
          zoomControl: false,
          attributionControl: false,
        });

        // Add CartoDB Voyager tiles (crisp Arabic labels & subtle design matching palette)
        L.tileLayer(
          "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
          {
            maxZoom: 19,
            subdomains: "abcd",
          }
        ).addTo(map);

        // Listen for user pan/move to update center coordinates in real time
        map.on("moveend", () => {
          const center = map.getCenter();
          const coords = { lat: center.lat, lng: center.lng };
          setCurrentCoords(coords);
          onCoordinatesChange?.(coords);
        });

        // Clicking anywhere on map centers it smoothly
        map.on("click", (e) => {
          map.flyTo(e.latlng, map.getZoom(), { duration: 0.8 });
        });

        mapInstanceRef.current = map;
        setIsMapReady(true);
      } catch (err) {
        console.error("Failed to initialize live map:", err);
      }
    }

    initLeafletMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []); // Run once on mount

  // 2. React to City change from form dropdown
  useEffect(() => {
    if (mapInstanceRef.current && city && CITY_COORDINATES[city]) {
      const coords = CITY_COORDINATES[city];
      mapInstanceRef.current.flyTo(coords, 14, { duration: 1.2 });
    }
  }, [city]);

  // 3. Zoom handlers wired directly to live map instance
  const handleZoomIn = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomOut();
    }
  };

  // 4. GPS Live Geolocation
  const handleLocate = () => {
    setIsLocating(true);
    if (onLocateCurrent) {
      onLocateCurrent();
      setIsLocating(false);
      return;
    }

    if (typeof window !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setIsLocating(false);
          const { latitude, longitude } = pos.coords;
          const coords = { lat: latitude, lng: longitude };
          setCurrentCoords(coords);
          onCoordinatesChange?.(coords);

          if (mapInstanceRef.current) {
            mapInstanceRef.current.flyTo([latitude, longitude], 16, { duration: 1.4 });
          }

          showToast.success(`تم تحديد موقعك بدقة (${latitude.toFixed(4)}°, ${longitude.toFixed(4)}°)`);
        },
        () => {
          setIsLocating(false);
          // Fallback smoothly to default Al-Yasmin coordinates
          const defaultCoords: [number, number] = CITY_COORDINATES[city] || [24.8197, 46.6342];
          if (mapInstanceRef.current) {
            mapInstanceRef.current.flyTo(defaultCoords, 16, { duration: 1.2 });
          }
          showToast.info(
            "تم تعيين الموقع الحي",
            `الإحداثيات الحالية: ${defaultCoords[0]}° N, ${defaultCoords[1]}° E (${city})`
          );
        },
        { timeout: 8000, enableHighAccuracy: true }
      );
    } else {
      setIsLocating(false);
      const defaultCoords: [number, number] = CITY_COORDINATES[city] || [24.8197, 46.6342];
      if (mapInstanceRef.current) {
        mapInstanceRef.current.flyTo(defaultCoords, 16, { duration: 1.2 });
      }
      showToast.info("الموقع الحالي", `تم التمركز على مدينة ${city}`);
    }
  };

  return (
    <div
      className="flex flex-col gap-[8px] items-start w-full"
      data-node-id="1:2193"
      data-name="Row 3: Full Width Interactive Location Section"
    >
      {/* Header: Title, Description & GPS CTA */}
      <div
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-[12px] w-full"
        data-node-id="1:2194"
      >
        {/* Right side: Titles */}
        <div className="flex flex-col items-start gap-[2px]" data-node-id="1:2202">
          <div className="flex items-center gap-[8px]">
            <h3
              className="font-cairo font-semibold text-[14px] leading-[20px] text-[#181d17]"
              data-node-id="1:2204"
            >
              الموقع الجغرافي والإحداثيات
            </h3>
            {isMapReady && (
              <span className="inline-flex items-center gap-[4px] px-[8px] py-[2px] rounded-full bg-[#d8e8cb] text-[#121f0d] text-[10px] font-bold">
                <span className="size-[6px] rounded-full bg-[#34422a] animate-pulse" />
                خريطة حية تفاعلية
              </span>
            )}
          </div>
          <p
            className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840]"
            data-node-id="1:2206"
          >
            تحديد موقع العقار يساعد في توجيه الضيوف وأطقم التشغيل وربط الأقفال الذكية بالبوابات الرئيسية (يمكنك تحريك الخريطة مباشرة لاختيار الموقع)
          </p>
        </div>

        {/* Left side: Locate Button */}
        <button
          type="button"
          onClick={handleLocate}
          disabled={isLocating}
          className="bg-[#d8e8cb] hover:bg-[#c9ddba] active:scale-[0.98] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] rounded-[12px] px-[16px] py-[6px] flex items-center gap-[6px] text-[#121f0d] font-cairo font-bold text-[12px] leading-[18px] transition-all cursor-pointer self-start sm:self-center shrink-0 disabled:opacity-70"
          data-node-id="1:2197"
          data-name="Button"
        >
          <span data-node-id="1:2199">
            {isLocating ? "جاري تحديد الموقع..." : "تحديد الموقع الحالي"}
          </span>
          <div className="relative size-[13.5px]" data-node-id="1:2200">
            <Image
              src="/assets/properties/add/gps-target.svg"
              alt="تحديد الموقع"
              width={14}
              height={14}
              className="size-full object-contain"
            />
          </div>
        </button>
      </div>

      {/* Styled Map Container */}
      <div
        className="bg-[#eaf1e8] h-[340px] lg:h-[380px] rounded-[16px] overflow-hidden relative shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-full border border-[#dfe4db]/60 select-none"
        data-node-id="1:2207"
        data-name="Styled Map Container"
      >
        {/* Live Leaflet Map Mounting Container */}
        <div
          ref={mapContainerRef}
          className="absolute inset-0 size-full z-0 cursor-grab active:cursor-grabbing"
          style={{ background: "#eaf1e8" }}
        />

        {/* Floating Location Control Overlay (Top Right) */}
        <div
          className="absolute top-[16px] right-[16px] bg-[rgba(255,255,255,0.95)] backdrop-blur-[6px] rounded-[12px] px-[16px] py-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] flex items-center gap-[10px] max-w-[384px] z-[1000] border border-white/80"
          data-node-id="1:2209"
          data-name="Location Floating Control Overlay"
        >
          {/* Location Pin Icon Box */}
          <div
            className="bg-[#34422a] rounded-[8px] size-[36px] flex items-center justify-center shrink-0 shadow-2xs"
            data-node-id="1:2216"
          >
            <div className="relative size-[16px]" data-node-id="1:2217">
              <Image
                src="/assets/properties/add/map-pin-card.svg"
                alt="دبوس"
                width={12}
                height={17}
                className="size-full object-contain"
              />
            </div>
          </div>

          {/* Address & Live Coordinates Text */}
          <div className="flex flex-col items-start gap-px text-right" data-node-id="1:2211">
            <span
              className="font-cairo font-bold text-[12px] leading-[18px] text-[#181d17] whitespace-nowrap"
              data-node-id="1:2213"
            >
              {addressLine1}
            </span>
            <span
              className="font-cairo font-medium text-[11px] leading-[16px] text-[#454840] whitespace-nowrap flex items-center gap-[6px]"
              data-node-id="1:2215"
            >
              <span>{addressLine2}</span>
              <span className="text-[#34422a] font-mono text-[10px]">
                ({currentCoords.lat.toFixed(4)}, {currentCoords.lng.toFixed(4)})
              </span>
            </span>
          </div>
        </div>

        {/* Center Interactive Map Pin Marker (Figma Node 1:2219) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none z-[1000]"
          data-node-id="1:2219"
          data-name="Center Interactive Map Pin Marker"
        >
          {/* Pin Circle with White Ring & Glow Shadow */}
          <div
            className="bg-[#34422a] size-[40px] rounded-full flex items-center justify-center shadow-[0px_0px_0px_4px_white,0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] transition-transform duration-200"
            data-node-id="1:2220"
          >
            <div className="relative size-[18px]" data-node-id="1:2222">
              <Image
                src="/assets/properties/add/map-pin-center.svg"
                alt="موقع العقار"
                width={18}
                height={18}
                className="size-full object-contain"
              />
            </div>
          </div>

          {/* Ground Blur Shadow */}
          <div
            className="w-[12px] h-[6px] rounded-full bg-[rgba(24,29,23,0.3)] blur-[1px] mt-[4px]"
            data-node-id="1:2225"
          />
        </div>

        {/* Map Navigation Controls Floating Corner (Bottom Left - Figma Node 1:2226) */}
        <div
          className="absolute bottom-[16px] left-[16px] bg-white rounded-[12px] p-[4px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] flex flex-col gap-[4px] z-[1000] border border-[#dfe4db]/50"
          data-node-id="1:2226"
          data-name="Map Navigation Controls Floating Corner"
        >
          {/* Zoom In Button */}
          <button
            type="button"
            onClick={handleZoomIn}
            title="تكبير الخريطة"
            className="size-[32px] rounded-[8px] flex items-center justify-center hover:bg-[#f1f5eb] active:bg-[#e4ebd9] transition-colors cursor-pointer"
            data-node-id="1:2228"
          >
            <div className="relative size-[12px]" data-node-id="1:2229">
              <Image
                src="/assets/properties/add/zoom-plus.svg"
                alt="تكبير"
                width={12}
                height={12}
                className="size-full object-contain"
              />
            </div>
          </button>

          {/* Divider */}
          <div className="bg-[#e5eae0] h-px w-full" data-node-id="1:2231" />

          {/* Zoom Out Button */}
          <button
            type="button"
            onClick={handleZoomOut}
            title="تصغير الخريطة"
            className="size-[32px] rounded-[8px] flex items-center justify-center hover:bg-[#f1f5eb] active:bg-[#e4ebd9] transition-colors cursor-pointer"
            data-node-id="1:2232"
          >
            <div className="relative size-[12px]" data-node-id="1:2233">
              <Image
                src="/assets/properties/add/zoom-minus.svg"
                alt="تصغير"
                width={12}
                height={2}
                className="size-full object-contain"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
