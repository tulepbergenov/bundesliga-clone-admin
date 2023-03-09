import { useLoaderData } from "react-router-dom";

export const Club = () => {
  const data: any = useLoaderData();

  console.log(data);

  return <h1>{data.data.data.name}</h1>;
};
