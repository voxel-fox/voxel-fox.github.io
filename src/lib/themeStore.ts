import { browser } from "$app/env";
import type { Writable } from "svelte/store";
import { writable, get } from "svelte/store";

const getStorgeValue = <T>(key: string): T | null => {
  const savedValue = localStorage.getItem(key);
  return savedValue !== null ? <T>JSON.parse(savedValue) : null;
};

const themeStore = (intialValue: string): Writable<string> => {
  const key = "theme";
  const store = writable(intialValue);

  if (!browser) {
    return store;
  }

  const value = <string>getStorgeValue(key);
  if (value !== null) {
    store.set(value);
  }

  store.subscribe((val) => {
    console.log(`themeStore.subscribe: ${val}`);
    if (val === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(val));
    }
  });

  window.addEventListener("storage", () => {
    console.log(`themeStore.storage: ${get(store)}`);
    const value = <string>getStorgeValue(key);
    if (value !== get(store)) {
      store.set(value);
    }
  });

  return store;
};

export const theme = themeStore("system");
