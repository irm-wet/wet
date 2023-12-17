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

export function Modal({ children }: IModalProps) {
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

  return (
    <ModalContext.Provider value={modalProps}>{children}</ModalContext.Provider>
  );
}

export const OpenButton = ({ children }: IModalProps) => {
  const { openModal } = useContext(ModalContext) as IModalContext;

  return (
    <button className='text-blue-600' onClick={openModal}>
      {children}
    </button>
  );
};

export const ModalOverlay = () => {
  const { isOpen, closeModal } = useContext(ModalContext) as IModalContext;

  return (
    <>
      {isOpen && (
        <div
          className='fixed bg-black opacity-30 inset-0'
          onClick={closeModal}
        />
      )}
    </>
  );
};

export const ModalContents = ({ children }: IModalProps) => {
  const { isOpen } = useContext(ModalContext) as IModalContext;

  return (
    <>
      {isOpen && (
        <div className='flex flex-col fixed p-20  justify-center items-center bg-white'>
          {children}
        </div>
      )}
    </>
  );
};

export const ModalTitle = ({ children }: IModalProps) => {
  return <span>{children}</span>;
};

export const ModalBody = () => {
  return <div>모달 내용</div>;
};

export const CloseButton = () => {
  const { closeModal } = useContext(ModalContext) as IModalContext;

  return <button onClick={closeModal}>닫기</button>;
};

Modal.OpenButton = OpenButton;
Modal.CloseButton = CloseButton;
Modal.ModalOverlay = ModalOverlay;
Modal.ModalContents = ModalContents;
Modal.ModalTitle = ModalTitle;
Modal.ModalBody = ModalBody;
