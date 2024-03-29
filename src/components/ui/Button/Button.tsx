import classNames from "classnames";
import { forwardRef } from "react";
import { Spinner } from "../Spinner";
import { IButton } from "./Button.interface";

export const Button = forwardRef<HTMLButtonElement, IButton>(
  ({ children, isLoading, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(
          "inline-block rounded-[4px] bg-[#0EA5E9] py-[8px] px-[16px] text-[14px] font-extrabold capitalize leading-[19px] text-white shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] dark:text-[#0F172A]",
          className
        )}
        {...props}
      >
        {isLoading ? <Spinner className="h-auto w-[20px]" /> : children}
      </button>
    );
  }
);

Button.displayName = "Button";
