import { SearchIcon } from "@/assets/imgs/icons";
import classNames from "classnames";
import { IInput } from "../Input/Input.interface";

export const Search = ({ className, ...props }: IInput) => {
  return (
    <div
      className={classNames(
        "relative text-[#64748B] dark:text-[#94A3B8]",
        className
      )}
    >
      <SearchIcon className="pointer-events-none absolute top-2/4 left-[12px] h-auto w-[20px] -translate-y-2/4 text-[#94A3B8]" />
      <input
        type="text"
        placeholder="Search"
        className="inline-block w-[320px] rounded-full bg-white py-[8px] pr-[12px] pl-[44px] text-[14px] leading-[19px] shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] placeholder:text-[#94A3B8] dark:bg-[#1E293B]"
        {...props}
      />
    </div>
  );
};
