import classNames from "classnames";
import { IPaginationButton } from "./Button.interface";

export const PaginationButton = ({
  children,
  className,
  ...props
}: IPaginationButton) => {
  return (
    <button
      type="button"
      className={classNames(
        "text-[12px] font-extrabold leading-[16px] text-[#64748B] transition-colors duration-300 ease-in-out hover:text-[#0EA5E9]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
