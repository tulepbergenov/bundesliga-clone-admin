import classNames from "classnames";
import { forwardRef } from "react";
import { Link as RLink } from "react-router-dom";
import { ILink } from "./Link.interface";

export const Link = forwardRef<HTMLAnchorElement, ILink>(
  ({ children, className, to, apperience, ...props }, ref) => {
    if (apperience === "button") {
      return (
        <RLink
          ref={ref}
          to={to}
          className={classNames(
            "inline-block w-fit whitespace-nowrap rounded-[4px] bg-[#0EA5E9] py-[8px] px-[16px] text-[14px] font-extrabold capitalize leading-[19px] text-white shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] dark:text-[#0F172A]",
            className
          )}
          {...props}
        >
          {children}
        </RLink>
      );
    }

    return (
      <RLink ref={ref} to={to} className={classNames(className)} {...props}>
        {children}
      </RLink>
    );
  }
);

Link.displayName = "Link";
