import { ITableWrapper } from "./TableWrapper.interface";

export const TableWrapper = ({ children }: ITableWrapper) => {
  return (
    <div className="text-center font-normal text-[#64748B] drop-shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1pxrgba(0,0,0,0.1)] dark:text-[#94A3B8]">
      {children}
    </div>
  );
};
