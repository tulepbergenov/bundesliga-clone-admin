import classNames from "classnames";
import { IFieldset } from "./Fieldset.interface";

export const Fieldset = ({ children, className, ...props }: IFieldset) => {
  return (
    <fieldset
      className={classNames(
        "min-h-[400px] rounded-[8px] bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]",
        className
      )}
      {...props}
    >
      {children}
    </fieldset>
  );
};
