import {
  DetailedHTMLProps,
  FieldsetHTMLAttributes,
  PropsWithChildren,
} from "react";

export interface IFormGroup
  extends PropsWithChildren,
    DetailedHTMLProps<
      FieldsetHTMLAttributes<HTMLFieldSetElement>,
      HTMLFieldSetElement
    > {}
