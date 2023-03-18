import {
  DetailedHTMLProps,
  LabelHTMLAttributes,
  PropsWithChildren,
} from "react";

export interface ILabel
  extends PropsWithChildren,
    DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  required?: boolean;
}
