import classNames from "classnames";
import { IErrorMessage } from "./ErrorMessage.interface";

export const ErrorMessage = ({ error, className, ...props }: IErrorMessage) => {
  if (error) {
    return (
      <p
        className={classNames(
          "text-[12px] font-normal leading-[16px] text-[#DC2626]",
          className
        )}
        {...props}
      >
        {error.message}
      </p>
    );
  }

  return null;
};
