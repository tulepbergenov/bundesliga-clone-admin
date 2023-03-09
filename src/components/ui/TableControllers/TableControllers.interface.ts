import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ITableControllers
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onPrevPage: () => void;
  onNextPage: () => void;
  pageCount: number;
  currentPage: number;
  totalPages: number;
}
