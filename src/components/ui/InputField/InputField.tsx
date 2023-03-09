import classNames from "classnames";
import { IInputField } from "./InputField.interface";

export const InputField = ({ children, className, ...props }: IInputField) => {
  return (
    <div className={classNames("w-full", className)} {...props}>
      {children}
    </div>
  );
};
