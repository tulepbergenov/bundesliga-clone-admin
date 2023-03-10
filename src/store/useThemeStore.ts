import { THEME_TYPES } from "@/constants";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const { THEME_LIGHT, THEME_DARK } = THEME_TYPES;

export const applyThemePreference = (theme: any) => {
  const { THEME_DARK, THEME_LIGHT } = THEME_TYPES;

  const root = window.document.documentElement;

  const isDark = theme === THEME_DARK;

  root.classList.remove(isDark ? THEME_LIGHT : THEME_DARK);
  root.classList.add(theme);
};

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: THEME_LIGHT,
      toggleTheme: () =>
        set((state: any) => ({
          theme: state.theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT,
        })),
    }),
    {
      name: "THEME",
    }
  )
);
