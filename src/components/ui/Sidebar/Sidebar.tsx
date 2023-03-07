import { SIDEBAR_NAV_LINKS } from "@/constants";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { ISidebar } from "./Sidebar.interface";

export const Sidebar = ({ className, ...props }: ISidebar) => {
  return (
    <aside className={className} {...props}>
      <nav>
        <ul className="flex flex-col gap-y-[2px]">
          {SIDEBAR_NAV_LINKS.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  classNames(
                    "grid grid-cols-[24px_1fr] items-center gap-x-[8px] rounded-[5px] px-[15px] py-[10px] text-[16px] font-semibold leading-[21px] text-[#64748B]",
                    {
                      ["bg-[#0EA5E9] text-white"]: isActive,
                      ["transition-colors duration-300 ease-in-out hover:text-[#0EA5E9]"]:
                        !isActive,
                    }
                  )
                }
              >
                {link.icon}
                <p>{link.name}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
