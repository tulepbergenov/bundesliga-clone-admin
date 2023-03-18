export interface ITableController {
  currentPage: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  startIndex: number;
  endIndex: number;
  itemCount: number;
  totalPages: number;
}
