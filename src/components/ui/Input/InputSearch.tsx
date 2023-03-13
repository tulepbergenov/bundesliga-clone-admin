import { SearchIcon } from "@/assets/imgs/icons";
import classNames from "classnames";
import { forwardRef } from "react";
import { IInputSearch } from "./InputSearch.interface";

export const InputSearch = forwardRef<HTMLInputElement, IInputSearch>(
  ({ className, bg, ...props }, ref) => {
    return (
      <div
        className={classNames(
          "relative w-full",
          {
            ["dark:text-[#94A3B8]"]: bg === "white",
          },
          className
        )}
      >
        <SearchIcon className="absolute top-2/4 left-[20px] h-auto w-[20px] -translate-y-2/4" />
        <input
          ref={ref}
          type="text"
          className={classNames(
            "inline-block rounded-[44px] py-[9px] pr-[20px] pl-[60px] text-[14px] font-normal leading-[19px] placeholder:text-inherit",
            {
              ["bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] dark:bg-[#1e293b]"]:
                bg === "white",
              ["bg-[#F1F5F9]"]: bg === "gray",
            }
          )}
          {...props}
        />
      </div>
    );
  }
);

InputSearch.displayName = "InputSearch";
