import classNames from "classnames";
import { useMemo } from "react";
import { IFooter } from "./Footer.interface";

export const Footer = ({ className }: IFooter) => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer
      className={classNames(
        "py-[16px] text-center text-[12px] leading-[16px]",
        className
      )}
    >
      <p>© {year} Bundesliga.</p>
    </footer>
  );
};
