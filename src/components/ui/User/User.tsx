import { useGetUser } from "@/api/hooks";
import { useLogout } from "@/api/hooks/useLogout";
import { ArrowDownIcon, ExitIcon } from "@/assets/imgs/icons";
import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment } from "react";
import { IUser } from "./User.interface";

const userImg =
  "https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_cat.png";

export const User = ({ className }: IUser) => {
  const { data, isLoading } = useGetUser();
  const { refetch } = useLogout();

  const handleLogout = () => {
    refetch();
  };

  return (
    <Menu
      as="div"
      className={classNames(
        "relative text-[14px] font-semibold leading-[19px] text-[#64748B] dark:text-[#94A3B8]",
        className
      )}
    >
      {({ open }) => (
        <>
          <Menu.Button
            as="button"
            type="button"
            className="flex items-center gap-x-[12px]"
          >
            {isLoading && (
              <>
                <div className="h-[32px] w-[32px] animate-pulse rounded-full bg-[#64748B] dark:bg-[#94A3B8]"></div>
                <div className="h-[14px] w-[100px] animate-pulse rounded bg-[#64748B] dark:bg-[#94A3B8]"></div>
              </>
            )}
            {data && (
              <>
                <div className="h-[32px] w-[32px] overflow-hidden rounded-full">
                  <img
                    src={userImg}
                    width={32}
                    height={32}
                    alt={data.data.data.name}
                  />
                </div>
                <span>{data.data.data.name}</span>
              </>
            )}
            <ArrowDownIcon
              className={classNames(
                "h-auto w-[18px] transition-transform duration-300 ease-in-out",
                {
                  ["rotate-180"]: open,
                }
              )}
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              as="ul"
              className="absolute z-10 w-full translate-y-[10px] overflow-hidden rounded-[4px] border border-[#CBD5E1] bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] dark:border-[#334155] dark:bg-[#1E293B]"
            >
              <Menu.Item as="li">
                {({ active }) => (
                  <button
                    type="button"
                    onClick={handleLogout}
                    className={classNames(
                      "grid w-full grid-cols-[24px_1fr] items-center gap-x-[10px] px-[10px] py-[10px] text-start hover:text-[#0EA5E9]",
                      {
                        ["text-[#0EA5E9]"]: active,
                      }
                    )}
                  >
                    <ExitIcon className="h-auto w-full transition-colors duration-300 ease-in-out" />
                    <span className="transition-colors duration-300 ease-in-out">
                      Exit
                    </span>
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
