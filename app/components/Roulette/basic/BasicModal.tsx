import { Modal } from '@/app/components/Roulette/Modal';

function BasicModal() {
  return (
    <Modal>
      <Modal.OpenButton>Basic Modal</Modal.OpenButton>
      <Modal.ModalOverlay />
      <Modal.ModalContents>
        <Modal.ModalTitle>모달 타이틀</Modal.ModalTitle>
        <Modal.ModalBody />
        <Modal.CloseButton />
      </Modal.ModalContents>
    </Modal>
  );
}
export default BasicModal;
