import {
  DetailedHTMLProps,
  FieldsetHTMLAttributes,
  PropsWithChildren,
} from "react";

export interface IFormBody
  extends PropsWithChildren,
    DetailedHTMLProps<
      FieldsetHTMLAttributes<HTMLFieldSetElement>,
      HTMLFieldSetElement
    > {}
