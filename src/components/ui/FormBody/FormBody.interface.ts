import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IFormBody
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLFieldSetElement>,
    HTMLFieldSetElement
  > {}
