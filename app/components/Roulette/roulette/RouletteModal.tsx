import { Modal } from '../Modal';
import { Roulette } from './Roulette';

function RouletteModal() {
  return (
    <Modal>
      <Modal.OpenButton>Roulette Modal</Modal.OpenButton>
      <Modal.Overlay />
      <Modal.Contents>
        <Roulette>
          <Roulette.Contents>
            <Roulette.Slot />
            <Roulette.Buttons>
              <Roulette.RollButton>Roll</Roulette.RollButton>
              <Roulette.StopButton>Stop</Roulette.StopButton>
            </Roulette.Buttons>
          </Roulette.Contents>
        </Roulette>
      </Modal.Contents>
    </Modal>
  );
}
export default RouletteModal;
