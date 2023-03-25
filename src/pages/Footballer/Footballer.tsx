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
  Textarea,
} from "@/components";
import { IClub, IFootballer } from "@/interfaces";
import { useLoaderData } from "react-router-dom";

export const Footballer = () => {
  const data: any = useLoaderData();
  const footballer: IFootballer = data.footballer;
  const clubs: IClub[] = data.clubs;

  const itemId = clubs.findIndex((club) => club.id === footballer.club_id);

  const clubName = clubs[itemId].name;

  return (
    <>
      <Heading subHeading={footballer.name} className="mb-[12px]">
        Footballer
      </Heading>
      <Form>
        <FormBody>
          <FormGroup>
            <Label>Name</Label>
            <FormInputField>
              <Input disabled type="text" value={footballer.name} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Club</Label>
            <FormInputField>
              <Input type="text" disabled value={clubName} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Position</Label>
            <FormInputField>
              <Input type="text" disabled value={footballer.position} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Age</Label>
            <FormInputField>
              <Input type="number" disabled value={footballer.age} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Nationality</Label>
            <FormInputField>
              <Input type="text" disabled value={footballer.nationality} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Height</Label>
            <FormInputField>
              <Input type="number" disabled value={footballer.height} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Weight</Label>
            <FormInputField>
              <Input type="number" disabled value={footballer.weight} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Appearances</Label>
            <FormInputField>
              <Input type="number" disabled value={footballer.appearances} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Goals</Label>
            <FormInputField>
              <Input type="number" disabled value={footballer.goals} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Assists</Label>
            <FormInputField>
              <Input type="number" disabled value={footballer.assists} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Ball actions</Label>
            <FormInputField>
              <Input type="number" disabled value={footballer.ball_actions} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Distance</Label>
            <FormInputField>
              <Input type="number" disabled value={footballer.distance} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Penalties</Label>
            <FormInputField>
              <Input type="number" disabled value={footballer.penalties} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Player history</Label>
            <FormInputField>
              <Textarea disabled value={footballer.player_history} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Current season</Label>
            <FormInputField>
              <Textarea disabled value={footballer.current_season} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Last game</Label>
            <FormInputField>
              <Textarea disabled value={footballer.last_game} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Career records</Label>
            <FormInputField>
              <Textarea disabled value={footballer.career_records} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label>Int appointments</Label>
            <FormInputField>
              <Textarea disabled value={footballer.int_appointments} />
            </FormInputField>
          </FormGroup>
        </FormBody>
        <FormButtonGroup>
          <Link to="/footballers" apperience="backLink">
            Cancel
          </Link>
        </FormButtonGroup>
      </Form>
    </>
  );
};
