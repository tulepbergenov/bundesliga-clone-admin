import { LogoIcon, NotificationIcon, SearchIcon } from "@/assets/imgs/icons";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { User } from "../User";
import { IHeader } from "./Header.interface";

export const Header = ({ className, ...props }: IHeader) => {
  return (
    <header
      className={classNames(
        "relative grid grid-cols-[auto_320px_1fr_24px_auto] items-center py-[13px] before:absolute before:top-0 before:left-2/4 before:-z-[1] before:h-full before:w-screen before:-translate-x-2/4 before:bg-white before:shadow before:content-['']",
        className
      )}
      {...props}
    >
      <Link to="/" className="mr-[100px] flex items-center gap-x-[9px]">
        <LogoIcon className="h-auto w-[22px]" />
        <p className="text-xl font-extrabold leading-[19px] text-[#475569]">
          Bundesliga
        </p>
      </Link>
      <div className="relative w-full text-[#94A3B8]">
        <SearchIcon className="absolute top-2/4 left-[20px] h-auto w-[20px] -translate-y-2/4" />
        <input
          type="text"
          placeholder="Press / to search"
          className="inline-block rounded-[44px] bg-[#F1F5F9] py-[9px] pr-[20px] pl-[60px] text-[14px] font-normal leading-[19px] placeholder:text-inherit"
        />
      </div>
      <Link to="/notifications" className="col-start-4 col-end-5">
        <NotificationIcon className="h-auto w-[24px] text-[#64748B]" />
      </Link>
      <User />
    </header>
  );
};
