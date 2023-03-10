import { Heading } from "@/components";
import { useLoaderData } from "react-router-dom";

export const Article = () => {
  const data: any = useLoaderData();

  return (
    <>
      <Heading as="h1" className="mb-[12px]">
        {data && data.data.data.title}
      </Heading>
    </>
  );
};
