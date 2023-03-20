import { useAddClub } from "@/api/hooks";
import {
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
} from "@/components";
import { IClubFormData } from "@/interfaces";
import { clubSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const AddClub = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClubFormData>({
    resolver: zodResolver(clubSchema),
  });

  const navigate = useNavigate();

  const { mutate, isLoading } = useAddClub();

  const onSubmit = (data: IClubFormData) => {
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
        <FormBody>
          <FormGroup>
            <Label required>Name</Label>
            <FormInputField>
              <Input type="text" {...register("name")} />
              <ErrorMessage error={errors.name} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label required>Stadium</Label>
            <FormInputField>
              <Input type="text" {...register("stadium")} />
              <ErrorMessage error={errors.stadium} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label required>Short name</Label>
            <FormInputField>
              <Input type="text" {...register("short_name")} />
              <ErrorMessage error={errors.short_name} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label required>Color</Label>
            <FormInputField>
              <ColorPicker {...register("color")} />
              <ErrorMessage error={errors.color} />
            </FormInputField>
          </FormGroup>
        </FormBody>
        <FormButtonGroup>
          <Link to="/clubs" apperience="backLink">
            Cancel
          </Link>
          <Button type="submit" isLoading={isLoading}>
            Add
          </Button>
        </FormButtonGroup>
      </Form>
    </>
  );
};
