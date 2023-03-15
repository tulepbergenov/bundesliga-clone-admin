import { SearchIcon } from "@/assets/imgs/icons";
import classNames from "classnames";
import { forwardRef } from "react";
import { ISearchInput } from "./SearchInput.interface";

export const SearchInput = forwardRef<HTMLInputElement, ISearchInput>(
  ({ className, ...props }, ref) => {
    return (
      <div className={classNames("relative", className)}>
        <SearchIcon className="pointer-events-none absolute left-[12px] top-2/4 h-auto w-[20px] -translate-y-2/4 text-[#94A3B8]" />
        <input
          type="text"
          ref={ref}
          className="inline-block w-[320px] rounded-full bg-white py-[8px] pl-[44px] pr-[12px] text-[14px] font-normal leading-[19px] text-[#94A3B8] shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] dark:bg-[#1E293B]"
          {...props}
        />
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
