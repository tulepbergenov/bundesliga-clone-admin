import classNames from "classnames";
import { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ILink } from "./Link.interface";

export const Link = forwardRef<HTMLAnchorElement, ILink>(
  ({ children, apperience = "link", className, ...props }, ref) => {
    if (apperience === "button") {
      return (
        <RouterLink
          ref={ref}
          className={classNames(
            "inline-block w-fit rounded-[4px] bg-[#0EA5E9] py-[8px] px-[16px] text-[14px] font-extrabold capitalize leading-[19px] text-white shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] dark:text-[#0F172A]",
            className
          )}
          {...props}
        >
          {children}
        </RouterLink>
      );
    }

    if (apperience === "backLink") {
      return (
        <RouterLink
          ref={ref}
          className={classNames(
            "text-[14px] font-extrabold capitalize leading-[19px] text-[#94A3B8]",
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
        <RouterLink ref={ref} className={className} {...props}>
          {children}
        </RouterLink>
      );
    }

    return null;
  }
);

Link.displayName = "Link";
