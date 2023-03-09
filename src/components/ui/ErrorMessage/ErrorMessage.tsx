import classNames from "classnames";
import { IErrorMessage } from "./ErrorMessage.interface";

export const ErrorMessage = ({
  children,
  className,
  ...props
}: IErrorMessage) => {
  return (
    <p
      className={classNames(
        "mt-[3px] pl-[5px] text-xs text-red-500",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
