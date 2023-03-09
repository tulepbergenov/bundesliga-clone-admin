import { paginate } from "@/utilities";
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

  const value = useMemo(() => {
    return {
      currentPage,
      totalPages,
      handleNextPage,
      handlePrevPage,
      dataCrop,
      pageCount,
      setCurrentPage,
    };
  }, [data, currentPage, dataCrop, pageCount, totalPages]);

  return value;
};
