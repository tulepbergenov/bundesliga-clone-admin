import { LogoIcon } from "@/assets/imgs/icons";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { ILogo } from "./Logo.interface";

export const Logo = ({ className, size = "sm", ...props }: ILogo) => {
  if (size == "bg") {
    return (
      <Link
        to="/"
        className={classNames(
          "flex items-center gap-x-[9px] py-[3px]",
          className
        )}
        {...props}
      >
        <LogoIcon className="h-auto w-[40px]" />
        <p className="text-3xl font-extrabold leading-[19px] text-[#475569] dark:text-white">
          Bundesliga
        </p>
      </Link>
    );
  }

  return (
    <Link
      to="/"
      className={classNames(
        "flex items-center gap-x-[9px] py-[3px]",
        className
      )}
      {...props}
    >
      <LogoIcon className="h-auto w-[22px]" />
      <p className="text-xl font-extrabold leading-[19px] text-[#475569] dark:text-white">
        Bundesliga
      </p>
    </Link>
  );
};
