import { DarkIcon, LightIcon } from "@/assets/imgs/icons";
import { THEME_TYPES } from "@/constants";
import { useTheme } from "@/hooks";
import classNames from "classnames";
import { IThemeSwitcher } from "./ThemeSwitcher.interface";

export const ThemeSwitcher = ({ className }: IThemeSwitcher) => {
  const { theme, toggleTheme } = useTheme();
  const { THEME_LIGHT } = THEME_TYPES;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={classNames(
        "inline-block text-[#64748B] hover:text-[#0EA5E9] dark:text-[#94A3B8] dark:hover:text-[#0EA5E9]",
        className
      )}
    >
      {theme === THEME_LIGHT ? (
        <LightIcon className="h-auto w-[24px] transition-colors duration-300 ease-in-out" />
      ) : (
        <DarkIcon className="h-auto w-[24px] transition-colors duration-300 ease-in-out" />
      )}
    </button>
  );
};
