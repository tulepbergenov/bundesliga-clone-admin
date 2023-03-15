import { articleService, clubService, footballerService } from "@/api/services";
import { AppLayout } from "@/layouts";
import {
  AddArticle,
  AddClub,
  Article,
  Articles,
  Club,
  Clubs,
  EditArticle,
  EditClub,
  Footballer,
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
        path: "/clubs/:clubId/edit",
        element: <EditClub />,
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
        path: "/footballers/:footballerId",
        element: <Footballer />,
        loader: async ({ params }: { params: any }) => {
          const contactDetailQuery = (id: number) => ({
            queryKey: ["footballers", id],
            queryFn: async () => footballerService.getFootballer(id),
          });

          const query = contactDetailQuery(params.footballerId);

          return (
            queryClient.getQueryData(query.queryKey) ??
            (await queryClient.fetchQuery(query))
          );
        },
        errorElement: <PageNotFound />,
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
        path: "/news/:articleId/edit",
        element: <EditArticle />,
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
