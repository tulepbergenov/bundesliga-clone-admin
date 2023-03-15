import classNames from "classnames";
import { IFormGroup } from "./FormGroup.interface";

export const FormGroup = ({ children, className, ...props }: IFormGroup) => {
  return (
    <fieldset
      className={classNames(
        "grid grid-cols-[240px_1fr] gap-x-[20px] border-b border-[#F1F5F9] px-[24px] py-[20px] last:border-none dark:border-[#334155]",
        className
      )}
      {...props}
    >
      {children}
    </fieldset>
  );
};
