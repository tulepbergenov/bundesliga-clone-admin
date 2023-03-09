import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export interface IButtonGroup
  extends PropsWithChildren,
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  itemPosition?: "start" | "center" | "end";
}
