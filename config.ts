/// <reference types="vite/client" />

export const SERVER_ADDRESS =
  import.meta.env.VITE_SERVER_ADDRESS ?? "camelot.vagonbrei.eu:25053";

export const HERO_IMAGE_URL =
  import.meta.env.VITE_HERO_IMAGE_URL ??
  "/mc.jpg"; // local wallpaper in public/

export const HERO_VIDEO_URL = (import.meta.env.VITE_HERO_VIDEO_URL ?? "").trim();

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const PTERO_URL = (import.meta.env.VITE_PTERO_URL ?? "").trim();
export const PTERO_API_KEY = (import.meta.env.VITE_PTERO_API_KEY ?? "").trim();
export const PTERO_SERVER_ID = (import.meta.env.VITE_PTERO_SERVER_ID ?? "").trim();

export const HAS_PTERO_CONFIG =
  Boolean(PTERO_URL) && Boolean(PTERO_API_KEY) && Boolean(PTERO_SERVER_ID);

