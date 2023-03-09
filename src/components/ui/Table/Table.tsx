import { ITable } from "./Table.interface";

export const Table = ({ children }: ITable) => {
  return (
    <table className="w-full table-auto border-collapse border border-[#F1F5F9]">
      {children}
    </table>
  );
};
