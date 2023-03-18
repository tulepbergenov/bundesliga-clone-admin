import classNames from "classnames";
import { ITd } from "./Td.interface";

export const Td = ({ children, className, ...props }: ITd) => {
  return (
    <td
      className={classNames(
        "bg-white py-[16px] px-[25px] dark:bg-[#1E293B]",
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
};
