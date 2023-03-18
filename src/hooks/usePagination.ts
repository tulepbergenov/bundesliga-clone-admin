import { paginate } from "@/utils";
import { useCallback, useEffect, useMemo, useState } from "react";

const pageSize = 5;

export const usePagination = (items: any[]) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemCount = useMemo(() => items.length, [items]);

  useEffect(() => {
    setCurrentPage(1);
  }, [items]);

  const totalPages = useMemo(
    () => Math.ceil(itemCount / pageSize),
    [itemCount]
  );

  const startIndex = useMemo(() => (currentPage - 1) * pageSize, [currentPage]);

  const endIndex = useMemo(
    () => Math.min(startIndex + pageSize - 1, itemCount - 1),
    [startIndex, itemCount]
  );

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
