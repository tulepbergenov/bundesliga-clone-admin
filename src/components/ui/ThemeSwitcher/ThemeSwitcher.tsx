import { DarkIcon, LightIcon } from "@/assets/imgs/icons";
import { THEME_TYPES } from "@/constants";
import { useTheme } from "@/hooks";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const { THEME_LIGHT } = THEME_TYPES;

  return (
    <button type="button" onClick={toggleTheme} className="inline-block">
      {theme === THEME_LIGHT ? (
        <LightIcon className="h-auto w-[24px]" />
      ) : (
        <DarkIcon className="h-auto w-[24px]" />
      )}
    </button>
  );
};
