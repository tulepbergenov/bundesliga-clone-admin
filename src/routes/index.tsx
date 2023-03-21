import { AppLayout } from "@/layouts";
import {
  AddArticle,
  AddClub,
  AddFootballer,
  Article,
  articleLoader,
  Articles,
  Club,
  clubLoader,
  Clubs,
  EditArticle,
  EditFootballer,
  Footballer,
  footballerLoader,
  Footballers,
  Home,
  Login,
  PageNotFound,
} from "@/pages";
import { EditClub } from "@/pages/EditClub";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/home",
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
        loader: clubLoader,
        errorElement: <PageNotFound />,
      },
      {
        path: "/clubs/:clubId/edit",
        element: <EditClub />,
        loader: clubLoader,
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
        loader: articleLoader,
        errorElement: <PageNotFound />,
      },
      {
        path: "/news/:articleId/edit",
        element: <EditArticle />,
        loader: articleLoader,
        errorElement: <PageNotFound />,
      },
      {
        path: "/footballers",
        element: <Footballers />,
      },
      {
        path: "/footballers/add",
        element: <AddFootballer />,
      },
      {
        path: "/footballers/:footballerId",
        element: <Footballer />,
        loader: footballerLoader,
        errorElement: <PageNotFound />,
      },
      {
        path: "/footballers/:footballerId/edit",
        element: <EditFootballer />,
        loader: footballerLoader,
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
