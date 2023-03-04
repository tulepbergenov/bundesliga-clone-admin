import classNames from "classnames";
import { useMemo } from "react";
import { IFooter } from "./Footer.interface";

export const Footer = ({ className, ...props }: IFooter) => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer
      className={classNames(
        "flex flex-col items-center gap-y-[4px] py-[16px] text-[12px] leading-[16px]",
        className
      )}
      {...props}
    >
      <p>
        Powered by{" "}
        <span className="font-extrabold text-[#0EA5E9]">Laravel Nova</span> ·
        v4.0.3 (Silver Surfer)
      </p>
      <p>© {year} Laravel LLC · by Taylor Otwell and David Hemphill.</p>
    </footer>
  );
};
