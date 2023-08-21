import { useState } from 'react';

export function useModal() {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
    document.body.style.overflowY = openModal ? 'auto' : 'hidden';
  };
  return { openModal, toggleModal };
}
