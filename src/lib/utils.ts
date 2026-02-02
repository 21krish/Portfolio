import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Base URL for GitHub Pages (e.g. /Portfolio/). Use for all public asset paths. */
export const baseUrl = import.meta.env.BASE_URL;

/** Resolve a path (e.g. /projects/foo.jpg) to the full URL on this deployment. */
export function assetUrl(path: string): string {
  if (!path) return path;
  const base = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return base + normalized;
}
