import classNames from "classnames";
import { ISidebar } from "./Sidebar.interface";

export const Sidebar = ({ className }: ISidebar) => {
  return (
    <aside className={classNames(className)}>
      <nav>
        <ul>
          <li>Sidebar</li>
        </ul>
      </nav>
    </aside>
  );
};
