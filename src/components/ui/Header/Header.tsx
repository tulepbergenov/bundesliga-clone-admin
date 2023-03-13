import classNames from "classnames";
import { Logo } from "../Logo";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { User } from "../User";
import { IHeader } from "./Header.interface";

export const Header = ({ className, ...props }: IHeader) => {
  return (
    <header
      className={classNames(
        "relative flex items-center justify-between py-[13px] before:absolute before:top-0 before:left-2/4 before:-z-[1] before:h-full before:w-screen before:-translate-x-2/4 before:bg-white before:shadow before:content-[''] dark:bg-[#1E293B] dark:text-[#94A3B8] dark:before:bg-[#1E293B]",
        className
      )}
      {...props}
    >
      <Logo />
      <div className="flex items-center gap-x-[10px]">
        <ThemeSwitcher />
        <User />
      </div>
    </header>
  );
};
