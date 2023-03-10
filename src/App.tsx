import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Toast } from "./components/ui";
import { useTheme } from "./hooks";
import { rootRouter } from "./routes";
import { applyThemePreference } from "./store";

export const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);

  return (
    <>
      <RouterProvider router={rootRouter} />
      <Toast />
    </>
  );
};
