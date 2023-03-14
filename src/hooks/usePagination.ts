import { paginate } from "@/utils";
import { useCallback, useMemo, useState } from "react";

export const usePagination = (data: any[] = []) => {
  const [pageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const dataCrop: any[] = paginate(data, currentPage, pageSize);

  const handlePrevPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage - 1);
  }, []);

  const handleNextPage = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1);
  }, []);

  const pageCount = useMemo(() => data.length, [data]);

  const totalPages = useMemo(
    () => Math.ceil(pageCount / pageSize),
    [pageCount]
  );

  const startIndex = useMemo(
    () => (currentPage - 1) * pageSize + 1,
    [currentPage, pageSize]
  );

  const endIndex = useMemo(
    () => Math.min(startIndex + pageSize - 1, data.length - 1),
    [pageSize, startIndex, data]
  );

  const value = useMemo(() => {
    return {
      currentPage,
      totalPages,
      handleNextPage,
      handlePrevPage,
      dataCrop,
      pageCount,
      setCurrentPage,
      pageSize,
      startIndex,
      endIndex,
    };
  }, [
    data,
    currentPage,
    dataCrop,
    pageCount,
    totalPages,
    pageSize,
    startIndex,
    endIndex,
  ]);

  return value;
};
