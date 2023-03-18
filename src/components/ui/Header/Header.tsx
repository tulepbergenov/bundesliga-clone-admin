import classNames from "classnames";
import { Logo } from "../Logo";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { User } from "../User";
import { IHeader } from "./Header.interface";

export const Header = ({ className, ...props }: IHeader) => {
  return (
    <header
      className={classNames(
        "mb-[25px] bg-white py-[16px] shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] dark:bg-[#1E293B]",
        className
      )}
      {...props}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-x-[20px]">
            <ThemeSwitcher />
            <User />
          </div>
        </div>
      </div>
    </header>
  );
};
