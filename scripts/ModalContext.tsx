import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextProps {
  modalVisible: boolean;
  handleOpenModal: () => void;
  setModalVisible: (visible: boolean) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  return (
    <ModalContext.Provider value={{ modalVisible, handleOpenModal, setModalVisible }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
