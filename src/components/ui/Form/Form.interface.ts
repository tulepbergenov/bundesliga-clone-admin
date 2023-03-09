import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export interface IForm
  extends PropsWithChildren,
    DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {}
