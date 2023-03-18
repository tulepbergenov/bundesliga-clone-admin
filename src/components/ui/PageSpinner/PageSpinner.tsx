import classNames from "classnames";
import { Spinner } from "../Spinner";
import { IPageSpinner } from "./PageSpinner.interface";

export const PageSpinner = ({
  isLoading,
  className,
  ...props
}: IPageSpinner) => {
  if (isLoading) {
    return (
      <div
        className={classNames("mt-[20p] flex justify-center", className)}
        {...props}
      >
        <Spinner className="h-auto w-[40px] text-[#0EA5E9]" />
      </div>
    );
  }

  return null;
};
