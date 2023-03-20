import { LinkProps } from "react-router-dom";

export interface ILink extends LinkProps {
  apperience?: "button" | "link" | "backLink";
}
