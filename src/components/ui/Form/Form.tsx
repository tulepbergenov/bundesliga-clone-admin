import classNames from "classnames";
import { forwardRef } from "react";
import { IForm } from "./Form.interface";

export const Form = forwardRef<HTMLFormElement, IForm>(
  ({ children, className, ...props }, ref) => {
    return (
      <form
        ref={ref}
        className={classNames("flex flex-col gap-y-[24px]", className)}
        {...props}
      >
        {children}
      </form>
    );
  }
);

Form.displayName === "Form";
