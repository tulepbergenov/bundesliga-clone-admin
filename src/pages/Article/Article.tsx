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
import { IArticle } from "@/interfaces";
import { useLoaderData } from "react-router-dom";

export const Article = () => {
  const data: any = useLoaderData();
  const article: IArticle = data.data.data;

  return (
    <>
      <Heading className="mb-[12px]" subHeading={article.title}>
        News
      </Heading>
      <Form>
        <FormBody>
          <FormGroup>
            <Label required>Title</Label>
            <FormInputField>
              <Input type="text" disabled value={article.title} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label required>Description</Label>
            <FormInputField>
              <Input type="text" disabled value={article.short_description} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label required>Body</Label>
            <FormInputField>
              <Textarea disabled value={article.long_description} />
            </FormInputField>
          </FormGroup>
        </FormBody>
        <FormButtonGroup>
          <Link to="/news" apperience="backLink">
            Cancel
          </Link>
        </FormButtonGroup>
      </Form>
    </>
  );
};
