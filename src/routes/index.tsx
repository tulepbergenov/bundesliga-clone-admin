import { AppLayout } from "@/layouts";
import {
  AddClub,
  Club,
  clubLoader,
  Clubs,
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
