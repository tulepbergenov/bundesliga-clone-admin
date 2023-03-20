import classNames from "classnames";
import { IForm } from "./Form.interface";

export const Form = ({ children, className, ...props }: IForm) => {
  return (
    <form
      className={classNames("flex flex-col gap-y-[24px]", className)}
      {...props}
    >
      {children}
    </form>
  );
};
