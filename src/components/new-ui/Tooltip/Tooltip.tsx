import classNames from "classnames";
import { ITooltip } from "./Tooltip.interface";

export const Tooltip = ({ children, label, className, ...props }: ITooltip) => {
  return (
    <div className={classNames("group relative", className)} {...props}>
      <span className="absolute -top-[25px] left-2/4 z-10 -translate-x-2/4 rounded-[44px] bg-[#0F172A] px-[13px] py-[3px] text-[12px] leading-[16px] text-white opacity-0 transition-all duration-300 ease-in-out group-hover:inline-block group-hover:opacity-100 dark:bg-[#0EA5E9] dark:text-white">
        {label}
      </span>
      {children}
    </div>
  );
};
