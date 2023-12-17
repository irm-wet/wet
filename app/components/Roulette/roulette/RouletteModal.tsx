import { Modal } from '@/app/components/Roulette/Modal';
import Roulette from './Roulette';

function RouletteModal() {
  return (
    <Modal>
      <Modal.OpenButton>Roulette Modal</Modal.OpenButton>
      <Modal.ModalOverlay />
      <Modal.ModalContents>
        <Roulette>
          <Roulette.RouletteContainer>
            <Roulette.RouletteSlot />
            <Roulette.RouletteBottons>
              <Roulette.RouletteRollBotton>Roll</Roulette.RouletteRollBotton>
              <Roulette.RouletteStopButton>Stop</Roulette.RouletteStopButton>
            </Roulette.RouletteBottons>
          </Roulette.RouletteContainer>
        </Roulette>
      </Modal.ModalContents>
    </Modal>
  );
}
export default RouletteModal;
