import { useGetFootballers } from "@/api/hooks";
import { BinIcon, EditIcon, EyeIcon } from "@/assets/imgs/icons";
import {
  ContentSpinner,
  Heading,
  Link,
  SearchInput,
  TableController,
  Tooltip,
} from "@/components/new-ui";
import { useDebounce } from "@/hooks";
import { IFootballer } from "@/interfaces";
import { paginate } from "@/utils";
import { useEffect, useState } from "react";

export const Footballers = () => {
  const { data, isLoading } = useGetFootballers();
  const [footballers, setFootballers] = useState<IFootballer[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const footballerCrop = paginate(footballers, currentPage, pageSize);

  const totalPages = Math.ceil(footballers.length / pageSize);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, footballers.length - 1);

  const deb = useDebounce(searchValue, 500);

  useEffect(() => {
    if (data) {
      if (deb === "") {
        setFootballers(data.data.data);
      }
      if (deb !== "") {
        setCurrentPage(1);
        setFootballers((prevFootballers) =>
          prevFootballers.filter((footballer) =>
            footballer.name.toLowerCase().includes(deb.toLowerCase())
          )
        );
      }
    }
  }, [data, deb]);

  return (
    <>
      <Heading as="h1" className="mb-[12px]">
        Footballers
      </Heading>
      <div className="mb-[24px] flex items-center justify-between">
        <SearchInput
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search"
        />
        <Link to="/footballers/add" apperience="button">
          Add Footballer
        </Link>
      </div>
      {isLoading && <ContentSpinner />}
      {footballers.length > 0 && (
        <div className="drop-shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
          <table className="w-full table-auto border-collapse text-center text-[#64748B] dark:text-[#94A3B8]">
            <thead className="border-b border-[#F1F5F9] text-[12px] font-extrabold uppercase leading-[16px] dark:border-[#334155] dark:text-[#64748B]">
              <tr>
                <td className="bg-[#F8FAFC] py-[8px] px-[25px] first:rounded-[8px_0_0_0] last:rounded-[0_8px_0_0] dark:bg-[#1E293B]">
                  ID
                </td>
                <td className="bg-[#F8FAFC] py-[8px] px-[25px] first:rounded-[8px_0_0_0] last:rounded-[0_8px_0_0] dark:bg-[#1E293B]">
                  Name
                </td>
                <td className="bg-[#F8FAFC] py-[8px] px-[25px] first:rounded-[8px_0_0_0] last:rounded-[0_8px_0_0] dark:bg-[#1E293B]">
                  Club
                </td>
                <td className="bg-[#F8FAFC] py-[8px] px-[25px] first:rounded-[8px_0_0_0] last:rounded-[0_8px_0_0] dark:bg-[#1E293B]">
                  Position
                </td>
                <td className="bg-[#F8FAFC] py-[8px] px-[25px] first:rounded-[8px_0_0_0] last:rounded-[0_8px_0_0] dark:bg-[#1E293B]">
                  Goals
                </td>
                <td className="bg-[#F8FAFC] py-[8px] px-[25px] first:rounded-[8px_0_0_0] last:rounded-[0_8px_0_0] dark:bg-[#1E293B]">
                  Assists
                </td>
                <td className="bg-[#F8FAFC] py-[8px] px-[25px] first:rounded-[8px_0_0_0] last:rounded-[0_8px_0_0] dark:bg-[#1E293B]">
                  Penalties
                </td>
                <td className="bg-[#F8FAFC] py-[8px] px-[25px] first:rounded-[8px_0_0_0] last:rounded-[0_8px_0_0] dark:bg-[#1E293B]"></td>
              </tr>
            </thead>
            <tbody>
              {footballerCrop.map((footballer) => (
                <tr
                  key={footballer.id}
                  className="border-b border-[#F1F5F9] dark:border-[#334155]"
                >
                  <td className="bg-white py-[16px] px-[25px] text-[14px] font-extrabold leading-[19px] text-[#0EA5E9] dark:bg-[#1E293B]">
                    {footballer.id}
                  </td>
                  <td className="bg-white py-[16px] px-[25px] text-[14px] font-normal leading-[19px] dark:bg-[#1E293B]">
                    {footballer.name}
                  </td>
                  <td className="bg-white py-[16px] px-[25px] text-[14px] font-normal leading-[19px] dark:bg-[#1E293B]">
                    {footballer.club_id}
                  </td>
                  <td className="bg-white py-[16px] px-[25px] text-[14px] font-normal leading-[19px] dark:bg-[#1E293B]">
                    {footballer.position}
                  </td>
                  <td className="bg-white py-[16px] px-[25px] text-[14px] font-normal leading-[19px] dark:bg-[#1E293B]">
                    {footballer.goals}
                  </td>
                  <td className="bg-white py-[16px] px-[25px] text-[14px] font-normal leading-[19px] dark:bg-[#1E293B]">
                    {footballer.assists}
                  </td>
                  <td className="bg-white py-[16px] px-[25px] text-[14px] font-normal leading-[19px] dark:bg-[#1E293B]">
                    {footballer.penalties}
                  </td>
                  <td className="bg-white py-[16px] px-[25px] text-[14px] font-normal leading-[19px] dark:bg-[#1E293B]">
                    <div className="flex items-center gap-x-[16px] text-[#94A3B8]">
                      <Tooltip label="View">
                        <Link to={`/footballers/${footballer.id}`}>
                          <EyeIcon className="h-auto w-[24px] transition-colors duration-300 ease-in-out  hover:text-[#0EA5E9]" />
                        </Link>
                      </Tooltip>
                      <Tooltip label="Edit">
                        <Link to={`/footballers/${footballer.id}/edit`}>
                          <EditIcon className="h-auto w-[24px] transition-colors duration-300 ease-in-out  hover:text-[#0EA5E9]" />
                        </Link>
                      </Tooltip>
                      <Tooltip label="Remove">
                        <button type="button" className="align-bottom">
                          <BinIcon className="h-auto w-[24px] transition-colors duration-300 ease-in-out hover:text-[#EF4444]" />
                        </button>
                      </Tooltip>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <TableController
            onPrevPage={handlePrevPage}
            onNextPage={handleNextPage}
            itemCount={footballers.length}
            currentPage={currentPage}
            totalPages={totalPages}
            startIndex={startIndex}
            endIndex={endIndex}
          />
        </div>
      )}
    </>
  );
};
