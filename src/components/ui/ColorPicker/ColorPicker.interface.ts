import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface IColorPicker
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}
