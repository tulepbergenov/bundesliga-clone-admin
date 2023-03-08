import classNames from "classnames";
import { Logo } from "../Logo";
import { User } from "../User";
import { IHeader } from "./Header.interface";

export const Header = ({ className, ...props }: IHeader) => {
  return (
    <header
      className={classNames(
        "relative flex items-center justify-between py-[13px] before:absolute before:top-0 before:left-2/4 before:-z-[1] before:h-full before:w-screen before:-translate-x-2/4 before:bg-white before:shadow before:content-['']",
        className
      )}
      {...props}
    >
      <Logo />
      <User />
    </header>
  );
};
