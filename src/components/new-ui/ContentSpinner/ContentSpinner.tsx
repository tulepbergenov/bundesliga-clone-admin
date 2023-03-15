import classNames from "classnames";
import { Spinner } from "../Spinner";
import { IContentSpinner } from "./ContentSpinner.interface";

export const ContentSpinner = ({ className, ...props }: IContentSpinner) => {
  return (
    <div className={classNames("flex justify-center", className)} {...props}>
      <Spinner className="h-[50px] w-[50px] text-[#0EA5E9]" />
    </div>
  );
};
