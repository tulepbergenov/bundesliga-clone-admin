import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export interface ITableWrapper
  extends PropsWithChildren,
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
