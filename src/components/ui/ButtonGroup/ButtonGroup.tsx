import classNames from "classnames";
import { IButtonGroup } from "./ButtonGroup.interface";

export const ButtonGroup = ({
  children,
  className,
  itemPosition = "start",
  ...props
}: IButtonGroup) => {
  return (
    <div
      className={classNames(
        "self flex items-center gap-x-[24px]",
        {
          ["self-end"]: itemPosition === "end",
          ["self-start"]: itemPosition === "start",
          ["self-center"]: itemPosition === "center",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
