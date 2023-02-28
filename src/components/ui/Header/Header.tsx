import classNames from "classnames";
import { IHeader } from "./Header.interface";

export const Header = ({ className }: IHeader) => {
  return (
    <header className={classNames(className)}>
      <div>Header</div>
    </header>
  );
};
