import { clubService } from "@/api/services";
import { AppLayout } from "@/layouts";
import {
  AddClub,
  Club,
  Clubs,
  Footballers,
  Home,
  Login,
  News,
  PageNotFound,
} from "@/pages";
import { QueryClient } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/clubs",
        element: <Clubs />,
      },
      {
        path: "/clubs/add",
        element: <AddClub />,
      },
      {
        path: "/clubs/:clubId",
        element: <Club />,
        loader: async ({ params }: { params: any }) => {
          const contactDetailQuery = (id: number) => ({
            queryKey: ["clubs", id],
            queryFn: async () => clubService.getClub(id),
          });

          const query = contactDetailQuery(params.clubId);

          return (
            queryClient.getQueryData(query.queryKey) ??
            (await queryClient.fetchQuery(query))
          );
        },
        errorElement: <PageNotFound />,
      },
      {
        path: "/footballers",
        element: <Footballers />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/404",
        element: <PageNotFound />,
      },
      {
        path: "/*",
        element: <PageNotFound />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
