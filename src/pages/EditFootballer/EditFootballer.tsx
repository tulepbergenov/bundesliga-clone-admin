import { Form, Heading } from "@/components";
import { IClub, IEditFootballerFormData, IFootballer } from "@/interfaces";
import { editFootballerSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

export const EditFootballer = () => {
  const data: any = useLoaderData();
  const footballer: IFootballer = data.footballer;
  const clubs: IClub[] = data.clubs;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(editFootballerSchema),
  });

  const onSubmit = (data: IEditFootballerFormData) => {
    const submitData = data;

    console.log(submitData);
  };

  return (
    <>
      <Heading subHeading={footballer.name} className="mb-[12px]">
        Footballer
      </Heading>
      <Form onSubmit={handleSubmit(onSubmit)}></Form>
    </>
  );
};
