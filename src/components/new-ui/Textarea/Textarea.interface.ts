import {
  DetailedHTMLProps,
  PropsWithChildren,
  TextareaHTMLAttributes,
} from "react";

export interface ITextarea
  extends PropsWithChildren,
    DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    > {}
