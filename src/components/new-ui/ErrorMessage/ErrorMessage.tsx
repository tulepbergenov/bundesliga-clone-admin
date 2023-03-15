import classNames from "classnames";
import { IErrorMessage } from "./ErrorMessage.interface";

export const ErrorMessage = ({ className, error, ...props }: IErrorMessage) => {
  if (error) {
    return (
      <p
        className={classNames(
          "mt-[3px] pl-[5px] text-xs text-red-500",
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
