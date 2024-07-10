// modalFunctions.ts
import { useState } from "react";

const useModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  return {
    modalVisible,
    handleOpenModal,
    setModalVisible,
  };
};

export default useModal;
