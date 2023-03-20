import classNames from "classnames";
import { IFormGroup } from "./FormGroup.interface";
import styles from "./FormGroup.module.css";

export const FormGroup = ({ children, className, ...props }: IFormGroup) => {
  return (
    <fieldset
      className={classNames(
        "grid grid-cols-[244px_1fr] gap-x-[20px] border-b border-[#F1F5F9] py-[20px] px-[32px] last:border-none dark:border-[#334155]",
        styles.formGroup,
        className
      )}
      {...props}
    >
      {children}
    </fieldset>
  );
};
