import classNames from "classnames";
import { forwardRef } from "react";
import { IInput } from "./Input.interface";

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={classNames(
          "inline-block w-full rounded-[4px] border border-[#CBD5E1] bg-white py-[8px] px-[12px] text-[14px] font-normal leading-[19px] text-[#64748B] dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#94A3B8]",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
