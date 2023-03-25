import { useEditFootballer } from "@/api/hooks";
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
import { IClub, IEditFootballerFormData, IFootballer } from "@/interfaces";
import { editFootballerSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";

export const EditFootballer = () => {
  const data: any = useLoaderData();
  const footballer: IFootballer = data.footballer;
  const clubs: IClub[] = data.clubs;

  const { mutate, isLoading } = useEditFootballer(footballer.id);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<IEditFootballerFormData>({
    resolver: zodResolver(editFootballerSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: IEditFootballerFormData) => {
    const submitData: any = data;
    submitData.age = submitData.age.toString();
    submitData.club_id = submitData.club_id.toString();
    submitData.height = submitData.height.toString();
    submitData.weight = submitData.weight.toString();
    submitData.appearances = submitData.appearances.toString();
    submitData.assists = submitData.assists.toString();
    submitData.ball_actions = submitData.ball_actions.toString();
    submitData.distance = submitData.distance.toString();
    submitData.goals = submitData.goals.toString();
    submitData.penalties = submitData.penalties.toString();

    mutate(submitData, {
      onSuccess: () => {
        navigate("/footballers");
      },
    });
  };

  return (
    <>
      <Heading subHeading={footballer.name} className="mb-[12px]">
        Footballer
      </Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormBody>
          <FormGroup>
            <Label>Name</Label>
            <FormInputField>
              <Input
                type="text"
                {...register("name")}
                defaultValue={footballer.name}
              />
              <ErrorMessage error={errors.name} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Club</Label>
            <FormInputField>
              <Controller
                control={control}
                name="club_id"
                defaultValue={footballer.club_id}
                render={({ field: { value, onChange } }) => (
                  <select value={value} onChange={onChange}>
                    {clubs.map((club) => (
                      <option key={club.id} value={club.id}>
                        {club.name}
                      </option>
                    ))}
                  </select>
                )}
              />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Position</Label>
            <FormInputField>
              <Input
                type="text"
                {...register("position")}
                defaultValue={footballer.position}
              />
              <ErrorMessage error={errors.position} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Age</Label>
            <FormInputField>
              <Input
                type="number"
                defaultValue={footballer.age}
                {...register("age", {
                  valueAsNumber: true,
                })}
              />
              <ErrorMessage error={errors.age} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Nationality</Label>
            <FormInputField>
              <Input
                type="text"
                defaultValue={footballer.nationality}
                {...register("nationality")}
              />
              <ErrorMessage error={errors.nationality} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Height</Label>
            <FormInputField>
              <Input
                type="number"
                defaultValue={footballer.height}
                {...register("height", {
                  valueAsNumber: true,
                })}
              />
              <ErrorMessage error={errors.height} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Weight</Label>
            <FormInputField>
              <Input
                type="number"
                defaultValue={footballer.weight}
                {...register("weight", {
                  valueAsNumber: true,
                })}
              />
              <ErrorMessage error={errors.weight} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Appearances</Label>
            <FormInputField>
              <Input
                type="number"
                defaultValue={footballer.appearances}
                {...register("appearances", {
                  valueAsNumber: true,
                })}
              />
              <ErrorMessage error={errors.appearances} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Goals</Label>
            <FormInputField>
              <Input
                type="number"
                defaultValue={footballer.goals}
                {...register("goals", {
                  valueAsNumber: true,
                })}
              />
              <ErrorMessage error={errors.goals} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Assists</Label>
            <FormInputField>
              <Input
                type="number"
                defaultValue={footballer.assists}
                {...register("assists", {
                  valueAsNumber: true,
                })}
              />
              <ErrorMessage error={errors.assists} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Ball actions</Label>
            <FormInputField>
              <Input
                type="number"
                defaultValue={footballer.ball_actions}
                {...register("ball_actions", {
                  valueAsNumber: true,
                })}
              />
              <ErrorMessage error={errors.ball_actions} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Distance</Label>
            <FormInputField>
              <Input
                type="number"
                defaultValue={footballer.distance}
                {...register("distance", {
                  valueAsNumber: true,
                })}
              />
              <ErrorMessage error={errors.distance} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Penalties</Label>
            <FormInputField>
              <Input
                type="number"
                defaultValue={footballer.penalties}
                {...register("penalties", {
                  valueAsNumber: true,
                })}
              />
              <ErrorMessage error={errors.penalties} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Player history</Label>
            <FormInputField>
              <Textarea
                defaultValue={footballer.player_history}
                {...register("player_history")}
              />
              <ErrorMessage error={errors.player_history} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Current season</Label>
            <FormInputField>
              <Textarea
                defaultValue={footballer.current_season}
                {...register("current_season")}
              />
              <ErrorMessage error={errors.current_season} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Last game</Label>
            <FormInputField>
              <Textarea
                defaultValue={footballer.last_game}
                {...register("last_game")}
              />
              <ErrorMessage error={errors.last_game} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Career records</Label>
            <FormInputField>
              <Textarea
                defaultValue={footballer.career_records}
                {...register("career_records")}
              />
              <ErrorMessage error={errors.career_records} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Int appointments</Label>
            <FormInputField>
              <Textarea
                defaultValue={footballer.int_appointments}
                {...register("int_appointments")}
              />
              <ErrorMessage error={errors.int_appointments} />
            </FormInputField>
          </FormGroup>
        </FormBody>
        <FormButtonGroup>
          <Link to="/footballers" apperience="backLink">
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
