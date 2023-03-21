import { useAddArticle } from "@/api/hooks";
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
import { IArticleFormData } from "@/interfaces";
import { articleSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const AddArticle = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IArticleFormData>({
    resolver: zodResolver(articleSchema),
  });

  const navigate = useNavigate();

  const { mutate, isLoading } = useAddArticle();

  const onSubmit = (data: IArticleFormData) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/news");
      },
    });
  };

  return (
    <>
      <Heading className="mb-[12px]">Add News</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormBody>
          <FormGroup>
            <Label required>Title</Label>
            <FormInputField>
              <Input type="text" {...register("title")} />
              <ErrorMessage error={errors.title} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label required>Description</Label>
            <FormInputField>
              <Input type="text" {...register("short_description")} />
              <ErrorMessage error={errors.short_description} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label required>Body</Label>
            <FormInputField>
              <Textarea {...register("long_description")} />
              <ErrorMessage error={errors.long_description} />
            </FormInputField>
          </FormGroup>
        </FormBody>
        <FormButtonGroup>
          <Link to="/news" apperience="backLink">
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
