import classNames from "classnames";
import { IFormButtonGroup } from "./FormButtonGroup.interface";

export const FormButtonGroup = ({
  children,
  className,
  ...props
}: IFormButtonGroup) => {
  return (
    <div
      className={classNames(
        "flex items-center justify-end gap-x-[24px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
