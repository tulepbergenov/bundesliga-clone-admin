import { useEditClub } from "@/api/hooks";
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

  return (
    <>
      <Heading className="mb-[12px]" subHeading={club.name}>
        Club
      </Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
    </>
  );
};
