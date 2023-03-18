import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Toast } from "./components";
import { useTheme } from "./hooks";
import { router } from "./routes";
import { applyThemePreference } from "./store";

export const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);

  return (
    <>
      <RouterProvider router={router} />
      <Toast />
    </>
  );
};
