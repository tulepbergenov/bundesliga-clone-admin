import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export interface ITooltip
  extends PropsWithChildren,
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  label: string;
}
