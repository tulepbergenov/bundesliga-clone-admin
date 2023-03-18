import classNames from "classnames";
import { IFooter } from "./Footer.interface";

export const Footer = ({ className, ...props }: IFooter) => {
  const year = new Date().getFullYear();

  return (
    <footer
      className={classNames(
        "flex flex-col items-center gap-y-[4px] py-[40px]",
        className
      )}
      {...props}
    >
      <p>
        Powered by{" "}
        <span className="font-extrabold text-[#0EA5E9]">Laravel Nova</span> ·
        v4.0.3 (Silver Surfer)
      </p>
      <p>
        &copy;&nbsp;{year} Laravel LLC &middot; by&nbsp;Taylor Otwell and David
        Hemphill.
      </p>
    </footer>
  );
};
