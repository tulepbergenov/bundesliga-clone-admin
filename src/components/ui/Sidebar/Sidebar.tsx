import { ISidebar } from "./Sidebar.interface";

export const Sidebar = ({ className, ...props }: ISidebar) => {
  return (
    <aside className={className} {...props}>
      <nav>
        <ul>
          <li>Sidebar</li>
        </ul>
      </nav>
    </aside>
  );
};
