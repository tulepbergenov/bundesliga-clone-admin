import { NAV_LINKS } from "@/constants";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { ISidebar } from "./Sidebar.interface";

export const Sidebar = ({ className, ...props }: ISidebar) => {
  return (
    <aside className={classNames(className)} {...props}>
      <nav>
        <ul className="flex flex-col gap-y-[2px]">
          {NAV_LINKS.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  classNames(
                    "group grid grid-cols-[24px_1fr] items-center gap-x-[10px] rounded-[4px] py-[10px] px-[10px]",
                    {
                      ["bg-[#0EA5E9] text-white dark:text-[#0F172A]"]: isActive,
                    },
                    {
                      ["hover:text-[#0EA5E9]"]: !isActive,
                    }
                  )
                }
              >
                {link.icon}
                <span className="text-[16px] font-semibold leading-[21px] transition-colors duration-300 ease-in-out">
                  {link.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
