import { ITbody } from "./Tbody.interface";

export const Tbody = ({ children }: ITbody) => {
  return <tbody className="text-[14px] leading-[19px]">{children}</tbody>;
};
