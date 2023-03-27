import { useGetFootballers } from "@/api/hooks";
import { EyeIcon } from "@/assets/imgs/icons";
import {
  Form,
  FormBody,
  FormButtonGroup,
  FormGroup,
  FormInputField,
  Heading,
  Input,
  Label,
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
import { IClub } from "@/interfaces";
import { useLoaderData } from "react-router-dom";

export const Club = () => {
  const data: any = useLoaderData();
  const club: IClub = data.data.data;

  const { data: FootballerData, isLoading } = useGetFootballers();

  const filterFootballers = FootballerData?.data.data.filter(
    (footballer) => footballer.club_id === club.id
  );

  const { debSearchValue, onSeachValue, foundItems } =
    useSearch(filterFootballers);

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

  return (
    <>
      <Heading className="mb-[12px]" subHeading={club.name}>
        Club
      </Heading>
      <Form className="mb-6">
        <FormBody>
          <FormGroup>
            <Label>Name</Label>
            <FormInputField>
              <Input type="text" disabled value={club.name} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Stadium</Label>
            <FormInputField>
              <Input type="text" disabled value={club.stadium} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Short name</Label>
            <FormInputField>
              <Input type="text" disabled value={club.short_name} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Color</Label>
            <FormInputField>
              <Input
                type="text"
                disabled
                style={{
                  width: "36px",
                  backgroundColor: club.color,
                }}
              />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Win</Label>
            <FormInputField>
              <Input type="text" disabled value={club.win} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Draw</Label>
            <FormInputField>
              <Input type="text" disabled value={club.draw} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Lose</Label>
            <FormInputField>
              <Input type="text" disabled value={club.lose} />
            </FormInputField>
          </FormGroup>
        </FormBody>
        <FormButtonGroup>
          <Link to="/clubs" apperience="backLink">
            Cancel
          </Link>
        </FormButtonGroup>
      </Form>
      <PageSpinner isLoading={isLoading} />
      {footballerCrop.length > 0 && (
        <>
          <Heading className="mb-[12px]">Footballers</Heading>
          <div className="mb-[24px] flex items-center justify-between">
            <Search onChange={onSeachValue} />
          </div>
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
        </>
      )}
    </>
  );
};
