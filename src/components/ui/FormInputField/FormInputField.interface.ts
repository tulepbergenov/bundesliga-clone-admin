import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IFormInputField
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLFieldSetElement>,
    HTMLFieldSetElement
  > {}
