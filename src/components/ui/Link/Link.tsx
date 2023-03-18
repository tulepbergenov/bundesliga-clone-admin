import classNames from "classnames";
import { Link as RouterLink } from "react-router-dom";
import { ILink } from "./Link.interface";

export const Link = ({
  to,
  children,
  apperience = "link",
  className,
  ...props
}: ILink) => {
  if (apperience === "button") {
    return (
      <RouterLink
        to={to}
        className={classNames(
          "inline-block rounded-[4px] bg-[#0EA5E9] py-[8px] px-[16px] text-[14px] font-extrabold capitalize leading-[19px] text-white shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] dark:text-[#0F172A]",
          className
        )}
        {...props}
      >
        {children}
      </RouterLink>
    );
  }

  if (apperience === "link") {
    return (
      <RouterLink to={to} className={classNames(className)} {...props}>
        {children}
      </RouterLink>
    );
  }

  return null;
};
