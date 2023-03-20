import classNames from "classnames";
import { IFormBody } from "./FormBody.interface";

export const FormBody = ({ children, className, ...props }: IFormBody) => {
  return (
    <fieldset
      className={classNames(
        "min-h-[300px] rounded-[8px] bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] dark:bg-[#1e293b]",
        className
      )}
      {...props}
    >
      {children}
    </fieldset>
  );
};
