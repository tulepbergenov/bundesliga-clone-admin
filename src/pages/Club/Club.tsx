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
} from "@/components";
import { IClub } from "@/interfaces";
import { useLoaderData } from "react-router-dom";

export const Club = () => {
  const data: any = useLoaderData();
  const club: IClub = data.data.data;

  return (
    <>
      <Heading className="mb-[12px]" subHeading={club.name}>
        Club
      </Heading>
      <Form>
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
    </>
  );
};
