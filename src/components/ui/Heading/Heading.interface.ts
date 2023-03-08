import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export interface IHeading
  extends PropsWithChildren,
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
