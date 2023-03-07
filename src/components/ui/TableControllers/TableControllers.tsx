import { PaginationButton } from "../Button";

export const TableControllers = () => {
  return (
    <div className="flex justify-center py-[11px] px-[8px]">
      <div className="flex items-center gap-x-[20px]">
        <PaginationButton>Previous</PaginationButton>
        <p>
          <span>1</span>&nbsp;-&nbsp;<span>1&nbsp;</span>&nbsp;of
          <span>&nbsp;7</span>
        </p>
        <PaginationButton>Next</PaginationButton>
      </div>
    </div>
  );
};
