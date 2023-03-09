import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export interface IErrorMessage
  extends PropsWithChildren,
    DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    > {}
