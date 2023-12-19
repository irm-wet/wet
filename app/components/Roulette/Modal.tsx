import { createContext, ReactNode, useContext, useState } from 'react';

interface IModalContext {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<IModalContext | undefined>(undefined);

interface IModalProps {
  children: ReactNode;
}

function ModalRoot({ children }: IModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
    console.log('모달 열림');
  };

  const closeModal = () => {
    setIsOpen(false);
    console.log('토글 닫힘');
  };

  const modalProps = {
    isOpen,
    openModal,
    closeModal,
  };

  return <ModalContext.Provider value={modalProps}>{children}</ModalContext.Provider>;
}

const OpenButton = ({ children }: IModalProps) => {
  const { openModal } = useContext(ModalContext) as IModalContext;

  return (
    <button className="text-blue-600" onClick={openModal}>
      {children}
    </button>
  );
};

const ModalOverlay = () => {
  const { isOpen, closeModal } = useContext(ModalContext) as IModalContext;

  return <>{isOpen && <div className="fixed bg-black opacity-30 inset-0" onClick={closeModal} />}</>;
};

const ModalContents = ({ children }: IModalProps) => {
  const { isOpen } = useContext(ModalContext) as IModalContext;

  return <>{isOpen && <div className="fixed bg-white">{children}</div>}</>;
};

const ModalTitle = ({ children }: IModalProps) => {
  return <span>{children}</span>;
};

const ModalBody = ({ children }: IModalProps) => {
  return <div>{children}</div>;
};

const CloseButton = () => {
  const { closeModal } = useContext(ModalContext) as IModalContext;

  return <button onClick={closeModal}>닫기</button>;
};

export const Modal = Object.assign(ModalRoot, {
  OpenButton: OpenButton,
  CloseButton: CloseButton,
  Overlay: ModalOverlay,
  Contents: ModalContents,
  Title: ModalTitle,
  Body: ModalBody,
});
