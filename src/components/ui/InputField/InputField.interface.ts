import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export interface IInputField
  extends PropsWithChildren,
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
