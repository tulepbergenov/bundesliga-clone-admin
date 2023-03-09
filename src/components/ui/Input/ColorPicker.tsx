import classNames from "classnames";
import { forwardRef } from "react";
import { IColorPicker } from "./ColorPicker.interface";

export const ColorPicker = forwardRef<HTMLInputElement, IColorPicker>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="color"
        className={classNames(
          "inline-block h-[37px] rounded-[4px] border border-[#CBD5E1] bg-white px-[10px] py-[8px]",
          className
        )}
        {...props}
      />
    );
  }
);

ColorPicker.displayName === "ColorPicker";
