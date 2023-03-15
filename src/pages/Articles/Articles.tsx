import { useGetArticles } from "@/api/hooks";
import { BinIcon, EditIcon, EyeIcon } from "@/assets/imgs/icons";
import {
  Heading,
  InputSearch,
  Link,
  Spinner,
  Table,
  TableControllers,
  TableWrapper,
  Tooltip,
} from "@/components";
import { useDebounce, usePagination } from "@/hooks";
import { IArticle } from "@/interfaces";
import { useEffect, useMemo, useState } from "react";

export const Articles = () => {
  const { data, isLoading } = useGetArticles();
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const {
    dataCrop: cropArticles,
    handleNextPage,
    handlePrevPage,
    totalPages,
    pageCount,
    currentPage,
    setCurrentPage,
    pageSize,
  } = usePagination(articles);

  const deb = useDebounce(searchValue, 500);

  useEffect(() => {
    if (data) {
      if (deb === "") {
        setArticles(data.data.data);
      } else {
        if (deb !== "") {
          setCurrentPage(1);
        }
        setArticles(
          articles.filter((article) =>
            article.title.toLowerCase().includes(deb.toLowerCase())
          )
        );
      }
    }
  }, [deb, data]);

  const startIndex = useMemo(
    () => (currentPage - 1) * pageSize,
    [currentPage, pageSize]
  );

  const endIndex = Math.min(
    startIndex + pageSize - 1,
    data?.data.data.length - 1
  );

  return (
    <>
      <Heading as="h1" className="mb-[12px]">
        News
      </Heading>
      <div className="mb-[24px] flex items-center justify-between">
        <InputSearch
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          bg="white"
          placeholder="Search club"
        />
        <Link to="/news/add" apperience="button">
          Add News
        </Link>
      </div>
      {isLoading && (
        <div className="flex justify-center">
          <Spinner className="h-[50px] w-[50px] text-[#0EA5E9]" />
        </div>
      )}
      {data && data.data.data.length > 0 && (
        <TableWrapper>
          <Table>
            <thead className="border-b border-[#F1F5F9] text-[12px] font-extrabold leading-[16px]">
              <tr>
                <th className="rounded-[8px_0_0_0] bg-[#F8FAFC] py-[8px] px-[25px] text-center uppercase leading-[16px] text-[#64748B]">
                  ID
                </th>
                <th className="bg-[#F8FAFC] py-[8px] px-[25px] text-center uppercase leading-[16px] text-[#64748B]">
                  Title
                </th>
                <th className="bg-[#F8FAFC] py-[8px] px-[25px] text-center uppercase leading-[16px] text-[#64748B]">
                  Description
                </th>
                <th className="rounded-[0_8px_0_0] bg-[#F8FAFC] p-[8px] px-[50px] text-center uppercase leading-[16px] text-[#64748B]"></th>
              </tr>
            </thead>
            <tbody>
              {cropArticles.map((article) => (
                <tr key={article.id} className="border border-[#F1F5F9]">
                  <td className="bg-white py-[16px] px-[25px] text-center align-top font-extrabold text-[#0EA5E9]">
                    {article.id}
                  </td>
                  <td className="bg-white py-[16px] px-[25px] text-center align-top text-slate-500">
                    {article.title}
                  </td>
                  <td className="bg-white py-[16px] px-[25px] text-center text-slate-500">
                    {article.short_description}
                  </td>
                  <td className="bg-white px-[20px] py-[16px] text-center text-slate-500">
                    <div className="flex h-full items-center justify-center gap-x-[16px] text-[#94A3B8]">
                      <Tooltip label="View">
                        <Link
                          to={`/news/${article.id}`}
                          className="flex h-[24px] w-[24px] items-center justify-center transition-colors duration-300 ease-in-out hover:text-[#0EA5E9]"
                        >
                          <EyeIcon className="h-auto w-full" />
                        </Link>
                      </Tooltip>
                      <Tooltip label="Edit">
                        <Link
                          to={`/news/${article.id}/edit`}
                          className="flex h-[24px] w-[24px] items-center justify-center transition-colors duration-300 ease-in-out hover:text-[#0EA5E9]"
                        >
                          <EditIcon className="h-auto w-full" />
                        </Link>
                      </Tooltip>
                      <Tooltip label="Delete">
                        <button
                          type="button"
                          className="flex h-[24px] w-[24px] items-center justify-center transition-colors duration-300 ease-in-out hover:text-[#EF4444]"
                        >
                          <BinIcon className="h-auto w-full" />
                        </button>
                      </Tooltip>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <TableControllers
            currentPage={currentPage}
            pageCount={pageCount}
            onPrevPage={handlePrevPage}
            onNextPage={handleNextPage}
            totalPages={totalPages}
            startIndex={startIndex + 1}
            endIndex={endIndex + 1}
          />
        </TableWrapper>
      )}
    </>
  );
};
