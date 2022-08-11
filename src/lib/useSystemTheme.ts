import { browser } from "$app/env";
import type { Readable } from "svelte/store";
import { readable } from "svelte/store";

const useSystemTheme = (): Readable<string> =>
  readable("auto", (set) => {
    if (!browser) {
      return;
    }

    const prefersDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const prefersLightQuery = window.matchMedia(
      "(prefers-color-scheme: light)"
    );

    const onPrefersDarkChange = (e: MediaQueryListEvent): void => {
      if (e.matches) {
        set("dark");
      }
    };

    const onPrefersLightChange = (e: MediaQueryListEvent): void => {
      if (e.matches) {
        set("light");
      }
    };

    prefersDarkQuery.addEventListener("change", onPrefersDarkChange);
    prefersLightQuery.addEventListener("change", onPrefersLightChange);

    return () => {
      prefersDarkQuery.removeEventListener("change", onPrefersDarkChange);
      prefersLightQuery.removeEventListener("change", onPrefersLightChange);
    };
  });

export const systemTheme = useSystemTheme();

export default useSystemTheme;
