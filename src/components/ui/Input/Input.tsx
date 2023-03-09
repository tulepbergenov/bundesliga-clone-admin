import classNames from "classnames";
import { forwardRef } from "react";
import { IInput } from "./Input.interface";

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={classNames(
          "inline-block w-full rounded-[4px] border border-[#CBD5E1] bg-white px-[12px] py-[8px] text-[14px] font-normal leading-[19px] text-[#64748B]",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName === "Input";
