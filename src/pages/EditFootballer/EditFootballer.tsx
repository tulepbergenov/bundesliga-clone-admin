import { Heading } from "@/components";
import { IFootballer } from "@/interfaces";
import { useLoaderData } from "react-router-dom";

export const EditFootballer = () => {
  const data: any = useLoaderData();
  const footballer: IFootballer = data.data.data;

  return (
    <>
      <Heading subHeading={footballer.name} className="mb-[12px]">
        Footballer
      </Heading>
    </>
  );
};