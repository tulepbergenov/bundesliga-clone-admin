import { useThemeStore } from "@/store";
import { useMemo } from "react";

export const useTheme = () => {
  const toggleTheme = useThemeStore((state: any) => state.toggleTheme);
  const theme = useThemeStore((state: any) => state.theme);

  const value = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  return value;
};
