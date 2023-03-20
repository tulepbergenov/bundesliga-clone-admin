import { useCallback, useMemo, useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(() => {
    return { isOpen, onOpenModal, onCloseModal };
  }, [isOpen]);

  return value;
};
