import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ITableController
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onPrevPage: () => void;
  onNextPage: () => void;
  itemCount: number;
  currentPage: number;
  totalPages: number;
  endIndex: number;
  startIndex: number;
}
