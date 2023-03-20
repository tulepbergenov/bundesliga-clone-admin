import { useLogin } from "@/api/hooks";
import { Button, ErrorMessage, Input, Label, Logo } from "@/components";
import { ILogin } from "@/interfaces";
import { loginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const Login = () => {
  const { mutate, isLoading } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: ILogin) => {
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container flex max-w-[400px] flex-col items-center py-[170px]"
    >
      <Logo size="bg" className="mb-[20px]" />
      <fieldset className="mb-[25px] flex w-full flex-col gap-y-[20px]">
        <fieldset className="flex flex-col gap-y-[3px]">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            error={errors.email}
            {...register("email")}
          />
          <ErrorMessage error={errors.email} />
        </fieldset>
        <fieldset className="flex flex-col gap-y-[3px]">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            toggleShowPassword
            error={errors.password}
            {...register("password")}
          />
          <ErrorMessage error={errors.password} />
        </fieldset>
      </fieldset>
      <Button type="submit" isLoading={isLoading}>
        Login
      </Button>
    </form>
  );
};
