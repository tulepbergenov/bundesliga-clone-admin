import { useEditClub, useGetFootballers } from "@/api/hooks";
import { BinIcon, EditIcon, EyeIcon } from "@/assets/imgs/icons";
import {
  AlertConfirmDelete,
  Button,
  ColorPicker,
  ErrorMessage,
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
import { useAlertModal, usePagination, useSearch } from "@/hooks";
import { IClub, IEditClubFormData } from "@/interfaces";
import { editClubSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";

export const EditClub = () => {
  const data: any = useLoaderData();
  const club: IClub = data.data.data;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditClubFormData>({
    resolver: zodResolver(editClubSchema),
  });

  const { mutate, isLoading } = useEditClub(club.id);
  const navigate = useNavigate();

  const onSubmit = (data: IEditClubFormData) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/clubs");
      },
    });
  };

  const { data: footballerData, isLoading: isFootballersLoading } =
    useGetFootballers();

  const filterFootballers = footballerData?.data.data.filter(
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

  const { isOpen, onCloseAlert, onOpenAlert, selectedItemId } = useAlertModal();

  return (
    <>
      <Heading className="mb-[12px]" subHeading={club.name}>
        Club
      </Heading>
      <Form className="mb-8" onSubmit={handleSubmit(onSubmit)}>
        <FormBody>
          <FormGroup>
            <Label>Name</Label>
            <FormInputField>
              <Input
                type="text"
                defaultValue={club.name}
                {...register("name")}
              />
              <ErrorMessage error={errors.name} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Stadium</Label>
            <FormInputField>
              <Input
                type="text"
                defaultValue={club.stadium}
                {...register("stadium")}
              />
              <ErrorMessage error={errors.stadium} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Short name</Label>
            <FormInputField>
              <Input
                type="text"
                defaultValue={club.short_name}
                {...register("short_name")}
              />
              <ErrorMessage error={errors.short_name} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Color</Label>
            <FormInputField>
              <ColorPicker defaultValue={club.color} {...register("color")} />
              <ErrorMessage error={errors.color} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Win</Label>
            <FormInputField>
              <Input
                type="number"
                defaultValue={club.win}
                {...register("win", {
                  valueAsNumber: true,
                })}
              />
              <ErrorMessage error={errors.win} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Draw</Label>
            <FormInputField>
              <Input
                type="number"
                defaultValue={club.draw}
                {...register("draw", {
                  valueAsNumber: true,
                })}
              />
              <ErrorMessage error={errors.draw} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Lose</Label>
            <FormInputField>
              <Input
                type="number"
                defaultValue={club.lose}
                {...register("lose", {
                  valueAsNumber: true,
                })}
              />
              <ErrorMessage error={errors.lose} />
            </FormInputField>
          </FormGroup>
        </FormBody>
        <FormButtonGroup>
          <Link to="/clubs" apperience="backLink">
            Cancel
          </Link>
          <Button type="submit" isLoading={isLoading}>
            Save
          </Button>
        </FormButtonGroup>
      </Form>
      <PageSpinner isLoading={isFootballersLoading} />
      {footballerCrop.length > 0 && (
        <>
          <div className="mb-[24px] flex items-center justify-between">
            <Search onChange={onSeachValue} />
            <Link to="/footballers/add" apperience="button">
              Add Footballer
            </Link>
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
        </>
      )}
      <AlertConfirmDelete
        nameItems="footballers"
        isOpen={isOpen}
        onCloseModal={onCloseAlert}
        selectedItemId={selectedItemId}
      />
    </>
  );
};
