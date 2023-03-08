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
import { createBrowserRouter } from "react-router-dom";

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
