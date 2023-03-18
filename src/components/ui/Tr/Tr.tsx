import { ITr } from "./Tr.interface";

export const Tr = ({ children }: ITr) => {
  return (
    <tr className="border-b border-[#F1F5F9] dark:border-[#334155]">
      {children}
    </tr>
  );
};
