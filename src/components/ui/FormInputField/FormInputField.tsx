import classNames from "classnames";
import { IFormInputField } from "./FormInputField.interface";
import styles from "./FormInputField.module.css";

export const FormInputField = ({
  children,
  className,
  ...props
}: IFormInputField) => {
  return (
    <fieldset className={classNames(styles.inputField, className)} {...props}>
      {children}
    </fieldset>
  );
};
