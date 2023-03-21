import { useGetFootballers } from "@/api/hooks";
import { BinIcon, EditIcon, EyeIcon } from "@/assets/imgs/icons";
import {
  AlertConfirmDelete,
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
import { useAlertModal, usePagination, useSearch } from "@/hooks";

export const Footballers = () => {
  const { data, isLoading } = useGetFootballers();

  const { debSearchValue, onSeachValue, foundItems } = useSearch(
    data?.data.data
  );

  const {
    itemCount,
    itemCrop: footballerCrop,
    onNextPage,
    onPrevPage,
    totalPages,
    currentPage,
    startIndex,
    endIndex,
  } = usePagination(foundItems, debSearchValue);

  const { isOpen, onCloseAlert, onOpenAlert, selectedItemId } = useAlertModal();

  return (
    <>
      <Heading className="mb-[12px]">Footballers</Heading>
      <div className="mb-[24px] flex items-center justify-between">
        <Search onChange={onSeachValue} />
        <Link to="/footballers/add" apperience="button">
          Add Footballer
        </Link>
      </div>
      <PageSpinner isLoading={isLoading} />
      {footballerCrop.length > 0 && (
        <TableWrapper>
          <Table>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Age</Th>
                <Th>Position</Th>
                <Th>Goals</Th>
                <Th>Assists</Th>
                <Th>Penalties</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {footballerCrop.map((footballer) => (
                <Tr key={footballer.id}>
                  <Td className="font-extrabold text-[#0EA5E9]">
                    {footballer.id}
                  </Td>
                  <Td>{footballer.name}</Td>
                  <Td>{footballer.age}</Td>
                  <Td>{footballer.position}</Td>
                  <Td>{footballer.goals}</Td>
                  <Td>{footballer.assists}</Td>
                  <Td>{footballer.penalties}</Td>
                  <Td>
                    <div className="flex items-center justify-center gap-x-[16px] text-[#94A3B8]">
                      <Tooltip label="View">
                        <Link
                          to={`/footballers/${footballer.id}`}
                          className="inline-block h-[24px] w-[24px] transition-colors duration-300 ease-in-out hover:text-[#0EA5E9]"
                        >
                          <EyeIcon className="h-auto w-full" />
                        </Link>
                      </Tooltip>
                      <Tooltip label="Edit">
                        <Link
                          to={`/footballers/${footballer.id}/edit`}
                          className="inline-block h-[24px] w-[24px] transition-colors duration-300 ease-in-out hover:text-[#22C55E]"
                        >
                          <EditIcon className="h-auto w-full" />
                        </Link>
                      </Tooltip>
                      <Tooltip label="Delete">
                        <button
                          type="button"
                          onClick={() => onOpenAlert(footballer.id)}
                          className="inline-block h-[24px] w-[24px] transition-colors duration-300 ease-in-out hover:text-[#0EA5E9]"
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
      <AlertConfirmDelete
        nameItems="articles"
        isOpen={isOpen}
        onCloseModal={onCloseAlert}
        selectedItemId={selectedItemId}
      />
    </>
  );
};
