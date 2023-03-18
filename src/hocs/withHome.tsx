import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const withHome = <T extends Record<string, unknown>>(Component: FC) => {
  const MiddlewareComponent = (props: T): JSX.Element | null => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      if (location.pathname === "/") {
        navigate("/home");
      }
    }, [location, navigate]);

    return <Component {...props} />;
  };

  return MiddlewareComponent;
};
