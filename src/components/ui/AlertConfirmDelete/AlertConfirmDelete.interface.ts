export interface IAlertConfirmDelete {
  isOpen: boolean;
  onCloseModal: () => void;
  selectedItemId: number | undefined;
  nameItems: "articles" | "footballers";
}
