import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export interface IFieldset
  extends PropsWithChildren,
    DetailedHTMLProps<
      HTMLAttributes<HTMLFieldSetElement>,
      HTMLFieldSetElement
    > {}
