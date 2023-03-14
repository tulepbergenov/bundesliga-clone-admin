import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";
import { IModalConfirmDelete } from "./ModalConfirmDelete.interface";

export const ModalConfirmDelete = ({ onClose }: IModalConfirmDelete) => {
  return (
    <div className="flex min-h-[200px] w-[400px] justify-center p-[20px]">
      <ButtonGroup>
        <Button type="button" bg="ghost" onClick={onClose}>
          Close
        </Button>
        <Button type="button" className="bg-[#EF4444]">
          Delete
        </Button>
      </ButtonGroup>
    </div>
  );
};
