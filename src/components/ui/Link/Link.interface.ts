import { PropsWithChildren } from "react";
import { LinkProps } from "react-router-dom";

export interface ILink extends LinkProps, PropsWithChildren {
  apperience?: "button" | "link";
}
