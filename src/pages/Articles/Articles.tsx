import { useGetArticles } from "@/api/hooks";
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

export const Articles = () => {
  const { data, isLoading } = useGetArticles();

  const { debSearchValue, onSeachValue, foundItems } = useSearch(
    data?.data.data,
    "title"
  );

  const {
    itemCount,
    itemCrop: articleCrop,
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
      <Heading className="mb-[12px]">News</Heading>
      <div className="mb-[24px] flex items-center justify-between">
        <Search onChange={onSeachValue} />
        <Link to="/news/add" apperience="button">
          Add News
        </Link>
      </div>
      <PageSpinner isLoading={isLoading} />
      {articleCrop.length > 0 && (
        <TableWrapper>
          <Table>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Title</Th>
                <Th>Description</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {articleCrop.map((article) => (
                <Tr key={article.id}>
                  <Td className="font-extrabold text-[#0EA5E9]">
                    {article.id}
                  </Td>
                  <Td>{article.title}</Td>
                  <Td>{article.short_description}</Td>
                  <Td>
                    <div className="flex items-center justify-center gap-x-[16px] text-[#94A3B8]">
                      <Tooltip label="View">
                        <Link
                          to={`/news/${article.id}`}
                          className="inline-block h-[24px] w-[24px] transition-colors duration-300 ease-in-out hover:text-[#0EA5E9]"
                        >
                          <EyeIcon className="h-auto w-full" />
                        </Link>
                      </Tooltip>
                      <Tooltip label="Edit">
                        <Link
                          to={`/news/${article.id}/edit`}
                          className="inline-block h-[24px] w-[24px] transition-colors duration-300 ease-in-out hover:text-[#22C55E]"
                        >
                          <EditIcon className="h-auto w-full" />
                        </Link>
                      </Tooltip>
                      <Tooltip label="Delete">
                        <button
                          type="button"
                          onClick={() => onOpenAlert(article.id)}
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
