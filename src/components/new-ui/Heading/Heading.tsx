import classNames from "classnames";
import { createElement } from "react";
import { IHeading } from "./Heading.interface";

export const Heading = ({
  as = "h1",
  children,
  subHeading,
  className,
  ...props
}: IHeading) => {
  if (subHeading) {
    return createElement(
      "div",
      {
        className: classNames(className),
      },
      createElement(
        "p",
        {
          className:
            "text-[24px] font-normal leading-[32px] text-[#64748B] dark:text-[#94A3B8]",
        },
        children
      ),
      createElement(
        as,
        {
          className: "font-extrabold text-[#0EA5E9]",
        },
        subHeading
      )
    );
  }

  return createElement(
    as,
    {
      className: classNames(
        "text-[24px] font-normal leading-[32px] text-[#64748B] dark:text-[#94A3B8]",
        className
      ),
      ...props,
    },
    children
  );
};
