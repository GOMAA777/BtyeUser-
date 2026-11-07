/** Shared base path for static export under public_html/home when URL is /home. */
export const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(
  /\/$/,
  ""
);
