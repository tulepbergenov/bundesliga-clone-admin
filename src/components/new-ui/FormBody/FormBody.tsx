import classNames from "classnames";
import { IFormBody } from "./FormBody.interface";

export const FormBody = ({ children, className, ...props }: IFormBody) => {
  return (
    <fieldset
      className={classNames(
        "shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]; min-h-[400px] rounded-[8px] bg-white dark:bg-[#1E293B]",
        className
      )}
      {...props}
    >
      {children}
    </fieldset>
  );
};
