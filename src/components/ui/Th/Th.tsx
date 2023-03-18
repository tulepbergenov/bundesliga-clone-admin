import classNames from "classnames";
import { ITh } from "./Th.interface";

export const Th = ({ children, className, ...props }: ITh) => {
  return (
    <th
      className={classNames(
        "bg-[#F8FAFC] py-[8px] px-[25px] first:rounded-[8px_0_0_0] last:rounded-[0_8px_0_0] dark:bg-[#1E293B]",
        className
      )}
      {...props}
    >
      {children}
    </th>
  );
};
