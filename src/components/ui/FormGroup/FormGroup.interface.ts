import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IFormGroup
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLFieldSetElement>,
    HTMLFieldSetElement
  > {}
