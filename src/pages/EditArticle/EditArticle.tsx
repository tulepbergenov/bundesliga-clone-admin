import { useEditArticle } from "@/api/hooks";
import { Spinner } from "@/components";
import {
  Button,
  ErrorMessage,
  FormBody,
  FormGroup,
  Heading,
  Input,
  Label,
  Link,
  Textarea,
} from "@/components/new-ui";
import { IFormArticle } from "@/interfaces";
import { articleFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";

const schema = articleFormSchema;

interface IArticle {
  id: number;
  title: string;
  short_description: string;
  long_description: string;
}

export const EditArticle = () => {
  const data: any = useLoaderData();
  const article: IArticle = data.data.data;
  const { mutate, isLoading } = useEditArticle(article.id);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormArticle>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: IFormArticle) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/news");
      },
    });
  };

  return (
    <>
      <Heading subHeading={article.title} className="mb-[12px]">
        Add News
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormBody className="mb-[24px]">
          <FormGroup>
            <Label required>Title</Label>
            <div className="w-full">
              <Input
                type="text"
                defaultValue={article.title}
                {...register("title")}
              />
              <ErrorMessage error={errors.title} />
            </div>
          </FormGroup>
          <FormGroup>
            <Label required>Description</Label>
            <div className="w-full">
              <Input
                type="text"
                defaultValue={article.short_description}
                {...register("short_description")}
              />
              <ErrorMessage error={errors.short_description} />
            </div>
          </FormGroup>
          <FormGroup>
            <Label required>Body</Label>
            <div className="w-full">
              <Textarea
                defaultValue={article.long_description}
                {...register("long_description")}
              />
              <ErrorMessage error={errors.long_description} />
            </div>
          </FormGroup>
        </FormBody>
        <div className="flex items-center justify-end gap-x-[24px]">
          <Link to="/news" apperience="backLink">
            Cancel
          </Link>
          <Button type="submit">
            {isLoading ? <Spinner className="h-5 w-5 text-white" /> : "Save"}
          </Button>
        </div>
      </form>
    </>
  );
};
