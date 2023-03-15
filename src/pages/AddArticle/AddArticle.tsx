import { useAddArticle } from "@/api/hooks";
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
import { useNavigate } from "react-router-dom";

const schema = articleFormSchema;

export const AddArticle = () => {
  const { mutate, isLoading } = useAddArticle();
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
      <Heading className="mb-[12px]">Add News</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormBody className="mb-[24px]">
          <FormGroup>
            <Label required>Title</Label>
            <div className="w-full">
              <Input type="text" {...register("title")} />
              <ErrorMessage error={errors.title} />
            </div>
          </FormGroup>
          <FormGroup>
            <Label required>Description</Label>
            <div className="w-full">
              <Input type="text" {...register("short_description")} />
              <ErrorMessage error={errors.short_description} />
            </div>
          </FormGroup>
          <FormGroup>
            <Label required>Body</Label>
            <div className="w-full">
              <Textarea {...register("long_description")} />
              <ErrorMessage error={errors.long_description} />
            </div>
          </FormGroup>
        </FormBody>
        <div className="flex items-center justify-end gap-x-[24px]">
          <Link to="/news" apperience="backLink">
            Cancel
          </Link>
          <Button type="submit">
            {isLoading ? <Spinner className="h-5 w-5 text-white" /> : "Add"}
          </Button>
        </div>
      </form>
    </>
  );
};
