export interface IAlertConfirmDelete {
  isOpen: boolean;
  onCloseModal: () => void;
  selectedItemId: number | undefined;
}
