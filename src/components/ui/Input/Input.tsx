import { EyeCloseIcon, EyeOpenIcon } from "@/assets/imgs/icons";
import classNames from "classnames";
import { forwardRef, useState } from "react";
import { IInput } from "./Input.interface";

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ toggleShowPassword, error, className, ...props }, ref) => {
    const [passwordIsHide, setPasswordIsHide] = useState(true);

    const handleToggleShowPassword = () => {
      setPasswordIsHide((prevState) => !prevState);
    };

    if (toggleShowPassword) {
      return (
        <div className="relative">
          <input
            ref={ref}
            type={passwordIsHide ? "password" : "text"}
            className={classNames(
              "inline-block w-full rounded-[4px] border bg-white py-[8px] pl-[12px] pr-[44px] text-[14px] font-normal leading-[19px] text-[#64748B] dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#94A3B8]",
              {
                ["border-[#DC2626]"]: error?.message,
                ["border-[#CBD5E1]"]: !error?.message,
              },
              className
            )}
            {...props}
          />
          <button
            type="button"
            onClick={handleToggleShowPassword}
            className={classNames(
              "absolute top-2/4 right-[12px] inline-block h-[20px] w-[20px] -translate-y-2/4 text-[#0EA5E9]",
              {
                ["text-[#DC2626]"]: error?.message,
                ["text-[#0EA5E9]"]: !error?.message,
              }
            )}
          >
            {passwordIsHide ? (
              <EyeOpenIcon className="h-full w-full" />
            ) : (
              <EyeCloseIcon className="h-full w-full" />
            )}
          </button>
        </div>
      );
    }

    return (
      <input
        ref={ref}
        className={classNames(
          "inline-block w-full rounded-[4px] border border-[#CBD5E1] bg-white py-[8px] px-[12px] text-[14px] font-normal leading-[19px] text-[#64748B] dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#94A3B8]",
          {
            ["border-[#DC2626]"]: error?.message,
            ["border-[#CBD5E1]"]: !error?.message,
          },
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
