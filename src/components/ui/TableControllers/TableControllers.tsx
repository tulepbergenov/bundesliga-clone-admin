import classNames from "classnames";
import { PaginationButton } from "../Button";
import { ITableControllers } from "./TableControllers.interface";

export const TableControllers = ({
  className,
  currentPage,
  onNextPage,
  onPrevPage,
  pageCount,
  totalPages,
  ...props
}: ITableControllers) => {
  return (
    <div
      className={classNames(
        "flex justify-center py-[11px] px-[8px]",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-x-[20px]">
        <PaginationButton disabled={currentPage === 1} onClick={onPrevPage}>
          Previous
        </PaginationButton>
        <p>
          <span>1</span>&nbsp;-&nbsp;<span>1&nbsp;</span>&nbsp;of
          <span>&nbsp;{pageCount}</span>
        </p>
        <PaginationButton
          disabled={totalPages === currentPage}
          onClick={onNextPage}
        >
          Next
        </PaginationButton>
      </div>
    </div>
  );
};
