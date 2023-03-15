import { PropsWithChildren } from "react";
import { LinkProps } from "react-router-dom";

export interface ILink extends PropsWithChildren, LinkProps {
  apperience?: "button" | "link" | "backLink";
}
