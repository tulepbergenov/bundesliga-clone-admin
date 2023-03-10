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
  startIndex,
  endIndex,
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
          <span>{startIndex}</span>&nbsp;-&nbsp;<span>{endIndex}&nbsp;</span>
          &nbsp;of
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
