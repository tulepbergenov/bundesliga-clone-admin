import { useGetAuthUser, useLogout } from "@/api/hooks";
import { ArrowDownIcon } from "@/assets/imgs/icons";
import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const mockAvatarImg =
  "https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80";

export const User = () => {
  const { data: user, isLoading } = useGetAuthUser();
  const { refetch } = useLogout();

  const handleLogout = (e: any) => {
    e.preventDefault();
    refetch();
  };

  return (
    <>
      <Menu as="div" className="relative ml-[28px]">
        {({ open }) => (
          <>
            <Menu.Button
              as="button"
              type="button"
              className="grid grid-cols-[32px_1fr_20px] items-center"
            >
              {isLoading ? (
                <div className="h-[32px] w-[32px] rounded-full bg-[#F1F5F9]"></div>
              ) : (
                <div className="h-[32px] w-full overflow-hidden rounded-full">
                  <img
                    src={mockAvatarImg}
                    alt="Cat"
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              {isLoading ? (
                <div className="mr-[8px] ml-[12px] flex animate-pulse">
                  <div className="h-[14px] w-10 rounded-full bg-[#F1F5F9]"></div>
                </div>
              ) : (
                <span className="mr-[8px] ml-[12px] text-[14px] font-semibold leading-[19px] text-[#475569] dark:text-[#94A3B8]">
                  {user?.data.data.name}
                </span>
              )}
              <ArrowDownIcon
                className={classNames(
                  "h-auto w-full transition-transform duration-300 ease-in-out",
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
                className="absolute z-10 w-full translate-y-[10px] overflow-hidden rounded-[5px] bg-white shadow"
              >
                <Menu.Item as="li">
                  {({ active }) => (
                    <Link
                      to="#settings"
                      className={classNames(
                        "inline-block w-full py-[10px] px-[10px] font-semibold transition-colors duration-300 ease-in-out",
                        {
                          ["bg-[#0EA5E9] text-white"]: active,
                        }
                      )}
                    >
                      Settings
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item as="li">
                  {({ active }) => (
                    <Link
                      to="/login"
                      onClick={handleLogout}
                      className={classNames(
                        "inline-block w-full py-[10px] px-[10px] font-semibold transition-colors duration-300 ease-in-out",
                        {
                          ["bg-[#0EA5E9] text-white"]: active,
                        }
                      )}
                    >
                      Exit
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </>
  );
};
