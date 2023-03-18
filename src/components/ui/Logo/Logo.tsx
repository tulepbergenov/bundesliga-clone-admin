import { LogoIcon } from "@/assets/imgs/icons";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { ILogo } from "./Logo.interface";

export const Logo = ({ className, size = "sm" }: ILogo) => {
  return (
    <Link
      to="/home"
      className={classNames(
        "grid  items-center gap-x-[9px]",
        {
          ["grid-cols-[24px_1fr]"]: size === "sm",
          ["grid-cols-[28px_1fr]"]: size === "bg",
        },
        className
      )}
    >
      <LogoIcon className="h-auto w-full" />
      <p
        className={classNames("font-extrabold text-[#475569] dark:text-white", {
          ["text-[16px] leading-[21px]"]: size === "sm",
          ["text-[24px] leading-[32px]"]: size === "bg",
        })}
      >
        Bundesliga
      </p>
    </Link>
  );
};
