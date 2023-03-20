import classNames from "classnames";
import { ILabel } from "./Label.interface";

export const Label = ({ children, required, className, ...props }: ILabel) => {
  return (
    <label
      className={classNames(
        "inline-block text-[14px] font-normal leading-[19px] text-[#64748B] dark:text-[#94A3B8]",
        {
          ["after:ml-[3px] after:text-[#EF4444] after:content-['*']"]: required,
        },
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};
