import { getToken } from "@/utils";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const withAuth = <T extends Record<string, unknown>>(Component: FC) => {
  const MiddlewareComponent = (props: T): JSX.Element | null => {
    const [auth, setAuth] = useState(false);
    const router = useNavigate();

    useEffect(() => {
      const token = getToken();

      if (!token) {
        router("/login");
        return;
      }

      setAuth(true);
    }, [router]);

    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };

  return MiddlewareComponent;
};
