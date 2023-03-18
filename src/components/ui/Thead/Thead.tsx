import { IThead } from "./Thead.interface";

export const Thead = ({ children }: IThead) => {
  return (
    <thead className="text-[12px] font-extrabold uppercase leading-[16px] dark:text-[#64748B]">
      {children}
    </thead>
  );
};
