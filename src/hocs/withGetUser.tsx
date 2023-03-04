import { AuthService } from "@/api/services";
import { useUserStore } from "@/store";
import { getToken } from "@/utilities";
import { FC, useEffect } from "react";
import { toast } from "react-toastify";

export const withGetUser = <T extends Record<string, unknown>>(
  Component: FC
) => {
  const MiddlwareComponent = (props: T) => {
    const store = useUserStore();

    useEffect(() => {
      const token = getToken();

      if (token && store.requestLoading !== true) {
        AuthService.getUser()
          .then((res) => {
            store.setAuthUser(res.data.data);
            store.setRequestLoading(true);
          })
          .catch((err) => toast.error(err.response.data.message));
      }
    }, []);

    return <Component {...props} />;
  };

  return MiddlwareComponent;
};
