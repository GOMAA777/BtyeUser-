"use client";

/**
 * Applies NEXT_PUBLIC_BASE_PATH for static export (e.g. /home).
 * Required when images.loader = "custom" in next.config.
 */
export default function imageLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:")
  ) {
    return src;
  }

  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  const path = !basePath
    ? src.startsWith("/")
      ? src
      : `/${src}`
    : src.startsWith("/")
      ? `${basePath}${src}`
      : `${basePath}/${src}`;

  // Include width so next/image accepts the custom loader contract.
  return `${path}?w=${width}`;
}
