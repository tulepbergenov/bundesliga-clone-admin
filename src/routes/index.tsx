import { AppLayout } from "@/layouts";
import { AddClub, Club, Clubs, Home, Login, PageNotFound } from "@/pages";
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
      },
      {
        path: "/clubs/:clubId/edit",
        element: <Club />,
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
