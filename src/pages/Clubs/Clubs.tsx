import { useGetClubs } from "@/api/hooks";
import { BinIcon, EditIcon, EyeIcon } from "@/assets/imgs/icons";
import {
  Heading,
  Link,
  PageSpinner,
  Search,
  Table,
  TableController,
  TableWrapper,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@/components";
import { usePagination, useSearch } from "@/hooks";

export const Clubs = () => {
  const { data, isLoading } = useGetClubs();

  const { items, searchValue, handleSearchValue } = useSearch(data);

  const {
    itemCount,
    itemCrop: clubCrop,
    onNextPage,
    onPrevPage,
    totalPages,
    currentPage,
    startIndex,
    endIndex,
  } = usePagination(items);

  return (
    <>
      <Heading className="mb-[12px]">Clubs</Heading>
      <div className="mb-[24px] flex items-center justify-between">
        <Search value={searchValue} onChange={handleSearchValue} />
        <Link to="/clubs/add" apperience="button">
          Add Club
        </Link>
      </div>
      <PageSpinner isLoading={isLoading} />
      {clubCrop.length > 0 && (
        <TableWrapper>
          <Table>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Stadium</Th>
                <Th>Color</Th>
                <Th>Win</Th>
                <Th>Draw</Th>
                <Th>Lose</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {clubCrop.map((club) => (
                <Tr key={club.id}>
                  <Td className="font-extrabold text-[#0EA5E9]">{club.id}</Td>
                  <Td>{club.name}</Td>
                  <Td>{club.stadium}</Td>
                  <Td>
                    <div
                      style={{ backgroundColor: club.color }}
                      className="inline-block h-[16px] w-[16px] rounded-full align-sub"
                    ></div>
                  </Td>
                  <Td>{club.win}</Td>
                  <Td>{club.draw}</Td>
                  <Td>{club.lose}</Td>
                  <Td>
                    <div className="flex items-center gap-x-[16px] text-[#94A3B8]">
                      <Tooltip label="View">
                        <Link
                          to={`/clubs/${club.id}`}
                          className="inline-block h-[24px] w-[24px] transition-colors duration-300 ease-in-out hover:text-[#0EA5E9]"
                        >
                          <EyeIcon className="h-auto w-full" />
                        </Link>
                      </Tooltip>
                      <Tooltip label="Edit">
                        <Link
                          to={`/clubs/${club.id}/edit`}
                          className="inline-block h-[24px] w-[24px] transition-colors duration-300 ease-in-out hover:text-[#22C55E]"
                        >
                          <EditIcon className="h-auto w-full" />
                        </Link>
                      </Tooltip>
                      <Tooltip label="Remove">
                        <button
                          type="button"
                          className="inline-block h-[24px] w-[24px] transition-colors duration-300 ease-in-out hover:text-[#EF4444]"
                        >
                          <BinIcon className="h-auto w-full" />
                        </button>
                      </Tooltip>
                    </div>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <TableController
            currentPage={currentPage}
            totalPages={totalPages}
            itemCount={itemCount}
            endIndex={endIndex}
            startIndex={startIndex}
            onPrevPage={onPrevPage}
            onNextPage={onNextPage}
          />
        </TableWrapper>
      )}
    </>
  );
};
