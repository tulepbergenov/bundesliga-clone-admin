import { useEditArticle } from "@/api/hooks";
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
import { IArticle, IArticleFormData } from "@/interfaces";
import { articleSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";

export const EditArticle = () => {
  const data: any = useLoaderData();
  const article: IArticle = data.data.data;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IArticleFormData>({
    resolver: zodResolver(articleSchema),
  });

  const navigate = useNavigate();

  const { mutate, isLoading } = useEditArticle(article.id);

  const onSubmit = (data: IArticleFormData) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/news");
      },
    });
  };

  return (
    <>
      <Heading className="mb-[12px]" subHeading={article.title}>
        News
      </Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormBody>
          <FormGroup>
            <Label required>Title</Label>
            <FormInputField>
              <Input
                type="text"
                defaultValue={article.title}
                {...register("title")}
              />
              <ErrorMessage error={errors.title} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label required>Description</Label>
            <FormInputField>
              <Input
                type="text"
                defaultValue={article.short_description}
                {...register("short_description")}
              />
              <ErrorMessage error={errors.short_description} />
            </FormInputField>
          </FormGroup>
          <FormGroup>
            <Label required>Body</Label>
            <FormInputField>
              <Textarea
                defaultValue={article.long_description}
                {...register("long_description")}
              />
              <ErrorMessage error={errors.long_description} />
            </FormInputField>
          </FormGroup>
        </FormBody>
        <FormButtonGroup>
          <Link to="/news" apperience="backLink">
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
