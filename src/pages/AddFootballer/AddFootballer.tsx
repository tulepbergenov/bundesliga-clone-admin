import { useAddFootballer } from "@/api/hooks";
import {
  Button,
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
  Textarea,
} from "@/components";
import { IClub, IFootballerFormData } from "@/interfaces";
import { footballerSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";

export const AddFootballer = () => {
  const data: any = useLoaderData();
  const clubs: IClub[] = data.data.data;
  const { mutate, isLoading } = useAddFootballer();

  const {
    formState: { errors },
    register,
    control,
    handleSubmit,
  } = useForm<IFootballerFormData>({
    resolver: zodResolver(footballerSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: IFootballerFormData) => {
    const submitData: any = data;
    submitData.age = submitData.age.toString();
    submitData.club_id = submitData.club_id.toString();
    submitData.height = submitData.height.toString();
    submitData.weight = submitData.weight.toString();

    mutate(submitData, {
      onSuccess: () => {
        navigate("/footballers");
      },
    });
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <>
      <Heading className="mb-[12px]">Add Footballer</Heading>
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
            <Label required>Club</Label>
            <FormInputField>
              <Controller
                control={control}
                name="club_id"
                defaultValue={clubs[0].id}
                render={({ field: { onChange, value } }) => (
                  <select value={value} onChange={onChange}>
                    {clubs.map((club) => (
                      <option value={club.id} key={club.id}>
                        {club.name}
                      </option>
                    ))}
                  </select>
                )}
              />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label required>Position</Label>
            <FormInputField>
              <Input type="text" {...register("position")} />
              <ErrorMessage error={errors.position} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label required>Age</Label>
            <FormInputField>
              <Input
                type="number"
                {...register("age", {
                  valueAsNumber: true,
                })}
              />
              <ErrorMessage error={errors.age} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label required>Nationality</Label>
            <FormInputField>
              <Input type="text" {...register("nationality")} />
              <ErrorMessage error={errors.nationality} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label required>Height</Label>
            <FormInputField>
              <Input
                type="number"
                {...register("height", {
                  valueAsNumber: true,
                })}
              />
              <ErrorMessage error={errors.height} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label required>Weight</Label>
            <FormInputField>
              <Input
                type="number"
                {...register("weight", {
                  valueAsNumber: true,
                })}
              />
              <ErrorMessage error={errors.weight} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label required>Player history</Label>
            <FormInputField>
              <Textarea {...register("player_history")} />
              <ErrorMessage error={errors.player_history} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label required>Current season</Label>
            <FormInputField>
              <Textarea {...register("current_season")} />
              <ErrorMessage error={errors.current_season} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label required>Last game</Label>
            <FormInputField>
              <Textarea {...register("last_game")} />
              <ErrorMessage error={errors.last_game} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label required>Career records</Label>
            <FormInputField>
              <Textarea {...register("career_records")} />
              <ErrorMessage error={errors.career_records} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label required>Int appointments</Label>
            <FormInputField>
              <Textarea {...register("int_appointments")} />
              <ErrorMessage error={errors.int_appointments} />
            </FormInputField>
          </FormGroup>
        </FormBody>
        <FormButtonGroup>
          <Link to="/footballers" apperience="backLink">
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
