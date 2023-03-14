import { useGetClubs } from "@/api/hooks";
import { EditIcon, EyeIcon } from "@/assets/imgs/icons";
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
import { IClub } from "@/interfaces";
import { useEffect, useMemo, useState } from "react";

export const Clubs = () => {
  const { data, isLoading } = useGetClubs();
  const [clubs, setClubs] = useState<IClub[]>([]);
  const {
    dataCrop: clubCrop,
    handleNextPage,
    handlePrevPage,
    totalPages,
    pageCount,
    currentPage,
    setCurrentPage,
    pageSize,
  } = usePagination(clubs);
  const [searchValue, setSearchValue] = useState("");

  const deb = useDebounce(searchValue, 500);

  const startIndex = useMemo(
    () => (currentPage - 1) * pageSize,
    [currentPage, pageSize]
  );

  const endIndex = Math.min(
    startIndex + pageSize - 1,
    data?.data.data.length - 1
  );

  useEffect(() => {
    if (data) {
      if (deb === "") {
        setClubs(data.data.data);
      } else {
        if (deb !== "") {
          setCurrentPage(1);
        }
        setClubs(
          clubs.filter((club) =>
            club.name.toLowerCase().includes(deb.toLowerCase())
          )
        );
      }
    }
  }, [deb, data]);

  return (
    <>
      <Heading className="mb-[12px]">Clubs</Heading>
      <div className="mb-[24px] flex items-center justify-between">
        <InputSearch
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          bg="white"
          placeholder="Search club"
        />
        <Link to="/clubs/add" apperience="button">
          Add Club
        </Link>
      </div>
      {isLoading && (
        <div className="flex justify-center">
          <Spinner className="h-[50px] w-[50px] text-[#0EA5E9]" />
        </div>
      )}
      {data && data?.data.data.length > 0 && (
        <TableWrapper>
          <Table>
            <thead className="border-b border-[#F1F5F9] bg-[#F8FAFC] text-[12px] font-extrabold leading-[16px]">
              <tr>
                <th className="py-[8px] px-[25px] text-center uppercase leading-[16px] text-[#64748B]">
                  ID
                </th>
                <th className="py-[8px] px-[25px] text-center uppercase leading-[16px] text-[#64748B]">
                  Name
                </th>
                <th className="p-[8px] text-center uppercase leading-[16px] text-[#64748B]">
                  Stadium
                </th>
                <th className="p-[8px] text-center uppercase leading-[16px] text-[#64748B]">
                  Color
                </th>
                <th className="p-[8px] text-center uppercase leading-[16px] text-[#64748B]">
                  Wins
                </th>
                <th className="p-[8px] text-center uppercase leading-[16px] text-[#64748B]">
                  Draw
                </th>
                <th className="p-[8px] text-center uppercase leading-[16px] text-[#64748B]">
                  Lose
                </th>
                <th className="p-[8px] px-[50px] text-center uppercase leading-[16px] text-[#64748B]"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {clubCrop.map((club) => (
                <tr key={club.id} className="border border-[#F1F5F9]">
                  <td className="py-[16px] px-[25px] text-center font-extrabold text-[#0EA5E9]">
                    {club.id}
                  </td>
                  <td className="py-[16px] px-[25px] text-center text-slate-500">
                    {club.name}
                  </td>
                  <td className="px-[8px] py-[16px] text-center text-slate-500">
                    {club.stadium}
                  </td>
                  <td className="px-[8px] py-[16px] text-center text-slate-500">
                    <span
                      style={{
                        backgroundColor: club.color,
                      }}
                      className="inline-block h-[15px] w-[15px] rounded-[44px]"
                    ></span>
                  </td>
                  <td className="px-[8px] py-[16px] text-center text-slate-500">
                    {club.win}
                  </td>
                  <td className="px-[8px] py-[16px] text-center text-slate-500">
                    {club.lose}
                  </td>
                  <td className="px-[8px] py-[16px] text-center text-slate-500">
                    {club.draw}
                  </td>
                  <td className="flex items-center justify-center px-[8px] py-[16px] text-center text-slate-500">
                    <div className="flex items-center gap-x-[16px] text-[#94A3B8]">
                      <Tooltip label="View">
                        <Link
                          to={`/clubs/${club.id}`}
                          className="flex h-[24px] w-[24px] items-center justify-center transition-colors duration-300 ease-in-out hover:text-[#0EA5E9]"
                        >
                          <EyeIcon className="h-auto w-full" />
                        </Link>
                      </Tooltip>
                      <Tooltip label="Edit">
                        <Link
                          to={`/clubs/${club.id}/edit`}
                          className="flex h-[24px] w-[24px] items-center justify-center transition-colors duration-300 ease-in-out hover:text-[#0EA5E9]"
                        >
                          <EditIcon className="h-auto w-full" />
                        </Link>
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
