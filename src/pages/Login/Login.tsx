import { AuthService } from "@/api/services";
import { EyeCloseIcon, EyeOpenIcon } from "@/assets/imgs/icons";
import { Spinner } from "@/components/ui";
import { ILoginFormData } from "@/interfaces";
import { loginFormSchema } from "@/schemas";
import { useUserStore } from "@/store";
import { setToken } from "@/utilities";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const schema = loginFormSchema;

export const Login = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useNavigate();
  const store = useUserStore();

  const handleTogglePasswordHidden = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: ILoginFormData) => {
    setIsLoading(true);

    AuthService.loginUser(data)
      .then((res) => {
        setToken(res.data.token);
        store.setAuthUser(res.data.data);
        store.setRequestLoading(true);
        router("/");
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(err.response.data.message);
      });
  };

  return (
    <main>
      <section className="flex h-screen w-screen items-center justify-center">
        <div className="mx-auto w-[350px] -translate-y-[50px] px-[25px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center"
          >
            <Link
              to="/"
              className="mb-[20px] text-3xl font-extrabold text-[#475569]"
            >
              Bundesliga
            </Link>
            <h1 className="sr-only">Bundesliga</h1>
            <fieldset className="mb-[20px] flex w-full flex-col">
              <label htmlFor="email" className="mb-[5px] font-semibold">
                Email
              </label>
              <div className="mb-[15px]">
                <input
                  {...register("email")}
                  id="email"
                  type="text"
                  className="inline-block w-full rounded-[5px] border border-[#E0F2FE] py-[10px] px-[20px] text-[#475569] shadow"
                />
                {errors.email && (
                  <p className="mt-[3px] text-xs text-[#DC2626]">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <label htmlFor="password" className="mb-[5px] font-semibold">
                Password
              </label>
              <div className="w-full">
                <div className="relative w-full">
                  <input
                    {...register("password")}
                    id="password"
                    type={isPasswordHidden ? "password" : "text"}
                    className="inline-block w-full rounded-[5px] border border-[#E0F2FE] py-[10px] pr-[60px] pl-[20px] text-[#475569] shadow"
                  />
                  <button
                    onClick={handleTogglePasswordHidden}
                    type="button"
                    className="absolute top-2/4 right-[20px] flex h-[25px] w-[25px] -translate-y-2/4 items-center justify-center"
                  >
                    {isPasswordHidden ? (
                      <EyeOpenIcon className="h-auto w-[18px]" />
                    ) : (
                      <EyeCloseIcon className="h-auto w-[18px]" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-[3px] text-xs text-[#DC2626]">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </fieldset>
            <button
              type="submit"
              className="flex min-w-[67px] items-center justify-center rounded-[4px] bg-[#0EA5E9] py-[8px] px-[16px] text-[14px] font-extrabold leading-[19px] text-white shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
            >
              {isLoading ? <Spinner className="h-5 w-5" /> : "Login"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};
