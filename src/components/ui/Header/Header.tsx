import { LogoIcon } from "@/assets/imgs/icons";
import classNames from "classnames";
import { Link } from "react-router-dom";
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
      <Link
        to="/"
        className="mr-[100px] flex items-center gap-x-[9px] py-[3px]"
      >
        <LogoIcon className="h-auto w-[22px]" />
        <p className="text-xl font-extrabold leading-[19px] text-[#475569]">
          Bundesliga
        </p>
      </Link>
      <User />
    </header>
  );
};
