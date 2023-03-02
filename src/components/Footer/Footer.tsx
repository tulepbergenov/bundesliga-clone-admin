import { IFooter } from "./Footer.interface";

export const Footer = ({ className, ...props }: IFooter) => {
  return (
    <footer className={className} {...props}>
      Footer
    </footer>
  );
};
