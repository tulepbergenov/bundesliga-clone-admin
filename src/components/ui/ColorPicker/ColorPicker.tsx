import classNames from "classnames";
import { forwardRef } from "react";
import { IColorPicker } from "./ColorPicker.interface";

export const ColorPicker = forwardRef<HTMLInputElement, IColorPicker>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="color"
        ref={ref}
        className={classNames(
          "min-h-[36px] cursor-pointer rounded-[4px] border border-[#CBD5E1] bg-white px-[8px] py-[5px] dark:border-[#334155] dark:bg-[#0F172A]",
          className
        )}
        {...props}
      />
    );
  }
);

ColorPicker.displayName = "ColorPicker";
