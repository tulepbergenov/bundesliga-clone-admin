import { useAddClub } from "@/api/hooks";
import {
  Button,
  ButtonGroup,
  ColorPicker,
  ErrorMessage,
  Fieldset,
  Form,
  Heading,
  Input,
  InputDivider,
  InputField,
  Label,
  Link,
  Spinner,
} from "@/components";
import { IClubData } from "@/interfaces";
import { clubFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const AddClub = () => {
  const { mutate, isLoading } = useAddClub();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClubData>({
    resolver: zodResolver(clubFormSchema),
  });

  const onSubmit = (data: IClubData) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/clubs");
      },
    });
  };

  return (
    <>
      <Heading className="mb-[12px]">Add Club</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset>
          <InputDivider>
            <Label required>Name</Label>
            <InputField>
              <Input type="text" {...register("name")} />
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </InputField>
          </InputDivider>
          <InputDivider>
            <Label required>Stadium</Label>
            <InputField>
              <Input type="text" {...register("stadium")} />
              {errors.short_name && (
                <ErrorMessage>{errors.short_name.message}</ErrorMessage>
              )}
            </InputField>
          </InputDivider>
          <InputDivider>
            <Label required>Short name</Label>
            <InputField>
              <Input type="text" {...register("short_name")} />
              {errors.stadium && (
                <ErrorMessage>{errors.stadium.message}</ErrorMessage>
              )}
            </InputField>
          </InputDivider>
          <InputDivider>
            <Label required>Color</Label>
            <ColorPicker {...register("color")} />
          </InputDivider>
        </Fieldset>
        <ButtonGroup itemPosition="end">
          <Link
            to="/clubs"
            className="inline-block text-[14px] font-extrabold leading-[19px] text-[#94A3B8]"
          >
            Cancel
          </Link>
          <Button type="submit">
            {isLoading ? <Spinner className="h-5 w-5 text-white" /> : "Add"}
          </Button>
        </ButtonGroup>
      </Form>
    </>
  );
};
