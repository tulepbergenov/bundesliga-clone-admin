import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface IInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  toggleShowPassword?: boolean;
  error?: IError | any;
}

interface IError {
  message: string;
}
