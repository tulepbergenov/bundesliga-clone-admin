import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IErrorMessage
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  error: any;
}
