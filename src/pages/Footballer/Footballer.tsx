import { Heading } from "@/components/new-ui";
import { IFootballer } from "@/interfaces";
import { useLoaderData } from "react-router-dom";

export const Footballer = () => {
  const data: any = useLoaderData();
  const footballer: IFootballer = data.data.data;

  return (
    <>
      <Heading subHeading={footballer.name} className="mb-[12px]">
        Footballers
      </Heading>
    </>
  );
};
