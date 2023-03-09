import classNames from "classnames";
import { IInputDivider } from "./InputDivider.interface";

export const InputDivider = ({
  children,
  className,
  ...props
}: IInputDivider) => {
  return (
    <div
      className={classNames(
        "boder-[#F1F5F9] grid grid-cols-[240px_1fr] gap-x-[20px] border-b px-[24px] py-[20px] last:border-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
