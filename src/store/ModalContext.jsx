import React, { useState } from "react";

export const ModalContext = React.createContext({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

const ModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
