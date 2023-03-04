import { RouterProvider } from "react-router-dom";
import { Toast } from "./components/ui";
import { router } from "./routes";

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toast />
    </>
  );
};
