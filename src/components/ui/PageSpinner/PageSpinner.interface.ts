import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IPageSpinner
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isLoading: boolean;
}
