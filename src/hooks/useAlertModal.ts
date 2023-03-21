import { useCallback, useMemo, useState } from "react";

export const useAlertModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number | undefined>();

  const onOpenAlert = useCallback((id: number) => {
    setSelectedItemId(id);

    setIsOpen(true);
  }, []);

  const onCloseAlert = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(() => {
    return { isOpen, onOpenAlert, onCloseAlert, selectedItemId };
  }, [isOpen, onOpenAlert, selectedItemId, onCloseAlert]);

  return value;
};
