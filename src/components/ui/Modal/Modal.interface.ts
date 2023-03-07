import { PropsWithChildren } from "react";

export interface IModal extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
}
