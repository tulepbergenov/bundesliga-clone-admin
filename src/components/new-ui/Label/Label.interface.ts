import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export interface ILabel
  extends PropsWithChildren,
    DetailedHTMLProps<HTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  required?: boolean;
}
