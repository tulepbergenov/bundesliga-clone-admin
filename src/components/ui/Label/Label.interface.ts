import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export interface ILable
  extends PropsWithChildren,
    DetailedHTMLProps<HTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  required?: boolean;
}
