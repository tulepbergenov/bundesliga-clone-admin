import classNames from "classnames";
import { ILable } from "./Label.interface";

export const Label = ({ children, className, required, ...props }: ILable) => {
  return (
    <label
      className={classNames(
        "mt-[8px] text-[14px] font-normal leading-[19px] text-[#64748B]",
        {
          "after:ml-[3px] after:text-[#EF4444] after:content-['*']": required,
        },
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};
