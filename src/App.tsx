import { RouterProvider } from "react-router-dom";
import { Toast } from "./components/ui";
import { rootRouter } from "./routes";

export const App = () => {
  return (
    <>
      <RouterProvider router={rootRouter} />
      <Toast />
    </>
  );
};
