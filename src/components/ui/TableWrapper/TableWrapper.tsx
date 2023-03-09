import classNames from "classnames";
import { ITableWrapper } from "./TableWrapper.interface";

export const TableWrapper = ({
  children,
  className,
  ...props
}: ITableWrapper) => {
  return (
    <div
      className={classNames(
        "w-full overflow-hidden rounded-[8px] bg-white text-[12px] text-sm shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
