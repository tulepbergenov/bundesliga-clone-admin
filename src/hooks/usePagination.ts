import { paginate } from "@/utils";
import { useCallback, useEffect, useMemo, useState } from "react";

const pageSize = 5;

export const usePagination = (items: any[] = [], searchValue?: string) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (searchValue) {
      if (searchValue !== "") {
        setCurrentPage(1);
      }
    }
  }, [searchValue]);

  const itemCount = items?.length;

  const totalPages = Math.ceil(itemCount / pageSize);

  const startIndex = (currentPage - 1) * pageSize;

  const endIndex = Math.min(startIndex + pageSize - 1, itemCount - 1);

  const itemCrop = useMemo(
    () => paginate(items, currentPage, pageSize),
    [items, currentPage]
  );

  const onPrevPage = useCallback(() => {
    setCurrentPage((prevCurrPage) => prevCurrPage - 1);
  }, []);

  const onNextPage = useCallback(() => {
    setCurrentPage((prevCurrPage) => prevCurrPage + 1);
  }, []);

  const value = useMemo(() => {
    return {
      currentPage,
      itemCrop,
      itemCount,
      totalPages,
      endIndex,
      startIndex,
      onPrevPage,
      onNextPage,
      setCurrentPage,
    };
  }, [
    currentPage,
    itemCrop,
    itemCount,
    onPrevPage,
    onNextPage,
    totalPages,
    endIndex,
    startIndex,
  ]);

  return value;
};
