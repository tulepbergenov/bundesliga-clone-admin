import { articleService, clubService } from "@/api/services";
import { AppLayout } from "@/layouts";
import {
  AddArticle,
  AddClub,
  Article,
  Articles,
  Club,
  Clubs,
  Footballers,
  Home,
  Login,
  PageNotFound,
} from "@/pages";
import { QueryClient } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

export const rootRouter = createBrowserRouter([
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
        element: <Articles />,
      },
      {
        path: "/news/add",
        element: <AddArticle />,
      },
      {
        path: "/news/:articleId",
        element: <Article />,
        loader: async ({ params }: { params: any }) => {
          const articleDetailQuery = (id: number) => ({
            queryKey: ["articles", id],
            queryFn: async () => articleService.getArticle(id),
          });

          const query = articleDetailQuery(params.articleId);

          return (
            queryClient.getQueryData(query.queryKey) ??
            (await queryClient.fetchQuery(query))
          );
        },
        errorElement: <PageNotFound />,
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
