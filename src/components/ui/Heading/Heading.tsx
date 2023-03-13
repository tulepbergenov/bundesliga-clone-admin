import classNames from "classnames";
import { createElement } from "react";
import { IHeading } from "./Heading.interface";

export const Heading = ({
  children,
  as = "h1",
  className,
  ...props
}: IHeading) => {
  return createElement(
    as,
    {
      className: classNames(
        "text-[24px] leading-[32px] text-[#64748B] dark:text-[#94A3B8]",
        className
      ),
      ...props,
    },
    children
  );
};
