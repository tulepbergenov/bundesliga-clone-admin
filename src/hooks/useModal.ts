import { useCallback, useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    handleCloseModal,
    handleOpenModal,
  };
};
