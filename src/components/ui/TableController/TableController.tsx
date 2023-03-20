import { memo } from "react";
import { ITableController } from "./TableController.interface";

export const TableController = memo(
  ({
    currentPage,
    startIndex,
    endIndex,
    totalPages,
    itemCount,
    onPrevPage,
    onNextPage,
  }: ITableController) => {
    return (
      <div className="flex items-center justify-center gap-x-[16px] rounded-[0_0_8px_8px] bg-white py-[11px] px-[16px] text-[12px] font-extrabold leading-[16px] text-[#64748B] dark:bg-[#1E293B]">
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={onPrevPage}
          className="transition-colors duration-300 ease-in-out disabled:text-[#CBD5E1] dark:text-[#0EA5E9] dark:disabled:text-[#475569]"
        >
          Previous
        </button>
        <p className="font-normal">
          {startIndex + 1}-{endIndex + 1}&nbsp;of&nbsp;{itemCount}
        </p>
        <button
          type="button"
          disabled={totalPages === currentPage}
          onClick={onNextPage}
          className="transition-colors duration-300 ease-in-out disabled:text-[#CBD5E1] dark:text-[#0EA5E9] dark:disabled:text-[#475569]"
        >
          Next
        </button>
      </div>
    );
  }
);

TableController.displayName = "TableController";
