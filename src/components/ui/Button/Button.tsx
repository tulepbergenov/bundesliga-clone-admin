import classNames from "classnames";
import { forwardRef } from "react";
import { IButton } from "./Button.interface";

export const Button = forwardRef<HTMLButtonElement, IButton>(
  ({ children, className, bg = "blue", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(
          "inline-block w-fit whitespace-nowrap rounded-[4px] py-[8px] px-[16px] text-[14px] font-extrabold capitalize leading-[19px]",
          {
            ["text-[#64748B]"]: bg === "ghost",
            ["bg-[#0EA5E9] text-white shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"]:
              bg === "blue",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
