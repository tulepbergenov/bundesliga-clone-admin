import classNames from "classnames";
import { ITableController } from "./TableController.interface";

export const TableController = ({
  onPrevPage,
  onNextPage,
  itemCount,
  currentPage,
  totalPages,
  className,
  endIndex,
  startIndex,
  ...props
}: ITableController) => {
  return (
    <div
      className={classNames(
        "flex items-center justify-center gap-x-[16px] rounded-[0_0_8px_8px] bg-white py-[11px] px-[16px] text-[12px] font-normal leading-[16px] text-[#64748B] dark:bg-[#1E293B] dark:text-[#94A3B8]",
        className
      )}
      {...props}
    >
      <button
        type="button"
        onClick={onPrevPage}
        disabled={currentPage === 1}
        className="font-extrabold disabled:text-[#CBD5E1] dark:disabled:text-[#475569]"
      >
        Previous
      </button>
      <p>
        {startIndex + 1}-{endIndex + 1}&nbsp;of&nbsp;{itemCount}
      </p>
      <button
        type="button"
        onClick={onNextPage}
        disabled={totalPages === currentPage}
        className="font-extrabold disabled:text-[#CBD5E1] dark:disabled:text-[#475569]"
      >
        Next
      </button>
    </div>
  );
};
