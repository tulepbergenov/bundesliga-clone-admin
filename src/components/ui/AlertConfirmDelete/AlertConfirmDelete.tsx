import { Dialog } from "@headlessui/react";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { IAlertConfirmDelete } from "./AlertConfirmDelete.interface";

export const AlertConfirmDelete = ({
  onCloseModal,
  isOpen,
  selectedItemId,
}: IAlertConfirmDelete) => {
  return (
    <Modal isOpen={isOpen} onCloseModal={onCloseModal}>
      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
        <Dialog.Title
          as="h3"
          className="text-center text-lg font-medium leading-6 text-gray-900"
        >
          Are you sure you want to remove the item? {selectedItemId}
        </Dialog.Title>
        <div className="mt-4 flex items-center justify-center gap-x-4">
          <button
            type="button"
            className="inline-block rounded-[4px] border border-[#64748B] px-[15px] py-[7px] text-[12px] font-extrabold leading-[19px] text-[#64748B] shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
            onClick={onCloseModal}
          >
            No
          </button>
          <Button type="button" className="bg-[#EF4444]">
            Yes
          </Button>
        </div>
      </Dialog.Panel>
    </Modal>
  );
};
