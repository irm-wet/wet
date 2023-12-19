import { Modal } from '../Modal';

function BasicModal() {
  return (
    <Modal>
      <Modal.OpenButton>Basic Modal</Modal.OpenButton>
      <Modal.Overlay />
      <Modal.Contents>
        <Modal.Title>모달 타이틀</Modal.Title>
        <Modal.Body>모달 내용</Modal.Body>
        <Modal.CloseButton />
      </Modal.Contents>
    </Modal>
  );
}
export default BasicModal;
